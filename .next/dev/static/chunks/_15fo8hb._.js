(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/Nav.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "burger": "Nav-module__AjPwpW__burger",
  "burgerOpen": "Nav-module__AjPwpW__burgerOpen",
  "cap": "Nav-module__AjPwpW__cap",
  "links": "Nav-module__AjPwpW__links",
  "logo": "Nav-module__AjPwpW__logo",
  "on": "Nav-module__AjPwpW__on",
  "right": "Nav-module__AjPwpW__right",
  "roll": "Nav-module__AjPwpW__roll",
  "scrim": "Nav-module__AjPwpW__scrim",
  "scrimOn": "Nav-module__AjPwpW__scrimOn",
  "scrolled": "Nav-module__AjPwpW__scrolled",
  "sheet": "Nav-module__AjPwpW__sheet",
  "sheetOn": "Nav-module__AjPwpW__sheetOn",
  "sheetOpen": "Nav-module__AjPwpW__sheetOpen",
  "wrap": "Nav-module__AjPwpW__wrap",
});
}),
"[project]/components/layout/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/layout/Nav.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* `#home` resolves to the very top of the document (see lib/lenis.ts), so
   Home always returns to the true beginning of the portfolio. */ const LINKS = [
    {
        key: "nav.home",
        href: "#home",
        watch: null
    },
    {
        key: "nav.about",
        href: "#about",
        watch: "about"
    },
    {
        key: "nav.work",
        href: "#work",
        watch: "work"
    },
    {
        key: "nav.contact",
        href: "#contact",
        watch: "contact"
    }
];
function Nav() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* mobile drawer — the desktop pill can't hold four links plus the toggle
     at phone widths, so below 900px navigation lives behind a menu button
     rather than being hidden entirely (which is what it was doing) */ const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* close on Escape, and lock the page behind the open drawer */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            if (!menuOpen) return;
            const onKey = {
                "Nav.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") setMenuOpen(false);
                }
            }["Nav.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "Nav.useEffect": ()=>{
                    window.removeEventListener("keydown", onKey);
                    document.body.style.overflow = prev;
                }
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], [
        menuOpen
    ]);
    /* never leave the drawer open behind a resize to desktop */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const mq = window.matchMedia("(min-width: 901px)");
            const close = {
                "Nav.useEffect.close": ()=>mq.matches && setMenuOpen(false)
            }["Nav.useEffect.close"];
            mq.addEventListener("change", close);
            return ({
                "Nav.useEffect": ()=>mq.removeEventListener("change", close)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const nav = ref.current;
            if (!nav) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "Nav.useEffect.ctx": ()=>{
                    /* The header is PERSISTENT: it never hides. It only condenses slightly
         once the page has been scrolled, which keeps it feeling part of the
         page rather than a floating panel. */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        start: "top top-=40",
                        onUpdate: {
                            "Nav.useEffect.ctx": (self)=>{
                                nav.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrolled, self.scroll() > 40);
                            }
                        }["Nav.useEffect.ctx"],
                        onLeaveBack: {
                            "Nav.useEffect.ctx": ()=>nav.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrolled)
                        }["Nav.useEffect.ctx"]
                    });
                    /* scroll-spy: the nav reflects where you actually are, and falls back
         to Home whenever you are near the top of the document */ const spies = LINKS.filter({
                        "Nav.useEffect.ctx.spies": (l)=>l.watch
                    }["Nav.useEffect.ctx.spies"]).map({
                        "Nav.useEffect.ctx.spies": (l)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: `#${l.watch}`,
                                start: "top 55%",
                                end: "bottom 45%",
                                onToggle: {
                                    "Nav.useEffect.ctx.spies": (self)=>{
                                        if (self.isActive) setActive(l.watch);
                                    }
                                }["Nav.useEffect.ctx.spies"]
                            })
                    }["Nav.useEffect.ctx.spies"]);
                    const top = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        start: 0,
                        end: {
                            "Nav.useEffect.ctx.top": ()=>window.innerHeight * 1.2
                        }["Nav.useEffect.ctx.top"],
                        onToggle: {
                            "Nav.useEffect.ctx.top": (self)=>{
                                if (self.isActive) setActive(null);
                            }
                        }["Nav.useEffect.ctx.top"]
                    });
                    return ({
                        "Nav.useEffect.ctx": ()=>{
                            spies.forEach({
                                "Nav.useEffect.ctx": (s)=>s.kill()
                            }["Nav.useEffect.ctx"]);
                            top.kill();
                        }
                    })["Nav.useEffect.ctx"];
                }
            }["Nav.useEffect.ctx"], nav);
            return ({
                "Nav.useEffect": ()=>ctx.revert()
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrap,
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cap,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#home",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        "aria-label": t("nav.home"),
                        children: [
                            "NAVEEN",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Nav.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Nav.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].links,
                        "aria-label": "Primary",
                        children: LINKS.map((l)=>{
                            const isOn = l.watch === active;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: l.href,
                                className: isOn ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on : "",
                                "aria-current": isOn ? "page" : undefined,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roll,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t(l.key)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Nav.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            children: t(l.key)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Nav.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Nav.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this)
                            }, l.key, false, {
                                fileName: "[project]/components/layout/Nav.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Nav.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burger} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burgerOpen : ""}`,
                            "aria-label": menuOpen ? t("nav.close") : t("nav.menu"),
                            "aria-expanded": menuOpen,
                            "aria-controls": "mobile-nav",
                            onClick: ()=>setMenuOpen((o)=>!o),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Nav.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Nav.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Nav.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Nav.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Nav.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sheet} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sheetOpen : ""}`,
                id: "mobile-nav",
                hidden: !menuOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Primary mobile",
                    children: LINKS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: l.href,
                            className: l.watch === active ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sheetOn : "",
                            "aria-current": l.watch === active ? "page" : undefined,
                            onClick: ()=>setMenuOpen(false),
                            children: t(l.key)
                        }, l.key, false, {
                            fileName: "[project]/components/layout/Nav.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/layout/Nav.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Nav.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrim} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrimOn : ""}`,
                "aria-label": t("nav.close"),
                tabIndex: menuOpen ? 0 : -1,
                onClick: ()=>setMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/layout/Nav.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Nav.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(Nav, "+/VyPXc6N1DfYm2fSkENLRGycWo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Scene.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "hold": "Scene-module__XLgPZG__hold",
  "keepFrame": "Scene-module__XLgPZG__keepFrame",
  "keepRunway": "Scene-module__XLgPZG__keepRunway",
  "runway": "Scene-module__XLgPZG__runway",
});
}),
"[project]/components/layout/Scene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Scene$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/layout/Scene.module.css [app-client] (css module)");
"use client";
;
;
function Scene({ children, runway = 0, order, id, keepOnMobile = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Scene$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hold} ${keepOnMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Scene$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].keepFrame : ""}`,
                "data-scene": id ?? String(order),
                style: {
                    zIndex: order
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/components/layout/Scene.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            runway > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Scene$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].runway} ${keepOnMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Scene$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].keepRunway : ""}`,
                "data-runway": id ?? String(order),
                style: {
                    height: `calc(${runway} * 100svh)`
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/layout/Scene.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Scene.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c = Scene;
var _c;
__turbopack_context__.k.register(_c, "Scene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/About/About.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "about": "About-module__WabD6q__about",
  "beat": "About-module__WabD6q__beat",
  "beatN": "About-module__WabD6q__beatN",
  "beats": "About-module__WabD6q__beats",
  "edu": "About-module__WabD6q__edu",
  "eyebrow": "About-module__WabD6q__eyebrow",
  "grid": "About-module__WabD6q__grid",
  "h2": "About-module__WabD6q__h2",
  "imgCard": "About-module__WabD6q__imgCard",
  "metric": "About-module__WabD6q__metric",
  "metricLabel": "About-module__WabD6q__metricLabel",
  "metricNum": "About-module__WabD6q__metricNum",
  "metricStatic": "About-module__WabD6q__metricStatic",
  "metrics": "About-module__WabD6q__metrics",
  "next": "About-module__WabD6q__next",
  "philoCard": "About-module__WabD6q__philoCard",
  "serif": "About-module__WabD6q__serif",
  "sideCard": "About-module__WabD6q__sideCard",
  "sideCol": "About-module__WabD6q__sideCol",
  "wrap": "About-module__WabD6q__wrap",
});
}),
"[project]/components/sections/About/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/VelocityMarquee.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/About/About.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const MARQUEE_ROWS = [
    {
        items: [
            "Python",
            "SQL",
            "Apache Spark",
            "PySpark",
            "Kafka",
            "Airflow",
            "AWS Data Stack",
            "Docker",
            "Data Warehousing"
        ],
        velocity: 34
    },
    {
        items: [
            "Delta Lake",
            "Hadoop",
            "Hive",
            "ETL/ELT",
            "Kubernetes",
            "Git",
            "GitHub",
            "Vector Databases",
            "RAG Systems"
        ],
        velocity: -28,
        outline: true
    }
];
const METRICS = [
    {
        value: "1st",
        count: null,
        key: "about.m1"
    },
    {
        value: "4+",
        count: 4,
        suffix: "+",
        key: "about.m2"
    },
    {
        value: "214K+",
        count: 214,
        suffix: "K+",
        key: "about.m3"
    },
    {
        value: "50+",
        count: 50,
        suffix: "+",
        key: "about.m4"
    }
];
function About() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            const el = root.current;
            if (!el || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "About.useEffect.ctx": ()=>{
                    /* shared reveal grammar — same as hero: y + fade, soft expo */ const reveal = {
                        "About.useEffect.ctx.reveal": (targets, trigger, vars = {})=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(targets, {
                                y: 44,
                                autoAlpha: 0,
                                duration: 1,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                                stagger: 0.1,
                                immediateRender: false,
                                scrollTrigger: {
                                    trigger,
                                    start: "top 82%"
                                },
                                ...vars
                            })
                    }["About.useEffect.ctx.reveal"];
                    reveal([
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow}`,
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2}`
                    ], el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header}`));
                    /* metrics: reveal + count-up when the band enters */ const band = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metrics}`);
                    if (band) {
                        reveal(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metric}`, band, {
                            stagger: 0.09
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                            trigger: band,
                            start: "top 84%",
                            once: true,
                            onEnter: {
                                "About.useEffect.ctx": ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray("[data-metric-count]").forEach({
                                        "About.useEffect.ctx": (numEl)=>{
                                            const target = Number(numEl.dataset.metricCount);
                                            const obj = {
                                                v: 0
                                            };
                                            /* the markup ships the real number, so it is correct with no JS
                 at all; the count-up rewinds to zero only at the moment it is
                 actually about to run */ numEl.textContent = "0";
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(obj, {
                                                v: target,
                                                duration: 1.4,
                                                ease: "power2.out",
                                                onUpdate: {
                                                    "About.useEffect.ctx": ()=>{
                                                        numEl.textContent = String(Math.round(obj.v));
                                                    }
                                                }["About.useEffect.ctx"]
                                            });
                                        }
                                    }["About.useEffect.ctx"]);
                                }
                            }["About.useEffect.ctx"]
                        });
                    }
                    reveal([
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].edu}`,
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].next}`
                    ], el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].edu}`), {
                        stagger: 0.12
                    });
                }
            }["About.useEffect.ctx"], el);
            return ({
                "About.useEffect": ()=>ctx.revert()
            })["About.useEffect"];
        }
    }["About.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about,
        id: "about",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                rows: MARQUEE_ROWS
            }, void 0, false, {
                fileName: "[project]/components/sections/About/About.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrap,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "01"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/About/About.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    t("about.eyebrow")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/About/About.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2,
                                children: [
                                    t("about.h2a"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/sections/About/About.tsx",
                                        lineNumber: 122,
                                        columnNumber: 29
                                    }, this),
                                    t("about.h2b"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                        children: t("about.h2Em")
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/About/About.tsx",
                                        lineNumber: 123,
                                        columnNumber: 30
                                    }, this),
                                    t("about.h2c")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/About/About.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/About/About.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metrics,
                        children: METRICS.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metric,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricNum,
                                        children: m.count !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "prefix" in m && m.prefix,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-metric-count": m.count,
                                                    children: m.count
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/About/About.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: m.suffix
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/About/About.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/About/About.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricStatic,
                                            children: m.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/About/About.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/About/About.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                        children: t(m.key)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/About/About.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, m.key, true, {
                                fileName: "[project]/components/sections/About/About.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/About/About.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].edu,
                        children: t("about.edu")
                    }, void 0, false, {
                        fileName: "[project]/components/sections/About/About.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].next,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#work",
                            variant: "dark",
                            size: "sm",
                            arrow: true,
                            children: t("about.cta")
                        }, void 0, false, {
                            fileName: "[project]/components/sections/About/About.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/About/About.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/About/About.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/About/About.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(About, "Iqs25n8ECfHKcQdsdD6kwktUfVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Connect/Connect.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arc": "Connect-module__H0YNCq__arc",
  "arrow": "Connect-module__H0YNCq__arrow",
  "connect": "Connect-module__H0YNCq__connect",
  "cta": "Connect-module__H0YNCq__cta",
  "eyebrow": "Connect-module__H0YNCq__eyebrow",
  "footer": "Connect-module__H0YNCq__footer",
  "glyph": "Connect-module__H0YNCq__glyph",
  "h2": "Connect-module__H0YNCq__h2",
  "hasPhoto": "Connect-module__H0YNCq__hasPhoto",
  "head": "Connect-module__H0YNCq__head",
  "lede": "Connect-module__H0YNCq__lede",
  "pLabel": "Connect-module__H0YNCq__pLabel",
  "panel": "Connect-module__H0YNCq__panel",
  "panelInner": "Connect-module__H0YNCq__panelInner",
  "ph": "Connect-module__H0YNCq__ph",
  "photo": "Connect-module__H0YNCq__photo",
  "roll": "Connect-module__H0YNCq__roll",
  "serif": "Connect-module__H0YNCq__serif",
  "social": "Connect-module__H0YNCq__social",
  "socials": "Connect-module__H0YNCq__socials",
  "top": "Connect-module__H0YNCq__top",
});
}),
"[project]/components/sections/Connect/Connect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Connect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * LET'S CONNECT — the closing chapter (Patta "Let's connect" as the mood
 * reference: curved panel row, floating perspective, calm typography).
 * Our take: five memory panels on a shallow 3D arc that lean with the
 * cursor and breathe on idle; the site-wide Button carries the CTA; social
 * cards use the same circle-fill + roll language as the nav.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/Connect/Connect.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* No personal photo arc — Naveen opted to drop this section entirely. */ /* Official brand marks, inlined so they inherit size and need no requests. */ const MARKS = {
    linkedin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        }, void 0, false, {
            fileName: "[project]/components/sections/Connect/Connect.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/sections/Connect/Connect.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    github: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        }, void 0, false, {
            fileName: "[project]/components/sections/Connect/Connect.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/sections/Connect/Connect.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
const SOCIALS = [
    {
        name: "LinkedIn",
        mark: "linkedin",
        href: "https://www.linkedin.com/in/naveen-kumar-k-973442398/"
    },
    {
        name: "GitHub",
        mark: "github",
        href: "https://github.com/naveenkumark2830-spec"
    },
    {
        name: "Email",
        glyph: "@",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=naveenkumark2830@gmail.com"
    }
];
function Connect() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Connect.useEffect": ()=>{
            const el = root.current;
            if (!el || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "Connect.useEffect.ctx": ()=>{
                    /* reveal */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head} > *`, {
                        y: 36,
                        autoAlpha: 0,
                        duration: 0.9,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                        stagger: 0.09,
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 70%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socials} > *`, {
                        y: 26,
                        autoAlpha: 0,
                        duration: 0.8,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                        stagger: 0.07,
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: `.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socials}`,
                            start: "top 88%"
                        }
                    });
                }
            }["Connect.useEffect.ctx"], el);
            return ({
                "Connect.useEffect": ()=>ctx.revert()
            })["Connect.useEffect"];
        }
    }["Connect.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connect,
        id: "contact",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "06"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Connect/Connect.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            " ",
                            t("connect.eyebrow")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Connect/Connect.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2,
                        children: [
                            t("connect.h2a"),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                children: t("connect.h2Em")
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Connect/Connect.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Connect/Connect.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lede,
                        children: t("connect.lede")
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Connect/Connect.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cta,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "https://mail.google.com/mail/?view=cm&fs=1&to=naveenkumark2830@gmail.com",
                            variant: "primary",
                            arrow: true,
                            children: t("connect.cta")
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Connect/Connect.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Connect/Connect.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Connect/Connect.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socials,
                children: SOCIALS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: s.href,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].social,
                        target: s.href.startsWith("http") ? "_blank" : undefined,
                        rel: s.href.startsWith("http") ? "noreferrer" : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glyph,
                                children: "mark" in s ? MARKS[s.mark] : s.glyph
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Connect/Connect.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roll,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: s.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Connect/Connect.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: s.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Connect/Connect.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Connect/Connect.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Connect/Connect.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.name, true, {
                        fileName: "[project]/components/sections/Connect/Connect.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/Connect/Connect.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            t("connect.credit"),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Naveen"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Connect/Connect.tsx",
                                lineNumber: 116,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Connect/Connect.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#home",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Connect$2f$Connect$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top,
                        children: t("connect.top")
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Connect/Connect.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "© 2026 Naveen Kumar K"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Connect/Connect.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Connect/Connect.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Connect/Connect.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Connect, "Iqs25n8ECfHKcQdsdD6kwktUfVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Connect;
var _c;
__turbopack_context__.k.register(_c, "Connect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Experience/Experience.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "board": "Experience-module__NmKITa__board",
  "body": "Experience-module__NmKITa__body",
  "card": "Experience-module__NmKITa__card",
  "company": "Experience-module__NmKITa__company",
  "contentCol": "Experience-module__NmKITa__contentCol",
  "count": "Experience-module__NmKITa__count",
  "dark": "Experience-module__NmKITa__dark",
  "deckMode": "Experience-module__NmKITa__deckMode",
  "detailCol": "Experience-module__NmKITa__detailCol",
  "experience": "Experience-module__NmKITa__experience",
  "eyebrow": "Experience-module__NmKITa__eyebrow",
  "foot": "Experience-module__NmKITa__foot",
  "h2": "Experience-module__NmKITa__h2",
  "header": "Experience-module__NmKITa__header",
  "hintFoot": "Experience-module__NmKITa__hintFoot",
  "lbl": "Experience-module__NmKITa__lbl",
  "lblGap": "Experience-module__NmKITa__lblGap",
  "list": "Experience-module__NmKITa__list",
  "loc": "Experience-module__NmKITa__loc",
  "logoBelow": "Experience-module__NmKITa__logoBelow",
  "logoCol": "Experience-module__NmKITa__logoCol",
  "logoWrap": "Experience-module__NmKITa__logoWrap",
  "mono": "Experience-module__NmKITa__mono",
  "nav": "Experience-module__NmKITa__nav",
  "navItem": "Experience-module__NmKITa__navItem",
  "navOn": "Experience-module__NmKITa__navOn",
  "on": "Experience-module__NmKITa__on",
  "outcome": "Experience-module__NmKITa__outcome",
  "plate": "Experience-module__NmKITa__plate",
  "role": "Experience-module__NmKITa__role",
  "serif": "Experience-module__NmKITa__serif",
  "skills": "Experience-module__NmKITa__skills",
  "stage": "Experience-module__NmKITa__stage",
  "stageWrap": "Experience-module__NmKITa__stageWrap",
  "strip": "Experience-module__NmKITa__strip",
  "summary": "Experience-module__NmKITa__summary",
  "tile": "Experience-module__NmKITa__tile",
  "tint": "Experience-module__NmKITa__tint",
  "type": "Experience-module__NmKITa__type",
  "year": "Experience-module__NmKITa__year",
});
}),
"[project]/components/sections/Experience/Experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * EXPERIENCE — centred stacked panel composition.
 *
 * Corrections applied from review:
 *   · The stack is the HERO VISUAL and sits in the CENTRE of the viewport —
 *     not small cards on the right, not a timeline, not a carousel.
 *   · Panels are WIDE, SHORT boards (≈72vw × 150–170px), sharp-edged and
 *     perspective-distorted — physical sheets, not rounded app cards.
 *   · Depth stack recedes up-and-back on a diagonal; the active board is
 *     closest, largest, sharpest. Exit travels down + back + blur + fade.
 *   · TEXT NEVER COLLIDES: waiting boards render identity only (year · role ·
 *     company). Description and skills exist ONLY on the active board.
 *   · Scroll physics: scroll → target progress → rAF interpolation →
 *     transforms. Never bound directly to raw scroll position.
 *   · One curated colour per board; white gallery background.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/lenis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/experience.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/Experience/Experience.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* Scroll length per board. Kept deliberately short: Work, Experience and
   Credentials are three pinned set-pieces in a row, so each one holds only as
   long as its own interaction needs — the page reads as cinematic beats
   rather than one long locked stretch. */ const STEP_VH = 0.62;
