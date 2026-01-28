import {
  HapticService,
  ReaderComponent,
  RouterModule
} from "./chunk-7RRHKQI5.js";
import {
  WorkerManagementComponent,
  WorkerService
} from "./chunk-XTEOZ5P5.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  CloudSaveService,
  CommonModule,
  ContentService,
  DatePipe,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Optional,
  Output,
  PLATFORM_ID,
  RemoteContentService,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  StorageService,
  Subject,
  Version,
  __async,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  environment,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  inject,
  isPlatformBrowser,
  isPromise,
  isSubscribable,
  map,
  output,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4TSKGTWM.js";

// src/app/features/boot/boot.component.ts
function BootComponent_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("[", message_r1.timestamp, "]");
  }
}
function BootComponent_div_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "\u2588");
    \u0275\u0275elementEnd();
  }
}
function BootComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, BootComponent_div_8_span_1_Template, 2, 1, "span", 13);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BootComponent_div_8_span_4_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    \u0275\u0275classProp("typing", message_r1.isTyping)("complete", message_r1.isComplete)("error", message_r1.isError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !message_r1.isError);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r1.displayText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r1.isTyping);
  }
}
function BootComponent_div_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275text(2, "\u2717");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.authError());
  }
}
function BootComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "span", 21);
    \u0275\u0275text(4, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6, "WORKER IDENTIFICATION REQUIRED");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23)(8, "div", 24)(9, "label", 25);
    \u0275\u0275text(10, "WORKER NAME:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 26);
    \u0275\u0275listener("input", function BootComponent_div_9_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onWorkerNameChange($event));
    })("keyup.enter", function BootComponent_div_9_Template_input_keyup_enter_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onWorkerNameSubmit());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, BootComponent_div_9_div_12_Template, 5, 1, "div", 27);
    \u0275\u0275elementStart(13, "div", 28)(14, "button", 29);
    \u0275\u0275listener("click", function BootComponent_div_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onWorkerNameSubmit());
    });
    \u0275\u0275text(15, " REGISTER WORKER ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 30)(17, "small");
    \u0275\u0275text(18, "Sistema de Identificaci\xF3n Industrial RUSTBONE v0.0.1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small");
    \u0275\u0275text(20, "Todos los trabajadores deben registrarse antes del turno");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r2.workerName());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.authError());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.workerName().trim());
  }
}
function BootComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275text(2, "SYSTEM INITIALIZATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275element(4, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r2.progressValue(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.progressValue(), "% COMPLETE");
  }
}
function BootComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function BootComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onContinue());
    });
    \u0275\u0275elementStart(1, "span", 40);
    \u0275\u0275text(2, "ACCESS GRANTED - PRESS ANY KEY TO CONTINUE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4, "_");
    \u0275\u0275elementEnd()();
  }
}
var BootComponent = class _BootComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.hapticService = inject(HapticService);
    this.storageService = inject(StorageService);
    this.workerService = inject(WorkerService);
    this.bootCompleted = output();
    this.bootComplete = signal(false);
    this.bootMessages = signal([]);
    this.progressValue = signal(0);
    this.showProgress = signal(false);
    this.showGlitch = signal(false);
    this.showContinuePrompt = signal(false);
    this.showWorkerAuth = signal(false);
    this.workerName = signal("");
    this.workerProfile = signal(null);
    this.authError = signal("");
    this.currentMessageIndex = 0;
    this.isFirstBoot = true;
    this.systemMessages = [
      "[ 0.000000] RUSTBONE Industrial OS 2.4.7-zone1 starting...",
      "[ 0.001247] Command line: BOOT_IMAGE=/vmlinuz ro root=/dev/sda1 quiet",
      "[ 0.002891] DMI: RUSTBONE Corp RB-T1/Industrial Board, BIOS 2.4.7 01/15/2387",
      "[ 0.004123] Memory BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable",
      "[ 0.005894] Zone ranges: DMA32 [mem 0x00001000-0xffffffff]",
      "[ 0.007234] Movable zone start for each node",
      "[ 0.008765] Early memory node ranges",
      "[ 0.010123] Initmem setup node 0 [mem 0x00001000-0xbffeffff]",
      "[ 0.012458] CPU: Quad-Core AMD Ryzen-R7 (8 CPUs)",
      "[ 0.014892] Performance Events: PMU not available due to virtualization",
      "[ 0.016234] x86: Booting SMP configuration",
      "[ 0.017891] smp: Bringing up secondary CPUs ...",
      "[ 0.019456] smp: Brought up 1 node, 8 CPUs",
      "[ 0.020987] devtmpfs: initialized",
      "[ 0.022345] RTC time: 23:47:12, date: 01/26/87",
      "[ 0.024892] Memory: 16384MB total, 15892MB available",
      "[ 0.026234] Kernel command line: BOOT_IMAGE=/vmlinuz ro root=/dev/sda1",
      "[ 0.028456] Dentry cache hash table entries: 2097152 (order: 12, 16777216 bytes)",
      "[ 0.030891] Mount-cache hash table entries: 32768 (order: 6, 262144 bytes)",
      "[ 0.032567] CPU0: Thermal monitoring enabled (TM1)",
      "[ 0.034123] process: using mwait in idle threads",
      "[ 0.035789] Last level iTLB entries: 4KB 1024, 2MB 1024, 4MB 512",
      "[ 0.037456] Last level dTLB entries: 4KB 2048, 2MB 1024, 4MB 1024, 1GB 0",
      "[ 0.038291] Storage: SSD 512GB SATA [OK]",
      "[ 0.040123] SCSI subsystem initialized",
      "[ 0.041789] libata version 3.00 loaded.",
      "[ 0.043456] ACPI: bus type USB registered",
      "[ 0.045123] usbcore: registered new interface driver usbfs",
      "[ 0.046789] usbcore: registered new interface driver hub",
      "[ 0.048456] usbcore: registered new device driver usb",
      "[ 0.050123] PCI: Using configuration type 1 for base access",
      "[ 0.051789] PCI: Using configuration type 1 for extended access",
      "[ 0.053456] NetLabel: Initializing",
      "[ 0.054733] Network: Ethernet link up (Zone-1 Backbone)",
      "[ 0.056789] NET: Registered protocol family 2",
      "[ 0.058456] TCP established hash table entries: 131072 (order: 8, 1048576 bytes)",
      "[ 0.060123] TCP bind hash table entries: 65536 (order: 7, 524288 bytes)",
      "[ 0.061789] TCP: Hash tables configured (established 131072 bind 65536)",
      "[ 0.063456] UDP hash table entries: 8192 (order: 5, 131072 bytes)",
      "[ 0.065123] UDP-Lite hash table entries: 8192 (order: 5, 131072 bytes)",
      "[ 0.066789] NET: Registered protocol family 1",
      "[ 0.067821] Thermal: Core temp 67\xB0C [NOMINAL]",
      "[ 0.069891] RPC: Registered named UNIX socket transport module.",
      "[ 0.071456] RPC: Registered udp transport module.",
      "[ 0.073123] RPC: Registered tcp transport module.",
      "[ 0.074789] PCI: CLS 0 bytes, default 64",
      "[ 0.076456] Trying to unpack rootfs image as initramfs...",
      "[ 0.078123] Freeing initrd memory: 22528K",
      "[ 0.079789] audit: initializing netlink subsys (disabled)",
      "[ 0.081456] audit: type=2000 audit(1643235047.079:1): initialized",
      "[ 0.083947] GPIO: Industrial I/O pins initialized",
      "[ 0.085123] HugeTLB registered 1 GB page size, pre-allocated 0 pages",
      "[ 0.086789] HugeTLB registered 2 MB page size, pre-allocated 0 pages",
      "[ 0.088456] VFS: Disk quotas dquot_6.6.0",
      "[ 0.090123] VFS: Dquot-cache hash table entries: 512 (order 0, 4096 bytes)",
      "[ 0.091789] FS-Cache: Loaded",
      "[ 0.093456] CacheFiles: Loaded",
      "[ 0.095123] Key type big_key registered",
      "[ 0.096789] alg: No test for stdrng (krng)",
      "[ 0.098273] USB: 4 ports available, 2 devices detected",
      "[ 0.100456] Block layer SCSI generic (bsg) driver version 0.4 loaded",
      "[ 0.102123] io scheduler noop registered",
      "[ 0.103789] io scheduler deadline registered (default)",
      "[ 0.105456] io scheduler cfq registered",
      "[ 0.107123] io scheduler mq-deadline registered",
      "[ 0.108789] io scheduler kyber registered",
      "[ 0.110456] Serial: 8250/16550 driver, 32 ports, IRQ sharing enabled",
      "[ 0.112589] Audio: Terminal speakers [OK]",
      "[ 0.114123] Console: colour VGA+ 80x25",
      "[ 0.115789] console [tty0] enabled",
      "[ 0.117456] console [ttyS0] enabled",
      "[ 0.119123] ACPI: Power Button [PWRB]",
      "[ 0.120789] ACPI: Sleep Button [SLPB]",
      "[ 0.122456] GHES: HEST is not enabled!",
      "[ 0.124123] Serial: AMBA PL011 UART driver",
      "[ 0.125789] Non-volatile memory driver v1.3",
      "[ 0.127456] Linux agpgart interface v0.103",
      "[ 0.128394] Video: 1920x1080@60Hz industrial display",
      "[ 0.130789] ACPI: AC Adapter [ADP1] (on-line)",
      "[ 0.132456] input: Power Button as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0C0C:00/input/input0",
      "[ 0.134123] ACPI: Power Button [PWRB]",
      "[ 0.135789] input: Sleep Button as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0C0E:00/input/input1",
      "[ 0.137456] ACPI: Sleep Button [SLPB]",
      "[ 0.139123] ACPI: Video Device [GFX0] (multi-head: yes  rom: no  post: no)",
      "[ 0.140789] ACPI: Video Device [VGA] (multi-head: yes  rom: no  post: no)",
      "[ 0.142456] input: Video Bus as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/LNXVIDEO:00/input/input2",
      "[ 0.144123] input: Video Bus as /devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/device:03/LNXVIDEO:01/input/input3",
      "[ 0.145792] Security: Hardware crypto engine loaded",
      "[ 0.147456] AMD-Vi: AMD IOMMUv2 driver loading",
      "[ 0.149123] AMD-Vi: AMD IOMMUv2 functionality not available on this system",
      "[ 0.150789] Kernel unaligned access emulation enabled",
      "[ 0.152456] Registering SWP/SWPB emulation handler",
      "[ 0.154123] registered taskstats version 1",
      "[ 0.155789] Loading compiled-in X.509 certificates",
      "[ 0.157456] zswap: default zpool zbud not available",
      "[ 0.159123] zswap: pool creation failed",
      "[ 0.160789] AppArmor: AppArmor sha1 policy hashing enabled",
      "[ 0.162456] ima: No TPM chip found, activating TPM-bypass!",
      "[ 0.164123] ima: Allocated hash algorithm: sha1",
      "[ 0.165789] evm: HMAC attrs: 0x1",
      "[ 0.167329] Filesystem: /home /var /tmp mounted [OK]",
      "[ 0.169456] EXT4-fs (sda1): mounted filesystem with ordered data mode",
      "[ 0.171123] VFS: Mounted root (ext4 filesystem) readonly on device 8:1.",
      "[ 0.172789] devtmpfs: mounted",
      "[ 0.174456] Freeing unused kernel memory: 1504K",
      "[ 0.176123] Write protecting the kernel read-only data: 18432k",
      "[ 0.177789] Freeing unused kernel memory: 2016K",
      "[ 0.179456] Freeing unused kernel memory: 1980K",
      "[ 0.181123] x86/mm: Checked W+X mappings: passed, no W+X pages found.",
      "[ 0.182789] x86/mm: Checking user space page tables",
      "[ 0.184456] x86/mm: Checked W+X mappings: passed, no W+X pages found.",
      "[ 0.186123] Run /sbin/init as init process",
      "[ 0.187789] systemd[1]: systemd 245.4-4ubuntu3.15 running in system mode.",
      "[ 0.189473] Network services starting...",
      "[ 0.191456] systemd[1]: Detected architecture x86-64.",
      "[ 0.193123] systemd[1]: Set hostname to <rustbone-terminal-t1>.",
      "[ 0.194789] systemd[1]: Created slice system.slice.",
      "[ 0.196456] systemd[1]: Created slice User and Session Slice.",
      "[ 0.198123] systemd[1]: Started Dispatch Password Requests to Console Directory Watch.",
      "[ 0.199789] systemd[1]: Started Forward Password Requests to Wall Directory Watch.",
      "[ 0.201456] systemd[1]: Reached target Paths.",
      "[ 0.203123] systemd[1]: Listening on Syslog Socket.",
      "[ 0.203847] SSH daemon started [PID 1247]",
      "[ 0.205789] systemd[1]: Listening on udev Control Socket.",
      "[ 0.207456] systemd[1]: Listening on Network Service Netlink Socket.",
      "[ 0.209123] systemd[1]: Reached target Sockets.",
      "[ 0.210789] systemd[1]: Reached target Basic System.",
      "[ 0.212456] systemd[1]: Starting LSB: Load kernel modules...",
      "[ 0.214123] systemd[1]: Starting Nameserver information manager...",
      "[ 0.215789] systemd[1]: Starting Network Name Resolution...",
      "[ 0.217456] systemd[1]: Starting User Manager for UID 126...",
      "[ 0.218593] Zone-1 monitoring agent started [PID 1251]",
      "[ 0.220789] systemd[1]: Starting Journal Service...",
      "[ 0.222456] systemd[1]: Starting udev Kernel Manager...",
      "[ 0.224123] systemd[1]: Started Journal Service.",
      "[ 0.225789] systemd-modules-load[1248]: Inserted module ppdev",
      "[ 0.227456] systemd-modules-load[1248]: Inserted module lp",
      "[ 0.229123] systemd-modules-load[1248]: Inserted module parport_pc",
      "[ 0.230789] systemd[1]: Started LSB: Load kernel modules.",
      "[ 0.232456] systemd[1]: Starting udev Coldplug all Devices...",
      "[ 0.234123] systemd[1]: Starting Load Kernel Modules...",
      "[ 0.234792] Worker authentication service [PID 1256]",
      "[ 0.236789] systemd[1]: Started Load Kernel Modules.",
      "[ 0.238456] systemd[1]: Starting Apply Kernel Variables...",
      "[ 0.240123] systemd[1]: Started Apply Kernel Variables.",
      "[ 0.241789] systemd[1]: Starting udev Kernel Device Manager...",
      "[ 0.243456] systemd[1]: Started udev Coldplug all Devices.",
      "[ 0.245123] systemd[1]: Started User Manager for UID 126.",
      "[ 0.246789] systemd[1]: Starting Network Time Synchronization...",
      "[ 0.248456] systemd[1]: Started udev Kernel Device Manager.",
      "[ 0.250183] System fully operational",
      "",
      "RUSTBONE INDUSTRIAL TERMINAL v0.0.1",
      "Zone 1 - Manufacturing Sector Alpha-7",
      "Terminal ID: T1-4A7B-9D2C-XF91",
      "Hardware Rev: RB-T1-2387.01.15",
      "Industrial Controller: ONLINE",
      "Safety Monitoring: ACTIVE",
      "Environmental Systems: NOMINAL",
      "",
      "Initializing biometric scanner...",
      "Loading worker database...",
      "Checking shift schedules...",
      "Verifying security clearances...",
      "",
      "Ready for worker authentication.",
      ""
    ];
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    if (this.isBrowser) {
      this.checkWorkerProfile();
    }
  }
  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
    if (this.bootTimeout) {
      clearTimeout(this.bootTimeout);
    }
  }
  trackByMessage(index, message) {
    return message.id;
  }
  checkWorkerProfile() {
    const existingWorker = this.storageService.getWorkerProfile();
    if (existingWorker) {
      this.isFirstBoot = false;
      this.workerProfile.set(existingWorker);
      this.startSystemBoot();
    } else {
      this.isFirstBoot = true;
      this.startFirstTimeBoot();
    }
  }
  startFirstTimeBoot() {
    this.rapidSystemBoot();
  }
  startSystemBoot() {
    this.hapticService.trigger("boot");
    const shortMessages = [
      "[ 0.000000] RUSTBONE Industrial OS 2.4.7-zone1 starting...",
      "[ 0.000000] Linux version 5.15.0-rustbone (build@industrial-zone1) (gcc version 11.3.0)",
      "[ 0.000000] Command line: BOOT_IMAGE=/vmlinuz-5.15.0 root=/dev/sda1 ro quiet splash",
      "[ 0.000000] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'",
      "[ 0.000000] x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'",
      "[ 0.000000] x86/fpu: Supporting XSAVE feature 0x004: 'AVX registers'",
      "[ 0.000000] x86/fpu: xstate_offset[2]: 576, xstate_sizes[2]: 256",
      "[ 0.000000] BIOS-provided physical RAM map:",
      "[ 0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable",
      "[ 0.000000] BIOS-e820: [mem 0x00000000fec00000-0x00000000fec00fff] reserved",
      "[ 0.012458] NX (Execute Disable) protection: active",
      "[ 0.012458] SMBIOS 3.2 present.",
      "[ 0.012458] DMI: RUSTBONE Industrial Systems/Zone1-Mainboard, BIOS 2.4.7 11/15/2025",
      "[ 0.012892] tsc: Fast TSC calibration using PIT",
      "[ 0.013124] tsc: Detected 3600.125 MHz processor",
      "[ 0.015678] CPU: Quad-Core AMD Ryzen-R7 (8 CPUs)",
      "[ 0.018234] Performance Events: AMD PMU driver.",
      "[ 0.021567] Last level iTLB entries: 4KB 1024, 2MB 1024, 4MB 512",
      "[ 0.021567] Last level dTLB entries: 4KB 1536, 2MB 1536, 4MB 768, 1GB 0",
      "[ 0.024892] Freeing SMP alternatives memory: 32K",
      "[ 0.027891] Memory: 16384MB total, 15892MB available",
      "[ 0.031245] Checking aperture...",
      "[ 0.033456] No AGP bridge found",
      "[ 0.036789] PCI: Using configuration type 1 for base access",
      "[ 0.042134] HugeTLB registered 2.00 MiB page size, pre-allocated 0 pages",
      "[ 0.045678] ACPI: Added _OSI(Module Device)",
      "[ 0.048234] ACPI: Added _OSI(Processor Device)",
      "[ 0.051234] ACPI: Added _OSI(3.0 _SCP Extensions)",
      "[ 0.054733] ACPI: Interpreter enabled",
      "[ 0.058123] ACPI: (supports S0 S3 S4 S5)",
      "[ 0.062456] ACPI: Using IOAPIC for interrupt routing",
      "[ 0.067891] PCI: Using host bridge windows from ACPI",
      "[ 0.073245] ACPI: PCI Root Bridge [PCI0] (domain 0000 [bus 00-ff])",
      "[ 0.078901] pci 0000:00:00.0: [8086:1237] type 00 class 0x060000",
      "[ 0.084567] pci 0000:00:01.0: [8086:7000] type 00 class 0x060100",
      "[ 0.091234] pci 0000:00:02.0: [1234:1111] type 00 class 0x030000",
      "[ 0.098456] SCSI subsystem initialized",
      "[ 0.103789] usbcore: registered new interface driver usbfs",
      "[ 0.109123] usbcore: registered new interface driver hub",
      "[ 0.115678] NetLabel: Initializing",
      "[ 0.121234] NetLabel: domain hash size = 128",
      "[ 0.127891] NetLabel: protocols = UNLABELED CIPSOv4 CALIPSO",
      "[ 0.134567] PCI: Using ACPI for IRQ routing",
      "[ 0.142891] clocksource: Switched to clocksource tsc",
      "[ 0.151234] NET: Registered protocol family 2",
      "[ 0.158901] tcp_listen_portaddr_hash hash table entries: 4096",
      "[ 0.167329] TCP established hash table entries: 65536",
      "[ 0.175678] Network: Initializing Zone-1 Backbone interface...",
      "[ 0.184123] Network: Ethernet link up (Zone-1 Backbone)",
      "[ 0.192456] IPv4: 10.1.20.0/24 configured on eth0",
      "[ 0.201789] VFS: Disk quotas dquot_6.6.0",
      "[ 0.211234] Initializing XFRM netlink socket",
      "[ 0.221567] Block layer SCSI generic (bsg) driver version 0.4",
      "[ 0.232891] Serial: 8250/16550 driver, 4 ports, IRQ sharing enabled",
      "[ 0.243234] 00:04: ttyS0 at I/O 0x3f8 (irq = 4) is a 16550A",
      "[ 0.250183] Filesystem: Checking /dev/sda1...",
      "[ 0.258456] EXT4-fs (sda1): mounted filesystem with ordered data mode",
      "[ 0.267891] Filesystem: /home mounted [OK]",
      "[ 0.276234] Filesystem: /var mounted [OK]",
      "[ 0.285678] Filesystem: /tmp mounted [OK]",
      "[ 0.295123] systemd[1]: systemd 248 running (RUSTBONE INDUSTRIAL BUILD)",
      "[ 0.305567] systemd[1]: Detected architecture x86-64.",
      "[ 0.316891] systemd[1]: Set hostname to <rustbone-zone1-terminal>.",
      "[ 0.328234] systemd[1]: Reached target Local File Systems.",
      "[ 0.339678] systemd[1]: Starting Industrial Zone Monitor Service...",
      "[ 0.351123] systemd[1]: Started D-Bus System Message Bus.",
      "[ 0.362567] Zone1Monitor: Connecting to central supervisor...",
      "[ 0.374891] Zone1Monitor: Connection established [OK]",
      "[ 0.387234] System fully operational",
      "",
      "RUSTBONE Industrial OS 2.4.7-zone1",
      "zone1-terminal login: " + (this.workerProfile()?.name || "worker").toLowerCase(),
      "Password: ********",
      "Last login: " + (/* @__PURE__ */ new Date()).toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", year: "numeric" }),
      "",
      "Welcome back, " + (this.workerProfile()?.name || "Worker")
    ];
    this.showFastBootSequence(shortMessages);
  }
  rapidSystemBoot() {
    this.hapticService.trigger("boot");
    const messages = [
      "[ 0.000000] RUSTBONE Industrial OS 2.4.7-zone1 starting...",
      "[ 0.001247] Command line: BOOT_IMAGE=/vmlinuz ro root=/dev/sda1 quiet",
      "[ 0.002891] DMI: RUSTBONE Corp RB-T1/Industrial Board, BIOS 2.4.7 01/15/2387",
      "[ 0.012458] CPU: Quad-Core AMD Ryzen-R7 (8 CPUs)",
      "[ 0.015678] Performance Events: AMD PMU driver.",
      "[ 0.024892] Memory: 16384MB total, 15892MB available",
      "[ 0.027891] Checking aperture...",
      "[ 0.033456] No AGP bridge found",
      "[ 0.036789] PCI: Using configuration type 1 for base access",
      "[ 0.042134] HugeTLB registered 2.00 MiB page size, pre-allocated 0 pages",
      "[ 0.048234] ACPI: Interpreter enabled",
      "[ 0.054733] ACPI: (supports S0 S3 S4 S5)",
      "[ 0.062456] ACPI: Using IOAPIC for interrupt routing",
      "[ 0.073245] ACPI: PCI Root Bridge [PCI0] (domain 0000 [bus 00-ff])",
      "[ 0.084567] pci 0000:00:01.0: [8086:7000] type 00 class 0x060100",
      "[ 0.098456] SCSI subsystem initialized",
      "[ 0.103789] usbcore: registered new interface driver usbfs",
      "[ 0.115678] NetLabel: Initializing",
      "[ 0.134567] PCI: Using ACPI for IRQ routing",
      "[ 0.151234] NET: Registered protocol family 2",
      "[ 0.167329] TCP established hash table entries: 65536",
      "[ 0.175678] Network: Initializing Zone-1 Backbone interface...",
      "[ 0.184123] Network: Ethernet link up (Zone-1 Backbone)",
      "[ 0.192456] IPv4: 10.1.20.0/24 configured on eth0",
      "[ 0.221567] Block layer SCSI generic (bsg) driver version 0.4",
      "[ 0.232891] Serial: 8250/16550 driver, 4 ports, IRQ sharing enabled",
      "[ 0.250183] Filesystem: Checking /dev/sda1...",
      "[ 0.258456] EXT4-fs (sda1): mounted filesystem with ordered data mode",
      "[ 0.267891] Filesystem: /home mounted [OK]",
      "[ 0.276234] Filesystem: /var mounted [OK]",
      "[ 0.285678] Filesystem: /tmp mounted [OK]",
      "[ 0.295123] systemd[1]: systemd 248 running (RUSTBONE INDUSTRIAL BUILD)",
      "[ 0.305567] systemd[1]: Detected architecture x86-64.",
      "[ 0.316891] systemd[1]: Set hostname to <rustbone-zone1-terminal>.",
      "[ 0.328234] systemd[1]: Reached target Local File Systems.",
      "[ 0.339678] systemd[1]: Starting Industrial Zone Monitor Service...",
      "[ 0.351123] systemd[1]: Started D-Bus System Message Bus.",
      "[ 0.362567] Zone1Monitor: Connecting to central supervisor...",
      "[ 0.374891] Zone1Monitor: Connection established [OK]",
      "[ 0.387234] System fully operational",
      "",
      "RUSTBONE INDUSTRIAL TERMINAL v0.0.1",
      "Zone 1 - Manufacturing Sector Alpha-7",
      "Terminal ID: T1-4A7B-9D2C-XF91",
      "Hardware Rev: RB-T1-2387.01.15",
      "Industrial Controller: ONLINE",
      "Safety Monitoring: ACTIVE",
      "Environmental Systems: NOMINAL",
      "",
      "Initializing biometric scanner...",
      "Loading worker database...",
      "Checking shift schedules...",
      "Verifying security clearances...",
      "",
      "Ready for worker authentication."
    ];
    this.showFastBootSequence(messages, () => {
      this.showWorkerAuthenticationPrompt();
    });
  }
  /**
   * 🔥 SECUENCIA RÁPIDA DE BOOT UNIFICADA
   */
  showFastBootSequence(messages, onComplete) {
    let messageIndex = 0;
    const rapidBootInterval = setInterval(() => {
      if (messageIndex >= messages.length) {
        clearInterval(rapidBootInterval);
        if (onComplete) {
          onComplete();
        } else {
          this.completeBootSequence();
        }
        return;
      }
      const message = {
        id: messageIndex,
        text: messages[messageIndex],
        displayText: messages[messageIndex],
        timestamp: this.generateTimestamp(),
        isTyping: false,
        isComplete: true,
        delay: 0
      };
      const currentMessages = this.bootMessages();
      this.bootMessages.set([...currentMessages, message]);
      messageIndex++;
    }, 15);
  }
  showWorkerAuthenticationPrompt() {
    setTimeout(() => {
      const authMessage = {
        id: 998,
        text: "",
        displayText: "",
        timestamp: this.generateTimestamp(),
        isTyping: false,
        isComplete: true,
        delay: 0
      };
      const authMessage2 = {
        id: 999,
        text: ">>> WORKER AUTHENTICATION REQUIRED <<<",
        displayText: ">>> WORKER AUTHENTICATION REQUIRED <<<",
        timestamp: this.generateTimestamp(),
        isTyping: false,
        isComplete: true,
        delay: 0,
        isError: true
      };
      const currentMessages = this.bootMessages();
      this.bootMessages.set([...currentMessages, authMessage, authMessage2]);
      this.showWorkerAuth.set(true);
      this.hapticService.trigger("error");
    }, 100);
  }
  typeNextMessage() {
    if (this.currentMessageIndex >= this.systemMessages.length) {
      this.startProgressBar();
      return;
    }
    const messageText = this.systemMessages[this.currentMessageIndex];
    const timestamp = this.generateTimestamp();
    const newMessage = {
      id: this.currentMessageIndex,
      text: messageText,
      displayText: "",
      timestamp,
      isTyping: true,
      isComplete: false,
      delay: Math.random() * 10 + 2
      // 🔥 SÚPER RÁPIDO - 2-12ms delays
    };
    const currentMessages = this.bootMessages();
    this.bootMessages.set([...currentMessages, newMessage]);
    this.typeMessage(newMessage);
  }
  typeMessage(message) {
    if (!this.isBrowser)
      return;
    let charIndex = 0;
    const typingSpeed = 0.1;
    this.typingInterval = setInterval(() => {
      if (charIndex <= message.text.length) {
        message.displayText = message.text.substring(0, charIndex);
        const messages = this.bootMessages();
        const messageIndex = messages.findIndex((m) => m.id === message.id);
        if (messageIndex >= 0) {
          messages[messageIndex] = __spreadValues({}, message);
          this.bootMessages.set([...messages]);
        }
        charIndex++;
        if (charIndex % 30 === 0) {
          this.hapticService.triggerCustom([2], "typing");
        }
      } else {
        clearInterval(this.typingInterval);
        message.isTyping = false;
        message.isComplete = true;
        const messages = this.bootMessages();
        const messageIndex = messages.findIndex((m) => m.id === message.id);
        if (messageIndex >= 0) {
          messages[messageIndex] = __spreadValues({}, message);
          this.bootMessages.set([...messages]);
        }
        this.currentMessageIndex++;
        setTimeout(() => {
          this.typeNextMessage();
        }, message.delay);
      }
    }, typingSpeed);
  }
  startProgressBar() {
    this.showProgress.set(true);
    const progressInterval = setInterval(() => {
      const current = this.progressValue();
      if (current >= 100) {
        clearInterval(progressInterval);
        this.completeBootSequence();
      } else {
        this.progressValue.set(Math.min(current + 20, 100));
      }
    }, 5);
  }
  onWorkerNameSubmit() {
    return __async(this, null, function* () {
      const name = this.workerName().trim();
      if (name.length < 2) {
        this.authError.set("Nombre debe tener al menos 2 caracteres");
        this.hapticService.trigger("error");
        return;
      }
      const workerProfile = yield this.workerService.generateWorkerProfile(name);
      this.workerProfile.set(workerProfile);
      this.showWorkerAuth.set(false);
      this.authError.set("");
      this.showWorkerRegistrationComplete(workerProfile);
    });
  }
  onWorkerNameChange(event) {
    const target = event.target;
    this.workerName.set(target.value);
    if (this.authError()) {
      this.authError.set("");
    }
  }
  showWorkerRegistrationComplete(profile) {
    const registrationMessages = [
      "",
      "> WORKER REGISTRATION SUCCESSFUL",
      `> Name: ${profile.name}`,
      `> Worker ID: ${profile.id}`,
      `> Assigned Zone: ${profile.zone}`,
      `> Department: ${profile.department}`,
      `> Clearance Level: ${profile.clearanceLevel}`,
      `> Registration Date: ${profile.assignedDate}`,
      "",
      "> BIOMETRIC SCAN: COMPLETE",
      "> NEURAL PATTERN: RECORDED",
      "> ACCESS PERMISSIONS: GRANTED",
      "",
      "Welcome to RUSTBONE Industrial Complex.",
      "Your shift begins now.",
      ""
    ];
    let msgIndex = 0;
    const currentMessages = this.bootMessages();
    const showRegistrationInterval = setInterval(() => {
      if (msgIndex >= registrationMessages.length) {
        clearInterval(showRegistrationInterval);
        this.completeBootSequence();
        return;
      }
      const message = {
        id: 1e3 + msgIndex,
        text: registrationMessages[msgIndex],
        displayText: registrationMessages[msgIndex],
        timestamp: this.generateTimestamp(),
        isTyping: false,
        isComplete: true,
        delay: 0
      };
      this.bootMessages.set([...currentMessages, message]);
      msgIndex++;
      if (msgIndex % 3 === 0) {
        this.hapticService.triggerCustom([5], "registration");
      }
    }, 30);
  }
  // 🗑️ REMOVED: generateWorkerID, determineWorkerZone, determineClearanceLevel, determineDepartment
  // Ahora se manejan en WorkerService
  completeBootSequence() {
    setTimeout(() => {
      this.showProgress.set(false);
      this.showGlitch.set(true);
      this.hapticService.trigger("glitch");
      setTimeout(() => {
        this.showGlitch.set(false);
        this.bootComplete.set(true);
        this.showContinuePrompt.set(true);
      }, 200);
    }, 100);
  }
  onContinue() {
    this.hapticService.trigger("success");
    this.bootCompleted.emit();
  }
  generateTimestamp() {
    const now = /* @__PURE__ */ new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ms = now.getMilliseconds().toString().padStart(3, "0");
    return `${hours}:${minutes}:${seconds}.${ms}`;
  }
  static {
    this.\u0275fac = function BootComponent_Factory(t) {
      return new (t || _BootComponent)(\u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BootComponent, selectors: [["app-boot"]], outputs: { bootCompleted: "bootCompleted" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 9, consts: [[1, "boot-container"], [1, "boot-terminal"], [1, "terminal-header"], [1, "system-name"], [1, "terminal-indicator"], [1, "boot-messages"], ["class", "boot-line", 3, "typing", "complete", "error", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "worker-auth", 4, "ngIf"], ["class", "boot-progress", 4, "ngIf"], [1, "glitch-transition"], [1, "glitch-layer"], ["class", "continue-prompt", 3, "click", 4, "ngIf"], [1, "boot-line"], ["class", "timestamp", 4, "ngIf"], [1, "message-text"], ["class", "cursor", 4, "ngIf"], [1, "timestamp"], [1, "cursor"], [1, "worker-auth"], [1, "auth-prompt"], [1, "auth-header"], [1, "warning-icon"], [1, "auth-title"], [1, "auth-form"], [1, "input-group"], [1, "input-label"], ["type", "text", "placeholder", "Enter full name...", "autocomplete", "off", "maxlength", "50", 1, "worker-input", 3, "input", "keyup.enter", "value"], ["class", "auth-error", 4, "ngIf"], [1, "auth-controls"], [1, "submit-btn", 3, "click", "disabled"], [1, "auth-footer"], [1, "auth-error"], [1, "error-icon"], [1, "error-text"], [1, "boot-progress"], [1, "progress-label"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "continue-prompt", 3, "click"], [1, "prompt-text"], [1, "prompt-blink"]], template: function BootComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "RustOS v0.0.1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "\u25CF");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275template(8, BootComponent_div_8_Template, 5, 9, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, BootComponent_div_9_Template, 21, 3, "div", 7)(10, BootComponent_div_10_Template, 7, 3, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275element(12, "div", 10)(13, "div", 10)(14, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, BootComponent_div_15_Template, 5, 0, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("complete", ctx.bootComplete());
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.bootMessages())("ngForTrackBy", ctx.trackByMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showWorkerAuth());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showProgress());
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.showGlitch());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.showContinuePrompt());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.boot-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background: var(--void-black);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all var(--theme-transition);\n}\n.boot-container.complete[_ngcontent-%COMP%] {\n  background: var(--dark-metal);\n}\n.boot-terminal[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 800px;\n  background: rgba(var(--dark-metal), 0.95);\n  border: 2px solid var(--ui-border);\n  border-radius: 4px;\n  padding: 24px;\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  box-shadow: 0 0 50px rgba(var(--terminal-green), 0.1), inset 0 0 20px rgba(0, 0, 0, 0.8);\n}\n.terminal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--ui-border);\n}\n.system-name[_ngcontent-%COMP%] {\n  color: var(--terminal-green);\n  font-weight: bold;\n  font-size: 16px;\n  letter-spacing: 2px;\n}\n.terminal-indicator[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n  font-size: 18px;\n  animation: _ngcontent-%COMP%_terminal-pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_terminal-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n.boot-messages[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow-y: hidden;\n  margin-bottom: 20px;\n  position: relative;\n  padding: 12px;\n  background: rgba(0, 0, 0, 0.9);\n  border: 1px solid var(--ui-border);\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.boot-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 4px;\n  opacity: 0;\n  transform: translateY(10px);\n  animation: _ngcontent-%COMP%_boot-line-appear 0.1s ease-out forwards;\n  font-size: 13px;\n  line-height: 1.2;\n}\n.boot-line.typing[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--terminal-green);\n}\n.boot-line.complete[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.boot-line[_ngcontent-%COMP%]:nth-last-child(n+20) {\n  opacity: 0.7;\n}\n.boot-line[_ngcontent-%COMP%]:nth-last-child(n+25) {\n  opacity: 0.4;\n}\n.boot-line[_ngcontent-%COMP%]:nth-last-child(n+30) {\n  opacity: 0.2;\n}\n.boot-line[_ngcontent-%COMP%]:nth-last-child(n+35) {\n  display: none;\n}\n@keyframes _ngcontent-%COMP%_boot-line-appear {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.timestamp[_ngcontent-%COMP%] {\n  color: var(--ui-text-secondary);\n  font-size: 10px;\n  margin-right: 8px;\n  white-space: nowrap;\n  min-width: 80px;\n  opacity: 0.7;\n}\n.message-text[_ngcontent-%COMP%] {\n  color: var(--terminal-green);\n  font-size: 12px;\n  line-height: 1.2;\n  flex: 1;\n  font-weight: 400;\n}\n.boot-line.error[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n  font-weight: 600;\n}\n.cursor[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n  font-weight: bold;\n  animation: _ngcontent-%COMP%_cursor-blink 1s ease-in-out infinite;\n  margin-left: 2px;\n}\n@keyframes _ngcontent-%COMP%_cursor-blink {\n  0%, 50% {\n    opacity: 1;\n  }\n  51%, 100% {\n    opacity: 0;\n  }\n}\n.boot-progress[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  padding: 16px;\n  background: rgba(var(--ui-surface), 0.3);\n  border: 1px solid var(--ui-border);\n  border-radius: 4px;\n}\n.progress-label[_ngcontent-%COMP%] {\n  color: var(--ui-text);\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  letter-spacing: 1px;\n  text-align: center;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: rgba(var(--ui-border), 0.2);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--terminal-green) 0%,\n      var(--rust-orange) 50%,\n      var(--terminal-green) 100%);\n  border-radius: 4px;\n  transition: width 0.1s linear;\n  position: relative;\n}\n.progress-fill[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.4) 50%,\n      transparent 100%);\n  animation: _ngcontent-%COMP%_progress-shine 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_progress-shine {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n.progress-text[_ngcontent-%COMP%] {\n  color: var(--ui-text-secondary);\n  font-size: 11px;\n  text-align: center;\n  letter-spacing: 1px;\n}\n.glitch-transition[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  opacity: 0;\n}\n.glitch-transition.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  animation: _ngcontent-%COMP%_glitch-sequence 1s ease-in-out;\n}\n.glitch-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--terminal-green);\n  mix-blend-mode: difference;\n}\n.glitch-layer[_ngcontent-%COMP%]:nth-child(1) {\n  animation: _ngcontent-%COMP%_glitch-layer-1 0.3s ease-in-out infinite;\n}\n.glitch-layer[_ngcontent-%COMP%]:nth-child(2) {\n  animation: _ngcontent-%COMP%_glitch-layer-2 0.2s ease-in-out infinite;\n  background: var(--rust-orange);\n}\n.glitch-layer[_ngcontent-%COMP%]:nth-child(3) {\n  animation: _ngcontent-%COMP%_glitch-layer-3 0.4s ease-in-out infinite;\n  background: var(--ice-blue);\n}\n@keyframes _ngcontent-%COMP%_glitch-sequence {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_glitch-layer-1 {\n  0%, 100% {\n    transform: translate(0);\n    clip-path: inset(0 0 0 0);\n  }\n  20% {\n    transform: translate(-2px, 2px);\n    clip-path: inset(0 0 50% 0);\n  }\n  40% {\n    transform: translate(2px, -1px);\n    clip-path: inset(30% 0 0 0);\n  }\n  60% {\n    transform: translate(-1px, 3px);\n    clip-path: inset(0 0 80% 0);\n  }\n  80% {\n    transform: translate(1px, -2px);\n    clip-path: inset(60% 0 0 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_glitch-layer-2 {\n  0%, 100% {\n    transform: translate(0);\n    clip-path: inset(0 0 0 0);\n  }\n  25% {\n    transform: translate(3px, -1px);\n    clip-path: inset(20% 0 0 0);\n  }\n  50% {\n    transform: translate(-1px, 2px);\n    clip-path: inset(0 0 70% 0);\n  }\n  75% {\n    transform: translate(2px, 1px);\n    clip-path: inset(40% 0 0 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_glitch-layer-3 {\n  0%, 100% {\n    transform: translate(0);\n    clip-path: inset(0 0 0 0);\n  }\n  15% {\n    transform: translate(-3px, -2px);\n    clip-path: inset(0 0 60% 0);\n  }\n  30% {\n    transform: translate(1px, 3px);\n    clip-path: inset(35% 0 0 0);\n  }\n  45% {\n    transform: translate(-2px, -1px);\n    clip-path: inset(0 0 85% 0);\n  }\n  60% {\n    transform: translate(2px, 2px);\n    clip-path: inset(25% 0 0 0);\n  }\n  75% {\n    transform: translate(-1px, -3px);\n    clip-path: inset(0 0 45% 0);\n  }\n}\n.continue-prompt[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  color: var(--ui-text);\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.continue-prompt[_ngcontent-%COMP%]:hover {\n  color: var(--rust-orange);\n  transform: translateX(-50%) scale(1.05);\n}\n.prompt-text[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.prompt-blink[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cursor-blink 1s ease-in-out infinite;\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .boot-terminal[_ngcontent-%COMP%] {\n    width: 95%;\n    padding: 16px;\n  }\n  .boot-messages[_ngcontent-%COMP%] {\n    min-height: 250px;\n    max-height: 300px;\n  }\n  .timestamp[_ngcontent-%COMP%] {\n    min-width: 80px;\n    font-size: 10px;\n  }\n  .message-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .boot-terminal[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .system-name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .boot-messages[_ngcontent-%COMP%] {\n    min-height: 200px;\n    max-height: 250px;\n  }\n  .continue-prompt[_ngcontent-%COMP%] {\n    bottom: 20px;\n    font-size: 12px;\n  }\n}\n.worker-auth[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 20px;\n  background: rgba(var(--rust-orange), 0.05);\n  border: 2px solid var(--rust-orange);\n  border-radius: 4px;\n  animation: _ngcontent-%COMP%_auth-appear 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_auth-appear {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.auth-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  gap: 12px;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n  font-size: 24px;\n  animation: _ngcontent-%COMP%_warning-blink 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_warning-blink {\n  0%, 50% {\n    opacity: 1;\n  }\n  51%, 100% {\n    opacity: 0.3;\n  }\n}\n.auth-title[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n.auth-form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.input-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.input-label[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--terminal-green);\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  letter-spacing: 1px;\n}\n.worker-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  border: 2px solid var(--ui-border);\n  color: var(--terminal-green);\n  padding: 12px 16px;\n  font-family: "Courier New", monospace;\n  font-size: 16px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  border-radius: 4px;\n  outline: none;\n  transition: all 0.3s ease;\n}\n.worker-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--terminal-green);\n  box-shadow: 0 0 10px rgba(var(--terminal-green), 0.3);\n}\n.worker-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--ui-text-dim);\n  text-transform: none;\n}\n.auth-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--rust-orange);\n  font-size: 14px;\n  margin-top: 8px;\n  animation: _ngcontent-%COMP%_error-shake 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_error-shake {\n  0%, 20%, 40%, 60%, 80% {\n    transform: translateX(-5px);\n  }\n  10%, 30%, 50%, 70%, 90% {\n    transform: translateX(5px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.error-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.auth-controls[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--terminal-green),\n      var(--ice-blue));\n  border: 2px solid var(--terminal-green);\n  color: var(--dark-metal);\n  padding: 12px 24px;\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  outline: none;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(var(--terminal-green), 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1);\n}\n.submit-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background: var(--ui-surface);\n  color: var(--ui-text-dim);\n}\n.auth-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--ui-border);\n  padding-top: 15px;\n}\n.auth-footer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--ui-text-dim);\n  font-size: 12px;\n  line-height: 1.4;\n  margin-bottom: 4px;\n}\n.boot-line.error[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BootComponent, { className: "BootComponent", filePath: "src\\app\\features\\boot\\boot.component.ts", lineNumber: 26 });
})();

