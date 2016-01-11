// Copyright 2016 sctp-sys Developers
//
// Licensed under the Apache License, Version 2.0, <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

use libc::c_int;

pub const SCTP_BINDX_ADD_ADDR: c_int =		0x00008001;
pub const SCTP_BINDX_REM_ADDR: c_int =		0x00008002;


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




/*
 * user socket options: socket API defined
 */
/*
 * read-write options
 */
pub const SCTP_RTOINFO: c_int = 0x00000001;
pub const SCTP_ASSOCINFO: c_int = 0x00000002;
pub const SCTP_INITMSG: c_int = 0x00000003;
pub const SCTP_NODELAY: c_int = 0x00000004;
pub const SCTP_AUTOCLOSE: c_int = 0x00000005;
pub const SCTP_SET_PEER_PRIMARY_ADDR: c_int = 0x00000006;
pub const SCTP_PRIMARY_ADDR: c_int = 0x00000007;
pub const SCTP_ADAPTATION_LAYER: c_int = 0x00000008;
/* same as above */
pub const SCTP_ADAPTION_LAYER: c_int = 0x00000008;
pub const SCTP_DISABLE_FRAGMENTS: c_int = 0x00000009;
pub const SCTP_PEER_ADDR_PARAMS: c_int = 0x0000000a;
pub const SCTP_DEFAULT_SEND_PARAM: c_int = 0x0000000b;
/* ancillary data/notification interest options */
pub const SCTP_EVENTS: c_int = 0x0000000c;
/* Without this applied we will give V4 and V6 addresses on a V6 socket */
pub const SCTP_I_WANT_MAPPED_V4_ADDR: c_int = 0x0000000d;
pub const SCTP_MAXSEG: c_int = 0x0000000e;
pub const SCTP_DELAYED_SACK: c_int = 0x0000000f;
pub const SCTP_FRAGMENT_INTERLEAVE: c_int = 0x00000010;
pub const SCTP_PARTIAL_DELIVERY_POINT: c_int = 0x00000011;
/* authentication support */
pub const SCTP_AUTH_CHUNK: c_int = 0x00000012;
pub const SCTP_AUTH_KEY: c_int = 0x00000013;
pub const SCTP_HMAC_IDENT: c_int = 0x00000014;
pub const SCTP_AUTH_ACTIVE_KEY: c_int = 0x00000015;
pub const SCTP_AUTH_DELETE_KEY: c_int = 0x00000016;
pub const SCTP_USE_EXT_RCVINFO: c_int = 0x00000017;
pub const SCTP_AUTO_ASCONF: c_int = 0x00000018 /* rw */;
pub const SCTP_MAXBURST: c_int = 0x00000019 /* rw */;
pub const SCTP_MAX_BURST: c_int = 0x00000019 /* rw */;
/* assoc level context */
pub const SCTP_CONTEXT: c_int = 0x0000001a /* rw */;
/* explict EOR signalling */
pub const SCTP_EXPLICIT_EOR: c_int = 0x0000001b;
pub const SCTP_REUSE_PORT: c_int = 0x0000001c /* rw */;
pub const SCTP_AUTH_DEACTIVATE_KEY: c_int = 0x0000001d;

/*
 * read-only options
 */
pub const SCTP_STATUS: c_int = 0x00000100;
pub const SCTP_GET_PEER_ADDR_INFO: c_int = 0x00000101;
/* authentication support */
pub const SCTP_PEER_AUTH_CHUNKS: c_int = 0x00000102;
pub const SCTP_LOCAL_AUTH_CHUNKS: c_int = 0x00000103;
pub const SCTP_GET_ASSOC_NUMBER: c_int = 0x00000104 /* ro */;
pub const SCTP_GET_ASSOC_ID_LIST: c_int = 0x00000105 /* ro */;
