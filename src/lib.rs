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

#[cfg(target_os="windows")]
pub mod win;
#[cfg(target_os="windows")]
pub use win::*;

#[cfg(target_os="linux")]
pub mod linux;
#[cfg(target_os="linux")]
pub use linux::*;

pub mod common;
pub use self::common::*;