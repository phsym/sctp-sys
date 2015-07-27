use libc::{c_int, c_uint};

pub const IPPROTO_SCTP: c_int = 132;
pub const SOCK_SEQPACKET: c_int = 5;

pub const SCTP_BINDX_ADD_ADDR: c_int = 0x01;
pub const SCTP_BINDX_REM_ADDR: c_int = 0x02;


// Flags
/// Start a shutdown procedures
pub const SCTP_EOF: u16 =          0x0100;
///Send an ABORT to peer
pub const SCTP_ABORT: u16 =        0x0200;
/// Message is un-ordered
pub const SCTP_UNORDERED: u16 =    0x0400;
/// Override the primary-address
pub const SCTP_ADDR_OVER: u16 =    0x0800;
/// Send this on all associations for the endpoint
pub const SCTP_SENDALL: u16 =      0x1000;

// The lower byte is an enumeration of PR-SCTP policies
/// Time based PR-SCTP
pub const SCTP_PR_SCTP_TTL: u16 =  0x0001;
/// Buffer based PR-SCTP 
pub const SCTP_PR_SCTP_BUF: u16 =  0x0002;
/// Number of retransmissions based PR-SCTP
pub const SCTP_PR_SCTP_RTX: u16 =  0x0003;

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