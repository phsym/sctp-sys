
//! Quick and (very) dirty example.
//! Not many checks are performed

extern crate libc;
extern crate sctp_sys;
extern crate winapi;
extern crate ws2_32;

use sctp_sys::*;

#[cfg(not(windows))]
use libc::{AF_INET, SOCK_STREAM, socket, listen, accept, close, send, sockaddr_in, recv, c_int as SOCKET};
#[cfg(windows)]
use winapi::{AF_INET, SOCK_STREAM,SOCKET, INVALID_SOCKET, SOCKADDR_IN as sockaddr_in};
#[cfg(windows)]
use ws2_32::{socket, recv, listen, accept, send, closesocket as close};

use std::net::Ipv4Addr;
use std::str::{FromStr, from_utf8};
use std::mem::transmute;
use std::thread;
use std::sync::{Barrier, Arc};

#[cfg(windows)]
type Buflen = i32;
#[cfg(not(windows))]
type Buflen = usize;

#[cfg(not(windows))]
fn check_sock(sock: SOCKET) {
    assert!(sock >= 0, "Cannot create socket");
}

#[cfg(windows)]
fn check_sock(sock: SOCKET) {
    assert!(sock != INVALID_SOCKET, "Cannot create socket");
}

fn main() {
    println!("Hello, world!");

    let rdv = Arc::new(Barrier::new(2));

    let th = {
        let rdv = rdv.clone();
        thread::spawn(|| run_server(rdv))
    };

//    sctp_sys::winsock::init();
    unsafe{
    	let sock = socket(AF_INET, SOCK_STREAM, IPPROTO_SCTP);
        check_sock(sock);

    	let ip = Ipv4Addr::from_str("127.0.0.1").unwrap();
	    let addr = sockaddr_in {
	    	sin_family: AF_INET as u16,
	    	sin_port: 3868u16.to_be(),
	    	sin_addr: transmute(ip.octets()),
	    	sin_zero: [0; 8]
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
	    println!("-> {}", from_utf8(&buf[0..rec as usize]).ok().expect("cannot decode string"));
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
            sin_zero: [0; 8]
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
