extern crate libc;
extern crate sctp_sys;

use sctp_sys::{sctp_connectx, sctp_assoc_t, IPPROTO_SCTP};

use libc::{AF_INET, SOCK_STREAM, IPPROTO_TCP, socket, connect, sockaddr_in, sockaddr, recv};

use std::net::Ipv4Addr;
use std::str::{FromStr, from_utf8};
use std::mem::transmute;

fn main() {
    println!("Hello, world!");
//    sctp_sys::winsock::init();
    unsafe{
//    	let sock = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    	let sock = socket(AF_INET, SOCK_STREAM, IPPROTO_SCTP);
    	println!("sock = {}", sock);
    	
    	let ip = Ipv4Addr::from_str("127.0.0.1").unwrap();
	    let addr = sockaddr_in {
	    	sin_family: AF_INET as u16,
	    	sin_port: 3868u16.to_be(),
	    	sin_addr: transmute(ip.octets()),
	    	sin_zero: [0; 8]
	    };
	    let mut assoc: sctp_assoc_t = 0;
	    println!("connecting");
//	    let res = connect(sock, transmute(&addr), std::mem::size_of::<sockaddr_in>() as u32);
    	let res = sctp_connectx(sock, transmute(&addr), 1, &mut assoc as *mut sctp_assoc_t);
    	println!("res : {}, assoc : {}", res, assoc);
	    let mut buf = [0u8; 1024];
	    let rec = recv(sock, transmute(&mut buf), 1024, 0);
	    println!("rec : {} -> {}", rec, from_utf8(&buf[0..rec as usize]).ok().expect("cannot decode string"));
    }
}
