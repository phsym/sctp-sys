// Copyright 2016 sctp-sys Developers
//
// Licensed under the Apache License, Version 2.0, <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

pub mod consts;
pub use self::consts::*;

use libc::{c_int, size_t, c_ulong, c_ushort, c_void, ssize_t, sockaddr, socklen_t};

use super::common::{sctp_assoc_t, sctp_sndrcvinfo};

extern "system" {
	pub fn sctp_bindx(sock: c_int, sock_addr: *mut sockaddr, num: c_int, ty: c_int) -> c_int;
	pub fn sctp_connectx(sock: c_int, sock_addr: *mut sockaddr, addrcnt: c_int,  assoc: *mut sctp_assoc_t) -> c_int;
	pub fn sctp_freepaddrs(addrs: *mut sockaddr);
	pub fn sctp_freeladdrs(addrs: *mut sockaddr);
	pub fn sctp_getaddrlen(family: c_int) -> c_int;
	pub fn sctp_getpaddrs(s: c_int, assoc: sctp_assoc_t, addrs: *mut *mut sockaddr) -> c_int;
	pub fn sctp_getladdrs(s: c_int, assoc: sctp_assoc_t, addrs: *mut *mut sockaddr) -> c_int;
	pub fn sctp_opt_info(s: c_int, assoc: sctp_assoc_t, opt: c_int, arg: *mut c_void, size: *mut socklen_t) -> c_int;
	pub fn sctp_peeloff(s: c_int, assoc: sctp_assoc_t) -> c_int;
	pub fn sctp_recvmsg(s: c_int, msg: *mut c_void, len: size_t, from: *mut sockaddr, fromlen: *mut socklen_t, sinfo: *mut sctp_sndrcvinfo, flags: *mut c_int) -> ssize_t;
	pub fn sctp_send(s: c_int, msg: *const c_void, len: size_t, sinfo: *const sctp_sndrcvinfo, flags: c_int) -> ssize_t;
	pub fn sctp_sendmsg(s: c_int, msg: *const c_void, len: size_t, to: *mut sockaddr, tolen: socklen_t, ppid: c_ulong, flags: c_ulong, stream_no: c_ushort, ttl: c_ulong, ctx: c_ulong) -> ssize_t;
}
