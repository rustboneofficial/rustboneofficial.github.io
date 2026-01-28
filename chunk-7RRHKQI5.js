import {
  APP_BOOTSTRAP_LISTENER,
  APP_ID,
  APP_INITIALIZER,
  ApplicationModule,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectorRef,
  CommonModule,
  Compiler,
  Component,
  ConnectableObservable,
  Console,
  ContentChildren,
  ContentService,
  DOCUMENT,
  Directive,
  DomAdapter,
  EMPTY,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  ErrorHandler,
  EventEmitter,
  HashLocationStrategy,
  HostBinding,
  HostListener,
  INJECTOR_SCOPE,
  Inject,
  InjectFlags,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  LOCATION_INITIALIZED,
  Location,
  LocationStrategy,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgModuleFactory$1,
  NgZone,
  Optional,
  Output,
  PLATFORM_BROWSER_ID,
  PLATFORM_ID,
  PLATFORM_INITIALIZER,
  PathLocationStrategy,
  PendingTasks,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RuntimeError,
  SecurityContext,
  SkipSelf,
  StorageService,
  Subject,
  Subscription,
  TESTABILITY,
  TESTABILITY_GETTER,
  Testability,
  TestabilityRegistry,
  Version,
  ViewContainerRef,
  ViewEncapsulation$1,
  ViewportScroller,
  XSS_SECURITY_URL,
  XhrFactory,
  __async,
  __spreadProps,
  __spreadValues,
  _global,
  _sanitizeHtml,
  _sanitizeUrl,
  afterNextRender,
  allowSanitizationBypassAndThrow,
  booleanAttribute,
  bypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript,
  bypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl,
  catchError,
  combineLatest,
  concat,
  concatMap,
  createEnvironmentInjector,
  createPlatformFactory,
  defaultIfEmpty,
  defer,
  filter,
  finalize,
  first,
  formatRuntimeError,
  forwardRef,
  from,
  getDOM,
  inject,
  internalCreateApplication,
  isInjectable,
  isNgModule,
  isObservable,
  isPlatformBrowser,
  isPlatformServer,
  isPromise,
  isStandalone,
  last,
  makeEnvironmentProviders,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  of,
  parseCookieValue,
  pipe,
  platformCore,
  refCount,
  reflectComponentType,
  runInInjectionContext,
  scan,
  setClassMetadata,
  setDocument,
  setRootDomAdapter,
  signal,
  startWith,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  unwrapSafeValue,
  withDomHydration,
  withHttpTransferCache,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
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
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵsanitizeUrlOrResourceUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4TSKGTWM.js";

// src/app/core/services/haptic.service.ts
var HapticService = class _HapticService {
  constructor(platformId) {
    this.platformId = platformId;
    this.hapticPatterns = {
      heartbeat: {
        pattern: [50, 100, 50],
        description: "Biometric pulse simulation"
      },
      impact: {
        pattern: [150],
        description: "Heavy mechanical impact"
      },
      glitch: {
        pattern: [20, 50, 20, 100, 30],
        description: "System malfunction feedback"
      },
      boot: {
        pattern: [100, 200, 100, 200, 300],
        description: "System initialization sequence"
      },
      login: {
        pattern: [50, 100, 50, 100],
        description: "Biometric authentication feedback"
      },
      error: {
        pattern: [200, 100, 200],
        description: "System error notification"
      },
      success: {
        pattern: [30, 50, 30],
        description: "Operation successful feedback"
      },
      notification: {
        pattern: [80, 120],
        description: "Incoming message alert"
      }
    };
    this.isEnabled = true;
    this.isHapticSupported = isPlatformBrowser(this.platformId) && "vibrate" in navigator && typeof navigator.vibrate === "function";
    console.log(`[HapticService] Haptic feedback ${this.isHapticSupported ? "available" : "not supported"}`);
  }
  /**
   * Trigger haptic feedback with predefined pattern
   */
  trigger(pattern) {
    if (!this.isHapticSupported || !this.isEnabled) {
      console.log(`[HapticService] Haptic ${pattern} skipped (disabled or unsupported)`);
      return false;
    }
    const config = this.hapticPatterns[pattern];
    try {
      const success = navigator.vibrate(config.pattern);
      console.log(`[HapticService] Triggered ${pattern}: ${config.description}`);
      return success;
    } catch (error) {
      console.warn(`[HapticService] Failed to trigger ${pattern}:`, error);
      return false;
    }
  }
  /**
   * Trigger custom haptic pattern
   */
  triggerCustom(pattern, description) {
    if (!this.isHapticSupported || !this.isEnabled) {
      return false;
    }
    try {
      const success = navigator.vibrate(pattern);
      if (description) {
        console.log(`[HapticService] Custom pattern: ${description}`);
      }
      return success;
    } catch (error) {
      console.warn("[HapticService] Failed to trigger custom pattern:", error);
      return false;
    }
  }
  /**
   * Stop all haptic feedback
   */
  stop() {
    if (!this.isHapticSupported) {
      return false;
    }
    try {
      return navigator.vibrate(0);
    } catch (error) {
      console.warn("[HapticService] Failed to stop haptic:", error);
      return false;
    }
  }
  /**
   * Enable or disable haptic feedback
   */
  setEnabled(enabled) {
    this.isEnabled = enabled;
    console.log(`[HapticService] Haptic feedback ${enabled ? "enabled" : "disabled"}`);
  }
  /**
   * Check if haptics are available and enabled
   */
  isAvailable() {
    return this.isHapticSupported && this.isEnabled;
  }
  /**
   * Get all available haptic patterns
   */
  getAvailablePatterns() {
    return __spreadValues({}, this.hapticPatterns);
  }
  /**
   * Test all haptic patterns (for debugging)
   */
  testAllPatterns() {
    if (!this.isAvailable()) {
      console.warn("[HapticService] Cannot test patterns - haptics unavailable");
      return;
    }
    const patterns = Object.keys(this.hapticPatterns);
    let index = 0;
    const testNext = () => {
      if (index < patterns.length) {
        const pattern = patterns[index];
        console.log(`[HapticService] Testing pattern ${index + 1}/${patterns.length}: ${pattern}`);
        this.trigger(pattern);
        index++;
        setTimeout(testNext, 1500);
      }
    };
    testNext();
  }
  static {
    this.\u0275fac = function HapticService_Factory(t) {
      return new (t || _HapticService)(\u0275\u0275inject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HapticService, factory: _HapticService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/lore-popup/lore-popup.component.ts
function LorePopupComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "\u{1F513}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Descubierto en: ", ctx_r1.loreEntry == null ? null : ctx_r1.loreEntry.unlockTrigger, "");
  }
}
function LorePopupComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function LorePopupComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function LorePopupComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onContentClick($event));
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function LorePopupComponent_div_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePopup());
    });
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 8)(12, "span", 9);
    \u0275\u0275text(13, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h2", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 12);
    \u0275\u0275elementStart(19, "div", 13)(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, LorePopupComponent_div_0_div_22_Template, 5, 1, "div", 14);
    \u0275\u0275elementStart(23, "div", 15);
    \u0275\u0275element(24, "div", 16);
    \u0275\u0275elementStart(25, "span", 17);
    \u0275\u0275text(26, "RUSTBONE ARCHIVES \u2022 CLASSIFIED");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("visible", ctx_r1.showContent())("closing", ctx_r1.isClosing());
    \u0275\u0275advance();
    \u0275\u0275classProp("visible", ctx_r1.showContent())("closing", ctx_r1.isClosing())("category", ctx_r1.getCategoryClass());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryIcon());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loreEntry == null ? null : ctx_r1.loreEntry.category == null ? null : ctx_r1.loreEntry.category.toUpperCase());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.loreEntry == null ? null : ctx_r1.loreEntry.keyword);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loreEntry == null ? null : ctx_r1.loreEntry.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.loreEntry == null ? null : ctx_r1.loreEntry.content);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loreEntry == null ? null : ctx_r1.loreEntry.unlockTrigger);
  }
}
var LorePopupComponent = class _LorePopupComponent {
  constructor() {
    this.loreEntry = null;
    this.isVisible = false;
    this.close = new EventEmitter();
    this.hapticService = inject(HapticService);
    this.showContent = signal(false);
    this.isClosing = signal(false);
  }
  ngOnInit() {
    console.log("\u{1F3A8} [LorePopup] ngOnInit - isVisible:", this.isVisible, "loreEntry:", this.loreEntry);
  }
  ngOnChanges(changes) {
    console.log("\u{1F3A8} [LorePopup] ngOnChanges:", changes);
    if (changes["isVisible"] && changes["isVisible"].currentValue === true) {
      console.log("\u{1F3A8} [LorePopup] Visibility changed to TRUE, triggering animation...");
      this.isClosing.set(false);
      setTimeout(() => {
        this.showContent.set(true);
        this.hapticService.trigger("notification");
        console.log("\u{1F3A8} [LorePopup] Animation triggered, showContent:", this.showContent());
      }, 50);
    }
    if (changes["isVisible"] && changes["isVisible"].currentValue === false) {
      console.log("\u{1F3A8} [LorePopup] Visibility changed to FALSE");
      this.showContent.set(false);
      this.isClosing.set(false);
    }
  }
  /**
   * Close the popup with exit animation
   */
  closePopup() {
    this.isClosing.set(true);
    this.hapticService.trigger("notification");
    setTimeout(() => {
      this.isClosing.set(false);
      this.showContent.set(false);
      this.close.emit();
    }, 300);
  }
  /**
   * Prevent click events from bubbling to parent
   */
  onContentClick(event) {
    event.stopPropagation();
  }
  /**
   * Get icon based on lore category
   */
  getCategoryIcon() {
    if (!this.loreEntry)
      return "\u{1F4D6}";
    const icons = {
      "technology": "\u2699\uFE0F",
      "faction": "\u{1F3DB}\uFE0F",
      "location": "\u{1F5FA}\uFE0F",
      "character": "\u{1F464}",
      "weapon": "\u2694\uFE0F",
      "other": "\u{1F4D6}"
    };
    return icons[this.loreEntry.category] || "\u{1F4D6}";
  }
  /**
   * Get CSS class for category styling
   */
  getCategoryClass() {
    if (!this.loreEntry)
      return "other";
    return this.loreEntry.category;
  }
  static {
    this.\u0275fac = function LorePopupComponent_Factory(t) {
      return new (t || _LorePopupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LorePopupComponent, selectors: [["app-lore-popup"]], inputs: { loreEntry: "loreEntry", isVisible: "isVisible" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "lore-overlay", 3, "visible", "closing", "click", 4, "ngIf"], [1, "lore-overlay", 3, "click"], [1, "lore-popup", 3, "click"], [1, "lore-header"], [1, "category-badge"], [1, "icon"], [1, "label"], [1, "close-btn", 3, "click"], [1, "keyword-tag"], [1, "tag-icon"], [1, "keyword"], [1, "lore-title"], [1, "divider"], [1, "lore-content"], ["class", "unlock-info", 4, "ngIf"], [1, "lore-footer"], [1, "scanlines"], [1, "footer-text"], [1, "unlock-info"], [1, "unlock-icon"], [1, "unlock-text"]], template: function LorePopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LorePopupComponent_div_0_Template, 27, 16, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isVisible);
      }
    }, dependencies: [CommonModule, NgIf], styles: ['\n\n.lore-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.85);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.lore-overlay.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lore-overlay.closing[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.lore-popup[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--ui-surface) 0%,\n      var(--dark-metal) 100%);\n  border: 3px solid var(--rust-orange);\n  border-radius: 8px;\n  box-shadow:\n    0 0 20px rgba(255, 119, 0, 0.3),\n    0 0 40px rgba(255, 119, 0, 0.1),\n    inset 0 0 60px rgba(0, 0, 0, 0.5);\n  max-width: 600px;\n  width: 100%;\n  max-height: 80vh;\n  overflow-y: auto;\n  position: relative;\n  opacity: 0;\n  transform: scale(0.9) translateY(20px);\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.lore-popup.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n}\n.lore-popup.closing[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.95) translateY(-10px);\n  transition: all 0.2s ease;\n}\n.lore-popup[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--rust-orange) 50%,\n      transparent 100%);\n  animation: _ngcontent-%COMP%_scan 3s linear infinite;\n  opacity: 0.5;\n}\n@keyframes _ngcontent-%COMP%_scan {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(80vh);\n  }\n}\n.lore-popup.category.technology[_ngcontent-%COMP%] {\n  border-color: var(--terminal-green);\n  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2), inset 0 0 60px rgba(0, 0, 0, 0.5);\n}\n.lore-popup.category.faction[_ngcontent-%COMP%] {\n  border-color: var(--magma-red);\n  box-shadow: 0 0 20px rgba(255, 0, 0, 0.2), inset 0 0 60px rgba(0, 0, 0, 0.5);\n}\n.lore-popup.category.location[_ngcontent-%COMP%] {\n  border-color: var(--industrial-blue);\n  box-shadow: 0 0 20px rgba(0, 150, 255, 0.2), inset 0 0 60px rgba(0, 0, 0, 0.5);\n}\n.lore-popup.category.character[_ngcontent-%COMP%] {\n  border-color: var(--rust-yellow);\n  box-shadow: 0 0 20px rgba(255, 200, 0, 0.2), inset 0 0 60px rgba(0, 0, 0, 0.5);\n}\n.lore-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 2px solid var(--ui-border);\n  background: rgba(0, 0, 0, 0.3);\n}\n.category-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  background: rgba(255, 119, 0, 0.1);\n  border: 1px solid var(--rust-orange);\n  border-radius: 4px;\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.category-badge[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.category-badge[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--rust-orange);\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid var(--ui-border);\n  color: var(--ui-text);\n  width: 32px;\n  height: 32px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease;\n  font-size: 18px;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--rust-orange);\n  border-color: var(--rust-orange);\n  color: var(--dark-metal);\n  transform: rotate(90deg);\n}\n.close-btn[_ngcontent-%COMP%]:active {\n  transform: rotate(90deg) scale(0.95);\n}\n.keyword-tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background: rgba(255, 119, 0, 0.05);\n  border-bottom: 1px solid var(--ui-border);\n}\n.keyword-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.keyword-tag[_ngcontent-%COMP%]   .keyword[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--rust-orange);\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.lore-title[_ngcontent-%COMP%] {\n  padding: 20px 20px 16px 20px;\n  margin: 0;\n  font-family: "Arial", sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n  color: var(--ui-text);\n  text-shadow: 0 0 10px rgba(255, 119, 0, 0.3);\n  line-height: 1.3;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 2px;\n  margin: 0 20px 20px 20px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--rust-orange) 20%,\n      var(--rust-orange) 80%,\n      transparent 100%);\n  box-shadow: 0 0 8px rgba(255, 119, 0, 0.5);\n}\n.lore-content[_ngcontent-%COMP%] {\n  padding: 0 20px 20px 20px;\n  font-family:\n    "Georgia",\n    "Times New Roman",\n    serif;\n  font-size: 16px;\n  line-height: 1.8;\n  color: var(--ui-text-secondary);\n}\n.lore-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n}\n.lore-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.unlock-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background: rgba(0, 255, 0, 0.05);\n  border-top: 1px solid rgba(0, 255, 0, 0.2);\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 12px;\n  color: var(--terminal-green);\n}\n.unlock-info[_ngcontent-%COMP%]   .unlock-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.unlock-info[_ngcontent-%COMP%]   .unlock-text[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.lore-footer[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 12px 20px;\n  background: rgba(0, 0, 0, 0.5);\n  border-top: 2px solid var(--ui-border);\n  text-align: center;\n  overflow: hidden;\n}\n.lore-footer[_ngcontent-%COMP%]   .scanlines[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    repeating-linear-gradient(\n      0deg,\n      rgba(255, 119, 0, 0.03) 0px,\n      rgba(255, 119, 0, 0.03) 1px,\n      transparent 1px,\n      transparent 2px);\n  pointer-events: none;\n}\n.lore-footer[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-family:\n    "Courier New",\n    "Monaco",\n    monospace;\n  font-size: 10px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  color: var(--ui-text-secondary);\n  opacity: 0.6;\n}\n@media (max-width: 768px) {\n  .lore-popup[_ngcontent-%COMP%] {\n    max-width: 95%;\n    max-height: 90vh;\n  }\n  .lore-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .lore-content[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.lore-popup[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.lore-popup[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.3);\n}\n.lore-popup[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--rust-orange);\n  border-radius: 4px;\n}\n.lore-popup[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--magma-red);\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LorePopupComponent, { className: "LorePopupComponent", filePath: "src\\app\\shared\\components\\lore-popup\\lore-popup.component.ts", lineNumber: 18 });
})();

// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
var GenericBrowserDomAdapter = class extends DomAdapter {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = true;
  }
};
var BrowserDomAdapter = class _BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() {
    setRootDomAdapter(new _BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener) {
    el.addEventListener(evt, listener);
    return () => {
      el.removeEventListener(evt, listener);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument("fakeTitle");
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === "window") {
      return window;
    }
    if (target === "document") {
      return doc;
    }
    if (target === "body") {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return parseCookieValue(document.cookie, name);
  }
};
var baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.querySelector("base");
  return baseElement ? baseElement.getAttribute("href") : null;
}
function relativePath(url) {
  return new URL(url, document.baseURI).pathname;
}
var BrowserGetTestability = class {
  addToWindow(registry) {
    _global["getAngularTestability"] = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);
      if (testability == null) {
        throw new RuntimeError(5103, (typeof ngDevMode === "undefined" || ngDevMode) && "Could not find testability for element.");
      }
      return testability;
    };
    _global["getAllAngularTestabilities"] = () => registry.getAllTestabilities();
    _global["getAllAngularRootElements"] = () => registry.getAllRootElements();
    const whenAllStable = (callback) => {
      const testabilities = _global["getAllAngularTestabilities"]();
      let count = testabilities.length;
      const decrement = function() {
        count--;
        if (count == 0) {
          callback();
        }
      };
      testabilities.forEach((testability) => {
        testability.whenStable(decrement);
      });
    };
    if (!_global["frameworkStabilizers"]) {
      _global["frameworkStabilizers"] = [];
    }
    _global["frameworkStabilizers"].push(whenAllStable);
  }
  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }
    const t = registry.getTestability(elem);
    if (t != null) {
      return t;
    } else if (!findInAncestors) {
      return null;
    }
    if (getDOM().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }
    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }
};
var BrowserXhr = class _BrowserXhr {
  build() {
    return new XMLHttpRequest();
  }
  static {
    this.\u0275fac = function BrowserXhr_Factory(t) {
      return new (t || _BrowserXhr)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BrowserXhr,
      factory: _BrowserXhr.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserXhr, [{
    type: Injectable
  }], null, null);
})();
var EVENT_MANAGER_PLUGINS = new InjectionToken(ngDevMode ? "EventManagerPlugins" : "");
var EventManager = class _EventManager {
  /**
   * Initializes an instance of the event-manager service.
   */
  constructor(plugins, _zone) {
    this._zone = _zone;
    this._eventNameToPlugin = /* @__PURE__ */ new Map();
    plugins.forEach((plugin) => {
      plugin.manager = this;
    });
    this._plugins = plugins.slice().reverse();
  }
  /**
   * Registers a handler for a specific element and event.
   *
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns  A callback function that can be used to remove the handler.
   */
  addEventListener(element, eventName, handler) {
    const plugin = this._findPluginFor(eventName);
    return plugin.addEventListener(element, eventName, handler);
  }
  /**
   * Retrieves the compilation zone in which event listeners are registered.
   */
  getZone() {
    return this._zone;
  }
  /** @internal */
  _findPluginFor(eventName) {
    let plugin = this._eventNameToPlugin.get(eventName);
    if (plugin) {
      return plugin;
    }
    const plugins = this._plugins;
    plugin = plugins.find((plugin2) => plugin2.supports(eventName));
    if (!plugin) {
      throw new RuntimeError(5101, (typeof ngDevMode === "undefined" || ngDevMode) && `No event manager plugin found for event ${eventName}`);
    }
    this._eventNameToPlugin.set(eventName, plugin);
    return plugin;
  }
  static {
    this.\u0275fac = function EventManager_Factory(t) {
      return new (t || _EventManager)(\u0275\u0275inject(EVENT_MANAGER_PLUGINS), \u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _EventManager,
      factory: _EventManager.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventManager, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [EVENT_MANAGER_PLUGINS]
    }]
  }, {
    type: NgZone
  }], null);
})();
var EventManagerPlugin = class {
  // TODO: remove (has some usage in G3)
  constructor(_doc) {
    this._doc = _doc;
  }
};
var APP_ID_ATTRIBUTE_NAME = "ng-app-id";
var SharedStylesHost = class _SharedStylesHost {
  constructor(doc, appId, nonce, platformId = {}) {
    this.doc = doc;
    this.appId = appId;
    this.nonce = nonce;
    this.platformId = platformId;
    this.styleRef = /* @__PURE__ */ new Map();
    this.hostNodes = /* @__PURE__ */ new Set();
    this.styleNodesInDOM = this.collectServerRenderedStyles();
    this.platformIsServer = isPlatformServer(platformId);
    this.resetHostNodes();
  }
  addStyles(styles) {
    for (const style of styles) {
      const usageCount = this.changeUsageCount(style, 1);
      if (usageCount === 1) {
        this.onStyleAdded(style);
      }
    }
  }
  removeStyles(styles) {
    for (const style of styles) {
      const usageCount = this.changeUsageCount(style, -1);
      if (usageCount <= 0) {
        this.onStyleRemoved(style);
      }
    }
  }
  ngOnDestroy() {
    const styleNodesInDOM = this.styleNodesInDOM;
    if (styleNodesInDOM) {
      styleNodesInDOM.forEach((node) => node.remove());
      styleNodesInDOM.clear();
    }
    for (const style of this.getAllStyles()) {
      this.onStyleRemoved(style);
    }
    this.resetHostNodes();
  }
  addHost(hostNode) {
    this.hostNodes.add(hostNode);
    for (const style of this.getAllStyles()) {
      this.addStyleToHost(hostNode, style);
    }
  }
  removeHost(hostNode) {
    this.hostNodes.delete(hostNode);
  }
  getAllStyles() {
    return this.styleRef.keys();
  }
  onStyleAdded(style) {
    for (const host of this.hostNodes) {
      this.addStyleToHost(host, style);
    }
  }
  onStyleRemoved(style) {
    const styleRef = this.styleRef;
    styleRef.get(style)?.elements?.forEach((node) => node.remove());
    styleRef.delete(style);
  }
  collectServerRenderedStyles() {
    const styles = this.doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${this.appId}"]`);
    if (styles?.length) {
      const styleMap = /* @__PURE__ */ new Map();
      styles.forEach((style) => {
        if (style.textContent != null) {
          styleMap.set(style.textContent, style);
        }
      });
      return styleMap;
    }
    return null;
  }
  changeUsageCount(style, delta) {
    const map2 = this.styleRef;
    if (map2.has(style)) {
      const styleRefValue = map2.get(style);
      styleRefValue.usage += delta;
      return styleRefValue.usage;
    }
    map2.set(style, {
      usage: delta,
      elements: []
    });
    return delta;
  }
  getStyleElement(host, style) {
    const styleNodesInDOM = this.styleNodesInDOM;
    const styleEl = styleNodesInDOM?.get(style);
    if (styleEl?.parentNode === host) {
      styleNodesInDOM.delete(style);
      styleEl.removeAttribute(APP_ID_ATTRIBUTE_NAME);
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        styleEl.setAttribute("ng-style-reused", "");
      }
      return styleEl;
    } else {
      const styleEl2 = this.doc.createElement("style");
      if (this.nonce) {
        styleEl2.setAttribute("nonce", this.nonce);
      }
      styleEl2.textContent = style;
      if (this.platformIsServer) {
        styleEl2.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
      }
      host.appendChild(styleEl2);
      return styleEl2;
    }
  }
  addStyleToHost(host, style) {
    const styleEl = this.getStyleElement(host, style);
    const styleRef = this.styleRef;
    const styleElRef = styleRef.get(style)?.elements;
    if (styleElRef) {
      styleElRef.push(styleEl);
    } else {
      styleRef.set(style, {
        elements: [styleEl],
        usage: 1
      });
    }
  }
  resetHostNodes() {
    const hostNodes = this.hostNodes;
    hostNodes.clear();
    hostNodes.add(this.doc.head);
  }
  static {
    this.\u0275fac = function SharedStylesHost_Factory(t) {
      return new (t || _SharedStylesHost)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(APP_ID), \u0275\u0275inject(CSP_NONCE, 8), \u0275\u0275inject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _SharedStylesHost,
      factory: _SharedStylesHost.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedStylesHost, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APP_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CSP_NONCE]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var NAMESPACE_URIS = {
  "svg": "http://www.w3.org/2000/svg",
  "xhtml": "http://www.w3.org/1999/xhtml",
  "xlink": "http://www.w3.org/1999/xlink",
  "xml": "http://www.w3.org/XML/1998/namespace",
  "xmlns": "http://www.w3.org/2000/xmlns/",
  "math": "http://www.w3.org/1998/MathML/"
};
var COMPONENT_REGEX = /%COMP%/g;
var COMPONENT_VARIABLE = "%COMP%";
var HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
var CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
var REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
var REMOVE_STYLES_ON_COMPONENT_DESTROY = new InjectionToken(ngDevMode ? "RemoveStylesOnCompDestroy" : "", {
  providedIn: "root",
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
  return styles.map((s) => s.replace(COMPONENT_REGEX, compId));
}
var DomRendererFactory2 = class _DomRendererFactory2 {
  constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, platformId, ngZone, nonce = null) {
    this.eventManager = eventManager;
    this.sharedStylesHost = sharedStylesHost;
    this.appId = appId;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.doc = doc;
    this.platformId = platformId;
    this.ngZone = ngZone;
    this.nonce = nonce;
    this.rendererByCompId = /* @__PURE__ */ new Map();
    this.platformIsServer = isPlatformServer(platformId);
    this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer);
  }
  createRenderer(element, type) {
    if (!element || !type) {
      return this.defaultRenderer;
    }
    if (this.platformIsServer && type.encapsulation === ViewEncapsulation$1.ShadowDom) {
      type = __spreadProps(__spreadValues({}, type), {
        encapsulation: ViewEncapsulation$1.Emulated
      });
    }
    const renderer = this.getOrCreateRenderer(element, type);
    if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
      renderer.applyToHost(element);
    } else if (renderer instanceof NoneEncapsulationDomRenderer) {
      renderer.applyStyles();
    }
    return renderer;
  }
  getOrCreateRenderer(element, type) {
    const rendererByCompId = this.rendererByCompId;
    let renderer = rendererByCompId.get(type.id);
    if (!renderer) {
      const doc = this.doc;
      const ngZone = this.ngZone;
      const eventManager = this.eventManager;
      const sharedStylesHost = this.sharedStylesHost;
      const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
      const platformIsServer = this.platformIsServer;
      switch (type.encapsulation) {
        case ViewEncapsulation$1.Emulated:
          renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
        case ViewEncapsulation$1.ShadowDom:
          return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer);
        default:
          renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
      }
      rendererByCompId.set(type.id, renderer);
    }
    return renderer;
  }
  ngOnDestroy() {
    this.rendererByCompId.clear();
  }
  static {
    this.\u0275fac = function DomRendererFactory2_Factory(t) {
      return new (t || _DomRendererFactory2)(\u0275\u0275inject(EventManager), \u0275\u0275inject(SharedStylesHost), \u0275\u0275inject(APP_ID), \u0275\u0275inject(REMOVE_STYLES_ON_COMPONENT_DESTROY), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(NgZone), \u0275\u0275inject(CSP_NONCE));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DomRendererFactory2,
      factory: _DomRendererFactory2.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomRendererFactory2, [{
    type: Injectable
  }], () => [{
    type: EventManager
  }, {
    type: SharedStylesHost
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APP_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CSP_NONCE]
    }]
  }], null);
})();
var DefaultDomRenderer2 = class {
  constructor(eventManager, doc, ngZone, platformIsServer) {
    this.eventManager = eventManager;
    this.doc = doc;
    this.ngZone = ngZone;
    this.platformIsServer = platformIsServer;
    this.data = /* @__PURE__ */ Object.create(null);
    this.throwOnSyntheticProps = true;
    this.destroyNode = null;
  }
  destroy() {
  }
  createElement(name, namespace) {
    if (namespace) {
      return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return this.doc.createElement(name);
  }
  createComment(value) {
    return this.doc.createComment(value);
  }
  createText(value) {
    return this.doc.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(parent, oldChild) {
    if (parent) {
      parent.removeChild(oldChild);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === "string" ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new RuntimeError(-5104, (typeof ngDevMode === "undefined" || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = "";
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ":" + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style, value, flags) {
    if (flags & (RendererStyleFlags2.DashCase | RendererStyleFlags2.Important)) {
      el.style.setProperty(style, value, flags & RendererStyleFlags2.Important ? "important" : "");
    } else {
      el.style[style] = value;
    }
  }
  removeStyle(el, style, flags) {
    if (flags & RendererStyleFlags2.DashCase) {
      el.style.removeProperty(style);
    } else {
      el.style[style] = "";
    }
  }
  setProperty(el, name, value) {
    if (el == null) {
      return;
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, "property");
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback) {
    (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, "listener");
    if (typeof target === "string") {
      target = getDOM().getGlobalEventTarget(this.doc, target);
      if (!target) {
        throw new Error(`Unsupported event target ${target} for event ${event}`);
      }
    }
    return this.eventManager.addEventListener(target, event, this.decoratePreventDefault(callback));
  }
  decoratePreventDefault(eventHandler) {
    return (event) => {
      if (event === "__ngUnwrap__") {
        return eventHandler;
      }
      const allowDefaultBehavior = this.platformIsServer ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
      }
      return void 0;
    };
  }
};
var AT_CHARCODE = (() => "@".charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new RuntimeError(5105, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.
  - There is corresponding configuration for the animation named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === "TEMPLATE" && node.content !== void 0;
}
var ShadowDomRenderer = class extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: "open"
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    const styles = shimStylesContent(component.id, component.styles);
    for (const style of styles) {
      const styleEl = document.createElement("style");
      if (nonce) {
        styleEl.setAttribute("nonce", nonce);
      }
      styleEl.textContent = style;
      this.shadowRoot.appendChild(styleEl);
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(parent, oldChild) {
    return super.removeChild(this.nodeOrShadowRoot(parent), oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
};
var NoneEncapsulationDomRenderer = class extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.styles = compId ? shimStylesContent(compId, component.styles) : component.styles;
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles);
  }
  destroy() {
    if (!this.removeStylesOnCompDestroy) {
      return;
    }
    this.sharedStylesHost.removeStyles(this.styles);
  }
};
var EmulatedEncapsulationDomRenderer2 = class extends NoneEncapsulationDomRenderer {
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer) {
    const compId = appId + "-" + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, "");
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, "");
    return el;
  }
};
var DomEventsPlugin = class _DomEventsPlugin extends EventManagerPlugin {
  constructor(doc) {
    super(doc);
  }
  // This plugin should come last in the list of plugins, because it accepts all
  // events.
  supports(eventName) {
    return true;
  }
  addEventListener(element, eventName, handler) {
    element.addEventListener(eventName, handler, false);
    return () => this.removeEventListener(element, eventName, handler);
  }
  removeEventListener(target, eventName, callback) {
    return target.removeEventListener(eventName, callback);
  }
  static {
    this.\u0275fac = function DomEventsPlugin_Factory(t) {
      return new (t || _DomEventsPlugin)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DomEventsPlugin,
      factory: _DomEventsPlugin.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomEventsPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var MODIFIER_KEYS = ["alt", "control", "meta", "shift"];
var _keyMap = {
  "\b": "Backspace",
  "	": "Tab",
  "\x7F": "Delete",
  "\x1B": "Escape",
  "Del": "Delete",
  "Esc": "Escape",
  "Left": "ArrowLeft",
  "Right": "ArrowRight",
  "Up": "ArrowUp",
  "Down": "ArrowDown",
  "Menu": "ContextMenu",
  "Scroll": "ScrollLock",
  "Win": "OS"
};
var MODIFIER_KEY_GETTERS = {
  "alt": (event) => event.altKey,
  "control": (event) => event.ctrlKey,
  "meta": (event) => event.metaKey,
  "shift": (event) => event.shiftKey
};
var KeyEventsPlugin = class _KeyEventsPlugin extends EventManagerPlugin {
  /**
   * Initializes an instance of the browser plug-in.
   * @param doc The document in which key events will be detected.
   */
  constructor(doc) {
    super(doc);
  }
  /**
   * Reports whether a named key event is supported.
   * @param eventName The event name to query.
   * @return True if the named key event is supported.
   */
  supports(eventName) {
    return _KeyEventsPlugin.parseEventName(eventName) != null;
  }
  /**
   * Registers a handler for a specific element and key event.
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the key event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns The key event that was registered.
   */
  addEventListener(element, eventName, handler) {
    const parsedEvent = _KeyEventsPlugin.parseEventName(eventName);
    const outsideHandler = _KeyEventsPlugin.eventCallback(parsedEvent["fullKey"], handler, this.manager.getZone());
    return this.manager.getZone().runOutsideAngular(() => {
      return getDOM().onAndCancel(element, parsedEvent["domEventName"], outsideHandler);
    });
  }
  /**
   * Parses the user provided full keyboard event definition and normalizes it for
   * later internal use. It ensures the string is all lowercase, converts special
   * characters to a standard spelling, and orders all the values consistently.
   *
   * @param eventName The name of the key event to listen for.
   * @returns an object with the full, normalized string, and the dom event name
   * or null in the case when the event doesn't match a keyboard event.
   */
  static parseEventName(eventName) {
    const parts = eventName.toLowerCase().split(".");
    const domEventName = parts.shift();
    if (parts.length === 0 || !(domEventName === "keydown" || domEventName === "keyup")) {
      return null;
    }
    const key = _KeyEventsPlugin._normalizeKey(parts.pop());
    let fullKey = "";
    let codeIX = parts.indexOf("code");
    if (codeIX > -1) {
      parts.splice(codeIX, 1);
      fullKey = "code.";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      const index = parts.indexOf(modifierName);
      if (index > -1) {
        parts.splice(index, 1);
        fullKey += modifierName + ".";
      }
    });
    fullKey += key;
    if (parts.length != 0 || key.length === 0) {
      return null;
    }
    const result = {};
    result["domEventName"] = domEventName;
    result["fullKey"] = fullKey;
    return result;
  }
  /**
   * Determines whether the actual keys pressed match the configured key code string.
   * The `fullKeyCode` event is normalized in the `parseEventName` method when the
   * event is attached to the DOM during the `addEventListener` call. This is unseen
   * by the end user and is normalized for internal consistency and parsing.
   *
   * @param event The keyboard event.
   * @param fullKeyCode The normalized user defined expected key event string
   * @returns boolean.
   */
  static matchEventFullKeyCode(event, fullKeyCode) {
    let keycode = _keyMap[event.key] || event.key;
    let key = "";
    if (fullKeyCode.indexOf("code.") > -1) {
      keycode = event.code;
      key = "code.";
    }
    if (keycode == null || !keycode)
      return false;
    keycode = keycode.toLowerCase();
    if (keycode === " ") {
      keycode = "space";
    } else if (keycode === ".") {
      keycode = "dot";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      if (modifierName !== keycode) {
        const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
        if (modifierGetter(event)) {
          key += modifierName + ".";
        }
      }
    });
    key += keycode;
    return key === fullKeyCode;
  }
  /**
   * Configures a handler callback for a key event.
   * @param fullKey The event name that combines all simultaneous keystrokes.
   * @param handler The function that responds to the key event.
   * @param zone The zone in which the event occurred.
   * @returns A callback function.
   */
  static eventCallback(fullKey, handler, zone) {
    return (event) => {
      if (_KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
        zone.runGuarded(() => handler(event));
      }
    };
  }
  /** @internal */
  static _normalizeKey(keyName) {
    return keyName === "esc" ? "escape" : keyName;
  }
  static {
    this.\u0275fac = function KeyEventsPlugin_Factory(t) {
      return new (t || _KeyEventsPlugin)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _KeyEventsPlugin,
      factory: _KeyEventsPlugin.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyEventsPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function bootstrapApplication(rootComponent, options) {
  return internalCreateApplication(__spreadValues({
    rootComponent
  }, createProvidersConfig(options)));
}
function createProvidersConfig(options) {
  return {
    appProviders: [...BROWSER_MODULE_PROVIDERS, ...options?.providers ?? []],
    platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
  };
}
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new ErrorHandler();
}
function _document() {
  setDocument(document);
  return document;
}
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: PLATFORM_ID,
  useValue: PLATFORM_BROWSER_ID
}, {
  provide: PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: DOCUMENT,
  useFactory: _document,
  deps: []
}];
var platformBrowser = createPlatformFactory(platformCore, "browser", INTERNAL_BROWSER_PLATFORM_PROVIDERS);
var BROWSER_MODULE_PROVIDERS_MARKER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "BrowserModule Providers Marker" : "");
var TESTABILITY_PROVIDERS = [{
  provide: TESTABILITY_GETTER,
  useClass: BrowserGetTestability,
  deps: []
}, {
  provide: TESTABILITY,
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
}, {
  provide: Testability,
  // Also provide as `Testability` for backwards-compatibility.
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
}];
var BROWSER_MODULE_PROVIDERS = [{
  provide: INJECTOR_SCOPE,
  useValue: "root"
}, {
  provide: ErrorHandler,
  useFactory: errorHandler,
  deps: []
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [DOCUMENT, NgZone, PLATFORM_ID]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [DOCUMENT]
}, DomRendererFactory2, SharedStylesHost, EventManager, {
  provide: RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: XhrFactory,
  useClass: BrowserXhr,
  deps: []
}, typeof ngDevMode === "undefined" || ngDevMode ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];
var BrowserModule = class _BrowserModule {
  constructor(providersAlreadyPresent) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && providersAlreadyPresent) {
      throw new RuntimeError(5100, `Providers from the \`BrowserModule\` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
    }
  }
  /**
   * Configures a browser-based app to transition from a server-rendered app, if
   * one is present on the page.
   *
   * @param params An object containing an identifier for the app to transition.
   * The ID must match between the client and server versions of the app.
   * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
   *
   * @deprecated Use {@link APP_ID} instead to set the application ID.
   */
  static withServerTransition(params) {
    return {
      ngModule: _BrowserModule,
      providers: [{
        provide: APP_ID,
        useValue: params.appId
      }]
    };
  }
  static {
    this.\u0275fac = function BrowserModule_Factory(t) {
      return new (t || _BrowserModule)(\u0275\u0275inject(BROWSER_MODULE_PROVIDERS_MARKER, 12));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _BrowserModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      imports: [CommonModule, ApplicationModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserModule, [{
    type: NgModule,
    args: [{
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      exports: [CommonModule, ApplicationModule]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [BROWSER_MODULE_PROVIDERS_MARKER]
    }]
  }], null);
})();
var Meta = class _Meta {
  constructor(_doc) {
    this._doc = _doc;
    this._dom = getDOM();
  }
  /**
   * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * If an existing element is found, it is returned and is not modified in any way.
   * @param tag The definition of a `<meta>` element to match or create.
   * @param forceCreation True to create a new element without checking whether one already exists.
   * @returns The existing element with the same attributes and values if found,
   * the new element if no match is found, or `null` if the tag parameter is not defined.
   */
  addTag(tag, forceCreation = false) {
    if (!tag)
      return null;
    return this._getOrCreateElement(tag, forceCreation);
  }
  /**
   * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * @param tags An array of tag definitions to match or create.
   * @param forceCreation True to create new elements without checking whether they already exist.
   * @returns The matching elements if found, or the new elements.
   */
  addTags(tags, forceCreation = false) {
    if (!tags)
      return [];
    return tags.reduce((result, tag) => {
      if (tag) {
        result.push(this._getOrCreateElement(tag, forceCreation));
      }
      return result;
    }, []);
  }
  /**
   * Retrieves a `<meta>` tag element in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching element, if any.
   */
  getTag(attrSelector) {
    if (!attrSelector)
      return null;
    return this._doc.querySelector(`meta[${attrSelector}]`) || null;
  }
  /**
   * Retrieves a set of `<meta>` tag elements in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching elements, if any.
   */
  getTags(attrSelector) {
    if (!attrSelector)
      return [];
    const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
    return list ? [].slice.call(list) : [];
  }
  /**
   * Modifies an existing `<meta>` tag element in the current HTML document.
   * @param tag The tag description with which to replace the existing tag content.
   * @param selector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   * If not supplied, matches a tag with the same `name` or `property` attribute value as the
   * replacement tag.
   * @return The modified element.
   */
  updateTag(tag, selector) {
    if (!tag)
      return null;
    selector = selector || this._parseSelector(tag);
    const meta = this.getTag(selector);
    if (meta) {
      return this._setMetaElementAttributes(tag, meta);
    }
    return this._getOrCreateElement(tag, true);
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param attrSelector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   */
  removeTag(attrSelector) {
    this.removeTagElement(this.getTag(attrSelector));
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param meta The tag definition to match against to identify an existing tag.
   */
  removeTagElement(meta) {
    if (meta) {
      this._dom.remove(meta);
    }
  }
  _getOrCreateElement(meta, forceCreation = false) {
    if (!forceCreation) {
      const selector = this._parseSelector(meta);
      const elem = this.getTags(selector).filter((elem2) => this._containsAttributes(meta, elem2))[0];
      if (elem !== void 0)
        return elem;
    }
    const element = this._dom.createElement("meta");
    this._setMetaElementAttributes(meta, element);
    const head = this._doc.getElementsByTagName("head")[0];
    head.appendChild(element);
    return element;
  }
  _setMetaElementAttributes(tag, el) {
    Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
    return el;
  }
  _parseSelector(tag) {
    const attr = tag.name ? "name" : "property";
    return `${attr}="${tag[attr]}"`;
  }
  _containsAttributes(tag, elem) {
    return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
  }
  _getMetaKeyMap(prop) {
    return META_KEYS_MAP[prop] || prop;
  }
  static {
    this.\u0275fac = function Meta_Factory(t) {
      return new (t || _Meta)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Meta,
      factory: _Meta.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Meta, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var META_KEYS_MAP = {
  httpEquiv: "http-equiv"
};
var Title = class _Title {
  constructor(_doc) {
    this._doc = _doc;
  }
  /**
   * Get the title of the current HTML document.
   */
  getTitle() {
    return this._doc.title;
  }
  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */
  setTitle(newTitle) {
    this._doc.title = newTitle || "";
  }
  static {
    this.\u0275fac = function Title_Factory(t) {
      return new (t || _Title)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Title,
      factory: _Title.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Title, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var EVENT_NAMES = {
  // pan
  "pan": true,
  "panstart": true,
  "panmove": true,
  "panend": true,
  "pancancel": true,
  "panleft": true,
  "panright": true,
  "panup": true,
  "pandown": true,
  // pinch
  "pinch": true,
  "pinchstart": true,
  "pinchmove": true,
  "pinchend": true,
  "pinchcancel": true,
  "pinchin": true,
  "pinchout": true,
  // press
  "press": true,
  "pressup": true,
  // rotate
  "rotate": true,
  "rotatestart": true,
  "rotatemove": true,
  "rotateend": true,
  "rotatecancel": true,
  // swipe
  "swipe": true,
  "swipeleft": true,
  "swiperight": true,
  "swipeup": true,
  "swipedown": true,
  // tap
  "tap": true,
  "doubletap": true
};
var HAMMER_GESTURE_CONFIG = new InjectionToken("HammerGestureConfig");
var HAMMER_LOADER = new InjectionToken("HammerLoader");
var HammerGestureConfig = class _HammerGestureConfig {
  constructor() {
    this.events = [];
    this.overrides = {};
  }
  /**
   * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
   * and attaches it to a given HTML element.
   * @param element The element that will recognize gestures.
   * @returns A HammerJS event-manager object.
   */
  buildHammer(element) {
    const mc = new Hammer(element, this.options);
    mc.get("pinch").set({
      enable: true
    });
    mc.get("rotate").set({
      enable: true
    });
    for (const eventName in this.overrides) {
      mc.get(eventName).set(this.overrides[eventName]);
    }
    return mc;
  }
  static {
    this.\u0275fac = function HammerGestureConfig_Factory(t) {
      return new (t || _HammerGestureConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HammerGestureConfig,
      factory: _HammerGestureConfig.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGestureConfig, [{
    type: Injectable
  }], null, null);
})();
var HammerGesturesPlugin = class _HammerGesturesPlugin extends EventManagerPlugin {
  constructor(doc, _config, console2, loader) {
    super(doc);
    this._config = _config;
    this.console = console2;
    this.loader = loader;
    this._loaderPromise = null;
  }
  supports(eventName) {
    if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
      return false;
    }
    if (!window.Hammer && !this.loader) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
      }
      return false;
    }
    return true;
  }
  addEventListener(element, eventName, handler) {
    const zone = this.manager.getZone();
    eventName = eventName.toLowerCase();
    if (!window.Hammer && this.loader) {
      this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
      let cancelRegistration = false;
      let deregister = () => {
        cancelRegistration = true;
      };
      zone.runOutsideAngular(() => this._loaderPromise.then(() => {
        if (!window.Hammer) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
          }
          deregister = () => {
          };
          return;
        }
        if (!cancelRegistration) {
          deregister = this.addEventListener(element, eventName, handler);
        }
      }).catch(() => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          this.console.warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
        }
        deregister = () => {
        };
      }));
      return () => {
        deregister();
      };
    }
    return zone.runOutsideAngular(() => {
      const mc = this._config.buildHammer(element);
      const callback = function(eventObj) {
        zone.runGuarded(function() {
          handler(eventObj);
        });
      };
      mc.on(eventName, callback);
      return () => {
        mc.off(eventName, callback);
        if (typeof mc.destroy === "function") {
          mc.destroy();
        }
      };
    });
  }
  isCustomEvent(eventName) {
    return this._config.events.indexOf(eventName) > -1;
  }
  static {
    this.\u0275fac = function HammerGesturesPlugin_Factory(t) {
      return new (t || _HammerGesturesPlugin)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(HAMMER_GESTURE_CONFIG), \u0275\u0275inject(Console), \u0275\u0275inject(HAMMER_LOADER, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HammerGesturesPlugin,
      factory: _HammerGesturesPlugin.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGesturesPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: HammerGestureConfig,
    decorators: [{
      type: Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }]
  }, {
    type: Console
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [HAMMER_LOADER]
    }]
  }], null);
})();
var HammerModule = class _HammerModule {
  static {
    this.\u0275fac = function HammerModule_Factory(t) {
      return new (t || _HammerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _HammerModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Console, [new Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig,
        deps: []
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Console, [new Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig,
        deps: []
      }]
    }]
  }], null, null);
})();
var DomSanitizer = class _DomSanitizer {
  static {
    this.\u0275fac = function DomSanitizer_Factory(t) {
      return new (t || _DomSanitizer)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DomSanitizer,
      factory: function DomSanitizer_Factory(t) {
        let r = null;
        if (t) {
          r = new (t || _DomSanitizer)();
        } else {
          r = \u0275\u0275inject(DomSanitizerImpl);
        }
        return r;
      },
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: forwardRef(() => DomSanitizerImpl)
    }]
  }], null, null);
})();
var DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  sanitize(ctx, value) {
    if (value == null)
      return null;
    switch (ctx) {
      case SecurityContext.NONE:
        return value;
      case SecurityContext.HTML:
        if (allowSanitizationBypassAndThrow(
          value,
          "HTML"
          /* BypassType.Html */
        )) {
          return unwrapSafeValue(value);
        }
        return _sanitizeHtml(this._doc, String(value)).toString();
      case SecurityContext.STYLE:
        if (allowSanitizationBypassAndThrow(
          value,
          "Style"
          /* BypassType.Style */
        )) {
          return unwrapSafeValue(value);
        }
        return value;
      case SecurityContext.SCRIPT:
        if (allowSanitizationBypassAndThrow(
          value,
          "Script"
          /* BypassType.Script */
        )) {
          return unwrapSafeValue(value);
        }
        throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
      case SecurityContext.URL:
        if (allowSanitizationBypassAndThrow(
          value,
          "URL"
          /* BypassType.Url */
        )) {
          return unwrapSafeValue(value);
        }
        return _sanitizeUrl(String(value));
      case SecurityContext.RESOURCE_URL:
        if (allowSanitizationBypassAndThrow(
          value,
          "ResourceURL"
          /* BypassType.ResourceUrl */
        )) {
          return unwrapSafeValue(value);
        }
        throw new RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
      default:
        throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${XSS_SECURITY_URL})`);
    }
  }
  bypassSecurityTrustHtml(value) {
    return bypassSanitizationTrustHtml(value);
  }
  bypassSecurityTrustStyle(value) {
    return bypassSanitizationTrustStyle(value);
  }
  bypassSecurityTrustScript(value) {
    return bypassSanitizationTrustScript(value);
  }
  bypassSecurityTrustUrl(value) {
    return bypassSanitizationTrustUrl(value);
  }
  bypassSecurityTrustResourceUrl(value) {
    return bypassSanitizationTrustResourceUrl(value);
  }
  static {
    this.\u0275fac = function DomSanitizerImpl_Factory(t) {
      return new (t || _DomSanitizerImpl)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DomSanitizerImpl,
      factory: _DomSanitizerImpl.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizerImpl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var HydrationFeatureKind;
(function(HydrationFeatureKind2) {
  HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
  HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));
function provideZoneJsCompatibilityDetector() {
  return [{
    provide: ENVIRONMENT_INITIALIZER,
    useValue: () => {
      const ngZone = inject(NgZone);
      if (ngZone.constructor !== NgZone) {
        const console2 = inject(Console);
        const message = formatRuntimeError(-5e3, "Angular detected that hydration was enabled for an application that uses a custom or a noop Zone.js implementation. This is not yet a fully supported configuration.");
        console2.warn(message);
      }
    },
    multi: true
  }];
}
function provideClientHydration(...features) {
  const providers = [];
  const featuresKind = /* @__PURE__ */ new Set();
  const hasHttpTransferCacheOptions = featuresKind.has(HydrationFeatureKind.HttpTransferCacheOptions);
  for (const {
    \u0275providers,
    \u0275kind
  } of features) {
    featuresKind.add(\u0275kind);
    if (\u0275providers.length) {
      providers.push(\u0275providers);
    }
  }
  if (typeof ngDevMode !== "undefined" && ngDevMode && featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) && hasHttpTransferCacheOptions) {
    throw new Error("Configuration error: found both withHttpTransferCacheOptions() and withNoHttpTransferCache() in the same call to provideClientHydration(), which is a contradiction.");
  }
  return makeEnvironmentProviders([typeof ngDevMode !== "undefined" && ngDevMode ? provideZoneJsCompatibilityDetector() : [], withDomHydration(), featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) || hasHttpTransferCacheOptions ? [] : withHttpTransferCache({}), providers]);
}
var VERSION = new Version("17.3.12");

// node_modules/@angular/router/fesm2022/router.mjs
var PRIMARY_OUTLET = "primary";
var RouteTitleKey = /* @__PURE__ */ Symbol("RouteTitle");
var ParamsAsMap = class {
  constructor(params) {
    this.params = params || {};
  }
  has(name) {
    return Object.prototype.hasOwnProperty.call(this.params, name);
  }
  get(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v[0] : v;
    }
    return null;
  }
  getAll(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v : [v];
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
};
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  if (parts.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
    return null;
  }
  const posParams = {};
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const segment = segments[index];
    const isParameter = part.startsWith(":");
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return null;
    }
  }
  return {
    consumed: segments.slice(0, parts.length),
    posParams
  };
}
function shallowEqualArrays(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i]))
      return false;
  }
  return true;
}
function shallowEqual(a, b) {
  const k1 = a ? getDataKeys(a) : void 0;
  const k2 = b ? getDataKeys(b) : void 0;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length)
      return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}
