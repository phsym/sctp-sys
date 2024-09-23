// Copyright 2019 sctp-sys Developers
//
// Licensed under the Apache License, Version 2.0, <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

//! Quick and (very) dirty example.
//! Not many checks are performed

extern crate libc;
extern crate sctp_sys;
extern crate winapi;

use sctp_sys::*;

use std::mem::transmute;
use std::net::Ipv4Addr;
use std::str::{from_utf8, FromStr};
use std::sync::{Arc, Barrier};
use std::thread;

#[cfg(target_os = "linux")]
mod imports {
    pub use libc::{
        accept, c_int as SOCKET, close, listen, recv, send, sockaddr_in, socket, AF_INET,
        SOCK_STREAM,
    };
    pub type Buflen = usize;
    pub fn check_sock(sock: SOCKET) {
        assert!(sock >= 0, "Cannot create socket");
    }
}
#[cfg(target_os = "windows")]
mod imports {
    pub use winapi::shared::ws2def::{AF_INET, SOCKADDR_IN as sockaddr_in, SOCK_STREAM};
    pub use winapi::um::winsock2::{
        accept, closesocket as close, listen, recv, send, socket, INVALID_SOCKET, SOCKET,
    };
    pub type Buflen = i32;
    pub fn check_sock(sock: SOCKET) {
        assert!(sock != INVALID_SOCKET, "Cannot create socket");
    }
}
use crate::imports::*;

fn main() {
    println!("Hello, world!");

    // sctp_sys::winsock::init();

    let rdv = Arc::new(Barrier::new(2));

    let th = {
        let rdv = rdv.clone();
        thread::spawn(|| run_server(rdv))
    };

    unsafe {
        let sock = socket(AF_INET, SOCK_STREAM, IPPROTO_SCTP);
        check_sock(sock);

        let ip = Ipv4Addr::from_str("127.0.0.1").unwrap();
        let addr = sockaddr_in {
            sin_family: AF_INET as u16,
            sin_port: 3868u16.to_be(),
            sin_addr: transmute(ip.octets()),
            sin_zero: [0; 8],
        };
        let mut assoc: sctp_assoc_t = 0;
        rdv.wait();
        println!("connecting");
        //	    let res = connect(sock, transmute(&addr), std::mem::size_of::<sockaddr_in>() as u32);
        let res = sctp_connectx(sock, transmute(&addr), 1, &mut assoc as *mut sctp_assoc_t);
        assert!(res == 0, "Cannot connect");
        println!("assoc : {}", assoc);
        let mut buf = [0u8; 1024];
        let rec = recv(sock, transmute(&mut buf), 1024, 0);
        assert!(rec > 0, "No data recived");
        print!("rec : {} ", rec);
        println!(
            "-> {}",
            from_utf8(&buf[0..rec as usize])
                .ok()
                .expect("cannot decode string")
        );
        close(sock);
    }

    th.join().unwrap();
}

fn run_server(rdv: Arc<Barrier>) {
    unsafe {
        println!("Starting server");
        let sock = socket(AF_INET, SOCK_STREAM, IPPROTO_SCTP);
        check_sock(sock);

        let ip = Ipv4Addr::from_str("127.0.0.1").unwrap();
        let mut addr = sockaddr_in {
            sin_family: AF_INET as u16,
            sin_port: 3868u16.to_be(),
            sin_addr: transmute(ip.octets()),
            sin_zero: [0; 8],
        };
        sctp_bindx(sock, transmute(&mut addr), 1, consts::SCTP_BINDX_ADD_ADDR);
        listen(sock, 1);
        let mut l = 0;
        rdv.wait();
        println!("Accepting connection");
        let cli = accept(sock, transmute(&mut addr), &mut l);
        println!("Connection received");
        check_sock(cli);
        let buf = "Hello World\n".as_bytes();
        send(cli, transmute(buf.as_ptr()), buf.len() as Buflen, 0);
        close(cli);
        close(sock);
    }
}
