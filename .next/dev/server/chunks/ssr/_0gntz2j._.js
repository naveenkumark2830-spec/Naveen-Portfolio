module.exports = [
"[project]/app/work/[slug]/CaseView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* Client half of the case study. The route stays a server component so
   generateStaticParams / generateMetadata keep working; everything the
   reader sees lives here, where the language context is available.

   The English study is the base record and the French one is layered over
   it, so a partially translated study still renders — untranslated fields
   fall through to English instead of disappearing. */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/work/[slug]/case.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
function CaseView({ slug }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].find((p)=>p.slug === slug);
    if (!project) return null; /* the server component already called notFound() */ 
    const study = project.study;
    const tags = project.tags;
    const idx = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].indexOf(project);
    const next = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"][(idx + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#work",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].back,
                        children: t("case.back")
                    }, void 0, false, {
                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barRight,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                            children: [
                                "NAVEEN",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                    lineNumber: 36,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/work/[slug]/CaseView.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrap,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].kicker,
                                children: [
                                    t("case.kicker"),
                                    " · ",
                                    project.year,
                                    project.award ? ` · ${project.award}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].oneLiner,
                                children: project.oneLiner
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].meta,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.role")
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: study.role
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.timeline")
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: study.timeline
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.focus")
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: tags.join(" · ")
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    project.site && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.site")
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].siteLink,
                                                    href: project.site.url,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: [
                                                        project.site.label,
                                                        " ↗"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    project.repo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("case.repo")
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].siteLink,
                                                    href: project.repo,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "GitHub ↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            project.cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cover,
                                style: {
                                    background: project.cover.bg,
                                    color: project.cover.ink === "light" ? "#fff" : "var(--ink)"
                                },
                                children: project.cover.src && project.cover.variant === "photo" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].coverPhoto,
                                    src: project.cover.src,
                                    alt: project.coverLabel,
                                    style: project.cover.focus ? {
                                        objectPosition: project.cover.focus
                                    } : undefined
                                }, void 0, false, {
                                    fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this) : project.cover.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].coverBrand,
                                    src: project.cover.src,
                                    alt: project.coverLabel,
                                    style: {
                                        aspectRatio: project.cover.aspect ?? 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].coverMark,
                                    children: project.cover.mark
                                }, void 0, false, {
                                    fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cover,
                                children: [
                                    "▢  ",
                                    project.coverLabel,
                                    " — ",
                                    t("case.cover")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.context")
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                                children: study.context
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.problem")
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].problem,
                                children: study.problem
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.process")
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].steps,
                                children: study.process.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].step,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepN,
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: s.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: s.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.decisions")
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].decisions,
                                children: study.decisions.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].decision,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: d.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: d.why
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.outcome")
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].outcomes,
                                children: study.outcomes.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].outcome,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "✦"
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            o
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            study.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].note,
                                children: study.note
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 185,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secLabel,
                                children: t("case.reflection")
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflection,
                                children: [
                                    "“",
                                    study.reflection,
                                    "”"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footNav,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#work",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].back,
                                children: t("case.all")
                            }, void 0, false, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/work/${next.slug}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$work$2f5b$slug$5d2f$case$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nextLink,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: t("case.next")
                                    }, void 0, false, {
                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            next.title,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                                lineNumber: 202,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/[slug]/CaseView.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/work/[slug]/CaseView.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/work/[slug]/CaseView.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/work/[slug]/case.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "back": "case-module__ctDyzG__back",
  "bar": "case-module__ctDyzG__bar",
  "barRight": "case-module__ctDyzG__barRight",
  "body": "case-module__ctDyzG__body",
  "cover": "case-module__ctDyzG__cover",
  "coverBrand": "case-module__ctDyzG__coverBrand",
  "coverMark": "case-module__ctDyzG__coverMark",
  "coverPhoto": "case-module__ctDyzG__coverPhoto",
  "decision": "case-module__ctDyzG__decision",
  "decisions": "case-module__ctDyzG__decisions",
  "footNav": "case-module__ctDyzG__footNav",
  "hero": "case-module__ctDyzG__hero",
  "kicker": "case-module__ctDyzG__kicker",
  "logo": "case-module__ctDyzG__logo",
  "meta": "case-module__ctDyzG__meta",
  "nextLink": "case-module__ctDyzG__nextLink",
  "note": "case-module__ctDyzG__note",
  "oneLiner": "case-module__ctDyzG__oneLiner",
  "outcome": "case-module__ctDyzG__outcome",
  "outcomes": "case-module__ctDyzG__outcomes",
  "page": "case-module__ctDyzG__page",
  "problem": "case-module__ctDyzG__problem",
  "reflection": "case-module__ctDyzG__reflection",
  "rise": "case-module__ctDyzG__rise",
  "secLabel": "case-module__ctDyzG__secLabel",
  "section": "case-module__ctDyzG__section",
  "siteLink": "case-module__ctDyzG__siteLink",
  "step": "case-module__ctDyzG__step",
  "stepN": "case-module__ctDyzG__stepN",
  "steps": "case-module__ctDyzG__steps",
  "title": "case-module__ctDyzG__title",
  "wrap": "case-module__ctDyzG__wrap",
});
}),
"[project]/content/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=_0gntz2j._.js.map