#[cfg(target_os = "linux")]
fn main() {
	println!("cargo:rustc-flags=-l sctp");
}

#[cfg(target_os = "windows")]
fn main() {
	println!("cargo:rustc-flags=-l sctpsp");
}