![License](http://img.shields.io/badge/license-MIT-lightgrey.svg)
[![Crates.io](https://img.shields.io/crates/v/sctp-sys.svg)](https://crates.io/crates/sctp-sys)

# sctp-sys

Rust bindings to native sctp library.
Under linux, libsctp is used and under windows, SctpDrv is used. However, SctpDrv is not really stable, and some BSOD cases have been reported.
Thus, you should not use windows SCTP in production environment, but it still may be usefull for development.

# How to build

TBD ...
