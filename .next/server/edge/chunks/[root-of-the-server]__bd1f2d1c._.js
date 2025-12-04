(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__bd1f2d1c._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/middleware.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// middleware.js (place this in your PROJECT ROOT)
__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware-edge] (ecmascript)");
;
;
async function middleware(req) {
    console.log("🚨🚨🚨 MIDDLEWARE IS DEFINITELY RUNNING! Path:", req.nextUrl.pathname);
    let res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // Create Supabase client for middleware
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://xluxxuyionzsocdvinax.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsdXh4dXlpb256c29jZHZpbmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODMwNjcsImV4cCI6MjA3Nzk1OTA2N30.iOzYJKNYpIfpdht3V8PX_EU0KgYmuH-c8NaQKjvMIG0"), {
        cookies: {
            getAll () {
                return req.cookies.getAll();
            },
            setAll (cookiesToSet) {
                cookiesToSet.forEach(({ name, value, options })=>req.cookies.set(name, value));
                res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                    request: {
                        headers: req.headers
                    }
                });
                cookiesToSet.forEach(({ name, value, options })=>{
                    res.cookies.set(name, value, options);
                });
            }
        }
    });
    // Refresh session if expired
    const { data: { session } } = await supabase.auth.getSession();
    // Define routes - USE THE PATHS FROM YOUR URL BAR
    const protectedRoutes = [
        "/pages/dashboard",
        "/pages/dashboard/budget",
        "/pages/dashboard/goal"
    ];
    const onboardingRoutes = [
        "/pages/setBudget",
        "/pages/setGoal"
    ];
    const publicRoutes = [
        "/pages/login",
        "/pages/signUp"
    ];
    const { pathname } = req.nextUrl;
    // Check route types
    const isProtectedRoute = protectedRoutes.some((route)=>pathname === route || pathname.startsWith(route + "/"));
    const isOnboardingRoute = onboardingRoutes.some((route)=>pathname === route || pathname.startsWith(route + "/"));
    const isPublicRoute = publicRoutes.some((route)=>pathname === route || pathname.startsWith(route + "/"));
    console.log("=== MIDDLEWARE RUNNING ===");
    console.log("📝 Path:", pathname);
    console.log("🔐 Session:", !!session);
    console.log("🛡️ Protected:", isProtectedRoute);
    console.log("🎯 Onboarding:", isOnboardingRoute);
    // 🔐 UNAUTHENTICATED USER
    if (!session) {
        if (isPublicRoute) {
            return res; // Allow login/signup
        }
        if (isProtectedRoute || isOnboardingRoute) {
            console.log("🚫 Blocking unauthenticated user");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/pages/login", req.url));
        }
    }
    // 🔓 AUTHENTICATED USER
    if (session) {
        // Check onboarding status
        const { data: userProfile } = await supabase.from("users").select("is_onboarded").eq("user_id", session.user.id).single();
        const isOnboarded = userProfile?.is_onboarded || false;
        console.log("🚀 Onboarded:", isOnboarded);
        // Block onboarding routes if already onboarded
        if (isOnboarded && isOnboardingRoute) {
            console.log("🔄 Redirecting to dashboard");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/pages/dashboard", req.url));
        }
        // Block protected routes if not onboarded
        if (!isOnboarded && isProtectedRoute) {
            console.log("🔄 Redirecting to setBudget");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/pages/setBudget", req.url));
        }
        // Redirect away from login/signup if authenticated
        if (isPublicRoute) {
            const redirectTo = isOnboarded ? "/pages/dashboard" : "/pages/setBudget";
            console.log("🔄 Redirecting from public to:", redirectTo);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(redirectTo, req.url));
        }
    }
    // Root path handling
    if (pathname === "/") {
        if (session) {
            const { data: userProfile } = await supabase.from("users").select("is_onboarded").eq("user_id", session.user.id).single();
            const isOnboarded = userProfile?.is_onboarded || false;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(isOnboarded ? "/pages/dashboard" : "/pages/setBudget", req.url));
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/pages/login", req.url));
        }
    }
    console.log("✅ Allowing access");
    return res;
}
const config = {
    matcher: [
        "/",
        "/pages/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__bd1f2d1c._.js.map