const DEPTH = 3; /* panels rendered behind the active one — depth/context */ 
/* Stack geometry (px). NOTE: the stage's rotateX turns part of each board's
   negative Z into DOWNWARD screen movement, which cancels much of the upward
   offset. UP is therefore sized so the RENDERED gap still exceeds the 46px
   identity strip — that is what keeps text from ever colliding. */ const UP = 74; /* each waiting panel sits this much higher */ 
const RIGHT = 26; /* …and this much further right → diagonal */ 
const BACK = 96; /* …and this much deeper in Z */ 
const TILT = 6; /* rotateX on the stage: the trapezoid read */ 
function Experience() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Experience.useEffect": ()=>{
            const el = root.current;
            if (!el) return;
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].matchMedia();
            mm.add("(min-width: 1001px) and (prefers-reduced-motion: no-preference)", {
                "Experience.useEffect": ()=>{
                    const boards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].board}`);
                    const navItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem}`);
                    const counter = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count}`);
                    const tint = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tint}`);
                    const n = boards.length;
                    let active = -1;
                    el.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deckMode);
                    const setActive = {
                        "Experience.useEffect.setActive": (idx)=>{
                            if (idx === active) return;
                            active = idx;
                            boards.forEach({
                                "Experience.useEffect.setActive": (b, i)=>b.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on, i === idx)
                            }["Experience.useEffect.setActive"]);
                            navItems.forEach({
                                "Experience.useEffect.setActive": (it, i)=>it.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navOn, i === idx)
                            }["Experience.useEffect.setActive"]);
                            if (counter) counter.textContent = `0${idx + 1} / 0${n}`;
                            if (tint) tint.style.background = `${__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"][idx].color}12`;
                        }
                    }["Experience.useEffect.setActive"];
                    const place = {
                        "Experience.useEffect.place": (p)=>{
                            for(let i = 0; i < n; i++){
                                const d = i - p; /* >0 waiting · 0 active · <0 leaving */ 
                                const b = boards[i];
                                if (d > DEPTH + 0.6 || d < -1.1) {
                                    b.style.visibility = "hidden";
                                    continue;
                                }
                                b.style.visibility = "visible";
                                if (d >= 0) {
                                    /* waiting: up + right + back, progressively compressed */ const k = Math.min(d, DEPTH);
                                    b.style.transform = `translate3d(${(k * RIGHT).toFixed(1)}px, ${(-k * UP).toFixed(1)}px, ${(-k * BACK).toFixed(1)}px)` + ` scale(${(1 - k * 0.028).toFixed(3)})`;
                                    b.style.opacity = String(Math.max(0, 1 - k * 0.16));
                                    b.style.filter = k > 1.2 ? `blur(${Math.min(3, (k - 1.2) * 1.2).toFixed(2)}px)` : "";
                                    b.style.zIndex = String(200 - Math.round(k * 10));
                                } else {
                                    /* leaving: down + back, dissolving */ const t = Math.min(1, -d / 1.1);
                                    b.style.transform = `translate3d(${(-t * 40).toFixed(1)}px, ${(t * 230).toFixed(1)}px, ${(-t * 320).toFixed(1)}px)` + ` scale(${(1 - t * 0.06).toFixed(3)})`;
                                    b.style.opacity = String(Math.max(0, 1 - t * 1.35));
                                    b.style.filter = t > 0.25 ? `blur(${((t - 0.25) * 5).toFixed(2)}px)` : "";
                                    b.style.zIndex = "210";
                                }
                            }
                            setActive(Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, n - 1, p)));
                        }
                    }["Experience.useEffect.place"];
                    /* ---- scroll → target → interpolation → transforms ---- */ let target = 0;
                    let current = 0;
                    const tick = {
                        "Experience.useEffect.tick": (_t, dt)=>{
                            const f = Math.min(dt / 1000, 0.05);
                            current += (target - current) * Math.min(f * 9, 1);
                            place(current);
                        }
                    }["Experience.useEffect.tick"];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.add(tick);
                    place(0);
                    /* the Scene's sticky hold does the pinning; this only reads progress */ const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sceneScrub"])(el),
                        scrub: 0.5,
                        invalidateOnRefresh: true,
                        onUpdate: {
                            "Experience.useEffect.st": (self)=>{
                                target = self.progress * (n - 1);
                            }
                        }["Experience.useEffect.st"]
                    });
                    const jump = {
                        "Experience.useEffect.jump": (idx)=>{
                            const y = st.start + idx / (n - 1) * (st.end - st.start);
                            const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLenis"])();
                            if (lenis) lenis.scrollTo(y, {
                                duration: 1
                            });
                            else window.scrollTo({
                                top: y,
                                behavior: "smooth"
                            });
                        }
                    }["Experience.useEffect.jump"];
                    const handlers = [];
                    [
                        ...boards,
                        ...navItems
                    ].forEach({
                        "Experience.useEffect": (elm, idx)=>{
                            const i = idx % n;
                            const h = {
                                "Experience.useEffect.h": ()=>jump(i)
                            }["Experience.useEffect.h"];
                            elm.addEventListener("click", h);
                            handlers.push([
                                elm,
                                h
                            ]);
                        }
                    }["Experience.useEffect"]);
                    /* very small perspective response to the pointer */ const stage = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage}`);
                    let rx = null;
                    let ry = null;
                    if (stage) {
                        rx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(stage, "rotationX", {
                            duration: 1,
                            ease: "power3.out"
                        });
                        ry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(stage, "rotationY", {
                            duration: 1,
                            ease: "power3.out"
                        });
                    }
                    const onMove = {
                        "Experience.useEffect.onMove": (e)=>{
                            const r = el.getBoundingClientRect();
                            const cx = ((e.clientX - r.left) / r.width - 0.5) * 2;
                            const cy = ((e.clientY - r.top) / r.height - 0.5) * 2;
                            rx?.(TILT - cy * 2.2);
                            ry?.(cx * 2.6);
                        }
                    }["Experience.useEffect.onMove"];
                    el.addEventListener("pointermove", onMove);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} > *`, {
                        y: 34,
                        autoAlpha: 0,
                        duration: 0.9,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                        stagger: 0.09,
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 72%"
                        }
                    });
                    return ({
                        "Experience.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(tick);
                            st.kill();
                            el.removeEventListener("pointermove", onMove);
                            handlers.forEach({
                                "Experience.useEffect": ([elm, h])=>elm.removeEventListener("click", h)
                            }["Experience.useEffect"]);
                            el.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deckMode);
                        }
                    })["Experience.useEffect"];
                }
            }["Experience.useEffect"]);
            mm.add("(max-width: 1000px), (prefers-reduced-motion: reduce)", {
                "Experience.useEffect": ()=>{
                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].board}`).forEach({
                        "Experience.useEffect": (b)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(b, {
                                y: 40,
                                autoAlpha: 0,
                                duration: 0.85,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                                immediateRender: false,
                                scrollTrigger: {
                                    trigger: b,
                                    start: "top 88%"
                                }
                            });
                        }
                    }["Experience.useEffect"]);
                }
            }["Experience.useEffect"]);
            return ({
                "Experience.useEffect": ()=>mm.revert()
            })["Experience.useEffect"];
        }
    }["Experience.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experience,
        id: "experience",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tint,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/sections/Experience/Experience.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "05"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Experience/Experience.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            " ",
                            t("exp.eyebrow")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Experience/Experience.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2,
                        children: [
                            t("exp.h2"),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                children: t("exp.h2Em")
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Experience/Experience.tsx",
                                lineNumber: 204,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Experience/Experience.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Experience/Experience.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stageWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].board} ${r.fg === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dark : ""} ${i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on : ""}`,
                            style: {
                                background: r.color,
                                zIndex: 200 - i
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].strip,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].year,
                                            children: r.period
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Experience/Experience.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].company,
                                            children: r.company
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Experience/Experience.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].type,
                                            children: t(`type.${r.type}`)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Experience/Experience.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailCol} ${r.logo?.placement === "below" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoBelow : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentCol,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].role,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, r, "role")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loc,
                                                    children: r.location
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bodyMain,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lbl,
                                                                    children: t("exp.worked")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summary,
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, r, "summary")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                                                                    children: r.achievements.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: a
                                                                        }, a, false, {
                                                                            fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                                            lineNumber: 243,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bodySide,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lbl,
                                                                    children: t("exp.impact")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outcome,
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, r, "outcome")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lbl} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lblGap}`,
                                                                    children: t("exp.tools")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skills,
                                                                    children: r.skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            children: s
                                                                        }, s, false, {
                                                                            fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                                            lineNumber: 254,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Experience/Experience.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoCol,
                                            children: r.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][r.logo.variant]}`,
                                                style: r.logo.variant === "plate" ? {
                                                    "--logo-aspect": r.logo.aspect
                                                } : undefined,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: r.logo.src,
                                                    alt: `${r.company} logo`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                lineNumber: 265,
                                                columnNumber: 21
                                            }, this) : /* no official file supplied yet — typographic stand-in */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mono}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: r.company.split(" ")[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Experience/Experience.tsx",
                                                lineNumber: 280,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Experience/Experience.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, r.company, true, {
                            fileName: "[project]/components/sections/Experience/Experience.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/Experience/Experience.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Experience/Experience.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].foot,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count,
                        children: [
                            "01 / 0",
                            __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Experience/Experience.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                        role: "list",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                type: "button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        style: {
                                            background: r.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Experience/Experience.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this),
                                    r.company
                                ]
                            }, r.company, true, {
                                fileName: "[project]/components/sections/Experience/Experience.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Experience/Experience.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Experience$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hintFoot,
                        children: t("exp.hint")
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Experience/Experience.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Experience/Experience.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Experience/Experience.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_s(Experience, "QeCfe2rdG634JGQWUzKzs9CzsNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Hero/Hero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ambient": "Hero-module__D9Cm9a__ambient",
  "annot": "Hero-module__D9Cm9a__annot",
  "arch": "Hero-module__D9Cm9a__arch",
  "archLine": "Hero-module__D9Cm9a__archLine",
  "chip": "Hero-module__D9Cm9a__chip",
  "chipLayer": "Hero-module__D9Cm9a__chipLayer",
  "chipWide": "Hero-module__D9Cm9a__chipWide",
  "ctas": "Hero-module__D9Cm9a__ctas",
  "cue": "Hero-module__D9Cm9a__cue",
  "cueArrow": "Hero-module__D9Cm9a__cueArrow",
  "glow": "Hero-module__D9Cm9a__glow",
  "glowL": "Hero-module__D9Cm9a__glowL",
  "glowR": "Hero-module__D9Cm9a__glowR",
  "h1": "Hero-module__D9Cm9a__h1",
  "head": "Hero-module__D9Cm9a__head",
  "hero": "Hero-module__D9Cm9a__hero",
  "kicker": "Hero-module__D9Cm9a__kicker",
  "labelArrow": "Hero-module__D9Cm9a__labelArrow",
  "particle": "Hero-module__D9Cm9a__particle",
  "particleAccent": "Hero-module__D9Cm9a__particleAccent",
  "play": "Hero-module__D9Cm9a__play",
  "plusA": "Hero-module__D9Cm9a__plusA",
  "plusB": "Hero-module__D9Cm9a__plusB",
  "portrait": "Hero-module__D9Cm9a__portrait",
  "red": "Hero-module__D9Cm9a__red",
  "ring": "Hero-module__D9Cm9a__ring",
  "row": "Hero-module__D9Cm9a__row",
  "scrollCue": "Hero-module__D9Cm9a__scrollCue",
  "serif": "Hero-module__D9Cm9a__serif",
  "side": "Hero-module__D9Cm9a__side",
  "sideL": "Hero-module__D9Cm9a__sideL",
  "sideR": "Hero-module__D9Cm9a__sideR",
  "stackLabel": "Hero-module__D9Cm9a__stackLabel",
  "stage": "Hero-module__D9Cm9a__stage",
  "stageRow": "Hero-module__D9Cm9a__stageRow",
  "statCard": "Hero-module__D9Cm9a__statCard",
  "statIcon": "Hero-module__D9Cm9a__statIcon",
  "statLabel": "Hero-module__D9Cm9a__statLabel",
  "statNum": "Hero-module__D9Cm9a__statNum",
  "sub": "Hero-module__D9Cm9a__sub",
});
}),
"[project]/components/sections/Hero/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/Hero/Hero.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const STATS_LEFT = [
    {
        n: 4,
        suffix: "+",
        key: "stat.projects",
        icon: "/images/icons/projects.png"
    },
    {
        n: 13,
        suffix: "+",
        key: "stat.years",
        icon: "/images/icons/years.png"
    }
];
const STATS_RIGHT = [
    {
        n: 50,
        suffix: "+",
        key: "stat.countries",
        icon: "/images/icons/countries.png"
    },
    {
        n: 1200,
        suffix: "+",
        key: "stat.satisfaction",
        icon: "/images/icons/satisfaction.png"
    }
];
/* ambient particles — position (vw/vh %), size px, tone */ const PARTICLES = [
    {
        x: 8,
        y: 26,
        s: 6,
        accent: true
    },
    {
        x: 14,
        y: 62,
        s: 4,
        accent: false
    },
    {
        x: 5,
        y: 78,
        s: 5,
        accent: false
    },
    {
        x: 90,
        y: 22,
        s: 5,
        accent: false
    },
    {
        x: 94,
        y: 58,
        s: 6,
        accent: true
    },
    {
        x: 86,
        y: 82,
        s: 4,
        accent: false
    }
];
function StatCard({ n, suffix, label, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statIcon,
                src: icon,
                alt: "",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero/Hero.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNum,
                "data-count": n,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "0"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: suffix
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero/Hero.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero/Hero.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Hero/Hero.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = StatCard;
function Hero() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const el = root.current;
            if (!el || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "Hero.useEffect.ctx": ()=>{
                    /* ---------- Entrance: plays when the hero ARRIVES (revealed by the
         tunnel opening above it), not on page load ---------- */ const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
                        /* immediateRender:false is load-bearing here, not a nicety. Every
           tween below is a `.from()`, which by default hides its target the
           moment the timeline is built and only restores it when the trigger
           fires. If that trigger never resolves — which happens when the
           section is held inside a scene — the kicker, sub-copy and BOTH
           CTAs stay invisible forever. This way the hero renders complete
           and the entrance is an enhancement layered on top. */ defaults: {
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                            immediateRender: false
                        },
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            once: true
                        }
                    });
                    tl.from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ambient} > *`, {
                        autoAlpha: 0,
                        duration: 1.8,
                        stagger: 0.06,
                        ease: "power1.out"
                    }, 0).from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker}`, {
                        y: 22,
                        autoAlpha: 0,
                        duration: 0.7
                    }, 0.1).from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row}`, {
                        y: 70,
                        autoAlpha: 0,
                        duration: 1.05,
                        stagger: 0.12
                    }, "-=0.45").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub}`, {
                        y: 24,
                        autoAlpha: 0,
                        duration: 0.8
                    }, "-=0.7").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctas} > *`, {
                        y: 18,
                        autoAlpha: 0,
                        duration: 0.6,
                        stagger: 0.08
                    }, "-=0.55").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archLine}`, {
                        scaleY: 0.85,
                        autoAlpha: 0,
                        transformOrigin: "bottom center",
                        duration: 0.9,
                        ease: "power3.out"
                    }, "-=0.5").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arch}`, {
                        scaleY: 0.9,
                        autoAlpha: 0,
                        transformOrigin: "bottom center",
                        duration: 1.0,
                        ease: "power3.out"
                    }, "<0.08").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portrait}`, {
                        y: 110,
                        autoAlpha: 0,
                        duration: 1.15,
                        ease: "power3.out"
                    }, "-=0.75").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard}`, {
                        y: 40,
                        autoAlpha: 0,
                        duration: 0.85,
                        stagger: 0.09,
                        ease: "back.out(1.3)"
                    }, "-=0.75").from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollCue}`, {
                        y: 16,
                        autoAlpha: 0,
                        duration: 0.7
                    }, "-=0.6");
                    /* stat count-up — synced to the entrance timeline, not page load */ tl.call({
                        "Hero.useEffect.ctx": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNum}`).forEach({
                                "Hero.useEffect.ctx": (numEl)=>{
                                    const target = Number(numEl.dataset.count || 0);
                                    const obj = {
                                        v: 0
                                    };
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(obj, {
                                        v: target,
                                        duration: 1.3,
                                        ease: "power2.out",
                                        onUpdate: {
                                            "Hero.useEffect.ctx": ()=>{
                                                numEl.firstChild.textContent = String(Math.round(obj.v));
                                            }
                                        }["Hero.useEffect.ctx"]
                                    });
                                }
                            }["Hero.useEffect.ctx"]);
                        }
                    }["Hero.useEffect.ctx"], [], "-=0.9");
                    /* ---------- Idle life ---------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particle}`).forEach({
                        "Hero.useEffect.ctx": (p)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(p, {
                                y: `+=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.random(-18, 18)}`,
                                x: `+=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.random(-10, 10)}`,
                                duration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.random(4, 7),
                                yoyo: true,
                                repeat: -1,
                                ease: "sine.inOut",
                                delay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.random(0, 2)
                            });
                        }
                    }["Hero.useEffect.ctx"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glow}`).forEach({
                        "Hero.useEffect.ctx": (g, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(g, {
                                opacity: 0.55,
                                duration: 5.5,
                                yoyo: true,
                                repeat: -1,
                                ease: "sine.inOut",
                                delay: i * 2
                            });
                        }
                    }["Hero.useEffect.ctx"]);
                    /* ---------- Mouse: layered parallax + a breath of portrait tilt ---------- */ const layers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray("[data-depth]");
                    const setters = layers.map({
                        "Hero.useEffect.ctx.setters": (layer)=>({
                                depth: Number(layer.dataset.depth),
                                x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(layer, "x", {
                                    duration: 1.1,
                                    ease: "power3.out"
                                }),
                                y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(layer, "y", {
                                    duration: 1.1,
                                    ease: "power3.out"
                                })
                            })
                    }["Hero.useEffect.ctx.setters"]);
                    const portraitEl = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portrait}`);
                    const tilt = portraitEl ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(portraitEl, "rotation", {
                        duration: 1.4,
                        ease: "power3.out"
                    }) : null;
                    const onMove = {
                        "Hero.useEffect.ctx.onMove": (e)=>{
                            const cx = (e.clientX / window.innerWidth - 0.5) * 2;
                            const cy = (e.clientY / window.innerHeight - 0.5) * 2;
                            setters.forEach({
                                "Hero.useEffect.ctx.onMove": (s)=>{
                                    s.x(cx * s.depth * 80);
                                    s.y(cy * s.depth * 44);
                                }
                            }["Hero.useEffect.ctx.onMove"]);
                            tilt?.(cx * 1.2);
                        }
                    }["Hero.useEffect.ctx.onMove"];
                    window.addEventListener("mousemove", onMove);
                    /* ---------- Scroll: gentle layered exit ---------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: el,
                            start: "top top",
                            end: "bottom top",
                            scrub: true
                        }
                    }).to(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head}`, {
                        y: -60,
                        autoAlpha: 0.2
                    }, 0).to(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arch}`, {
                        y: 50
                    }, 0).to([
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideL}`,
                        `.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideR}`
                    ], {
                        y: -34
                    }, 0).to(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ambient}`, {
                        autoAlpha: 0
                    }, 0);
                    return ({
                        "Hero.useEffect.ctx": ()=>window.removeEventListener("mousemove", onMove)
                    })["Hero.useEffect.ctx"];
                }
            }["Hero.useEffect.ctx"], el);
            return ({
                "Hero.useEffect": ()=>ctx.revert()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
        id: "home",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ambient,
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glow} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glowL}`,
                        "data-depth": "0.012"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glow} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glowR}`,
                        "data-depth": "0.016"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ring,
                        "data-depth": "0.02"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].plusA,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].plusB,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    PARTICLES.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particle} ${p.accent ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particleAccent : ""}`,
                            style: {
                                left: `${p.x}%`,
                                top: `${p.y}%`,
                                width: p.s,
                                height: p.s
                            }
                        }, i, false, {
                            fileName: "[project]/components/sections/Hero/Hero.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero/Hero.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head,
                "data-depth": "0.01",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                        children: t("hero.kicker")
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h1,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                                children: [
                                    t("hero.h1a"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                        children: t("hero.h1aEm")
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                                        lineNumber: 192,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero/Hero.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                                children: [
                                    t("hero.h1b"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].red}`,
                                        children: t("hero.h1bEm")
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero/Hero.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub,
                        children: t("hero.sub")
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctas,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#work",
                                variant: "primary",
                                arrow: true,
                                children: t("hero.cta1")
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero/Hero.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#about",
                                variant: "ghost",
                                lead: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].play,
                                    children: "▶"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero/Hero.tsx",
                                    lineNumber: 204,
                                    columnNumber: 55
                                }, this),
                                children: t("hero.cta2")
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero/Hero.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero/Hero.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stageRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].side} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideL}`,
                        children: STATS_LEFT.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                n: s.n,
                                suffix: s.suffix,
                                icon: s.icon,
                                label: t(s.key)
                            }, s.key, false, {
                                fileName: "[project]/components/sections/Hero/Hero.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archLine,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero/Hero.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arch,
                                "data-depth": "0.02",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero/Hero.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portrait,
                                src: "/images/portrait.png",
                                alt: "Naveen Kumar K — Data Engineer",
                                width: 554,
                                height: 573,
                                priority: true,
                                "data-depth": "0.03"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero/Hero.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].side} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideR}`,
                        children: STATS_RIGHT.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                n: s.n,
                                suffix: s.suffix,
                                icon: s.icon,
                                label: t(s.key)
                            }, s.key, false, {
                                fileName: "[project]/components/sections/Hero/Hero.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero/Hero.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollCue,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t("hero.scroll")
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Hero$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cueArrow,
                        "aria-hidden": "true",
                        children: "↓"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero/Hero.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero/Hero.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Hero/Hero.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_s(Hero, "Iqs25n8ECfHKcQdsdD6kwktUfVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Intro/TunnelIntro.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "canvas": "TunnelIntro-module__nHlKhW__canvas",
  "fallback": "TunnelIntro-module__nHlKhW__fallback",
  "frame": "TunnelIntro-module__nHlKhW__frame",
  "hint": "TunnelIntro-module__nHlKhW__hint",
  "hintPulse": "TunnelIntro-module__nHlKhW__hintPulse",
  "intro": "TunnelIntro-module__nHlKhW__intro",
  "progFill": "TunnelIntro-module__nHlKhW__progFill",
  "progLine": "TunnelIntro-module__nHlKhW__progLine",
  "progress": "TunnelIntro-module__nHlKhW__progress",
  "srOnly": "TunnelIntro-module__nHlKhW__srOnly",
  "stageNow": "TunnelIntro-module__nHlKhW__stageNow",
});
}),
"[project]/components/sections/Intro/TunnelIntro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TunnelIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * SECTION 01 — THE OPENING. The live Three.js Gallery Tunnel seen through
 * "GIREESH", stretched into a ~5.5-viewport cinematic journey that hands
 * over to the real Hero.
 *
 * Journey design:
 *   · The section pins; pin progress maps to tunnel travel through an
 *     ease-in curve (p^1.35) — the deeper you go, the faster panels pass.
 *   · Motion is double-smoothed for physicality: scrub smoothing feeds a
 *     travel-lerp, which feeds the reference's camera-chase lerp. Slow
 *     scrolling drifts; hard flicks accelerate; nothing ever snaps.
 *   · A slow idle drift keeps the world alive before the first scroll.
 *   · THE TRANSITION (final ~22%): background and fog lerp to white while
 *     the fog wall closes in — the world compresses into brightness, the
 *     typography dissolves into the page (inside becomes white like the
 *     outside), the canvas releases, the nav arrives, and the Hero rises.
 *   · Nav is hidden while the journey runs (body class, see Nav.module.css).
 *   · Mobile: reduced grid, fewer segments, tighter DPR cap.
 *   · Reduced motion: a single static masked frame, no pin.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/Intro/TunnelIntro.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* ---------- tunnel constants (from the supplied implementation) ---------- */ const TUNNEL_WIDTH = 2;