function last2(a) {
  return a.length > 0 ? a[a.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
var pathCompareMap = {
  "exact": equalSegmentGroups,
  "subset": containsSegmentGroup
};
var paramCompareMap = {
  "exact": equalParams,
  "subset": containsParams,
  "ignored": () => true
};
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments))
    return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren)
    return false;
  for (const c in containee.children) {
    if (!container.children[c])
      return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c], matrixParams))
      return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths))
      return false;
    if (containee.hasChildren())
      return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams))
      return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths))
      return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams))
      return false;
    for (const c in containee.children) {
      if (!container.children[c])
        return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current))
      return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams))
      return false;
    if (!container.children[PRIMARY_OUTLET])
      return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i) => {
    return paramCompareMap[options](containerPaths[i].parameters, containeeSegment.parameters);
  });
}
var UrlTree = class {
  constructor(root = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
    this.root = root;
    this.queryParams = queryParams;
    this.fragment = fragment;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (root.segments.length > 0) {
        throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
      }
    }
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  /** @docsNotRequired */
  toString() {
    return DEFAULT_SERIALIZER.serialize(this);
  }
};
var UrlSegmentGroup = class {
  constructor(segments, children) {
    this.segments = segments;
    this.children = children;
    this.parent = null;
    Object.values(children).forEach((v) => v.parent = this);
  }
  /** Whether the segment has child segments */
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  /** Number of child segments */
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  /** @docsNotRequired */
  toString() {
    return serializePaths(this);
  }
};
var UrlSegment = class {
  constructor(path, parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  get parameterMap() {
    this._parameterMap ??= convertToParamMap(this.parameters);
    return this._parameterMap;
  }
  /** @docsNotRequired */
  toString() {
    return serializePath(this);
  }
};
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length)
    return false;
  return as.every((a, i) => a.path === bs[i].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
var UrlSerializer = class _UrlSerializer {
  static {
    this.\u0275fac = function UrlSerializer_Factory(t) {
      return new (t || _UrlSerializer)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UrlSerializer,
      factory: () => (() => new DefaultUrlSerializer())(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new DefaultUrlSerializer()
    }]
  }], null, null);
})();
var DefaultUrlSerializer = class {
  /** Parses a url into a `UrlTree` */
  parse(url) {
    const p = new UrlParser(url);
    return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
  }
  /** Converts a `UrlTree` into a url */
  serialize(tree2) {
    const segment = `/${serializeSegment(tree2.root, true)}`;
    const query = serializeQueryParams(tree2.queryParams);
    const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
    return `${segment}${query}${fragment}`;
  }
};
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
function serializePaths(segment) {
  return segment.segments.map((p) => serializePath(p)).join("/");
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k, v]) => {
      if (k !== PRIMARY_OUTLET) {
        children.push(`${k}:${serializeSegment(v, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v, k) => {
      if (k === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k}:${serializeSegment(v, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s) {
  return encodeURIComponent(s).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s) {
  return encodeUriString(s).replace(/%3B/gi, ";");
}
function encodeUriFragment(s) {
  return encodeURI(s);
}
function encodeUriSegment(s) {
  return encodeUriString(s).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s) {
  return decodeURIComponent(s);
}
function decodeQuery(s) {
  return decode(s.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.entries(params).map(([key, value]) => `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.entries(params).map(([name, value]) => {
    return Array.isArray(value) ? value.map((v) => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s) => s);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
var SEGMENT_RE = /^[^\/()?;#]+/;
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_VALUE_RE = /^[^&#]+/;
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
var UrlParser = class {
  constructor(url) {
    this.url = url;
    this.remaining = url;
  }
  parseRootSegment() {
    this.consumeOptional("/");
    if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
      return new UrlSegmentGroup([], {});
    }
    return new UrlSegmentGroup([], this.parseChildren());
  }
  parseQueryParams() {
    const params = {};
    if (this.consumeOptional("?")) {
      do {
        this.parseQueryParam(params);
      } while (this.consumeOptional("&"));
    }
    return params;
  }
  parseFragment() {
    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren() {
    if (this.remaining === "") {
      return {};
    }
    this.consumeOptional("/");
    const segments = [];
    if (!this.peekStartsWith("(")) {
      segments.push(this.parseSegment());
    }
    while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
      this.capture("/");
      segments.push(this.parseSegment());
    }
    let children = {};
    if (this.peekStartsWith("/(")) {
      this.capture("/");
      children = this.parseParens(true);
    }
    let res = {};
    if (this.peekStartsWith("(")) {
      res = this.parseParens(false);
    }
    if (segments.length > 0 || Object.keys(children).length > 0) {
      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
    }
    return res;
  }
  // parse a segment with its matrix parameters
  // ie `name;k1=v1;k2`
  parseSegment() {
    const path = matchSegments(this.remaining);
    if (path === "" && this.peekStartsWith(";")) {
      throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
    }
    this.capture(path);
    return new UrlSegment(decode(path), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const params = {};
    while (this.consumeOptional(";")) {
      this.parseParam(params);
    }
    return params;
  }
  parseParam(params) {
    const key = matchMatrixKeySegments(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchSegments(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    params[decode(key)] = decode(value);
  }
  // Parse a single query parameter `name[=value]`
  parseQueryParam(params) {
    const key = matchQueryParams(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchUrlQueryParamValue(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    const decodedKey = decodeQuery(key);
    const decodedVal = decodeQuery(value);
    if (params.hasOwnProperty(decodedKey)) {
      let currentVal = params[decodedKey];
      if (!Array.isArray(currentVal)) {
        currentVal = [currentVal];
        params[decodedKey] = currentVal;
      }
      currentVal.push(decodedVal);
    } else {
      params[decodedKey] = decodedVal;
    }
  }
  // parse `(a/b//outlet_name:c/d)`
  parseParens(allowPrimary) {
    const segments = {};
    this.capture("(");
    while (!this.consumeOptional(")") && this.remaining.length > 0) {
      const path = matchSegments(this.remaining);
      const next = this.remaining[path.length];
      if (next !== "/" && next !== ")" && next !== ";") {
        throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
      }
      let outletName = void 0;
      if (path.indexOf(":") > -1) {
        outletName = path.slice(0, path.indexOf(":"));
        this.capture(outletName);
        this.capture(":");
      } else if (allowPrimary) {
        outletName = PRIMARY_OUTLET;
      }
      const children = this.parseChildren();
      segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
      this.consumeOptional("//");
    }
    return segments;
  }
  peekStartsWith(str) {
    return this.remaining.startsWith(str);
  }
  // Consumes the prefix when it is present and returns whether it has been consumed
  consumeOptional(str) {
    if (this.peekStartsWith(str)) {
      this.remaining = this.remaining.substring(str.length);
      return true;
    }
    return false;
  }
  capture(str) {
    if (!this.consumeOptional(str)) {
      throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
    }
  }
};
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], {
    [PRIMARY_OUTLET]: rootCandidate
  }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const [childOutlet, child] of Object.entries(segmentGroup.children)) {
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s);
}
function mergeTrivialChildren(s) {
  if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
    const c = s.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
  }
  return s;
}
function isUrlTree(v) {
  return v instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment) {
  let qp = {};
  if (queryParams) {
    Object.entries(queryParams).forEach(([name, value]) => {
      qp[name] = Array.isArray(value) ? value.map((v) => `${v}`) : `${value}`;
    });
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c]) => {
    if (c === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
var Navigation = class {
  constructor(isAbsolute, numberOfDoubleDots, commands) {
    this.isAbsolute = isAbsolute;
    this.numberOfDoubleDots = numberOfDoubleDots;
    this.commands = commands;
    if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
      throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
    }
    const cmdWithOutlet = commands.find(isCommandWithOutlets);
    if (cmdWithOutlet && cmdWithOutlet !== last2(commands)) {
      throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
  }
};
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, {
          outlets
        }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") {
        } else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = class {
  constructor(segmentGroup, processChildren, index) {
    this.segmentGroup = segmentGroup;
    this.processChildren = processChildren;
    this.index = index;
  }
};
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g = g.parent;
    if (!g) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g.segments.length;
  }
  return new Position(g, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return {
    [PRIMARY_OUTLET]: commands
  };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  segmentGroup ??= new UrlSegmentGroup([], {});
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m.commandIndex);
  if (m.match && m.pathIndex < segmentGroup.segments.length) {
    const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
    g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g, 0, slicedCommands);
  } else if (m.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o) => o !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = {
    match: false,
    pathIndex: 0,
    commandIndex: 0
  };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length)
      return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0)
      break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path))
        return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path))
        return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return {
    match: true,
    pathIndex: currentPathIndex,
    commandIndex: currentCommandIndex
  };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i = 0;
  while (i < commands.length) {
    const command = commands[i];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i === 0 && isMatrixParams(commands[0])) {
      const p = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p.path, stringify(commands[0])));
      i++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i < commands.length - 1 ? commands[i + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k, v]) => res[k] = `${v}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
var IMPERATIVE_NAVIGATION = "imperative";
var EventType;
(function(EventType2) {
  EventType2[EventType2["NavigationStart"] = 0] = "NavigationStart";
  EventType2[EventType2["NavigationEnd"] = 1] = "NavigationEnd";
  EventType2[EventType2["NavigationCancel"] = 2] = "NavigationCancel";
  EventType2[EventType2["NavigationError"] = 3] = "NavigationError";
  EventType2[EventType2["RoutesRecognized"] = 4] = "RoutesRecognized";
  EventType2[EventType2["ResolveStart"] = 5] = "ResolveStart";
  EventType2[EventType2["ResolveEnd"] = 6] = "ResolveEnd";
  EventType2[EventType2["GuardsCheckStart"] = 7] = "GuardsCheckStart";
  EventType2[EventType2["GuardsCheckEnd"] = 8] = "GuardsCheckEnd";
  EventType2[EventType2["RouteConfigLoadStart"] = 9] = "RouteConfigLoadStart";
  EventType2[EventType2["RouteConfigLoadEnd"] = 10] = "RouteConfigLoadEnd";
  EventType2[EventType2["ChildActivationStart"] = 11] = "ChildActivationStart";
  EventType2[EventType2["ChildActivationEnd"] = 12] = "ChildActivationEnd";
  EventType2[EventType2["ActivationStart"] = 13] = "ActivationStart";
  EventType2[EventType2["ActivationEnd"] = 14] = "ActivationEnd";
  EventType2[EventType2["Scroll"] = 15] = "Scroll";
  EventType2[EventType2["NavigationSkipped"] = 16] = "NavigationSkipped";
})(EventType || (EventType = {}));
var RouterEvent = class {
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
};
var NavigationStart = class extends RouterEvent {
  constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
    super(id, url);
    this.type = EventType.NavigationStart;
    this.navigationTrigger = navigationTrigger;
    this.restoredState = restoredState;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.type = EventType.NavigationEnd;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
};
var NavigationCancellationCode;
(function(NavigationCancellationCode2) {
  NavigationCancellationCode2[NavigationCancellationCode2["Redirect"] = 0] = "Redirect";
  NavigationCancellationCode2[NavigationCancellationCode2["SupersededByNewNavigation"] = 1] = "SupersededByNewNavigation";
  NavigationCancellationCode2[NavigationCancellationCode2["NoDataFromResolver"] = 2] = "NoDataFromResolver";
  NavigationCancellationCode2[NavigationCancellationCode2["GuardRejected"] = 3] = "GuardRejected";
})(NavigationCancellationCode || (NavigationCancellationCode = {}));
var NavigationSkippedCode;
(function(NavigationSkippedCode2) {
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredSameUrlNavigation"] = 0] = "IgnoredSameUrlNavigation";
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredByUrlHandlingStrategy"] = 1] = "IgnoredByUrlHandlingStrategy";
})(NavigationSkippedCode || (NavigationSkippedCode = {}));
var NavigationCancel = class extends RouterEvent {
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = EventType.NavigationCancel;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationSkipped = class extends RouterEvent {
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = EventType.NavigationSkipped;
  }
};
var NavigationError = class extends RouterEvent {
  constructor(id, url, error, target) {
    super(id, url);
    this.error = error;
    this.target = target;
    this.type = EventType.NavigationError;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
};
var RoutesRecognized = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.RoutesRecognized;
  }
  /** @docsNotRequired */
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckStart = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.GuardsCheckStart;
  }
  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state, shouldActivate) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.shouldActivate = shouldActivate;
    this.type = EventType.GuardsCheckEnd;
  }
  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
};
var ResolveStart = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.ResolveStart;
  }
  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var ResolveEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.ResolveEnd;
  }
  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var RouteConfigLoadStart = class {
  constructor(route) {
    this.route = route;
    this.type = EventType.RouteConfigLoadStart;
  }
  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
};
var RouteConfigLoadEnd = class {
  constructor(route) {
    this.route = route;
    this.type = EventType.RouteConfigLoadEnd;
  }
  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
};
var ChildActivationStart = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ChildActivationStart;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationStart(path: '${path}')`;
  }
};
var ChildActivationEnd = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ChildActivationEnd;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationEnd(path: '${path}')`;
  }
};
var ActivationStart = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ActivationStart;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationStart(path: '${path}')`;
  }
};
var ActivationEnd = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ActivationEnd;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationEnd(path: '${path}')`;
  }
};
var Scroll = class {
  constructor(routerEvent, position, anchor) {
    this.routerEvent = routerEvent;
    this.position = position;
    this.anchor = anchor;
    this.type = EventType.Scroll;
  }
  toString() {
    const pos = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
    return `Scroll(anchor: '${this.anchor}', position: '${pos}')`;
  }
};
var BeforeActivateRoutes = class {
};
var RedirectRequest = class {
  constructor(url) {
    this.url = url;
  }
};
function stringifyEvent(routerEvent) {
  switch (routerEvent.type) {
    case EventType.ActivationEnd:
      return `ActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ActivationStart:
      return `ActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationEnd:
      return `ChildActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationStart:
      return `ChildActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.GuardsCheckEnd:
      return `GuardsCheckEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state}, shouldActivate: ${routerEvent.shouldActivate})`;
    case EventType.GuardsCheckStart:
      return `GuardsCheckStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.NavigationCancel:
      return `NavigationCancel(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationSkipped:
      return `NavigationSkipped(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationEnd:
      return `NavigationEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}')`;
    case EventType.NavigationError:
      return `NavigationError(id: ${routerEvent.id}, url: '${routerEvent.url}', error: ${routerEvent.error})`;
    case EventType.NavigationStart:
      return `NavigationStart(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.ResolveEnd:
      return `ResolveEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.ResolveStart:
      return `ResolveStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.RouteConfigLoadEnd:
      return `RouteConfigLoadEnd(path: ${routerEvent.route.path})`;
    case EventType.RouteConfigLoadStart:
      return `RouteConfigLoadStart(path: ${routerEvent.route.path})`;
    case EventType.RoutesRecognized:
      return `RoutesRecognized(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.Scroll:
      const pos = routerEvent.position ? `${routerEvent.position[0]}, ${routerEvent.position[1]}` : null;
      return `Scroll(anchor: '${routerEvent.anchor}', position: '${pos}')`;
  }
}
var OutletContext = class {
  constructor() {
    this.outlet = null;
    this.route = null;
    this.injector = null;
    this.children = new ChildrenOutletContexts();
    this.attachRef = null;
  }
};
var ChildrenOutletContexts = class _ChildrenOutletContexts {
  constructor() {
    this.contexts = /* @__PURE__ */ new Map();
  }
  /** Called when a `RouterOutlet` directive is instantiated */
  onChildOutletCreated(childName, outlet) {
    const context = this.getOrCreateContext(childName);
    context.outlet = outlet;
    this.contexts.set(childName, context);
  }
  /**
   * Called when a `RouterOutlet` directive is destroyed.
   * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
   * re-created later.
   */
  onChildOutletDestroyed(childName) {
    const context = this.getContext(childName);
    if (context) {
      context.outlet = null;
      context.attachRef = null;
    }
  }
  /**
   * Called when the corresponding route is deactivated during navigation.
   * Because the component get destroyed, all children outlet are destroyed.
   */
  onOutletDeactivated() {
    const contexts = this.contexts;
    this.contexts = /* @__PURE__ */ new Map();
    return contexts;
  }
  onOutletReAttached(contexts) {
    this.contexts = contexts;
  }
  getOrCreateContext(childName) {
    let context = this.getContext(childName);
    if (!context) {
      context = new OutletContext();
      this.contexts.set(childName, context);
    }
    return context;
  }
  getContext(childName) {
    return this.contexts.get(childName) || null;
  }
  static {
    this.\u0275fac = function ChildrenOutletContexts_Factory(t) {
      return new (t || _ChildrenOutletContexts)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ChildrenOutletContexts,
      factory: _ChildrenOutletContexts.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChildrenOutletContexts, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Tree = class {
  constructor(root) {
    this._root = root;
  }
  get root() {
    return this._root.value;
  }
  /**
   * @internal
   */
  parent(t) {
    const p = this.pathFromRoot(t);
    return p.length > 1 ? p[p.length - 2] : null;
  }
  /**
   * @internal
   */
  children(t) {
    const n = findNode(t, this._root);
    return n ? n.children.map((t2) => t2.value) : [];
  }
  /**
   * @internal
   */
  firstChild(t) {
    const n = findNode(t, this._root);
    return n && n.children.length > 0 ? n.children[0].value : null;
  }
  /**
   * @internal
   */
  siblings(t) {
    const p = findPath(t, this._root);
    if (p.length < 2)
      return [];
    const c = p[p.length - 2].children.map((c2) => c2.value);
    return c.filter((cc) => cc !== t);
  }
  /**
   * @internal
   */
  pathFromRoot(t) {
    return findPath(t, this._root).map((s) => s.value);
  }
};
function findNode(value, node) {
  if (value === node.value)
    return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2)
      return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value)
    return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
var TreeNode = class {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
var RouterState = class extends Tree {
  /** @internal */
  constructor(root, snapshot) {
    super(root);
    this.snapshot = snapshot;
    setRouterState(this, root);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function createEmptyState(rootComponent) {
  const snapshot = createEmptyStateSnapshot(rootComponent);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(rootComponent) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {});
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
var ActivatedRoute = class {
  /** @internal */
  constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
    this.urlSubject = urlSubject;
    this.paramsSubject = paramsSubject;
    this.queryParamsSubject = queryParamsSubject;
    this.fragmentSubject = fragmentSubject;
    this.dataSubject = dataSubject;
    this.outlet = outlet;
    this.component = component;
    this._futureSnapshot = futureSnapshot;
    this.title = this.dataSubject?.pipe(map((d) => d[RouteTitleKey])) ?? of(void 0);
    this.url = urlSubject;
    this.params = paramsSubject;
    this.queryParams = queryParamsSubject;
    this.fragment = fragmentSubject;
    this.data = dataSubject;
  }
  /** The configuration used to match this route. */
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  /** The root of the router state. */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree. */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree. */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree. */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route. */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  /**
   * An Observable that contains a map of the required and optional parameters
   * specific to the route.
   * The map supports retrieving single and multiple values from the same parameter.
   */
  get paramMap() {
    this._paramMap ??= this.params.pipe(map((p) => convertToParamMap(p)));
    return this._paramMap;
  }
  /**
   * An Observable that contains a map of the query parameters available to all routes.
   * The map supports retrieving single and multiple values from the query parameter.
   */
  get queryParamMap() {
    this._queryParamMap ??= this.queryParams.pipe(map((p) => convertToParamMap(p)));
    return this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const {
    routeConfig
  } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || // inherit parent data if route is empty path
  routeConfig?.path === "" || // inherit parent data if parent was componentless
  !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: __spreadValues({}, route.params),
      data: __spreadValues({}, route.data),
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
var ActivatedRouteSnapshot = class {
  /** The resolved route title */
  get title() {
    return this.data?.[RouteTitleKey];
  }
  /** @internal */
  constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, resolve) {
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data;
    this.outlet = outlet;
    this.component = component;
    this.routeConfig = routeConfig;
    this._resolve = resolve;
  }
  /** The root of the router state */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= convertToParamMap(this.params);
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    const url = this.url.map((segment) => segment.toString()).join("/");
    const matched = this.routeConfig ? this.routeConfig.path : "";
    return `Route(url:'${url}', path:'${matched}')`;
  }
};
var RouterStateSnapshot = class extends Tree {
  /** @internal */
  constructor(url, root) {
    super(root);
    this.url = url;
    setRouterState(this, root);
  }
  toString() {
    return serializeNode(this._root);
  }
};
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach((c) => setRouterState(state, c));
}
function serializeNode(node) {
  const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a, b) {
  const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
  const parentsMismatch = !a.parent !== !b.parent;
  return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
var RouterOutlet = class _RouterOutlet {
  constructor() {
    this.activated = null;
    this._activatedRoute = null;
    this.name = PRIMARY_OUTLET;
    this.activateEvents = new EventEmitter();
    this.deactivateEvents = new EventEmitter();
    this.attachEvents = new EventEmitter();
    this.detachEvents = new EventEmitter();
    this.parentContexts = inject(ChildrenOutletContexts);
    this.location = inject(ViewContainerRef);
    this.changeDetector = inject(ChangeDetectorRef);
    this.environmentInjector = inject(EnvironmentInjector);
    this.inputBinder = inject(INPUT_BINDER, {
      optional: true
    });
    this.supportsBindingToComponentInputs = true;
  }
  /** @internal */
  get activatedComponentRef() {
    return this.activated;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (changes["name"]) {
      const {
        firstChange,
        previousValue
      } = changes["name"];
      if (firstChange) {
        return;
      }
      if (this.isTrackedInParentContexts(previousValue)) {
        this.deactivate();
        this.parentContexts.onChildOutletDestroyed(previousValue);
      }
      this.initializeOutletWithName();
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.isTrackedInParentContexts(this.name)) {
      this.parentContexts.onChildOutletDestroyed(this.name);
    }
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  isTrackedInParentContexts(outletName) {
    return this.parentContexts.getContext(outletName)?.outlet === this;
  }
  /** @nodoc */
  ngOnInit() {
    this.initializeOutletWithName();
  }
  initializeOutletWithName() {
    this.parentContexts.onChildOutletCreated(this.name, this);
    if (this.activated) {
      return;
    }
    const context = this.parentContexts.getContext(this.name);
    if (context?.route) {
      if (context.attachRef) {
        this.attach(context.attachRef, context.route);
      } else {
        this.activateWith(context.route, context.injector);
      }
    }
  }
  get isActivated() {
    return !!this.activated;
  }
  /**
   * @returns The currently activated component instance.
   * @throws An error if the outlet is not activated.
   */
  get component() {
    if (!this.activated)
      throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated)
      throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to detach the subtree
   */
  detach() {
    if (!this.activated)
      throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    this.location.detach();
    const cmp = this.activated;
    this.activated = null;
    this._activatedRoute = null;
    this.detachEvents.emit(cmp.instance);
    return cmp;
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
   */
  attach(ref, activatedRoute) {
    this.activated = ref;
    this._activatedRoute = activatedRoute;
    this.location.insert(ref.hostView);
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.attachEvents.emit(ref.instance);
  }
  deactivate() {
    if (this.activated) {
      const c = this.component;
      this.activated.destroy();
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    const location = this.location;
    const snapshot = activatedRoute.snapshot;
    const component = snapshot.component;
    const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
    const injector = new OutletInjector(activatedRoute, childContexts, location.injector);
    this.activated = location.createComponent(component, {
      index: location.length,
      injector,
      environmentInjector: environmentInjector ?? this.environmentInjector
    });
    this.changeDetector.markForCheck();
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activateEvents.emit(this.activated.instance);
  }
  static {
    this.\u0275fac = function RouterOutlet_Factory(t) {
      return new (t || _RouterOutlet)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RouterOutlet,
      selectors: [["router-outlet"]],
      inputs: {
        name: "name"
      },
      outputs: {
        activateEvents: "activate",
        deactivateEvents: "deactivate",
        attachEvents: "attach",
        detachEvents: "detach"
      },
      exportAs: ["outlet"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterOutlet, [{
    type: Directive,
    args: [{
      selector: "router-outlet",
      exportAs: "outlet",
      standalone: true
    }]
  }], null, {
    name: [{
      type: Input
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }],
    attachEvents: [{
      type: Output,
      args: ["attach"]
    }],
    detachEvents: [{
      type: Output,
      args: ["detach"]
    }]
  });
})();
var OutletInjector = class _OutletInjector {
  /**
   * This injector has a special handing for the `ActivatedRoute` and
   * `ChildrenOutletContexts` tokens: it returns corresponding values for those
   * tokens dynamically. This behavior is different from the regular injector logic,
   * when we initialize and store a value, which is later returned for all inject
   * requests.
   *
   * In some cases (e.g. when using `@defer`), this dynamic behavior requires special
   * handling. This function allows to identify an instance of the `OutletInjector` and
   * create an instance of it without referring to the class itself (so this logic can
   * be invoked from the `core` package). This helps to retain dynamic behavior for the
   * mentioned tokens.
   *
   * Note: it's a temporary solution and we should explore how to support this case better.
   */
  __ngOutletInjector(parentInjector) {
    return new _OutletInjector(this.route, this.childContexts, parentInjector);
  }
  constructor(route, childContexts, parent) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken("");
var RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  constructor() {
    this.outletDataSubscriptions = /* @__PURE__ */ new Map();
  }
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  static {
    this.\u0275fac = function RoutedComponentInputBinder_Factory(t) {
      return new (t || _RoutedComponentInputBinder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RoutedComponentInputBinder,
      factory: _RoutedComponentInputBinder.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c) => createNode(routeReuseStrategy, c));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c) => createNode(routeReuseStrategy, c));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c) {
  return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
var NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
function redirectingNavigationError(urlSerializer, redirect) {
  const {
    redirectTo,
    navigationBehaviorOptions
  } = isUrlTree(redirect) ? {
    redirectTo: redirect,
    navigationBehaviorOptions: void 0
  } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, NavigationCancellationCode.Redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code) {
  const error = new Error(`NavigationCancelingError: ${message || ""}`);
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  return error;
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return !!error && error[NAVIGATION_CANCELING_ERROR];
}
var \u0275EmptyOutletComponent = class _\u0275EmptyOutletComponent {
  static {
    this.\u0275fac = function \u0275EmptyOutletComponent_Factory(t) {
      return new (t || _\u0275EmptyOutletComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _\u0275EmptyOutletComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      template: function _EmptyOutletComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275element(0, "router-outlet");
        }
      },
      dependencies: [RouterOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275EmptyOutletComponent, [{
    type: Component,
    args: [{
      template: `<router-outlet></router-outlet>`,
      imports: [RouterOutlet],
      standalone: true
    }]
  }], null, null);
})();
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.redirectTo && (route.component || route.loadComponent)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo && route.canActivate) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and canActivate cannot be used together. Redirects happen before activation so canActivate will never be executed.`);
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function standardizeConfig(r) {
  const children = r.children && r.children.map(standardizeConfig);
  const c = children ? __spreadProps(__spreadValues({}, r), {
    children
  }) : __spreadValues({}, r);
  if (!c.component && !c.loadComponent && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET) {
    c.component = \u0275EmptyOutletComponent;
  }
  return c;
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes, outletName) {
  const sortedConfig = routes.filter((r) => getOutlet(r) === outletName);
  sortedConfig.push(...routes.filter((r) => getOutlet(r) !== outletName));
  return sortedConfig;
}
function getClosestRouteInjector(snapshot) {
  if (!snapshot)
    return null;
  if (snapshot.routeConfig?._injector) {
    return snapshot.routeConfig._injector;
  }
  for (let s = snapshot.parent; s; s = s.parent) {
    const route = s.routeConfig;
    if (route?._loadedInjector)
      return route._loadedInjector;
    if (route?._injector)
      return route._injector;
  }
  return null;
}
var warnedAboutUnsupportedInputBinding = false;
var activateRoutes = (rootContexts, routeReuseStrategy, forwardEvent, inputBindingEnabled) => map((t) => {
  new ActivateRoutes(routeReuseStrategy, t.targetRouterState, t.currentRouterState, forwardEvent, inputBindingEnabled).activate(rootContexts);
  return t;
});
var ActivateRoutes = class {
  constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
    this.routeReuseStrategy = routeReuseStrategy;
    this.futureState = futureState;
    this.currState = currState;
    this.forwardEvent = forwardEvent;
    this.inputBindingEnabled = inputBindingEnabled;
  }
  activate(parentContexts) {
    const futureRoot = this.futureState._root;
    const currRoot = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
    advanceActivatedRoute(this.futureState.root);
    this.activateChildRoutes(futureRoot, currRoot, parentContexts);
  }
  // De-activate the child route that are not re-used for the future state
  deactivateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((futureChild) => {
      const childOutletName = futureChild.value.outlet;
      this.deactivateRoutes(futureChild, children[childOutletName], contexts);
      delete children[childOutletName];
    });
    Object.values(children).forEach((v) => {
      this.deactivateRouteAndItsChildren(v, contexts);
    });
  }
  deactivateRoutes(futureNode, currNode, parentContext) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    if (future === curr) {
      if (future.component) {
        const context = parentContext.getContext(future.outlet);
        if (context) {
          this.deactivateChildRoutes(futureNode, currNode, context.children);
        }
      } else {
        this.deactivateChildRoutes(futureNode, currNode, parentContext);
      }
    } else {
      if (curr) {
        this.deactivateRouteAndItsChildren(currNode, parentContext);
      }
    }
  }
  deactivateRouteAndItsChildren(route, parentContexts) {
    if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
      this.detachAndStoreRouteSubtree(route, parentContexts);
    } else {
      this.deactivateRouteAndOutlet(route, parentContexts);
    }
  }
  detachAndStoreRouteSubtree(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context && context.outlet) {
      const componentRef = context.outlet.detach();
      const contexts2 = context.children.onOutletDeactivated();
      this.routeReuseStrategy.store(route.value.snapshot, {
        componentRef,
        route,
        contexts: contexts2
      });
    }
  }
  deactivateRouteAndOutlet(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context) {
      if (context.outlet) {
        context.outlet.deactivate();
        context.children.onOutletDeactivated();
      }
      context.attachRef = null;
      context.route = null;
    }
  }
  activateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((c) => {
      this.activateRoutes(c, children[c.value.outlet], contexts);
      this.forwardEvent(new ActivationEnd(c.value.snapshot));
    });
    if (futureNode.children.length) {
      this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
    }
  }
  activateRoutes(futureNode, currNode, parentContexts) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    advanceActivatedRoute(future);
    if (future === curr) {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        this.activateChildRoutes(futureNode, currNode, context.children);
      } else {
        this.activateChildRoutes(futureNode, currNode, parentContexts);
      }
    } else {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
          const stored = this.routeReuseStrategy.retrieve(future.snapshot);
          this.routeReuseStrategy.store(future.snapshot, null);
          context.children.onOutletReAttached(stored.contexts);
          context.attachRef = stored.componentRef;
          context.route = stored.route.value;
          if (context.outlet) {
            context.outlet.attach(stored.componentRef, stored.route.value);
          }
          advanceActivatedRoute(stored.route.value);
          this.activateChildRoutes(futureNode, null, context.children);
        } else {
          const injector = getClosestRouteInjector(future.snapshot);
          context.attachRef = null;
          context.route = future;
          context.injector = injector;
          if (context.outlet) {
            context.outlet.activateWith(future, context.injector);
          }
          this.activateChildRoutes(futureNode, null, context.children);
        }
      } else {
        this.activateChildRoutes(futureNode, null, parentContexts);
      }
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const context = parentContexts.getOrCreateContext(future.outlet);
      const outlet = context.outlet;
      if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
        console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
        warnedAboutUnsupportedInputBinding = true;
      }
    }
  }
};
var CanActivate = class {
  constructor(path) {
    this.path = path;
    this.route = this.path[this.path.length - 1];
  }
};
var CanDeactivate = class {
  constructor(component, route) {
    this.component = component;
    this.route = route;
  }
};
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p) {
  const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0)
    return null;
  return {
    node: p,
    guards: canActivateChild
  };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c) => {
    getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
    delete prevChildren[c.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k, v]) => deactivateRouteAndItsChildren(v, contexts.getContext(k), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return mode(curr, future);
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  }
}
function isFunction(v) {
  return typeof v === "function";
}
function isBoolean(v) {
  return typeof v === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e) {
  return e instanceof EmptyError || e?.name === "EmptyError";
}
var INITIAL_VALUE = /* @__PURE__ */ Symbol("INITIAL_VALUE");
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o) => o.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result of results) {
        if (result === true) {
          continue;
        } else if (result === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result === false || result instanceof UrlTree) {
          return result;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function checkGuards(injector, forwardEvent) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      currentSnapshot,
      guards: {
        canActivateChecks,
        canDeactivateChecks
      }
    } = t;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t), {
        guardsResult: true
      }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, injector).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, injector, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t), {
      guardsResult
    })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS, injector) {
  return from(checks).pipe(mergeMap((check) => runCanDeactivate(check.component, check.route, currRSS, futureRSS, injector)), first((result) => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, injector, forwardEvent) {
  return from(checks).pipe(concatMap((check) => {
    return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path, injector), runCanActivate(futureSnapshot, check.route, injector));
  }), first((result) => {
    return result !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS, injector) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0)
    return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path, injector) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p) => getCanActivateChild(p)).filter((_) => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d) => {
    return defer(() => {
      const guardsMapped = d.guards.map((canActivateChild) => {
        const closestInjector = getClosestRouteInjector(d.node) ?? injector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS, injector) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0)
    return of(true);
  const canDeactivateObservables = canDeactivate.map((c) => {
    const closestInjector = getClosestRouteInjector(currARS) ?? injector;
    const guard = getTokenOrFunctionIdentity(c, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : runInInjectionContext(closestInjector, () => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result) => {
    if (!isUrlTree(result))
      return;
    throw redirectingNavigationError(urlSerializer, result);
  }), map((result) => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0)
    return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
var NoMatch = class {
  constructor(segmentGroup) {
    this.segmentGroup = segmentGroup || null;
  }
};
var AbsoluteRedirect = class extends Error {
  constructor(urlTree) {
    super();
    this.urlTree = urlTree;
  }
};
function noMatch$1(segmentGroup) {
  return throwError(new NoMatch(segmentGroup));
}
function namedOutletsRedirect(redirectTo) {
  return throwError(new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`));
}
function canLoadFails(route) {
  return throwError(navigationCancelingError((typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, NavigationCancellationCode.GuardRejected));
}
var ApplyRedirects = class {
  constructor(urlSerializer, urlTree) {
    this.urlSerializer = urlSerializer;
    this.urlTree = urlTree;
  }
  lineralizeSegments(route, urlTree) {
    let res = [];
    let c = urlTree.root;
    while (true) {
      res = res.concat(c.segments);
      if (c.numberOfChildren === 0) {
        return of(res);
      }
      if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
        return namedOutletsRedirect(route.redirectTo);
      }
      c = c.children[PRIMARY_OUTLET];
    }
  }
  applyRedirectCommands(segments, redirectTo, posParams) {
    const newTree = this.applyRedirectCreateUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    if (redirectTo.startsWith("/")) {
      throw new AbsoluteRedirect(newTree);
    }
    return newTree;
  }
  applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
    const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
    return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
  }
  createQueryParams(redirectToParams, actualParams) {
    const res = {};
    Object.entries(redirectToParams).forEach(([k, v]) => {
      const copySourceValue = typeof v === "string" && v.startsWith(":");
      if (copySourceValue) {
        const sourceName = v.substring(1);
        res[k] = actualParams[sourceName];
      } else {
        res[k] = v;
      }
    });
    return res;
  }
  createSegmentGroup(redirectTo, group, segments, posParams) {
    const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
    let children = {};
    Object.entries(group.children).forEach(([name, child]) => {
      children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
    });
    return new UrlSegmentGroup(updatedSegments, children);
  }
  createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
    return redirectToSegments.map((s) => s.path.startsWith(":") ? this.findPosParam(redirectTo, s, posParams) : this.findOrReturn(s, actualSegments));
  }
  findPosParam(redirectTo, redirectToUrlSegment, posParams) {
    const pos = posParams[redirectToUrlSegment.path.substring(1)];
    if (!pos)
      throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
    return pos;
  }
  findOrReturn(redirectToUrlSegment, actualSegments) {
    let idx = 0;
    for (const s of actualSegments) {
      if (s.path === redirectToUrlSegment.path) {
        actualSegments.splice(idx);
        return s;
      }
      idx++;
    }
    return redirectToUrlSegment;
  }
};
var noMatch = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return of(result);
  }
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer).pipe(map((v) => v === true ? result : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "**") {
    return createWildcardMatchResult(segments);
  }
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res)
    return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
    posParams[k] = v.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    // TODO(atscott): investigate combining parameters and positionalParamSegments
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function createWildcardMatchResult(segments) {
  return {
    matched: true,
    parameters: segments.length > 0 ? last2(segments).parameters : {},
    consumedSegments: segments,
    remainingSegments: [],
    positionalParamSegments: {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return {
      segmentGroup: s2,
      slicedSegments: []
    };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
    return {
      segmentGroup: s2,
      slicedSegments
    };
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return {
    segmentGroup: s,
    slicedSegments
  };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
  const res = {};
  for (const r of routes) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r of routes) {
    if (r.path === "" && getOutlet(r) !== PRIMARY_OUTLET) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
  return routes.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet(r) !== PRIMARY_OUTLET);
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
  return routes.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r));
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === "full") {
    return false;
  }
  return r.path === "";
}
function isImmediateMatch(route, rawSegment, segments, outlet) {
  if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
    return false;
  }
  return match(rawSegment, route, segments).matched;
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
var NoLeftoversInUrl = class {
};
function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly") {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer).recognize();
}
var MAX_ALLOWED_REDIRECTS = 31;
var Recognizer = class {
  constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer) {
    this.injector = injector;
    this.configLoader = configLoader;
    this.rootComponentType = rootComponentType;
    this.config = config;
    this.urlTree = urlTree;
    this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    this.urlSerializer = urlSerializer;
    this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
    this.absoluteRedirectCount = 0;
    this.allowRedirects = true;
  }
  noMatchError(e) {
    return new RuntimeError(4002, typeof ngDevMode === "undefined" || ngDevMode ? `Cannot match any routes. URL Segment: '${e.segmentGroup}'` : `'${e.segmentGroup}'`);
  }
  recognize() {
    const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
    return this.match(rootSegmentGroup).pipe(map((children) => {
      const root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, {});
      const rootNode = new TreeNode(root, children);
      const routeState = new RouterStateSnapshot("", rootNode);
      const tree2 = createUrlTreeFromSnapshot(root, [], this.urlTree.queryParams, this.urlTree.fragment);
      tree2.queryParams = this.urlTree.queryParams;
      routeState.url = this.urlSerializer.serialize(tree2);
      this.inheritParamsAndData(routeState._root, null);
      return {
        state: routeState,
        tree: tree2
      };
    }));
  }
  match(rootSegmentGroup) {
    const expanded$ = this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET);
    return expanded$.pipe(catchError((e) => {
      if (e instanceof AbsoluteRedirect) {
        this.urlTree = e.urlTree;
        return this.match(e.urlTree.root);
      }
      if (e instanceof NoMatch) {
        throw this.noMatchError(e);
      }
      throw e;
    }));
  }
  inheritParamsAndData(routeNode, parent) {
    const route = routeNode.value;
    const i = getInherited(route, parent, this.paramsInheritanceStrategy);
    route.params = Object.freeze(i.params);
    route.data = Object.freeze(i.data);
    routeNode.children.forEach((n) => this.inheritParamsAndData(n, route));
  }
  processSegmentGroup(injector, config, segmentGroup, outlet) {
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
      return this.processChildren(injector, config, segmentGroup);
    }
    return this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true).pipe(map((child) => child instanceof TreeNode ? [child] : []));
  }
  /**
   * Matches every child outlet in the `segmentGroup` to a `Route` in the config. Returns `null` if
   * we cannot find a match for _any_ of the children.
   *
   * @param config - The `Routes` to match against
   * @param segmentGroup - The `UrlSegmentGroup` whose children need to be matched against the
   *     config.
   */
  processChildren(injector, config, segmentGroup) {
    const childOutlets = [];
    for (const child of Object.keys(segmentGroup.children)) {
      if (child === "primary") {
        childOutlets.unshift(child);
      } else {
        childOutlets.push(child);
      }
    }
    return from(childOutlets).pipe(concatMap((childOutlet) => {
      const child = segmentGroup.children[childOutlet];
      const sortedConfig = sortByMatchingOutlets(config, childOutlet);
      return this.processSegmentGroup(injector, sortedConfig, child, childOutlet);
    }), scan((children, outletChildren) => {
      children.push(...outletChildren);
      return children;
    }), defaultIfEmpty(null), last(), mergeMap((children) => {
      if (children === null)
        return noMatch$1(segmentGroup);
      const mergedChildren = mergeEmptyPathMatches(children);
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        checkOutletNameUniqueness(mergedChildren);
      }
      sortActivatedRouteSnapshots(mergedChildren);
      return of(mergedChildren);
    }));
  }
  processSegment(injector, routes, segmentGroup, segments, outlet, allowRedirects) {
    return from(routes).pipe(concatMap((r) => {
      return this.processSegmentAgainstRoute(r._injector ?? injector, routes, r, segmentGroup, segments, outlet, allowRedirects).pipe(catchError((e) => {
        if (e instanceof NoMatch) {
          return of(null);
        }
        throw e;
      }));
    }), first((x) => !!x), catchError((e) => {
      if (isEmptyError(e)) {
        if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
          return of(new NoLeftoversInUrl());
        }
        return noMatch$1(segmentGroup);
      }
      throw e;
    }));
  }
  processSegmentAgainstRoute(injector, routes, route, rawSegment, segments, outlet, allowRedirects) {
    if (!isImmediateMatch(route, rawSegment, segments, outlet))
      return noMatch$1(rawSegment);
    if (route.redirectTo === void 0) {
      return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet);
    }
    if (this.allowRedirects && allowRedirects) {
      return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes, route, segments, outlet);
    }
    return noMatch$1(rawSegment);
  }
  expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet) {
    const {
      matched,
      consumedSegments,
      positionalParamSegments,
      remainingSegments
    } = match(segmentGroup, route, segments);
    if (!matched)
      return noMatch$1(segmentGroup);
    if (route.redirectTo.startsWith("/")) {
      this.absoluteRedirectCount++;
      if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
        if (ngDevMode) {
          throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
        }
        this.allowRedirects = false;
      }
    }
    const newTree = this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
    return this.applyRedirects.lineralizeSegments(route, newTree).pipe(mergeMap((newSegments) => {
      return this.processSegment(injector, routes, segmentGroup, newSegments.concat(remainingSegments), outlet, false);
    }));
  }
  matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet) {
    const matchResult = matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer);
    if (route.path === "**") {
      rawSegment.children = {};
    }
    return matchResult.pipe(switchMap((result) => {
      if (!result.matched) {
        return noMatch$1(rawSegment);
      }
      injector = route._injector ?? injector;
      return this.getChildConfig(injector, route, segments).pipe(switchMap(({
        routes: childConfig
      }) => {
        const childInjector = route._loadedInjector ?? injector;
        const {
          consumedSegments,
          remainingSegments,
          parameters
        } = result;
        const snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
        const {
          segmentGroup,
          slicedSegments
        } = split(rawSegment, consumedSegments, remainingSegments, childConfig);
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
          return this.processChildren(childInjector, childConfig, segmentGroup).pipe(map((children) => {
            if (children === null) {
              return null;
            }
            return new TreeNode(snapshot, children);
          }));
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
          return of(new TreeNode(snapshot, []));
        }
        const matchedOnOutlet = getOutlet(route) === outlet;
        return this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true).pipe(map((child) => {
          return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
        }));
      }));
    }));
  }
  getChildConfig(injector, route, segments) {
    if (route.children) {
      return of({
        routes: route.children,
        injector
      });
    }
    if (route.loadChildren) {
      if (route._loadedRoutes !== void 0) {
        return of({
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        });
      }
      return runCanLoadGuards(injector, route, segments, this.urlSerializer).pipe(mergeMap((shouldLoadResult) => {
        if (shouldLoadResult) {
          return this.configLoader.loadChildren(injector, route).pipe(tap((cfg) => {
            route._loadedRoutes = cfg.routes;
            route._loadedInjector = cfg.injector;
          }));
        }
        return canLoadFails(route);
      }));
    }
    return of({
      routes: [],
      injector
    });
  }
};
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a, b) => {
    if (a.value.outlet === PRIMARY_OUTLET)
      return -1;
    if (b.value.outlet === PRIMARY_OUTLET)
      return 1;
    return a.value.outlet.localeCompare(b.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter((n) => !mergedNodes.has(n));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n) => {
    const routeWithSameOutletName = names[n.value.outlet];
    if (routeWithSameOutletName) {
      const p = routeWithSameOutletName.url.map((s) => s.toString()).join("/");
      const c = n.value.url.map((s) => s.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
    }
    names[n.value.outlet] = n.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy) {
  return mergeMap((t) => recognize$1(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy).pipe(map(({
    state: targetSnapshot,
    tree: urlAfterRedirects
  }) => {
    return __spreadProps(__spreadValues({}, t), {
      targetSnapshot,
      urlAfterRedirects
    });
  })));
}
function resolveData(paramsInheritanceStrategy, injector) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      guards: {
        canActivateChecks
      }
    } = t;
    if (!canActivateChecks.length) {
      return of(t);
    }
    const routesWithResolversToRun = new Set(canActivateChecks.map((check) => check.route));
    const routesNeedingDataUpdates = /* @__PURE__ */ new Set();
    for (const route of routesWithResolversToRun) {
      if (routesNeedingDataUpdates.has(route)) {
        continue;
      }
      for (const newRoute of flattenRouteTree(route)) {
        routesNeedingDataUpdates.add(newRoute);
      }
    }
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversToRun.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy, injector);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_) => routesProcessed === routesNeedingDataUpdates.size ? of(t) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, injector) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return resolveNode(resolve, futureARS, futureRSS, injector).pipe(map((resolvedData) => {
    futureARS._resolvedData = resolvedData;
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return null;
  }));
}
function resolveNode(resolve, futureARS, futureRSS, injector) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS, injector).pipe(first(), tap((value) => {
    data[key] = value;
  }))), takeLast(1), mapTo(data), catchError((e) => isEmptyError(e) ? EMPTY : throwError(e)));
}
function getResolver(injectionToken, futureARS, futureRSS, injector) {
  const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v) => {
    const nextResult = next(v);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v));
    }
    return of(v);
  });
}
var TitleStrategy = class _TitleStrategy {
  /**
   * @returns The `title` of the deepest primary route.
   */
  buildTitle(snapshot) {
    let pageTitle;
    let route = snapshot.root;
    while (route !== void 0) {
      pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
      route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
    }
    return pageTitle;
  }
  /**
   * Given an `ActivatedRouteSnapshot`, returns the final value of the
   * `Route.title` property, which can either be a static string or a resolved value.
   */
  getResolvedTitleForRoute(snapshot) {
    return snapshot.data[RouteTitleKey];
  }
  static {
    this.\u0275fac = function TitleStrategy_Factory(t) {
      return new (t || _TitleStrategy)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _TitleStrategy,
      factory: () => (() => inject(DefaultTitleStrategy))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultTitleStrategy)
    }]
  }], null, null);
})();
var DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
  constructor(title) {
    super();
    this.title = title;
  }
  /**
   * Sets the title of the browser to the given value.
   *
   * @param title The `pageTitle` from the deepest primary route.
   */
  updateTitle(snapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== void 0) {
      this.title.setTitle(title);
    }
  }
  static {
    this.\u0275fac = function DefaultTitleStrategy_Factory(t) {
      return new (t || _DefaultTitleStrategy)(\u0275\u0275inject(Title));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DefaultTitleStrategy,
      factory: _DefaultTitleStrategy.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Title
  }], null);
})();
var ROUTER_CONFIGURATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
  providedIn: "root",
  factory: () => ({})
});
var ROUTES = new InjectionToken(ngDevMode ? "ROUTES" : "");
var RouterConfigLoader = class _RouterConfigLoader {
  constructor() {
    this.componentLoaders = /* @__PURE__ */ new WeakMap();
    this.childrenLoaders = /* @__PURE__ */ new WeakMap();
    this.compiler = inject(Compiler);
  }
  loadComponent(route) {
    if (this.componentLoaders.get(route)) {
      return this.componentLoaders.get(route);
    } else if (route._loadedComponent) {
      return of(route._loadedComponent);
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loadRunner = wrapIntoObservable(route.loadComponent()).pipe(map(maybeUnwrapDefaultExport), tap((component) => {
      if (this.onLoadEndListener) {
        this.onLoadEndListener(route);
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
      route._loadedComponent = component;
    }), finalize(() => {
      this.componentLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.componentLoaders.set(route, loader);
    return loader;
  }
  loadChildren(parentInjector, route) {
    if (this.childrenLoaders.get(route)) {
      return this.childrenLoaders.get(route);
    } else if (route._loadedRoutes) {
      return of({
        routes: route._loadedRoutes,
        injector: route._loadedInjector
      });
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const moduleFactoryOrRoutes$ = loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
    const loadRunner = moduleFactoryOrRoutes$.pipe(finalize(() => {
      this.childrenLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.childrenLoaders.set(route, loader);
    return loader;
  }
  static {
    this.\u0275fac = function RouterConfigLoader_Factory(t) {
      return new (t || _RouterConfigLoader)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RouterConfigLoader,
      factory: _RouterConfigLoader.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterConfigLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  return wrapIntoObservable(route.loadChildren()).pipe(map(maybeUnwrapDefaultExport), mergeMap((t) => {
    if (t instanceof NgModuleFactory$1 || Array.isArray(t)) {
      return of(t);
    } else {
      return from(compiler.compileModuleAsync(t));
    }
  }), map((factoryOrRoutes) => {
    if (onLoadEndListener) {
      onLoadEndListener(route);
    }
    let injector;
    let rawRoutes;
    let requireStandaloneComponents = false;
    if (Array.isArray(factoryOrRoutes)) {
      rawRoutes = factoryOrRoutes;
      requireStandaloneComponents = true;
    } else {
      injector = factoryOrRoutes.create(parentInjector).injector;
      rawRoutes = injector.get(ROUTES, [], {
        optional: true,
        self: true
      }).flat();
    }
    const routes = rawRoutes.map(standardizeConfig);
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes, route.path, requireStandaloneComponents);
    return {
      routes,
      injector
    };
  }));
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input) {
  return isWrappedDefaultExport(input) ? input["default"] : input;
}
var UrlHandlingStrategy = class _UrlHandlingStrategy {
  static {
    this.\u0275fac = function UrlHandlingStrategy_Factory(t) {
      return new (t || _UrlHandlingStrategy)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UrlHandlingStrategy,
      factory: () => (() => inject(DefaultUrlHandlingStrategy))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultUrlHandlingStrategy)
    }]
  }], null, null);
})();
var DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
  shouldProcessUrl(url) {
    return true;
  }
  extract(url) {
    return url;
  }
  merge(newUrlPart, wholeUrl) {
    return newUrlPart;
  }
  static {
    this.\u0275fac = function DefaultUrlHandlingStrategy_Factory(t) {
      return new (t || _DefaultUrlHandlingStrategy)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DefaultUrlHandlingStrategy,
      factory: _DefaultUrlHandlingStrategy.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultUrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CREATE_VIEW_TRANSITION = new InjectionToken(ngDevMode ? "view transition helper" : "");
var VIEW_TRANSITION_OPTIONS = new InjectionToken(ngDevMode ? "view transition options" : "");
function createViewTransition(injector, from2, to) {
  const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS);
  const document2 = injector.get(DOCUMENT);
  return injector.get(NgZone).runOutsideAngular(() => {
    if (!document2.startViewTransition || transitionOptions.skipNextTransition) {
      transitionOptions.skipNextTransition = false;
      return new Promise((resolve) => setTimeout(resolve));
    }
    let resolveViewTransitionStarted;
    const viewTransitionStarted = new Promise((resolve) => {
      resolveViewTransitionStarted = resolve;
    });
    const transition = document2.startViewTransition(() => {
      resolveViewTransitionStarted();
      return createRenderPromise(injector);
    });
    const {
      onViewTransitionCreated
    } = transitionOptions;
    if (onViewTransitionCreated) {
      runInInjectionContext(injector, () => onViewTransitionCreated({
        transition,
        from: from2,
        to
      }));
    }
    return viewTransitionStarted;
  });
}
function createRenderPromise(injector) {
  return new Promise((resolve) => {
    afterNextRender(resolve, {
      injector
    });
  });
}
var NavigationTransitions = class _NavigationTransitions {
  get hasRequestedNavigation() {
    return this.navigationId !== 0;
  }
  constructor() {
    this.currentNavigation = null;
    this.currentTransition = null;
    this.lastSuccessfulNavigation = null;
    this.events = new Subject();
    this.transitionAbortSubject = new Subject();
    this.configLoader = inject(RouterConfigLoader);
    this.environmentInjector = inject(EnvironmentInjector);
    this.urlSerializer = inject(UrlSerializer);
    this.rootContexts = inject(ChildrenOutletContexts);
    this.location = inject(Location);
    this.inputBindingEnabled = inject(INPUT_BINDER, {
      optional: true
    }) !== null;
    this.titleStrategy = inject(TitleStrategy);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this.createViewTransition = inject(CREATE_VIEW_TRANSITION, {
      optional: true
    });
    this.navigationId = 0;
    this.afterPreactivation = () => of(void 0);
    this.rootComponentType = null;
    const onLoadStart = (r) => this.events.next(new RouteConfigLoadStart(r));
    const onLoadEnd = (r) => this.events.next(new RouteConfigLoadEnd(r));
    this.configLoader.onLoadEndListener = onLoadEnd;
    this.configLoader.onLoadStartListener = onLoadStart;
  }
  complete() {
    this.transitions?.complete();
  }
  handleNavigationRequest(request) {
    const id = ++this.navigationId;
    this.transitions?.next(__spreadProps(__spreadValues(__spreadValues({}, this.transitions.value), request), {
      id
    }));
  }
  setupNavigations(router, initialUrlTree, initialRouterState) {
    this.transitions = new BehaviorSubject({
      id: 0,
      currentUrlTree: initialUrlTree,
      currentRawUrl: initialUrlTree,
      extractedUrl: this.urlHandlingStrategy.extract(initialUrlTree),
      urlAfterRedirects: this.urlHandlingStrategy.extract(initialUrlTree),
      rawUrl: initialUrlTree,
      extras: {},
      resolve: null,
      reject: null,
      promise: Promise.resolve(true),
      source: IMPERATIVE_NAVIGATION,
      restoredState: null,
      currentSnapshot: initialRouterState.snapshot,
      targetSnapshot: null,
      currentRouterState: initialRouterState,
      targetRouterState: null,
      guards: {
        canActivateChecks: [],
        canDeactivateChecks: []
      },
      guardsResult: null
    });
    return this.transitions.pipe(
      filter((t) => t.id !== 0),
      // Extract URL
      map((t) => __spreadProps(__spreadValues({}, t), {
        extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
      })),
      // Using switchMap so we cancel executing navigations when a new one comes in
      switchMap((overallTransitionState) => {
        let completed = false;
        let errored = false;
        return of(overallTransitionState).pipe(
          switchMap((t) => {
            if (this.navigationId > overallTransitionState.id) {
              const cancellationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancellationReason, NavigationCancellationCode.SupersededByNewNavigation);
              return EMPTY;
            }
            this.currentTransition = overallTransitionState;
            this.currentNavigation = {
              id: t.id,
              initialUrl: t.rawUrl,
              extractedUrl: t.extractedUrl,
              trigger: t.source,
              extras: t.extras,
              previousNavigation: !this.lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, this.lastSuccessfulNavigation), {
                previousNavigation: null
              })
            };
            const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
            const onSameUrlNavigation = t.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
            if (!urlTransition && onSameUrlNavigation !== "reload") {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.` : "";
              this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.rawUrl), reason, NavigationSkippedCode.IgnoredSameUrlNavigation));
              t.resolve(null);
              return EMPTY;
            }
            if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) {
              return of(t).pipe(
                // Fire NavigationStart event
                switchMap((t2) => {
                  const transition = this.transitions?.getValue();
                  this.events.next(new NavigationStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), t2.source, t2.restoredState));
                  if (transition !== this.transitions?.getValue()) {
                    return EMPTY;
                  }
                  return Promise.resolve(t2);
                }),
                // Recognize
                recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy),
                // Update URL if in `eager` update mode
                tap((t2) => {
                  overallTransitionState.targetSnapshot = t2.targetSnapshot;
                  overallTransitionState.urlAfterRedirects = t2.urlAfterRedirects;
                  this.currentNavigation = __spreadProps(__spreadValues({}, this.currentNavigation), {
                    finalUrl: t2.urlAfterRedirects
                  });
                  const routesRecognized = new RoutesRecognized(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                  this.events.next(routesRecognized);
                })
              );
            } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)) {
              const {
                id,
                extractedUrl,
                source,
                restoredState,
                extras
              } = t;
              const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
              this.events.next(navStart);
              const targetSnapshot = createEmptyState(this.rootComponentType).snapshot;
              this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                targetSnapshot,
                urlAfterRedirects: extractedUrl,
                extras: __spreadProps(__spreadValues({}, extras), {
                  skipLocationChange: false,
                  replaceUrl: false
                })
              });
              this.currentNavigation.finalUrl = extractedUrl;
              return of(overallTransitionState);
            } else {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.` : "";
              this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, NavigationSkippedCode.IgnoredByUrlHandlingStrategy));
              t.resolve(null);
              return EMPTY;
            }
          }),
          // --- GUARDS ---
          tap((t) => {
            const guardsStart = new GuardsCheckStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
            this.events.next(guardsStart);
          }),
          map((t) => {
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
              guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
            });
            return overallTransitionState;
          }),
          checkGuards(this.environmentInjector, (evt) => this.events.next(evt)),
          tap((t) => {
            overallTransitionState.guardsResult = t.guardsResult;
            if (isUrlTree(t.guardsResult)) {
              throw redirectingNavigationError(this.urlSerializer, t.guardsResult);
            }
            const guardsEnd = new GuardsCheckEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
            this.events.next(guardsEnd);
          }),
          filter((t) => {
            if (!t.guardsResult) {
              this.cancelNavigationTransition(t, "", NavigationCancellationCode.GuardRejected);
              return false;
            }
            return true;
          }),
          // --- RESOLVE ---
          switchTap((t) => {
            if (t.guards.canActivateChecks.length) {
              return of(t).pipe(tap((t2) => {
                const resolveStart = new ResolveStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                this.events.next(resolveStart);
              }), switchMap((t2) => {
                let dataResolved = false;
                return of(t2).pipe(resolveData(this.paramsInheritanceStrategy, this.environmentInjector), tap({
                  next: () => dataResolved = true,
                  complete: () => {
                    if (!dataResolved) {
                      this.cancelNavigationTransition(t2, typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "", NavigationCancellationCode.NoDataFromResolver);
                    }
                  }
                }));
              }), tap((t2) => {
                const resolveEnd = new ResolveEnd(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                this.events.next(resolveEnd);
              }));
            }
            return void 0;
          }),
          // --- LOAD COMPONENTS ---
          switchTap((t) => {
            const loadComponents = (route) => {
              const loaders = [];
              if (route.routeConfig?.loadComponent && !route.routeConfig._loadedComponent) {
                loaders.push(this.configLoader.loadComponent(route.routeConfig).pipe(tap((loadedComponent) => {
                  route.component = loadedComponent;
                }), map(() => void 0)));
              }
              for (const child of route.children) {
                loaders.push(...loadComponents(child));
              }
              return loaders;
            };
            return combineLatest(loadComponents(t.targetSnapshot.root)).pipe(defaultIfEmpty(null), take(1));
          }),
          switchTap(() => this.afterPreactivation()),
          switchMap(() => {
            const {
              currentSnapshot,
              targetSnapshot
            } = overallTransitionState;
            const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
            return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
          }),
          map((t) => {
            const targetRouterState = createRouterState(router.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
              targetRouterState
            });
            this.currentNavigation.targetRouterState = targetRouterState;
            return overallTransitionState;
          }),
          tap(() => {
            this.events.next(new BeforeActivateRoutes());
          }),
          activateRoutes(this.rootContexts, router.routeReuseStrategy, (evt) => this.events.next(evt), this.inputBindingEnabled),
          // Ensure that if some observable used to drive the transition doesn't
          // complete, the navigation still finalizes This should never happen, but
          // this is done as a safety measure to avoid surfacing this error (#49567).
          take(1),
          tap({
            next: (t) => {
              completed = true;
              this.lastSuccessfulNavigation = this.currentNavigation;
              this.events.next(new NavigationEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects)));
              this.titleStrategy?.updateTitle(t.targetRouterState.snapshot);
              t.resolve(true);
            },
            complete: () => {
              completed = true;
            }
          }),
          // There used to be a lot more logic happening directly within the
          // transition Observable. Some of this logic has been refactored out to
          // other places but there may still be errors that happen there. This gives
          // us a way to cancel the transition from the outside. This may also be
          // required in the future to support something like the abort signal of the
          // Navigation API where the navigation gets aborted from outside the
          // transition.
          takeUntil(this.transitionAbortSubject.pipe(tap((err) => {
            throw err;
          }))),
          finalize(() => {
            if (!completed && !errored) {
              const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancelationReason, NavigationCancellationCode.SupersededByNewNavigation);
            }
            if (this.currentTransition?.id === overallTransitionState.id) {
              this.currentNavigation = null;
              this.currentTransition = null;
            }
          }),
          catchError((e) => {
            errored = true;
            if (isNavigationCancelingError(e)) {
              this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e.message, e.cancellationCode));
              if (!isRedirectingNavigationCancelingError(e)) {
                overallTransitionState.resolve(false);
              } else {
                this.events.next(new RedirectRequest(e.url));
              }
            } else {
              this.events.next(new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e, overallTransitionState.targetSnapshot ?? void 0));
              try {
                overallTransitionState.resolve(router.errorHandler(e));
              } catch (ee) {
                if (this.options.resolveNavigationPromiseOnError) {
                  overallTransitionState.resolve(false);
                } else {
                  overallTransitionState.reject(ee);
                }
              }
            }
            return EMPTY;
          })
        );
      })
    );
  }
  cancelNavigationTransition(t, reason, code) {
    const navCancel = new NavigationCancel(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, code);
    this.events.next(navCancel);
    t.resolve(false);
  }
  /**
   * @returns Whether we're navigating to somewhere that is not what the Router is
   * currently set to.
   */
  isUpdatingInternalState() {
    return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
  }
  /**
   * @returns Whether we're updating the browser URL to something new (navigation is going
   * to somewhere not displayed in the URL bar and we will update the URL
   * bar if navigation succeeds).
   */
  isUpdatedBrowserUrl() {
    const extractedBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
    return extractedBrowserUrl.toString() !== this.currentTransition?.extractedUrl.toString() && !this.currentTransition?.extras.skipLocationChange;
  }
  static {
    this.\u0275fac = function NavigationTransitions_Factory(t) {
      return new (t || _NavigationTransitions)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NavigationTransitions,
      factory: _NavigationTransitions.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationTransitions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
var RouteReuseStrategy = class _RouteReuseStrategy {
  static {
    this.\u0275fac = function RouteReuseStrategy_Factory(t) {
      return new (t || _RouteReuseStrategy)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RouteReuseStrategy,
      factory: () => (() => inject(DefaultRouteReuseStrategy))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultRouteReuseStrategy)
    }]
  }], null, null);
})();
var BaseRouteReuseStrategy = class {
  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   * */
  shouldDetach(route) {
    return false;
  }
  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(route, detachedTree) {
  }
  /** Returns `false`, meaning the route (and its subtree) is never reattached */
  shouldAttach(route) {
    return false;
  }
  /** Returns `null` because this strategy does not store routes for later re-use. */
  retrieve(route) {
    return null;
  }
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and current route config are
   * identical.
   */
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
};
var DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DefaultRouteReuseStrategy_BaseFactory;
      return function DefaultRouteReuseStrategy_Factory(t) {
        return (\u0275DefaultRouteReuseStrategy_BaseFactory || (\u0275DefaultRouteReuseStrategy_BaseFactory = \u0275\u0275getInheritedFactory(_DefaultRouteReuseStrategy)))(t || _DefaultRouteReuseStrategy);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _DefaultRouteReuseStrategy,
      factory: _DefaultRouteReuseStrategy.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultRouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var StateManager = class _StateManager {
  static {
    this.\u0275fac = function StateManager_Factory(t) {
      return new (t || _StateManager)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _StateManager,
      factory: () => (() => inject(HistoryStateManager))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(HistoryStateManager)
    }]
  }], null, null);
})();
var HistoryStateManager = class _HistoryStateManager extends StateManager {
  constructor() {
    super(...arguments);
    this.location = inject(Location);
    this.urlSerializer = inject(UrlSerializer);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    this.currentUrlTree = new UrlTree();
    this.rawUrlTree = this.currentUrlTree;
    this.currentPageId = 0;
    this.lastSuccessfulId = -1;
    this.routerState = createEmptyState(null);
    this.stateMemento = this.createStateMemento();
  }
  getCurrentUrlTree() {
    return this.currentUrlTree;
  }
  getRawUrlTree() {
    return this.rawUrlTree;
  }
  restoredState() {
    return this.location.getState();
  }
  /**
   * The ɵrouterPageId of whatever page is currently active in the browser history. This is
   * important for computing the target page id for new navigations because we need to ensure each
   * page id in the browser history is 1 more than the previous entry.
   */
  get browserPageId() {
    if (this.canceledNavigationResolution !== "computed") {
      return this.currentPageId;
    }
    return this.restoredState()?.\u0275routerPageId ?? this.currentPageId;
  }
  getRouterState() {
    return this.routerState;
  }
  createStateMemento() {
    return {
      rawUrlTree: this.rawUrlTree,
      currentUrlTree: this.currentUrlTree,
      routerState: this.routerState
    };
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    return this.location.subscribe((event) => {
      if (event["type"] === "popstate") {
        listener(event["url"], event.state);
      }
    });
  }
  handleRouterEvent(e, currentTransition) {
    if (e instanceof NavigationStart) {
      this.stateMemento = this.createStateMemento();
    } else if (e instanceof NavigationSkipped) {
      this.rawUrlTree = currentTransition.initialUrl;
    } else if (e instanceof RoutesRecognized) {
      if (this.urlUpdateStrategy === "eager") {
        if (!currentTransition.extras.skipLocationChange) {
          const rawUrl = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
          this.setBrowserUrl(rawUrl, currentTransition);
        }
      }
    } else if (e instanceof BeforeActivateRoutes) {
      this.currentUrlTree = currentTransition.finalUrl;
      this.rawUrlTree = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
      this.routerState = currentTransition.targetRouterState;
      if (this.urlUpdateStrategy === "deferred") {
        if (!currentTransition.extras.skipLocationChange) {
          this.setBrowserUrl(this.rawUrlTree, currentTransition);
        }
      }
    } else if (e instanceof NavigationCancel && (e.code === NavigationCancellationCode.GuardRejected || e.code === NavigationCancellationCode.NoDataFromResolver)) {
      this.restoreHistory(currentTransition);
    } else if (e instanceof NavigationError) {
      this.restoreHistory(currentTransition, true);
    } else if (e instanceof NavigationEnd) {
      this.lastSuccessfulId = e.id;
      this.currentPageId = this.browserPageId;
    }
  }
  setBrowserUrl(url, transition) {
    const path = this.urlSerializer.serialize(url);
    if (this.location.isCurrentPathEqualTo(path) || !!transition.extras.replaceUrl) {
      const currentBrowserPageId = this.browserPageId;
      const state = __spreadValues(__spreadValues({}, transition.extras.state), this.generateNgRouterState(transition.id, currentBrowserPageId));
      this.location.replaceState(path, "", state);
    } else {
      const state = __spreadValues(__spreadValues({}, transition.extras.state), this.generateNgRouterState(transition.id, this.browserPageId + 1));
      this.location.go(path, "", state);
    }
  }
  /**
   * Performs the necessary rollback action to restore the browser URL to the
   * state before the transition.
   */
  restoreHistory(navigation, restoringFromCaughtError = false) {
    if (this.canceledNavigationResolution === "computed") {
      const currentBrowserPageId = this.browserPageId;
      const targetPagePosition = this.currentPageId - currentBrowserPageId;
      if (targetPagePosition !== 0) {
        this.location.historyGo(targetPagePosition);
      } else if (this.currentUrlTree === navigation.finalUrl && targetPagePosition === 0) {
        this.resetState(navigation);
        this.resetUrlToCurrentUrlTree();
      } else {
      }
    } else if (this.canceledNavigationResolution === "replace") {
      if (restoringFromCaughtError) {
        this.resetState(navigation);
      }
      this.resetUrlToCurrentUrlTree();
    }
  }
  resetState(navigation) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, navigation.finalUrl ?? this.rawUrlTree);
  }
  resetUrlToCurrentUrlTree() {
    this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
  }
  generateNgRouterState(navigationId, routerPageId) {
    if (this.canceledNavigationResolution === "computed") {
      return {
        navigationId,
        \u0275routerPageId: routerPageId
      };
    }
    return {
      navigationId
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HistoryStateManager_BaseFactory;
      return function HistoryStateManager_Factory(t) {
        return (\u0275HistoryStateManager_BaseFactory || (\u0275HistoryStateManager_BaseFactory = \u0275\u0275getInheritedFactory(_HistoryStateManager)))(t || _HistoryStateManager);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HistoryStateManager,
      factory: _HistoryStateManager.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NavigationResult;
(function(NavigationResult2) {
  NavigationResult2[NavigationResult2["COMPLETE"] = 0] = "COMPLETE";
  NavigationResult2[NavigationResult2["FAILED"] = 1] = "FAILED";
  NavigationResult2[NavigationResult2["REDIRECTING"] = 2] = "REDIRECTING";
})(NavigationResult || (NavigationResult = {}));
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError || e instanceof NavigationSkipped), map((e) => {
    if (e instanceof NavigationEnd || e instanceof NavigationSkipped) {
      return NavigationResult.COMPLETE;
    }
    const redirecting = e instanceof NavigationCancel ? e.code === NavigationCancellationCode.Redirect || e.code === NavigationCancellationCode.SupersededByNewNavigation : false;
    return redirecting ? NavigationResult.REDIRECTING : NavigationResult.FAILED;
  }), filter((result) => result !== NavigationResult.REDIRECTING), take(1)).subscribe(() => {
    action();
  });
}
function defaultErrorHandler(error) {
  throw error;
}
var exactMatchOptions = {
  paths: "exact",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "exact"
};
var subsetMatchOptions = {
  paths: "subset",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "subset"
};
var Router = class _Router {
  get currentUrlTree() {
    return this.stateManager.getCurrentUrlTree();
  }
  get rawUrlTree() {
    return this.stateManager.getRawUrlTree();
  }
  /**
   * An event stream for routing events.
   */
  get events() {
    return this._events;
  }
  /**
   * The current state of routing in this NgModule.
   */
  get routerState() {
    return this.stateManager.getRouterState();
  }
  constructor() {
    this.disposed = false;
    this.isNgZoneEnabled = false;
    this.console = inject(Console);
    this.stateManager = inject(StateManager);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.pendingTasks = inject(PendingTasks);
    this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    this.navigationTransitions = inject(NavigationTransitions);
    this.urlSerializer = inject(UrlSerializer);
    this.location = inject(Location);
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this._events = new Subject();
    this.errorHandler = this.options.errorHandler || defaultErrorHandler;
    this.navigated = false;
    this.routeReuseStrategy = inject(RouteReuseStrategy);
    this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    this.config = inject(ROUTES, {
      optional: true
    })?.flat() ?? [];
    this.componentInputBindingEnabled = !!inject(INPUT_BINDER, {
      optional: true
    });
    this.eventsSubscription = new Subscription();
    this.isNgZoneEnabled = inject(NgZone) instanceof NgZone && NgZone.isInAngularZone();
    this.resetConfig(this.config);
    this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe({
      error: (e) => {
        this.console.warn(ngDevMode ? `Unhandled Navigation Error: ${e}` : e);
      }
    });
    this.subscribeToNavigationEvents();
  }
  subscribeToNavigationEvents() {
    const subscription = this.navigationTransitions.events.subscribe((e) => {
      try {
        const currentTransition = this.navigationTransitions.currentTransition;
        const currentNavigation = this.navigationTransitions.currentNavigation;
        if (currentTransition !== null && currentNavigation !== null) {
          this.stateManager.handleRouterEvent(e, currentNavigation);
          if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.Redirect && e.code !== NavigationCancellationCode.SupersededByNewNavigation) {
            this.navigated = true;
          } else if (e instanceof NavigationEnd) {
            this.navigated = true;
          } else if (e instanceof RedirectRequest) {
            const mergedTree = this.urlHandlingStrategy.merge(e.url, currentTransition.currentRawUrl);
            const extras = {
              // Persist transient navigation info from the original navigation request.
              info: currentTransition.extras.info,
              skipLocationChange: currentTransition.extras.skipLocationChange,
              // The URL is already updated at this point if we have 'eager' URL
              // updates or if the navigation was triggered by the browser (back
              // button, URL bar, etc). We want to replace that item in history
              // if the navigation is rejected.
              replaceUrl: this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
            };
            this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
              resolve: currentTransition.resolve,
              reject: currentTransition.reject,
              promise: currentTransition.promise
            });
          }
        }
        if (isPublicRouterEvent(e)) {
          this._events.next(e);
        }
      } catch (e2) {
        this.navigationTransitions.transitionAbortSubject.next(e2);
      }
    });
    this.eventsSubscription.add(subscription);
  }
  /** @internal */
  resetRootComponentType(rootComponentType) {
    this.routerState.root.component = rootComponentType;
    this.navigationTransitions.rootComponentType = rootComponentType;
  }
  /**
   * Sets up the location change listener and performs the initial navigation.
   */
  initialNavigation() {
    this.setUpLocationChangeListener();
    if (!this.navigationTransitions.hasRequestedNavigation) {
      this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState());
    }
  }
  /**
   * Sets up the location change listener. This listener detects navigations triggered from outside
   * the Router (the browser back/forward buttons, for example) and schedules a corresponding Router
   * navigation so that the correct events, guards, etc. are triggered.
   */
  setUpLocationChangeListener() {
    this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state) => {
      setTimeout(() => {
        this.navigateToSyncWithBrowser(url, "popstate", state);
      }, 0);
    });
  }
  /**
   * Schedules a router navigation to synchronize Router state with the browser state.
   *
   * This is done as a response to a popstate event and the initial navigation. These
   * two scenarios represent times when the browser URL/state has been updated and
   * the Router needs to respond to ensure its internal state matches.
   */
  navigateToSyncWithBrowser(url, source, state) {
    const extras = {
      replaceUrl: true
    };
    const restoredState = state?.navigationId ? state : null;
    if (state) {
      const stateCopy = __spreadValues({}, state);
      delete stateCopy.navigationId;
      delete stateCopy.\u0275routerPageId;
      if (Object.keys(stateCopy).length !== 0) {
        extras.state = stateCopy;
      }
    }
    const urlTree = this.parseUrl(url);
    this.scheduleNavigation(urlTree, source, restoredState, extras);
  }
  /** The current URL. */
  get url() {
    return this.serializeUrl(this.currentUrlTree);
  }
  /**
   * Returns the current `Navigation` object when the router is navigating,
   * and `null` when idle.
   */
  getCurrentNavigation() {
    return this.navigationTransitions.currentNavigation;
  }
  /**
   * The `Navigation` object of the most recent navigation to succeed and `null` if there
   *     has not been a successful navigation yet.
   */
  get lastSuccessfulNavigation() {
    return this.navigationTransitions.lastSuccessfulNavigation;
  }
  /**
   * Resets the route configuration used for navigation and generating links.
   *
   * @param config The route array for the new configuration.
   *
   * @usageNotes
   *
   * ```
   * router.resetConfig([
   *  { path: 'team/:id', component: TeamCmp, children: [
   *    { path: 'simple', component: SimpleCmp },
   *    { path: 'user/:name', component: UserCmp }
   *  ]}
   * ]);
   * ```
   */
  resetConfig(config) {
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
    this.config = config.map(standardizeConfig);
    this.navigated = false;
  }
  /** @nodoc */
  ngOnDestroy() {
    this.dispose();
  }
  /** Disposes of the router. */
  dispose() {
    this.navigationTransitions.complete();
    if (this.nonRouterCurrentEntryChangeSubscription) {
      this.nonRouterCurrentEntryChangeSubscription.unsubscribe();
      this.nonRouterCurrentEntryChangeSubscription = void 0;
    }
    this.disposed = true;
    this.eventsSubscription.unsubscribe();
  }
  /**
   * Appends URL segments to the current URL tree to create a new URL tree.
   *
   * @param commands An array of URL fragments with which to construct the new URL tree.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL tree or the one provided  in the `relativeTo`
   * property of the options object, if supplied.
   * @param navigationExtras Options that control the navigation strategy.
   * @returns The new URL tree.
   *
   * @usageNotes
   *
   * ```
   * // create /team/33/user/11
   * router.createUrlTree(['/team', 33, 'user', 11]);
   *
   * // create /team/33;expand=true/user/11
   * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
   *
   * // you can collapse static segments like this (this works only with the first passed-in value):
   * router.createUrlTree(['/team/33/user', userId]);
   *
   * // If the first segment can contain slashes, and you do not want the router to split it,
   * // you can do the following:
   * router.createUrlTree([{segmentPath: '/one/two'}]);
   *
   * // create /team/33/(user/11//right:chat)
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
   *
   * // remove the right secondary node
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
   *
   * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
   *
   * // navigate to /team/33/user/11/details
   * router.createUrlTree(['details'], {relativeTo: route});
   *
   * // navigate to /team/33/user/22
   * router.createUrlTree(['../22'], {relativeTo: route});
   *
   * // navigate to /team/44/user/22
   * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
   *
   * Note that a value of `null` or `undefined` for `relativeTo` indicates that the
   * tree should be created relative to the root.
   * ```
   */
  createUrlTree(commands, navigationExtras = {}) {
    const {
      relativeTo,
      queryParams,
      fragment,
      queryParamsHandling,
      preserveFragment
    } = navigationExtras;
    const f = preserveFragment ? this.currentUrlTree.fragment : fragment;
    let q = null;
    switch (queryParamsHandling) {
      case "merge":
        q = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
        break;
      case "preserve":
        q = this.currentUrlTree.queryParams;
        break;
      default:
        q = queryParams || null;
    }
    if (q !== null) {
      q = this.removeEmptyProps(q);
    }
    let relativeToUrlSegmentGroup;
    try {
      const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
      relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
    } catch (e) {
      if (typeof commands[0] !== "string" || !commands[0].startsWith("/")) {
        commands = [];
      }
      relativeToUrlSegmentGroup = this.currentUrlTree.root;
    }
    return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f ?? null);
  }
  /**
   * Navigates to a view using an absolute route path.
   *
   * @param url An absolute path for a defined route. The function does not apply any delta to the
   *     current URL.
   * @param extras An object containing properties that modify the navigation strategy.
   *
   * @returns A Promise that resolves to 'true' when navigation succeeds,
   * to 'false' when navigation fails, or is rejected on error.
   *
   * @usageNotes
   *
   * The following calls request navigation to an absolute path.
   *
   * ```
   * router.navigateByUrl("/team/33/user/11");
   *
   * // Navigate without updating the URL
   * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
   * ```
   *
   * @see [Routing and Navigation guide](guide/router)
   *
   */
  navigateByUrl(url, extras = {
    skipLocationChange: false
  }) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (this.isNgZoneEnabled && !NgZone.isInAngularZone()) {
        this.console.warn(`Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?`);
      }
    }
    const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
    const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
    return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
  }
  /**
   * Navigate based on the provided array of commands and a starting point.
   * If no starting route is provided, the navigation is absolute.
   *
   * @param commands An array of URL fragments with which to construct the target URL.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL or the one provided  in the `relativeTo` property
   * of the options object, if supplied.
   * @param extras An options object that determines how the URL should be constructed or
   *     interpreted.
   *
   * @returns A Promise that resolves to `true` when navigation succeeds, or `false` when navigation
   *     fails. The Promise is rejected when an error occurs if `resolveNavigationPromiseOnError` is
   * not `true`.
   *
   * @usageNotes
   *
   * The following calls request navigation to a dynamic route path relative to the current URL.
   *
   * ```
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
   *
   * // Navigate without updating the URL, overriding the default behavior
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
   * ```
   *
   * @see [Routing and Navigation guide](guide/router)
   *
   */
  navigate(commands, extras = {
    skipLocationChange: false
  }) {
    validateCommands(commands);
    return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
  }
  /** Serializes a `UrlTree` into a string */
  serializeUrl(url) {
    return this.urlSerializer.serialize(url);
  }
  /** Parses a string into a `UrlTree` */
  parseUrl(url) {
    try {
      return this.urlSerializer.parse(url);
    } catch {
      return this.urlSerializer.parse("/");
    }
  }
  isActive(url, matchOptions) {
    let options;
    if (matchOptions === true) {
      options = __spreadValues({}, exactMatchOptions);
    } else if (matchOptions === false) {
      options = __spreadValues({}, subsetMatchOptions);
    } else {
      options = matchOptions;
    }
    if (isUrlTree(url)) {
      return containsTree(this.currentUrlTree, url, options);
    }
    const urlTree = this.parseUrl(url);
    return containsTree(this.currentUrlTree, urlTree, options);
  }
  removeEmptyProps(params) {
    return Object.entries(params).reduce((result, [key, value]) => {
      if (value !== null && value !== void 0) {
        result[key] = value;
      }
      return result;
    }, {});
  }
  scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
    if (this.disposed) {
      return Promise.resolve(false);
    }
    let resolve;
    let reject;
    let promise;
    if (priorPromise) {
      resolve = priorPromise.resolve;
      reject = priorPromise.reject;
      promise = priorPromise.promise;
    } else {
      promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
    }
    const taskId = this.pendingTasks.add();
    afterNextNavigation(this, () => {
      queueMicrotask(() => this.pendingTasks.remove(taskId));
    });
    this.navigationTransitions.handleNavigationRequest({
      source,
      restoredState,
      currentUrlTree: this.currentUrlTree,
      currentRawUrl: this.currentUrlTree,
      rawUrl,
      extras,
      resolve,
      reject,
      promise,
      currentSnapshot: this.routerState.snapshot,
      currentRouterState: this.routerState
    });
    return promise.catch((e) => {
      return Promise.reject(e);
    });
  }
  static {
    this.\u0275fac = function Router_Factory(t) {
      return new (t || _Router)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Router,
      factory: _Router.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Router, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function validateCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i}`);
    }
  }
}
function isPublicRouterEvent(e) {
  return !(e instanceof BeforeActivateRoutes) && !(e instanceof RedirectRequest);
}
var RouterLink = class _RouterLink {
  constructor(router, route, tabIndexAttribute, renderer, el, locationStrategy) {
    this.router = router;
    this.route = route;
    this.tabIndexAttribute = tabIndexAttribute;
    this.renderer = renderer;
    this.el = el;
    this.locationStrategy = locationStrategy;
    this.href = null;
    this.commands = null;
    this.onChanges = new Subject();
    this.preserveFragment = false;
    this.skipLocationChange = false;
    this.replaceUrl = false;
    const tagName = el.nativeElement.tagName?.toLowerCase();
    this.isAnchorElement = tagName === "a" || tagName === "area";
    if (this.isAnchorElement) {
      this.subscription = router.events.subscribe((s) => {
        if (s instanceof NavigationEnd) {
          this.updateHref();
        }
      });
    } else {
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  /**
   * Modifies the tab index if there was not a tabindex attribute on the element during
   * instantiation.
   */
  setTabIndexIfNotOnNativeEl(newTabIndex) {
    if (this.tabIndexAttribute != null || this.isAnchorElement) {
      return;
    }
    this.applyAttributeValue("tabindex", newTabIndex);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.isAnchorElement) {
      this.updateHref();
    }
    this.onChanges.next(this);
  }
  /**
   * Commands to pass to {@link Router#createUrlTree}.
   *   - **array**: commands to pass to {@link Router#createUrlTree}.
   *   - **string**: shorthand for array of commands with just the string, i.e. `['/route']`
   *   - **null|undefined**: effectively disables the `routerLink`
   * @see {@link Router#createUrlTree}
   */
  set routerLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
      this.setTabIndexIfNotOnNativeEl("0");
    } else {
      this.commands = null;
      this.setTabIndexIfNotOnNativeEl(null);
    }
  }
  /** @nodoc */
  onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
    const urlTree = this.urlTree;
    if (urlTree === null) {
      return true;
    }
    if (this.isAnchorElement) {
      if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
        return true;
      }
      if (typeof this.target === "string" && this.target != "_self") {
        return true;
      }
    }
    const extras = {
      skipLocationChange: this.skipLocationChange,
      replaceUrl: this.replaceUrl,
      state: this.state,
      info: this.info
    };
    this.router.navigateByUrl(urlTree, extras);
    return !this.isAnchorElement;
  }
  /** @nodoc */
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  updateHref() {
    const urlTree = this.urlTree;
    this.href = urlTree !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(urlTree)) : null;
    const sanitizedValue = this.href === null ? null : (
      // This class represents a directive that can be added to both `<a>` elements,
      // as well as other elements. As a result, we can't define security context at
      // compile time. So the security context is deferred to runtime.
      // The `ɵɵsanitizeUrlOrResourceUrl` selects the necessary sanitizer function
      // based on the tag and property names. The logic mimics the one from
      // `packages/compiler/src/schema/dom_security_schema.ts`, which is used at compile time.
      //
      // Note: we should investigate whether we can switch to using `@HostBinding('attr.href')`
      // instead of applying a value via a renderer, after a final merge of the
      // `RouterLinkWithHref` directive.
      \u0275\u0275sanitizeUrlOrResourceUrl(this.href, this.el.nativeElement.tagName.toLowerCase(), "href")
    );
    this.applyAttributeValue("href", sanitizedValue);
  }
  applyAttributeValue(attrName, attrValue) {
    const renderer = this.renderer;
    const nativeElement = this.el.nativeElement;
    if (attrValue !== null) {
      renderer.setAttribute(nativeElement, attrName, attrValue);
    } else {
      renderer.removeAttribute(nativeElement, attrName);
    }
  }
  get urlTree() {
    if (this.commands === null) {
      return null;
    }
    return this.router.createUrlTree(this.commands, {
      // If the `relativeTo` input is not defined, we want to use `this.route` by default.
      // Otherwise, we should use the value provided by the user in the input.
      relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: this.preserveFragment
    });
  }
  static {
    this.\u0275fac = function RouterLink_Factory(t) {
      return new (t || _RouterLink)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocationStrategy));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RouterLink,
      selectors: [["", "routerLink", ""]],
      hostVars: 1,
      hostBindings: function RouterLink_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function RouterLink_click_HostBindingHandler($event) {
            return ctx.onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("target", ctx.target);
        }
      },
      inputs: {
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        state: "state",
        info: "info",
        relativeTo: "relativeTo",
        preserveFragment: [InputFlags.HasDecoratorInputTransform, "preserveFragment", "preserveFragment", booleanAttribute],
        skipLocationChange: [InputFlags.HasDecoratorInputTransform, "skipLocationChange", "skipLocationChange", booleanAttribute],
        replaceUrl: [InputFlags.HasDecoratorInputTransform, "replaceUrl", "replaceUrl", booleanAttribute],
        routerLink: "routerLink"
      },
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLink, [{
    type: Directive,
    args: [{
      selector: "[routerLink]",
      standalone: true
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    info: [{
      type: Input
    }],
    relativeTo: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    skipLocationChange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    replaceUrl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    routerLink: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.shiftKey", "$event.altKey", "$event.metaKey"]]
    }]
  });
})();
var RouterLinkActive = class _RouterLinkActive {
  get isActive() {
    return this._isActive;
  }
  constructor(router, element, renderer, cdr, link) {
    this.router = router;
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.link = link;
    this.classes = [];
    this._isActive = false;
    this.routerLinkActiveOptions = {
      exact: false
    };
    this.isActiveChange = new EventEmitter();
    this.routerEventsSubscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.update();
      }
    });
  }
  /** @nodoc */
  ngAfterContentInit() {
    of(this.links.changes, of(null)).pipe(mergeAll()).subscribe((_) => {
      this.update();
      this.subscribeToEachLinkOnChanges();
    });
  }
  subscribeToEachLinkOnChanges() {
    this.linkInputChangesSubscription?.unsubscribe();
    const allLinkChanges = [...this.links.toArray(), this.link].filter((link) => !!link).map((link) => link.onChanges);
    this.linkInputChangesSubscription = from(allLinkChanges).pipe(mergeAll()).subscribe((link) => {
      if (this._isActive !== this.isLinkActive(this.router)(link)) {
        this.update();
      }
    });
  }
  set routerLinkActive(data) {
    const classes = Array.isArray(data) ? data : data.split(" ");
    this.classes = classes.filter((c) => !!c);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this.update();
  }
  /** @nodoc */
  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
    this.linkInputChangesSubscription?.unsubscribe();
  }
  update() {
    if (!this.links || !this.router.navigated)
      return;
    queueMicrotask(() => {
      const hasActiveLinks = this.hasActiveLinks();
      this.classes.forEach((c) => {
        if (hasActiveLinks) {
          this.renderer.addClass(this.element.nativeElement, c);
        } else {
          this.renderer.removeClass(this.element.nativeElement, c);
        }
      });
      if (hasActiveLinks && this.ariaCurrentWhenActive !== void 0) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString());
      } else {
        this.renderer.removeAttribute(this.element.nativeElement, "aria-current");
      }
      if (this._isActive !== hasActiveLinks) {
        this._isActive = hasActiveLinks;
        this.cdr.markForCheck();
        this.isActiveChange.emit(hasActiveLinks);
      }
    });
  }
  isLinkActive(router) {
    const options = isActiveMatchOptions(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : (
      // While the types should disallow `undefined` here, it's possible without strict inputs
      this.routerLinkActiveOptions.exact || false
    );
    return (link) => {
      const urlTree = link.urlTree;
      return urlTree ? router.isActive(urlTree, options) : false;
    };
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.link && isActiveCheckFn(this.link) || this.links.some(isActiveCheckFn);
  }
  static {
    this.\u0275fac = function RouterLinkActive_Factory(t) {
      return new (t || _RouterLinkActive)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(RouterLink, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RouterLinkActive,
      selectors: [["", "routerLinkActive", ""]],
      contentQueries: function RouterLinkActive_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, RouterLink, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.links = _t);
        }
      },
      inputs: {
        routerLinkActiveOptions: "routerLinkActiveOptions",
        ariaCurrentWhenActive: "ariaCurrentWhenActive",
        routerLinkActive: "routerLinkActive"
      },
      outputs: {
        isActiveChange: "isActiveChange"
      },
      exportAs: ["routerLinkActive"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkActive, [{
    type: Directive,
    args: [{
      selector: "[routerLinkActive]",
      exportAs: "routerLinkActive",
      standalone: true
    }]
  }], () => [{
    type: Router
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    links: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }],
    routerLinkActiveOptions: [{
      type: Input
    }],
    ariaCurrentWhenActive: [{
      type: Input
    }],
    isActiveChange: [{
      type: Output
    }],
    routerLinkActive: [{
      type: Input
    }]
  });
})();
function isActiveMatchOptions(options) {
  return !!options.paths;
}
var PreloadingStrategy = class {
};
var PreloadAllModules = class _PreloadAllModules {
  preload(route, fn) {
    return fn().pipe(catchError(() => of(null)));
  }
  static {
    this.\u0275fac = function PreloadAllModules_Factory(t) {
      return new (t || _PreloadAllModules)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _PreloadAllModules,
      factory: _PreloadAllModules.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadAllModules, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NoPreloading = class _NoPreloading {
  preload(route, fn) {
    return of(null);
  }
  static {
    this.\u0275fac = function NoPreloading_Factory(t) {
      return new (t || _NoPreloading)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NoPreloading,
      factory: _NoPreloading.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoPreloading, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RouterPreloader = class _RouterPreloader {
  constructor(router, compiler, injector, preloadingStrategy, loader) {
    this.router = router;
    this.injector = injector;
    this.preloadingStrategy = preloadingStrategy;
    this.loader = loader;
  }
  setUpPreloading() {
    this.subscription = this.router.events.pipe(filter((e) => e instanceof NavigationEnd), concatMap(() => this.preload())).subscribe(() => {
    });
  }
  preload() {
    return this.processRoutes(this.injector, this.router.config);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  processRoutes(injector, routes) {
    const res = [];
    for (const route of routes) {
      if (route.providers && !route._injector) {
        route._injector = createEnvironmentInjector(route.providers, injector, `Route: ${route.path}`);
      }
      const injectorForCurrentRoute = route._injector ?? injector;
      const injectorForChildren = route._loadedInjector ?? injectorForCurrentRoute;
      if (route.loadChildren && !route._loadedRoutes && route.canLoad === void 0 || route.loadComponent && !route._loadedComponent) {
        res.push(this.preloadConfig(injectorForCurrentRoute, route));
      }
      if (route.children || route._loadedRoutes) {
        res.push(this.processRoutes(injectorForChildren, route.children ?? route._loadedRoutes));
      }
    }
    return from(res).pipe(mergeAll());
  }
  preloadConfig(injector, route) {
    return this.preloadingStrategy.preload(route, () => {
      let loadedChildren$;
      if (route.loadChildren && route.canLoad === void 0) {
        loadedChildren$ = this.loader.loadChildren(injector, route);
      } else {
        loadedChildren$ = of(null);
      }
      const recursiveLoadChildren$ = loadedChildren$.pipe(mergeMap((config) => {
        if (config === null) {
          return of(void 0);
        }
        route._loadedRoutes = config.routes;
        route._loadedInjector = config.injector;
        return this.processRoutes(config.injector ?? injector, config.routes);
      }));
      if (route.loadComponent && !route._loadedComponent) {
        const loadComponent$ = this.loader.loadComponent(route);
        return from([recursiveLoadChildren$, loadComponent$]).pipe(mergeAll());
      } else {
        return recursiveLoadChildren$;
      }
    });
  }
  static {
    this.\u0275fac = function RouterPreloader_Factory(t) {
      return new (t || _RouterPreloader)(\u0275\u0275inject(Router), \u0275\u0275inject(Compiler), \u0275\u0275inject(EnvironmentInjector), \u0275\u0275inject(PreloadingStrategy), \u0275\u0275inject(RouterConfigLoader));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RouterPreloader,
      factory: _RouterPreloader.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterPreloader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: Compiler
  }, {
    type: EnvironmentInjector
  }, {
    type: PreloadingStrategy
  }, {
    type: RouterConfigLoader
  }], null);
})();
var ROUTER_SCROLLER = new InjectionToken("");
var RouterScroller = class _RouterScroller {
  /** @nodoc */
  constructor(urlSerializer, transitions, viewportScroller, zone, options = {}) {
    this.urlSerializer = urlSerializer;
    this.transitions = transitions;
    this.viewportScroller = viewportScroller;
    this.zone = zone;
    this.options = options;
    this.lastId = 0;
    this.lastSource = "imperative";
    this.restoredId = 0;
    this.store = {};
    this.environmentInjector = inject(EnvironmentInjector);
    options.scrollPositionRestoration ||= "disabled";
    options.anchorScrolling ||= "disabled";
  }
  init() {
    if (this.options.scrollPositionRestoration !== "disabled") {
      this.viewportScroller.setHistoryScrollRestoration("manual");
    }
    this.routerEventsSubscription = this.createScrollEvents();
    this.scrollEventsSubscription = this.consumeScrollEvents();
  }
  createScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.store[this.lastId] = this.viewportScroller.getScrollPosition();
        this.lastSource = e.navigationTrigger;
        this.restoredId = e.restoredState ? e.restoredState.navigationId : 0;
      } else if (e instanceof NavigationEnd) {
        this.lastId = e.id;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment);
      } else if (e instanceof NavigationSkipped && e.code === NavigationSkippedCode.IgnoredSameUrlNavigation) {
        this.lastSource = void 0;
        this.restoredId = 0;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment);
      }
    });
  }
  consumeScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (!(e instanceof Scroll))
        return;
      if (e.position) {
        if (this.options.scrollPositionRestoration === "top") {
          this.viewportScroller.scrollToPosition([0, 0]);
        } else if (this.options.scrollPositionRestoration === "enabled") {
          this.viewportScroller.scrollToPosition(e.position);
        }
      } else {
        if (e.anchor && this.options.anchorScrolling === "enabled") {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else if (this.options.scrollPositionRestoration !== "disabled") {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }
  scheduleScrollEvent(routerEvent, anchor) {
    this.zone.runOutsideAngular(() => __async(this, null, function* () {
      yield new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        });
        afterNextRender(() => {
          resolve();
        }, {
          injector: this.environmentInjector
        });
      });
      this.zone.run(() => {
        this.transitions.events.next(new Scroll(routerEvent, this.lastSource === "popstate" ? this.store[this.restoredId] : null, anchor));
      });
    }));
  }
  /** @nodoc */
  ngOnDestroy() {
    this.routerEventsSubscription?.unsubscribe();
    this.scrollEventsSubscription?.unsubscribe();
  }
  static {
    this.\u0275fac = function RouterScroller_Factory(t) {
      \u0275\u0275invalidFactory();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RouterScroller,
      factory: _RouterScroller.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterScroller, [{
    type: Injectable
  }], () => [{
    type: UrlSerializer
  }, {
    type: NavigationTransitions
  }, {
    type: ViewportScroller
  }, {
    type: NgZone
  }, {
    type: void 0
  }], null);
})();
function provideRouter(routes, ...features) {
  return makeEnvironmentProviders([{
    provide: ROUTES,
    multi: true,
    useValue: routes
  }, typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : [], {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: getBootstrapListener
  }, features.map((feature) => feature.\u0275providers)]);
}
function rootRoute(router) {
  return router.routerState.root;
}
function routerFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
var ROUTER_IS_PROVIDED = new InjectionToken("", {
  providedIn: "root",
  factory: () => false
});
function getBootstrapListener() {
  const injector = inject(Injector);
  return (bootstrappedComponentRef) => {
    const ref = injector.get(ApplicationRef);
    if (bootstrappedComponentRef !== ref.components[0]) {
      return;
    }
    const router = injector.get(Router);
    const bootstrapDone = injector.get(BOOTSTRAP_DONE);
    if (injector.get(INITIAL_NAVIGATION) === 1) {
      router.initialNavigation();
    }
    injector.get(ROUTER_PRELOADER, null, InjectFlags.Optional)?.setUpPreloading();
    injector.get(ROUTER_SCROLLER, null, InjectFlags.Optional)?.init();
    router.resetRootComponentType(ref.componentTypes[0]);
    if (!bootstrapDone.closed) {
      bootstrapDone.next();
      bootstrapDone.complete();
      bootstrapDone.unsubscribe();
    }
  };
}
var BOOTSTRAP_DONE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "bootstrap done indicator" : "", {
  factory: () => {
    return new Subject();
  }
});
var INITIAL_NAVIGATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "initial navigation" : "", {
  providedIn: "root",
  factory: () => 1
  /* InitialNavigation.EnabledNonBlocking */
});
function withEnabledBlockingInitialNavigation() {
  const providers = [{
    provide: INITIAL_NAVIGATION,
    useValue: 0
    /* InitialNavigation.EnabledBlocking */
  }, {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [Injector],
    useFactory: (injector) => {
      const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
      return () => {
        return locationInitialized.then(() => {
          return new Promise((resolve) => {
            const router = injector.get(Router);
            const bootstrapDone = injector.get(BOOTSTRAP_DONE);
            afterNextNavigation(router, () => {
              resolve(true);
            });
            injector.get(NavigationTransitions).afterPreactivation = () => {
              resolve(true);
              return bootstrapDone.closed ? of(void 0) : bootstrapDone;
            };
            router.initialNavigation();
          });
        });
      };
    }
  }];
  return routerFeature(2, providers);
}
function withDisabledInitialNavigation() {
  const providers = [{
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: () => {
      const router = inject(Router);
      return () => {
        router.setUpLocationChangeListener();
      };
    }
  }, {
    provide: INITIAL_NAVIGATION,
    useValue: 2
    /* InitialNavigation.Disabled */
  }];
  return routerFeature(3, providers);
}
function withDebugTracing() {
  let providers = [];
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    providers = [{
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const router = inject(Router);
        return () => router.events.subscribe((e) => {
          console.group?.(`Router Event: ${e.constructor.name}`);
          console.log(stringifyEvent(e));
          console.log(e);
          console.groupEnd?.();
        });
      }
    }];
  } else {
    providers = [];
  }
  return routerFeature(1, providers);
}
var ROUTER_PRELOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router preloader" : "");
function withPreloading(preloadingStrategy) {
  const providers = [{
    provide: ROUTER_PRELOADER,
    useExisting: RouterPreloader
  }, {
    provide: PreloadingStrategy,
    useExisting: preloadingStrategy
  }];
  return routerFeature(0, providers);
}
function withComponentInputBinding() {
  const providers = [RoutedComponentInputBinder, {
    provide: INPUT_BINDER,
    useExisting: RoutedComponentInputBinder
  }];
  return routerFeature(8, providers);
}
function withViewTransitions(options) {
  const providers = [{
    provide: CREATE_VIEW_TRANSITION,
    useValue: createViewTransition
  }, {
    provide: VIEW_TRANSITION_OPTIONS,
    useValue: __spreadValues({
      skipNextTransition: !!options?.skipInitialTransition
    }, options)
  }];
  return routerFeature(9, providers);
}
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent];
var ROUTER_FORROOT_GUARD = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router duplicate forRoot guard" : "ROUTER_FORROOT_GUARD");
var ROUTER_PROVIDERS = [
  Location,
  {
    provide: UrlSerializer,
    useClass: DefaultUrlSerializer
  },
  Router,
  ChildrenOutletContexts,
  {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  },
  RouterConfigLoader,
  // Only used to warn when `provideRoutes` is used without `RouterModule` or `provideRouter`. Can
  // be removed when `provideRoutes` is removed.
  typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : []
];
var RouterModule = class _RouterModule {
  constructor(guard) {
  }
  /**
   * Creates and configures a module with all the router providers and directives.
   * Optionally sets up an application listener to perform an initial navigation.
   *
   * When registering the NgModule at the root, import as follows:
   *
   * ```
   * @NgModule({
   *   imports: [RouterModule.forRoot(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the application.
   * @param config An `ExtraOptions` configuration object that controls how navigation is performed.
   * @return The new `NgModule`.
   *
   */
  static forRoot(routes, config) {
    return {
      ngModule: _RouterModule,
      providers: [ROUTER_PROVIDERS, typeof ngDevMode === "undefined" || ngDevMode ? config?.enableTracing ? withDebugTracing().\u0275providers : [] : [], {
        provide: ROUTES,
        multi: true,
        useValue: routes
      }, {
        provide: ROUTER_FORROOT_GUARD,
        useFactory: provideForRootGuard,
        deps: [[Router, new Optional(), new SkipSelf()]]
      }, {
        provide: ROUTER_CONFIGURATION,
        useValue: config ? config : {}
      }, config?.useHash ? provideHashLocationStrategy() : providePathLocationStrategy(), provideRouterScroller(), config?.preloadingStrategy ? withPreloading(config.preloadingStrategy).\u0275providers : [], config?.initialNavigation ? provideInitialNavigation(config) : [], config?.bindToComponentInputs ? withComponentInputBinding().\u0275providers : [], config?.enableViewTransitions ? withViewTransitions().\u0275providers : [], provideRouterInitializer()]
    };
  }
  /**
   * Creates a module with all the router directives and a provider registering routes,
   * without creating a new Router service.
   * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
   *
   * ```
   * @NgModule({
   *   imports: [RouterModule.forChild(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the submodule.
   * @return The new NgModule.
   *
   */
  static forChild(routes) {
    return {
      ngModule: _RouterModule,
      providers: [{
        provide: ROUTES,
        multi: true,
        useValue: routes
      }]
    };
  }
  static {
    this.\u0275fac = function RouterModule_Factory(t) {
      return new (t || _RouterModule)(\u0275\u0275inject(ROUTER_FORROOT_GUARD, 8));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _RouterModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterModule, [{
    type: NgModule,
    args: [{
      imports: ROUTER_DIRECTIVES,
      exports: ROUTER_DIRECTIVES
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ROUTER_FORROOT_GUARD]
    }]
  }], null);
})();
function provideRouterScroller() {
  return {
    provide: ROUTER_SCROLLER,
    useFactory: () => {
      const viewportScroller = inject(ViewportScroller);
      const zone = inject(NgZone);
      const config = inject(ROUTER_CONFIGURATION);
      const transitions = inject(NavigationTransitions);
      const urlSerializer = inject(UrlSerializer);
      if (config.scrollOffset) {
        viewportScroller.setOffset(config.scrollOffset);
      }
      return new RouterScroller(urlSerializer, transitions, viewportScroller, zone, config);
    }
  };
}
function provideHashLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  };
}
function providePathLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  };
}
function provideForRootGuard(router) {
  if ((typeof ngDevMode === "undefined" || ngDevMode) && router) {
    throw new RuntimeError(4007, `The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.`);
  }
  return "guarded";
}
function provideInitialNavigation(config) {
  return [config.initialNavigation === "disabled" ? withDisabledInitialNavigation().\u0275providers : [], config.initialNavigation === "enabledBlocking" ? withEnabledBlockingInitialNavigation().\u0275providers : []];
}
var ROUTER_INITIALIZER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "Router Initializer" : "");
function provideRouterInitializer() {
  return [
    // ROUTER_INITIALIZER token should be removed. It's public API but shouldn't be. We can just
    // have `getBootstrapListener` directly attached to APP_BOOTSTRAP_LISTENER.
    {
      provide: ROUTER_INITIALIZER,
      useFactory: getBootstrapListener
    },
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useExisting: ROUTER_INITIALIZER
    }
  ];
}
var VERSION2 = new Version("17.3.12");

