var searchIndex = {};
searchIndex['sctp_sys'] = {"items":[[0,"","sctp_sys","",null,null],[0,"linux","","",null,null],[5,"sctp_bindx","sctp_sys::linux","",null,null],[5,"sctp_connectx","","",null,null],[5,"sctp_freepaddrs","","",null,null],[5,"sctp_freeladdrs","","",null,null],[5,"sctp_getaddrlen","","",null,null],[5,"sctp_getassocid","","",null,null],[5,"sctp_getpaddrs","","",null,null],[5,"sctp_getladdrs","","",null,null],[5,"sctp_opt_info","","",null,null],[5,"sctp_peeloff","","",null,null],[5,"sctp_recvmsg","","",null,null],[5,"sctp_send","","",null,null],[5,"sctp_sendmsg","","",null,null],[0,"common","sctp_sys","",null,null],[3,"sctp_sndrcvinfo","sctp_sys::common","",null,null],[12,"sinfo_stream","","Stream sending to",0,null],[12,"sinfo_ssn","","Valid for recv only",0,null],[12,"sinfo_flags","","Flags to control sending",0,null],[12,"sinfo_ppid","","ppid field",0,null],[12,"sinfo_context","","context field",0,null],[12,"sinfo_timetolive","","timetolive for PR-SCTP",0,null],[12,"sinfo_tsn","","valid for recv only",0,null],[12,"sinfo_cumtsn","","valid for recv only",0,null],[12,"sinfo_assoc_id","","The association id",0,null],[6,"sctp_assoc_t","","",null,null],[17,"IPPROTO_SCTP","","",null,null],[17,"SOCK_SEQPACKET","","",null,null],[17,"SCTP_BINDX_ADD_ADDR","","",null,null],[17,"SCTP_BINDX_REM_ADDR","","",null,null],[17,"SCTP_EOF","","Start a shutdown procedures",null,null],[17,"SCTP_ABORT","","Send an ABORT to peer",null,null],[17,"SCTP_UNORDERED","","Message is un-ordered",null,null],[17,"SCTP_ADDR_OVER","","Override the primary-address",null,null],[17,"SCTP_SENDALL","","Send this on all associations for the endpoint",null,null],[17,"SCTP_PR_SCTP_TTL","","Time based PR-SCTP",null,null],[17,"SCTP_PR_SCTP_BUF","","Buffer based PR-SCTP",null,null],[17,"SCTP_PR_SCTP_RTX","","Number of retransmissions based PR-SCTP",null,null],[11,"clone","","",0,{"inputs":[{"name":"sctp_sndrcvinfo"}],"output":{"name":"sctp_sndrcvinfo"}}],[11,"fmt","","",0,{"inputs":[{"name":"sctp_sndrcvinfo"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"sctp_sndrcvinfo"]]};
searchIndex['libc'] = {"items":[[0,"","libc","Bindings for the C standard library and other platform libraries",null,null],[0,"types","","",null,null],[0,"common","libc::types","",null,null],[0,"c95","libc::types::common","",null,null],[4,"c_void","libc::types::common::c95","Type used to construct void pointers for use with C.",null,null],[13,"__variant1","","",0,null],[13,"__variant2","","",0,null],[4,"FILE","","",null,null],[4,"fpos_t","","",null,null],[0,"c99","libc::types::common","",null,null],[6,"int8_t","libc::types::common::c99","",null,null],[6,"int16_t","","",null,null],[6,"int32_t","","",null,null],[6,"int64_t","","",null,null],[6,"uint8_t","","",null,null],[6,"uint16_t","","",null,null],[6,"uint32_t","","",null,null],[6,"uint64_t","","",null,null],[0,"posix88","libc::types::common","",null,null],[4,"DIR","libc::types::common::posix88","",null,null],[4,"dirent_t","","",null,null],[0,"os","libc::types","",null,null],[0,"common","libc::types::os","",null,null],[0,"posix01","libc::types::os::common","",null,null],[3,"glob_t","libc::types::os::common::posix01","",null,null],[12,"gl_pathc","","",1,null],[12,"gl_pathv","","",1,null],[12,"gl_offs","","",1,null],[12,"__unused1","","",1,null],[12,"__unused2","","",1,null],[12,"__unused3","","",1,null],[12,"__unused4","","",1,null],[12,"__unused5","","",1,null],[3,"timeval","","",null,null],[12,"tv_sec","","",2,null],[12,"tv_usec","","",2,null],[3,"timespec","","",null,null],[12,"tv_sec","","",3,null],[12,"tv_nsec","","",3,null],[3,"rlimit","","",null,null],[12,"rlim_cur","","",4,null],[12,"rlim_max","","",4,null],[4,"timezone","","",null,null],[6,"pthread_t","","",null,null],[6,"rlim_t","","",null,null],[6,"sighandler_t","","",null,null],[11,"clone","","",1,{"inputs":[{"name":"glob_t"}],"output":{"name":"glob_t"}}],[11,"clone","","",2,{"inputs":[{"name":"timeval"}],"output":{"name":"timeval"}}],[11,"clone","","",3,{"inputs":[{"name":"timespec"}],"output":{"name":"timespec"}}],[11,"clone","","",4,{"inputs":[{"name":"rlimit"}],"output":{"name":"rlimit"}}],[0,"bsd43","libc::types::os::common","",null,null],[3,"rusage","libc::types::os::common::bsd43","",null,null],[12,"ru_utime","","",5,null],[12,"ru_stime","","",5,null],[12,"ru_maxrss","","",5,null],[12,"ru_ixrss","","",5,null],[12,"ru_idrss","","",5,null],[12,"ru_isrss","","",5,null],[12,"ru_minflt","","",5,null],[12,"ru_majflt","","",5,null],[12,"ru_nswap","","",5,null],[12,"ru_inblock","","",5,null],[12,"ru_oublock","","",5,null],[12,"ru_msgsnd","","",5,null],[12,"ru_msgrcv","","",5,null],[12,"ru_nsignals","","",5,null],[12,"ru_nvcsw","","",5,null],[12,"ru_nivcsw","","",5,null],[11,"clone","","",5,{"inputs":[{"name":"rusage"}],"output":{"name":"rusage"}}],[0,"bsd44","libc::types::os::common","",null,null],[3,"sockaddr","libc::types::os::common::bsd44","",null,null],[12,"sa_family","","",6,null],[12,"sa_data","","",6,null],[3,"sockaddr_storage","","",null,null],[12,"ss_family","","",7,null],[12,"__ss_align","","",7,null],[12,"__ss_pad2","","",7,null],[3,"sockaddr_in","","",null,null],[12,"sin_family","","",8,null],[12,"sin_port","","",8,null],[12,"sin_addr","","",8,null],[12,"sin_zero","","",8,null],[3,"in_addr","","",null,null],[12,"s_addr","","",9,null],[3,"sockaddr_in6","","",null,null],[12,"sin6_family","","",10,null],[12,"sin6_port","","",10,null],[12,"sin6_flowinfo","","",10,null],[12,"sin6_addr","","",10,null],[12,"sin6_scope_id","","",10,null],[3,"in6_addr","","",null,null],[12,"s6_addr","","",11,null],[3,"ip_mreq","","",null,null],[12,"imr_multiaddr","","",12,null],[12,"imr_interface","","",12,null],[3,"ip6_mreq","","",null,null],[12,"ipv6mr_multiaddr","","",13,null],[12,"ipv6mr_interface","","",13,null],[3,"addrinfo","","",null,null],[12,"ai_flags","","",14,null],[12,"ai_family","","",14,null],[12,"ai_socktype","","",14,null],[12,"ai_protocol","","",14,null],[12,"ai_addrlen","","",14,null],[12,"ai_addr","","",14,null],[12,"ai_canonname","","",14,null],[12,"ai_next","","",14,null],[3,"sockaddr_un","","",null,null],[12,"sun_family","","",15,null],[12,"sun_path","","",15,null],[3,"ifaddrs","","",null,null],[12,"ifa_next","","",16,null],[12,"ifa_name","","",16,null],[12,"ifa_flags","","",16,null],[12,"ifa_addr","","",16,null],[12,"ifa_netmask","","",16,null],[12,"ifa_ifu","","",16,null],[12,"ifa_data","","",16,null],[6,"socklen_t","","",null,null],[6,"sa_family_t","","",null,null],[6,"in_port_t","","",null,null],[6,"in_addr_t","","",null,null],[11,"clone","","",6,{"inputs":[{"name":"sockaddr"}],"output":{"name":"sockaddr"}}],[11,"clone","","",7,{"inputs":[{"name":"sockaddr_storage"}],"output":{"name":"sockaddr_storage"}}],[11,"clone","","",8,{"inputs":[{"name":"sockaddr_in"}],"output":{"name":"sockaddr_in"}}],[11,"clone","","",9,{"inputs":[{"name":"in_addr"}],"output":{"name":"in_addr"}}],[11,"clone","","",10,{"inputs":[{"name":"sockaddr_in6"}],"output":{"name":"sockaddr_in6"}}],[11,"clone","","",11,{"inputs":[{"name":"in6_addr"}],"output":{"name":"in6_addr"}}],[11,"clone","","",12,{"inputs":[{"name":"ip_mreq"}],"output":{"name":"ip_mreq"}}],[11,"clone","","",13,{"inputs":[{"name":"ip6_mreq"}],"output":{"name":"ip6_mreq"}}],[11,"clone","","",14,{"inputs":[{"name":"addrinfo"}],"output":{"name":"addrinfo"}}],[11,"clone","","",15,{"inputs":[{"name":"sockaddr_un"}],"output":{"name":"sockaddr_un"}}],[11,"clone","","",16,{"inputs":[{"name":"ifaddrs"}],"output":{"name":"ifaddrs"}}],[0,"arch","libc::types::os","",null,null],[0,"c95","libc::types::os::arch","",null,null],[6,"c_char","libc::types::os::arch::c95","",null,null],[6,"c_schar","","",null,null],[6,"c_uchar","","",null,null],[6,"c_short","","",null,null],[6,"c_ushort","","",null,null],[6,"c_int","","",null,null],[6,"c_uint","","",null,null],[6,"c_long","","",null,null],[6,"c_ulong","","",null,null],[6,"c_float","","",null,null],[6,"c_double","","",null,null],[6,"size_t","","",null,null],[6,"ptrdiff_t","","",null,null],[6,"clock_t","","",null,null],[6,"time_t","","",null,null],[6,"suseconds_t","","",null,null],[6,"wchar_t","","",null,null],[0,"c99","libc::types::os::arch","",null,null],[6,"c_longlong","libc::types::os::arch::c99","",null,null],[6,"c_ulonglong","","",null,null],[6,"intptr_t","","",null,null],[6,"uintptr_t","","",null,null],[6,"intmax_t","","",null,null],[6,"uintmax_t","","",null,null],[0,"posix88","libc::types::os::arch","",null,null],[6,"off_t","libc::types::os::arch::posix88","",null,null],[6,"dev_t","","",null,null],[6,"ino_t","","",null,null],[6,"pid_t","","",null,null],[6,"uid_t","","",null,null],[6,"gid_t","","",null,null],[6,"useconds_t","","",null,null],[6,"mode_t","","",null,null],[6,"ssize_t","","",null,null],[0,"posix01","libc::types::os::arch","",null,null],[3,"stat","libc::types::os::arch::posix01","",null,null],[12,"st_dev","","",17,null],[12,"st_ino","","",17,null],[12,"st_nlink","","",17,null],[12,"st_mode","","",17,null],[12,"st_uid","","",17,null],[12,"st_gid","","",17,null],[12,"__pad0","","",17,null],[12,"st_rdev","","",17,null],[12,"st_size","","",17,null],[12,"st_blksize","","",17,null],[12,"st_blocks","","",17,null],[12,"st_atime","","",17,null],[12,"st_atime_nsec","","",17,null],[12,"st_mtime","","",17,null],[12,"st_mtime_nsec","","",17,null],[12,"st_ctime","","",17,null],[12,"st_ctime_nsec","","",17,null],[12,"__unused","","",17,null],[3,"utimbuf","","",null,null],[12,"actime","","",18,null],[12,"modtime","","",18,null],[3,"pthread_attr_t","","",null,null],[12,"__size","","",19,null],[6,"nlink_t","","",null,null],[6,"blksize_t","","",null,null],[6,"blkcnt_t","","",null,null],[11,"clone","","",17,{"inputs":[{"name":"stat"}],"output":{"name":"stat"}}],[11,"clone","","",18,{"inputs":[{"name":"utimbuf"}],"output":{"name":"utimbuf"}}],[11,"clone","","",19,{"inputs":[{"name":"pthread_attr_t"}],"output":{"name":"pthread_attr_t"}}],[0,"extra","libc::types::os::arch","",null,null],[3,"sockaddr_ll","libc::types::os::arch::extra","",null,null],[12,"sll_family","","",20,null],[12,"sll_protocol","","",20,null],[12,"sll_ifindex","","",20,null],[12,"sll_hatype","","",20,null],[12,"sll_pkttype","","",20,null],[12,"sll_halen","","",20,null],[12,"sll_addr","","",20,null],[11,"clone","","",20,{"inputs":[{"name":"sockaddr_ll"}],"output":{"name":"sockaddr_ll"}}],[0,"consts","libc","",null,null],[0,"os","libc::consts","",null,null],[0,"c95","libc::consts::os","",null,null],[17,"EXIT_FAILURE","libc::consts::os::c95","",null,null],[17,"EXIT_SUCCESS","","",null,null],[17,"RAND_MAX","","",null,null],[17,"EOF","","",null,null],[17,"SEEK_SET","","",null,null],[17,"SEEK_CUR","","",null,null],[17,"SEEK_END","","",null,null],[17,"_IOFBF","","",null,null],[17,"_IONBF","","",null,null],[17,"_IOLBF","","",null,null],[17,"BUFSIZ","","",null,null],[17,"FOPEN_MAX","","",null,null],[17,"FILENAME_MAX","","",null,null],[17,"L_tmpnam","","",null,null],[17,"TMP_MAX","","",null,null],[0,"posix88","libc::consts::os","",null,null],[17,"O_RDONLY","libc::consts::os::posix88","",null,null],[17,"O_WRONLY","","",null,null],[17,"O_RDWR","","",null,null],[17,"O_APPEND","","",null,null],[17,"O_CREAT","","",null,null],[17,"O_EXCL","","",null,null],[17,"O_NOCTTY","","",null,null],[17,"O_TRUNC","","",null,null],[17,"S_IFIFO","","",null,null],[17,"S_IFCHR","","",null,null],[17,"S_IFBLK","","",null,null],[17,"S_IFDIR","","",null,null],[17,"S_IFREG","","",null,null],[17,"S_IFLNK","","",null,null],[17,"S_IFMT","","",null,null],[17,"S_IEXEC","","",null,null],[17,"S_IWRITE","","",null,null],[17,"S_IREAD","","",null,null],[17,"S_IRWXU","","",null,null],[17,"S_IXUSR","","",null,null],[17,"S_IWUSR","","",null,null],[17,"S_IRUSR","","",null,null],[17,"S_IRWXG","","",null,null],[17,"S_IXGRP","","",null,null],[17,"S_IWGRP","","",null,null],[17,"S_IRGRP","","",null,null],[17,"S_IRWXO","","",null,null],[17,"S_IXOTH","","",null,null],[17,"S_IWOTH","","",null,null],[17,"S_IROTH","","",null,null],[17,"F_OK","","",null,null],[17,"R_OK","","",null,null],[17,"W_OK","","",null,null],[17,"X_OK","","",null,null],[17,"STDIN_FILENO","","",null,null],[17,"STDOUT_FILENO","","",null,null],[17,"STDERR_FILENO","","",null,null],[17,"F_LOCK","","",null,null],[17,"F_TEST","","",null,null],[17,"F_TLOCK","","",null,null],[17,"F_ULOCK","","",null,null],[17,"SIGHUP","","",null,null],[17,"SIGINT","","",null,null],[17,"SIGQUIT","","",null,null],[17,"SIGILL","","",null,null],[17,"SIGABRT","","",null,null],[17,"SIGFPE","","",null,null],[17,"SIGKILL","","",null,null],[17,"SIGSEGV","","",null,null],[17,"SIGPIPE","","",null,null],[17,"SIGALRM","","",null,null],[17,"SIGTERM","","",null,null],[17,"PROT_NONE","","",null,null],[17,"PROT_READ","","",null,null],[17,"PROT_WRITE","","",null,null],[17,"PROT_EXEC","","",null,null],[17,"MAP_FILE","","",null,null],[17,"MAP_SHARED","","",null,null],[17,"MAP_PRIVATE","","",null,null],[17,"MAP_FIXED","","",null,null],[17,"MAP_ANON","","",null,null],[17,"MAP_FAILED","","",null,null],[17,"MCL_CURRENT","","",null,null],[17,"MCL_FUTURE","","",null,null],[17,"MS_ASYNC","","",null,null],[17,"MS_INVALIDATE","","",null,null],[17,"MS_SYNC","","",null,null],[17,"EPERM","","",null,null],[17,"ENOENT","","",null,null],[17,"ESRCH","","",null,null],[17,"EINTR","","",null,null],[17,"EIO","","",null,null],[17,"ENXIO","","",null,null],[17,"E2BIG","","",null,null],[17,"ENOEXEC","","",null,null],[17,"EBADF","","",null,null],[17,"ECHILD","","",null,null],[17,"EAGAIN","","",null,null],[17,"ENOMEM","","",null,null],[17,"EACCES","","",null,null],[17,"EFAULT","","",null,null],[17,"ENOTBLK","","",null,null],[17,"EBUSY","","",null,null],[17,"EEXIST","","",null,null],[17,"EXDEV","","",null,null],[17,"ENODEV","","",null,null],[17,"ENOTDIR","","",null,null],[17,"EISDIR","","",null,null],[17,"EINVAL","","",null,null],[17,"ENFILE","","",null,null],[17,"EMFILE","","",null,null],[17,"ENOTTY","","",null,null],[17,"ETXTBSY","","",null,null],[17,"EFBIG","","",null,null],[17,"ENOSPC","","",null,null],[17,"ESPIPE","","",null,null],[17,"EROFS","","",null,null],[17,"EMLINK","","",null,null],[17,"EPIPE","","",null,null],[17,"EDOM","","",null,null],[17,"ERANGE","","",null,null],[17,"EDEADLK","","",null,null],[17,"ENAMETOOLONG","","",null,null],[17,"ENOLCK","","",null,null],[17,"ENOSYS","","",null,null],[17,"ENOTEMPTY","","",null,null],[17,"ELOOP","","",null,null],[17,"EWOULDBLOCK","","",null,null],[17,"ENOMSG","","",null,null],[17,"EIDRM","","",null,null],[17,"ECHRNG","","",null,null],[17,"EL2NSYNC","","",null,null],[17,"EL3HLT","","",null,null],[17,"EL3RST","","",null,null],[17,"ELNRNG","","",null,null],[17,"EUNATCH","","",null,null],[17,"ENOCSI","","",null,null],[17,"EL2HLT","","",null,null],[17,"EBADE","","",null,null],[17,"EBADR","","",null,null],[17,"EXFULL","","",null,null],[17,"ENOANO","","",null,null],[17,"EBADRQC","","",null,null],[17,"EBADSLT","","",null,null],[17,"EDEADLOCK","","",null,null],[17,"EBFONT","","",null,null],[17,"ENOSTR","","",null,null],[17,"ENODATA","","",null,null],[17,"ETIME","","",null,null],[17,"ENOSR","","",null,null],[17,"ENONET","","",null,null],[17,"ENOPKG","","",null,null],[17,"EREMOTE","","",null,null],[17,"ENOLINK","","",null,null],[17,"EADV","","",null,null],[17,"ESRMNT","","",null,null],[17,"ECOMM","","",null,null],[17,"EPROTO","","",null,null],[17,"EMULTIHOP","","",null,null],[17,"EDOTDOT","","",null,null],[17,"EBADMSG","","",null,null],[17,"EOVERFLOW","","",null,null],[17,"ENOTUNIQ","","",null,null],[17,"EBADFD","","",null,null],[17,"EREMCHG","","",null,null],[17,"ELIBACC","","",null,null],[17,"ELIBBAD","","",null,null],[17,"ELIBSCN","","",null,null],[17,"ELIBMAX","","",null,null],[17,"ELIBEXEC","","",null,null],[17,"EILSEQ","","",null,null],[17,"ERESTART","","",null,null],[17,"ESTRPIPE","","",null,null],[17,"EUSERS","","",null,null],[17,"ENOTSOCK","","",null,null],[17,"EDESTADDRREQ","","",null,null],[17,"EMSGSIZE","","",null,null],[17,"EPROTOTYPE","","",null,null],[17,"ENOPROTOOPT","","",null,null],[17,"EPROTONOSUPPORT","","",null,null],[17,"ESOCKTNOSUPPORT","","",null,null],[17,"EOPNOTSUPP","","",null,null],[17,"EPFNOSUPPORT","","",null,null],[17,"EAFNOSUPPORT","","",null,null],[17,"EADDRINUSE","","",null,null],[17,"EADDRNOTAVAIL","","",null,null],[17,"ENETDOWN","","",null,null],[17,"ENETUNREACH","","",null,null],[17,"ENETRESET","","",null,null],[17,"ECONNABORTED","","",null,null],[17,"ECONNRESET","","",null,null],[17,"ENOBUFS","","",null,null],[17,"EISCONN","","",null,null],[17,"ENOTCONN","","",null,null],[17,"ESHUTDOWN","","",null,null],[17,"ETOOMANYREFS","","",null,null],[17,"ETIMEDOUT","","",null,null],[17,"ECONNREFUSED","","",null,null],[17,"EHOSTDOWN","","",null,null],[17,"EHOSTUNREACH","","",null,null],[17,"EALREADY","","",null,null],[17,"EINPROGRESS","","",null,null],[17,"ESTALE","","",null,null],[17,"EUCLEAN","","",null,null],[17,"ENOTNAM","","",null,null],[17,"ENAVAIL","","",null,null],[17,"EISNAM","","",null,null],[17,"EREMOTEIO","","",null,null],[17,"EDQUOT","","",null,null],[17,"ENOMEDIUM","","",null,null],[17,"EMEDIUMTYPE","","",null,null],[17,"ECANCELED","","",null,null],[17,"ENOKEY","","",null,null],[17,"EKEYEXPIRED","","",null,null],[17,"EKEYREVOKED","","",null,null],[17,"EKEYREJECTED","","",null,null],[17,"EOWNERDEAD","","",null,null],[17,"ENOTRECOVERABLE","","",null,null],[17,"ERFKILL","","",null,null],[17,"EHWPOISON","","",null,null],[0,"posix01","libc::consts::os","",null,null],[17,"F_DUPFD","libc::consts::os::posix01","",null,null],[17,"F_GETFD","","",null,null],[17,"F_SETFD","","",null,null],[17,"F_GETFL","","",null,null],[17,"F_SETFL","","",null,null],[17,"O_ACCMODE","","",null,null],[17,"SIGTRAP","","",null,null],[17,"SIG_IGN","","",null,null],[17,"GLOB_ERR","","",null,null],[17,"GLOB_MARK","","",null,null],[17,"GLOB_NOSORT","","",null,null],[17,"GLOB_DOOFFS","","",null,null],[17,"GLOB_NOCHECK","","",null,null],[17,"GLOB_APPEND","","",null,null],[17,"GLOB_NOESCAPE","","",null,null],[17,"GLOB_NOSPACE","","",null,null],[17,"GLOB_ABORTED","","",null,null],[17,"GLOB_NOMATCH","","",null,null],[17,"POSIX_MADV_NORMAL","","",null,null],[17,"POSIX_MADV_RANDOM","","",null,null],[17,"POSIX_MADV_SEQUENTIAL","","",null,null],[17,"POSIX_MADV_WILLNEED","","",null,null],[17,"POSIX_MADV_DONTNEED","","",null,null],[17,"_SC_MQ_PRIO_MAX","","",null,null],[17,"_SC_IOV_MAX","","",null,null],[17,"_SC_GETGR_R_SIZE_MAX","","",null,null],[17,"_SC_GETPW_R_SIZE_MAX","","",null,null],[17,"_SC_LOGIN_NAME_MAX","","",null,null],[17,"_SC_TTY_NAME_MAX","","",null,null],[17,"_SC_THREADS","","",null,null],[17,"_SC_THREAD_SAFE_FUNCTIONS","","",null,null],[17,"_SC_THREAD_DESTRUCTOR_ITERATIONS","","",null,null],[17,"_SC_THREAD_KEYS_MAX","","",null,null],[17,"_SC_THREAD_STACK_MIN","","",null,null],[17,"_SC_THREAD_THREADS_MAX","","",null,null],[17,"_SC_THREAD_ATTR_STACKADDR","","",null,null],[17,"_SC_THREAD_ATTR_STACKSIZE","","",null,null],[17,"_SC_THREAD_PRIORITY_SCHEDULING","","",null,null],[17,"_SC_THREAD_PRIO_INHERIT","","",null,null],[17,"_SC_THREAD_PRIO_PROTECT","","",null,null],[17,"_SC_THREAD_PROCESS_SHARED","","",null,null],[17,"_SC_ATEXIT_MAX","","",null,null],[17,"_SC_XOPEN_VERSION","","",null,null],[17,"_SC_XOPEN_XCU_VERSION","","",null,null],[17,"_SC_XOPEN_UNIX","","",null,null],[17,"_SC_XOPEN_CRYPT","","",null,null],[17,"_SC_XOPEN_ENH_I18N","","",null,null],[17,"_SC_XOPEN_SHM","","",null,null],[17,"_SC_XOPEN_LEGACY","","",null,null],[17,"_SC_XOPEN_REALTIME","","",null,null],[17,"_SC_XOPEN_REALTIME_THREADS","","",null,null],[17,"PTHREAD_CREATE_JOINABLE","","",null,null],[17,"PTHREAD_CREATE_DETACHED","","",null,null],[17,"PTHREAD_STACK_MIN","","",null,null],[17,"CLOCK_REALTIME","","",null,null],[17,"CLOCK_MONOTONIC","","",null,null],[17,"RLIMIT_CPU","","",null,null],[17,"RLIMIT_FSIZE","","",null,null],[17,"RLIMIT_DATA","","",null,null],[17,"RLIMIT_STACK","","",null,null],[17,"RLIMIT_CORE","","",null,null],[17,"RLIMIT_RSS","","",null,null],[17,"RLIMIT_NOFILE","","",null,null],[17,"RLIMIT_AS","","",null,null],[17,"RLIMIT_NPROC","","",null,null],[17,"RLIMIT_MEMLOCK","","",null,null],[17,"RLIMIT_LOCKS","","",null,null],[17,"RLIMIT_SIGPENDING","","",null,null],[17,"RLIMIT_MSGQUEUE","","",null,null],[17,"RLIMIT_NICE","","",null,null],[17,"RLIMIT_RTPRIO","","",null,null],[17,"RLIMIT_RTTIME","","",null,null],[17,"RLIMIT_NLIMITS","","",null,null],[17,"RLIM_INFINITY","","",null,null],[17,"RLIM_SAVED_MAX","","",null,null],[17,"RLIM_SAVED_CUR","","",null,null],[17,"RUSAGE_SELF","","",null,null],[17,"RUSAGE_CHILDREN","","",null,null],[17,"RUSAGE_THREAD","","",null,null],[0,"bsd44","libc::consts::os","",null,null],[17,"MADV_NORMAL","libc::consts::os::bsd44","",null,null],[17,"MADV_RANDOM","","",null,null],[17,"MADV_SEQUENTIAL","","",null,null],[17,"MADV_WILLNEED","","",null,null],[17,"MADV_DONTNEED","","",null,null],[17,"MADV_REMOVE","","",null,null],[17,"MADV_DONTFORK","","",null,null],[17,"MADV_DOFORK","","",null,null],[17,"MADV_MERGEABLE","","",null,null],[17,"MADV_UNMERGEABLE","","",null,null],[17,"MADV_HWPOISON","","",null,null],[17,"IFF_LOOPBACK","","",null,null],[17,"AF_UNIX","","",null,null],[17,"AF_INET","","",null,null],[17,"AF_INET6","","",null,null],[17,"SOCK_STREAM","","",null,null],[17,"SOCK_DGRAM","","",null,null],[17,"SOCK_RAW","","",null,null],[17,"IPPROTO_TCP","","",null,null],[17,"IPPROTO_IP","","",null,null],[17,"IPPROTO_IPV6","","",null,null],[17,"IP_MULTICAST_TTL","","",null,null],[17,"IP_MULTICAST_LOOP","","",null,null],[17,"IP_TTL","","",null,null],[17,"IP_HDRINCL","","",null,null],[17,"IP_ADD_MEMBERSHIP","","",null,null],[17,"IP_DROP_MEMBERSHIP","","",null,null],[17,"IPV6_ADD_MEMBERSHIP","","",null,null],[17,"IPV6_DROP_MEMBERSHIP","","",null,null],[17,"TCP_NODELAY","","",null,null],[17,"TCP_MAXSEG","","",null,null],[17,"TCP_CORK","","",null,null],[17,"TCP_KEEPIDLE","","",null,null],[17,"TCP_KEEPINTVL","","",null,null],[17,"TCP_KEEPCNT","","",null,null],[17,"TCP_SYNCNT","","",null,null],[17,"TCP_LINGER2","","",null,null],[17,"TCP_DEFER_ACCEPT","","",null,null],[17,"TCP_WINDOW_CLAMP","","",null,null],[17,"TCP_INFO","","",null,null],[17,"TCP_QUICKACK","","",null,null],[17,"TCP_CONGESTION","","",null,null],[17,"TCP_MD5SIG","","",null,null],[17,"TCP_COOKIE_TRANSACTIONS","","",null,null],[17,"TCP_THIN_LINEAR_TIMEOUTS","","",null,null],[17,"TCP_THIN_DUPACK","","",null,null],[17,"TCP_USER_TIMEOUT","","",null,null],[17,"TCP_REPAIR","","",null,null],[17,"TCP_REPAIR_QUEUE","","",null,null],[17,"TCP_QUEUE_SEQ","","",null,null],[17,"TCP_REPAIR_OPTIONS","","",null,null],[17,"TCP_FASTOPEN","","",null,null],[17,"TCP_TIMESTAMP","","",null,null],[17,"SOL_SOCKET","","",null,null],[17,"SO_DEBUG","","",null,null],[17,"SO_REUSEADDR","","",null,null],[17,"SO_TYPE","","",null,null],[17,"SO_ERROR","","",null,null],[17,"SO_DONTROUTE","","",null,null],[17,"SO_BROADCAST","","",null,null],[17,"SO_SNDBUF","","",null,null],[17,"SO_RCVBUF","","",null,null],[17,"SO_KEEPALIVE","","",null,null],[17,"SO_OOBINLINE","","",null,null],[17,"SO_LINGER","","",null,null],[17,"SO_REUSEPORT","","",null,null],[17,"SO_RCVLOWAT","","",null,null],[17,"SO_SNDLOWAT","","",null,null],[17,"SO_RCVTIMEO","","",null,null],[17,"SO_SNDTIMEO","","",null,null],[17,"SO_ACCEPTCONN","","",null,null],[17,"SHUT_RD","","",null,null],[17,"SHUT_WR","","",null,null],[17,"SHUT_RDWR","","",null,null],[0,"extra","libc::consts::os","",null,null],[17,"AF_PACKET","libc::consts::os::extra","",null,null],[17,"IPPROTO_RAW","","",null,null],[17,"O_RSYNC","","",null,null],[17,"O_DSYNC","","",null,null],[17,"O_NONBLOCK","","",null,null],[17,"O_SYNC","","",null,null],[17,"PROT_GROWSDOWN","","",null,null],[17,"PROT_GROWSUP","","",null,null],[17,"MAP_TYPE","","",null,null],[17,"MAP_ANONYMOUS","","",null,null],[17,"MAP_32BIT","","",null,null],[17,"MAP_GROWSDOWN","","",null,null],[17,"MAP_DENYWRITE","","",null,null],[17,"MAP_EXECUTABLE","","",null,null],[17,"MAP_LOCKED","","",null,null],[17,"MAP_NORESERVE","","",null,null],[17,"MAP_POPULATE","","",null,null],[17,"MAP_NONBLOCK","","",null,null],[17,"MAP_STACK","","",null,null],[0,"sysconf","libc::consts::os","",null,null],[17,"_SC_ARG_MAX","libc::consts::os::sysconf","",null,null],[17,"_SC_CHILD_MAX","","",null,null],[17,"_SC_CLK_TCK","","",null,null],[17,"_SC_NGROUPS_MAX","","",null,null],[17,"_SC_OPEN_MAX","","",null,null],[17,"_SC_STREAM_MAX","","",null,null],[17,"_SC_TZNAME_MAX","","",null,null],[17,"_SC_JOB_CONTROL","","",null,null],[17,"_SC_SAVED_IDS","","",null,null],[17,"_SC_REALTIME_SIGNALS","","",null,null],[17,"_SC_PRIORITY_SCHEDULING","","",null,null],[17,"_SC_TIMERS","","",null,null],[17,"_SC_ASYNCHRONOUS_IO","","",null,null],[17,"_SC_PRIORITIZED_IO","","",null,null],[17,"_SC_SYNCHRONIZED_IO","","",null,null],[17,"_SC_FSYNC","","",null,null],[17,"_SC_MAPPED_FILES","","",null,null],[17,"_SC_MEMLOCK","","",null,null],[17,"_SC_MEMLOCK_RANGE","","",null,null],[17,"_SC_MEMORY_PROTECTION","","",null,null],[17,"_SC_MESSAGE_PASSING","","",null,null],[17,"_SC_SEMAPHORES","","",null,null],[17,"_SC_SHARED_MEMORY_OBJECTS","","",null,null],[17,"_SC_AIO_LISTIO_MAX","","",null,null],[17,"_SC_AIO_MAX","","",null,null],[17,"_SC_AIO_PRIO_DELTA_MAX","","",null,null],[17,"_SC_DELAYTIMER_MAX","","",null,null],[17,"_SC_MQ_OPEN_MAX","","",null,null],[17,"_SC_VERSION","","",null,null],[17,"_SC_PAGESIZE","","",null,null],[17,"_SC_RTSIG_MAX","","",null,null],[17,"_SC_SEM_NSEMS_MAX","","",null,null],[17,"_SC_SEM_VALUE_MAX","","",null,null],[17,"_SC_SIGQUEUE_MAX","","",null,null],[17,"_SC_TIMER_MAX","","",null,null],[17,"_SC_BC_BASE_MAX","","",null,null],[17,"_SC_BC_DIM_MAX","","",null,null],[17,"_SC_BC_SCALE_MAX","","",null,null],[17,"_SC_BC_STRING_MAX","","",null,null],[17,"_SC_COLL_WEIGHTS_MAX","","",null,null],[17,"_SC_EXPR_NEST_MAX","","",null,null],[17,"_SC_LINE_MAX","","",null,null],[17,"_SC_RE_DUP_MAX","","",null,null],[17,"_SC_2_VERSION","","",null,null],[17,"_SC_2_C_BIND","","",null,null],[17,"_SC_2_C_DEV","","",null,null],[17,"_SC_2_FORT_DEV","","",null,null],[17,"_SC_2_FORT_RUN","","",null,null],[17,"_SC_2_SW_DEV","","",null,null],[17,"_SC_2_LOCALEDEF","","",null,null],[17,"_SC_NPROCESSORS_ONLN","","",null,null],[17,"_SC_2_CHAR_TERM","","",null,null],[17,"_SC_2_C_VERSION","","",null,null],[17,"_SC_2_UPE","","",null,null],[17,"_SC_XBS5_ILP32_OFF32","","",null,null],[17,"_SC_XBS5_ILP32_OFFBIG","","",null,null],[17,"_SC_XBS5_LPBIG_OFFBIG","","",null,null],[0,"funcs","libc","",null,null],[0,"c95","libc::funcs","",null,null],[0,"ctype","libc::funcs::c95","",null,null],[5,"isalnum","libc::funcs::c95::ctype","",null,null],[5,"isalpha","","",null,null],[5,"iscntrl","","",null,null],[5,"isdigit","","",null,null],[5,"isgraph","","",null,null],[5,"islower","","",null,null],[5,"isprint","","",null,null],[5,"ispunct","","",null,null],[5,"isspace","","",null,null],[5,"isupper","","",null,null],[5,"isxdigit","","",null,null],[5,"tolower","","",null,null],[5,"toupper","","",null,null],[0,"stdio","libc::funcs::c95","",null,null],[5,"fopen","libc::funcs::c95::stdio","",null,null],[5,"freopen","","",null,null],[5,"fflush","","",null,null],[5,"fclose","","",null,null],[5,"remove","","",null,null],[5,"rename","","",null,null],[5,"tmpfile","","",null,null],[5,"setvbuf","","",null,null],[5,"setbuf","","",null,null],[5,"fgetc","","",null,null],[5,"fgets","","",null,null],[5,"fputc","","",null,null],[5,"fputs","","",null,null],[5,"puts","","",null,null],[5,"ungetc","","",null,null],[5,"fread","","",null,null],[5,"fwrite","","",null,null],[5,"fseek","","",null,null],[5,"ftell","","",null,null],[5,"rewind","","",null,null],[5,"fgetpos","","",null,null],[5,"fsetpos","","",null,null],[5,"feof","","",null,null],[5,"ferror","","",null,null],[5,"perror","","",null,null],[0,"stdlib","libc::funcs::c95","",null,null],[5,"abs","libc::funcs::c95::stdlib","",null,null],[5,"labs","","",null,null],[5,"atof","","",null,null],[5,"atoi","","",null,null],[5,"strtod","","",null,null],[5,"strtol","","",null,null],[5,"strtoul","","",null,null],[5,"calloc","","",null,null],[5,"malloc","","",null,null],[5,"realloc","","",null,null],[5,"free","","",null,null],[5,"exit","","Exits the running program in a possibly dangerous manner.",null,null],[5,"_exit","","",null,null],[5,"atexit","","",null,null],[5,"system","","",null,null],[5,"getenv","","",null,null],[5,"rand","","",null,null],[5,"srand","","",null,null],[0,"string","libc::funcs::c95","",null,null],[5,"strcpy","libc::funcs::c95::string","",null,null],[5,"strncpy","","",null,null],[5,"strcat","","",null,null],[5,"strncat","","",null,null],[5,"strcmp","","",null,null],[5,"strncmp","","",null,null],[5,"strcoll","","",null,null],[5,"strchr","","",null,null],[5,"strrchr","","",null,null],[5,"strspn","","",null,null],[5,"strcspn","","",null,null],[5,"strpbrk","","",null,null],[5,"strstr","","",null,null],[5,"strlen","","",null,null],[5,"strerror","","",null,null],[5,"strtok","","",null,null],[5,"strxfrm","","",null,null],[5,"wcslen","","",null,null],[5,"memcmp","","",null,null],[5,"memchr","","",null,null],[0,"posix88","libc::funcs","",null,null],[0,"stat_","libc::funcs::posix88","",null,null],[5,"chmod","libc::funcs::posix88::stat_","",null,null],[5,"fchmod","","",null,null],[5,"fstat","","",null,null],[5,"mkdir","","",null,null],[5,"mkfifo","","",null,null],[5,"stat","","",null,null],[0,"stdio","libc::funcs::posix88","",null,null],[5,"popen","libc::funcs::posix88::stdio","",null,null],[5,"pclose","","",null,null],[5,"fdopen","","",null,null],[5,"fileno","","",null,null],[0,"fcntl","libc::funcs::posix88","",null,null],[5,"open","libc::funcs::posix88::fcntl","",null,null],[5,"creat","","",null,null],[5,"fcntl","","",null,null],[0,"dirent","libc::funcs::posix88","",null,null],[5,"opendir","libc::funcs::posix88::dirent","",null,null],[5,"readdir_r","","",null,null],[5,"closedir","","",null,null],[5,"rewinddir","","",null,null],[5,"seekdir","","",null,null],[5,"telldir","","",null,null],[0,"unistd","libc::funcs::posix88","",null,null],[5,"access","libc::funcs::posix88::unistd","",null,null],[5,"alarm","","",null,null],[5,"chdir","","",null,null],[5,"chown","","",null,null],[5,"close","","",null,null],[5,"dup","","",null,null],[5,"dup2","","",null,null],[5,"execv","","",null,null],[5,"execve","","",null,null],[5,"execvp","","",null,null],[5,"fork","","",null,null],[5,"fpathconf","","",null,null],[5,"getcwd","","",null,null],[5,"getegid","","",null,null],[5,"geteuid","","",null,null],[5,"getgid","","",null,null],[5,"getgroups","","",null,null],[5,"getlogin","","",null,null],[5,"getopt","","",null,null],[5,"getpgrp","","",null,null],[5,"getpid","","",null,null],[5,"getppid","","",null,null],[5,"getuid","","",null,null],[5,"getsid","","",null,null],[5,"isatty","","",null,null],[5,"link","","",null,null],[5,"lseek","","",null,null],[5,"pathconf","","",null,null],[5,"pause","","",null,null],[5,"pipe","","",null,null],[5,"read","","",null,null],[5,"rmdir","","",null,null],[5,"setgid","","",null,null],[5,"setpgid","","",null,null],[5,"setsid","","",null,null],[5,"setuid","","",null,null],[5,"sleep","","",null,null],[5,"usleep","","",null,null],[5,"nanosleep","","",null,null],[5,"sysconf","","",null,null],[5,"tcgetpgrp","","",null,null],[5,"ttyname","","",null,null],[5,"unlink","","",null,null],[5,"wait","","",null,null],[5,"waitpid","","",null,null],[5,"write","","",null,null],[5,"pread","","",null,null],[5,"pwrite","","",null,null],[5,"utime","","",null,null],[17,"_PC_NAME_MAX","","",null,null],[0,"signal","libc::funcs::posix88","",null,null],[5,"kill","libc::funcs::posix88::signal","",null,null],[0,"mman","libc::funcs::posix88","",null,null],[5,"mlock","libc::funcs::posix88::mman","",null,null],[5,"munlock","","",null,null],[5,"mlockall","","",null,null],[5,"munlockall","","",null,null],[5,"mprotect","","",null,null],[5,"msync","","",null,null],[5,"shm_open","","",null,null],[5,"shm_unlink","","",null,null],[5,"mmap","","",null,null],[5,"munmap","","",null,null],[0,"net","libc::funcs::posix88","",null,null],[5,"if_nametoindex","libc::funcs::posix88::net","",null,null],[0,"posix01","libc::funcs","",null,null],[0,"stat_","libc::funcs::posix01","",null,null],[5,"lstat","libc::funcs::posix01::stat_","",null,null],[0,"unistd","libc::funcs::posix01","",null,null],[5,"readlink","libc::funcs::posix01::unistd","",null,null],[5,"fsync","","",null,null],[5,"fdatasync","","",null,null],[5,"setenv","","",null,null],[5,"unsetenv","","",null,null],[5,"putenv","","",null,null],[5,"symlink","","",null,null],[5,"ftruncate","","",null,null],[0,"signal","libc::funcs::posix01","",null,null],[5,"signal","libc::funcs::posix01::signal","",null,null],[0,"glob","libc::funcs::posix01","",null,null],[5,"glob","libc::funcs::posix01::glob","",null,null],[5,"globfree","","",null,null],[0,"mman","libc::funcs::posix01","",null,null],[5,"posix_madvise","libc::funcs::posix01::mman","",null,null],[0,"resource","libc::funcs::posix01","",null,null],[5,"getrlimit","libc::funcs::posix01::resource","",null,null],[5,"setrlimit","","",null,null],[5,"getrusage","","",null,null],[0,"bsd43","libc::funcs","",null,null],[5,"socket","libc::funcs::bsd43","",null,null],[5,"connect","","",null,null],[5,"bind","","",null,null],[5,"listen","","",null,null],[5,"accept","","",null,null],[5,"getpeername","","",null,null],[5,"getsockname","","",null,null],[5,"setsockopt","","",null,null],[5,"recv","","",null,null],[5,"send","","",null,null],[5,"recvfrom","","",null,null],[5,"sendto","","",null,null],[5,"getifaddrs","","",null,null],[5,"freeifaddrs","","",null,null],[5,"shutdown","","",null,null],[0,"bsd44","libc::funcs","",null,null],[5,"getdtablesize","libc::funcs::bsd44","",null,null],[5,"ioctl","","",null,null],[5,"madvise","","",null,null],[5,"mincore","","",null,null]],"paths":[[4,"c_void"],[3,"glob_t"],[3,"timeval"],[3,"timespec"],[3,"rlimit"],[3,"rusage"],[3,"sockaddr"],[3,"sockaddr_storage"],[3,"sockaddr_in"],[3,"in_addr"],[3,"sockaddr_in6"],[3,"in6_addr"],[3,"ip_mreq"],[3,"ip6_mreq"],[3,"addrinfo"],[3,"sockaddr_un"],[3,"ifaddrs"],[3,"stat"],[3,"utimbuf"],[3,"pthread_attr_t"],[3,"sockaddr_ll"]]};
initSearch(searchIndex);