const TUNNEL_HEIGHT = 1.8;
const SEGMENT_DEPTH = 1;
const LINE_RADIUS = 0.003;
const SCROLL_TO_Z = 0.05;
const CAMERA_CHASE = 0.1;
const FADE_IN = 1;
const BACKGROUND = "#0a0a0c";
const LINE_COLOR = "#9a9aa0";
const COLORS = [
    "#FF6A00",
    "#AB54F7",
    "#FF2E0F",
    "#0072E3",
    "#00AA3C",
    "#FFB200"
];
const IMAGES = [
    "/images/pipeline_flow.jpg",
    "/images/spark_kafka_arch.jpg",
    "/images/dashboard_metrics.jpg",
    "/images/cloud_racks.jpg",
    "/images/database_nodes.jpg"
];
/* ---------- journey design ---------- */ const JOURNEY_VIEWPORTS = 5.5; /* pinned scroll length */ 
const STAGES = 6; /* progress rail: 01 … 06 */ 
const TRAVEL_UNITS = 1050; /* total tunnel travel across the journey */ 
const TRAVEL_CURVE = 1.35; /* ease-in: the journey accelerates toward its climax */ 
const IDLE_DRIFT = 5; /* travel units/s while resting — the world never freezes */ 
const T_START = 0.78; /* transition begins (brighten) */ 
const T_RELEASE = 0.9; /* canvas begins to release (fade) */ 
const MOUSE_X = 0.11;
const MOUSE_Y = 0.07;
function TunnelIntro({ text = "NAVEEN" }) {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [webglOk, setWebglOk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TunnelIntro.useEffect": ()=>{
            const rootEl = rootRef.current;
            const frame = frameRef.current;
            const canvas = canvasRef.current;
            if (!rootEl || !frame || !canvas) return;
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            /* same boundary as the rest of the site — a landscape phone must not get
       the desktop tunnel density */ const compact = window.matchMedia("(max-width: 1000px), (hover: none) and (pointer: coarse)").matches;
            /* mobile density reduction */ const GRID = compact ? 3 : 4;
            const NUM_SEGMENTS = compact ? 11 : 15;
            const FOG_FAR = NUM_SEGMENTS * SEGMENT_DEPTH * 0.95;
            const DPR_CAP = compact ? 1.5 : 2;
            /* ================= renderer / scene ================= */ let renderer;
            try {
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    canvas,
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                });
            } catch  {
                setWebglOk(false);
                document.body.classList.remove("intro-active");
                return;
            }
            renderer.setPixelRatio(Math.min(DPR_CAP, window.devicePixelRatio || 1));
            const bgColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](BACKGROUND);
            const white = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ffffff");
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.background = bgColor.clone();
            const fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fog"](bgColor.clone(), 0.01, FOG_FAR);
            scene.fog = fog;
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, 1, 0.1, 1000);
            camera.position.set(0, 0, 0);
            const lineMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](LINE_COLOR),
                transparent: true,
                opacity: 0.5
            });
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            loader.setCrossOrigin("anonymous");
            const fading = [];
            let alive = true;
            const colorMats = COLORS.map({
                "TunnelIntro.useEffect.colorMats": (hex)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](hex),
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                    })
            }["TunnelIntro.useEffect.colorMats"]);
            const imageMats = IMAGES.map({
                "TunnelIntro.useEffect.imageMats": (url)=>{
                    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        transparent: true,
                        opacity: 0,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                    });
                    loader.load(url, {
                        "TunnelIntro.useEffect.imageMats": (tex)=>{
                            if (!alive) {
                                tex.dispose();
                                return;
                            }
                            tex.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
                            tex.generateMipmaps = false;
                            tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                            mat.map = tex;
                            mat.needsUpdate = true;
                            fading.push(mat);
                        }
                    }["TunnelIntro.useEffect.imageMats"], undefined, {
                        "TunnelIntro.useEffect.imageMats": ()=>{}
                    }["TunnelIntro.useEffect.imageMats"]);
                    return mat;
                }
            }["TunnelIntro.useEffect.imageMats"]);
            /* ================= geometry ================= */ const hw = TUNNEL_WIDTH / 2;
            const hh = TUNNEL_HEIGHT / 2;
            const colW = TUNNEL_WIDTH / GRID;
            const rowH = TUNNEL_HEIGHT / GRID;
            const geoFloor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](colW, SEGMENT_DEPTH);
            const geoWall = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](SEGMENT_DEPTH, rowH);
            const geoTubeZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -SEGMENT_DEPTH)), 1, LINE_RADIUS, 8);
            const geoTubeX = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](TUNNEL_WIDTH, 0, 0)), 1, LINE_RADIUS, 8);
            const geoTubeY = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineCurve3"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, TUNNEL_HEIGHT, 0)), 1, LINE_RADIUS, 8);
            const tube = {
                "TunnelIntro.useEffect.tube": (geo, x, y, z = 0)=>{
                    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, lineMaterial);
                    m.position.set(x, y, z);
                    return m;
                }
            }["TunnelIntro.useEffect.tube"];
            const SLOTS = [];
            {
                const z = -SEGMENT_DEPTH / 2;
                for(let i = 0; i < GRID; i++){
                    const x = -hw + i * colW + colW / 2;
                    SLOTS.push({
                        geo: geoFloor,
                        pos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, -hh, z),
                        rot: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](-Math.PI / 2, 0, 0)
                    });
                    SLOTS.push({
                        geo: geoFloor,
                        pos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x, hh, z),
                        rot: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](Math.PI / 2, 0, 0)
                    });
                }
                for(let i = 0; i < GRID; i++){
                    const y = -hh + i * rowH + rowH / 2;
                    SLOTS.push({
                        geo: geoWall,
                        pos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-hw, y, z),
                        rot: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](0, Math.PI / 2, 0)
                    });
                    SLOTS.push({
                        geo: geoWall,
                        pos: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](hw, y, z),
                        rot: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](0, -Math.PI / 2, 0)
                    });
                }
            }
            let imageIndex = 0;
            let colorIndex = 0;
            let populateIndex = 0;
            function populate(group) {
                const takesSlabs = populateIndex % 2 === 0;
                populateIndex++;
                const slabs = group.userData.slabs;
                for (const slab of slabs){
                    if (!takesSlabs || Math.random() > 0.5) {
                        slab.visible = false;
                        continue;
                    }
                    slab.visible = true;
                    if (Math.random() > 0.5) {
                        slab.material = colorMats[5 * colorIndex % colorMats.length];
                        colorIndex++;
                    } else {
                        slab.material = imageMats[3 * imageIndex % imageMats.length];
                        imageIndex++;
                    }
                }
            }
            function createSegment(z) {
                const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                group.position.z = z;
                for(let i = 0; i <= GRID; i++){
                    const x = -hw + i * colW;
                    group.add(tube(geoTubeZ, x, -hh));
                    group.add(tube(geoTubeZ, x, hh));
                }
                for(let i = 1; i < GRID; i++){
                    const y = -hh + i * rowH;
                    group.add(tube(geoTubeZ, -hw, y));
                    group.add(tube(geoTubeZ, hw, y));
                }
                group.add(tube(geoTubeX, -hw, -hh));
                group.add(tube(geoTubeX, -hw, hh));
                group.add(tube(geoTubeY, -hw, -hh));
                group.add(tube(geoTubeY, hw, -hh));
                const slabs = SLOTS.map({
                    "TunnelIntro.useEffect.createSegment.slabs": (slot)=>{
                        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](slot.geo, colorMats[0]);
                        m.position.copy(slot.pos);
                        m.rotation.copy(slot.rot);
                        m.visible = false;
                        group.add(m);
                        return m;
                    }
                }["TunnelIntro.useEffect.createSegment.slabs"]);
                group.userData.slabs = slabs;
                populate(group);
                return group;
            }
            const segments = [];
            for(let i = 0; i < NUM_SEGMENTS; i++){
                const g = createSegment(-i * SEGMENT_DEPTH);
                scene.add(g);
                segments.push(g);
            }
            /* ================= typography mask ================= */ const buildMask = {
                "TunnelIntro.useEffect.buildMask": ()=>{
                    const w = Math.max(1, frame.clientWidth);
                    const h = Math.max(1, frame.clientHeight);
                    const dpr = Math.min(2, window.devicePixelRatio || 1);
                    const m = document.createElement("canvas");
                    m.width = Math.floor(w * dpr);
                    m.height = Math.floor(h * dpr);
                    const ctx = m.getContext("2d");
                    if (!ctx) return;
                    ctx.scale(dpr, dpr);
                    const family = getComputedStyle(document.body).fontFamily || "Inter, sans-serif";
                    let size = h * 0.62;
                    ctx.font = `900 ${size}px ${family}`;
                    if ("letterSpacing" in ctx) {
                        ctx.letterSpacing = "-0.04em";
                    }
                    const measured = ctx.measureText(text).width;
                    size = Math.min(size, size * (w * 0.94) / Math.max(1, measured));
                    ctx.font = `900 ${size}px ${family}`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#000";
                    ctx.fillText(text, w / 2, h / 2 + size * 0.02);
                    const url = m.toDataURL("image/png");
                    canvas.style.maskImage = `url(${url})`;
                    canvas.style.maskSize = "100% 100%";
                    canvas.style.maskRepeat = "no-repeat";
                    canvas.style.setProperty("-webkit-mask-image", `url(${url})`);
                    canvas.style.setProperty("-webkit-mask-size", "100% 100%");
                    canvas.style.setProperty("-webkit-mask-repeat", "no-repeat");
                }
            }["TunnelIntro.useEffect.buildMask"];
            const resize = {
                "TunnelIntro.useEffect.resize": ()=>{
                    const w = Math.max(1, frame.clientWidth);
                    const h = Math.max(1, frame.clientHeight);
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h, false);
                    buildMask();
                    if (reduced) renderer.render(scene, camera);
                }
            }["TunnelIntro.useEffect.resize"];
            const ro = new ResizeObserver(resize);
            ro.observe(frame);
            resize();
            document.fonts?.ready?.then({
                "TunnelIntro.useEffect": ()=>{
                    if (alive) buildMask();
                }
            }["TunnelIntro.useEffect"]);
            /* ================= reduced motion: one static frame, no pin ================= */ if (reduced) {
                renderer.render(scene, camera);
                document.body.classList.remove("intro-active");
                return ({
                    "TunnelIntro.useEffect": ()=>{
                        alive = false;
                        ro.disconnect();
                        renderer.dispose();
                    }
                })["TunnelIntro.useEffect"];
            }
            /* ================= journey state ================= */ document.body.classList.add("intro-active");
            let progress = 0; /* pin progress, scrub-smoothed by ScrollTrigger */ 
            let scrollPos = 0; /* travel, lerped toward target — the inertia layer */ 
            let idle = 0;
            let mx = 0;
            let my = 0;
            const stageEl = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stageNow}`);
            const fillEl = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progFill}`);
            const progressWrap = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress}`);
            const hintEl = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint}`);
            let stageShown = 1;
            const onPointerMove = {
                "TunnelIntro.useEffect.onPointerMove": (e)=>{
                    const r = frame.getBoundingClientRect();
                    mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
                    my = ((e.clientY - r.top) / r.height - 0.5) * 2;
                }
            }["TunnelIntro.useEffect.onPointerMove"];
            const onPointerLeave = {
                "TunnelIntro.useEffect.onPointerLeave": ()=>{
                    mx = 0;
                    my = 0;
                }
            }["TunnelIntro.useEffect.onPointerLeave"];
            frame.addEventListener("pointermove", onPointerMove);
            frame.addEventListener("pointerleave", onPointerLeave);
            /* ================= render loop ================= */ let raf = 0;
            let last = 0;
            let running = false;
            const animate = {
                "TunnelIntro.useEffect.animate": (now)=>{
                    if (!alive || !running) return;
                    raf = requestAnimationFrame(animate);
                    const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
                    last = now;
                    /* travel: eased journey mapping + idle drift, then the inertia lerp */ idle += IDLE_DRIFT * dt;
                    const target = Math.pow(progress, TRAVEL_CURVE) * TRAVEL_UNITS + idle;
                    scrollPos += (target - scrollPos) * 0.07;
                    const want = -SCROLL_TO_Z * scrollPos;
                    camera.position.z += CAMERA_CHASE * (want - camera.position.z);
                    camera.position.x += (mx * MOUSE_X - camera.position.x) * 0.06;
                    camera.position.y += (-my * MOUSE_Y - camera.position.y) * 0.06;
                    /* infinite segment recycling */ const span = NUM_SEGMENTS * SEGMENT_DEPTH;
                    const z = camera.position.z;
                    for (const seg of segments){
                        if (seg.position.z > z + SEGMENT_DEPTH) {
                            let min = 0;
                            for (const s of segments)min = Math.min(min, s.position.z);
                            seg.position.z = min - SEGMENT_DEPTH;
                            populate(seg);
                        } else if (seg.position.z < z - span - SEGMENT_DEPTH) {
                            let max = -999999;
                            for (const s of segments)max = Math.max(max, s.position.z);
                            seg.position.z = max + SEGMENT_DEPTH;
                            populate(seg);
                        }
                    }
                    for(let i = fading.length - 1; i >= 0; i--){
                        const m = fading[i];
                        m.opacity = Math.min(1, m.opacity + dt / FADE_IN);
                        if (m.opacity >= 1) fading.splice(i, 1);
                    }
                    /* ---- THE TRANSITION: world compresses into white ---- */ const k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, 1, (progress - T_START) / (1 - T_START));
                    if (k > 0) {
                        const eased = k * k * (3 - 2 * k);
                        scene.background.copy(bgColor).lerp(white, eased);
                        fog.color.copy(bgColor).lerp(white, eased);
                        fog.far = FOG_FAR - (FOG_FAR - 2.2) * eased; /* depth reduces */ 
                        lineMaterial.opacity = 0.5 * (1 - eased);
                    } else {
                        scene.background.copy(bgColor);
                        fog.color.copy(bgColor);
                        fog.far = FOG_FAR;
                        lineMaterial.opacity = 0.5;
                    }
                    /* canvas releases at the very end — white page remains */ const rel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, 1, (progress - T_RELEASE) / (1 - T_RELEASE));
                    canvas.style.opacity = String(1 - rel);
                    if (progressWrap) progressWrap.style.opacity = String(1 - rel);
                    if (hintEl) hintEl.style.opacity = String(Math.max(0, 1 - progress * 6) * (1 - rel));
                    renderer.render(scene, camera);
                }
            }["TunnelIntro.useEffect.animate"];
            const startLoop = {
                "TunnelIntro.useEffect.startLoop": ()=>{
                    if (running) return;
                    running = true;
                    last = 0;
                    raf = requestAnimationFrame(animate);
                }
            }["TunnelIntro.useEffect.startLoop"];
            const stopLoop = {
                "TunnelIntro.useEffect.stopLoop": ()=>{
                    running = false;
                    cancelAnimationFrame(raf);
                }
            }["TunnelIntro.useEffect.stopLoop"];
            startLoop();
            /* ================= the journey, held by its Scene =================
       The Scene's sticky hold pins this section, so no `pin` here — this
       trigger only reads progress across the scene's runway. */ const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sceneScrub"])(rootEl),
                scrub: 0.6,
                invalidateOnRefresh: true,
                onUpdate: {
                    "TunnelIntro.useEffect.st": (self)=>{
                        progress = self.progress;
                        /* nav returns as the hero arrives */ document.body.classList.toggle("intro-active", self.progress < 0.94);
                        /* progress rail */ const stage = Math.min(STAGES, 1 + Math.floor(self.progress * STAGES));
                        if (stage !== stageShown && stageEl) {
                            stageShown = stage;
                            stageEl.textContent = `0${stage}`;
                        }
                        if (fillEl) fillEl.style.transform = `scaleX(${self.progress.toFixed(4)})`;
                    }
                }["TunnelIntro.useEffect.st"],
                onLeave: {
                    "TunnelIntro.useEffect.st": ()=>{
                        document.body.classList.remove("intro-active");
                        stopLoop();
                    }
                }["TunnelIntro.useEffect.st"],
                onEnterBack: {
                    "TunnelIntro.useEffect.st": ()=>{
                        startLoop();
                    }
                }["TunnelIntro.useEffect.st"]
            });
            return ({
                "TunnelIntro.useEffect": ()=>{
                    alive = false;
                    stopLoop();
                    st.kill();
                    ro.disconnect();
                    frame.removeEventListener("pointermove", onPointerMove);
                    frame.removeEventListener("pointerleave", onPointerLeave);
                    document.body.classList.remove("intro-active");
                    geoFloor.dispose();
                    geoWall.dispose();
                    geoTubeZ.dispose();
                    geoTubeX.dispose();
                    geoTubeY.dispose();
                    for (const m of colorMats)m.dispose();
                    for (const m of imageMats){
                        m.map?.dispose();
                        m.dispose();
                    }
                    lineMaterial.dispose();
                    renderer.dispose();
                }
            })["TunnelIntro.useEffect"];
        }
    }["TunnelIntro.useEffect"], [
        text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].intro,
        id: "intro",
        ref: rootRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].frame,
            ref: frameRef,
            children: [
                webglOk ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvas,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Intro/TunnelIntro.tsx",
                    lineNumber: 483,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fallback,
                    children: text
                }, void 0, false, {
                    fileName: "[project]/components/sections/Intro/TunnelIntro.tsx",
                    lineNumber: 485,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].srOnly,
                    children: [
                        text,
                        " — Data Engineer"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Intro/TunnelIntro.tsx",
                    lineNumber: 487,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                    "aria-hidden": "true",
                    children: t("intro.scroll")
                }, void 0, false, {
                    fileName: "[project]/components/sections/Intro/TunnelIntro.tsx",
                    lineNumber: 489,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stageNow,
                            children: "01"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Intro/TunnelIntro.tsx",
                            lineNumber: 495,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progLine,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Intro$2f$TunnelIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progFill
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Intro/TunnelIntro.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Intro/TunnelIntro.tsx",
                            lineNumber: 496,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "0",
                                STAGES
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Intro/TunnelIntro.tsx",
                            lineNumber: 499,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Intro/TunnelIntro.tsx",
                    lineNumber: 494,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Intro/TunnelIntro.tsx",
            lineNumber: 481,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Intro/TunnelIntro.tsx",
        lineNumber: 480,
        columnNumber: 5
    }, this);
}
_s(TunnelIntro, "FP6fqJU6kqgiMqqck0uqfLmPTBo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = TunnelIntro;
var _c;
__turbopack_context__.k.register(_c, "TunnelIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Journey/LightJourney.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "canvas": "LightJourney-module__0XiSFa__canvas",
  "chBridge": "LightJourney-module__0XiSFa__chBridge",
  "chPlace": "LightJourney-module__0XiSFa__chPlace",
  "chStory": "LightJourney-module__0XiSFa__chStory",
  "chTitle": "LightJourney-module__0XiSFa__chTitle",
  "chYear": "LightJourney-module__0XiSFa__chYear",
  "chapter": "LightJourney-module__0XiSFa__chapter",
  "counter": "LightJourney-module__0XiSFa__counter",
  "counterNow": "LightJourney-module__0XiSFa__counterNow",
  "frame": "LightJourney-module__0XiSFa__frame",
  "frameStatic": "LightJourney-module__0XiSFa__frameStatic",
  "intro": "LightJourney-module__0XiSFa__intro",
  "introHint": "LightJourney-module__0XiSFa__introHint",
  "introLabel": "LightJourney-module__0XiSFa__introLabel",
  "introLede": "LightJourney-module__0XiSFa__introLede",
  "journey": "LightJourney-module__0XiSFa__journey",
  "on": "LightJourney-module__0XiSFa__on",
  "overlay": "LightJourney-module__0XiSFa__overlay",
  "rail": "LightJourney-module__0XiSFa__rail",
  "scrim": "LightJourney-module__0XiSFa__scrim",
  "srOnly": "LightJourney-module__0XiSFa__srOnly",
  "staticBridge": "LightJourney-module__0XiSFa__staticBridge",
  "staticLede": "LightJourney-module__0XiSFa__staticLede",
  "staticPlace": "LightJourney-module__0XiSFa__staticPlace",
  "staticStory": "LightJourney-module__0XiSFa__staticStory",
  "staticYear": "LightJourney-module__0XiSFa__staticYear",
  "tick": "LightJourney-module__0XiSFa__tick",
  "tickOn": "LightJourney-module__0XiSFa__tickOn",
  "ticks": "LightJourney-module__0XiSFa__ticks",
  "whiteout": "LightJourney-module__0XiSFa__whiteout",
});
}),
"[project]/components/sections/Journey/LightJourney.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LightJourney
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * THE JOURNEY v2 — light-cable tunnel (LightTunnel as the concept reference;
 * engine built from scratch to its parameter language: cables, pulses,
 * waviness, sway, glow, fade near/far, color variance, mouse influence).
 *
 * · 20 wavy light cables (10 on mobile) converge toward a vanishing point;
 *   additive-blended shader pulses travel outward along them — energy
 *   moving through a living system, with direction, depth and falloff.
 * · SCROLL IS THE JOURNEY: the section pins for ~4 viewports. Scroll
 *   progress (not just velocity) drives travel, pulse energy and the color
 *   progression — blue → orange → coral → purple → green — so the journey
 *   has a beginning, middle and climax. Velocity feel comes free from the
 *   double smoothing (scrub → travel-lerp): flick fast and the tunnel
 *   surges, then settles. Touch uses native scrolling.
 * · The pointer leans the camera and sways the tunnel — atmospheric, ±0.06.
 * · THE EXIT: light intensity peaks, then the cables dissolve as white
 *   returns and the next section arrives — the same compression-into-white
 *   grammar as the opening tunnel.
 * · Minimal chapter labels sit over the depth; the full story stays in
 *   screen-reader text. prefers-reduced-motion gets a calm static frame.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/journey.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/Journey/LightJourney.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* palette progression across the journey */ const PALETTE = [
    "#0072E3",
    "#FF6A00",
    "#FF2E0F",
    "#AB54F7",
    "#00AA3C"
];
/* One viewport of scroll per chapter, so a chapter can actually be read
   before the tunnel moves on. */ const JOURNEY_VIEWPORTS = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].length;