// src/app/components/reader/reader.component.ts
function ReaderComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-image", "url(" + ctx_r1.currentBackgroundImage + ")");
  }
}
function ReaderComponent_div_0_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u25C0 PREV");
    \u0275\u0275elementEnd();
  }
}
function ReaderComponent_div_0_div_19_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ReaderComponent_div_0_div_19_div_3_button_1_Template_button_click_0_listener() {
      const choice_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectChoice(choice_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const choice_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", choice_r4.text, " ");
  }
}
function ReaderComponent_div_0_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, ReaderComponent_div_0_div_19_div_3_button_1_Template, 2, 1, "button", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currentSlide.choices);
  }
}
function ReaderComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "div", 31);
    \u0275\u0275template(3, ReaderComponent_div_0_div_19_div_3_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r1.formatTextWithLore(ctx_r1.getSlideText(ctx_r1.currentSlide)), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSlide && ctx_r1.currentSlide.choices && ctx_r1.currentSlide.choices.length > 0);
  }
}
function ReaderComponent_div_0_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "p", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.formatTextWithLore(ctx_r1.getSlideText(ctx_r1.currentSlide)), \u0275\u0275sanitizeHtml);
  }
}
function ReaderComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275template(2, ReaderComponent_div_0_div_20_div_2_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", (ctx_r1.currentSlide == null ? null : ctx_r1.currentSlide.imageUrl) || "", \u0275\u0275sanitizeUrl)("alt", ctx_r1.getSlideText(ctx_r1.currentSlide));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getSlideText(ctx_r1.currentSlide));
  }
}
function ReaderComponent_div_0_div_21_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", (ctx_r1.currentSlide == null ? null : ctx_r1.currentSlide.imageUrl) || "", \u0275\u0275sanitizeUrl);
  }
}
function ReaderComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 40);
    \u0275\u0275template(2, ReaderComponent_div_0_div_21_img_2_Template, 1, 1, "img", 41);
    \u0275\u0275element(3, "div", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentSlide == null ? null : ctx_r1.currentSlide.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.formatTextWithLore(ctx_r1.getSlideText(ctx_r1.currentSlide)), \u0275\u0275sanitizeHtml);
  }
}
function ReaderComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 44)(2, "div", 45);
    \u0275\u0275text(3, "\u2699");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p", 46);
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function ReaderComponent_div_0_div_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextSlide());
    });
    \u0275\u0275text(6, "Continue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", ctx_r1.formatTextWithLore(ctx_r1.getSlideText(ctx_r1.currentSlide)), \u0275\u0275sanitizeHtml);
  }
}
function ReaderComponent_div_0_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "NEXT \u25B6");
    \u0275\u0275elementEnd();
  }
}
function ReaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, ReaderComponent_div_0_div_1_Template, 1, 2, "div", 3);
    \u0275\u0275element(2, "div", 4);
    \u0275\u0275elementStart(3, "header", 5)(4, "button", 6);
    \u0275\u0275listener("click", function ReaderComponent_div_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExitReader());
    });
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6, "\u2B05");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "h1", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 10)(11, "span", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12);
    \u0275\u0275element(14, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "main", 14)(16, "div", 15);
    \u0275\u0275listener("click", function ReaderComponent_div_0_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousSlide());
    })("touchstart", function ReaderComponent_div_0_Template_div_touchstart_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTouchStart($event, "left"));
    })("touchend", function ReaderComponent_div_0_Template_div_touchend_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTouchEnd($event, "left"));
    });
    \u0275\u0275template(17, ReaderComponent_div_0_span_17_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 17);
    \u0275\u0275listener("click", function ReaderComponent_div_0_Template_div_click_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkForLoreKeywords($event));
    });
    \u0275\u0275template(19, ReaderComponent_div_0_div_19_Template, 4, 2, "div", 18)(20, ReaderComponent_div_0_div_20_Template, 3, 3, "div", 18)(21, ReaderComponent_div_0_div_21_Template, 4, 2, "div", 18)(22, ReaderComponent_div_0_div_22_Template, 7, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 19);
    \u0275\u0275listener("click", function ReaderComponent_div_0_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextSlide());
    })("touchstart", function ReaderComponent_div_0_Template_div_touchstart_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTouchStart($event, "right"));
    })("touchend", function ReaderComponent_div_0_Template_div_touchend_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTouchEnd($event, "right"));
    });
    \u0275\u0275template(24, ReaderComponent_div_0_span_24_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "footer", 20)(26, "div", 21)(27, "span", 22);
    \u0275\u0275text(28, "Overall Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 23);
    \u0275\u0275element(30, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 25);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "app-lore-popup", 26);
    \u0275\u0275listener("close", function ReaderComponent_div_0_Template_app_lore_popup_close_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLoreModal());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("reading", ctx_r1.isReading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentBackgroundImage);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.currentChapter.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.currentSlideIndex + 1, " / ", ctx_r1.currentChapter.slides.length, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.chapterProgress, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getSlideClasses());
    \u0275\u0275advance();
    \u0275\u0275styleProp("pointer-events", ctx_r1.hasActiveChoices ? "none" : "all");
    \u0275\u0275classProp("show-hint", ctx_r1.showNavigationHints)("disabled", ctx_r1.hasActiveChoices);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNavigationHints && !ctx_r1.hasActiveChoices);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.currentSlide == null ? null : ctx_r1.currentSlide.type) === "narrative");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.currentSlide == null ? null : ctx_r1.currentSlide.type) === "full_image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.currentSlide == null ? null : ctx_r1.currentSlide.type) === "text_block");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.currentSlide == null ? null : ctx_r1.currentSlide.type) === "interactive_break");
    \u0275\u0275advance();
    \u0275\u0275styleProp("pointer-events", ctx_r1.hasActiveChoices ? "none" : "all");
    \u0275\u0275classProp("show-hint", ctx_r1.showNavigationHints)("disabled", ctx_r1.hasActiveChoices);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNavigationHints && !ctx_r1.hasActiveChoices);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r1.readingProgress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.readingProgress, "%");
    \u0275\u0275advance();
    \u0275\u0275property("loreEntry", ctx_r1.selectedLoreEntry)("isVisible", ctx_r1.showLoreModal);
  }
}
function ReaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "p");
    \u0275\u0275text(2, "\u2699 Cargando cap\xEDtulo...");
    \u0275\u0275elementEnd()();
  }
}
var ReaderComponent = class _ReaderComponent {
  // Helper: Check if current slide has choices
  get hasActiveChoices() {
    return !!(this.currentSlide?.choices && this.currentSlide.choices.length > 0);
  }
  /**
   * Helper: Extract text from slide content (handles both string and object formats)
   */
  getSlideText(slide) {
    if (!slide)
      return "";
    if (typeof slide.content === "string")
      return slide.content;
    return slide.content.text || "";
  }
  constructor(contentService, storageService, router) {
    this.contentService = contentService;
    this.storageService = storageService;
    this.router = router;
    this.exitReader = new EventEmitter();
    this.currentChapter = null;
    this.currentSlide = null;
    this.currentSlideIndex = 0;
    this.isReading = false;
    this.showLoreModal = false;
    this.selectedLoreEntry = null;
    this.currentBackgroundImage = null;
    this.currentAmbientSound = null;
    this.isTransitioning = false;
    this.slideAnimationClass = "";
    this.showNavigationHints = true;
    this.readingProgress = 0;
    this.chapterProgress = 0;
    this.hapticService = inject(HapticService);
    this.elementRef = inject(ElementRef);
    this.subscriptions = [];
  }
  ngOnInit() {
    this.subscribeToCurrentChapter();
    this.subscribeToSaveState();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    if (this.autoAdvanceTimer) {
      clearTimeout(this.autoAdvanceTimer);
    }
    if (this.currentAmbientSound) {
      this.currentAmbientSound.pause();
      this.currentAmbientSound = null;
    }
  }
  /**
   * Subscribe to current chapter changes
   */
  subscribeToCurrentChapter() {
    const sub = this.contentService.currentChapter$.subscribe((chapter) => {
      if (!chapter && this.currentChapter) {
        return;
      }
      this.currentChapter = chapter;
      if (chapter) {
        this.loadSlide();
        this.isReading = true;
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Subscribe to save state changes
   */
  subscribeToSaveState() {
    const sub = this.storageService.saveState$.subscribe((saveState) => {
      if (saveState && this.currentChapter) {
        this.currentSlideIndex = saveState.currentSlideIndex;
        this.loadSlide();
        this.updateProgress();
        this.updateChapterProgress();
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Load current slide based on index
   * 🔥 MEJORADO: Maneja backgroundImage, ambientSound y transiciones
   */
  loadSlide() {
    if (!this.currentChapter) {
      return;
    }
    const slides = this.currentChapter.slides;
    if (this.currentSlideIndex >= 0 && this.currentSlideIndex < slides.length) {
      this.isTransitioning = true;
      this.slideAnimationClass = "slide-fade-out";
      setTimeout(() => {
        this.currentSlide = slides[this.currentSlideIndex];
        this.updateBackgroundImage();
        this.updateAmbientSound();
        this.updateChapterProgress();
        this.updateProgress();
        this.setupAutoAdvance();
        this.slideAnimationClass = "slide-fade-in";
        setTimeout(() => {
          this.isTransitioning = false;
          this.slideAnimationClass = "";
        }, 300);
      }, 200);
    }
  }
  /**
   * Update background image based on current slide
   * 🔥 NUEVO
   */
  updateBackgroundImage() {
    if (this.currentSlide?.backgroundImage) {
      this.currentBackgroundImage = this.currentSlide.backgroundImage;
    }
  }
  /**
   * Update ambient sound based on current slide
   * 🔥 NUEVO
   */
  updateAmbientSound() {
    const saveState = this.storageService.getCurrentSaveState();
    const soundEnabled = saveState?.settings.soundEnabled ?? true;
    if (this.currentAmbientSound) {
      this.currentAmbientSound.pause();
      this.currentAmbientSound = null;
    }
    if (this.currentSlide?.ambientSound && soundEnabled) {
      this.currentAmbientSound = new Audio(this.currentSlide.ambientSound);
      this.currentAmbientSound.loop = true;
      this.currentAmbientSound.volume = 0.3;
      this.currentAmbientSound.play().catch(() => {
      });
    }
  }
  /**
   * Handle tap navigation
   */
  onTap(event) {
    if (this.showLoreModal)
      return;
    if (this.showNavigationHints) {
      this.hideNavigationHints();
    }
    const screenWidth = window.innerWidth;
    const clickX = event.clientX;
    const leftZone = screenWidth * 0.25;
    const rightZone = screenWidth * 0.75;
    if (clickX < leftZone) {
      this.previousSlide();
    } else if (clickX > rightZone) {
      this.nextSlide();
    } else {
      this.checkForLoreKeywords(event);
    }
  }
  /**
   * Hide navigation hints after first interaction
   * 🔥 NUEVO
   */
  hideNavigationHints() {
    setTimeout(() => {
      this.showNavigationHints = false;
    }, 500);
  }
  /**
   * Navigate to next slide
   */
  nextSlide() {
    if (!this.currentChapter) {
      return;
    }
    this.hapticService.trigger("notification");
    this.triggerTouchFeedback("right");
    const slides = this.currentChapter.slides;
    if (this.currentSlideIndex < slides.length - 1) {
      this.currentSlideIndex++;
      this.storageService.updateProgress(this.currentChapter.id, this.currentSlideIndex);
      this.loadSlide();
      this.updateProgress();
    } else {
      this.completeChapter();
    }
  }
  /**
   * Navigate to previous slide
   */
  previousSlide() {
    if (this.currentSlideIndex > 0) {
      this.hapticService.trigger("notification");
      this.triggerTouchFeedback("left");
      this.currentSlideIndex--;
      if (this.currentChapter) {
        this.storageService.updateProgress(this.currentChapter.id, this.currentSlideIndex);
        this.loadSlide();
        this.updateProgress();
      }
    }
  }
  /**
   * Handle choice selection in interactive slides
   * 🔥 MEJORADO: Navega al slide específico según choice.nextSlide
   */
  selectChoice(choice) {
    this.hapticService.trigger("success");
    this.triggerTouchFeedback("center");
    if (this.currentChapter && this.currentSlide) {
      this.savePlayerChoice(this.currentChapter.id, this.currentSlide.id, choice);
    }
    if (choice.nextSlide) {
      this.navigateToSlideById(choice.nextSlide);
    } else {
      this.nextSlide();
    }
  }
  /**
   * Navigate to a specific slide by ID
   * 🔥 NUEVO: Permite saltar a cualquier slide del capítulo
   */
  navigateToSlideById(slideId) {
    if (!this.currentChapter) {
      return;
    }
    const slideIndex = this.currentChapter.slides.findIndex((slide) => slide.id === slideId);
    if (slideIndex === -1) {
      return;
    }
    this.currentSlideIndex = slideIndex;
    this.storageService.updateProgress(this.currentChapter.id, this.currentSlideIndex);
    this.loadSlide();
  }
  /**
   * Save player choice to SaveState
   * 🔥 NUEVO: Guarda las decisiones del jugador para tracking
   */
  savePlayerChoice(chapterId, slideId, choice) {
    const saveState = this.storageService.getCurrentSaveState();
    if (!saveState)
      return;
    if (!saveState.playerChoices) {
      saveState.playerChoices = [];
    }
    const choiceRecord = {
      chapterId,
      slideId,
      choiceText: choice.text,
      nextSlide: choice.nextSlide,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    const existingIndex = saveState.playerChoices.findIndex((c) => c.chapterId === chapterId && c.slideId === slideId);
    if (existingIndex !== -1) {
      saveState.playerChoices[existingIndex] = choiceRecord;
    } else {
      saveState.playerChoices.push(choiceRecord);
    }
    this.storageService.saveSaveState(saveState);
  }
  /**
  * Complete current chapter
  */
  completeChapter() {
    if (!this.currentChapter)
      return;
    this.storageService.completeChapter(this.currentChapter.id);
    this.contentService.checkLoreUnlocks(this.currentChapter.id);
    this.updateProgress();
    const nextChapter = this.contentService.getNextChapter(this.currentChapter.id);
    if (nextChapter) {
      this.contentService.navigateToChapter(nextChapter.id, 0);
    } else {
      this.router.navigate(["/"]);
    }
  }
  /**
   * Check for lore keywords in clicked text
   * 🔥 MEJORADO: Detecta clicks en keywords con data-lore-id
   */
  checkForLoreKeywords(event) {
    if (!this.currentSlide)
      return;
    const target = event.target;
    const loreElement = target.closest("[data-lore-id]");
    if (loreElement) {
      const loreId = loreElement.getAttribute("data-lore-id");
      if (loreId) {
        const loreEntry = this.contentService.getLoreById(loreId);
        if (loreEntry) {
          this.showLoreEntry(loreEntry);
          event.stopPropagation();
          return;
        }
      }
    }
    const slideText = this.getSlideText(this.currentSlide);
    const keywords = this.contentService.findLoreKeywords(slideText);
    if (keywords.length > 0) {
      const loreEntries = this.contentService.getLoreByKeywords(keywords);
      const saveState = this.storageService.getCurrentSaveState();
      const unlockedLore = loreEntries.filter((lore) => saveState?.unlockedLoreIds.includes(lore.id));
      if (unlockedLore.length > 0) {
        this.showLoreEntry(unlockedLore[0]);
      }
    }
  }
  /**
   * Show lore modal
   * 🔥 IMPLEMENTADO COMPLETAMENTE
   */
  showLoreEntry(loreEntry) {
    this.selectedLoreEntry = loreEntry;
    this.showLoreModal = true;
    this.hapticService.trigger("success");
    if (this.storageService.markLoreViewed) {
      this.storageService.markLoreViewed(loreEntry.id);
    }
    if (this.autoAdvanceTimer) {
      clearTimeout(this.autoAdvanceTimer);
    }
  }
  /**
   * Close lore modal
   * 🔥 NUEVO
   */
  closeLoreModal() {
    this.showLoreModal = false;
    this.selectedLoreEntry = null;
    this.setupAutoAdvance();
  }
  /**
   * Setup auto-advance timer
   */
  setupAutoAdvance() {
    const saveState = this.storageService.getCurrentSaveState();
    if (!saveState?.settings.autoAdvance || !this.currentSlide?.duration) {
      return;
    }
    if (this.autoAdvanceTimer) {
      clearTimeout(this.autoAdvanceTimer);
    }
    this.autoAdvanceTimer = setTimeout(() => {
      this.nextSlide();
    }, this.currentSlide.duration);
  }
  /**
   * Update reading progress
   */
  updateProgress() {
    this.readingProgress = this.contentService.getReadingProgress();
  }
  /**
   * Update chapter progress
   */
  updateChapterProgress() {
    if (!this.currentChapter)
      return;
    const totalSlides = this.currentChapter.slides.length;
    this.chapterProgress = Math.round((this.currentSlideIndex + 1) / totalSlides * 100);
  }
  /**
   * Exit reading mode
   */
  onExitReader() {
    this.isReading = false;
    this.exitReader.emit();
  }
  /**
   * Get slide type classes for styling
   * 🔥 MEJORADO: Incluye clases de animación
   */
  getSlideClasses() {
    const classes = ["slide"];
    if (this.currentSlide) {
      classes.push(`slide--${this.currentSlide.type}`);
    }
    if (this.slideAnimationClass) {
      classes.push(this.slideAnimationClass);
    }
    return classes;
  }
  /**
   * Format text with lore keyword highlighting
   * 🔥 MEJORADO: Convierte **palabras en negrita** en keywords clickeables de lore
   */
  formatTextWithLore(text) {
    if (!text)
      return "";
    let formattedText = text;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const boldMatches = text.matchAll(boldRegex);
    for (const match2 of boldMatches) {
      const keyword = match2[1].trim();
      const fullMatch = match2[0];
      const loreEntry = this.contentService.getLoreByKeywords([keyword])[0];
      const saveState = this.storageService.getCurrentSaveState();
      if (loreEntry && saveState?.unlockedLoreIds.includes(loreEntry.id)) {
        formattedText = formattedText.replace(fullMatch, `<strong class="lore-keyword"
                   data-lore-id="${loreEntry.id}"
                   title="Click para ver m\xE1s sobre: ${keyword}">
            ${keyword}
          </strong>`);
      } else {
        formattedText = formattedText.replace(fullMatch, `<strong>${keyword}</strong>`);
      }
    }
    const keywords = this.contentService.findLoreKeywords(text);
    keywords.forEach((keyword) => {
      const saveState = this.storageService.getCurrentSaveState();
      const loreEntry = this.contentService.getLoreByKeywords([keyword])[0];
      if (loreEntry && saveState?.unlockedLoreIds.includes(loreEntry.id)) {
        if (!formattedText.includes(`data-lore-id="${loreEntry.id}"`)) {
          const regex = new RegExp(`\\b${keyword}\\b`, "gi");
          formattedText = formattedText.replace(regex, `<span class="lore-keyword"
                    data-lore-id="${loreEntry.id}"
                    title="Click para ver m\xE1s sobre: ${keyword}">
              ${keyword}
            </span>`);
        }
      }
    });
    return formattedText;
  }
  /**
   * Keyboard navigation
   */
  handleKeyPress(event) {
    if (!this.isReading || this.showLoreModal)
      return;
    switch (event.key) {
      case "ArrowRight":
      case " ":
        this.nextSlide();
        break;
      case "ArrowLeft":
        this.previousSlide();
        break;
      case "Escape":
        this.onExitReader();
        break;
    }
  }
  /**
   * Trigger visual and haptic feedback for touch interactions
   */
  triggerTouchFeedback(zone) {
    const navZones = this.elementRef.nativeElement.querySelector(".nav-zones");
    if (navZones) {
      navZones.classList.add("active-touch");
      setTimeout(() => {
        navZones.classList.remove("active-touch");
      }, 300);
    }
    const zoneElement = this.elementRef.nativeElement.querySelector(`.nav-zone--${zone}`);
    if (zoneElement) {
      zoneElement.style.transform = "scale(0.996)";
      zoneElement.style.transition = "transform 0.1s ease-out";
      setTimeout(() => {
        zoneElement.style.transform = "";
        zoneElement.style.transition = "";
      }, 100);
    }
  }
  /**
   * Enhanced touch interaction with pressure simulation
   */
  onTouchStart(event, zone) {
    event.preventDefault();
    this.triggerTouchFeedback(zone);
    if ("vibrate" in navigator) {
      navigator.vibrate(10);
    }
  }
  onTouchEnd(event, zone) {
    event.preventDefault();
    switch (zone) {
      case "left":
        this.previousSlide();
        break;
      case "right":
        this.nextSlide();
        break;
      case "center":
        if (event.touches && event.touches.length > 0) {
          const touch = event.touches[0];
          const mouseEvent = new MouseEvent("click", {
            clientX: touch.clientX,
            clientY: touch.clientY,
            bubbles: true
          });
          this.checkForLoreKeywords(mouseEvent);
        }
        break;
    }
  }
  static {
    this.\u0275fac = function ReaderComponent_Factory(t) {
      return new (t || _ReaderComponent)(\u0275\u0275directiveInject(ContentService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReaderComponent, selectors: [["app-reader"]], hostBindings: function ReaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ReaderComponent_click_HostBindingHandler($event) {
          return ctx.onTap($event);
        })("keydown", function ReaderComponent_keydown_HostBindingHandler($event) {
          return ctx.handleKeyPress($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, outputs: { exitReader: "exitReader" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "rustbone-reader", 3, "reading", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "rustbone-reader"], ["class", "background-image", 3, "background-image", 4, "ngIf"], [1, "cracked-glass"], [1, "reader-header"], ["title", "Exit Reader", 1, "exit-btn", 3, "click"], [1, "icon-exit"], [1, "chapter-info"], [1, "chapter-title"], [1, "reader-stats"], [1, "slide-counter"], [1, "chapter-progress-bar"], [1, "chapter-progress-fill"], [1, "reader-content", 3, "ngClass"], [1, "nav-zone", "nav-zone--left", 3, "click", "touchstart", "touchend"], ["class", "nav-hint", 4, "ngIf"], [1, "zone-center", 3, "click"], ["class", "slide-container", 4, "ngIf"], [1, "nav-zone", "nav-zone--right", 3, "click", "touchstart", "touchend"], [1, "reader-footer"], [1, "reading-progress"], [1, "progress-label"], [1, "global-progress-bar"], [1, "global-progress-fill"], [1, "progress-percentage"], [3, "close", "loreEntry", "isVisible"], [1, "background-image"], [1, "nav-hint"], [1, "slide-container"], [1, "narrative-content"], [1, "narrative-text", 3, "innerHTML"], ["class", "choices-container", 4, "ngIf"], [1, "choices-container"], ["class", "choice-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "choice-btn", 3, "click"], ["loading", "lazy", 1, "slide-image", 3, "src", "alt"], ["class", "image-overlay", 4, "ngIf"], [1, "image-overlay"], [1, "overlay-text", 3, "innerHTML"], [1, "text-content"], ["class", "text-image", "loading", "lazy", 3, "src", 4, "ngIf"], [1, "text-body", 3, "innerHTML"], ["loading", "lazy", 1, "text-image", 3, "src"], [1, "interactive-content"], [1, "break-icon"], [1, "break-text", 3, "innerHTML"], [1, "continue-btn", 3, "click"], [1, "loading-state"]], template: function ReaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ReaderComponent_div_0_Template, 34, 32, "div", 0)(1, ReaderComponent_div_1_Template, 3, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.currentChapter);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.currentChapter);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, LorePopupComponent], styles: [`@charset "UTF-8";



[_nghost-%COMP%] {
  display: block;
  height: 100vh;
  background: var(--ui-background);
  color: var(--ui-text);
  font-family:
    "Courier New",
    "Monaco",
    monospace;
  overflow: hidden;
  position: relative;
}
.loading-state[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ui-background);
  z-index: 9999;
}
.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 20px;
  color: var(--terminal-green);
  text-shadow: 0 0 10px var(--terminal-green-glow);
  animation: _ngcontent-%COMP%_pulse 2s infinite;
}
.background-image[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.3;
  z-index: 1;
  transition: background-image 0.5s ease-in-out;
}
.background-image[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      180deg,
      rgba(var(--ui-background-rgb), 0.7) 0%,
      rgba(var(--ui-background-rgb), 0.85) 50%,
      rgba(var(--ui-background-rgb), 0.9) 100%);
}
.cracked-glass[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(
      circle at 20% 30%,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px),
    radial-gradient(
      circle at 80% 70%,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px),
    linear-gradient(
      45deg,
      transparent 45%,
      rgba(255, 255, 255, 0.01) 47%,
      rgba(255, 255, 255, 0.01) 53%,
      transparent 55%),
    linear-gradient(
      -45deg,
      transparent 60%,
      rgba(255, 255, 255, 0.015) 62%,
      transparent 64%);
  background-size:
    300px 300px,
    400px 400px,
    150px 150px,
    200px 200px;
  pointer-events: none;
  z-index: 5;
  opacity: 0.4;
}
.rustbone-reader[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: 20% 65% 15%;
  height: 100vh;
  background:
    radial-gradient(
      ellipse at center,
      var(--void-primary) 0%,
      var(--ui-background) 70%),
    linear-gradient(
      135deg,
      var(--ui-background) 0%,
      var(--dark-metal) 100%);
  position: relative;
}
.rustbone-reader[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      rgba(var(--terminal-green), 0.03) 1px,
      transparent 2px,
      transparent 40px);
  pointer-events: none;
  z-index: 1;
}
.rustbone-reader.reading[_ngcontent-%COMP%] {
  cursor: default;
}
.rustbone-reader.reading[_ngcontent-%COMP%]   .reader-header[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background:
    linear-gradient(
      135deg,
      rgba(var(--ui-surface), 0.95) 0%,
      rgba(var(--dark-metal), 0.85) 100%),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      rgba(var(--ui-border), 0.3) 1px,
      transparent 2px,
      transparent 20px);
  transition: all 0.3s ease;
}
.reader-header[_ngcontent-%COMP%] {
  grid-row: 1;
  display: flex;
  align-items: center;
  padding: 16px 28px;
  gap: 18px;
  background:
    linear-gradient(
      135deg,
      var(--ui-surface) 0%,
      var(--dark-metal) 100%),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      var(--ui-border) 1px,
      transparent 2px,
      transparent 20px);
  border-bottom: 2px solid var(--ui-border);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  z-index: 10;
  position: relative;
  transition: all 0.5s ease;
  flex-wrap: wrap;
}
.reader-header[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--terminal-green), 0.05) 20%,
      rgba(var(--rust-orange), 0.03) 80%,
      transparent 100%);
  pointer-events: none;
}
.reader-header[_ngcontent-%COMP%]   .exit-btn[_ngcontent-%COMP%] {
  background: var(--ui-surface);
  border: 2px solid var(--ui-border);
  color: var(--ui-text);
  padding: 6px 12px;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  font-size: 13px;
  position: relative;
  z-index: 1;
}
.reader-header[_ngcontent-%COMP%]   .exit-btn[_ngcontent-%COMP%]   .icon-exit[_ngcontent-%COMP%] {
  font-size: 14px;
  margin-right: 6px;
}
.reader-header[_ngcontent-%COMP%]   .exit-btn[_ngcontent-%COMP%]:hover {
  background: var(--terminal-green-dim);
  border-color: var(--terminal-green);
  color: var(--dark-metal);
  box-shadow: 0 0 10px var(--terminal-green-glow), inset 0 0 5px rgba(var(--terminal-green), 0.2);
  transform: translateX(-2px);
}
.reader-header[_ngcontent-%COMP%]   .chapter-info[_ngcontent-%COMP%] {
  flex: 1;
  margin: 0;
}
.reader-header[_ngcontent-%COMP%]   .chapter-info[_ngcontent-%COMP%]   .chapter-title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 14px;
  color: var(--terminal-green);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 0 10px var(--terminal-green-glow);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.reader-header[_ngcontent-%COMP%]   .reader-stats[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--ui-surface);
  border: 2px solid var(--ui-border);
  padding: 6px 12px;
  position: relative;
}
.reader-header[_ngcontent-%COMP%]   .reader-stats[_ngcontent-%COMP%]   .slide-counter[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--terminal-green);
  font-family: "Courier New", monospace;
  letter-spacing: 1px;
  text-shadow: 0 0 5px var(--terminal-green-glow);
}
.reader-header[_ngcontent-%COMP%]   .reader-stats[_ngcontent-%COMP%]   .slide-counter[_ngcontent-%COMP%]::before {
  content: "SLIDE ";
  color: var(--ui-text-dim);
}
.reader-header[_ngcontent-%COMP%]   .chapter-progress-bar[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--ui-surface);
  border-top: 1px solid var(--ui-border);
  overflow: hidden;
  z-index: 1;
}
.reader-header[_ngcontent-%COMP%]   .chapter-progress-bar[_ngcontent-%COMP%]   .chapter-progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      var(--terminal-green),
      var(--ice-blue));
  transition: width 0.8s ease;
  box-shadow: 0 0 8px var(--terminal-green-glow);
  position: relative;
}
.reader-header[_ngcontent-%COMP%]   .chapter-progress-bar[_ngcontent-%COMP%]   .chapter-progress-fill[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3));
  animation: _ngcontent-%COMP%_shimmer 2s infinite;
}
@keyframes _ngcontent-%COMP%_shimmer {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
.reader-content[_ngcontent-%COMP%] {
  grid-row: 2;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 30% 20%,
      rgba(var(--terminal-green), 0.02) 0%,
      transparent 50%),
    radial-gradient(
      circle at 70% 80%,
      rgba(var(--rust-orange), 0.015) 0%,
      transparent 50%),
    var(--ui-background);
}
.reader-content[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="%23ffffff" opacity="0.02"/><circle cx="25" cy="25" r="0.3" fill="%23ffffff" opacity="0.015"/><circle cx="75" cy="75" r="0.4" fill="%23ffffff" opacity="0.018"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
  pointer-events: none;
  z-index: 1;
}
.reader-content[_ngcontent-%COMP%]   .nav-zone--left[_ngcontent-%COMP%] {
  grid-column: 1;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.4) 100%),
    linear-gradient(
      135deg,
      rgba(var(--ice-blue), 0.05) 0%,
      transparent 50%);
  transition: all 0.3s ease;
}
.reader-content[_ngcontent-%COMP%]   .nav-zone--left[_ngcontent-%COMP%]:hover {
  background:
    radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.35) 100%),
    linear-gradient(
      135deg,
      rgba(var(--terminal-green), 0.08) 0%,
      transparent 40%);
  box-shadow: inset 0 0 30px rgba(var(--terminal-green), 0.2);
}
.reader-content[_ngcontent-%COMP%]   .nav-zone--left[_ngcontent-%COMP%]:active {
  background: rgba(0, 0, 0, 0.6);
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.9);
}
.reader-content[_ngcontent-%COMP%]   .nav-zone--left.disabled[_ngcontent-%COMP%] {
  opacity: 0.3;
  pointer-events: none !important;
  cursor: default;
}
.reader-content[_ngcontent-%COMP%]   .nav-zone--left[_ngcontent-%COMP%]   .nav-hint[_ngcontent-%COMP%] {
  color: var(--terminal-green);
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0 0 10px var(--terminal-green-glow);
  opacity: 0.7;
  animation: _ngcontent-%COMP%_pulse 2s infinite;
}
.reader-content[_ngcontent-%COMP%]   .zone-center[_ngcontent-%COMP%] {
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  padding: 20px;
}
.reader-content[_ngcontent-%COMP%]   .nav-zone--right[_ngcontent-%COMP%] {
  grid-column: 3;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.4) 100%),
    linear-gradient(
      225deg,
      rgba(var(--rust-orange), 0.05) 0%,
      transparent 50%);
  transition: all 0.3s ease;
}
.reader-content[_ngcontent-%COMP%]   .nav-zone--right[_ngcontent-%COMP%]:hover {
  background:
    radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.35) 100%),
    linear-gradient(
      225deg,
      rgba(var(--terminal-green), 0.08) 0%,
      transparent 40%);
  box-shadow: inset 0 0 30px rgba(var(--terminal-green), 0.2);
}
.reader-content[_ngcontent-%COMP%]   .nav-zone--right[_ngcontent-%COMP%]:active {
  background: rgba(0, 0, 0, 0.6);
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.9);
}
.reader-content[_ngcontent-%COMP%]   .nav-zone--right.disabled[_ngcontent-%COMP%] {
  opacity: 0.3;
  pointer-events: none !important;
  cursor: default;
}
.reader-content[_ngcontent-%COMP%]   .nav-zone--right[_ngcontent-%COMP%]   .nav-hint[_ngcontent-%COMP%] {
  color: var(--terminal-green);
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0 0 10px var(--terminal-green-glow);
  opacity: 0.7;
  animation: _ngcontent-%COMP%_pulse 2s infinite;
}
@keyframes _ngcontent-%COMP%_pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}
.slide-container[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.slide-fade-out[_ngcontent-%COMP%] {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
  pointer-events: none;
}
.slide-fade-in[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_slideEnter 0.3s ease-out forwards;
}
@keyframes _ngcontent-%COMP%_slideEnter {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.narrative-content[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
}
.narrative-text[_ngcontent-%COMP%] {
  font-size: 19px;
  line-height: 1.75;
  font-family:
    "Courier New",
    "Monaco",
    monospace;
  text-align: left;
  color: var(--ui-text);
  letter-spacing: 0.5px;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
}
.narrative-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: var(--terminal-green);
  text-shadow: 0 0 5px var(--terminal-green-glow);
  font-weight: bold;
}
.narrative-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-bottom: 1.4em;
}
.slide--full_image[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.2) brightness(0.8) sepia(10%);
  border: 4px solid var(--ui-border);
}
.slide--full_image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0;
  left: 12%;
  right: 12%;
  width: 76%;
  background:
    linear-gradient(
      transparent,
      var(--ui-background) 20%,
      var(--ui-background) 100%),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      var(--ui-border) 1px,
      transparent 2px,
      transparent 30px);
  padding: 40px 32px 24px;
  border-top: 2px solid var(--ui-border);
}
.slide--full_image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]   .overlay-text[_ngcontent-%COMP%] {
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
  text-align: center;
  font-family: "Courier New", monospace;
  color: var(--ui-text);
  text-shadow: 0 0 10px rgba(var(--terminal-green), 0.3);
}
.slide--text_block[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {
  width: 76%;
  max-width: 900px;
  margin: 0 auto;
  margin-left: 12%;
  margin-right: 12%;
  padding: 40px;
  background:
    linear-gradient(
      135deg,
      var(--ui-surface) 0%,
      var(--dark-metal) 100%),
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      var(--ui-border) 1px,
      transparent 2px,
      transparent 40px);
  border: 2px solid var(--ui-border);
}
.slide--text_block[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      45deg,
      transparent 45%,
      rgba(var(--terminal-green), 0.02) 47%,
      rgba(var(--terminal-green), 0.02) 53%,
      transparent 55%),
    linear-gradient(
      -45deg,
      transparent 60%,
      rgba(var(--rust-orange), 0.01) 62%,
      transparent 64%);
  background-size: 100px 100px, 80px 80px;
  opacity: 0.5;
  pointer-events: none;
}
.slide--text_block[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .text-image[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0 auto 24px;
  border: 3px solid var(--terminal-green);
  filter: contrast(1.1) brightness(0.9) sepia(15%);
  box-shadow: 0 0 20px var(--terminal-green-glow), inset 0 0 20px rgba(var(--terminal-green), 0.1);
}
.slide--text_block[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .text-body[_ngcontent-%COMP%] {
  font-size: 20px;
  line-height: 1.8;
  font-family:
    "Courier New",
    "Monaco",
    monospace;
  text-align: left;
  color: var(--ui-text);
  position: relative;
  z-index: 1;
  letter-spacing: 0.5px;
}
.slide--text_block[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .text-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: var(--terminal-green);
  text-shadow: 0 0 5px var(--terminal-green-glow);
  font-weight: bold;
}
.slide--text_block[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .text-body[_ngcontent-%COMP%]::after {
  content: "\\2588";
  color: var(--terminal-green);
  animation: _ngcontent-%COMP%_blink 1s infinite;
  margin-left: 2px;
}
@keyframes _ngcontent-%COMP%_blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
.slide--interactive_break[_ngcontent-%COMP%]   .interactive-content[_ngcontent-%COMP%] {
  text-align: center;
  max-width: 700px;
  padding: 40px;
  background:
    linear-gradient(
      135deg,
      var(--void-primary) 0%,
      var(--ui-surface) 50%,
      var(--dark-metal) 100%),
    repeating-linear-gradient(
      45deg,
      transparent 0px,
      rgba(var(--rust-orange), 0.05) 1px,
      transparent 2px,
      transparent 30px);
  border: 3px solid var(--rust-orange);
  position: relative;
}
.slide--interactive_break[_ngcontent-%COMP%]   .interactive-content[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(
      circle at 50% 50%,
      rgba(var(--rust-orange), 0.1) 0%,
      transparent 70%);
  pointer-events: none;
}
.slide--interactive_break[_ngcontent-%COMP%]   .interactive-content[_ngcontent-%COMP%]   .break-icon[_ngcontent-%COMP%] {
  font-size: 48px;
  color: var(--rust-orange);
  margin-bottom: 20px;
  animation: _ngcontent-%COMP%_pulse 2s infinite ease-in-out;
  text-shadow: 0 0 20px var(--rust-orange-glow);
  position: relative;
  z-index: 1;
}
.slide--interactive_break[_ngcontent-%COMP%]   .interactive-content[_ngcontent-%COMP%]   .break-icon[_ngcontent-%COMP%]::before {
  content: "\\26a0";
}
.slide--interactive_break[_ngcontent-%COMP%]   .interactive-content[_ngcontent-%COMP%]   .break-text[_ngcontent-%COMP%] {
  font-size: 18px;
  margin-bottom: 24px;
  color: var(--ui-text);
  font-family: "Courier New", monospace;
  line-height: 1.6;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
}
.slide--interactive_break[_ngcontent-%COMP%]   .interactive-content[_ngcontent-%COMP%]   .break-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: var(--rust-orange);
  text-shadow: 0 0 5px var(--rust-orange-glow);
}
.slide--interactive_break[_ngcontent-%COMP%]   .interactive-content[_ngcontent-%COMP%]   .continue-btn[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--rust-orange) 0%,
      var(--void-accent) 100%);
  border: 2px solid var(--rust-orange);
  color: var(--dark-metal);
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Courier New", monospace;
  position: relative;
  z-index: 1;
}
.slide--interactive_break[_ngcontent-%COMP%]   .interactive-content[_ngcontent-%COMP%]   .continue-btn[_ngcontent-%COMP%]:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px var(--rust-orange-glow), inset 0 0 10px rgba(255, 255, 255, 0.1);
}
.slide--interactive_break[_ngcontent-%COMP%]   .interactive-content[_ngcontent-%COMP%]   .continue-btn[_ngcontent-%COMP%]:active {
  transform: scale(0.98);
}
@keyframes _ngcontent-%COMP%_pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}
.choices-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
  padding: 16px;
  background:
    linear-gradient(
      135deg,
      rgba(var(--ui-surface-rgb), 0.9) 0%,
      rgba(var(--dark-metal-rgb), 0.8) 100%),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      rgba(var(--ui-border-rgb), 0.3) 1px,
      transparent 2px,
      transparent 40px);
  border: 2px solid var(--rust-orange);
  border-radius: 8px;
  position: relative;
  z-index: 100;
  animation: _ngcontent-%COMP%_choice-appear 0.5s ease-out;
}
.choices-container[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      180deg,
      transparent 0%,
      rgba(var(--rust-orange-rgb), 0.1) 50%,
      transparent 100%);
  animation: _ngcontent-%COMP%_scan-vertical 3s infinite linear;
  pointer-events: none;
  z-index: -1;
}
.choices-container[_ngcontent-%COMP%]::after {
  content: "\\26a1  DECISI\\d3N REQUERIDA";
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--ui-surface);
  color: var(--rust-orange);
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding: 3px 12px;
  border: 2px solid var(--rust-orange);
  border-radius: 4px;
  text-shadow: 0 0 8px var(--rust-orange-glow);
  animation: _ngcontent-%COMP%_glow-pulse 2s infinite;
}
.choice-btn[_ngcontent-%COMP%] {
  padding: 12px 20px;
  background:
    linear-gradient(
      135deg,
      var(--ui-surface) 0%,
      var(--dark-metal) 100%),
    repeating-linear-gradient(
      45deg,
      transparent 0px,
      rgba(var(--terminal-green-rgb), 0.05) 1px,
      transparent 2px,
      transparent 20px);
  border: 2px solid var(--terminal-green);
  color: var(--ui-text);
  font-size: 14px;
  font-family: "Courier New", monospace;
  font-weight: 600;
  text-align: left;
  cursor: pointer !important;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(var(--terminal-green-rgb), 0.1);
  z-index: 101;
  pointer-events: all;
  padding-left: 36px;
  animation: _ngcontent-%COMP%_choice-ready 2s ease-in-out infinite;
}
.choice-btn[_ngcontent-%COMP%]::before {
  content: "\\25b6";
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--terminal-green);
  font-size: 12px;
  transition: all 0.3s ease;
  opacity: 0.6;
}
.choice-btn[_ngcontent-%COMP%]:hover {
  border-color: var(--rust-orange);
  color: var(--rust-orange);
  background:
    linear-gradient(
      135deg,
      var(--dark-metal) 0%,
      var(--ui-surface) 100%),
    repeating-linear-gradient(
      45deg,
      transparent 0px,
      rgba(var(--rust-orange-rgb), 0.1) 1px,
      transparent 2px,
      transparent 20px);
  transform: translateX(6px) scale(1.01);
  box-shadow: 0 6px 20px rgba(var(--rust-orange-rgb), 0.4), inset 0 0 30px rgba(var(--rust-orange-rgb), 0.2);
}
.choice-btn[_ngcontent-%COMP%]:hover::before {
  left: 20px;
  color: var(--rust-orange);
  opacity: 1;
  animation: _ngcontent-%COMP%_arrow-bounce 0.6s infinite;
}
.choice-btn[_ngcontent-%COMP%]:hover::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      var(--rust-orange) 50%,
      transparent 100%);
  animation: _ngcontent-%COMP%_scan-horizontal 1s infinite;
  box-shadow: 0 0 10px var(--rust-orange-glow);
}
.choice-btn[_ngcontent-%COMP%]:active {
  transform: translateX(4px) scale(0.98);
  box-shadow: 0 2px 8px rgba(var(--rust-orange-rgb), 0.6), inset 0 0 40px rgba(var(--rust-orange-rgb), 0.3);
}
@keyframes _ngcontent-%COMP%_choice-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes _ngcontent-%COMP%_choice-ready {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(var(--terminal-green-rgb), 0.1);
  }
  50% {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 0 30px rgba(var(--terminal-green-rgb), 0.2);
  }
}
@keyframes _ngcontent-%COMP%_arrow-bounce {
  0%, 100% {
    transform: translateY(-50%) translateX(0);
  }
  50% {
    transform: translateY(-50%) translateX(4px);
  }
}
@keyframes _ngcontent-%COMP%_scan-horizontal {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes _ngcontent-%COMP%_scan-vertical {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
@keyframes _ngcontent-%COMP%_glow-pulse {
  0%, 100% {
    box-shadow: 0 0 8px var(--rust-orange-glow);
  }
  50% {
    box-shadow: 0 0 16px var(--rust-orange-glow);
  }
}
.nav-zones[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  pointer-events: none;
  z-index: 5;
}
.nav-zones.disabled[_ngcontent-%COMP%] {
  opacity: 0.1;
  pointer-events: none !important;
}
.nav-zones.disabled[_ngcontent-%COMP%]   .nav-zone[_ngcontent-%COMP%] {
  pointer-events: none !important;
  cursor: default !important;
}
.nav-zones[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      to right,
      transparent 12%,
      rgba(var(--terminal-green), 0.1) 12.5%,
      rgba(var(--terminal-green), 0.1) 13%,
      transparent 13.5%),
    linear-gradient(
      to left,
      transparent 12%,
      rgba(var(--rust-orange), 0.1) 12.5%,
      rgba(var(--rust-orange), 0.1) 13%,
      transparent 13.5%),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      rgba(var(--ice-blue), 0.02) 2px,
      transparent 4px,
      transparent 60px);
  opacity: 0.3;
  pointer-events: none;
  z-index: 1;
}
.nav-zone[_ngcontent-%COMP%] {
  height: 100%;
  pointer-events: all;
  position: relative;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}
