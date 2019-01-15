// Copyright 2019 sctp-sys Developers
//
// Licensed under the Apache License, Version 2.0, <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

//! This crate provides a binding to SCTP libraries.
//!
//! Under Linux, the crate is bound to libsctp provided by lksctp-tools,
//! and under Windows, it is bound to libsctpsp provided by SctpDrv. However,
//! SctpDrv is unstable in Windows 7 and can cause BSOD.
//!
//! # Note
//! When using sctp-sys in Windows, `sctp_sys::win::winsock::init()` must be called
//! before doing anything, in order to startup winsock (with `WSAStartup` system call)

extern crate libc;
extern crate winapi;

#[cfg(target_os="windows")]
pub mod win;
#[cfg(target_os="windows")]
pub use crate::win::*;

#[cfg(target_os="linux")]
pub mod linux;
#[cfg(target_os="linux")]
pub use crate::linux::*;

pub mod common;
pub use crate::common::*;
