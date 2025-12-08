(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLogoutModal, setShowLogoutModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = async ()=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            if (error) {
                alert("Logout error:", error);
                return;
            }
            sessionStorage.removeItem("fintrack_visited");
            sessionStorage.removeItem("supabase.auth.token");
            localStorage.removeItem("supabase.auth.token");
            setShowLogoutModal(false);
            router.push("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full flex items-center z-1000 bg-[#382935] fixed justify-between whitespace-nowrap  border-solid  px-4 py-3 sm:px-6 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center  gap-4 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-auto flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/no background/whitelogo.svg",
                                    alt: "FinTrack",
                                    width: 40,
                                    height: 40
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbar.js",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white text-xl font-bold leading-tight tracking-[-0.015em] md:text-xl",
                                children: "FinTrack"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbar.js",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Navbar.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex flex-1 justify-end gap-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex items-center gap-9",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-white text-lg font-medium leading-normal hover:text-lightText transition-colors",
                                    href: "/pages/dashboard",
                                    children: "Wallet"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-white text-lg font-medium leading-normal hover:text-lightText transition-colors",
                                    href: "/pages/dashboard/transactions",
                                    children: "Transactions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-white text-lg font-medium leading-normal hover:text-lightText transition-colors",
                                    href: "/pages/dashboard/budget",
                                    children: "Budget"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-white text-lg font-medium leading-normal hover:text-lightText transition-colors",
                                    href: "/pages/dashboard/goal",
                                    children: "Goal"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowLogoutModal(true),
                                    className: "flex min-w-[84px] cursor-pointer items-center justify-center outline-0 rounded-lg h-10 px-4 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#8a156f]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navbar.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleMenu,
                            className: "text-white p-2 rounded-lg hover:bg-[#382935] transition-colors",
                            "aria-label": "Toggle menu",
                            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18 6 6 18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m6 6 12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Navbar.js",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "4",
                                        x2: "20",
                                        y1: "12",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "4",
                                        x2: "20",
                                        y1: "6",
                                        y2: "6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "4",
                                        x2: "20",
                                        y1: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Navbar.js",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navbar.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Navbar.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden fixed inset-0 bg-black/50 z-40",
                        onClick: ()=>setIsMenuOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navbar.js",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden fixed top-0 right-0 h-full w-1/2 max-w-xs bg-[#382935] border-l border-[#523d4c] z-50 shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "text-white p-2 rounded-lg hover:bg-[#382935] transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 6 6 18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Navbar.js",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m6 6 12 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Navbar.js",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "flex flex-col space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-white text-lg font-medium leading-normal hover:text-lightText transition-colors",
                                            href: "/pages/dashboard",
                                            children: "Wallet"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-white text-lg font-medium leading-normal hover:text-lightText transition-colors",
                                            href: "/pages/dashboard/transactions",
                                            children: "Transactions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-white text-lg font-medium leading-normal hover:text-lightText transition-colors",
                                            href: "/pages/dashboard/reports",
                                            children: "Reports"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-white text-lg font-medium leading-normal hover:text-lightText transition-colors",
                                            href: "/pages/dashboard/budget",
                                            children: "Budget"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-white text-lg font-medium leading-normal hover:text-lightText transition-colors",
                                            href: "/pages/dashboard/goal",
                                            children: "Goal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsMenuOpen(false);
                                                setShowLogoutModal(true);
                                            },
                                            className: "flex w-full cursor-pointer items-center justify-center outline-0 rounded-lg h-12 bg-[#9c167f] text-white text-lg font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#8a156f] mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Navbar.js",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbar.js",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navbar.js",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            showLogoutModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#261c23] rounded-lg p-6 max-w-md w-full border border-[#523d4c]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-12 h-12 mb-4 text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Navbar.js",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "16,17 21,12 16,7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Navbar.js",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "21",
                                                y1: "12",
                                                x2: "9",
                                                y2: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Navbar.js",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Navbar.js",
                                        lineNumber: 219,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-xl font-bold mb-2",
                                    children: "Confirm Logout"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#b79eb0]",
                                    children: "Are you sure you want to log out?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 217,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#9c167f] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-[#8a156f] transition-colors",
                                    children: "Yes, Logout"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowLogoutModal(false),
                                    className: "flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#382935] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-[#2d212a] transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.js",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navbar.js",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Navbar.js",
                    lineNumber: 216,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Navbar.js",
                lineNumber: 215,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "qLsL/TRxzSO0B7PRoQ02xyM/6tY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/budget/route.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBudget",
    ()=>createBudget,
    "createMultipleBudgets",
    ()=>createMultipleBudgets,
    "deleteBudget",
    ()=>deleteBudget,
    "getBudgets",
    ()=>getBudgets,
    "updateBudget",
    ()=>updateBudget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
;
async function getBudgets(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("budgets")// .select(`*, categories(*)`)
    .select("*").eq("user_id", userId);
    return {
        data,
        error
    };
}
async function createBudget(budgetData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("budgets").insert([
        budgetData
    ]).select();
    return {
        data,
        error
    };
}
async function createMultipleBudgets(budgetsArray) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("budgets").insert(budgetsArray).select();
    return {
        data,
        error
    };
}
async function updateBudget(budgetId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("budgets").update(updates).eq("budget_id", budgetId).select();
    return {
        data,
        error
    };
}
async function deleteBudget(budgetId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("budgets").delete().eq("budget_id", budgetId);
    return {
        error
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/budget-service.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BudgetService",
    ()=>BudgetService,
    "budgetService",
    ()=>budgetService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/budget/route.js [app-client] (ecmascript)");
;
class BudgetService {
    async getBudgets(userId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBudgets"])(userId);
            return result;
        } catch (error) {
            console.error("Error fetching budgets:", error);
            return {
                data: null,
                error
            };
        }
    }
    async createBudget(budgetData) {
        try {
            if (!budgetData.user_id || !budgetData.budget_name || !budgetData.amount) {
                throw new Error("User ID, budget_name, and amount are required");
            }
            if (budgetData.amount <= 0) {
                throw new Error("Budget amount must be greater than 0");
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBudget"])(budgetData);
            return result;
        } catch (error) {
            console.error("Error creating budget:", error);
            return {
                data: null,
                error
            };
        }
    }
    async createMultipleBudgets(budgetsArray) {
        try {
            for (const budget of budgetsArray){
                if (!budget.user_id || !budget.budget_name || !budget.amount) {
                    throw new Error("All budgets must have user_id, budget_name, and amount");
                }
                if (budget.amount <= 0) {
                    throw new Error("All budget amounts must be greater than 0");
                }
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMultipleBudgets"])(budgetsArray);
            return result;
        } catch (error) {
            console.error("Error creating multiple budgets:", error);
            return {
                data: null,
                error
            };
        }
    }
    async updateBudget(budgetId, updates) {
        try {
            console.log("Service: Updating budget", budgetId, updates);
            if (!budgetId) {
                throw new Error("Budget ID is required");
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateBudget"])(budgetId, updates);
            console.log("Service: Update result", result);
            if (result.error) {
                console.error("Service: Update failed:", result.error);
                throw result.error;
            }
            return result;
        } catch (error) {
            console.error("Service: Error updating budget:", error);
            throw error;
        }
    }
    async deleteBudget(budgetId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$budget$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteBudget"])(budgetId);
            return result;
        } catch (error) {
            console.error("Error deleting budget:", error);
            return {
                error
            };
        }
    }
}
const budgetService = new BudgetService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useBudget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "budgetKeys",
    ()=>budgetKeys,
    "useBudget",
    ()=>useBudget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/budget-service.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const budgetKeys = {
    all: [
        "budgets"
    ],
    lists: ()=>[
            ...budgetKeys.all,
            "list"
        ],
    list: (filters)=>[
            ...budgetKeys.lists(),
            {
                filters
            }
        ],
    details: ()=>[
            ...budgetKeys.all,
            "detail"
        ],
    detail: (id)=>[
            ...budgetKeys.details(),
            id
        ]
};
const useBudget = ()=>{
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const getBudgets = (userId)=>{
        _s1();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: budgetKeys.list({
                userId
            }),
            queryFn: {
                "useBudget.getBudgets.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["budgetService"].getBudgets(userId)
            }["useBudget.getBudgets.useQuery"],
            enabled: !!userId,
            staleTime: 2 * 60 * 1000
        });
    };
    _s1(getBudgets, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
        ];
    });
    const createBudgetMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["budgetService"].createBudget,
        onSuccess: {
            "useBudget.useMutation[createBudgetMutation]": (result)=>{
                if (result.data) {
                    queryClient.invalidateQueries({
                        queryKey: budgetKeys.lists()
                    });
                }
            }
        }["useBudget.useMutation[createBudgetMutation]"],
        onError: {
            "useBudget.useMutation[createBudgetMutation]": (error)=>{
                console.error("Error creating budget:", error);
            }
        }["useBudget.useMutation[createBudgetMutation]"]
    });
    const createMultipleBudgetsMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["budgetService"].createMultipleBudgets,
        onSuccess: {
            "useBudget.useMutation[createMultipleBudgetsMutation]": (result)=>{
                if (result.data) {
                    queryClient.invalidateQueries({
                        queryKey: budgetKeys.lists()
                    });
                }
            }
        }["useBudget.useMutation[createMultipleBudgetsMutation]"]
    });
    const updateBudgetMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useBudget.useMutation[updateBudgetMutation]": (param)=>{
                let { budgetId, updates } = param;
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["budgetService"].updateBudget(budgetId, updates);
            }
        }["useBudget.useMutation[updateBudgetMutation]"],
        onSuccess: {
            "useBudget.useMutation[updateBudgetMutation]": (result, variables)=>{
                if (result.data) {
                    queryClient.setQueryData(budgetKeys.lists(), {
                        "useBudget.useMutation[updateBudgetMutation]": (old)=>old === null || old === void 0 ? void 0 : old.map({
                                "useBudget.useMutation[updateBudgetMutation]": (budget)=>budget.id === variables.budgetId ? result.data[0] : budget
                            }["useBudget.useMutation[updateBudgetMutation]"])
                    }["useBudget.useMutation[updateBudgetMutation]"]);
                }
            }
        }["useBudget.useMutation[updateBudgetMutation]"]
    });
    const deleteBudgetMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$budget$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["budgetService"].deleteBudget,
        onSuccess: {
            "useBudget.useMutation[deleteBudgetMutation]": (result, variables)=>{
                queryClient.setQueryData(budgetKeys.lists(), {
                    "useBudget.useMutation[deleteBudgetMutation]": (old)=>old === null || old === void 0 ? void 0 : old.filter({
                            "useBudget.useMutation[deleteBudgetMutation]": (budget)=>budget.id !== variables
                        }["useBudget.useMutation[deleteBudgetMutation]"])
                }["useBudget.useMutation[deleteBudgetMutation]"]);
            }
        }["useBudget.useMutation[deleteBudgetMutation]"]
    });
    const createBudget = (budgetData)=>{
        return createBudgetMutation.mutateAsync(budgetData);
    };
    const createMultipleBudgets = (budgetsArray)=>{
        return createMultipleBudgetsMutation.mutateAsync(budgetsArray);
    };
    const updateBudget = (budgetId, updates)=>{
        return updateBudgetMutation.mutateAsync({
            budgetId,
            updates
        });
    };
    const deleteBudget = (budgetId)=>{
        return deleteBudgetMutation.mutateAsync(budgetId);
    };
    const clearError = ()=>{
        createBudgetMutation.reset();
        createMultipleBudgetsMutation.reset();
        updateBudgetMutation.reset();
        deleteBudgetMutation.reset();
    };
    return {
        // Query methods
        getBudgets,
        // Mutation methods
        createBudget,
        createMultipleBudgets,
        updateBudget,
        deleteBudget,
        clearError,
        mutations: {
            createBudget: createBudgetMutation,
            createMultipleBudgets: createMultipleBudgetsMutation,
            updateBudget: updateBudgetMutation,
            deleteBudget: deleteBudgetMutation
        }
    };
};
_s(useBudget, "S1j8snNiaAbG4PnEdzuNcp2AiIU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/auth/route.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut,
    "signUp",
    ()=>signUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
;
async function signUp(email, password, userData) {
    try {
        const { data: authData, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: userData.firstName,
                    last_name: userData.lastName
                }
            }
        });
        if (authError) {
            return {
                data: null,
                error: authError
            };
        }
        if (authData.user) {
            const { data: profileResult, error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").insert([
                {
                    user_id: authData.user.id,
                    first_name: userData.firstName,
                    last_name: userData.lastName,
                    email: email
                }
            ]).select();
            if (profileError) {
                console.warn("Profile creation had issues, but auth user created:", profileError);
                return {
                    data: {
                        user: authData.user,
                        profileCreated: false
                    },
                    error: null
                };
            }
            return {
                data: {
                    user: authData.user,
                    profile: profileResult[0],
                    profileCreated: true
                },
                error: null
            };
        }
        return {
            data: authData,
            error: null
        };
    } catch (error) {
        console.error("Signup error:", error);
        return {
            data: null,
            error
        };
    }
}
async function signIn(email, password) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
        email,
        password
    });
    return {
        data,
        error
    };
}
async function signOut() {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
    return {
        error
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/auth-service.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthService",
    ()=>AuthService,
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/auth/route.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
;
;
class AuthService {
    async signUp(userData) {
        var _userData_firstName, _userData_lastName;
        if (!((_userData_firstName = userData.firstName) === null || _userData_firstName === void 0 ? void 0 : _userData_firstName.trim()) || !((_userData_lastName = userData.lastName) === null || _userData_lastName === void 0 ? void 0 : _userData_lastName.trim())) {
            throw new Error("First name and last name are required");
        }
        if (userData.password !== userData.confirmPassword) {
            throw new Error("Passwords do not match");
        }
        if (userData.password.length < 6) {
            throw new Error("Password must be at least 6 characters");
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signUp"])(userData.email, userData.password, {
            firstName: userData.firstName,
            lastName: userData.lastName
        });
        return result;
    }
    async signIn(credentials) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password
        });
        return {
            data,
            error
        };
    }
    async signOut() {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])();
    }
}
const authService = new AuthService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/onboarding-service.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnBoardingService",
    ()=>OnBoardingService,
    "onBoardingService",
    ()=>onBoardingService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