const DEPTH = 30;
const RADIUS = 1.12;
const WAVINESS = 0.3;
const TRAVEL_TOTAL = 26; /* pulse-phase travel across the journey */ 
const T_EXIT = 0.9; /* white return begins */ 
/* Chapters live inside this slice of the pin: the head is the section
   title settling, the tail is the last chapter holding before the whiteout
   takes over. Text is never asked to compete with the dissolve. */ const CH_START = 0.06;
const CH_END = 0.86;
const CH_SPAN = (CH_END - CH_START) / __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].length;
const VERT = /* glsl */ `
  varying float vT;
  varying float vZ;
  void main() {
    vT = uv.x;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vZ = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;
const FRAG = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTravel;
  uniform float uPhase;
  uniform float uEnergy;
  uniform float uMaster;
  varying float vT;
  varying float vZ;
  void main() {
    /* rim base + a pulse with a decaying tail, travelling outward */
    float p = fract(vT * 3.0 - uTravel * 0.14 + uPhase);
    float pulse = smoothstep(0.30, 0.0, p) * (1.1 + uEnergy * 1.6);
    float b = 0.20 + pulse;
    /* depth: fade in just past the camera, fade out into the far dark */
    float a = smoothstep(0.6, 2.4, vZ) * (1.0 - smoothstep(16.0, 27.0, vZ));
    vec3 c = uColor * b;
    gl_FragColor = vec4(c, 1.0) * a * uMaster;
  }
`;
function LightJourney() {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [webglOk, setWebglOk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    /* reduced motion (or no WebGL) drops the pin entirely, so the chapters
     have to be readable as a plain stack — content is never motion-gated */ const [staticMode, setStaticMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightJourney.useEffect": ()=>{
            const rootEl = rootRef.current;
            const frame = frameRef.current;
            const canvas = canvasRef.current;
            if (!rootEl || !frame || !canvas) return;
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduced) setStaticMode(true);
            /* Aligned to the site's real mobile boundary (1000px) and to coarse
       pointers. At 700px a landscape phone or an 8-inch tablet fell through
       to the desktop tier: 20 antialiased cables at DPR 2 in a continuous
       loop across a six-viewport hold. */ const compact = window.matchMedia("(max-width: 1000px), (hover: none) and (pointer: coarse)").matches;
            const CABLES = compact ? 10 : 20;
            const DPR_CAP = compact ? 1.5 : 2;
            let renderer;
            try {
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    canvas,
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                });
            } catch  {
                setWebglOk(false);
                return;
            }
            renderer.setPixelRatio(Math.min(DPR_CAP, window.devicePixelRatio || 1));
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#0a0a0c");
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](50, 1, 0.1, 100);
            camera.position.set(0, 0, 0);
            const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            scene.add(group);
            const paletteC = PALETTE.map({
                "LightJourney.useEffect.paletteC": (h)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](h)
            }["LightJourney.useEffect.paletteC"]);
            const cables = [];
            const geoms = [];
            for(let i = 0; i < CABLES; i++){
                const angle = i / CABLES * Math.PI * 2 + (Math.random() - 0.5) * 0.18;
                const rBase = RADIUS * (0.86 + Math.random() * 0.34);
                const wPhase = Math.random() * Math.PI * 2;
                const wFreq = 1.6 + Math.random() * 1.6;
                const pts = [];
                const STEPS = 26;
                for(let s = 0; s <= STEPS; s++){
                    const t = s / STEPS;
                    const z = 1.4 - t * (DEPTH + 1.4);
                    const wob = Math.sin(t * wFreq * Math.PI * 2 + wPhase) * WAVINESS * (0.25 + t);
                    const r = rBase + wob * 0.4;
                    const a = angle + wob * 0.22;
                    pts.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(a) * r, Math.sin(a) * r * 0.82, z));
                }
                const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](pts);
                const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](curve, compact ? 48 : 72, 0.016, 5, false);
                geoms.push(geo);
                const baseColor = paletteC[i % paletteC.length].clone();
                const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                    vertexShader: VERT,
                    fragmentShader: FRAG,
                    uniforms: {
                        uColor: {
                            value: baseColor.clone()
                        },
                        uTravel: {
                            value: 0
                        },
                        uPhase: {
                            value: Math.random()
                        },
                        uEnergy: {
                            value: 0.3
                        },
                        uMaster: {
                            value: 1
                        }
                    },
                    transparent: true,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                    depthWrite: false
                });
                group.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, mat));
                cables.push({
                    mat,
                    baseColor,
                    tmp: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]()
                });
            }
            /* soft core at the vanishing point — the infinite end of the tunnel */ const coreCanvas = document.createElement("canvas");
            coreCanvas.width = coreCanvas.height = 128;
            const cctx = coreCanvas.getContext("2d");
            const grad = cctx.createRadialGradient(64, 64, 0, 64, 64, 64);
            grad.addColorStop(0, "rgba(255,255,255,0.9)");
            grad.addColorStop(0.35, "rgba(255,255,255,0.28)");
            grad.addColorStop(1, "rgba(255,255,255,0)");
            cctx.fillStyle = grad;
            cctx.fillRect(0, 0, 128, 128);
            const coreTex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](coreCanvas);
            const coreMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
                map: coreTex,
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE[0]),
                transparent: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false,
                opacity: 0.85
            });
            const core = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sprite"](coreMat);
            core.position.set(0, 0, -DEPTH + 4);
            core.scale.setScalar(7);
            scene.add(core);
            /* ---------- sizing ---------- */ const resize = {
                "LightJourney.useEffect.resize": ()=>{
                    const w = Math.max(1, frame.clientWidth);
                    const h = Math.max(1, frame.clientHeight);
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h, false);
                    if (reduced) renderer.render(scene, camera);
                }
            }["LightJourney.useEffect.resize"];
            const ro = new ResizeObserver(resize);
            ro.observe(frame);
            resize();
            /* ---------- color mixing per progress ---------- */ const mixed = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
            const applyColors = {
                "LightJourney.useEffect.applyColors": (p)=>{
                    const x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, PALETTE.length - 1.001, p * (PALETTE.length - 1));
                    const i0 = Math.floor(x);
                    const f = x - i0;
                    mixed.copy(paletteC[i0]).lerp(paletteC[i0 + 1], f);
                    for (const c of cables){
                        /* controlled variance: 72% progression color, 28% the cable's own hue */ c.mat.uniforms.uColor.value.copy(mixed).lerp(c.baseColor, 0.28);
                    }
                    coreMat.color.copy(mixed);
                }
            }["LightJourney.useEffect.applyColors"];
            applyColors(0);
            /* ---------- reduced motion: calm static frame ---------- */ if (reduced) {
                for (const c of cables)c.mat.uniforms.uTravel.value = 0.6;
                applyColors(0.4);
                renderer.render(scene, camera);
                return ({
                    "LightJourney.useEffect": ()=>{
                        ro.disconnect();
                        geoms.forEach({
                            "LightJourney.useEffect": (g)=>g.dispose()
                        }["LightJourney.useEffect"]);
                        cables.forEach({
                            "LightJourney.useEffect": (c)=>c.mat.dispose()
                        }["LightJourney.useEffect"]);
                        coreTex.dispose();
                        coreMat.dispose();
                        renderer.dispose();
                    }
                })["LightJourney.useEffect"];
            }
            /* ---------- journey state ---------- */ let progress = 0;
            let travel = 0;
            let idle = 0;
            let mx = 0;
            let my = 0;
            const chapterEls = Array.from(rootEl.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chapter}`));
            const tickEls = Array.from(rootEl.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tick}`));
            const introEl = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].intro}`);
            const counterEl = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].counterNow}`);
            const narrative = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay}`);
            const whiteout = rootEl.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].whiteout}`);
            let shown = -1;
            const onPointerMove = {
                "LightJourney.useEffect.onPointerMove": (e)=>{
                    const r = frame.getBoundingClientRect();
                    mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
                    my = ((e.clientY - r.top) / r.height - 0.5) * 2;
                }
            }["LightJourney.useEffect.onPointerMove"];
            const onPointerLeave = {
                "LightJourney.useEffect.onPointerLeave": ()=>{
                    mx = 0;
                    my = 0;
                }
            }["LightJourney.useEffect.onPointerLeave"];
            frame.addEventListener("pointermove", onPointerMove);
            frame.addEventListener("pointerleave", onPointerLeave);
            let raf = 0;
            let last = 0;
            let running = false;
            const animate = {
                "LightJourney.useEffect.animate": (now)=>{
                    if (!running) return;
                    raf = requestAnimationFrame(animate);
                    const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
                    last = now;
                    /* travel: progress-mapped + slow idle life, inertia-lerped */ idle += dt * 0.35;
                    const target = progress * TRAVEL_TOTAL + idle;
                    travel += (target - travel) * 0.075;
                    const energy = 0.3 + progress * 1.5; /* pulses intensify with depth */ 
                    for (const c of cables){
                        c.mat.uniforms.uTravel.value = travel;
                        c.mat.uniforms.uEnergy.value = energy;
                    }
                    /* exit: light peaks then dissolves into white */ const rel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, 1, (progress - T_EXIT) / (1 - T_EXIT));
                    const eased = rel * rel * (3 - 2 * rel);
                    for (const c of cables)c.mat.uniforms.uMaster.value = 1 - eased;
                    coreMat.opacity = 0.85 * (1 - eased) + 0.6 * eased;
                    if (whiteout) whiteout.style.opacity = String(eased);
                    /* the story dissolves with the tunnel — white text never gets
         stranded on the white exit */ if (narrative) narrative.style.opacity = String(1 - eased);
                    /* atmosphere: camera lean + slow sway */ camera.position.x += (mx * 0.06 - camera.position.x) * 0.05;
                    camera.position.y += (-my * 0.045 - camera.position.y) * 0.05;
                    group.rotation.z = Math.sin(travel * 0.05) * 0.05 + mx * 0.02;
                    applyColors(progress);
                    renderer.render(scene, camera);
                }
            }["LightJourney.useEffect.animate"];
            const startLoop = {
                "LightJourney.useEffect.startLoop": ()=>{
                    if (running) return;
                    running = true;
                    last = 0;
                    raf = requestAnimationFrame(animate);
                }
            }["LightJourney.useEffect.startLoop"];
            const stopLoop = {
                "LightJourney.useEffect.stopLoop": ()=>{
                    running = false;
                    cancelAnimationFrame(raf);
                }
            }["LightJourney.useEffect.stopLoop"];
            /* ---------- the journey, held by its Scene ----------
       The Scene's sticky hold pins this section, so no `pin` here — this
       trigger only reads progress across the scene's runway. */ const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sceneScrub"])(rootEl),
                scrub: 0.6,
                invalidateOnRefresh: true,
                onUpdate: {
                    "LightJourney.useEffect.st": (self)=>{
                        progress = self.progress;
                        const p = self.progress;
                        /* the section title hands over to chapter one */ if (introEl) introEl.style.opacity = String(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, 1, 1 - p / CH_START));
                        /* one chapter at a time; -1 while the title still owns the frame */ const idx = p < CH_START ? -1 : Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].length - 1, Math.floor((p - CH_START) / CH_SPAN));
                        if (idx !== shown) {
                            shown = idx;
                            /* class swap only — the stagger and crossfade are CSS, so the
             text never re-lays-out mid-scroll */ chapterEls.forEach({
                                "LightJourney.useEffect.st": (el, i)=>el.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].on, i === idx)
                            }["LightJourney.useEffect.st"]);
                            tickEls.forEach({
                                "LightJourney.useEffect.st": (el, i)=>el.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tickOn, i <= idx)
                            }["LightJourney.useEffect.st"]);
                            if (counterEl) {
                                counterEl.textContent = String(Math.max(0, idx) + 1).padStart(2, "0");
                            }
                        }
                    }
                }["LightJourney.useEffect.st"],
                onToggle: {
                    "LightJourney.useEffect.st": (self)=>self.isActive ? startLoop() : stopLoop()
                }["LightJourney.useEffect.st"]
            });
            /* render while approaching too, so it's alive before the pin */ const io = new IntersectionObserver({
                "LightJourney.useEffect": ([entry])=>{
                    if (entry.isIntersecting) startLoop();
                    else if (!st.isActive) stopLoop();
                }
            }["LightJourney.useEffect"], {
                rootMargin: "160px"
            });
            io.observe(rootEl);
            return ({
                "LightJourney.useEffect": ()=>{
                    stopLoop();
                    st.kill();
                    io.disconnect();
                    ro.disconnect();
                    frame.removeEventListener("pointermove", onPointerMove);
                    frame.removeEventListener("pointerleave", onPointerLeave);
                    geoms.forEach({
                        "LightJourney.useEffect": (g)=>g.dispose()
                    }["LightJourney.useEffect"]);
                    cables.forEach({
                        "LightJourney.useEffect": (c)=>c.mat.dispose()
                    }["LightJourney.useEffect"]);
                    coreTex.dispose();
                    coreMat.dispose();
                    renderer.dispose();
                }
            })["LightJourney.useEffect"];
        }
    }["LightJourney.useEffect"], []);
    const isStatic = staticMode || !webglOk;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].journey,
        id: "journey",
        ref: rootRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].frame} ${isStatic ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].frameStatic : ""}`,
            ref: frameRef,
            children: [
                webglOk ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvas,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                    lineNumber: 398,
                    columnNumber: 11
                }, this) : null,
                !isStatic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrim,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].intro,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introLabel,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "02"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                t("journey.eyebrow")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introLede,
                                            children: t("journey.lede")
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introHint,
                                            children: t("journey.enter")
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chapter,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chYear,
                                                children: c.year
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                                lineNumber: 418,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chTitle,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "title")
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                                lineNumber: 419,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chPlace,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "place")
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                                lineNumber: 420,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chStory,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "story")
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                                lineNumber: 421,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chBridge,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        "aria-hidden": "true",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "bridge")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                                lineNumber: 422,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                        lineNumber: 417,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rail,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].counter,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].counterNow,
                                                    children: "01"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 19
                                                }, this),
                                                " /",
                                                " ",
                                                String(__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].length).padStart(2, "0")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 430,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ticks,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tick} ${i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tickOn : ""}`
                                                }, c.id, false, {
                                                    fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                    lineNumber: 429,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 407,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].whiteout,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 445,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                    lineNumber: 403,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: isStatic ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].staticStory : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].srOnly,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: t("journey.eyebrow")
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 451,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].staticLede,
                            children: t("journey.lede")
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 452,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$journey$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].staticYear,
                                            children: c.year
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "title")
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].staticPlace,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "place")
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 458,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "story")
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Journey$2f$LightJourney$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].staticBridge,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, c, "bridge")
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                            lineNumber: 460,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                                    lineNumber: 455,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                            lineNumber: 453,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Journey/LightJourney.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Journey/LightJourney.tsx",
            lineNumber: 393,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Journey/LightJourney.tsx",
        lineNumber: 392,
        columnNumber: 5
    }, this);
}
_s(LightJourney, "/HZMyCXCVTAqlN/BQLyEgnOny4w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = LightJourney;
var _c;
__turbopack_context__.k.register(_c, "LightJourney");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Stack/DesignStack.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "DesignStack-module__zKngmG__card",
  "center": "DesignStack-module__zKngmG__center",
  "count": "DesignStack-module__zKngmG__count",
  "eyebrow": "DesignStack-module__zKngmG__eyebrow",
  "face": "DesignStack-module__zKngmG__face",
  "glowA": "DesignStack-module__zKngmG__glowA",
  "glowB": "DesignStack-module__zKngmG__glowB",
  "h2": "DesignStack-module__zKngmG__h2",
  "lede": "DesignStack-module__zKngmG__lede",
  "mark": "DesignStack-module__zKngmG__mark",
  "mono": "DesignStack-module__zKngmG__mono",
  "name": "DesignStack-module__zKngmG__name",
  "orbit": "DesignStack-module__zKngmG__orbit",
  "section": "DesignStack-module__zKngmG__section",
  "serif": "DesignStack-module__zKngmG__serif",
  "stage": "DesignStack-module__zKngmG__stage",
});
}),
"[project]/components/sections/Stack/DesignStack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesignStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * MY DESIGN STACK — full-viewport spiral orbit
 *
 * Engine rebuilt from the Archimedean-spiral reference. Kept:
 *   · Archimedean path (radius falls linearly with angle → evenly spaced arms)
 *   · arc-length reparameterization — a lookup table inverts cumulative arc
 *     length so equal steps along the PATH give equal visual gaps. Without it,
 *     cards bunch up near the center.
 *   · continuous delta-time advance, tangent-derived rotation, fade at both
 *     ends of the path, scale attenuation toward the center, depth ordering.
 *
 * Adapted for this portfolio:
 *   · The path is an ELLIPSE matched to the viewport, not a circle. A circular
 *     spiral on a 16:9 screen can only be as wide as the screen is tall, which
 *     leaves the sides empty; the ellipse fills all four edges. The arc-length
 *     table is rebuilt whenever the aspect ratio changes, so spacing stays
 *     visually even under that anisotropic scaling.
 *   · Rotation is applied as a BANK taken straight from the tangent vector
 *     (lean ∝ dy/|d|). Aligning cards to the raw tangent would flip half the
 *     labels upside down; this keeps the lean-into-the-curve read with every
 *     name upright, and is continuous so it never jumps at angle wrap.
 *   · DOM, not canvas — glassmorphism, per-card hover and screen-reader access
 *     are impossible on canvas. 23 nodes, transform + opacity only (~0.15ms of
 *     scripting per frame), driven by the shared gsap ticker and gated by an
 *     IntersectionObserver so it stops when off screen.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$stack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/stack.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/Stack/DesignStack.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const TWO_PI = Math.PI * 2;