.nav-zone[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  background:
    linear-gradient(
      135deg,
      rgba(var(--terminal-green), 0.05) 0%,
      transparent 50%),
    radial-gradient(
      circle at center,
      transparent 70%,
      rgba(var(--terminal-green), 0.02) 100%);
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 1;
}
.nav-zone[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background:
    radial-gradient(
      circle,
      rgba(var(--terminal-green), 0.3) 0%,
      rgba(var(--terminal-green), 0.1) 30%,
      transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: none;
  z-index: 3;
}
.nav-zone[_ngcontent-%COMP%]:hover::before {
  background:
    linear-gradient(
      135deg,
      rgba(var(--terminal-green), 0.08) 0%,
      transparent 40%),
    radial-gradient(
      circle at center,
      transparent 60%,
      rgba(var(--terminal-green), 0.05) 100%);
  border-color: rgba(var(--terminal-green), 0.3);
  box-shadow: inset 0 0 20px rgba(var(--terminal-green), 0.1), 0 0 15px rgba(var(--terminal-green), 0.2);
}
.nav-zone[_ngcontent-%COMP%]:active {
  transform: scale(0.998);
}
.nav-zone[_ngcontent-%COMP%]:active::before {
  background: rgba(0, 0, 0, 0.6);
  border-color: rgba(var(--terminal-green), 0.7);
  box-shadow:
    inset 0 0 40px rgba(0, 0, 0, 0.8),
    inset 0 0 20px rgba(var(--terminal-green), 0.3),
    0 0 25px rgba(var(--terminal-green), 0.5);
}
.nav-zone[_ngcontent-%COMP%]:active::after {
  width: 200px;
  height: 200px;
  opacity: 1;
}
.nav-zone--left[_ngcontent-%COMP%] {
  width: 12%;
  cursor: pointer;
  background:
    radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.35) 60%,
      rgba(0, 0, 0, 0.45) 100%),
    linear-gradient(
      to right,
      rgba(var(--ice-blue), 0.1) 0%,
      rgba(var(--ice-blue), 0.05) 100%),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      rgba(var(--ice-blue), 0.1) 2px,
      transparent 4px,
      transparent 20px);
}
.nav-zone--left[_ngcontent-%COMP%]::before {
  border-right: 2px solid rgba(var(--ice-blue), 0.4);
  background:
    linear-gradient(
      to right,
      rgba(var(--ice-blue), 0.08) 0%,
      transparent 80%),
    radial-gradient(
      ellipse at left center,
      rgba(var(--ice-blue), 0.1) 0%,
      transparent 70%);
  box-shadow: inset 2px 0 20px rgba(var(--ice-blue), 0.1), 2px 0 15px rgba(var(--ice-blue), 0.15);
}
.nav-zone--left[_ngcontent-%COMP%]::after {
  content: "\\2039";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  color: var(--ice-blue);
  opacity: 0.8;
  transition: all 0.3s ease;
  pointer-events: none;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(var(--ice-blue), 0.5);
  z-index: 4;
}
.nav-zone--left[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(var(--ice-blue), 0.25) 50%,
      rgba(0, 0, 0, 0.6) 100%);
}
.nav-zone--left[_ngcontent-%COMP%]:hover::before {
  border-right-color: rgba(var(--ice-blue), 0.7);
  box-shadow: inset 2px 0 25px rgba(var(--ice-blue), 0.2), 2px 0 20px rgba(var(--ice-blue), 0.3);
}
.nav-zone--left[_ngcontent-%COMP%]:hover::after {
  opacity: 1;
  color: var(--ice-blue);
  text-shadow: 0 0 15px rgba(var(--ice-blue), 0.8);
}
.nav-zone--left[_ngcontent-%COMP%]:active {
  background: rgba(0, 0, 0, 0.9);
}
.nav-zone--left[_ngcontent-%COMP%]:active::before {
  border-right-color: var(--ice-blue);
  background: rgba(var(--ice-blue), 0.2);
  box-shadow:
    inset 5px 0 40px rgba(0, 0, 0, 0.9),
    inset 0 0 30px rgba(var(--ice-blue), 0.3),
    5px 0 30px rgba(var(--ice-blue), 0.6);
}
.nav-zone--left[_ngcontent-%COMP%]:active::after {
  opacity: 1;
  transform: scale(1);
  color: var(--ice-blue);
  text-shadow: 0 0 20px var(--ice-blue);
}
.nav-zone--center[_ngcontent-%COMP%] {
  width: 76%;
  cursor: ew-resize;
  background: transparent;
}
.nav-zone--center[_ngcontent-%COMP%]::before {
  border: none;
  background: transparent;
  transition: all 0.2s ease;
}
.nav-zone--center[_ngcontent-%COMP%]:hover::before {
  background:
    radial-gradient(
      circle at center,
      rgba(var(--terminal-green), 0.02) 0%,
      transparent 70%);
}
.nav-zone--center[_ngcontent-%COMP%]:active::before {
  background:
    radial-gradient(
      circle at center,
      rgba(var(--terminal-green), 0.1) 0%,
      rgba(0, 0, 0, 0.3) 20%,
      transparent 60%);
}
.nav-zone--center[_ngcontent-%COMP%]::after {
  display: none;
}
.nav-zone--right[_ngcontent-%COMP%] {
  width: 12%;
  cursor: pointer;
  background:
    linear-gradient(
      to left,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.35) 60%,
      rgba(0, 0, 0, 0.45) 100%),
    linear-gradient(
      to left,
      rgba(var(--rust-orange), 0.1) 0%,
      rgba(var(--rust-orange), 0.05) 100%),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      rgba(var(--rust-orange), 0.1) 2px,
      transparent 4px,
      transparent 20px);
}
.nav-zone--right[_ngcontent-%COMP%]::before {
  border-left: 2px solid rgba(var(--rust-orange), 0.4);
  background:
    linear-gradient(
      to left,
      rgba(var(--rust-orange), 0.08) 0%,
      transparent 80%),
    radial-gradient(
      ellipse at right center,
      rgba(var(--rust-orange), 0.1) 0%,
      transparent 70%);
  box-shadow: inset -2px 0 20px rgba(var(--rust-orange), 0.1), -2px 0 15px rgba(var(--rust-orange), 0.15);
}
.nav-zone--right[_ngcontent-%COMP%]::after {
  content: "\\203a";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  color: var(--rust-orange);
  opacity: 0.8;
  transition: all 0.3s ease;
  pointer-events: none;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(var(--rust-orange), 0.5);
  z-index: 4;
}
.nav-zone--right[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      to left,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(var(--rust-orange), 0.25) 50%,
      rgba(0, 0, 0, 0.6) 100%);
}
.nav-zone--right[_ngcontent-%COMP%]:hover::before {
  border-left-color: rgba(var(--rust-orange), 0.7);
  box-shadow: inset -2px 0 25px rgba(var(--rust-orange), 0.2), -2px 0 20px rgba(var(--rust-orange), 0.3);
}
.nav-zone--right[_ngcontent-%COMP%]:hover::after {
  opacity: 1;
  color: var(--rust-orange);
  text-shadow: 0 0 15px rgba(var(--rust-orange), 0.8);
}
.nav-zone--right[_ngcontent-%COMP%]:active {
  background: rgba(0, 0, 0, 0.9);
}
.nav-zone--right[_ngcontent-%COMP%]:active::before {
  border-left-color: var(--rust-orange);
  background: rgba(var(--rust-orange), 0.2);
  box-shadow:
    inset -5px 0 40px rgba(0, 0, 0, 0.9),
    inset 0 0 30px rgba(var(--rust-orange), 0.3),
    -5px 0 30px rgba(var(--rust-orange), 0.6);
}
.nav-zone--right[_ngcontent-%COMP%]:active::after {
  opacity: 1;
  transform: scale(1);
  color: var(--rust-orange);
  text-shadow: 0 0 20px var(--rust-orange);
}
.nav-hint[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  pointer-events: none;
  z-index: 100;
  opacity: 0;
  animation: _ngcontent-%COMP%_hintFadeIn 1s ease-in-out 0.5s forwards, _ngcontent-%COMP%_hintPulse 2s ease-in-out 1.5s infinite;
}
.nav-hint[_ngcontent-%COMP%]   .hint-icon[_ngcontent-%COMP%] {
  font-size: 32px;
  color: var(--rust-orange);
  text-shadow: 0 0 10px var(--rust-orange-glow), 0 0 20px var(--rust-orange-glow);
  filter: drop-shadow(0 0 15px var(--rust-orange-glow));
}
.nav-hint[_ngcontent-%COMP%]   .hint-label[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 2px;
  color: var(--ui-text);
  background: rgba(var(--ui-surface-rgb), 0.9);
  padding: 4px 12px;
  border: 1px solid var(--rust-orange);
  border-radius: 3px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 10px var(--rust-orange-glow), inset 0 0 10px rgba(var(--rust-orange-rgb), 0.2);
}
.nav-hint--center[_ngcontent-%COMP%]   .hint-icon[_ngcontent-%COMP%] {
  color: var(--terminal-green);
  text-shadow: 0 0 10px var(--terminal-green-glow), 0 0 20px var(--terminal-green-glow);
  filter: drop-shadow(0 0 15px var(--terminal-green-glow));
}
.nav-hint--center[_ngcontent-%COMP%]   .hint-label[_ngcontent-%COMP%] {
  border-color: var(--terminal-green);
  box-shadow: 0 0 10px var(--terminal-green-glow), inset 0 0 10px rgba(var(--terminal-green-rgb), 0.2);
}
.nav-zone.show-hint[_ngcontent-%COMP%]:hover   .nav-hint[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_hintPulse 1s ease-in-out infinite;
}
@keyframes _ngcontent-%COMP%_hintFadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes _ngcontent-%COMP%_hintPulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 0.85;
  }
}
.nav-zones.active-touch[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      rgba(var(--terminal-green), 0.01) 1px,
      transparent 2px,
      transparent 100px);
  opacity: 1;
  animation: _ngcontent-%COMP%_touch-feedback 0.3s ease-out;
  pointer-events: none;
}
@keyframes _ngcontent-%COMP%_touch-feedback {
  0% {
    opacity: 0;
    transform: scale(1.02);
  }
  50% {
    opacity: 1;
    transform: scale(0.998);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}
.reader-footer[_ngcontent-%COMP%] {
  grid-row: 3;
  display: flex;
  align-items: center;
  padding: 12px 28px;
  background: rgba(18, 18, 18, 0.95);
  border-top: 2px solid var(--ui-border);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 10;
}
.reader-footer[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--rust-orange), 0.03) 50%,
      transparent 100%);
  pointer-events: none;
}
.reader-footer[_ngcontent-%COMP%]   .reading-progress[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.reader-footer[_ngcontent-%COMP%]   .reading-progress[_ngcontent-%COMP%]   .progress-label[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--ui-text-dim);
  min-width: 100px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.reader-footer[_ngcontent-%COMP%]   .reading-progress[_ngcontent-%COMP%]   .global-progress-bar[_ngcontent-%COMP%] {
  flex: 1;
  height: 4px;
  background: var(--ui-surface);
  border: 1px solid var(--ui-border);
  overflow: hidden;
  position: relative;
}
.reader-footer[_ngcontent-%COMP%]   .reading-progress[_ngcontent-%COMP%]   .global-progress-bar[_ngcontent-%COMP%]   .global-progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      var(--rust-orange),
      var(--magma-red));
  transition: width 0.8s ease;
  box-shadow: 0 0 8px rgba(var(--rust-orange), 0.5);
  position: relative;
}
.reader-footer[_ngcontent-%COMP%]   .reading-progress[_ngcontent-%COMP%]   .global-progress-bar[_ngcontent-%COMP%]   .global-progress-fill[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 15px;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3));
  animation: _ngcontent-%COMP%_shimmer 2s infinite;
}
.reader-footer[_ngcontent-%COMP%]   .reading-progress[_ngcontent-%COMP%]   .progress-percentage[_ngcontent-%COMP%] {
  font-size: 11px;
  color: var(--rust-orange);
  min-width: 40px;
  text-align: right;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(var(--rust-orange), 0.5);
}
.lore-modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;
}
.lore-modal[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #1a1a1a,
      #2a2a2a);
  border: 2px solid #FF4500;
  border-radius: 12px;
  width: 90%;
  max-width: 700px;
  max-height: 80vh;
  overflow: hidden;
  animation: _ngcontent-%COMP%_slideUp 0.3s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}
