use libc::{c_int, size_t, c_ulong, c_ushort, c_void, ssize_t, sockaddr, socklen_t};

use super::types::{sctp_assoc_t, sctp_sndrcvinfo};

extern "system" {
	pub fn sctp_bindx(sock: c_int, sock_addr: *const sockaddr, num: c_int, ty: c_int) -> c_int;
	pub fn sctp_connectx(sock: c_int, sock_addr: *const sockaddr, addrcnt: c_int,  assoc: *mut sctp_assoc_t) -> c_int;
	pub fn sctp_freepaddrs(addrs: *const sockaddr);
	pub fn sctp_freeladdrs(addrs: *const sockaddr);
	pub fn sctp_getaddrlen(family: c_int) -> c_int;
	pub fn sctp_getassocid(s: c_int, addr: *const sockaddr) -> sctp_assoc_t;
	pub fn sctp_getpaddrs(s: c_int, assoc: sctp_assoc_t, addrs: *const *const sockaddr) -> c_int;
	pub fn sctp_getladdrs(s: c_int, assoc: sctp_assoc_t, addrs: *const *const sockaddr) -> c_int;
	pub fn sctp_opt_info(s: c_int, assoc: sctp_assoc_t, opt: c_int, arg: *const c_void, size: *const socklen_t) -> c_int;
	pub fn sctp_peeloff(s: c_int, assoc: sctp_assoc_t) -> c_int;
	pub fn sctp_recvmsg(s: c_int, msg: *const c_void, len: size_t, from: *const sockaddr, fromlen: *const socklen_t, sinfo: *const sctp_sndrcvinfo, flags: *const c_int) -> ssize_t;
	pub fn sctp_send(s: c_int, msg: *const c_void, len: size_t, sinfo: *const sctp_sndrcvinfo, flags: c_int) -> ssize_t;
	pub fn sctp_sendx(s: c_int, msg: *const c_void, len: size_t, addrs: *const sockaddr, addrcnt: c_int, sinfo: *const sctp_sndrcvinfo, flags: c_int) -> ssize_t;
	pub fn sctp_sendmsg(s: c_int, msg: *const c_void, len: size_t, to: *const sockaddr, tolen: socklen_t, ppid: c_ulong, flags: c_ulong, stream_no: c_ushort, ttl: c_ulong, ctx: c_ulong) -> ssize_t;
	pub fn sctp_sendmsgx(s: c_int, msg: *const c_void, len: size_t, to: *const sockaddr, addr_cnt: c_int, ppid: c_ulong, flags: c_ulong, stream_no: c_ushort, ttl: c_ulong, ctx: c_ulong) -> ssize_t;
}