/* path shape */ const TURNS = 1.9;
const PHASE = -Math.PI * 0.5;
/* innermost radius as a fraction of the outer one — the clean disc the
   stationary center content lives in. Larger on narrow screens, where the
   text takes up proportionally more of the width. */ const INNER_WIDE = 0.4;
const INNER_COMPACT = 0.62;
/* motion */ const SPEED = 0.021; /* path fractions per second (~48s per full traverse) */ 
const HOVER_SLOW = 0.16;
/* appearance along the path */ const FADE_IN = 0.09;
const FADE_OUT = 0.3;
const SCALE_POW = 0.5;
const LEAN_MAX = 11; /* degrees */ 
/* ---------- arc-length reparameterization ----------
   Built in units of Rx, for a given ratio = Ry/Rx and inner radius, so the
   table measures true on-screen distance. Cached; rebuilt only when the
   viewport's aspect ratio changes meaningfully. */ const M = 1000;
const K = 1024;
function buildArcTable(ratio, inner) {
    const point = (n)=>{
        const a = n * TURNS * TWO_PI + PHASE;
        const r = 1 - n * (1 - inner);
        return {
            x: r * Math.cos(a),
            y: -r * Math.sin(a) * ratio
        };
    };
    const cum = new Float32Array(M + 1);
    let prev = point(0);
    for(let k = 1; k <= M; k++){
        const p = point(k / M);
        cum[k] = cum[k - 1] + Math.hypot(p.x - prev.x, p.y - prev.y);
        prev = p;
    }
    const total = cum[M] || 1;
    const nForArc = new Float32Array(K + 1);
    let j = 0;
    for(let a = 0; a <= K; a++){
        const target = a / K * total;
        while(j < M && cum[j + 1] < target)j++;
        const seg = cum[j + 1] - cum[j];
        nForArc[a] = (j + (seg > 0 ? (target - cum[j]) / seg : 0)) / M;
    }
    return {
        nForArc,
        ratio,
        inner
    };
}
function DesignStack() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignStack.useEffect": ()=>{
            const stageEl = stage.current;
            const rootEl = root.current;
            if (!stageEl || !rootEl) return;
            const cards = Array.from(stageEl.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card}`));
            const N = cards.length;
            if (!N) return;
            const compactMQ = window.matchMedia("(max-width: 1000px)");
            let Rx = 0;
            let Ry = 0;
            let inner = INNER_WIDE;
            let table = buildArcTable(1, INNER_WIDE);
            const measure = {
                "DesignStack.useEffect.measure": ()=>{
                    const w = stageEl.clientWidth;
                    const h = stageEl.clientHeight;
                    const compact = compactMQ.matches;
                    inner = compact ? INNER_COMPACT : INNER_WIDE;
                    /* the outer ring reaches every edge; on very narrow screens it is
         allowed to overflow horizontally so the orbit still clears the text */ Rx = compact ? Math.max(0.5 * w, 236) : 0.5 * w;
                    Ry = 0.5 * h;
                    const ratio = Ry / Rx;
                    if (Math.abs(ratio - table.ratio) / table.ratio > 0.02 || inner !== table.inner) {
                        table = buildArcTable(ratio, inner);
                    }
                    const cardW = compact ? 52 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(136, 188, Math.min(Rx, Ry) * 0.32);
                    stageEl.style.setProperty("--card-w", `${cardW}px`);
                }
            }["DesignStack.useEffect.measure"];
            /** arc fraction s ∈ [0,1) → spiral parameter n (interpolated; rounding
     *  would quantize the motion into visible steps) */ const arcToN = {
                "DesignStack.useEffect.arcToN": (s)=>{
                    const x = Math.min(K, Math.max(0, s * K));
                    const i = Math.floor(x);
                    const a = table.nForArc[i];
                    const b = table.nForArc[Math.min(i + 1, K)];
                    return a + (b - a) * (x - i);
                }
            }["DesignStack.useEffect.arcToN"];
            const at = {
                "DesignStack.useEffect.at": (n)=>{
                    const ang = n * TURNS * TWO_PI + PHASE;
                    const rFrac = 1 - n * (1 - inner);
                    return {
                        x: Rx * rFrac * Math.cos(ang),
                        y: -Ry * rFrac * Math.sin(ang),
                        rFrac
                    };
                }
            }["DesignStack.useEffect.at"];
            const zSet = cards.map({
                "DesignStack.useEffect.zSet": ()=>-1
            }["DesignStack.useEffect.zSet"]);
            const place = {
                "DesignStack.useEffect.place": (base)=>{
                    for(let i = 0; i < N; i++){
                        const s = (base + i / N) % 1;
                        const n = arcToN(s);
                        const p = at(n);
                        /* fade at both ends of the path */ let o = 1;
                        if (s < FADE_IN) o = s / FADE_IN;
                        else if (s > 1 - FADE_OUT) o = (1 - s) / FADE_OUT;
                        o = Math.max(0, Math.min(1, o));
                        /* smaller toward the center */ const scale = Math.pow(p.rFrac, SCALE_POW);
                        /* bank taken from the true tangent vector — continuous, always upright */ const q = at(Math.min(n + 0.002, 1));
                        const dx = q.x - p.x;
                        const dy = q.y - p.y;
                        const len = Math.hypot(dx, dy) || 1;
                        const lean = LEAN_MAX * (dy / len);
                        const el = cards[i];
                        el.style.transform = `translate3d(${p.x.toFixed(2)}px, ${p.y.toFixed(2)}px, 0) rotate(${lean.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
                        el.style.opacity = o.toFixed(3);
                        const z = Math.round((1 - n) * 100);
                        if (z !== zSet[i]) {
                            el.style.zIndex = String(z);
                            zSet[i] = z;
                        }
                    }
                }
            }["DesignStack.useEffect.place"];
            measure();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) {
                place(0);
                return;
            }
            let base = 0;
            let speedMul = 1;
            let target = 1;
            const tick = {
                "DesignStack.useEffect.tick": (_t, dt)=>{
                    const f = Math.min(dt / 1000, 0.05);
                    speedMul += (target - speedMul) * Math.min(f * 6, 1);
                    base = (base + SPEED * speedMul * f) % 1;
                    place(base);
                }
            }["DesignStack.useEffect.tick"];
            /* the orbit eases down only while a CARD is hovered, so you can read the
       one you reached for; crossing empty stage does nothing */ let hovered = 0;
            const onOver = {
                "DesignStack.useEffect.onOver": (e)=>{
                    if (e.target?.closest?.(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card}`)) {
                        hovered++;
                        target = HOVER_SLOW;
                    }
                }
            }["DesignStack.useEffect.onOver"];
            const onOut = {
                "DesignStack.useEffect.onOut": (e)=>{
                    if (e.target?.closest?.(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card}`)) {
                        hovered = Math.max(0, hovered - 1);
                        if (!hovered) target = 1;
                    }
                }
            }["DesignStack.useEffect.onOut"];
            stageEl.addEventListener("pointerover", onOver);
            stageEl.addEventListener("pointerout", onOut);
            const ro = new ResizeObserver({
                "DesignStack.useEffect": ()=>{
                    measure();
                    place(base);
                }
            }["DesignStack.useEffect"]);
            ro.observe(stageEl);
            let running = false;
            const io = new IntersectionObserver({
                "DesignStack.useEffect": ([entry])=>{
                    if (entry.isIntersecting && !running) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.add(tick);
                        running = true;
                    } else if (!entry.isIntersecting && running) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(tick);
                        running = false;
                    }
                }
            }["DesignStack.useEffect"], {
                rootMargin: "120px"
            });
            io.observe(rootEl);
            place(0);
            return ({
                "DesignStack.useEffect": ()=>{
                    if (running) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(tick);
                    io.disconnect();
                    ro.disconnect();
                    stageEl.removeEventListener("pointerover", onOver);
                    stageEl.removeEventListener("pointerout", onOut);
                }
            })["DesignStack.useEffect"];
        }
    }["DesignStack.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        id: "stack",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glowA,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glowB,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                ref: stage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].center,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "03"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    t("stack.eyebrow")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2,
                                children: [
                                    t("stack.h2"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                        children: t("stack.h2Em")
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                        lineNumber: 273,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lede,
                                children: t("stack.lede")
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count,
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$stack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOLS"].length,
                                    " ",
                                    t("stack.count"),
                                    " · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                        lineNumber: 279,
                                        columnNumber: 49
                                    }, this),
                                    " ",
                                    t("stack.disciplines")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orbit,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$stack$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOLS"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].face,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mark,
                                            children: t.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: t.src,
                                                alt: "",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                                lineNumber: 290,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mono,
                                                style: {
                                                    color: t.color,
                                                    background: `${t.color}14`
                                                },
                                                "aria-hidden": "true",
                                                children: t.mono
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                                lineNumber: 292,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Stack$2f$DesignStack$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                            children: t.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this)
                            }, t.name, false, {
                                fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Stack/DesignStack.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Stack/DesignStack.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_s(DesignStack, "4rR3570/PQmqbWVrC6lBiK6tR60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = DesignStack;
var _c;
__turbopack_context__.k.register(_c, "DesignStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Work/Work.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "award": "Work-module__Nond8G__award",
  "card": "Work-module__Nond8G__card",
  "contribution": "Work-module__Nond8G__contribution",
  "count": "Work-module__Nond8G__count",
  "cover": "Work-module__Nond8G__cover",
  "coverBrand": "Work-module__Nond8G__coverBrand",
  "coverMark": "Work-module__Nond8G__coverMark",
  "coverPhoto": "Work-module__Nond8G__coverPhoto",
  "dot": "Work-module__Nond8G__dot",
  "dotOn": "Work-module__Nond8G__dotOn",
  "dots": "Work-module__Nond8G__dots",
  "eyebrow": "Work-module__Nond8G__eyebrow",
  "foot": "Work-module__Nond8G__foot",
  "h2": "Work-module__Nond8G__h2",
  "headRow": "Work-module__Nond8G__headRow",
  "header": "Work-module__Nond8G__header",
  "hint": "Work-module__Nond8G__hint",
  "inner": "Work-module__Nond8G__inner",
  "lede": "Work-module__Nond8G__lede",
  "meta": "Work-module__Nond8G__meta",
  "metaFoot": "Work-module__Nond8G__metaFoot",
  "open": "Work-module__Nond8G__open",
  "serif": "Work-module__Nond8G__serif",
  "siteChip": "Work-module__Nond8G__siteChip",
  "stage": "Work-module__Nond8G__stage",
  "tags": "Work-module__Nond8G__tags",
  "track": "Work-module__Nond8G__track",
  "work": "Work-module__Nond8G__work",
  "year": "Work-module__Nond8G__year",
});
}),
"[project]/components/sections/Work/Work.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * Featured Work — the curved project track (02_UX_AND_INTERACTIONS.md §3.3).
 * Desktop: the section pins and vertical scroll scrubs the cards along a
 * perspective arc — center card frontal, neighbours rotate away and recede.
 * Touch / reduced motion: a native horizontal snap row, same cards.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/Work/Work.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const SPREAD = 330; /* px between card centers on the arc */ 
