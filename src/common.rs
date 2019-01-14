// Copyright 2019 sctp-sys Developers
//
// Licensed under the Apache License, Version 2.0, <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

use libc::{c_int, c_uint};

pub const SOL_SCTP: c_int = 132;
pub const IPPROTO_SCTP: c_int = 132;
pub const SOCK_SEQPACKET: c_int = 5;


#[allow(non_camel_case_types)]
pub type sctp_assoc_t = c_uint;

#[derive(Debug, Copy, Clone)]
#[repr(C)]
pub struct sctp_sndrcvinfo {
	/// Stream sending to
    pub sinfo_stream: u16,
    /// Valid for recv only
    pub sinfo_ssn: u16,
    /// Flags to control sending
    pub sinfo_flags: u16,
    /// ppid field
    pub sinfo_ppid: u32,
    /// context field
    pub sinfo_context: u32,
    /// timetolive for PR-SCTP
    pub sinfo_timetolive: u32,
    /// valid for recv only
    pub sinfo_tsn: u32,
    /// valid for recv only
    pub sinfo_cumtsn: u32,
    /// The association id
    pub sinfo_assoc_id: sctp_assoc_t
}
