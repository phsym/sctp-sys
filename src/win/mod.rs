pub mod winsock;
pub mod consts;
pub use self::consts::*;

use libc::{c_int, size_t, c_ulong, c_ushort, c_void, ssize_t};
use winapi::winsock2::SOCKET;
use winapi::ws2def::SOCKADDR as sockaddr;
use winapi::ws2tcpip::socklen_t;
use super::common::{sctp_assoc_t, sctp_sndrcvinfo};

extern "system" {
	fn internal_sctp_bindx(sock: SOCKET, sock_addr: *mut sockaddr, num: c_int, ty: c_int) -> c_int;
	fn internal_sctp_connectx(sock: SOCKET, sock_addr: *mut sockaddr, addrcnt: c_int,  assoc: *mut sctp_assoc_t) -> c_int;
	fn internal_sctp_freepaddrs(addrs: *mut sockaddr);
	fn internal_sctp_freeladdrs(addrs: *mut sockaddr);
	fn internal_sctp_getaddrlen(family: c_int) -> c_int;
	fn internal_sctp_getassocid(s: SOCKET, addr: *mut sockaddr) -> sctp_assoc_t;
	fn internal_sctp_getpaddrs(s: SOCKET, assoc: sctp_assoc_t, addrs: *mut *mut sockaddr) -> c_int;
	fn internal_sctp_getladdrs(s: SOCKET, assoc: sctp_assoc_t, addrs: *mut *mut sockaddr) -> c_int;
	fn internal_sctp_opt_info(s: SOCKET, assoc: sctp_assoc_t, opt: c_int, arg: *mut c_void, size: *mut socklen_t) -> c_int;
	fn internal_sctp_peeloff(s: SOCKET, assoc: sctp_assoc_t) -> c_int;
	fn internal_sctp_recvmsg(s: SOCKET, msg: *mut c_void, len: size_t, from: *mut sockaddr, fromlen: *mut socklen_t, sinfo: *mut sctp_sndrcvinfo, flags: *mut c_int) -> ssize_t;
	fn internal_sctp_send(s: SOCKET, msg: *const c_void, len: size_t, sinfo: *const sctp_sndrcvinfo, flags: c_int) -> ssize_t;
	fn internal_sctp_sendx(s: SOCKET, msg: *const c_void, len: size_t, addrs: *mut sockaddr, addrcnt: c_int, sinfo: *const sctp_sndrcvinfo, flags: c_int) -> ssize_t;
	fn internal_sctp_sendmsg(s: SOCKET, msg: *const c_void, len: size_t, to: *const sockaddr, tolen: socklen_t, ppid: c_ulong, flags: c_ulong, stream_no: c_ushort, ttl: c_ulong, ctx: c_ulong) -> ssize_t;
	fn internal_sctp_sendmsgx(s: SOCKET, msg: *const c_void, len: size_t, to: *const sockaddr, addr_cnt: c_int, ppid: c_ulong, flags: c_ulong, stream_no: c_ushort, ttl: c_ulong, ctx: c_ulong) -> ssize_t;
}

#[inline(always)]
pub unsafe fn sctp_bindx(sock: SOCKET, sock_addr: *mut sockaddr, num: c_int, ty: c_int) -> c_int {
	return internal_sctp_bindx(sock, sock_addr, num, ty);
}

#[inline(always)]
pub unsafe fn sctp_connectx(sock: SOCKET, sock_addr: *mut sockaddr, addrcnt: c_int,  assoc: *mut sctp_assoc_t) -> c_int {
	return internal_sctp_connectx(sock, sock_addr, addrcnt,  assoc);
}

#[inline(always)]
pub unsafe fn sctp_freepaddrs(addrs: *mut sockaddr) {
	internal_sctp_freepaddrs(addrs);
}

#[inline(always)]
pub unsafe fn sctp_freeladdrs(addrs: *mut sockaddr) {
	internal_sctp_freeladdrs(addrs);
}

#[inline(always)]
pub unsafe fn sctp_getaddrlen(family: c_int) -> c_int {
	return internal_sctp_getaddrlen(family);
}

#[inline(always)]
pub unsafe fn sctp_getassocid(s: SOCKET, addr: *mut sockaddr) -> sctp_assoc_t {
	return internal_sctp_getassocid(s, addr);
}

#[inline(always)]
pub unsafe fn sctp_getpaddrs(s: SOCKET, assoc: sctp_assoc_t, addrs: *mut *mut sockaddr) -> c_int {
	return internal_sctp_getpaddrs(s, assoc, addrs);
}

#[inline(always)]
pub unsafe fn sctp_getladdrs(s: SOCKET, assoc: sctp_assoc_t, addrs: *mut *mut sockaddr) -> c_int {
	return internal_sctp_getladdrs(s, assoc, addrs);
}

#[inline(always)]
pub unsafe fn sctp_opt_info(s: SOCKET, assoc: sctp_assoc_t, opt: c_int, arg: *mut c_void, size: *mut socklen_t) -> c_int {
	return internal_sctp_opt_info(s, assoc, opt, arg, size);
}

#[inline(always)]
pub unsafe fn sctp_peeloff(s: SOCKET, assoc: sctp_assoc_t) -> c_int {
	return internal_sctp_peeloff(s, assoc);
}

#[inline(always)]
pub unsafe fn sctp_recvmsg(s: SOCKET, msg: *mut c_void, len: size_t, from: *mut sockaddr, fromlen: *mut socklen_t, sinfo: *mut sctp_sndrcvinfo, flags: *mut c_int) -> ssize_t {
	return internal_sctp_recvmsg(s, msg, len, from, fromlen, sinfo, flags);
}

#[inline(always)]
pub unsafe fn sctp_send(s: SOCKET, msg: *const c_void, len: size_t, sinfo: *const sctp_sndrcvinfo, flags: c_int) -> ssize_t {
	return internal_sctp_send(s, msg, len, sinfo, flags);
}

#[inline(always)]
pub unsafe fn sctp_sendx(s: SOCKET, msg: *const c_void, len: size_t, addrs: *mut sockaddr, addrcnt: c_int, sinfo: *const sctp_sndrcvinfo, flags: c_int) -> ssize_t {
	return internal_sctp_sendx(s, msg, len, addrs, addrcnt, sinfo, flags);
}

#[inline(always)]
pub unsafe fn sctp_sendmsg(s: SOCKET, msg: *const c_void, len: size_t, to: *const sockaddr, tolen: socklen_t, ppid: c_ulong, flags: c_ulong, stream_no: c_ushort, ttl: c_ulong, ctx: c_ulong) -> ssize_t {
	return internal_sctp_sendmsg(s, msg, len, to, tolen, ppid, flags, stream_no, ttl, ctx);
}

#[inline(always)]
pub unsafe fn sctp_sendmsgx(s: SOCKET, msg: *const c_void, len: size_t, to: *const sockaddr, addr_cnt: c_int, ppid: c_ulong, flags: c_ulong, stream_no: c_ushort, ttl: c_ulong, ctx: c_ulong) -> ssize_t {
	return internal_sctp_sendmsgx(s, msg, len, to, addr_cnt, ppid, flags, stream_no, ttl, ctx);
}
