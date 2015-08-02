use libc;
use std::sync::{Once, ONCE_INIT};
use std::mem;
//use std::rt;

pub const WSADESCRIPTION_LEN: usize = 256;
pub const WSASYS_STATUS_LEN: usize = 128;

#[repr(C)]
#[cfg(target_arch = "x86")]
#[allow(non_snake_case)]
pub struct WSADATA {
    pub wVersion: libc::WORD,
    pub wHighVersion: libc::WORD,
    pub szDescription: [u8; WSADESCRIPTION_LEN + 1],
    pub szSystemStatus: [u8; WSASYS_STATUS_LEN + 1],
    pub iMaxSockets: u16,
    pub iMaxUdpDg: u16,
    pub lpVendorInfo: *mut u8,
}
#[repr(C)]
#[cfg(target_arch = "x86_64")]
#[allow(non_snake_case)]
pub struct WSADATA {
    pub wVersion: libc::WORD,
    pub wHighVersion: libc::WORD,
    pub iMaxSockets: u16,
    pub iMaxUdpDg: u16,
    pub lpVendorInfo: *mut u8,
    pub szDescription: [u8; WSADESCRIPTION_LEN + 1],
    pub szSystemStatus: [u8; WSASYS_STATUS_LEN + 1],
}

pub type LPWSADATA = *mut WSADATA;

#[link(name = "ws2_32")]
#[link(name = "userenv")]
extern "system" {
	pub fn WSAStartup(wVersionRequested: libc::WORD, lpWSAData: LPWSADATA) -> libc::c_int;
	pub fn WSACleanup() -> libc::c_int;
}

/// Init winsock by calling `WSAStartup`
pub fn init() {
    static START: Once = ONCE_INIT;

    START.call_once(|| unsafe {
        let mut data: WSADATA = mem::zeroed();
        let ret = WSAStartup(0x202, // version 2.2
                                &mut data);
        assert_eq!(ret, 0);

//        let _ = rt::at_exit(|| { WSACleanup(); });
    });
}