// src/app/features/login/login.component.ts
function LoginComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
  }
}
function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "circle", 34)(4, "circle", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("stroke-dashoffset", 314 - ctx_r0.scanProgress() / 100 * 314);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.scanProgress(), "%");
  }
}
function LoginComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("WORKER ID: ", ctx_r0.workerId(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ASSIGNED ZONE: ", ctx_r0.assignedZone(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("SECURITY CLEARANCE: ", ctx_r0.securityLevel(), "");
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.hapticService = inject(HapticService);
    this.storageService = inject(StorageService);
    this.authenticated = output();
    this.isScanning = signal(false);
    this.isAuthenticated = signal(false);
    this.hasError = signal(false);
    this.scanProgress = signal(0);
    this.securityLevel = signal("LEVEL-1");
    this.workerId = signal("");
    this.assignedZone = signal("");
    this.statusMessage = signal("PLACE FINGER ON SCANNER");
    this.statusIcon = signal("\u{1F446}");
    this.buttonText = signal("SCAN BIOMETRIC");
    this.gridLines = Array(12).fill(0);
  }
  ngOnInit() {
    const profile = this.storageService.getWorkerProfile();
    if (profile) {
      this.workerId.set(profile.id);
      this.assignedZone.set(`Zone ${profile.zone}`);
      this.securityLevel.set(profile.clearanceLevel);
    } else {
      console.warn("\u26A0\uFE0F No worker profile found, using fallback values");
      this.generateWorkerId();
    }
  }
  ngOnDestroy() {
    this.clearIntervals();
  }
  startScan() {
    if (this.isAuthenticated() || this.isScanning())
      return;
    this.isScanning.set(true);
    this.hasError.set(false);
    this.statusMessage.set("SCANNING...");
    this.statusIcon.set("\u{1F50D}");
    this.buttonText.set("SCANNING...");
    this.hapticService.trigger("login");
    this.startProgressAnimation();
    this.scanTimeout = window.setTimeout(() => {
      this.completeScan();
    }, 2e3);
  }
  stopScan() {
    if (!this.isScanning())
      return;
    const progress = this.scanProgress();
    if (progress < 100) {
      this.cancelScan();
    }
  }
  startProgressAnimation() {
    this.scanProgress.set(0);
    this.progressInterval = window.setInterval(() => {
      const current = this.scanProgress();
      if (current >= 100) {
        if (this.progressInterval) {
          clearInterval(this.progressInterval);
        }
      } else {
        this.scanProgress.set(Math.min(current + 3, 100));
        if (current % 20 === 0) {
          this.hapticService.trigger("heartbeat");
        }
      }
    }, 60);
  }
  completeScan() {
    this.clearIntervals();
    const success = Math.random() > 0.2;
    if (success) {
      this.authenticateUser();
    } else {
      this.failAuthentication();
    }
  }
  authenticateUser() {
    this.isScanning.set(false);
    this.isAuthenticated.set(true);
    this.statusMessage.set("AUTHENTICATION SUCCESSFUL");
    this.statusIcon.set("\u2705");
    this.buttonText.set("PROCEED TO TERMINAL");
    const zones = ["ZONE-1 INDUSTRIAL", "ZONE-2 RESIDENTIAL", "ZONE-3 RESEARCH"];
    const clearances = ["LEVEL-1", "LEVEL-2", "LEVEL-3"];
    this.assignedZone.set(zones[Math.floor(Math.random() * zones.length)]);
    this.securityLevel.set(clearances[Math.floor(Math.random() * clearances.length)]);
    this.hapticService.trigger("success");
    console.log(`[Login] Worker ${this.workerId()} authenticated successfully`);
  }
  failAuthentication() {
    this.isScanning.set(false);
    this.hasError.set(true);
    this.statusMessage.set("AUTHENTICATION FAILED - RETRY");
    this.statusIcon.set("\u274C");
    this.buttonText.set("RETRY SCAN");
    this.scanProgress.set(0);
    this.hapticService.trigger("error");
    setTimeout(() => {
      this.resetScan();
    }, 3e3);
  }
  cancelScan() {
    this.clearIntervals();
    this.resetScan();
    this.statusMessage.set("SCAN CANCELLED");
    this.statusIcon.set("\u26A0");
    setTimeout(() => {
      this.resetScan();
    }, 1e3);
  }
  resetScan() {
    this.isScanning.set(false);
    this.hasError.set(false);
    this.scanProgress.set(0);
    this.statusMessage.set("PLACE FINGER ON SCANNER");
    this.statusIcon.set("\u{1F446}");
    this.buttonText.set("SCAN BIOMETRIC");
  }
  onAction() {
    if (this.isAuthenticated()) {
      const profile = this.storageService.getWorkerProfile();
      if (profile) {
        this.authenticated.emit(profile);
      } else {
        console.error("\u274C No worker profile found in storage");
        this.hasError.set(true);
        this.statusMessage.set("PROFILE NOT FOUND");
      }
    } else if (!this.isScanning()) {
      this.startScan();
    }
  }
  generateWorkerId() {
    const zones = ["Z1", "Z2", "Z3", "Z4", "Z5"];
    const roles = ["OP", "TC", "EN", "SC", "MN"];
    const zone = zones[Math.floor(Math.random() * zones.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    const number = Math.floor(Math.random() * 999) + 1;
    this.workerId.set(`${zone}-${role}-${number.toString().padStart(3, "0")}`);
  }
  clearIntervals() {
    if (this.scanInterval) {
      clearInterval(this.scanInterval);
    }
    if (this.scanTimeout) {
      clearTimeout(this.scanTimeout);
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], outputs: { authenticated: "authenticated" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 16, consts: [[1, "login-container"], [1, "grid-background"], [1, "login-panel"], [1, "login-header"], [1, "terminal-title"], [1, "security-level"], [1, "scanner-container"], [1, "scanner-label"], [1, "fingerprint-scanner", 3, "mousedown", "mouseup", "touchstart", "touchend"], [1, "scanner-grid"], ["class", "grid-line", 4, "ngFor", "ngForOf"], [1, "fingerprint-icon"], ["viewBox", "0 0 100 100", "width", "80", "height", "80"], ["d", "M50 20 C35 20, 20 35, 20 50 C20 65, 35 80, 50 80 C65 80, 80 65, 80 50 C80 35, 65 20, 50 20", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M50 30 C40 30, 30 40, 30 50 C30 60, 40 70, 50 70 C60 70, 70 60, 70 50 C70 40, 60 30, 50 30", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M50 40 C45 40, 40 45, 40 50 C40 55, 45 60, 50 60 C55 60, 60 55, 60 50 C60 45, 55 40, 50 40", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["class", "scan-progress", 4, "ngIf"], [1, "scanner-overlay"], [1, "scan-line"], [1, "status-message"], [1, "status-icon"], [1, "status-text"], ["class", "worker-info", 4, "ngIf"], [1, "action-section"], [1, "action-button", 3, "click", "disabled"], [1, "button-text"], [1, "button-indicator"], [1, "security-warnings"], [1, "warning-item"], [1, "warning-icon"], [1, "grid-line"], [1, "scan-progress"], [1, "progress-ring"], ["width", "120", "height", "120"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "var(--ui-border)", "stroke-width", "2"], ["cx", "60", "cy", "60", "r", "50", "fill", "none", "stroke", "var(--rust-orange)", "stroke-width", "3", "stroke-dasharray", "314"], [1, "progress-text"], [1, "worker-info"], [1, "worker-id"], [1, "assignment"], [1, "clearance"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5, "WORKER AUTHENTICATION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10, "BIOMETRIC SCANNER");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275listener("mousedown", function LoginComponent_Template_div_mousedown_11_listener() {
          return ctx.startScan();
        })("mouseup", function LoginComponent_Template_div_mouseup_11_listener() {
          return ctx.stopScan();
        })("touchstart", function LoginComponent_Template_div_touchstart_11_listener() {
          return ctx.startScan();
        })("touchend", function LoginComponent_Template_div_touchend_11_listener() {
          return ctx.stopScan();
        });
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275template(13, LoginComponent_div_13_Template, 1, 0, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 12);
        \u0275\u0275element(16, "path", 13)(17, "path", 14)(18, "path", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(19, LoginComponent_div_19_Template, 7, 3, "div", 16);
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(20, "div", 17);
        \u0275\u0275element(21, "div", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 19)(23, "span", 20);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 21);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(27, LoginComponent_div_27_Template, 7, 3, "div", 22);
        \u0275\u0275elementStart(28, "div", 23)(29, "button", 24);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_29_listener() {
          return ctx.onAction();
        });
        \u0275\u0275elementStart(30, "span", 25);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 26);
        \u0275\u0275text(33, "\u2192");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 27)(35, "div", 28)(36, "span", 29);
        \u0275\u0275text(37, "\u26A0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "UNAUTHORIZED ACCESS PROHIBITED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 28)(41, "span", 29);
        \u0275\u0275text(42, "\u{1F441}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44, "ALL ACTIVITIES MONITORED");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("CLEARANCE: ", ctx.securityLevel(), "");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("scanning", ctx.isScanning())("authenticated", ctx.isAuthenticated())("error", ctx.hasError());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.gridLines);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.isScanning());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.statusIcon());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.statusMessage());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isAuthenticated());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("authenticated", ctx.isAuthenticated());
        \u0275\u0275property("disabled", ctx.isScanning());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.buttonText());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.login-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: var(--dark-metal);\n  overflow: hidden;\n}\n.grid-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background-image:\n    linear-gradient(var(--ui-border) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--ui-border) 1px,\n      transparent 1px);\n  background-size: 20px 20px;\n  animation: _ngcontent-%COMP%_grid-flicker 8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_grid-flicker {\n  0%, 100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n.login-panel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(47, 47, 47, 0.95) 0%,\n      rgba(18, 18, 18, 0.95) 100%);\n  border: 2px solid var(--ui-border);\n  border-radius: 8px;\n  padding: 32px;\n  width: 90%;\n  max-width: 450px;\n  box-shadow: 0 0 50px rgba(255, 69, 0, 0.1), inset 0 0 20px rgba(0, 0, 0, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.terminal-title[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n}\n.security-level[_ngcontent-%COMP%] {\n  color: var(--ui-text-secondary);\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n.scanner-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.scanner-label[_ngcontent-%COMP%] {\n  color: var(--ui-text);\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n.fingerprint-scanner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  margin: 0 auto 20px;\n  background:\n    radial-gradient(\n      circle at center,\n      rgba(46, 139, 87, 0.1) 0%,\n      rgba(18, 18, 18, 0.8) 70%);\n  border: 3px solid var(--terminal-green);\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.fingerprint-scanner[_ngcontent-%COMP%]:hover {\n  border-color: var(--rust-orange);\n  transform: scale(1.05);\n}\n.fingerprint-scanner.scanning[_ngcontent-%COMP%] {\n  border-color: var(--rust-orange);\n  box-shadow: 0 0 30px rgba(255, 69, 0, 0.5), inset 0 0 20px rgba(255, 69, 0, 0.1);\n  animation: _ngcontent-%COMP%_scanner-pulse 2s ease-in-out infinite;\n}\n.fingerprint-scanner.authenticated[_ngcontent-%COMP%] {\n  border-color: var(--terminal-green);\n  box-shadow: 0 0 30px rgba(46, 139, 87, 0.6), inset 0 0 20px rgba(46, 139, 87, 0.2);\n  animation: _ngcontent-%COMP%_success-glow 1s ease-out;\n}\n.fingerprint-scanner.error[_ngcontent-%COMP%] {\n  border-color: var(--blood-red);\n  box-shadow: 0 0 30px rgba(139, 0, 0, 0.6), inset 0 0 20px rgba(139, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_error-shake 0.5s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_scanner-pulse {\n  0%, 100% {\n    box-shadow: 0 0 20px rgba(255, 69, 0, 0.3), inset 0 0 20px rgba(255, 69, 0, 0.1);\n  }\n  50% {\n    box-shadow: 0 0 40px rgba(255, 69, 0, 0.6), inset 0 0 30px rgba(255, 69, 0, 0.2);\n  }\n}\n@keyframes _ngcontent-%COMP%_success-glow {\n  0% {\n    box-shadow: 0 0 20px rgba(46, 139, 87, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 60px rgba(46, 139, 87, 0.8);\n  }\n  100% {\n    box-shadow: 0 0 30px rgba(46, 139, 87, 0.6);\n  }\n}\n@keyframes _ngcontent-%COMP%_error-shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n.scanner-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  width: 80%;\n  height: 80%;\n  opacity: 0.3;\n}\n.grid-line[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: var(--terminal-green);\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(1) {\n  top: 8.33%;\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(2) {\n  top: 16.66%;\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(3) {\n  top: 25%;\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(4) {\n  top: 33.33%;\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(5) {\n  top: 41.66%;\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(6) {\n  top: 50%;\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(7) {\n  top: 58.33%;\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(8) {\n  top: 66.66%;\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(9) {\n  top: 75%;\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(10) {\n  top: 83.33%;\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(11) {\n  top: 91.66%;\n}\n.grid-line[_ngcontent-%COMP%]:nth-child(12) {\n  top: 100%;\n}\n.fingerprint-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--terminal-green);\n  opacity: 0.6;\n  transition: all 0.3s ease;\n}\n.scanning[_ngcontent-%COMP%]   .fingerprint-icon[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n  opacity: 0.8;\n  animation: _ngcontent-%COMP%_fingerprint-scan 1.5s ease-in-out infinite;\n}\n.authenticated[_ngcontent-%COMP%]   .fingerprint-icon[_ngcontent-%COMP%] {\n  color: var(--terminal-green);\n  opacity: 1;\n  transform: translate(-50%, -50%) scale(1);\n}\n.error[_ngcontent-%COMP%]   .fingerprint-icon[_ngcontent-%COMP%] {\n  color: var(--blood-red);\n  opacity: 0.9;\n}\n@keyframes _ngcontent-%COMP%_fingerprint-scan {\n  0%, 100% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.1);\n  }\n}\n.scan-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.progress-ring[_ngcontent-%COMP%] {\n  position: relative;\n}\n.progress-ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.progress-ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  transition: stroke-dashoffset 0.1s linear;\n}\n.progress-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--rust-orange);\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 14px;\n  font-weight: bold;\n}\n.scanner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  overflow: hidden;\n  pointer-events: none;\n}\n.scanning[_ngcontent-%COMP%]   .scanner-overlay[_ngcontent-%COMP%]   .scan-line[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_scan-sweep 2s linear infinite;\n}\n.scan-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--rust-orange) 50%,\n      transparent 100%);\n  opacity: 0;\n}\n@keyframes _ngcontent-%COMP%_scan-sweep {\n  0% {\n    top: 0%;\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    top: 100%;\n    opacity: 0;\n  }\n}\n.status-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 24px;\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 14px;\n}\n.status-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.status-text[_ngcontent-%COMP%] {\n  color: var(--ui-text);\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.worker-info[_ngcontent-%COMP%] {\n  background: rgba(47, 47, 47, 0.5);\n  border: 1px solid var(--ui-border);\n  border-radius: 4px;\n  padding: 16px;\n  margin-bottom: 24px;\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 12px;\n}\n.worker-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.worker-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.worker-id[_ngcontent-%COMP%] {\n  color: var(--terminal-green);\n  font-weight: bold;\n}\n.assignment[_ngcontent-%COMP%] {\n  color: var(--ui-text);\n}\n.clearance[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n}\n.action-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.action-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--button-idle) 0%,\n      rgba(47, 47, 47, 0.8) 100%);\n  border: 2px solid var(--ui-border);\n  border-radius: 4px;\n  color: var(--ui-text);\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.action-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--button-hover) 0%,\n      rgba(255, 69, 0, 0.8) 100%);\n  border-color: var(--rust-orange);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(255, 69, 0, 0.3);\n}\n.action-button[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 2px 6px rgba(255, 69, 0, 0.3);\n}\n.action-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.action-button.authenticated[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--terminal-green) 0%,\n      rgba(46, 139, 87, 0.8) 100%);\n  border-color: var(--terminal-green);\n}\n.button-indicator[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform 0.3s ease;\n}\n.action-button[_ngcontent-%COMP%]:hover   .button-indicator[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.security-warnings[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  text-align: center;\n}\n.warning-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--ui-text-secondary);\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  color: var(--warning-amber);\n  font-size: 12px;\n}\n@media (max-width: 768px) {\n  .login-panel[_ngcontent-%COMP%] {\n    width: 95%;\n    padding: 24px;\n  }\n  .fingerprint-scanner[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n  .terminal-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .security-warnings[_ngcontent-%COMP%] {\n    bottom: 10px;\n  }\n}\n@media (max-width: 480px) {\n  .login-panel[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .fingerprint-scanner[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n  }\n  .fingerprint-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .progress-ring[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 90px;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\login\\login.component.ts", lineNumber: 14 });
})();

// src/app/components/chapter-navigator/chapter-navigator.component.ts
function ChapterNavigatorComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Last sync: ", \u0275\u0275pipeBind2(3, 1, ctx_r0.lastSyncTime(), "short"), "");
  }
}
function ChapterNavigatorComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function ChapterNavigatorComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading chapter data...");
    \u0275\u0275elementEnd()();
  }
}
function ChapterNavigatorComponent_main_17_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "small", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chapter_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Release: ", \u0275\u0275pipeBind2(3, 1, chapter_r3.releaseDate, "medium"), " ");
  }
}
function ChapterNavigatorComponent_main_17_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275element(2, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chapter_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", chapter_r3.downloadProgress || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", chapter_r3.downloadProgress || 0, "%");
  }
}
function ChapterNavigatorComponent_main_17_div_1_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u25B6");
    \u0275\u0275elementEnd();
  }
}
function ChapterNavigatorComponent_main_17_div_1_div_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2B07");
    \u0275\u0275elementEnd();
  }
}
function ChapterNavigatorComponent_main_17_div_1_div_16_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F6AB}");
    \u0275\u0275elementEnd();
  }
}
function ChapterNavigatorComponent_main_17_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, ChapterNavigatorComponent_main_17_div_1_div_16_span_1_Template, 2, 0, "span", 47)(2, ChapterNavigatorComponent_main_17_div_1_div_16_span_2_Template, 2, 0, "span", 47)(3, ChapterNavigatorComponent_main_17_div_1_div_16_span_3_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chapter_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", chapter_r3.canAccess && chapter_r3.isAvailableLocally);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", chapter_r3.isAvailableRemotely && !chapter_r3.isAvailableLocally);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !chapter_r3.canAccess);
  }
}
function ChapterNavigatorComponent_main_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function ChapterNavigatorComponent_main_17_div_1_Template_div_click_0_listener() {
      const chapter_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectChapter(chapter_r3));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "div", 31);
    \u0275\u0275text(3, " \u{1F4BE} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275text(5, " \u{1F310} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 34)(9, "h3", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ChapterNavigatorComponent_main_17_div_1_div_13_Template, 4, 4, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 38);
    \u0275\u0275template(15, ChapterNavigatorComponent_main_17_div_1_div_15_Template, 5, 3, "div", 39)(16, ChapterNavigatorComponent_main_17_div_1_div_16_Template, 4, 3, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chapter_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.getChapterClasses(chapter_r3));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", chapter_r3.isAvailableLocally);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", chapter_r3.isAvailableRemotely);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("unlocked", chapter_r3.canAccess);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chapter_r3.canAccess ? "\u{1F513}" : "\u{1F512}", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(chapter_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chapter_r3.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", chapter_r3.releaseDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", chapter_r3.isDownloading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !chapter_r3.isDownloading);
  }
}
function ChapterNavigatorComponent_main_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 27);
    \u0275\u0275template(1, ChapterNavigatorComponent_main_17_div_1_Template, 17, 13, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.chapters())("ngForTrackBy", ctx_r0.trackByChapterId);
  }
}
function ChapterNavigatorComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50);
    \u0275\u0275text(3, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "No Chapters Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "No story files are currently available.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 51);
    \u0275\u0275listener("click", function ChapterNavigatorComponent_div_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadChapterList());
    });
    \u0275\u0275text(9, " Retry Loading ");
    \u0275\u0275elementEnd()()();
  }
}
var ChapterNavigatorComponent = class _ChapterNavigatorComponent {
  constructor() {
    this.chapterSelected = new EventEmitter();
    this.exitNavigation = new EventEmitter();
    this.chapters = signal([]);
    this.isLoading = signal(false);
    this.lastSyncTime = signal(null);
    this.errorMessage = signal(null);
    this.contentService = inject(ContentService);
    this.remoteContentService = inject(RemoteContentService);
  }
  /**
   * 🔥 GETTERS PARA ESTADÍSTICAS
   */
  get localChaptersCount() {
    return this.chapters().filter((ch) => ch.isAvailableLocally).length;
  }
  get remoteChaptersCount() {
    return this.chapters().filter((ch) => ch.isAvailableRemotely).length;
  }
  get unlockedChaptersCount() {
    return this.chapters().filter((ch) => ch.canAccess).length;
  }
  ngOnInit() {
    this.loadChapterList();
    this.checkForRemoteUpdates();
  }
  /**
   * 🔥 CARGAR LISTA DE CAPÍTULOS
   * Combina capítulos locales y remotos
   */
  loadChapterList() {
    return __async(this, null, function* () {
      this.isLoading.set(true);
      this.errorMessage.set(null);
      try {
        console.log("\u{1F50D} ChapterNavigator: Starting to load chapter list...");
        const gameData = yield new Promise((resolve) => {
          this.contentService.gameData$.subscribe((data) => {
            if (data)
              resolve(data);
          });
        });
        const localChapters = gameData?.chapters || [];
        console.log("\u{1F4DA} Local chapters found:", localChapters.length);
        let remoteChapterIds = [];
        console.log("\u{1F310} Checking for remote chapters...");
        try {
          remoteChapterIds = yield this.remoteContentService.getRemoteChapterList();
          console.log("\u{1F310} Remote chapters found:", remoteChapterIds);
        } catch (remoteError) {
          console.error("\u274C Error fetching remote chapters:", remoteError);
          this.errorMessage.set("Error connecting to remote content");
        }
        const combinedChapters = localChapters.map((chapter) => __spreadProps(__spreadValues({}, chapter), {
          isAvailableLocally: true,
          isAvailableRemotely: remoteChapterIds.includes(chapter.id),
          canAccess: chapter.isUnlocked
        }));
        for (const remoteId of remoteChapterIds) {
          const existsLocally = localChapters.find((ch) => ch.id === remoteId);
          if (!existsLocally) {
            try {
              const remoteChapter = yield this.remoteContentService.downloadChapter(remoteId);
              if (remoteChapter) {
                const hasContent = remoteChapter.slides && remoteChapter.slides.length > 0;
                const canAccess = remoteChapter.isUnlocked && hasContent;
                combinedChapters.push(__spreadProps(__spreadValues({}, remoteChapter), {
                  isAvailableLocally: false,
                  isAvailableRemotely: true,
                  canAccess
                }));
                console.log(`\u2705 Remote chapter loaded: ${remoteId} - ${remoteChapter.title} (${hasContent ? remoteChapter.slides.length : 0} slides, ${canAccess ? "accessible" : "locked"})`);
              }
            } catch (downloadError) {
              console.warn(`\u26A0\uFE0F Could not download remote chapter ${remoteId}:`, downloadError);
              combinedChapters.push({
                id: remoteId,
                title: `${remoteId} (Remote)`,
                description: "Available for download",
                isUnlocked: false,
                slides: [],
                isAvailableLocally: false,
                isAvailableRemotely: true,
                canAccess: false
              });
            }
          }
        }
        combinedChapters.sort((a, b) => a.id.localeCompare(b.id));
        this.chapters.set(combinedChapters);
        console.log("\u{1F4DA} Chapter list loaded:", combinedChapters.length);
      } catch (error) {
        console.error("\u274C Error loading chapter list:", error);
        this.errorMessage.set("Error loading chapters");
      } finally {
        this.isLoading.set(false);
      }
    });
  }
  /**
   * 🔥 VERIFICAR ACTUALIZACIONES REMOTAS
   */
  checkForRemoteUpdates() {
    return __async(this, null, function* () {
      if (!environment.github.narrative.token) {
        console.log("\u{1F511} No GitHub token configured, skipping remote check");
        return;
      }
      try {
        const localChapterIds = this.chapters().map((ch) => ch.id);
        const newChapters = yield this.remoteContentService.checkForUpdates(localChapterIds);
        if (newChapters.length > 0) {
          console.log(`\u{1F195} ${newChapters.length} new chapters available`);
          yield this.loadChapterList();
        }
        this.lastSyncTime.set(/* @__PURE__ */ new Date());
      } catch (error) {
        console.warn("\u26A0\uFE0F Error checking for updates:", error);
      }
    });
  }
  /**
   * 🔥 SELECCIONAR CAPÍTULO
   */
  selectChapter(chapter) {
    if (!chapter.canAccess) {
      console.log("\u{1F512} Chapter not accessible:", chapter.id);
      return;
    }
    if (chapter.slides && chapter.slides.length > 0) {
      console.log(`\u{1F4D6} Loading chapter: ${chapter.title} (${chapter.slides.length} slides)`);
      this.chapterSelected.emit(chapter);
    } else if (chapter.isAvailableRemotely) {
      this.downloadChapter(chapter);
    }
  }
  /**
   * 🔥 DESCARGAR CAPÍTULO REMOTO
   */
  downloadChapter(chapter) {
    return __async(this, null, function* () {
      if (!environment.github.narrative.token) {
        this.errorMessage.set("GitHub token required for remote content");
        return;
      }
      try {
        const updatedChapters = this.chapters().map((ch) => ch.id === chapter.id ? __spreadProps(__spreadValues({}, ch), { isDownloading: true, downloadProgress: 0 }) : ch);
        this.chapters.set(updatedChapters);
        const progressInterval = setInterval(() => {
          const chapters = this.chapters();
          const downloading = chapters.find((ch) => ch.id === chapter.id);
          if (downloading && downloading.downloadProgress !== void 0) {
            downloading.downloadProgress += 20;
            this.chapters.set([...chapters]);
            if (downloading.downloadProgress >= 100) {
              clearInterval(progressInterval);
            }
          }
        }, 200);
        const downloadedChapter = yield this.remoteContentService.downloadChapter(chapter.id);
        if (downloadedChapter) {
          const updatedChapters2 = this.chapters().map((ch) => ch.id === chapter.id ? __spreadProps(__spreadValues({}, downloadedChapter), {
            isAvailableLocally: true,
            isAvailableRemotely: true,
            isDownloading: false,
            downloadProgress: void 0,
            canAccess: downloadedChapter.isUnlocked
          }) : ch);
          this.chapters.set(updatedChapters2);
          if (downloadedChapter.isUnlocked) {
            setTimeout(() => {
              this.chapterSelected.emit(downloadedChapter);
            }, 500);
          }
        }
      } catch (error) {
        console.error("\u274C Error downloading chapter:", error);
        this.errorMessage.set("Error downloading chapter");
        const updatedChapters = this.chapters().map((ch) => ch.id === chapter.id ? __spreadProps(__spreadValues({}, ch), { isDownloading: false, downloadProgress: void 0 }) : ch);
        this.chapters.set(updatedChapters);
      }
    });
  }
  /**
   * 🔥 OBTENER CLASES CSS PARA CAPÍTULO
   */
  getChapterClasses(chapter) {
    const classes = ["chapter-item"];
    if (!chapter.canAccess)
      classes.push("chapter-locked");
    if (chapter.isDownloading)
      classes.push("chapter-downloading");
    if (!chapter.isAvailableLocally && chapter.isAvailableRemotely)
      classes.push("chapter-remote");
    if (chapter.isAvailableLocally)
      classes.push("chapter-local");
    return classes.join(" ");
  }
  /**
   * 🔥 SALIR DEL NAVEGADOR
   */
  exitNavigator() {
    this.exitNavigation.emit();
  }
  /**
   * 🔥 FORZAR SINCRONIZACIÓN
   */
  forceSyncRemote() {
    return __async(this, null, function* () {
      yield this.checkForRemoteUpdates();
    });
  }
  /**
   * 🔥 TRACK BY FUNCTION PARA ngFor
   */
  trackByChapterId(index, chapter) {
    return chapter.id;
  }
  static {
    this.\u0275fac = function ChapterNavigatorComponent_Factory(t) {
      return new (t || _ChapterNavigatorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChapterNavigatorComponent, selectors: [["app-chapter-navigator"]], outputs: { chapterSelected: "chapterSelected", exitNavigation: "exitNavigation" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 8, consts: [[1, "chapter-navigator"], [1, "navigator-header"], ["title", "Back to Menu", 1, "exit-btn", 3, "click"], [1, "icon-back"], [1, "header-info"], [1, "navigator-title"], [1, "navigator-subtitle"], [1, "sync-controls"], ["title", "Check for Updates", 1, "sync-btn", 3, "click", "disabled"], [1, "icon-sync"], ["class", "last-sync", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "chapter-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "navigator-footer"], [1, "stats"], [1, "stat"], [1, "stat-value"], [1, "stat-label"], [1, "last-sync"], [1, "error-message"], [1, "error-content"], [1, "error-icon"], [1, "error-text"], [1, "loading-state"], [1, "loading-spinner"], [1, "chapter-list"], ["class", "chapter-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "chapter-item", 3, "click", "ngClass"], [1, "chapter-status"], ["title", "Available Locally", 1, "status-indicator", "local"], ["title", "Available Remotely", 1, "status-indicator", "remote"], ["title", "Access Status", 1, "status-indicator", "lock"], [1, "chapter-info"], [1, "chapter-title"], [1, "chapter-description"], ["class", "chapter-meta", 4, "ngIf"], [1, "chapter-action"], ["class", "download-progress", 4, "ngIf"], ["class", "action-icon", 4, "ngIf"], [1, "chapter-meta"], [1, "release-date"], [1, "download-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "action-icon"], [4, "ngIf"], [1, "empty-state"], [1, "empty-content"], [1, "empty-icon"], [1, "retry-btn", 3, "click"]], template: function ChapterNavigatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ChapterNavigatorComponent_Template_button_click_2_listener() {
          return ctx.exitNavigator();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "\u2B05");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "h2", 5);
        \u0275\u0275text(7, "STORY FILES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, "Select Chapter to Access");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
        \u0275\u0275listener("click", function ChapterNavigatorComponent_Template_button_click_11_listener() {
          return ctx.forceSyncRemote();
        });
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13, "\u{1F504}");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, ChapterNavigatorComponent_div_14_Template, 4, 4, "div", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(15, ChapterNavigatorComponent_div_15_Template, 6, 1, "div", 11)(16, ChapterNavigatorComponent_div_16_Template, 4, 0, "div", 12)(17, ChapterNavigatorComponent_main_17_Template, 2, 2, "main", 13)(18, ChapterNavigatorComponent_div_18_Template, 10, 0, "div", 14);
        \u0275\u0275elementStart(19, "footer", 15)(20, "div", 16)(21, "div", 17)(22, "span", 18);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 19);
        \u0275\u0275text(25, "Chapters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 17)(27, "span", 18);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 19);
        \u0275\u0275text(30, "Unlocked");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("disabled", ctx.isLoading());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.lastSyncTime());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.chapters().length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.chapters().length === 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.remoteChaptersCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.unlockedChaptersCount);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], styles: ['\n\n.chapter-navigator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #121212 0%,\n      #1a1a1a 50%,\n      #0f0f0f 100%);\n  color: #e0e0e0;\n  font-family: "Courier New", monospace;\n  overflow: hidden;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  background: rgba(255, 69, 0, 0.1);\n  border-bottom: 2px solid #FF4500;\n  box-shadow: 0 2px 8px rgba(255, 69, 0, 0.3);\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .exit-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #FF4500;\n  color: #FF4500;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-family: inherit;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .exit-btn[_ngcontent-%COMP%]:hover {\n  background: #FF4500;\n  color: #121212;\n  transform: translateX(-2px);\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .exit-btn[_ngcontent-%COMP%]   .icon-back[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .navigator-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #FF4500;\n  text-shadow: 0 0 10px rgba(255, 69, 0, 0.5);\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .navigator-subtitle[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0 0;\n  font-size: 0.9rem;\n  color: #b0b0b0;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .sync-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .sync-controls[_ngcontent-%COMP%]   .sync-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #666;\n  color: #e0e0e0;\n  padding: 0.5rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-bottom: 0.5rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .sync-controls[_ngcontent-%COMP%]   .sync-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #FF4500;\n  color: #FF4500;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .sync-controls[_ngcontent-%COMP%]   .sync-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .sync-controls[_ngcontent-%COMP%]   .sync-btn[_ngcontent-%COMP%]   .icon-sync[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .sync-controls[_ngcontent-%COMP%]   .last-sync[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #888;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: rgba(255, 0, 0, 0.1);\n  border-left: 4px solid #ff0000;\n  margin: 1rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ff0000;\n  font-size: 1.2rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  color: #ffcccc;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  gap: 1rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #333;\n  border-top: 3px solid #FF4500;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n  font-size: 0.9rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #1a1a1a;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #FF4500;\n  border-radius: 3px;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: rgba(30, 30, 30, 0.8);\n  border: 1px solid #333;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]:hover:not(.chapter-locked) {\n  background: rgba(255, 69, 0, 0.1);\n  border-color: #FF4500;\n  transform: translateX(5px);\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item.chapter-locked[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item.chapter-locked[_ngcontent-%COMP%]::after {\n  content: "LOCKED";\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  background: #ff0000;\n  color: #fff;\n  padding: 0.2rem 0.5rem;\n  font-size: 0.7rem;\n  border-radius: 4px;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item.chapter-downloading[_ngcontent-%COMP%] {\n  border-color: #00ff00;\n  background: rgba(0, 255, 0, 0.1);\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item.chapter-remote[_ngcontent-%COMP%]:not(.chapter-local) {\n  border-color: #0066ff;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item.chapter-remote[_ngcontent-%COMP%]:not(.chapter-local)::before {\n  content: "REMOTE";\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  background: #0066ff;\n  color: #fff;\n  padding: 0.2rem 0.5rem;\n  font-size: 0.7rem;\n  border-radius: 4px;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: rgba(50, 50, 50, 0.8);\n  border: 1px solid #333;\n  font-size: 0.8rem;\n  opacity: 0.3;\n  transition: all 0.3s ease;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-status[_ngcontent-%COMP%]   .status-indicator.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-status[_ngcontent-%COMP%]   .status-indicator.local.active[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.2);\n  border-color: #00ff00;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-status[_ngcontent-%COMP%]   .status-indicator.remote.active[_ngcontent-%COMP%] {\n  background: rgba(0, 102, 255, 0.2);\n  border-color: #0066ff;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-status[_ngcontent-%COMP%]   .status-indicator.unlocked[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: rgba(255, 215, 0, 0.2);\n  border-color: #ffd700;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-info[_ngcontent-%COMP%]   .chapter-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.1rem;\n  color: #FF4500;\n  font-weight: bold;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-info[_ngcontent-%COMP%]   .chapter-description[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.9rem;\n  color: #b0b0b0;\n  line-height: 1.4;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-info[_ngcontent-%COMP%]   .chapter-meta[_ngcontent-%COMP%]   .release-date[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 0.8rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 60px;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-action[_ngcontent-%COMP%]   .download-progress[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-action[_ngcontent-%COMP%]   .download-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-action[_ngcontent-%COMP%]   .download-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #00ff00,\n      #0066ff);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-action[_ngcontent-%COMP%]   .download-progress[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #00ff00;\n  font-size: 0.8rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-action[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-action[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  transition: transform 0.3s ease;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-action[_ngcontent-%COMP%]:hover   .action-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.chapter-navigator[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FF4500;\n  margin-bottom: 1rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n  margin-bottom: 2rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .retry-btn[_ngcontent-%COMP%] {\n  background: #FF4500;\n  color: #121212;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: bold;\n  transition: all 0.3s ease;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .retry-btn[_ngcontent-%COMP%]:hover {\n  background: #ff6500;\n  transform: translateY(-2px);\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: rgba(255, 69, 0, 0.05);\n  border-top: 1px solid #333;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #FF4500;\n}\n.chapter-navigator[_ngcontent-%COMP%]   .navigator-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: #b0b0b0;\n  margin-top: 0.2rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .chapter-navigator[_ngcontent-%COMP%]   .navigator-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .navigator-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .chapter-navigator[_ngcontent-%COMP%]   .chapter-list[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    font-size: 0.7rem;\n  }\n  .chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-info[_ngcontent-%COMP%]   .chapter-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .chapter-navigator[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%]   .chapter-info[_ngcontent-%COMP%]   .chapter-description[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChapterNavigatorComponent, { className: "ChapterNavigatorComponent", filePath: "src\\app\\components\\chapter-navigator\\chapter-navigator.component.ts", lineNumber: 30 });
})();

// src/app/shared/components/artifact-frame/artifact-frame.component.ts
var ArtifactFrameComponent = class _ArtifactFrameComponent {
  constructor(platformId) {
    this.isGlitching = signal(false);
    this.showNotification = signal(false);
    this.notificationText = signal("");
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.isBrowser) {
      setTimeout(() => this.triggerGlitch(), 2e3);
    }
  }
  ngOnDestroy() {
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }
    if (this.glitchTimeout) {
      clearTimeout(this.glitchTimeout);
    }
  }
  /**
   * Trigger glitch effect
   */
  triggerGlitch(duration = 300) {
    if (!this.isBrowser)
      return;
    this.isGlitching.set(true);
    if (this.glitchTimeout) {
      clearTimeout(this.glitchTimeout);
    }
    this.glitchTimeout = window.setTimeout(() => {
      this.isGlitching.set(false);
    }, duration);
  }
  /**
  * Show system notification
  */
  showSystemNotification(data) {
    if (!this.isBrowser)
      return;
    this.notificationText.set(data.text);
    this.showNotification.set(true);
    const duration = data.duration || 3e3;
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }
    this.notificationTimeout = window.setTimeout(() => {
      this.hideNotification();
    }, duration);
  }
  /**
   * Hide notification
   */
  hideNotification() {
    this.showNotification.set(false);
    if (this.isBrowser) {
      setTimeout(() => {
        this.notificationText.set("");
      }, 500);
    }
  }
  /**
   * Quick system message (for testing)
   */
  testNotification() {
    this.showSystemNotification({
      text: "SYSTEM DIAGNOSTIC COMPLETE",
      type: "system",
      duration: 2e3
    });
  }
  static {
    this.\u0275fac = function ArtifactFrameComponent_Factory(t) {
      return new (t || _ArtifactFrameComponent)(\u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArtifactFrameComponent, selectors: [["app-artifact-frame"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 5, consts: [[1, "artifact-frame"], [1, "scanlines"], [1, "vignette"], [1, "rust-texture"], [1, "screen-border"], [1, "corner", "top-left"], [1, "corner", "top-right"], [1, "corner", "bottom-left"], [1, "corner", "bottom-right"], [1, "bezel", "top"], [1, "bezel", "bottom"], [1, "bezel", "left"], [1, "bezel", "right"], [1, "glitch-overlay"], [1, "glitch-bar"], [1, "notification-plate"], [1, "plate-content"], [1, "notification-icon"], [1, "notification-text"]], template: function ArtifactFrameComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 13);
        \u0275\u0275element(14, "div", 14)(15, "div", 14)(16, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 15)(18, "div", 16)(19, "span", 17);
        \u0275\u0275text(20, "\u26A0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 18);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275classProp("active", ctx.isGlitching());
        \u0275\u0275advance(4);
        \u0275\u0275classProp("visible", ctx.showNotification());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.notificationText());
      }
    }, dependencies: [CommonModule], styles: ['\n\n.artifact-frame[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  z-index: 9999;\n  overflow: hidden;\n}\n.scanlines[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.7;\n  background:\n    repeating-linear-gradient(\n      0deg,\n      transparent 0px,\n      transparent 2px,\n      rgba(46, 139, 87, 0.02) 2px,\n      rgba(46, 139, 87, 0.02) 2.5px,\n      transparent 2.5px,\n      transparent 4px);\n  animation: _ngcontent-%COMP%_scanlines-random-drift 4s ease-in-out infinite alternate;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_scanlines-random-drift {\n  0% {\n    opacity: 0.7;\n    transform: translateY(0px) scaleY(1);\n  }\n  33% {\n    opacity: 0.5;\n    transform: translateY(1px) scaleY(1.02);\n  }\n  66% {\n    opacity: 0.8;\n    transform: translateY(-0.5px) scaleY(0.98);\n  }\n  100% {\n    opacity: 0.6;\n    transform: translateY(0.5px) scaleY(1.01);\n  }\n}\n.vignette[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle at center,\n      transparent 30%,\n      rgba(0, 0, 0, 0.1) 60%,\n      rgba(0, 0, 0, var(--vignette-strength)) 100%);\n  pointer-events: none;\n}\n.rust-texture[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: var(--rust-texture-opacity);\n  background:\n    radial-gradient(\n      circle at 20% 30%,\n      rgba(139, 69, 19, 0.1) 2px,\n      transparent 4px),\n    radial-gradient(\n      circle at 70% 60%,\n      rgba(160, 82, 45, 0.08) 1px,\n      transparent 3px),\n    radial-gradient(\n      circle at 45% 80%,\n      rgba(139, 69, 19, 0.12) 3px,\n      transparent 5px),\n    linear-gradient(\n      45deg,\n      transparent 45%,\n      rgba(255, 255, 255, 0.02) 47%,\n      rgba(255, 255, 255, 0.02) 53%,\n      transparent 55%),\n    linear-gradient(\n      -30deg,\n      transparent 60%,\n      rgba(255, 255, 255, 0.01) 62%,\n      transparent 64%);\n  background-size:\n    100px 100px,\n    50px 50px,\n    80px 80px,\n    200px 200px,\n    150px 150px;\n  animation: _ngcontent-%COMP%_rust-drift 60s linear infinite;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_rust-drift {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-10px, -10px);\n  }\n}\n.screen-border[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.corner[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--ui-border);\n}\n.corner.top-left[_ngcontent-%COMP%] {\n  top: 8px;\n  left: 8px;\n  border-right: none;\n  border-bottom: none;\n}\n.corner.top-right[_ngcontent-%COMP%] {\n  top: 8px;\n  right: 8px;\n  border-left: none;\n  border-bottom: none;\n}\n.corner.bottom-left[_ngcontent-%COMP%] {\n  bottom: 8px;\n  left: 8px;\n  border-right: none;\n  border-top: none;\n}\n.corner.bottom-right[_ngcontent-%COMP%] {\n  bottom: 8px;\n  right: 8px;\n  border-left: none;\n  border-top: none;\n}\n.bezel[_ngcontent-%COMP%] {\n  position: absolute;\n  background:\n    linear-gradient(\n      var(--ui-border) 0%,\n      transparent 50%,\n      var(--ui-border) 100%);\n}\n.bezel.top[_ngcontent-%COMP%] {\n  top: 0;\n  left: 40px;\n  right: 40px;\n  height: 2px;\n  margin-left: -32px;\n  margin-right: -32px;\n}\n.bezel.bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 40px;\n  right: 40px;\n  height: 2px;\n  margin-left: -32px;\n  margin-right: -32px;\n}\n.bezel.left[_ngcontent-%COMP%] {\n  left: 0;\n  top: 40px;\n  bottom: 40px;\n  width: 2px;\n  margin-top: -32px;\n  margin-bottom: -32px;\n}\n.bezel.right[_ngcontent-%COMP%] {\n  right: 0;\n  top: 40px;\n  bottom: 40px;\n  width: 2px;\n  margin-top: -32px;\n  margin-bottom: -32px;\n}\n.glitch-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.1s ease;\n  pointer-events: none;\n}\n.glitch-overlay.active[_ngcontent-%COMP%] {\n  opacity: var(--glitch-intensity);\n  animation: _ngcontent-%COMP%_glitch-chaos var(--glitch-duration) ease-in-out;\n}\n.glitch-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--rust-orange) 20%,\n      var(--ice-blue) 50%,\n      var(--void-primary) 80%,\n      transparent 100%);\n  opacity: 0;\n}\n.glitch-bar[_ngcontent-%COMP%]:nth-child(1) {\n  top: 25%;\n  animation: _ngcontent-%COMP%_glitch-bar-1 var(--glitch-duration) ease-in-out infinite;\n}\n.glitch-bar[_ngcontent-%COMP%]:nth-child(2) {\n  top: 50%;\n  animation: _ngcontent-%COMP%_glitch-bar-2 var(--glitch-duration) ease-in-out infinite;\n}\n.glitch-bar[_ngcontent-%COMP%]:nth-child(3) {\n  top: 75%;\n  animation: _ngcontent-%COMP%_glitch-bar-3 var(--glitch-duration) ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_glitch-chaos {\n  0% {\n    filter: hue-rotate(0deg) saturate(1);\n    transform: translate(0, 0);\n  }\n  10% {\n    filter: hue-rotate(90deg) saturate(2);\n    transform: translate(-2px, -1px);\n  }\n  20% {\n    filter: hue-rotate(-90deg) saturate(0.5);\n    transform: translate(1px, 2px);\n  }\n  30% {\n    filter: hue-rotate(180deg) saturate(1.5);\n    transform: translate(-1px, -2px);\n  }\n  40% {\n    filter: hue-rotate(-180deg) saturate(0.8);\n    transform: translate(2px, 1px);\n  }\n  100% {\n    filter: hue-rotate(0deg) saturate(1);\n    transform: translate(0, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_glitch-bar-1 {\n  0%, 100% {\n    transform: translateX(-100%);\n  }\n  50% {\n    transform: translateX(100vw);\n  }\n}\n@keyframes _ngcontent-%COMP%_glitch-bar-2 {\n  0%, 100% {\n    transform: translateX(100vw);\n  }\n  50% {\n    transform: translateX(-100%);\n  }\n}\n@keyframes _ngcontent-%COMP%_glitch-bar-3 {\n  0%, 100% {\n    transform: translateX(-50%);\n  }\n  25% {\n    transform: translateX(150%);\n  }\n  75% {\n    transform: translateX(-150%);\n  }\n}\n.notification-plate[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) translateY(-100%);\n  width: 80%;\n  max-width: 400px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--ui-surface) 0%,\n      var(--dark-metal) 50%,\n      var(--ui-surface) 100%);\n  border: 2px solid var(--ui-border);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  box-shadow: 0 4px 20px var(--ui-shadow);\n  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  pointer-events: all;\n  z-index: 1000;\n}\n.notification-plate.visible[_ngcontent-%COMP%] {\n  transform: translateX(-50%) translateY(0);\n}\n.notification-plate[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -2px;\n  left: 20%;\n  right: 20%;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--rust-orange) 50%,\n      transparent 100%);\n  border-radius: 0 0 2px 2px;\n}\n.plate-content[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  color: var(--ui-text);\n  font-size: 14px;\n  font-weight: bold;\n}\n.notification-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--rust-orange);\n  animation: _ngcontent-%COMP%_notification-pulse 1.5s ease-in-out infinite;\n}\n.notification-text[_ngcontent-%COMP%] {\n  flex: 1;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n@keyframes _ngcontent-%COMP%_notification-pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n@media (max-width: 480px) {\n  .corner[_ngcontent-%COMP%] {\n    width: 15px;\n    height: 15px;\n  }\n  .notification-plate[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .plate-content[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n    font-size: 12px;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArtifactFrameComponent, { className: "ArtifactFrameComponent", filePath: "src\\app\\shared\\components\\artifact-frame\\artifact-frame.component.ts", lineNumber: 17 });
})();

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static {
    this.\u0275fac = function BaseControlValueAccessor_Factory(t) {
      return new (t || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BaseControlValueAccessor
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BuiltInControlValueAccessor_BaseFactory;
      return function BuiltInControlValueAccessor_Factory(t) {
        return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(t || _BuiltInControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BuiltInControlValueAccessor,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxControlValueAccessor_BaseFactory;
      return function CheckboxControlValueAccessor_Factory(t) {
        return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxControlValueAccessor,
      selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
      hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.checked);
          })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static {
    this.\u0275fac = function DefaultValueAccessor_Factory(t) {
      return new (t || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _DefaultValueAccessor,
      selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
      hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
            return ctx._handleInput($event.target.value);
          })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
            return ctx._compositionStart();
          })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
            return ctx._compositionEnd($event.target.value);
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control)
      this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatus_Factory(t) {
      return new (t || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatus,
      selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatusGroup_Factory(t) {
      return new (t || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatusGroup,
      selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
      hostVars: 16,
      hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException() {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value.
   *
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(opts = {}) {
    this.touched = true;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(opts);
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   */
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild((control) => control.markAllAsTouched());
  }
  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts = {}) {
    this.pristine = false;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(opts);
    }
  }
  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   *
   * @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsPristine(opts = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /**
   * Marks the control as `pending`.
   *
   * A control is pending while the control performs async validation.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates changes and
   * emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event with the latest status the control is marked pending.
   * When false, no events are emitted.
   *
   */
  markAsPending(opts = {}) {
    this.status = PENDING;
    if (opts.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(opts);
    }
  }
  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);
      }
    }
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = true;
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(errors, {
          emitEvent
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control errors are set.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event after the errors are set.
   *
   * @usageNotes
   *
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null)
      return null;
    if (!Array.isArray(currPath))
      currPath = currPath.split(".");
    if (currPath.length === 0)
      return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled())
      return DISABLED;
    if (this.errors)
      return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
      return PENDING;
    if (this._anyControlsHaveStatus(INVALID))
      return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /** @internal */
  _updateTouched(opts = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name])
      return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    if (control)
      this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static {
    this.\u0275fac = function NgForm_Factory(t) {
      return new (t || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgForm,
      selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
      hostBindings: function NgForm_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function NgForm_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        options: [InputFlags.None, "ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty)
        this.markAsDirty();
      if (this._pendingTouched)
        this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AbstractFormGroupDirective_BaseFactory;
      return function AbstractFormGroupDirective_Factory(t) {
        return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractFormGroupDirective,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static {
    this.\u0275fac = function NgModelGroup_Factory(t) {
      return new (t || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModelGroup,
      selectors: [["", "ngModelGroup", ""]],
      inputs: {
        name: [InputFlags.None, "ngModelGroup", "name"]
      },
      exportAs: ["ngModelGroup"],
      features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name)
      this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static {
    this.\u0275fac = function NgModel_Factory(t) {
      return new (t || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModel,
      selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
      inputs: {
        name: "name",
        isDisabled: [InputFlags.None, "disabled", "isDisabled"],
        model: [InputFlags.None, "ngModel", "model"],
        options: [InputFlags.None, "ngModelOptions", "options"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngModel"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static {
    this.\u0275fac = function \u0275NgNoValidate_Factory(t) {
      return new (t || _\u0275NgNoValidate)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgNoValidate,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NumberValueAccessor_BaseFactory;
      return function NumberValueAccessor_Factory(t) {
        return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(t || _NumberValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NumberValueAccessor,
      selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
      hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control)
      return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static {
    this.\u0275fac = function RadioControlRegistry_Factory(t) {
      return new (t || _RadioControlRegistry)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RadioControlRegistry,
      factory: _RadioControlRegistry.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName)
      this.name = this.formControlName;
  }
  static {
    this.\u0275fac = function RadioControlValueAccessor_Factory(t) {
      return new (t || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RadioControlValueAccessor,
      selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
      hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
            return ctx.onChange();
          })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RangeValueAccessor_BaseFactory;
      return function RangeValueAccessor_Factory(t) {
        return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(t || _RangeValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RangeValueAccessor,
      selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
      hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static {
    this.\u0275fac = function FormControlDirective_Factory(t) {
      return new (t || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlDirective,
      selectors: [["", "formControl", ""]],
      inputs: {
        form: [InputFlags.None, "formControl", "form"],
        isDisabled: [InputFlags.None, "disabled", "isDisabled"],
        model: [InputFlags.None, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static {
    this.\u0275fac = function FormGroupDirective_Factory(t) {
      return new (t || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupDirective,
      selectors: [["", "formGroup", ""]],
      hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function FormGroupDirective_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        form: [InputFlags.None, "formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static {
    this.\u0275fac = function FormGroupName_Factory(t) {
      return new (t || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupName,
      selectors: [["", "formGroupName", ""]],
      inputs: {
        name: [InputFlags.None, "formGroupName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
  static {
    this.\u0275fac = function FormArrayName_Factory(t) {
      return new (t || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormArrayName,
      selectors: [["", "formArrayName", ""]],
      inputs: {
        name: [InputFlags.None, "formArrayName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added)
      this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException();
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static {
    this.\u0275fac = function FormControlName_Factory(t) {
      return new (t || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlName,
      selectors: [["", "formControlName", ""]],
      inputs: {
        name: [InputFlags.None, "formControlName", "name"],
        isDisabled: [InputFlags.None, "disabled", "isDisabled"],
        model: [InputFlags.None, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectControlValueAccessor_BaseFactory;
      return function SelectControlValueAccessor_Factory(t) {
        return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectControlValueAccessor,
      selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
      hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select)
      this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select)
      this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function NgSelectOption_Factory(t) {
      return new (t || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgSelectOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectMultipleControlValueAccessor_BaseFactory;
      return function SelectMultipleControlValueAccessor_Factory(t) {
        return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectMultipleControlValueAccessor,
      selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
      hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target);
          })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function \u0275NgSelectMultipleOption_Factory(t) {
      return new (t || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgSelectMultipleOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
  static {
    this.\u0275fac = function AbstractValidatorDirective_Factory(t) {
      return new (t || _AbstractValidatorDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractValidatorDirective,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxValidator_BaseFactory;
      return function MaxValidator_Factory(t) {
        return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(t || _MaxValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxValidator,
      selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
        }
      },
      inputs: {
        max: "max"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinValidator_BaseFactory;
      return function MinValidator_Factory(t) {
        return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(t || _MinValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinValidator,
      selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
        }
      },
      inputs: {
        min: "min"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RequiredValidator_BaseFactory;
      return function RequiredValidator_Factory(t) {
        return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(t || _RequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RequiredValidator,
      selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
      hostVars: 1,
      hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      inputs: {
        required: "required"
      },
      features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxRequiredValidator_BaseFactory;
      return function CheckboxRequiredValidator_Factory(t) {
        return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(t || _CheckboxRequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxRequiredValidator,
      selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EmailValidator_BaseFactory;
      return function EmailValidator_Factory(t) {
        return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(t || _EmailValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _EmailValidator,
      selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
      inputs: {
        email: "email"
      },
      features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinLengthValidator_BaseFactory;
      return function MinLengthValidator_Factory(t) {
        return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(t || _MinLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinLengthValidator,
      selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
        }
      },
      inputs: {
        minlength: "minlength"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxLengthValidator_BaseFactory;
      return function MaxLengthValidator_Factory(t) {
        return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(t || _MaxLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxLengthValidator,
      selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
        }
      },
      inputs: {
        maxlength: "maxlength"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PatternValidator_BaseFactory;
      return function PatternValidator_Factory(t) {
        return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(t || _PatternValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _PatternValidator,
      selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function PatternValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
        }
      },
      inputs: {
        pattern: "pattern"
      },
      features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static {
    this.\u0275fac = function \u0275InternalFormsSharedModule_Factory(t) {
      return new (t || _\u0275InternalFormsSharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _\u0275InternalFormsSharedModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1)
      return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled)
        return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static {
    this.\u0275fac = function FormBuilder_Factory(t) {
      return new (t || _FormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FormBuilder,
      factory: _FormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static {
    this.\u0275fac = function NonNullableFormBuilder_Factory(t) {
      return new (t || _NonNullableFormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NonNullableFormBuilder,
      factory: () => (() => inject(FormBuilder).nonNullable)(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UntypedFormBuilder_BaseFactory;
      return function UntypedFormBuilder_Factory(t) {
        return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(t || _UntypedFormBuilder);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UntypedFormBuilder,
      factory: _UntypedFormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("17.3.12");
var FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function FormsModule_Factory(t) {
      return new (t || _FormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _FormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function ReactiveFormsModule_Factory(t) {
      return new (t || _ReactiveFormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ReactiveFormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/services/log.service.ts
var LogService = class _LogService {
  constructor() {
    this.MAX_LOGS = 1e3;
    this.STORAGE_KEY = "rustbone_logs";
    this.logsSubject = new BehaviorSubject([]);
    this.logs$ = this.logsSubject.asObservable();
    this.loadLogsFromStorage();
    this.logInfo("SYSTEM", "LogService initialized", "log.service");
  }
  /**
   * Get all logs
   */
  getLogs() {
    return this.logsSubject.value;
  }
  /**
   * Get logs by level
   */
  getLogsByLevel(level) {
    return this.logsSubject.value.filter((log) => log.level === level);
  }
  /**
   * Get logs by category
   */
  getLogsByCategory(category) {
    return this.logsSubject.value.filter((log) => log.category === category);
  }
  /**
   * Get logs by worker ID
   */
  getLogsByWorker(workerId) {
    return this.logsSubject.value.filter((log) => log.workerId === workerId);
  }
  /**
   * Get logs within time range
   */
  getLogsByTimeRange(startTime, endTime) {
    return this.logsSubject.value.filter((log) => {
      const logTime = new Date(log.timestamp);
      return logTime >= startTime && logTime <= endTime;
    });
  }
  /**
   * Generic log method
   */
  log(level, category, message, source, details, workerId, metadata) {
    const logEntry = {
      id: this.generateLogId(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      level,
      category,
      message,
      source,
      details,
      workerId,
      metadata
    };
    const currentLogs = this.logsSubject.value;
    const updatedLogs = [logEntry, ...currentLogs].slice(0, this.MAX_LOGS);
    this.logsSubject.next(updatedLogs);
    this.saveLogsToStorage(updatedLogs);
    if (level === "ERROR" || level === "CRITICAL") {
      console.error(`[${level}] ${category}: ${message}`, details, metadata);
    }
  }
  /**
   * Log INFO level
   */
  logInfo(category, message, source, details, workerId, metadata) {
    this.log("INFO", category, message, source, details, workerId, metadata);
  }
  /**
   * Log WARNING level
   */
  logWarning(category, message, source, details, workerId, metadata) {
    this.log("WARNING", category, message, source, details, workerId, metadata);
  }
  /**
   * Log ERROR level
   */
  logError(category, message, source, details, workerId, metadata) {
    this.log("ERROR", category, message, source, details, workerId, metadata);
  }
  /**
   * Log CRITICAL level
   */
  logCritical(category, message, source, details, workerId, metadata) {
    this.log("CRITICAL", category, message, source, details, workerId, metadata);
  }
  /**
   * Log DEBUG level
   */
  logDebug(category, message, source, details, workerId, metadata) {
    this.log("DEBUG", category, message, source, details, workerId, metadata);
  }
  /**
   * Clear all logs
   */
  clearLogs() {
    this.logsSubject.next([]);
    localStorage.removeItem(this.STORAGE_KEY);
    this.logInfo("SYSTEM", "All logs cleared", "log.service");
  }
  /**
   * Export logs as JSON
   */
  exportLogs() {
    return JSON.stringify(this.logsSubject.value, null, 2);
  }
  /**
   * Export logs as CSV
   */
  exportLogsAsCSV() {
    const logs = this.logsSubject.value;
    if (logs.length === 0)
      return "";
    const headers = ["Timestamp", "Level", "Category", "Source", "Message", "Details", "Worker ID"];
    const rows = logs.map((log) => [
      log.timestamp,
      log.level,
      log.category,
      log.source,
      log.message,
      log.details || "",
      log.workerId || ""
    ]);
    return [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
  }
  /**
   * Generate unique log ID
   */
  generateLogId() {
    return `LOG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
  /**
   * Load logs from localStorage
   */
  loadLogsFromStorage() {
    try {
      const storedLogs = localStorage.getItem(this.STORAGE_KEY);
      if (storedLogs) {
        const logs = JSON.parse(storedLogs);
        this.logsSubject.next(logs);
      }
    } catch (error) {
      console.error("Failed to load logs from storage:", error);
    }
  }
  /**
   * Save logs to localStorage
   */
  saveLogsToStorage(logs) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(logs));
    } catch (error) {
      console.error("Failed to save logs to storage:", error);
    }
  }
  static {
    this.\u0275fac = function LogService_Factory(t) {
      return new (t || _LogService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LogService, factory: _LogService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/system-logs/system-logs.component.ts
function SystemLogsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 31);
    \u0275\u0275listener("click", function SystemLogsComponent_div_32_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportJSON());
    });
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Export JSON ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function SystemLogsComponent_div_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Export CSV ");
    \u0275\u0275elementEnd()();
  }
}
function SystemLogsComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r4 = ctx.$implicit;
    \u0275\u0275property("value", level_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(level_r4);
  }
}
function SystemLogsComponent_option_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    \u0275\u0275property("value", category_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r5);
  }
}
function SystemLogsComponent_div_67_tr_18_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r6.details);
  }
}
function SystemLogsComponent_div_67_tr_18_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r6.workerId);
  }
}
function SystemLogsComponent_div_67_tr_18_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SystemLogsComponent_div_67_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 44)(1, "td", 36)(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 37)(5, "span", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 38)(8, "span", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 39)(11, "span", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 40)(14, "span", 49);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 41)(17, "div", 50)(18, "div", 51);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SystemLogsComponent_div_67_tr_18_div_20_Template, 2, 1, "div", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 42);
    \u0275\u0275template(22, SystemLogsComponent_div_67_tr_18_span_22_Template, 2, 1, "span", 53)(23, SystemLogsComponent_div_67_tr_18_span_23_Template, 2, 0, "span", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-level", log_r6.level);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getLogIcon(log_r6.level));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatTimestamp(log_r6.timestamp));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getLevelClass(log_r6.level));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r6.level);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getCategoryClass(log_r6.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r6.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r6.source);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(log_r6.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", log_r6.details);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", log_r6.workerId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !log_r6.workerId);
  }
}
function SystemLogsComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "table", 35)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th", 36);
    \u0275\u0275elementStart(5, "th", 37);
    \u0275\u0275text(6, "Timestamp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 38);
    \u0275\u0275text(8, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 39);
    \u0275\u0275text(10, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 40);
    \u0275\u0275text(12, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 41);
    \u0275\u0275text(14, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 42);
    \u0275\u0275text(16, "Worker");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, SystemLogsComponent_div_67_tr_18_Template, 24, 12, "tr", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.getPaginatedLogs());
  }
}
function SystemLogsComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 60);
    \u0275\u0275text(4, "No Logs Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.logs.length === 0 ? "No system logs available yet." : "No logs match the current filters.", " ");
  }
}
function SystemLogsComponent_footer_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 62)(1, "button", 63);
    \u0275\u0275listener("click", function SystemLogsComponent_footer_70_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousPage());
    });
    \u0275\u0275text(2, " \u25C0 Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "span", 65);
    \u0275\u0275text(5, " Page ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " of ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 66);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 63);
    \u0275\u0275listener("click", function SystemLogsComponent_footer_70_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(14, " Next \u25B6 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.currentPage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" (", (ctx_r2.currentPage - 1) * ctx_r2.logsPerPage + 1, " - ", ctx_r2.Math.min(ctx_r2.currentPage * ctx_r2.logsPerPage, ctx_r2.filteredLogs.length), " of ", ctx_r2.filteredLogs.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
var SystemLogsComponent = class _SystemLogsComponent {
  constructor(logService) {
    this.logService = logService;
    this.exitLogs = new EventEmitter();
    this.Math = Math;
    this.logs = [];
    this.filteredLogs = [];
    this.selectedLevel = "ALL";
    this.selectedCategory = "ALL";
    this.selectedWorkerId = "";
    this.startDate = "";
    this.endDate = "";
    this.searchQuery = "";
    this.levels = ["ALL", "INFO", "WARNING", "ERROR", "CRITICAL", "DEBUG"];
    this.categories = ["ALL", "SYSTEM", "SECURITY", "USER", "WORKER", "SYNC", "PERFORMANCE"];
    this.currentPage = 1;
    this.logsPerPage = 50;
    this.totalPages = 1;
    this.isLoading = false;
    this.showExportMenu = false;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.logService.logs$.pipe(takeUntil(this.destroy$)).subscribe((logs) => {
      this.logs = logs;
      this.applyFilters();
    });
    this.logs = this.logService.getLogs();
    this.applyFilters();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * Apply all filters to logs
   */
  applyFilters() {
    let filtered = [...this.logs];
    if (this.selectedLevel !== "ALL") {
      filtered = this.logService.getLogsByLevel(this.selectedLevel);
    }
    if (this.selectedCategory !== "ALL") {
      filtered = this.logService.getLogsByCategory(this.selectedCategory);
    }
    if (this.selectedWorkerId.trim()) {
      filtered = this.logService.getLogsByWorker(this.selectedWorkerId.trim());
    }
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      filtered = this.logService.getLogsByTimeRange(start, end);
    }
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter((log) => log.message.toLowerCase().includes(query) || log.source.toLowerCase().includes(query) || log.details?.toLowerCase().includes(query));
    }
    this.filteredLogs = filtered;
    this.totalPages = Math.ceil(this.filteredLogs.length / this.logsPerPage);
    this.currentPage = 1;
  }
  /**
   * Get paginated logs for current page
   */
  getPaginatedLogs() {
    const startIndex = (this.currentPage - 1) * this.logsPerPage;
    const endIndex = startIndex + this.logsPerPage;
    return this.filteredLogs.slice(startIndex, endIndex);
  }
  /**
   * Go to specific page
   */
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  /**
   * Go to previous page
   */
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  /**
   * Go to next page
   */
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  /**
   * Reset all filters
   */
  resetFilters() {
    this.selectedLevel = "ALL";
    this.selectedCategory = "ALL";
    this.selectedWorkerId = "";
    this.startDate = "";
    this.endDate = "";
    this.searchQuery = "";
    this.applyFilters();
  }
  /**
   * Clear all logs with confirmation
   */
  clearLogs() {
    if (confirm("\u26A0\uFE0F \xBFEst\xE1s seguro de que quieres borrar TODOS los logs?\n\nEsta acci\xF3n no se puede deshacer.")) {
      this.logService.clearLogs();
      this.applyFilters();
    }
  }
  /**
   * Export logs as JSON
   */
  exportJSON() {
    const json = this.logService.exportLogs();
    this.downloadFile(json, "rustbone_logs.json", "application/json");
    this.showExportMenu = false;
  }
  /**
   * Export logs as CSV
   */
  exportCSV() {
    const csv = this.logService.exportLogsAsCSV();
    this.downloadFile(csv, "rustbone_logs.csv", "text/csv");
    this.showExportMenu = false;
  }
  /**
   * Download file helper
   */
  downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }
  /**
   * Toggle export menu
   */
  toggleExportMenu() {
    this.showExportMenu = !this.showExportMenu;
  }
  /**
   * Get level badge class
   */
  getLevelClass(level) {
    const classMap = {
      "INFO": "badge-info",
      "WARNING": "badge-warning",
      "ERROR": "badge-error",
      "CRITICAL": "badge-critical",
      "DEBUG": "badge-debug"
    };
    return classMap[level] || "badge-info";
  }
  /**
   * Get category badge class
   */
  getCategoryClass(category) {
    const classMap = {
      "SYSTEM": "category-system",
      "SECURITY": "category-security",
      "USER": "category-user",
      "WORKER": "category-worker",
      "SYNC": "category-sync",
      "PERFORMANCE": "category-performance"
    };
    return classMap[category] || "category-system";
  }
  /**
   * Format timestamp for display
   */
  formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  /**
   * Get log icon
   */
  getLogIcon(level) {
    const iconMap = {
      "INFO": "\u2139\uFE0F",
      "WARNING": "\u26A0\uFE0F",
      "ERROR": "\u274C",
      "CRITICAL": "\u{1F525}",
      "DEBUG": "\u{1F50D}"
    };
    return iconMap[level] || "\u2139\uFE0F";
  }
  /**
   * Exit logs view
   */
  exit() {
    this.exitLogs.emit();
  }
  static {
    this.\u0275fac = function SystemLogsComponent_Factory(t) {
      return new (t || _SystemLogsComponent)(\u0275\u0275directiveInject(LogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemLogsComponent, selectors: [["app-system-logs"]], outputs: { exitLogs: "exitLogs" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 14, consts: [["noLogs", ""], [1, "system-logs"], [1, "logs-header"], [1, "header-left"], [1, "btn", "btn-back", 3, "click"], [1, "btn-icon"], [1, "title"], [1, "icon"], [1, "stats"], [1, "stat"], [1, "stat-label"], [1, "stat-value"], [1, "header-actions"], [1, "btn", "btn-secondary", 3, "click"], [1, "export-dropdown"], [1, "btn", "btn-primary", 3, "click"], ["class", "dropdown-menu", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [1, "filters"], [1, "filter-row"], [1, "filter-group"], [1, "filter-label"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Enter Worker ID...", 1, "filter-input", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Search message, source...", 1, "filter-input", 3, "ngModelChange", "input", "ngModel"], ["type", "datetime-local", 1, "filter-input", 3, "ngModelChange", "change", "ngModel"], [1, "logs-table-container"], ["class", "table-wrapper", 4, "ngIf", "ngIfElse"], ["class", "pagination", 4, "ngIf"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "dropdown-icon"], [3, "value"], [1, "table-wrapper"], [1, "logs-table"], [1, "col-icon"], [1, "col-timestamp"], [1, "col-level"], [1, "col-category"], [1, "col-source"], [1, "col-message"], [1, "col-worker"], ["class", "log-row", 4, "ngFor", "ngForOf"], [1, "log-row"], [1, "log-icon"], [1, "timestamp"], [1, "badge", 3, "ngClass"], [1, "category-badge", 3, "ngClass"], [1, "source"], [1, "message-wrapper"], [1, "message"], ["class", "details", 4, "ngIf"], ["class", "worker-id", 4, "ngIf"], ["class", "no-worker", 4, "ngIf"], [1, "details"], [1, "worker-id"], [1, "no-worker"], [1, "empty-state"], [1, "empty-icon"], [1, "empty-title"], [1, "empty-message"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-info"], [1, "page-numbers"], [1, "item-count"]], template: function SystemLogsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "button", 4);
        \u0275\u0275listener("click", function SystemLogsComponent_Template_button_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.exit());
        });
        \u0275\u0275elementStart(4, "span", 5);
        \u0275\u0275text(5, "\u25C0");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Back ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h1", 6)(8, "span", 7);
        \u0275\u0275text(9, "\u{1F4CB}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " SYSTEM LOGS ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "span", 9)(13, "span", 10);
        \u0275\u0275text(14, "Total:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "span", 9)(18, "span", 10);
        \u0275\u0275text(19, "Filtered:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 11);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(22, "div", 12)(23, "button", 13);
        \u0275\u0275listener("click", function SystemLogsComponent_Template_button_click_23_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.resetFilters());
        });
        \u0275\u0275elementStart(24, "span", 5);
        \u0275\u0275text(25, "\u{1F504}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Reset Filters ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 14)(28, "button", 15);
        \u0275\u0275listener("click", function SystemLogsComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleExportMenu());
        });
        \u0275\u0275elementStart(29, "span", 5);
        \u0275\u0275text(30, "\u{1F4E5}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " Export ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, SystemLogsComponent_div_32_Template, 9, 0, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 17);
        \u0275\u0275listener("click", function SystemLogsComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clearLogs());
        });
        \u0275\u0275elementStart(34, "span", 5);
        \u0275\u0275text(35, "\u{1F5D1}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " Clear All ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "section", 18)(38, "div", 19)(39, "div", 20)(40, "label", 21);
        \u0275\u0275text(41, "Level");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "select", 22);
        \u0275\u0275twoWayListener("ngModelChange", function SystemLogsComponent_Template_select_ngModelChange_42_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedLevel, $event) || (ctx.selectedLevel = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("change", function SystemLogsComponent_Template_select_change_42_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilters());
        });
        \u0275\u0275template(43, SystemLogsComponent_option_43_Template, 2, 2, "option", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 20)(45, "label", 21);
        \u0275\u0275text(46, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "select", 22);
        \u0275\u0275twoWayListener("ngModelChange", function SystemLogsComponent_Template_select_ngModelChange_47_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("change", function SystemLogsComponent_Template_select_change_47_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilters());
        });
        \u0275\u0275template(48, SystemLogsComponent_option_48_Template, 2, 2, "option", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 20)(50, "label", 21);
        \u0275\u0275text(51, "Worker ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "input", 24);
        \u0275\u0275twoWayListener("ngModelChange", function SystemLogsComponent_Template_input_ngModelChange_52_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedWorkerId, $event) || (ctx.selectedWorkerId = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("input", function SystemLogsComponent_Template_input_input_52_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilters());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 20)(54, "label", 21);
        \u0275\u0275text(55, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "input", 25);
        \u0275\u0275twoWayListener("ngModelChange", function SystemLogsComponent_Template_input_ngModelChange_56_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("input", function SystemLogsComponent_Template_input_input_56_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilters());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 19)(58, "div", 20)(59, "label", 21);
        \u0275\u0275text(60, "From Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "input", 26);
        \u0275\u0275twoWayListener("ngModelChange", function SystemLogsComponent_Template_input_ngModelChange_61_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("change", function SystemLogsComponent_Template_input_change_61_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilters());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 20)(63, "label", 21);
        \u0275\u0275text(64, "To Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "input", 26);
        \u0275\u0275twoWayListener("ngModelChange", function SystemLogsComponent_Template_input_ngModelChange_65_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("change", function SystemLogsComponent_Template_input_change_65_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilters());
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(66, "section", 27);
        \u0275\u0275template(67, SystemLogsComponent_div_67_Template, 19, 1, "div", 28)(68, SystemLogsComponent_ng_template_68_Template, 7, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275template(70, SystemLogsComponent_footer_70_Template, 15, 7, "footer", 29);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const noLogs_r8 = \u0275\u0275reference(69);
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate(ctx.logs.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.filteredLogs.length);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.showExportMenu);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedLevel);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.levels);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedWorkerId);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.filteredLogs.length > 0)("ngIfElse", noLogs_r8);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.filteredLogs.length > ctx.logsPerPage);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n}\n.system-logs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto auto 1fr auto;\n  height: 100%;\n  background:\n    radial-gradient(\n      ellipse at top,\n      rgba(15, 25, 35, 0.95) 0%,\n      rgba(5, 10, 15, 0.98) 100%),\n    linear-gradient(\n      135deg,\n      rgba(10, 20, 30, 0.9) 0%,\n      rgba(5, 10, 15, 0.95) 100%);\n  color: rgba(180, 255, 200, 0.95);\n  font-family: "Courier New", monospace;\n}\n.logs-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 30, 40, 0.8) 0%,\n      rgba(10, 15, 20, 0.9) 100%);\n  border-bottom: 2px solid rgba(180, 255, 200, 0.3);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0;\n  font-size: 28px;\n  font-weight: bold;\n  color: rgb(180, 255, 200);\n  text-shadow: 0 0 8px rgba(180, 255, 200, 0.6);\n}\n.title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: rgba(0, 0, 0, 0.4);\n  border: 1px solid rgba(180, 255, 200, 0.2);\n  border-radius: 4px;\n}\n.stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(180, 255, 200, 0.7);\n}\n.stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: rgb(180, 255, 200);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  position: relative;\n}\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  background: rgba(20, 30, 40, 0.8);\n  border: 1px solid rgba(180, 255, 200, 0.4);\n  border-radius: 4px;\n  color: rgba(180, 255, 200, 0.95);\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 40, 50, 0.9);\n  border-color: rgba(180, 255, 200, 0.7);\n  box-shadow: 0 0 12px rgba(180, 255, 200, 0.4);\n  transform: translateY(-2px);\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: rgba(100, 50, 30, 0.3);\n  border-color: rgba(180, 100, 60, 0.6);\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: rgba(100, 50, 30, 0.5);\n  border-color: rgba(180, 100, 60, 0.9);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: rgba(30, 140, 70, 0.3);\n  border-color: rgba(50, 200, 100, 0.6);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 140, 70, 0.5);\n  border-color: rgba(50, 200, 100, 0.9);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: rgba(140, 30, 30, 0.3);\n  border-color: rgba(200, 50, 50, 0.6);\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: rgba(140, 30, 30, 0.5);\n  border-color: rgba(200, 50, 50, 0.9);\n}\n.export-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  background: rgba(15, 25, 35, 0.98);\n  border: 1px solid rgba(180, 255, 200, 0.4);\n  border-radius: 4px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n  overflow: hidden;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 12px 16px;\n  background: transparent;\n  border: none;\n  color: rgba(180, 255, 200, 0.9);\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 140, 70, 0.3);\n  color: rgb(180, 255, 200);\n}\n.dropdown-item[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.filters[_ngcontent-%COMP%] {\n  padding: 16px 32px;\n  background: rgba(10, 15, 20, 0.6);\n  border-bottom: 1px solid rgba(180, 255, 200, 0.2);\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.filter-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(180, 255, 200, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.filter-select[_ngcontent-%COMP%], .filter-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  background: rgba(20, 30, 40, 0.8);\n  border: 1px solid rgba(180, 255, 200, 0.3);\n  border-radius: 4px;\n  color: rgba(180, 255, 200, 0.95);\n  font-family: "Courier New", monospace;\n  font-size: 13px;\n  transition: all 0.3s ease;\n}\n.filter-select[_ngcontent-%COMP%]:focus, .filter-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(180, 255, 200, 0.7);\n  box-shadow: 0 0 8px rgba(180, 255, 200, 0.3);\n}\n.logs-table-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 16px 32px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.logs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.logs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: rgba(20, 30, 40, 0.95);\n  z-index: 10;\n}\n.logs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: bold;\n  color: rgba(180, 255, 200, 0.9);\n  border-bottom: 2px solid rgba(180, 255, 200, 0.4);\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n}\n.logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(180, 255, 200, 0.1);\n  transition: background 0.2s ease;\n}\n.logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 40, 50, 0.3);\n}\n.logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[data-level=ERROR][_ngcontent-%COMP%], .logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[data-level=CRITICAL][_ngcontent-%COMP%] {\n  background: rgba(140, 30, 30, 0.1);\n}\n.logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  vertical-align: top;\n}\n.col-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n}\n.col-icon[_ngcontent-%COMP%]   .log-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.col-timestamp[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.col-timestamp[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(180, 255, 200, 0.7);\n}\n.col-level[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.col-category[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.col-source[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.col-source[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(180, 255, 200, 0.8);\n}\n.col-message[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n.col-worker[_ngcontent-%COMP%] {\n  width: 120px;\n  text-align: center;\n}\n.col-worker[_ngcontent-%COMP%]   .worker-id[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  background: rgba(50, 100, 200, 0.2);\n  border: 1px solid rgba(100, 150, 255, 0.4);\n  border-radius: 3px;\n  font-size: 11px;\n  color: rgba(150, 200, 255, 0.9);\n}\n.col-worker[_ngcontent-%COMP%]   .no-worker[_ngcontent-%COMP%] {\n  color: rgba(180, 255, 200, 0.4);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.badge-info[_ngcontent-%COMP%] {\n  background: rgba(50, 150, 200, 0.3);\n  border: 1px solid rgba(100, 180, 255, 0.5);\n  color: rgba(150, 220, 255, 0.95);\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(200, 150, 50, 0.3);\n  border: 1px solid rgba(255, 200, 100, 0.5);\n  color: rgba(255, 220, 150, 0.95);\n}\n.badge-error[_ngcontent-%COMP%] {\n  background: rgba(200, 50, 50, 0.3);\n  border: 1px solid rgba(255, 100, 100, 0.5);\n  color: rgba(255, 150, 150, 0.95);\n}\n.badge-critical[_ngcontent-%COMP%] {\n  background: rgba(200, 0, 0, 0.4);\n  border: 1px solid rgba(255, 50, 50, 0.7);\n  color: rgb(255, 100, 100);\n  animation: _ngcontent-%COMP%_pulse-critical 1.5s ease-in-out infinite;\n}\n.badge-debug[_ngcontent-%COMP%] {\n  background: rgba(150, 100, 200, 0.3);\n  border: 1px solid rgba(180, 150, 255, 0.5);\n  color: rgba(200, 180, 255, 0.95);\n}\n.category-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.category-system[_ngcontent-%COMP%] {\n  background: rgba(100, 100, 100, 0.3);\n  border: 1px solid rgba(150, 150, 150, 0.5);\n  color: rgba(200, 200, 200, 0.95);\n}\n.category-security[_ngcontent-%COMP%] {\n  background: rgba(200, 50, 50, 0.3);\n  border: 1px solid rgba(255, 100, 100, 0.5);\n  color: rgba(255, 150, 150, 0.95);\n}\n.category-user[_ngcontent-%COMP%] {\n  background: rgba(50, 150, 200, 0.3);\n  border: 1px solid rgba(100, 180, 255, 0.5);\n  color: rgba(150, 220, 255, 0.95);\n}\n.category-worker[_ngcontent-%COMP%] {\n  background: rgba(200, 150, 50, 0.3);\n  border: 1px solid rgba(255, 200, 100, 0.5);\n  color: rgba(255, 220, 150, 0.95);\n}\n.category-sync[_ngcontent-%COMP%] {\n  background: rgba(50, 200, 150, 0.3);\n  border: 1px solid rgba(100, 255, 200, 0.5);\n  color: rgba(150, 255, 220, 0.95);\n}\n.category-performance[_ngcontent-%COMP%] {\n  background: rgba(150, 100, 200, 0.3);\n  border: 1px solid rgba(180, 150, 255, 0.5);\n  color: rgba(200, 180, 255, 0.95);\n}\n.message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.message[_ngcontent-%COMP%] {\n  color: rgba(180, 255, 200, 0.95);\n  line-height: 1.4;\n}\n.details[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(180, 255, 200, 0.6);\n  font-style: italic;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 24px;\n  color: rgba(180, 255, 200, 0.8);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: rgba(180, 255, 200, 0.6);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 32px;\n  background: rgba(10, 15, 20, 0.6);\n  border-top: 1px solid rgba(180, 255, 200, 0.2);\n}\n.pagination-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: rgba(20, 30, 40, 0.8);\n  border: 1px solid rgba(180, 255, 200, 0.4);\n  border-radius: 4px;\n  color: rgba(180, 255, 200, 0.95);\n  font-family: "Courier New", monospace;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(30, 40, 50, 0.9);\n  border-color: rgba(180, 255, 200, 0.7);\n  box-shadow: 0 0 12px rgba(180, 255, 200, 0.4);\n}\n.pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.pagination-info[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(180, 255, 200, 0.9);\n}\n.pagination-info[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgb(180, 255, 200);\n}\n.pagination-info[_ngcontent-%COMP%]   .item-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(180, 255, 200, 0.6);\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-critical {\n  0%, 100% {\n    box-shadow: 0 0 8px rgba(255, 50, 50, 0.6);\n  }\n  50% {\n    box-shadow: 0 0 16px rgba(255, 50, 50, 0.9);\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemLogsComponent, { className: "SystemLogsComponent", filePath: "src\\app\\features\\system-logs\\system-logs.component.ts", lineNumber: 15 });
})();

// src/app/features/neural-link/neural-link.component.ts
function NeuralLinkComponent_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLastSyncText(), " ");
  }
}
function NeuralLinkComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NeuralLinkComponent_div_8_div_3_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getOperatorId());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.neuralLinkState.lastSync);
  }
}
function NeuralLinkComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 24);
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.neuralLinkState.errorMessage);
  }
}
function NeuralLinkComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function NeuralLinkComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.connect());
    });
    \u0275\u0275elementStart(1, "span", 27);
    \u0275\u0275text(2, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4, "INICIAR ENLACE");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 29);
    \u0275\u0275elementEnd();
  }
}
function NeuralLinkComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 31);
    \u0275\u0275listener("click", function NeuralLinkComponent_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.syncNow());
    });
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275text(3, "\u27F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5, "SINCRONIZAR");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 32);
    \u0275\u0275listener("click", function NeuralLinkComponent_div_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.disconnect());
    });
    \u0275\u0275elementStart(8, "span", 27);
    \u0275\u0275text(9, "\u{1F50C}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 28);
    \u0275\u0275text(11, "DESCONECTAR");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "div", 29);
    \u0275\u0275elementEnd()();
  }
}
function NeuralLinkComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275element(2, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.neuralLinkState.status === "connecting" ? "AUTENTICANDO..." : "TRANSMITIENDO...");
  }
}
var NeuralLinkComponent = class _NeuralLinkComponent {
  constructor(cloudSaveService, storageService) {
    this.cloudSaveService = cloudSaveService;
    this.storageService = storageService;
    this.exitSync = new EventEmitter();
    this.neuralLinkState = {
      status: "disconnected",
      operario: null,
      operarioId: null,
      lastSync: null,
      errorMessage: null
    };
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.cloudSaveService.neuralLink$.pipe(takeUntil(this.destroy$)).subscribe((state) => {
      this.neuralLinkState = state;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * Initiate Biometric Authentication
   */
  connect() {
    return __async(this, null, function* () {
      try {
        yield this.cloudSaveService.login();
      } catch (error) {
        console.error("Connection failed:", error);
      }
    });
  }
  /**
   * Terminate Neural Link
   */
  disconnect() {
    return __async(this, null, function* () {
      try {
        yield this.cloudSaveService.logout();
      } catch (error) {
        console.error("Disconnect failed:", error);
      }
    });
  }
  /**
   * Manual sync trigger
   */
  syncNow() {
    return __async(this, null, function* () {
      try {
        yield this.storageService.forceSyncToCloud();
      } catch (error) {
        console.error("Manual sync failed:", error);
      }
    });
  }
  /**
   * Get status class for LED indicator
   */
  getStatusClass() {
    const statusMap = {
      "disconnected": "status-red",
      "connecting": "status-amber",
      "connected": "status-green",
      "syncing": "status-amber",
      "error": "status-red"
    };
    return statusMap[this.neuralLinkState.status] || "status-red";
  }
  /**
   * Get status text
   */
  getStatusText() {
    const textMap = {
      "disconnected": "ENLACE NEURAL: INACTIVO",
      "connecting": "SINCRONIZANDO...",
      "connected": `OPERARIO: ${this.neuralLinkState.operario?.toUpperCase() || "UNKNOWN"}`,
      "syncing": "TRANSMITIENDO DATOS...",
      "error": "ERROR DE CONEXI\xD3N"
    };
    return textMap[this.neuralLinkState.status] || "DESCONOCIDO";
  }
  /**
   * Get operator ID text
   */
  getOperatorId() {
    if (!this.neuralLinkState.operarioId) {
      return "";
    }
    return `ID: ${this.neuralLinkState.operarioId.substring(0, 12).toUpperCase()}`;
  }
  /**
   * Format last sync time
   */
  getLastSyncText() {
    if (!this.neuralLinkState.lastSync) {
      return "";
    }
    const date = new Date(this.neuralLinkState.lastSync);
    return `\xDALTIMA SYNC: ${date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })}`;
  }
  /**
   * Exit Neural Link view
   */
  exit() {
    this.exitSync.emit();
  }
  static {
    this.\u0275fac = function NeuralLinkComponent_Factory(t) {
      return new (t || _NeuralLinkComponent)(\u0275\u0275directiveInject(CloudSaveService), \u0275\u0275directiveInject(StorageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NeuralLinkComponent, selectors: [["app-neural-link"]], outputs: { exitSync: "exitSync" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 9, consts: [[1, "neural-link-panel"], [1, "scanner-frame"], [1, "status-led", 3, "ngClass"], [1, "led-core"], [1, "led-glow"], [1, "neural-display"], [1, "status-text", 3, "ngClass"], ["class", "operator-info", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "neural-actions"], ["class", "btn-neural btn-connect", 3, "click", 4, "ngIf"], ["class", "connected-actions", 4, "ngIf"], ["class", "syncing-indicator", 4, "ngIf"], [1, "tech-details"], [1, "detail-line"], [1, "detail-label"], [1, "detail-value"], [1, "exit-container"], [1, "btn-exit", 3, "click"], [1, "operator-info"], [1, "operator-id"], ["class", "last-sync", 4, "ngIf"], [1, "last-sync"], [1, "error-message"], [1, "error-icon"], [1, "error-text"], [1, "btn-neural", "btn-connect", 3, "click"], [1, "btn-icon"], [1, "btn-text"], [1, "btn-scanline"], [1, "connected-actions"], [1, "btn-neural", "btn-sync", 3, "click"], [1, "btn-neural", "btn-disconnect", 3, "click"], [1, "syncing-indicator"], [1, "sync-bar"], [1, "sync-progress"], [1, "sync-text"]], template: function NeuralLinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, NeuralLinkComponent_div_8_Template, 4, 2, "div", 7)(9, NeuralLinkComponent_div_9_Template, 5, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275template(11, NeuralLinkComponent_button_11_Template, 6, 0, "button", 10)(12, NeuralLinkComponent_div_12_Template, 13, 0, "div", 11)(13, NeuralLinkComponent_div_13_Template, 5, 1, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 13)(15, "div", 14)(16, "span", 15);
        \u0275\u0275text(17, "PROTOCOLO:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 16);
        \u0275\u0275text(19, "NEURAL-SYNC v2.4.7");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 14)(21, "span", 15);
        \u0275\u0275text(22, "ENCRYPTION:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 16);
        \u0275\u0275text(24, "AES-256 / RSA-4096");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 14)(26, "span", 15);
        \u0275\u0275text(27, "LATENCY:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 16);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 17)(31, "button", 18);
        \u0275\u0275listener("click", function NeuralLinkComponent_Template_button_click_31_listener() {
          return ctx.exit();
        });
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33, "\u2190 VOLVER AL MEN\xDA");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.getStatusClass());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", ctx.getStatusClass());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.getStatusText(), " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.neuralLinkState.status === "connected" && ctx.neuralLinkState.operario);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.neuralLinkState.status === "error" && ctx.neuralLinkState.errorMessage);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.neuralLinkState.status === "disconnected" || ctx.neuralLinkState.status === "error");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.neuralLinkState.status === "connected");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.neuralLinkState.status === "syncing" || ctx.neuralLinkState.status === "connecting");
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate(ctx.neuralLinkState.status === "connected" ? "12ms" : "--");
      }
    }, dependencies: [CommonModule, NgClass, NgIf], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.neural-link-panel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(10, 15, 20, 0.95) 0%,\n      rgba(15, 20, 25, 0.98) 100%);\n  border: 2px solid rgba(180, 255, 200, 0.3);\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8), inset 0 0 30px rgba(0, 0, 0, 0.5);\n  font-family: "Courier New", monospace;\n  position: relative;\n  overflow: hidden;\n}\n.neural-link-panel[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(180, 255, 200, 0.5) 50%,\n      transparent 100%);\n  animation: _ngcontent-%COMP%_scanline 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_scanline {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(300px);\n  }\n}\n.scanner-frame[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: relative;\n}\n.status-led[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  width: 24px;\n  height: 24px;\n  z-index: 10;\n}\n.status-led[_ngcontent-%COMP%]   .led-core[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 2px solid rgba(0, 0, 0, 0.8);\n  position: relative;\n}\n.status-led[_ngcontent-%COMP%]   .led-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  filter: blur(4px);\n}\n.status-led.status-red[_ngcontent-%COMP%]   .led-core[_ngcontent-%COMP%] {\n  background: rgba(255, 50, 50, 0.9);\n  box-shadow: 0 0 8px rgba(255, 50, 50, 0.8);\n}\n.status-led.status-red[_ngcontent-%COMP%]   .led-glow[_ngcontent-%COMP%] {\n  background: rgb(255, 50, 50);\n}\n.status-led.status-amber[_ngcontent-%COMP%]   .led-core[_ngcontent-%COMP%] {\n  background: rgba(255, 180, 50, 0.9);\n  box-shadow: 0 0 8px rgba(255, 180, 50, 0.8);\n  animation: _ngcontent-%COMP%_blink-amber 1s ease-in-out infinite;\n}\n.status-led.status-amber[_ngcontent-%COMP%]   .led-glow[_ngcontent-%COMP%] {\n  background: rgb(255, 180, 50);\n  animation: _ngcontent-%COMP%_blink-amber 1s ease-in-out infinite;\n}\n.status-led.status-green[_ngcontent-%COMP%]   .led-core[_ngcontent-%COMP%] {\n  background: rgba(50, 255, 100, 0.9);\n  box-shadow: 0 0 8px rgba(50, 255, 100, 0.8);\n}\n.status-led.status-green[_ngcontent-%COMP%]   .led-glow[_ngcontent-%COMP%] {\n  background: rgb(50, 255, 100);\n}\n@keyframes _ngcontent-%COMP%_blink-amber {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n.neural-display[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(180, 255, 200, 0.2);\n  border-radius: 4px;\n  padding: 20px;\n  min-height: 120px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 12px;\n  position: relative;\n  overflow: hidden;\n}\n.neural-display[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    repeating-linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0.1) 0px,\n      rgba(0, 0, 0, 0.1) 1px,\n      transparent 1px,\n      transparent 2px);\n  pointer-events: none;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  text-align: center;\n  text-transform: uppercase;\n  text-shadow: 0 0 8px currentColor;\n}\n.status-text.status-red[_ngcontent-%COMP%] {\n  color: rgb(255, 100, 100);\n}\n.status-text.status-amber[_ngcontent-%COMP%] {\n  color: rgb(255, 200, 100);\n  animation: _ngcontent-%COMP%_pulse-text 1s ease-in-out infinite;\n}\n.status-text.status-green[_ngcontent-%COMP%] {\n  color: rgb(100, 255, 150);\n}\n@keyframes _ngcontent-%COMP%_pulse-text {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.operator-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n  margin-top: 8px;\n}\n.operator-id[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(180, 255, 200, 0.9);\n  letter-spacing: 1.5px;\n  font-family: "Courier New", monospace;\n  border: 1px solid rgba(180, 255, 200, 0.3);\n  padding: 6px 12px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.3);\n}\n.last-sync[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(180, 255, 200, 0.6);\n  letter-spacing: 1px;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 10px;\n  background: rgba(255, 50, 50, 0.1);\n  border: 1px solid rgba(255, 100, 100, 0.3);\n  border-radius: 4px;\n}\n.error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgb(255, 150, 100);\n}\n.error-message[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 150, 150, 0.95);\n}\n.neural-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.connected-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-neural[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 14px 24px;\n  background: rgba(20, 30, 40, 0.8);\n  border: 2px solid rgba(180, 255, 200, 0.4);\n  border-radius: 4px;\n  color: rgba(180, 255, 200, 0.95);\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.btn-neural[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-neural[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.btn-neural[_ngcontent-%COMP%]   .btn-scanline[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(180, 255, 200, 0.3) 50%,\n      transparent 100%);\n  transition: left 0.5s ease;\n}\n.btn-neural[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: rgba(180, 255, 200, 0.8);\n  box-shadow: 0 0 20px rgba(180, 255, 200, 0.3);\n  transform: translateY(-2px);\n}\n.btn-neural[_ngcontent-%COMP%]:hover:not(:disabled)   .btn-scanline[_ngcontent-%COMP%] {\n  left: 100%;\n}\n.btn-neural[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-neural[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-connect[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 40, 30, 0.9),\n      rgba(10, 30, 20, 0.9));\n  border-color: rgba(100, 255, 150, 0.5);\n  color: rgb(100, 255, 150);\n}\n.btn-connect[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: rgba(100, 255, 150, 0.9);\n  box-shadow: 0 0 30px rgba(100, 255, 150, 0.4);\n}\n.btn-sync[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(40, 30, 20, 0.9),\n      rgba(30, 20, 10, 0.9));\n  border-color: rgba(255, 200, 100, 0.5);\n  color: rgb(255, 200, 100);\n}\n.btn-sync[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: rgba(255, 200, 100, 0.9);\n  box-shadow: 0 0 30px rgba(255, 200, 100, 0.4);\n}\n.btn-disconnect[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(40, 20, 20, 0.9),\n      rgba(30, 10, 10, 0.9));\n  border-color: rgba(255, 100, 100, 0.5);\n  color: rgb(255, 150, 150);\n}\n.btn-disconnect[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: rgba(255, 100, 100, 0.9);\n  box-shadow: 0 0 30px rgba(255, 100, 100, 0.4);\n}\n.syncing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n}\n.sync-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(180, 255, 200, 0.3);\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.sync-progress[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 200, 100, 0.8),\n      rgba(255, 150, 50, 0.8));\n  box-shadow: 0 0 10px rgba(255, 200, 100, 0.8);\n  animation: _ngcontent-%COMP%_progress-slide 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_progress-slide {\n  0% {\n    width: 0%;\n  }\n  50% {\n    width: 100%;\n  }\n  100% {\n    width: 0%;\n  }\n}\n.sync-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgb(255, 200, 100);\n  letter-spacing: 1.5px;\n  animation: _ngcontent-%COMP%_pulse-text 1s ease-in-out infinite;\n}\n.tech-details[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(180, 255, 200, 0.2);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.detail-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: rgba(180, 255, 200, 0.6);\n  letter-spacing: 1px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgba(180, 255, 200, 0.5);\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  color: rgba(180, 255, 200, 0.8);\n}\n.exit-container[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  justify-content: center;\n}\n.btn-exit[_ngcontent-%COMP%] {\n  background: rgba(40, 45, 50, 0.8);\n  border: 1px solid rgba(180, 255, 200, 0.3);\n  color: rgba(180, 255, 200, 0.8);\n  padding: 12px 24px;\n  font-family: "Courier New", monospace;\n  font-size: 13px;\n  letter-spacing: 1px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border-radius: 4px;\n}\n.btn-exit[_ngcontent-%COMP%]:hover {\n  background: rgba(50, 60, 70, 0.9);\n  border-color: rgba(180, 255, 200, 0.6);\n  box-shadow: 0 0 10px rgba(180, 255, 200, 0.3);\n}\n.btn-exit[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n@media (max-width: 768px) {\n  .neural-link-panel[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .status-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .btn-neural[_ngcontent-%COMP%] {\n    padding: 12px 18px;\n    font-size: 12px;\n  }\n  .connected-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NeuralLinkComponent, { className: "NeuralLinkComponent", filePath: "src\\app\\features\\neural-link\\neural-link.component.ts", lineNumber: 14 });
})();

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor(platformId) {
    this.platformId = platformId;
    this._currentTheme = signal("magma");
    this.currentTheme = this._currentTheme.asReadonly();
    this.themeConfigs = {
      magma: {
        environment: "magma",
        primary: "#FF4500",
        secondary: "#FF6347",
        background: "#1A0A00",
        text: "#FFDDAA",
        description: "Forges and Industrial Sectors"
      },
      ice: {
        environment: "ice",
        primary: "#4682B4",
        secondary: "#87CEEB",
        background: "#0A0A1A",
        text: "#E0F6FF",
        description: "Cryo Facilities and Research Labs"
      },
      void: {
        environment: "void",
        primary: "#8B0000",
        secondary: "#A020F0",
        background: "#000000",
        text: "#DDA0DD",
        description: "Deep Space and Unknown Sectors"
      }
    };
    if (isPlatformBrowser(this.platformId)) {
      this.setTheme("magma");
    }
  }
  /**
   * Apply theme to the document body
   */
  setTheme(environment2) {
    if (!isPlatformBrowser(this.platformId)) {
      this._currentTheme.set(environment2);
      return;
    }
    const body = document.body;
    body.classList.remove("theme-magma", "theme-ice", "theme-void");
    body.classList.add(`theme-${environment2}`);
    this._currentTheme.set(environment2);
    if ("vibrate" in navigator) {
      navigator.vibrate([30, 50, 30]);
    }
    console.log(`[ThemeService] Theme switched to: ${environment2.toUpperCase()}`);
  }
  /**
   * Get current theme configuration
   */
  getCurrentThemeConfig() {
    return this.themeConfigs[this._currentTheme()];
  }
  /**
   * Get all available themes
   */
  getAllThemes() {
    return Object.values(this.themeConfigs);
  }
  /**
   * Cycle to next theme (for debugging/testing)
   */
  cycleTheme() {
    const themes = ["magma", "ice", "void"];
    const currentIndex = themes.indexOf(this._currentTheme());
    const nextIndex = (currentIndex + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }
  /**
   * Get CSS custom properties for current theme
   */
  getThemeCssProperties() {
    const config = this.getCurrentThemeConfig();
    return {
      "--current-primary": config.primary,
      "--current-secondary": config.secondary,
      "--current-background": config.background,
      "--current-text": config.text
    };
  }
  static {
    this.\u0275fac = function ThemeService_Factory(t) {
      return new (t || _ThemeService)(\u0275\u0275inject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

// src/app/app.component.ts
function AppComponent_app_boot_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-boot", 9);
    \u0275\u0275listener("bootCompleted", function AppComponent_app_boot_1_Template_app_boot_bootCompleted_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBootComplete());
    });
    \u0275\u0275elementEnd();
  }
}
function AppComponent_app_login_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-login", 10);
    \u0275\u0275listener("authenticated", function AppComponent_app_login_2_Template_app_login_authenticated_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAuthenticated($event));
    });
    \u0275\u0275elementEnd();
  }
}
function AppComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "header", 12)(2, "div", 13)(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16)(8, "span", 17);
    \u0275\u0275text(9, "\u25CF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "RustOS v0.0.1 ACTIVE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "main", 18)(13, "div", 19)(14, "h2");
    \u0275\u0275text(15, "RUSTBONE TERMINAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 20);
    \u0275\u0275listener("click", function AppComponent_div_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enterChapterNavigator());
    });
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "\u{1F4D6} ACCESS STORY FILES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "small");
    \u0275\u0275text(24, "Browse available chapters");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 20);
    \u0275\u0275listener("click", function AppComponent_div_3_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enterWorkerManagement());
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "\u{1F477} WORKER MANAGEMENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29, "View profile, schedule, permissions & QR code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "button", 20);
    \u0275\u0275listener("click", function AppComponent_div_3_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enterSystemLogs());
    });
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "\u{1F4CB} SYSTEM LOGS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "small");
    \u0275\u0275text(34, "View application events and diagnostics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 20);
    \u0275\u0275listener("click", function AppComponent_div_3_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enterCloudSync());
    });
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "\u2601\uFE0F CLOUD SYNC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "small");
    \u0275\u0275text(39, "Sync game data with Google Drive");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_1_0 = ctx_r1.workerProfile()) == null ? null : tmp_1_0.id) || "UNKNOWN");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r1.workerProfile()) == null ? null : tmp_2_0.zone) || "UNASSIGNED");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("WORKER: ", (tmp_3_0 = ctx_r1.workerProfile()) == null ? null : tmp_3_0.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("CLEARANCE: ", (tmp_4_0 = ctx_r1.workerProfile()) == null ? null : tmp_4_0.clearanceLevel, "");
  }
}
function AppComponent_app_chapter_navigator_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-chapter-navigator", 21);
    \u0275\u0275listener("chapterSelected", function AppComponent_app_chapter_navigator_4_Template_app_chapter_navigator_chapterSelected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChapterSelected($event));
    })("exitNavigation", function AppComponent_app_chapter_navigator_4_Template_app_chapter_navigator_exitNavigation_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exitChapterNavigator());
    });
    \u0275\u0275elementEnd();
  }
}
function AppComponent_app_reader_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-reader", 22);
    \u0275\u0275listener("exitReader", function AppComponent_app_reader_5_Template_app_reader_exitReader_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exitReader());
    });
    \u0275\u0275elementEnd();
  }
}
function AppComponent_app_worker_management_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-worker-management", 23);
    \u0275\u0275listener("exitManagement", function AppComponent_app_worker_management_6_Template_app_worker_management_exitManagement_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exitWorkerManagement());
    });
    \u0275\u0275elementEnd();
  }
}
function AppComponent_app_system_logs_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-system-logs", 24);
    \u0275\u0275listener("exitLogs", function AppComponent_app_system_logs_7_Template_app_system_logs_exitLogs_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exitSystemLogs());
    });
    \u0275\u0275elementEnd();
  }
}
function AppComponent_app_neural_link_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-neural-link", 25);
    \u0275\u0275listener("exitSync", function AppComponent_app_neural_link_8_Template_app_neural_link_exitSync_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exitCloudSync());
    });
    \u0275\u0275elementEnd();
  }
}
var AppComponent = class _AppComponent {
  constructor() {
    this.themeService = inject(ThemeService);
    this.hapticService = inject(HapticService);
    this.contentService = inject(ContentService);
    this.logService = inject(LogService);
    this.title = "PROJECT RUSTBONE";
    this.currentView = signal("boot");
    this.currentTheme = signal("magma");
    this.workerProfile = signal(null);
    this.showDebug = signal(true);
  }
  ngOnInit() {
    console.log("[APP] PROJECT RUSTBONE - Diegetic Terminal Initializing...");
    this.generateSampleLogs();
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("rustbone_save_state");
    }
    this.currentTheme.set(this.themeService.currentTheme());
  }
  /**
   * Generate sample logs for testing System Logs component
   */
  generateSampleLogs() {
    this.logService.logInfo("SYSTEM", "Application initialized", "app.component");
    this.logService.logInfo("SYSTEM", "Theme service loaded", "theme.service", "Default theme: magma");
    this.logService.logInfo("SYSTEM", "Haptic service initialized", "haptic.service");
    this.logService.logInfo("USER", "User session started", "app.component");
    this.logService.logDebug("USER", "LocalStorage check completed", "app.component", "All keys validated");
    this.logService.logInfo("WORKER", "Worker profile loaded", "worker-management.component", void 0, "W-2024-001");
    this.logService.logWarning("WORKER", "Worker approaching shift end", "worker-management.component", "15 minutes remaining", "W-2024-001");
    this.logService.logInfo("SECURITY", "QR code generated successfully", "worker-management.component", void 0, "W-2024-001");
    this.logService.logWarning("SECURITY", "Failed authentication attempt detected", "login.component", "Invalid biometric scan");
    this.logService.logInfo("SYNC", "Cloud sync initialized", "cloud-sync.service");
    this.logService.logError("SYNC", "Cloud sync failed", "cloud-sync.service", "Network timeout after 30s");
    this.logService.logDebug("PERFORMANCE", "Component render time measured", "reader.component", "127ms");
    this.logService.logWarning("PERFORMANCE", "Slow operation detected", "content.service", "Chapter load took 2.3s");
    this.logService.logCritical("PERFORMANCE", "Memory usage critical", "app.component", "Heap size: 95% of maximum");
    this.logService.logError("SYSTEM", "Failed to load asset", "content.service", "Image not found: chapter-01-bg.jpg");
    this.logService.logCritical("SECURITY", "Unauthorized access attempt", "auth.guard", "IP: 192.168.1.100, User: unknown");
    console.log("[APP] Sample logs generated for testing");
  }
  /**
   * Handle boot sequence completion
   */
  onBootComplete() {
    console.log("[APP] Boot sequence completed, transitioning to login");
    this.currentView.set("login");
  }
  /**
   * Handle successful authentication
   */
  onAuthenticated(profile) {
    console.log("[APP] Authentication successful:", profile);
    this.workerProfile.set(profile);
    this.currentView.set("app");
    setTimeout(() => {
      this.artifactFrame?.showSystemNotification({
        text: `WELCOME ${profile.id}`,
        type: "system",
        duration: 3e3
      });
    }, 1e3);
  }
  /**
   * Reset to boot sequence (debug)
   */
  resetToBoot() {
    this.currentView.set("boot");
    this.workerProfile.set(null);
    this.hapticService.trigger("boot");
  }
  /**
   * Cycle through themes (debug)
   */
  cycleTheme() {
    this.themeService.cycleTheme();
    this.currentTheme.set(this.themeService.currentTheme());
  }
  /**
   * Test glitch effect (debug)
   */
  testGlitch() {
    this.artifactFrame?.triggerGlitch(500);
    this.hapticService.trigger("glitch");
  }
  /**
   * Enter reading mode
   */
  enterReader() {
    this.currentView.set("chapter-navigator");
    this.hapticService.trigger("success");
  }
  /**
   * Enter chapter navigator
   */
  enterChapterNavigator() {
    this.currentView.set("chapter-navigator");
    this.hapticService.trigger("success");
  }
  /**
   * Handle chapter selection from navigator
   */
  onChapterSelected(chapter) {
    this.currentView.set("reader");
    setTimeout(() => {
      if (chapter.slides && chapter.slides.length > 0) {
        this.contentService.loadChapterDirectly(chapter);
      } else {
        this.contentService.navigateToChapter(chapter.id, 0);
      }
      this.hapticService.trigger("success");
    }, 0);
  }
  /**
   * Exit chapter navigator back to main menu
   */
  exitChapterNavigator() {
    this.currentView.set("app");
    this.hapticService.trigger("notification");
  }
  /**
   * Exit reading mode
   */
  exitReader() {
    this.currentView.set("app");
    this.hapticService.trigger("notification");
  }
  /**
   * Enter worker management
   */
  enterWorkerManagement() {
    this.currentView.set("worker-management");
    this.hapticService.trigger("success");
  }
  /**
   * Exit worker management back to main menu
   */
  exitWorkerManagement() {
    this.currentView.set("app");
    this.hapticService.trigger("notification");
  }
  /**
   * Enter system logs
   */
  enterSystemLogs() {
    this.currentView.set("system-logs");
    this.hapticService.trigger("success");
  }
  /**
   * Exit system logs back to main menu
   */
  exitSystemLogs() {
    this.currentView.set("app");
    this.hapticService.trigger("notification");
  }
  /**
   * Enter cloud sync
   */
  enterCloudSync() {
    this.currentView.set("cloud-sync");
    this.hapticService.trigger("success");
  }
  /**
   * Exit cloud sync back to main menu
   */
  exitCloudSync() {
    this.currentView.set("app");
    this.hapticService.trigger("notification");
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(ArtifactFrameComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.artifactFrame = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 10, consts: [[1, "rustbone-terminal"], [3, "bootCompleted", 4, "ngIf"], [3, "authenticated", 4, "ngIf"], ["class", "main-app", 4, "ngIf"], [3, "chapterSelected", "exitNavigation", 4, "ngIf"], [3, "exitReader", 4, "ngIf"], [3, "exitManagement", 4, "ngIf"], [3, "exitLogs", 4, "ngIf"], [3, "exitSync", 4, "ngIf"], [3, "bootCompleted"], [3, "authenticated"], [1, "main-app"], [1, "app-header"], [1, "worker-info"], [1, "worker-id"], [1, "zone"], [1, "system-status"], [1, "status-indicator"], [1, "app-content"], [1, "main-menu"], [1, "menu-button", 3, "click"], [3, "chapterSelected", "exitNavigation"], [3, "exitReader"], [3, "exitManagement"], [3, "exitLogs"], [3, "exitSync"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AppComponent_app_boot_1_Template, 1, 0, "app-boot", 1)(2, AppComponent_app_login_2_Template, 1, 0, "app-login", 2)(3, AppComponent_div_3_Template, 40, 4, "div", 3)(4, AppComponent_app_chapter_navigator_4_Template, 1, 0, "app-chapter-navigator", 4)(5, AppComponent_app_reader_5_Template, 1, 0, "app-reader", 5)(6, AppComponent_app_worker_management_6_Template, 1, 0, "app-worker-management", 6)(7, AppComponent_app_system_logs_7_Template, 1, 0, "app-system-logs", 7)(8, AppComponent_app_neural_link_8_Template, 1, 0, "app-neural-link", 8);
        \u0275\u0275element(9, "app-artifact-frame");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("theme-active", ctx.currentTheme());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView() === "boot");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView() === "login");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView() === "app");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView() === "chapter-navigator");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView() === "reader");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView() === "worker-management");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView() === "system-logs");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView() === "cloud-sync");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      RouterModule,
      BootComponent,
      LoginComponent,
      ReaderComponent,
      ChapterNavigatorComponent,
      WorkerManagementComponent,
      SystemLogsComponent,
      NeuralLinkComponent,
      ArtifactFrameComponent
    ], styles: ['\n\n.rustbone-terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background: var(--ui-background);\n  color: var(--ui-text);\n  overflow: hidden;\n}\n.rustbone-terminal.theme-active[_ngcontent-%COMP%] {\n  transition: all var(--theme-transition);\n}\n.main-app[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background: var(--ui-background);\n}\n.app-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--ui-surface) 0%,\n      var(--dark-metal) 100%);\n  border-bottom: 2px solid var(--ui-border);\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  z-index: 10;\n}\n.worker-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.worker-id[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.zone[_ngcontent-%COMP%] {\n  color: var(--ui-text-secondary);\n}\n.system-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--terminal-green);\n}\n.status-indicator[_ngcontent-%COMP%] {\n  font-size: 14px;\n  animation: _ngcontent-%COMP%_status-pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_status-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n.app-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  background: var(--ui-background);\n}\n.debug-controls[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  z-index: 10000;\n}\n.debug-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  background: rgba(47, 47, 47, 0.9);\n  border: 1px solid var(--ui-border);\n  border-radius: 4px;\n  color: var(--ui-text);\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 11px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.debug-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--rust-orange);\n  color: var(--dark-metal);\n}\n.main-menu[_ngcontent-%COMP%] {\n  padding: 40px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.main-menu[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--terminal-green);\n  font-family: "Courier New", monospace;\n  font-size: 24px;\n  margin-bottom: 10px;\n  text-align: center;\n  letter-spacing: 2px;\n}\n.main-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 14px;\n  margin: 5px 0;\n  text-align: center;\n  color: var(--ui-text-dim);\n}\n.main-menu[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 20px;\n  margin: 20px 0;\n  background: var(--ui-surface);\n  border: 2px solid var(--ui-border);\n  color: var(--ui-text);\n  font-family: "Courier New", monospace;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.main-menu[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: var(--terminal-green-dim);\n  border-color: var(--terminal-green);\n  box-shadow: 0 0 10px var(--terminal-green-glow);\n}\n.main-menu[_ngcontent-%COMP%]   .menu-button.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.main-menu[_ngcontent-%COMP%]   .menu-button.disabled[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n}\n.main-menu[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.main-menu[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--ui-text-dim);\n}\n@media (max-width: 768px) {\n  .app-header[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 10px;\n  }\n  .worker-info[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .main-menu[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .main-menu[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%] {\n    padding: 15px;\n    font-size: 14px;\n  }\n  .debug-controls[_ngcontent-%COMP%] {\n    top: 5px;\n    right: 5px;\n  }\n  .debug-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n    font-size: 10px;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 44 });
})();

export {
  AppComponent
};
