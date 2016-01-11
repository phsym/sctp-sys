// Copyright 2016 sctp-sys Developers
//
// Licensed under the Apache License, Version 2.0, <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

#[cfg(target_os = "linux")]
fn main() {
	println!("cargo:rustc-flags=-l sctp");
}

#[cfg(target_os = "windows")]
fn main() {
	println!("cargo:rustc-flags=-l sctpsp");
}
