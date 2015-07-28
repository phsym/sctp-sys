![License](http://img.shields.io/badge/license-MIT-lightgrey.svg)
[![Build Status](https://travis-ci.org/phsym/sctp-sys.svg)](https://travis-ci.org/phsym/sctp-sys)
[![Crates.io](https://img.shields.io/crates/v/sctp-sys.svg)](https://crates.io/crates/sctp-sys)

# sctp-sys

Rust bindings to native sctp library.
Under linux, libsctp is used and under windows, SctpDrv is used. However, SctpDrv is not really stable, and some BSOD cases have been reported.
Thus, you should not use windows SCTP in production environment, but it still may be usefull for development.

# How to build

## Linux
Building in linux requires the **libsctp** usually provided by **lksctp-tools** development package.

## Windows
Building in windows requires the **SctpDrv** driver to be installed, and the file **libsctpsp.dll** should be stored in a place where cargo can find it.

[SctpDrv homepage](http://www.bluestop.org/SctpDrv/)

[SctpDrv repository](https://bitbucket.org/brucec/sctpdrv)


# Note

MAC OS is not supported. Or maybe it is, I don't even know if it's supported and I don't have the required hardware to verify. Any contribution would be welcome.

SctpDrv is not stable, especially in Windows 7 for which BSOD have been reported multiple times, and issues have not been fixed for years.
I got a BSOD on my Windows 7 SP1 (64 bits) each time I try to connect a socket. So I can't go further in any kind of validation under windows. When I get more time, I'll try it on other windows versions.
Consequently, using SCTP in windows environment should be avoided as much as possible. 
