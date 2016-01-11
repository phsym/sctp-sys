// Copyright 2016 sctp-sys Developers
//
// Licensed under the Apache License, Version 2.0, <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

use libc::c_int;

pub const SCTP_BINDX_ADD_ADDR: c_int = 0x01;
pub const SCTP_BINDX_REM_ADDR: c_int = 0x02;

/* The following symbols come from the Sockets API Extensions for
 * SCTP <draft-ietf-tsvwg-sctpsocket-07.txt>.
 */
pub const SCTP_RTOINFO: c_int =    0;
pub const SCTP_ASSOCINFO: c_int =  1;
pub const SCTP_INITMSG: c_int =    2;
pub const SCTP_NODELAY: c_int =    3;               /* Get/set nodelay option. */
pub const SCTP_AUTOCLOSE: c_int =  4;
pub const SCTP_SET_PEER_PRIMARY_ADDR: c_int = 5;
pub const SCTP_PRIMARY_ADDR: c_int =       6;
pub const SCTP_ADAPTATION_LAYER: c_int =   7;
pub const SCTP_DISABLE_FRAGMENTS: c_int =  8;
pub const SCTP_PEER_ADDR_PARAMS: c_int =   9;
pub const SCTP_DEFAULT_SEND_PARAM: c_int = 10;
pub const SCTP_EVENTS: c_int =     11;
pub const SCTP_I_WANT_MAPPED_V4_ADDR: c_int = 12;   /* Turn on/off mapped v4 addresses  */
pub const SCTP_MAXSEG: c_int =     13;              /* Get/set maximum fragment. */
pub const SCTP_STATUS: c_int =     14;
pub const SCTP_GET_PEER_ADDR_INFO: c_int = 15;
pub const SCTP_DELAYED_ACK_TIME: c_int =   16;
pub const SCTP_DELAYED_ACK: c_int = SCTP_DELAYED_ACK_TIME;
pub const SCTP_DELAYED_SACK: c_int = SCTP_DELAYED_ACK_TIME;
pub const SCTP_CONTEXT: c_int =    17;
pub const SCTP_FRAGMENT_INTERLEAVE: c_int =        18;
pub const SCTP_PARTIAL_DELIVERY_POINT: c_int =     19; /* Set/Get partial delivery point */
pub const SCTP_MAX_BURST: c_int =  20;              /* Set/Get max burst */
pub const SCTP_AUTH_CHUNK: c_int = 21;      /* Set only: add a chunk type to authenticate */
pub const SCTP_HMAC_IDENT: c_int = 22;
pub const SCTP_AUTH_KEY: c_int =   23;
pub const SCTP_AUTH_ACTIVE_KEY: c_int =    24;
pub const SCTP_AUTH_DELETE_KEY: c_int =    25;
pub const SCTP_PEER_AUTH_CHUNKS: c_int =   26;      /* Read only */
pub const SCTP_LOCAL_AUTH_CHUNKS: c_int =  27;      /* Read only */
pub const SCTP_GET_ASSOC_NUMBER: c_int =   28;      /* Read only */

pub const SCTP_GET_ASSOC_ID_LIST: c_int =  29;      /* Read only */
pub const SCTP_AUTO_ASCONF: c_int =       30;
pub const SCTP_PEER_ADDR_THLDS: c_int =    31;
pub const SCTP_RECVRCVINFO: c_int =        32;
pub const SCTP_RECVNXTINFO: c_int =        33;
pub const SCTP_DEFAULT_SNDINFO: c_int =    34;


/* Internal Socket Options. Some of the sctp library functions are
 * implemented using these socket options.
 */
pub const SCTP_SOCKOPT_BINDX_ADD: c_int =  100;     /* BINDX requests for adding addrs */
pub const SCTP_SOCKOPT_BINDX_REM: c_int =  101;     /* BINDX requests for removing addrs. */
pub const SCTP_SOCKOPT_PEELOFF: c_int =    102;     /* peel off association. */
/* Options 104-106 are deprecated and removed. Do not use this space */
pub const SCTP_SOCKOPT_CONNECTX_OLD: c_int =       107;     /* CONNECTX old requests. */
pub const SCTP_GET_PEER_ADDRS: c_int =     108;             /* Get all peer address. */
pub const SCTP_GET_LOCAL_ADDRS: c_int =    109;             /* Get all local address. */
pub const SCTP_SOCKOPT_CONNECTX: c_int =   110;             /* CONNECTX requests. */
pub const SCTP_SOCKOPT_CONNECTX3: c_int =  111;     /* CONNECTX requests (updated) */
pub const SCTP_GET_ASSOC_STATS: c_int =    112;     /* Read only */


// Flags
pub const SCTP_UNORDERED: c_int = 1;  /* Send/receive message unordered. */
pub const SCTP_ADDR_OVER: c_int = 2;  /* Override the primary destination. */
pub const SCTP_ABORT: c_int = 4;        /* Send an ABORT message to the peer. */
pub const SCTP_SACK_IMMEDIATELY: c_int = 8;      /* SACK should be sent without delay */
//pub const SCTP_EOF=MSG_FIN;    /* Initiate graceful shutdown process. */
