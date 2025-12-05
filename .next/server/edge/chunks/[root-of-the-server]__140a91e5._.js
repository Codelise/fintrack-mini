(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__140a91e5._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/middleware.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
// Middleware performs light, non-destructive checks for session cookies.
// NOTE: This middleware tries to detect common Supabase session cookie names.
// Because this project currently stores auth tokens in localStorage, middleware
// cannot reliably enforce dashboard protection until a server-set cookie is available.
const PUBLIC_FILE = /\.(.*)$/;
function middleware(req) {
    const { pathname } = req.nextUrl;
    // Skip public files and _next static files
    if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/_next")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // common cookie names to probe (best-effort)
    const tokenCookieNames = [
        "supabase.auth.token",
        "supabase-session",
        "sb:token",
        "sb-access-token",
        "supabase_token",
        "fintrack_session"
    ];
    let hasSession = false;
    try {
        for (const name of tokenCookieNames){
            const cookie = req.cookies.get ? req.cookies.get(name) : null;
            if (cookie) {
                const value = cookie.value ?? cookie;
                if (value && value !== "null") {
                    hasSession = true;
                    break;
                }
            }
        }
    } catch (err) {
        // If cookie access fails, don't block — fallback to allow
        hasSession = false;
    }
    // If user is on login or signup and already has a session cookie, redirect them away
    if ((pathname === "/pages/login" || pathname === "/pages/signup") && hasSession) {
        const url = req.nextUrl.clone();
        url.pathname = "/pages/dashboard";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    // For dashboard routes we do not force-redirect when session cookie is missing
    // because many sessions are stored in localStorage in the current app.
    // Use server-side layout checks for robust protection.
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/pages/login",
        "/pages/signup",
        "/pages/dashboard/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__140a91e5._.js.map