/* Scroll px per card. With 14 projects this is the page's longest pin, so
   the step is kept tight — enough for each card to land at centre, without
   turning the section into a corridor. */ const PIN_PER_CARD = 210;
/* two-digit counter — the collection is past nine projects */ const pad = (n)=>String(n).padStart(2, "0");
function Work() {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Work.useEffect": ()=>{
            const el = root.current;
            if (!el) return;
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].matchMedia();
            mm.add("(min-width: 1101px) and (prefers-reduced-motion: no-preference)", {
                "Work.useEffect": ()=>{
                    const cards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card}`);
                    const counter = el.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count}`);
                    const dots = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot}`);
                    const n = cards.length;
                    const render = {
                        "Work.useEffect.render": (p)=>{
                            cards.forEach({
                                "Work.useEffect.render": (card, i)=>{
                                    const d = i - p;
                                    const ad = Math.abs(d);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].set(card, {
                                        x: d * SPREAD,
                                        y: Math.min(ad * ad * 9, 110),
                                        rotationY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(-34, 34, -d * 10),
                                        scale: 1 - Math.min(ad * 0.065, 0.38),
                                        /* Depth is carried by position, scale and rotation — NOT by
               dimming. The cards on screen (roughly ad <= 2) stay fully
               opaque so every cover reads at its true brightness; only
               cards already travelling off the viewport edge fade, and
               only enough to soften the exit. */ autoAlpha: ad <= 2 ? 1 : Math.max(0.55, 1 - (ad - 2) * 0.22),
                                        zIndex: Math.round(100 - ad * 10)
                                    });
                                }
                            }["Work.useEffect.render"]);
                            const active = Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(0, n - 1, p));
                            if (counter) {
                                counter.textContent = `${pad(active + 1)} / ${pad(n)}`;
                            }
                            dots.forEach({
                                "Work.useEffect.render": (dot, i)=>dot.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotOn, i === active)
                            }["Work.useEffect.render"]);
                        }
                    }["Work.useEffect.render"];
                    render(0);
                    /* the Scene's sticky hold does the pinning; this only reads progress
         across the scene's runway (see lib/scene.ts) */ const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sceneScrub"])(el),
                        scrub: 0.65,
                        invalidateOnRefresh: true,
                        onUpdate: {
                            "Work.useEffect.st": (self)=>render(self.progress * (n - 1))
                        }["Work.useEffect.st"]
                    });
                    /* header reveal, once, on pin start */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} > *`, {
                        y: 40,
                        autoAlpha: 0,
                        duration: 0.9,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EASE"].outExpo,
                        stagger: 0.09,
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 70%"
                        }
                    });
                    return ({
                        "Work.useEffect": ()=>st.kill()
                    })["Work.useEffect"];
                }
            }["Work.useEffect"]);
            /* Touch & reduced motion: the snap row needs no JS. The reveal tween that
       used to live here could never run — the snap-row CSS pins the cards with
       `transform: none !important; opacity: 1 !important`, which inline GSAP
       styles cannot beat — so it was dead code that only risked flashing the
       cards through a hidden state. The row simply renders. */ return ({
                "Work.useEffect": ()=>mm.revert()
            })["Work.useEffect"];
        }
    }["Work.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].work,
        id: "work",
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "04"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Work/Work.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            " ",
                            t("work.eyebrow")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Work/Work.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].h2,
                                children: [
                                    t("work.h2a"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/sections/Work/Work.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    t("work.h2b"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serif,
                                        children: t("work.h2Em")
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Work/Work.tsx",
                                        lineNumber: 111,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Work/Work.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lede,
                                children: t("work.lede")
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Work/Work.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Work/Work.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Work/Work.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                            style: {
                                zIndex: 100 - i
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
                                    href: `/work/${p.slug}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cover,
                                            style: p.cover ? {
                                                background: p.cover.bg,
                                                color: p.cover.ink === "light" ? "#fff" : "var(--ink)"
                                            } : undefined,
                                            children: [
                                                p.cover?.src && p.cover.variant === "photo" ? /* his own capture of the built site — full-bleed */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverPhoto,
                                                    src: p.cover.src,
                                                    alt: p.coverLabel,
                                                    style: p.cover.focus ? {
                                                        objectPosition: p.cover.focus
                                                    } : undefined,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this) : p.cover?.src ? /* verified brand mark, sized by its true aspect ratio */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverBrand,
                                                    src: p.cover.src,
                                                    alt: p.coverLabel,
                                                    style: {
                                                        aspectRatio: p.cover.aspect ?? 1
                                                    },
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this) : p.cover?.mark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverMark,
                                                    "aria-label": p.coverLabel,
                                                    children: p.cover.mark
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "▢  ",
                                                        p.coverLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, this),
                                                p.award && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].award,
                                                    children: p.award
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Work/Work.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, p, "title")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contribution,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"])(lang, p, "contribution")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tags,
                                                    children: p.tags.join(" · ").toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaFoot,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].year,
                                                            children: p.year
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Work/Work.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open,
                                                            children: [
                                                                t("work.open"),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/Work/Work.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Work/Work.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                (p.site || p.repo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].siteChip,
                                    href: p.site ? p.site.url : p.repo,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "aria-label": `${p.site ? p.site.label : "GitHub"} ↗`,
                                    children: [
                                        p.site ? p.site.label : "GitHub",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            "aria-hidden": "true",
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Work/Work.tsx",
                                            lineNumber: 184,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Work/Work.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, p.slug, true, {
                            fileName: "[project]/components/sections/Work/Work.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/Work/Work.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Work/Work.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].foot,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].count,
                        children: [
                            "01 / ",
                            pad(__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].length)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Work/Work.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dots,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot} ${i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotOn : ""}`
                            }, p.slug, false, {
                                fileName: "[project]/components/sections/Work/Work.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Work/Work.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                        children: t("work.hint")
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Work/Work.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Work/Work.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Work/Work.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(Work, "QeCfe2rdG634JGQWUzKzs9CzsNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrow": "Button-module__VMVMAW__arrow",
  "btn": "Button-module__VMVMAW__btn",
  "dark": "Button-module__VMVMAW__dark",
  "fill": "Button-module__VMVMAW__fill",
  "ghost": "Button-module__VMVMAW__ghost",
  "label": "Button-module__VMVMAW__label",
  "labelClone": "Button-module__VMVMAW__labelClone",
  "labelStack": "Button-module__VMVMAW__labelStack",
  "labelWrap": "Button-module__VMVMAW__labelWrap",
  "lead": "Button-module__VMVMAW__lead",
  "md": "Button-module__VMVMAW__md",
  "primary": "Button-module__VMVMAW__primary",
  "sm": "Button-module__VMVMAW__sm",
});
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * Design-system Button — the interaction standard for every CTA on the site.
 * Interaction language (recreated from scratch, PillNav as benchmark):
 *   · circular fill expands from the bottom of the pill on hover
 *   · label rolls up, replacement rolls in from below
 *   · optional trailing arrow rotates -45° on hover
 *   · magnetic pull on fine pointers
 * All motion is transform-only (GPU), respects prefers-reduced-motion,
 * and degrades to plain taps on touch devices.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/Button.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Button({ href, children, variant = "primary", size = "md", arrow = false, lead, magnetic = true, className = "", onClick }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Button.useEffect": ()=>{
            const el = ref.current;
            if (!el || !magnetic || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) return;
            if (!window.matchMedia("(pointer: fine)").matches) return;
            const bx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(el, "x", {
                duration: 0.4,
                ease: "power3.out"
            });
            const by = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].quickTo(el, "y", {
                duration: 0.4,
                ease: "power3.out"
            });
            const move = {
                "Button.useEffect.move": (e)=>{
                    const r = el.getBoundingClientRect();
                    bx((e.clientX - r.left - r.width / 2) * 0.18);
                    by((e.clientY - r.top - r.height / 2) * 0.26);
                }
            }["Button.useEffect.move"];
            const leave = {
                "Button.useEffect.leave": ()=>{
                    bx(0);
                    by(0);
                }
            }["Button.useEffect.leave"];
            el.addEventListener("mousemove", move);
            el.addEventListener("mouseleave", leave);
            return ({
                "Button.useEffect": ()=>{
                    el.removeEventListener("mousemove", move);
                    el.removeEventListener("mouseleave", leave);
                }
            })["Button.useEffect"];
        }
    }["Button.useEffect"], [
        magnetic
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        ref: ref,
        href: href,
        onClick: onClick,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant]} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size]} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fill,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            lead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lead,
                children: lead
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 75,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelStack,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Button.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelClone}`,
                            "aria-hidden": "true",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Button.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/Button.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            arrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
                "aria-hidden": "true",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(Button, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/VelocityMarquee.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "copy": "VelocityMarquee-module__2Boapq__copy",
  "item": "VelocityMarquee-module__2Boapq__item",
  "marquee": "VelocityMarquee-module__2Boapq__marquee",
  "outlineText": "VelocityMarquee-module__2Boapq__outlineText",
  "row": "VelocityMarquee-module__2Boapq__row",
  "sep": "VelocityMarquee-module__2Boapq__sep",
  "solidText": "VelocityMarquee-module__2Boapq__solidText",
  "srOnly": "VelocityMarquee-module__2Boapq__srOnly",
  "track": "VelocityMarquee-module__2Boapq__track",
});
}),
"[project]/components/ui/VelocityMarquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VelocityMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/*
 * VelocityMarquee — scroll-velocity marquee, rebuilt from scratch
 * (ReactBits ScrollVelocity as the interaction benchmark).
 *
 * · each row drifts continuously in its own base direction
 * · scrolling accelerates the drift; scrolling up flips the direction
 * · seamless infinite wrap: 4 copies per row, xPercent wrapped in (-25, 0]
 * · transform-only, one shared gsap ticker, reduced-motion → static rows
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/VelocityMarquee.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const COPIES = 4;
function RowCopy({ items, outline }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copy,
        "aria-hidden": "true",
        children: items.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: outline ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outlineText : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].solidText,
                        children: t
                    }, void 0, false, {
                        fileName: "[project]/components/ui/VelocityMarquee.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sep,
                        children: "✦"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/VelocityMarquee.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, t, true, {
                fileName: "[project]/components/ui/VelocityMarquee.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui/VelocityMarquee.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = RowCopy;
function VelocityMarquee({ rows }) {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VelocityMarquee.useEffect": ()=>{
            const el = root.current;
            if (!el || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) return;
            const tracks = Array.from(el.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track}`));
            const state = tracks.map({
                "VelocityMarquee.useEffect.state": (track, i)=>({
                        track,
                        x: 0,
                        /* velocity is TRUE px/s (sign = direction), so both rows read at the
         same calm pace regardless of how wide their content happens to be */ base: rows[i]?.velocity ?? 40,
                        copyPx: 1
                    })
            }["VelocityMarquee.useEffect.state"]);
            const measure = {
                "VelocityMarquee.useEffect.measure": ()=>{
                    state.forEach({
                        "VelocityMarquee.useEffect.measure": (s)=>{
                            s.copyPx = Math.max(1, s.track.scrollWidth / COPIES);
                        }
                    }["VelocityMarquee.useEffect.measure"]);
                }
            }["VelocityMarquee.useEffect.measure"];
            measure();
            const ro = new ResizeObserver(measure);
            ro.observe(el);
            const wrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.wrap(-25, 0);
            let lastY = window.scrollY;
            let lastT = performance.now();
            let boost = 0;
            const tick = {
                "VelocityMarquee.useEffect.tick": ()=>{
                    const now = performance.now();
                    const dt = Math.min((now - lastT) / 1000, 0.05);
                    lastT = now;
                    /* scroll velocity (px/s), heavily smoothed */ const y = window.scrollY;
                    const vRaw = dt > 0 ? (y - lastY) / dt : 0;
                    lastY = y;
                    boost += (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.clamp(-3000, 3000, vRaw) - boost) * 0.1;
                    const dirFromScroll = boost < -40 ? -1 : 1; /* scrolling up reverses */ 
                    /* gentle: scrolling at most doubles the pace */ const accel = 1 + Math.min(Math.abs(boost) / 1400, 1.2);
                    state.forEach({
                        "VelocityMarquee.useEffect.tick": (s)=>{
                            const pxDelta = s.base * dirFromScroll * accel * dt;
                            /* one copy = 25 xPercent of the 4-copy track */ s.x -= pxDelta / s.copyPx * 25;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].set(s.track, {
                                xPercent: wrap(s.x)
                            });
                        }
                    }["VelocityMarquee.useEffect.tick"]);
                }
            }["VelocityMarquee.useEffect.tick"];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.add(tick);
            return ({
                "VelocityMarquee.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].ticker.remove(tick);
                    ro.disconnect();
                }
            })["VelocityMarquee.useEffect"];
        }
    }["VelocityMarquee.useEffect"], [
        rows
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marquee,
        ref: root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].srOnly,
                children: [
                    "Skills: ",
                    rows.flatMap((r)=>r.items).join(", ")
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/VelocityMarquee.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VelocityMarquee$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track,
                        children: Array.from({
                            length: COPIES
                        }).map((_, c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowCopy, {
                                items: row.items,
                                outline: row.outline
                            }, c, false, {
                                fileName: "[project]/components/ui/VelocityMarquee.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ui/VelocityMarquee.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/components/ui/VelocityMarquee.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/VelocityMarquee.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(VelocityMarquee, "/rr7G8WhLICCHRj4HQ5x5ovssB4=");
_c1 = VelocityMarquee;
var _c, _c1;
__turbopack_context__.k.register(_c, "RowCopy");
__turbopack_context__.k.register(_c1, "VelocityMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/content/experience.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Professional & leadership experience — sourced directly from Naveen's
   resume. Reverse chronological: newest first. */ __turbopack_context__.s([
    "ROLES",
    ()=>ROLES
]);
const ROLES = [
    {
        company: "ComedKares Innovation Hub",
        role: "AI/ML Intern",
        type: "Internship",
        location: "Bengaluru, India",
        period: "May – Jun 2026",
        summary: "Built an AI-powered recommendation system that suggests personalised government schemes, using Retrieval-Augmented Generation end to end — from semantic search to a production chatbot.",
        achievements: [
            "Implemented semantic search with Sentence Transformers and FAISS, paired with Groq Llama 3 for context-aware responses",
            "Built the web application's FastAPI backend for real-time chatbot interaction and scalable API communication",
            "Took the system from prototype to a usable, real-time product interface"
        ],
        outcome: "Shipped a working RAG chatbot serving real-time scheme recommendations",
        skills: [
            "RAG",
            "FAISS",
            "Sentence Transformers",
            "FastAPI",
            "Groq Llama 3"
        ],
        color: "#0EA5E9",
        fg: "light"
    },
    {
        company: "MetaMinds 1.0",
        role: "Fest Coordinator",
        type: "Leadership",
        location: "St. Joseph's University, Bengaluru",
        period: "2025 – 2026",
        summary: "Managed end-to-end planning of a two-day inter-collegiate fest and coordinated cross-functional teams to deliver it at scale.",
        achievements: [
            "Owned end-to-end event planning across a two-day fest",
            "Coordinated cross-functional teams covering logistics, content and operations",
            "Delivered an event that drew 1,200+ participants"
        ],
        outcome: "1,200+ participants across a two-day inter-collegiate fest",
        skills: [
            "Event Planning",
            "Cross-functional Coordination",
            "Leadership"
        ],
        color: "#F59E0B",
        fg: "dark"
    },
    {
        company: "National Service Scheme (NSS)",
        role: "Vice President, Treasurer & Camp Incharge",
        type: "Leadership",
        location: "St. Joseph's University, Bengaluru",
        period: "2024 – 2025",
        summary: "Organised a 7-day annual rural camp as NSS Camp Incharge, Vice President and Treasurer, while leading community outreach initiatives and managing volunteer teams.",
        achievements: [
            "Organised and executed a 7-day annual rural camp as Camp Incharge, Vice President and Treasurer",
            "Led community outreach initiatives and managed volunteer teams",
            "Managed financial budgeting, funds allocation, and accounts audits as Treasurer"
        ],
        outcome: "50+ volunteers led; a 7-day rural camp delivered successfully",
        skills: [
            "Team Leadership",
            "Budget Management",
            "Event Incharge",
            "Community Outreach"
        ],
        color: "#16A34A",
        fg: "light"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/content/journey.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* THE JOURNEY — the chapters the light tunnel travels through.
 *
 * SOURCING: every fact here traces to Naveen's resume — programmes,
 * dates, places, roles and outcomes. Nothing biographical is invented.
 *
 * Shape per chapter:
 *   year   — shown large, the anchor
 *   title  — what the chapter is about
 *   place  — where it happened (context line)
 *   story  — what was actually happening, 2–3 sentences
 *   bridge — how it handed over to the next chapter (the transition line)
 */ __turbopack_context__.s([
    "CHAPTERS",
    ()=>CHAPTERS
]);
const CHAPTERS = [
    {
        id: "roots",
        year: "2022",
        title: "Starting with the fundamentals",
        place: "St. Joseph's University · Bengaluru",
        story: "A B.C.A. in Data Analytics, chosen deliberately over a generalist CS degree — three years of learning to read data before writing much code around it.",
        bridge: "The classroom work needed an outlet outside the syllabus."
    },
    {
        id: "leadership",
        year: "2024",
        title: "Leading off the syllabus",
        place: "National Service Scheme · St. Joseph's University",
        story: "Elected President of the university's NSS unit: leading 50+ volunteers through outreach initiatives and managing a successful 7-day rural camp — a full year of organising people, not just data.",
        bridge: "That year of leadership ran alongside, not instead of, the technical track."
    },
    {
        id: "close",
        year: "2025",
        title: "Closing the undergraduate chapter",
        place: "St. Joseph's University · Bengaluru",
        story: "Graduated from the BCA in Data Analytics with a CGPA of 8.7, mastering the foundational mathematics and statistical programming required for high-level data work.",
        bridge: "With the undergraduate foundation complete, it was time to step into postgraduate specialisation."
    },
    {
        id: "msc",
        year: "2025",
        title: "Moving from analytics to engineering",
        place: "St. Joseph's University · Bengaluru",
        story: "Began an M.Sc. in Big Data Analytics (expected 2027, current SGPA 8.71) and stepped up as Fest Coordinator for MetaMinds 1.0 — leading the end-to-end planning of a 2-day intercollegiate fest for 1,200+ participants.",
        bridge: "Balancing master's studies and scale event coordination proved the readiness for real-world engineering environments."
    },
    {
        id: "internship",
        year: "2026",
        title: "Production RAG for real users",
        place: "ComedKares Innovation Hub · Bengaluru",
        story: "AI/ML Intern building a RAG-based recommendation system for government schemes — semantic search with Sentence Transformers and FAISS, Groq Llama 3 for responses, and a FastAPI backend serving a real-time chatbot.",
        bridge: "The internship confirmed the direction: production systems, not just notebooks."
    },
    {
        id: "now",
        year: "2026",
        title: "Building the portfolio that gets the interview",
        place: "Bengaluru, India",
        story: "Now building production-grade data engineering projects end to end — an event-driven Delta Lake lakehouse on AWS, a real-time retail streaming platform, an LLM response-ranking system, and a 214K-record terrorism analysis — while targeting data engineering roles at MNCs.",
        bridge: "This portfolio is where that work lives."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/content/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Featured projects — single source of truth for the Work section
   and the /work/[slug] case-study routes. Sourced directly from
   Naveen's resume. No live-site or repo links are included until
   verified real URLs are supplied — cards render typographic covers
   in the meantime. */ __turbopack_context__.s([
    "PROJECTS",
    ()=>PROJECTS
]);
const PROJECTS = [
    /* ─────────────── 1 · AWS EVENT-DRIVEN LAKEHOUSE ─────────────── */ {
        slug: "aws-event-driven-lakehouse",
        title: "Production-Grade Event-Driven Data Lakehouse on AWS",
        tags: [
            "Data Engineering",
            "Streaming",
            "AWS"
        ],
        year: "2026",
        oneLiner: "A real-time e-commerce lakehouse — Kafka-Spark streaming into a Bronze-Silver-Gold Delta Lake on S3, orchestrated and deployed end to end.",
        contribution: "Built the full pipeline solo — event generation, streaming, lakehouse layers and orchestration.",
        coverLabel: "AWS EVENT-DRIVEN LAKEHOUSE",
        cover: {
            bg: "#232F3E",
            ink: "light",
            mark: "AWS"
        },
        study: {
            role: "Data Engineer (Solo Project)",
            timeline: "2026",
            context: "Built to simulate a production e-commerce data platform: continuous event generation feeding a Kafka–Spark streaming layer into a governed lakehouse on AWS.",
            problem: "Raw event streams are noisy, out-of-order and duplicated — a usable lakehouse needs validation, deduplication and correctness guarantees before the data reaches analytics.",
            process: [
                {
                    title: "Event generation & ingestion",
                    body: "Simulated real-time e-commerce order events and streamed them through Kafka into Spark Structured Streaming."
                },
                {
                    title: "Streaming reliability",
                    body: "Added validation, watermarking, deduplication, checkpointing and windowing so the stream stayed correct under late and out-of-order events."
                },
                {
                    title: "Lakehouse layers",
                    body: "Landed data through Bronze, Silver and Gold Delta Lake layers on S3 with incremental processing and reliable updates."
                }
            ],
            decisions: [
                {
                    title: "Delta Lake over plain Parquet",
                    why: "Needed ACID upserts and reliable incremental updates across layers, not just append-only files."
                },
                {
                    title: "Airflow for orchestration",
                    why: "Batch and streaming jobs both needed scheduling, retries and dependency management in one place."
                }
            ],
            outcomes: [
                "Bronze–Silver–Gold Delta Lake pipeline running on S3",
                "Kafka–Spark streaming layer handling validation, dedup, watermarking and windowing",
                "Orchestration, analytics and deployment integrated via Airflow, Glue, Athena, Power BI, Terraform and Docker"
            ],
            reflection: "This project pushed me to treat correctness — not just throughput — as the real design constraint: watermarking and deduplication logic mattered more than simply getting data moving fast."
        }
    },
    /* ─────────────── 2 · LLM RANKING SYSTEM ─────────────── */ {
        slug: "llm-ranking-system",
        title: "LLM Ranking System",
        tags: [
            "Machine Learning",
            "NLP",
            "Explainability"
        ],
        year: "2026",
        oneLiner: "A LightGBM model that ranks and explains LLM responses — built to automate best-response selection with transparent reasoning.",
        contribution: "Designed the feature set, trained the ranking model, and built the explainability and selection interface.",
        coverLabel: "LLM RANKING SYSTEM",
        cover: {
            bg: "#141414",
            ink: "light",
            mark: "LLM"
        },
        study: {
            role: "ML Engineer (Solo Project)",
            timeline: "2026",
            context: "Comparing multiple LLM responses to the same prompt needed a systematic, explainable way to pick the best one — not just eyeballing outputs.",
            problem: "Manual response comparison doesn't scale and gives no transparent reason for why one answer beat another.",
            process: [
                {
                    title: "Feature engineering",
                    body: "Engineered 10+ features per response plus prompt classification to feed the ranking model."
                },
                {
                    title: "Ranking model",
                    body: "Trained a LightGBM model to rank candidate responses against each other."
                },
                {
                    title: "Explainability & UI",
                    body: "Integrated SHAP for transparent ranking decisions and built an interface with keyword highlighting and automated best-response selection."
                }
            ],
            decisions: [
                {
                    title: "LightGBM over a black-box ranker",
                    why: "Needed a model fast enough to rank in real time while still supporting SHAP explainability."
                },
                {
                    title: "Prompt classification as a feature",
                    why: "Different prompt types (factual, creative, coding) needed different signals to judge response quality."
                }
            ],
            outcomes: [
                "Ranking model trained on 10+ engineered features",
                "SHAP-based explainability for every ranking decision",
                "Automated best-response selection with keyword-highlighted evidence"
            ],
            reflection: "The hardest part wasn't the model — it was defining features that actually captured 'better,' since that judgment is subjective by nature."
        }
    },
    /* ─────────────── 3 · REAL-TIME RETAIL PLATFORM ─────────────── */ {
        slug: "realtime-retail-platform",
        title: "Real-Time Retail Data Engineering Platform",
        tags: [
            "Streaming",
            "Kafka",
            "Data Marts"
        ],
        year: "2026",
        oneLiner: "A Kafka–PySpark streaming pipeline turning live e-commerce order events into Gold-layer data marts for revenue, orders and operations.",
        contribution: "Built the streaming pipeline and designed the Gold-layer data marts end to end.",
        coverLabel: "REAL-TIME RETAIL PLATFORM",
        cover: {
            bg: "#1B2A4A",
            ink: "light",
            mark: "RTL"
        },
        study: {
            role: "Data Engineer (Solo Project)",
            timeline: "2026",
            context: "A retail business needs near real-time visibility into orders, revenue and payments — not next-day batch reports.",
            problem: "Raw order events needed cleansing, deduplication and transformation before they could support reliable business-facing metrics.",
            process: [
                {
                    title: "Streaming ingestion",
                    body: "Built a Kafka–PySpark streaming pipeline for real-time e-commerce order events."
                },
                {
                    title: "Bronze–Silver–Gold layers",
                    body: "Implemented validation, deduplication, cleansing and transformation stages across the three layers."
                },
                {
                    title: "Gold data marts",
                    body: "Developed Gold data marts for revenue, orders, payments, products, states and operational KPIs."
                }
            ],
            decisions: [
                {
                    title: "Parquet for the Gold layer",
                    why: "Needed a columnar, query-efficient format for Power BI to read directly."
                },
                {
                    title: "Splitting marts by business domain",
                    why: "Kept each mart focused and query-fast instead of one wide, slow table."
                }
            ],
            outcomes: [
                "Real-time Kafka–PySpark streaming pipeline in production shape",
                "Gold data marts covering revenue, orders, payments, products and states",
                "Operational KPIs available for Power BI reporting"
            ],
            reflection: "Designing the Gold layer taught me that a data engineer's real customer is the person building the dashboard on top — the schema has to make their job easy."
        }
    },
    /* ─────────────── 4 · GLOBAL TERRORISM ANALYSIS ─────────────── */ {
        slug: "global-terrorism-analysis",
        title: "Global Terrorism Analysis (1970–2021)",
        tags: [
            "Data Analysis",
            "Geospatial",
            "Python"
        ],
        year: "2025",
        oneLiner: "Cleaned and analysed 214K+ terrorism records into a 198,280-row analysis-ready dataset, with geospatial visualisations of regional hotspots and attack patterns.",
        contribution: "Handled the full analysis pipeline — cleaning, feature engineering, geospatial visualisation and trend analysis.",
        coverLabel: "GLOBAL TERRORISM ANALYSIS",
        cover: {
            bg: "#3A0D0D",
            ink: "light",
            mark: "GTD"
        },
        study: {
            role: "Data Analyst (Solo Project)",
            timeline: "2025",
            context: "The Global Terrorism Database spans five decades and 214K+ incidents — too large and inconsistent to analyse without significant cleaning.",
            problem: "Raw records had missing fields and inconsistent geography, with no ready structure for trend or hotspot analysis.",
            process: [
                {
                    title: "Cleaning & preparation",
                    body: "Processed 214K+ raw records down to a 198,280-row analysis-ready dataset."
                },
                {
                    title: "Geospatial analysis",
                    body: "Built geospatial visualisations with Cartopy to map regional hotspots."
                },
                {
                    title: "Trend & pattern analysis",
                    body: "Used Pandas and Scikit-learn to identify attack pattern trends across regions and decades."
                }
            ],
            decisions: [
                {
                    title: "Cartopy over a BI map tool",
                    why: "Needed full control over projection and layering for a 50-year, multi-region dataset."
                },
                {
                    title: "Keeping the cleaned dataset as a deliverable",
                    why: "A reusable, analysis-ready dataset was as valuable as any single chart built on top of it."
                }
            ],
            outcomes: [
                "198,280-row analysis-ready dataset from 214K+ raw records",
                "Geospatial visualisations of regional attack hotspots",
                "Trend analysis spanning five decades"
            ],
            reflection: "Most of the real work was invisible — cleaning and structuring the data mattered more than any single visualisation built on top of it."
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/content/stack.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* My Data Stack — tools shown in the spiral orbit.
   `src` uses a real logo from /public/images/logos when we have one;
   otherwise a brand-tinted monogram mark keeps the set visually uniform. */ __turbopack_context__.s([
    "TOOLS",
    ()=>TOOLS
]);
const TOOLS = [
    /* — Languages & Data — */ {
        name: "Python",
        group: "Languages & Data",
        mono: "Py",
        color: "#3776AB"
    },
    {
        name: "SQL",
        group: "Languages & Data",
        mono: "SQ",
        color: "#4479A1"
    },
    {
        name: "Pandas",
        group: "Languages & Data",
        mono: "Pd",
        color: "#150458"
    },
    {
        name: "NumPy",
        group: "Languages & Data",
        mono: "Np",
        color: "#4D77CF"
    },
    {
        name: "MySQL",
        group: "Languages & Data",
        mono: "My",
        color: "#4479A1"
    },
    /* — Big Data & Streaming — */ {
        name: "Spark",
        group: "Big Data & Streaming",
        mono: "Sp",
        color: "#E25A1C"
    },
    {
        name: "PySpark",
        group: "Big Data & Streaming",
        mono: "PS",
        color: "#E25A1C"
    },
    {
        name: "Kafka",
        group: "Big Data & Streaming",
        mono: "Kf",
        color: "#231F20"
    },
    {
        name: "Airflow",
        group: "Big Data & Streaming",
        mono: "Af",
        color: "#017CEE"
    },
    {
        name: "Hadoop",
        group: "Big Data & Streaming",
        mono: "Hd",
        color: "#66CCFF"
    },
    {
        name: "Hive",
        group: "Big Data & Streaming",
        mono: "Hv",
        color: "#FDB813"
    },
    /* — Cloud (AWS) — */ {
        name: "EC2",
        group: "Cloud (AWS)",
        mono: "E2",
        color: "#FF9900"
    },
    {
        name: "S3",
        group: "Cloud (AWS)",
        mono: "S3",
        color: "#569A31"
    },
    {
        name: "Redshift",
        group: "Cloud (AWS)",
        mono: "Rs",
        color: "#8C4FFF"
    },
    {
        name: "Glue",
        group: "Cloud (AWS)",
        mono: "Gl",
        color: "#8C4FFF"
    },
    {
        name: "EMR",
        group: "Cloud (AWS)",
        mono: "Em",
        color: "#8C4FFF"
    },
    {
        name: "Lambda",
        group: "Cloud (AWS)",
        mono: "Lm",
        color: "#FF9900"
    },
    /* — DevOps & Tools — */ {
        name: "Docker",
        group: "DevOps & Tools",
        mono: "Dk",
        color: "#2496ED"
    },
    {
        name: "Kubernetes",
        group: "DevOps & Tools",
        mono: "K8",
        color: "#326CE5"
    },
    {
        name: "Git",
        group: "DevOps & Tools",
        mono: "Gt",
        color: "#F05032"
    },
    {
        name: "GitHub",
        group: "DevOps & Tools",
        mono: "GH",
        color: "#181717"
    },
    {
        name: "Power BI",
        group: "DevOps & Tools",
        mono: "BI",
        color: "#F2C811"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/scene.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Scroll range for a section held inside a Scene.
 *
 * A Scene renders two siblings: a sticky `[data-scene]` hold, then a
 * `[data-runway]` spacer that owns the scene's extra scroll distance.
 *
 * A scroll-driven interior CANNOT trigger off the section itself: the section
 * lives inside the sticky hold, so once it sticks its measured position stops
 * tracking the document and ScrollTrigger resolves start/end against a frozen
 * box — progress jams at 1. The runway is in normal flow, so it is the honest
 * ruler for "how far through this scene are we".
 *
 * With the runway as trigger:
 *   start "top bottom"   → the instant the hold sticks
 *   end   "bottom bottom" → exactly one runway later
 *
 * so progress runs 0→1 across precisely the scene's runway, and is scrubbable
 * at every pixel. Sections without a runway fall back to their own box.
 */ __turbopack_context__.s([
    "sceneScrub",
    ()=>sceneScrub
]);
function sceneScrub(el) {
    const hold = el.closest("[data-scene]");
    const next = hold?.nextElementSibling ?? null;
    const runway = next instanceof HTMLElement && next.hasAttribute("data-runway") ? next : null;
    return runway ? {
        trigger: runway,
        start: "top bottom",
        end: "bottom bottom"
    } : {
        trigger: el,
        start: "top top",
        end: "bottom top"
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_15fo8hb._.js.map