;
class OnBoardingService {
    async checkOnboardingStatus(userId) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("is_onboarded").eq("user_id", userId).single();
            if (error) {
                console.error("Error checking onboarding status:", error);
                return {
                    isOnboarded: false,
                    error
                };
            }
            return {
                isOnboarded: (data === null || data === void 0 ? void 0 : data.is_onboarded) || false,
                error: null
            };
        } catch (error) {
            console.error("Exception checking onboarding status:", error);
            return {
                isOnboarded: false,
                error
            };
        }
    }
    async markAsOnboarded(userId) {
        try {
            console.log("🔧 DEBUG: Attempting to mark user as onboarded, user_id:", userId);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").update({
                is_onboarded: true
            }).eq("user_id", userId).select().single();
            if (error) {
                console.error("❌ Error marking user as onboarded:", error);
                return {
                    success: false,
                    error
                };
            }
            console.log("✅ Successfully marked user as onboarded, data:", data);
            return {
                success: true,
                data,
                error: null
            };
        } catch (error) {
            console.error("❌ Exception marking user as onboarded:", error);
            return {
                success: false,
                error
            };
        }
    }
    async getOnboardingProgress(userId) {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("is_onboarded").eq("user_id", userId).single();
            if (error) {
                return {
                    isOnboarded: false,
                    error
                };
            }
            return {
                isOnboarded: (data === null || data === void 0 ? void 0 : data.is_onboarded) || false,
                error: null
            };
        } catch (error) {
            return {
                isOnboarded: false,
                error
            };
        }
    }
}
const onBoardingService = new OnBoardingService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useOnboarding.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOnboarding",
    ()=>useOnboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$onboarding$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/onboarding-service.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useOnboarding = ()=>{
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [onboardingStatus, setOnboardingStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const checkOnboardingStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOnboarding.useCallback[checkOnboardingStatus]": async (userId)=>{
            if (!userId) return {
                isOnboarded: false,
                error: "No user ID provided"
            };
            setLoading(true);
            setError(null);
            try {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$onboarding$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onBoardingService"].checkOnboardingStatus(userId);
                if (result.error) {
                    setError(result.error.message);
                    return {
                        isOnboarded: false,
                        error: result.error
                    };
                }
                setOnboardingStatus(result.isOnboarded);
                return {
                    isOnboarded: result.isOnboarded,
                    error: null
                };
            } catch (err) {
                setError(err.message);
                return {
                    isOnboarded: false,
                    error: err
                };
            } finally{
                setLoading(false);
            }
        }
    }["useOnboarding.useCallback[checkOnboardingStatus]"], []);
    const markAsOnboarded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOnboarding.useCallback[markAsOnboarded]": async (userId)=>{
            if (!userId) return {
                success: false,
                error: "No user ID provided"
            };
            setLoading(true);
            setError(null);
            try {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$onboarding$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onBoardingService"].markAsOnboarded(userId);
                if (result.error) {
                    setError(result.error.message);
                    return {
                        success: false,
                        error: result.error
                    };
                }
                setOnboardingStatus(true);
                return {
                    success: true,
                    error: null
                };
            } catch (err) {
                setError(err.message);
                return {
                    success: false,
                    error: err
                };
            } finally{
                setLoading(false);
            }
        }
    }["useOnboarding.useCallback[markAsOnboarded]"], []);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOnboarding.useCallback[clearError]": ()=>{
            setError(null);
        }
    }["useOnboarding.useCallback[clearError]"], []);
    return {
        // Methods
        checkOnboardingStatus,
        markAsOnboarded,
        clearError,
        // State
        loading,
        error,
        onboardingStatus
    };
};
_s(useOnboarding, "KzG9HT0kqIx07CsWgN0UXl4XbP4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAuth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/auth-service.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOnboarding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useOnboarding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/react-query.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const useAuth = ()=>{
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { checkOnboardingStatus, markAsOnboarded, loading: onboardingLoading, error: onboardingError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOnboarding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnboarding"])();
    const signUpMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].signUp,
        onSuccess: {
            "useAuth.useMutation[signUpMutation]": (result)=>{
                var _result_data;
                if ((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.user) {
                    setUser(result.data.user);
                }
            }
        }["useAuth.useMutation[signUpMutation]"]
    });
    const signInMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].signIn,
        onSuccess: {
            "useAuth.useMutation[signInMutation]": (result)=>{
                var _result_data;
                if ((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.user) {
                    setUser(result.data.user);
                }
            }
        }["useAuth.useMutation[signInMutation]"]
    });
    const signOutMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].signOut,
        onSuccess: {
            "useAuth.useMutation[signOutMutation]": ()=>{
                setUser(null);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryClient"].clear();
            }
        }["useAuth.useMutation[signOutMutation]"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            const checkUserSession = {
                "useAuth.useEffect.checkUserSession": async ()=>{
                    try {
                        const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                        if (session === null || session === void 0 ? void 0 : session.user) {
                            setUser(session.user);
                        }
                    } catch (error) {
                        console.error("Error checking user session:", error);
                    }
                }
            }["useAuth.useEffect.checkUserSession"];
            checkUserSession();
        }
    }["useAuth.useEffect"], []);
    const signUp = async (formData)=>{
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].signUp(formData);
            if (result.error) {
                setError(result.error.message);
                return {
                    success: false,
                    error: result.error,
                    profileCreated: false
                };
            } else {
                var _result_data, _result_data1;
                if ((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.user) {
                    setUser(result.data.user);
                }
                var _result_data_profileCreated;
                return {
                    success: true,
                    data: result.data,
                    profileCreated: (_result_data_profileCreated = (_result_data1 = result.data) === null || _result_data1 === void 0 ? void 0 : _result_data1.profileCreated) !== null && _result_data_profileCreated !== void 0 ? _result_data_profileCreated : false
                };
            }
        } catch (err) {
            setError(err.message);
            return {
                success: false,
                error: err,
                profileCreated: false
            };
        } finally{
            setLoading(false);
        }
    };
    const signIn = async (email, password)=>{
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].signIn({
                email,
                password
            });
            if (result.error) {
                setError(result.error.message);
                return {
                    success: false,
                    error: result.error
                };
            } else {
                var _result_data;
                if ((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.user) {
                    setUser(result.data.user);
                    const onboardingResult = await checkOnboardingStatus(result.data.user.id);
                    return {
                        success: true,
                        data: result.data,
                        isOnboarded: onboardingResult.isOnboarded
                    };
                }
                return {
                    success: true,
                    data: result.data,
                    isOnboarded: false
                };
            }
        } catch (err) {
            setError(err.message);
            return {
                success: false,
                error: err
            };
        } finally{
            setLoading(false);
        }
    };
    const signOut = async ()=>{
        setLoading(true);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].signOut();
            setUser(null);
            return {
                success: true,
                error: result.error
            };
        } catch (err) {
            return {
                success: false,
                error: err
            };
        } finally{
            setLoading(false);
        }
    };
    const clearError = ()=>{
        setError(null);
    };
    return {
        // Auth Methods
        signUp,
        signIn,
        signOut,
        clearError,
        // Onboarding Methods
        checkOnboardingStatus,
        markAsOnboarded,
        // State
        loading: loading || onboardingLoading,
        error: error || onboardingError,
        user
    };
};
_s(useAuth, "Ek+PMXXWIWhvrmek40wHihCV7qs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOnboarding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnboarding"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/pages/dashboard/budget/BudgetClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BudgetClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
/* eslint-disable @next/next/no-page-custom-font */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBudget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBudget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function BudgetClient() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBudget, setSelectedBudget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        budget_name: "",
        amount: "",
        period: "month"
    });
    // Result modal state
    const [resultModal, setResultModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        type: "",
        title: "",
        message: "",
        action: ""
    });
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { getBudgets, createBudget, updateBudget, deleteBudget, mutations: { createBudget: createMutation, updateBudget: updateMutation, deleteBudget: deleteMutation } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBudget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBudget"])();
    const [deleteConfirmModal, setDeleteConfirmModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        budgetId: null,
        budgetName: ""
    });
    const { data: budgetsData, isLoading, error } = getBudgets(user === null || user === void 0 ? void 0 : user.id);
    const budgets = (budgetsData === null || budgetsData === void 0 ? void 0 : budgetsData.data) || [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BudgetClient.useEffect": ()=>{
            setMounted(true);
        }
    }["BudgetClient.useEffect"], []);
    // Open result modal
    const openResultModal = function(type, title, message) {
        let action = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
        setResultModal({
            isOpen: true,
            type,
            title,
            message,
            action
        });
    };
    // Close result modal
    const closeResultModal = ()=>{
        setResultModal({
            isOpen: false,
            type: "",
            title: "",
            message: "",
            action: ""
        });
    };
    const openModal = function() {
        let budget = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        if (budget) {
            var _budget_amount, _budget_period;
            setSelectedBudget(budget);
            setFormData({
                budget_name: budget.budget_name,
                amount: ((_budget_amount = budget.amount) === null || _budget_amount === void 0 ? void 0 : _budget_amount.toString()) || "",
                period: ((_budget_period = budget.period) === null || _budget_period === void 0 ? void 0 : _budget_period.replace("/", "")) || "month"
            });
        } else {
            setSelectedBudget(null);
            setFormData({
                budget_name: "",
                amount: "",
                period: "month"
            });
        }
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
        setSelectedBudget(null);
        createMutation.reset();
        updateMutation.reset();
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const budgetData = {
            user_id: user === null || user === void 0 ? void 0 : user.id,
            budget_name: formData.budget_name,
            amount: parseFloat(formData.amount) || 0,
            period: "/".concat(formData.period)
        };
        try {
            if (selectedBudget) {
                await updateBudget(selectedBudget.budget_id, budgetData);
                openResultModal("success", "Budget Updated", "Your budget has been successfully updated.", "update");
            } else {
                await createBudget(budgetData);
                openResultModal("success", "Budget Created", "Your new budget has been successfully created.", "create");
            }
            closeModal();
            queryClient.invalidateQueries({
                queryKey: [
                    "budgets",
                    "list",
                    {
                        userId: user === null || user === void 0 ? void 0 : user.id
                    }
                ]
            });
        } catch (error) {
            openResultModal("error", "Operation Failed", selectedBudget ? "Failed to update budget. Please try again." : "Failed to create budget. Please try again.", selectedBudget ? "update" : "create");
        }
    };
    const handleDelete = async (budgetId, budgetName)=>{
        // Open confirmation modal instead of using confirm()
        setDeleteConfirmModal({
            isOpen: true,
            budgetId,
            budgetName
        });
    };
    const confirmDelete = async ()=>{
        const { budgetId } = deleteConfirmModal;
        try {
            await deleteBudget(budgetId);
            openResultModal("success", "Budget Deleted", "The budget has been successfully deleted.", "delete");
            // Close confirmation modal
            setDeleteConfirmModal({
                isOpen: false,
                budgetId: null,
                budgetName: ""
            });
            setTimeout(()=>{
                window.location.reload();
            }, 1200);
            // Invalidate queries to refresh data
            queryClient.invalidateQueries({
                queryKey: [
                    "budgets",
                    "list",
                    {
                        userId: user === null || user === void 0 ? void 0 : user.id
                    }
                ]
            });
        } catch (error) {
            openResultModal("error", "Delete Failed", "Failed to delete budget. Please try again.", "delete");
            setDeleteConfirmModal({
                isOpen: false,
                budgetId: null,
                budgetName: ""
            });
        }
    };
    const cancelDelete = ()=>{
        setDeleteConfirmModal({
            isOpen: false,
            budgetId: null,
            budgetName: ""
        });
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white text-lg flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 border-2 border-[#9c167f] border-t-transparent rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base sm:text-lg",
                                children: "Loading budgets..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
            lineNumber: 196,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4 max-w-md w-full text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-semibold mb-2",
                                children: "Error Loading Budgets"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm",
                                children: error.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
            lineNumber: 210,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-eafef00766bdaec9" + " " + "relative flex h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-eafef00766bdaec9" + " " + "absolute top-1/4 left-1/4 w-32 h-32 bg-[#9c167f]/10 rounded-full blur-xl animate-pulse-slow"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-eafef00766bdaec9" + " " + "absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#9c167f]/5 rounded-full blur-lg animate-pulse-slow animation-delay-1000"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-eafef00766bdaec9" + " " + "layout-container flex h-full grow flex-col z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-eafef00766bdaec9" + " " + "mt-10 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 flex flex-1 justify-center py-4 sm:py-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-eafef00766bdaec9" + " " + "layout-content-container flex flex-col w-full  flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "jsx-eafef00766bdaec9" + " " + "flex-1 mt-4 sm:mt-6 md:mt-8 lg:mt-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-eafef00766bdaec9" + " " + "flex flex-col sm:flex-row justify-between gap-4 p-3 sm:p-4 items-start sm:items-center transition-all duration-700 ".concat(mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-eafef00766bdaec9" + " " + "flex flex-col gap-2 min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "jsx-eafef00766bdaec9" + " " + "text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] break-words",
                                                        children: "My Budgets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-eafef00766bdaec9" + " " + "text-[#c695bb] text-sm sm:text-base font-normal leading-normal",
                                                        children: budgets.length > 0 ? "You have ".concat(budgets.length, " active budget").concat(budgets.length !== 1 ? "s" : "") : "Here are your allocated budgets for the current period."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>openModal(),
                                                className: "jsx-eafef00766bdaec9" + " " + "group relative flex w-full sm:w-auto min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:px-5 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-500 hover:bg-[#b51a97] hover:shadow-2xl hover:shadow-[#9c167f]/50 hover:-translate-y-1 active:translate-y-0 mt-2 sm:mt-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-eafef00766bdaec9" + " " + "truncate relative z-10",
                                                        children: "Add New Budget"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                        lineNumber: 262,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-eafef00766bdaec9" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-eafef00766bdaec9" + " " + "mt-4 sm:mt-6 md:mt-8 flex flex-col gap-3 px-2 sm:px-4",
                                        children: budgets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-eafef00766bdaec9" + " " + "text-center py-8 sm:py-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-eafef00766bdaec9" + " " + "text-[#c695bb] text-lg mb-3 sm:mb-4",
                                                    children: "No budgets found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-eafef00766bdaec9" + " " + "text-[#c695bb] text-sm mb-4 max-w-md mx-auto",
                                                    children: "Start tracking your expenses by creating your first budget"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                    lineNumber: 274,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>openModal(),
                                                    className: "jsx-eafef00766bdaec9" + " " + "px-6 py-2 bg-[#9c167f] text-white rounded-lg hover:bg-[#b51a97] transition-colors text-sm sm:text-base",
                                                    children: "Create Your First Budget"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                    lineNumber: 277,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                            lineNumber: 270,
                                            columnNumber: 19
                                        }, this) : budgets.map((budget, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    transitionDelay: "".concat(index * 100, "ms")
                                                },
                                                className: "jsx-eafef00766bdaec9" + " " + "group flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 bg-[#321b2d] p-3 sm:p-4 justify-between rounded-xl border border-[#63365a] transition-all duration-500 hover:border-[#9c167f] hover:shadow-xl hover:shadow-[#9c167f]/25 hover:-translate-y-1 ".concat(mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-eafef00766bdaec9" + " " + "flex items-center gap-3 sm:gap-4 flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-eafef00766bdaec9" + " " + "text-white flex items-center justify-center rounded-lg bg-[#63365a] shrink-0 size-10 sm:size-12 transition-all duration-300 group-hover:bg-[#9c167f] group-hover:scale-110",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-eafef00766bdaec9" + " " + "material-symbols-outlined text-xl sm:text-2xl",
                                                                    children: "account_balance_wallet"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                    lineNumber: 300,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                lineNumber: 299,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-eafef00766bdaec9" + " " + "flex flex-col justify-center flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-eafef00766bdaec9" + " " + "text-white text-base sm:text-lg font-medium leading-normal line-clamp-1 break-words",
                                                                        children: budget.budget_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                        lineNumber: 307,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-eafef00766bdaec9" + " " + "text-[#c695bb] text-xs sm:text-sm font-normal leading-normal",
                                                                        children: "Allocated Budget"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                        lineNumber: 310,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                lineNumber: 306,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-eafef00766bdaec9" + " " + "shrink-0 text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-eafef00766bdaec9" + " " + "text-white text-base sm:text-lg font-bold leading-normal whitespace-nowrap",
                                                                        children: [
                                                                            "PHP",
                                                                            " ",
                                                                            parseFloat(budget.amount || 0).toLocaleString("en-US", {
                                                                                minimumFractionDigits: 2,
                                                                                maximumFractionDigits: 2
                                                                            })
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                        lineNumber: 317,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-eafef00766bdaec9" + " " + "text-xs sm:text-sm font-normal text-[#c695bb]",
                                                                        children: budget.period || "/month"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                        lineNumber: 327,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                lineNumber: 316,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                        lineNumber: 297,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-eafef00766bdaec9" + " " + "flex gap-2 sm:ml-4 w-full sm:w-auto justify-end sm:justify-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openModal(budget),
                                                                className: "jsx-eafef00766bdaec9" + " " + "flex items-center justify-center gap-2 rounded-lg h-9 sm:h-10 px-3 sm:px-4 bg-[#321b2d] text-white text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#3d2245] border border-[#63365a] hover:border-[#9c167f] hover:scale-105 flex-1 sm:flex-none min-w-[70px] sm:min-w-[84px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-eafef00766bdaec9" + " " + "material-symbols-outlined text-base sm:text-lg",
                                                                        children: "edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                        lineNumber: 339,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-eafef00766bdaec9" + " " + "truncate",
                                                                        children: "Edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                        lineNumber: 342,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                lineNumber: 335,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(budget.budget_id, budget.budget_name),
                                                                className: "jsx-eafef00766bdaec9" + " " + "flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#321b2d] text-red-400 gap-2 text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#3d2245] border border-[#63365a] hover:border-red-500 hover:scale-105",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-eafef00766bdaec9" + " " + "material-symbols-outlined text-lg",
                                                                        children: "delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                        lineNumber: 350,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-eafef00766bdaec9" + " " + "truncate",
                                                                        children: "Delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                        lineNumber: 353,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                                lineNumber: 344,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                        lineNumber: 334,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, budget.budget_id, true, {
                                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                lineNumber: 286,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-eafef00766bdaec9" + " " + "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-eafef00766bdaec9" + " " + "bg-[#321b2d] border border-[#63365a] rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-md transform transition-all duration-500 ".concat(isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-eafef00766bdaec9" + " " + "flex items-center justify-between mb-4 sm:mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-eafef00766bdaec9" + " " + "text-white text-lg sm:text-xl font-bold",
                                    children: selectedBudget ? "Edit Budget" : "Add New Budget"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeModal,
                                    className: "jsx-eafef00766bdaec9" + " " + "text-[#c695bb] hover:text-white transition-colors duration-200 p-1 rounded-lg hover:bg-white/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-eafef00766bdaec9" + " " + "material-symbols-outlined text-xl sm:text-2xl",
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                        lineNumber: 382,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                            lineNumber: 374,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "jsx-eafef00766bdaec9" + " " + "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-eafef00766bdaec9",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-eafef00766bdaec9" + " " + "block text-[#c695bb] text-sm font-medium mb-2",
                                            children: "Budget Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.budget_name,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    budget_name: e.target.value
                                                }),
                                            placeholder: "Enter budget name",
                                            required: true,
                                            className: "jsx-eafef00766bdaec9" + " " + "w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#9c167f] transition-colors duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20 text-sm sm:text-base"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-eafef00766bdaec9",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-eafef00766bdaec9" + " " + "block text-[#c695bb] text-sm font-medium mb-2",
                                            children: "Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                            lineNumber: 406,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: formData.amount,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    amount: e.target.value
                                                }),
                                            placeholder: "0.00",
                                            step: "0.01",
                                            min: "0",
                                            required: true,
                                            className: "jsx-eafef00766bdaec9" + " " + "w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#9c167f] transition-colors duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20 text-sm sm:text-base"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                    lineNumber: 405,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-eafef00766bdaec9",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-eafef00766bdaec9" + " " + "block text-[#c695bb] text-sm font-medium mb-2",
                                            children: "Period"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                            lineNumber: 424,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.period,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    period: e.target.value
                                                }),
                                            className: "jsx-eafef00766bdaec9" + " " + "w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#9c167f] transition-colors duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20 text-sm sm:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "month",
                                                    className: "jsx-eafef00766bdaec9",
                                                    children: "Monthly"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                    lineNumber: 434,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "week",
                                                    className: "jsx-eafef00766bdaec9",
                                                    children: "Weekly"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                    lineNumber: 435,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "year",
                                                    className: "jsx-eafef00766bdaec9",
                                                    children: "Yearly"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                    lineNumber: 436,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                    lineNumber: 423,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-eafef00766bdaec9" + " " + "flex gap-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closeModal,
                                            className: "jsx-eafef00766bdaec9" + " " + "flex-1 py-2 sm:py-3 px-4 bg-transparent border border-[#63365a] text-[#c695bb] rounded-lg hover:bg-[#3d2245] hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: createMutation.isPending || updateMutation.isPending,
                                            className: "jsx-eafef00766bdaec9" + " " + "group relative flex-1 py-2 sm:py-3 px-4 bg-[#9c167f] text-white rounded-lg hover:bg-[#b51a97] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden text-sm sm:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-eafef00766bdaec9" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                    lineNumber: 455,
                                                    columnNumber: 19
                                                }, this),
                                                createMutation.isPending || updateMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-eafef00766bdaec9" + " " + "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                            lineNumber: 458,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-eafef00766bdaec9" + " " + "truncate",
                                                            children: "Saving..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                            lineNumber: 459,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-eafef00766bdaec9" + " " + "relative z-10 truncate",
                                                    children: selectedBudget ? "Update Budget" : "Create Budget"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                                    lineNumber: 462,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                            lineNumber: 388,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                    lineNumber: 368,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                lineNumber: 367,
                columnNumber: 9
            }, this),
            resultModal.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-eafef00766bdaec9" + " " + "fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-eafef00766bdaec9" + " " + "bg-[#321b2d] border border-[#63365a] rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-sm transform transition-all duration-500 scale-100 opacity-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-eafef00766bdaec9" + " " + "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-eafef00766bdaec9" + " " + "mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full ".concat(resultModal.type === "success" ? "bg-[#9c167f]/20 text-[#9c167f]" : "bg-red-500/20 text-red-400"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-eafef00766bdaec9" + " " + "material-symbols-outlined text-3xl",
                                    children: resultModal.type === "success" ? "check_circle" : "error"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                    lineNumber: 489,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 482,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-eafef00766bdaec9" + " " + "text-lg sm:text-xl font-bold mb-2 ".concat(resultModal.type === "success" ? "text-[#9c167f]" : "text-red-400"),
                                children: resultModal.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 495,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-eafef00766bdaec9" + " " + "text-[#c695bb] text-sm sm:text-base mb-6",
                                children: resultModal.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 506,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closeResultModal,
                                className: "jsx-eafef00766bdaec9" + " " + "w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ".concat(resultModal.type === "success" ? "bg-[#9c167f] hover:bg-[#b51a97] text-white" : "bg-red-500 hover:bg-red-600 text-white"),
                                children: "Continue"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 511,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                        lineNumber: 480,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                    lineNumber: 476,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                lineNumber: 475,
                columnNumber: 9
            }, this),
            deleteConfirmModal.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-eafef00766bdaec9" + " " + "fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-eafef00766bdaec9" + " " + "bg-[#321b2d] border border-[#63365a] rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-sm transform transition-all duration-500 scale-100 opacity-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-eafef00766bdaec9" + " " + "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-eafef00766bdaec9" + " " + "mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 text-yellow-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-eafef00766bdaec9" + " " + "material-symbols-outlined text-3xl",
                                    children: "warning"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                    lineNumber: 536,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 535,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-eafef00766bdaec9" + " " + "text-lg sm:text-xl font-bold mb-2 text-yellow-400",
                                children: "Confirm Deletion"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 542,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-eafef00766bdaec9" + " " + "text-[#c695bb] text-sm sm:text-base mb-2",
                                children: "Are you sure you want to delete"
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 547,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-eafef00766bdaec9" + " " + "text-white font-semibold text-sm sm:text-base mb-6",
                                children: [
                                    '"',
                                    deleteConfirmModal.budgetName,
                                    '"?'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 550,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-eafef00766bdaec9" + " " + "text-red-400 text-xs mb-6",
                                children: "This action cannot be undone."
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 553,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-eafef00766bdaec9" + " " + "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: cancelDelete,
                                        className: "jsx-eafef00766bdaec9" + " " + "flex-1 py-3 px-4 bg-transparent border border-[#63365a] text-[#c695bb] rounded-lg hover:bg-[#3d2245] hover:text-white transition-all duration-300 hover:scale-105",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                        lineNumber: 559,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: confirmDelete,
                                        className: "jsx-eafef00766bdaec9" + " " + "flex-1 py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 font-semibold",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                        lineNumber: 565,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                                lineNumber: 558,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                        lineNumber: 533,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                    lineNumber: 529,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                lineNumber: 528,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional",
                rel: "stylesheet",
                className: "jsx-eafef00766bdaec9"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
                lineNumber: 577,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "eafef00766bdaec9",
                children: '@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes pulse-slow{0%,to{opacity:.1}50%{opacity:.2}}.animate-fade-in-up.jsx-eafef00766bdaec9{opacity:0;animation:.6s ease-out forwards fadeInUp}.animate-fade-in.jsx-eafef00766bdaec9{opacity:0;animation:.4s ease-out forwards fadeIn}.animate-pulse-slow.jsx-eafef00766bdaec9{animation:3s ease-in-out infinite pulse-slow}.animation-delay-1000.jsx-eafef00766bdaec9{animation-delay:1s}.material-symbols-outlined.jsx-eafef00766bdaec9{font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 24}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/dashboard/budget/BudgetClient.js",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_s(BudgetClient, "T//EbGma7TBzeD4GBKwzRdgbQls=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBudget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBudget"]
    ];
});
_c = BudgetClient;
var _c;
__turbopack_context__.k.register(_c, "BudgetClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_38e76ae2._.js.map