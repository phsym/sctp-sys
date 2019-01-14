// Copyright 2019 sctp-sys Developers
//
// Licensed under the Apache License, Version 2.0, <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

use libc::c_int;
use winapi::um::winsock2::{WSADATA, LPWSADATA};
use winapi::shared::minwindef::WORD;
use std::sync::{Once, ONCE_INIT};
use std::mem;

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
