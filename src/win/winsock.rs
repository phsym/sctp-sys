use libc::c_int;
use winapi::{WORD, WSADATA, LPWSADATA};
use std::sync::{Once, ONCE_INIT};
use std::mem;
//use std::rt;

#[link(name = "ws2_32")]
#[link(name = "userenv")]
extern "system" {
	pub fn WSAStartup(wVersionRequested: WORD, lpWSAData: LPWSADATA) -> c_int;
	pub fn WSACleanup() -> c_int;
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