.lore-modal[_ngcontent-%COMP%]   .lore-header[_ngcontent-%COMP%] {
  padding: 1.5rem;
  background: rgba(255, 69, 0, 0.1);
  border-bottom: 1px solid #FF4500;
  display: flex;
  align-items: center;
}
.lore-modal[_ngcontent-%COMP%]   .lore-header[_ngcontent-%COMP%]   .lore-title[_ngcontent-%COMP%] {
  flex: 1;
  margin: 0;
  color: #FF4500;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.lore-modal[_ngcontent-%COMP%]   .lore-header[_ngcontent-%COMP%]   .lore-category[_ngcontent-%COMP%] {
  background: #FF4500;
  color: #121212;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 1rem;
}
.lore-modal[_ngcontent-%COMP%]   .lore-header[_ngcontent-%COMP%]   .lore-close[_ngcontent-%COMP%] {
  background: none;
  border: 2px solid #FF4500;
  color: #FF4500;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.lore-modal[_ngcontent-%COMP%]   .lore-header[_ngcontent-%COMP%]   .lore-close[_ngcontent-%COMP%]:hover {
  background: #FF4500;
  color: #121212;
  transform: rotate(90deg);
}
.lore-modal[_ngcontent-%COMP%]   .lore-content[_ngcontent-%COMP%] {
  padding: 1.5rem;
  overflow-y: auto;
  max-height: 60vh;
}
.lore-modal[_ngcontent-%COMP%]   .lore-content[_ngcontent-%COMP%]   .lore-image[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #333;
}
.lore-modal[_ngcontent-%COMP%]   .lore-content[_ngcontent-%COMP%]   .lore-text[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #e0e0e0;
}
.lore-modal[_ngcontent-%COMP%]   .lore-content[_ngcontent-%COMP%]   .lore-blueprint[_ngcontent-%COMP%] {
  width: 100%;
  height: auto;
  border: 2px solid #FF4500;
  border-radius: 8px;
  background: #0a0a0a;
  padding: 0.5rem;
  filter: contrast(1.2) brightness(1.1);
}
.lore-keyword[_ngcontent-%COMP%] {
  color: var(--rust-orange);
  cursor: pointer;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-decoration-color: var(--rust-orange);
  text-decoration-thickness: 2px;
  transition: all 0.2s ease;
  position: relative;
  font-weight: 600;
}
.lore-keyword[_ngcontent-%COMP%]:hover {
  color: var(--magma-red);
  text-decoration-color: var(--magma-red);
  text-shadow: 0 0 8px rgba(var(--rust-orange-rgb), 0.6);
  transform: scale(1.05);
}
.lore-keyword[_ngcontent-%COMP%]:hover::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -4px;
  right: -4px;
  bottom: -2px;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--rust-orange-rgb), 0.15) 50%,
      transparent 100%);
  border-radius: 3px;
  z-index: -1;
  animation: _ngcontent-%COMP%_scanline 1.5s infinite;
}
.lore-keyword[data-lore-id][_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_subtle-pulse 2s ease-in-out infinite;
}
@keyframes _ngcontent-%COMP%_subtle-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}
@keyframes _ngcontent-%COMP%_scanline {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
.no-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.no-content[_ngcontent-%COMP%]   .no-content-message[_ngcontent-%COMP%] {
  text-align: center;
  max-width: 400px;
}
.no-content[_ngcontent-%COMP%]   .no-content-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  color: #FF4500;
  margin-bottom: 1rem;
  font-size: 2rem;
}
.no-content[_ngcontent-%COMP%]   .no-content-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
  color: #888;
}
.no-content[_ngcontent-%COMP%]   .no-content-message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      45deg,
      #FF4500,
      #FF6A00);
  border: none;
  color: #121212;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.no-content[_ngcontent-%COMP%]   .no-content-message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  transform: scale(1.05);
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes _ngcontent-%COMP%_slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes _ngcontent-%COMP%_pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
@media (max-width: 768px) {
  .reader-header[_ngcontent-%COMP%] {
    padding: 8px 16px;
  }
  .reader-header[_ngcontent-%COMP%]   .exit-btn[_ngcontent-%COMP%] {
    padding: 4px 8px;
    font-size: 12px;
  }
  .reader-header[_ngcontent-%COMP%]   .exit-btn[_ngcontent-%COMP%]   .icon-exit[_ngcontent-%COMP%] {
    font-size: 12px;
    margin-right: 4px;
  }
  .reader-header[_ngcontent-%COMP%]   .chapter-info[_ngcontent-%COMP%] {
    margin: 0;
  }
  .reader-header[_ngcontent-%COMP%]   .chapter-info[_ngcontent-%COMP%]   .chapter-title[_ngcontent-%COMP%] {
    font-size: 12px;
    letter-spacing: 1px;
  }
  .reader-header[_ngcontent-%COMP%]   .reader-stats[_ngcontent-%COMP%] {
    padding: 4px 8px;
  }
  .reader-header[_ngcontent-%COMP%]   .reader-stats[_ngcontent-%COMP%]   .slide-counter[_ngcontent-%COMP%] {
    font-size: 11px;
  }
  .reader-header[_ngcontent-%COMP%]   .chapter-progress-bar[_ngcontent-%COMP%] {
    height: 2px;
  }
  .reader-footer[_ngcontent-%COMP%] {
    padding: 6px 16px;
  }
  .reader-footer[_ngcontent-%COMP%]   .reading-progress[_ngcontent-%COMP%] {
    gap: 8px;
  }
  .reader-footer[_ngcontent-%COMP%]   .reading-progress[_ngcontent-%COMP%]   .progress-label[_ngcontent-%COMP%] {
    font-size: 10px;
    min-width: 80px;
  }
  .reader-footer[_ngcontent-%COMP%]   .reading-progress[_ngcontent-%COMP%]   .global-progress-bar[_ngcontent-%COMP%] {
    height: 3px;
  }
  .reader-footer[_ngcontent-%COMP%]   .reading-progress[_ngcontent-%COMP%]   .progress-percentage[_ngcontent-%COMP%] {
    font-size: 10px;
    min-width: 35px;
  }
  .slide-container[_ngcontent-%COMP%] {
    padding: 16px;
  }
  .narrative-content[_ngcontent-%COMP%] {
    padding: 12px;
  }
  .narrative-text[_ngcontent-%COMP%] {
    font-size: 16px;
    line-height: 1.6;
  }
  .narrative-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-bottom: 1em;
  }
  .choices-container[_ngcontent-%COMP%] {
    margin-top: 16px;
    padding: 12px;
    gap: 10px;
  }
  .choice-btn[_ngcontent-%COMP%] {
    padding: 10px 16px;
    font-size: 13px;
    padding-left: 32px;
  }
  .choice-btn[_ngcontent-%COMP%]::before {
    left: 10px;
    font-size: 11px;
  }
  .slide--text_block[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .slide--text_block[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .text-body[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
  .lore-modal[_ngcontent-%COMP%] {
    width: 95%;
  }
  .lore-modal[_ngcontent-%COMP%]   .lore-header[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .lore-modal[_ngcontent-%COMP%]   .lore-header[_ngcontent-%COMP%]   .lore-title[_ngcontent-%COMP%] {
    font-size: 1.2rem;
  }
}`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReaderComponent, { className: "ReaderComponent", filePath: "src\\app\\components\\reader\\reader.component.ts", lineNumber: 23 });
})();

export {
  bootstrapApplication,
  provideClientHydration,
  provideRouter,
  RouterModule,
  HapticService,
  ReaderComponent
};
