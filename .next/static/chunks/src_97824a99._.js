(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/supabase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://xluxxuyionzsocdvinax.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsdXh4dXlpb256c29jZHZpbmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODMwNjcsImV4cCI6MjA3Nzk1OTA2N30.iOzYJKNYpIfpdht3V8PX_EU0KgYmuH-c8NaQKjvMIG0");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: "pkce",
        debug: false
    }
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
        if (!credentials.email || !credentials.password) {
            throw new Error("Email and password are required");
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])(credentials.email, credentials.password);
        return result;
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
_s(useAuth, "bR4ihJB2PE13iFo78kGRr2BSXPc=", false, function() {
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
"[project]/src/api/goal/route.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGoal",
    ()=>createGoal,
    "createMultipleGoals",
    ()=>createMultipleGoals,
    "deleteGoal",
    ()=>deleteGoal,
    "getGoals",
    ()=>getGoals,
    "updateGoal",
    ()=>updateGoal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
;
async function getGoals(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("goals").select("*").eq("user_id", userId).order("deadline");
    return {
        data,
        error
    };
}
async function createGoal(goalData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("goals").insert([
        goalData
    ]).select();
    return {
        data,
        error
    };
}
async function createMultipleGoals(goalsArray) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("goals").insert(goalsArray).select();
    return {
        data,
        error
    };
}
async function updateGoal(goalId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("goals").update(updates).eq("id", goalId).select();
    return {
        data,
        error
    };
}
async function deleteGoal(goalId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("goals").delete().eq("id", goalId);
    return {
        error
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/goal-service.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoalService",
    ()=>GoalService,
    "goalService",
    ()=>goalService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/goal/route.js [app-client] (ecmascript)");
;
class GoalService {
    async getGoals(userId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGoals"])(userId);
            return result;
        } catch (error) {
            console.error("Error fetching goals: ", error);
            return {
                data: null,
                error
            };
        }
    }
    async createGoal(goalData) {
        try {
            if (!goalData.user_id || !goalData.goal_name || !goalData.target_amount) {
                throw new Error("User ID, goal_name, and target_amount are required");
            }
            if (goalData.target_amount <= 0) {
                throw new Error("Target amount must be greater than 0");
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGoal"])(goalData);
            return result;
        } catch (error) {
            console.error("Error creating goal: ", error);
            return {
                data: null,
                error
            };
        }
    }
    async createMultipleGoals(goalsArray) {
        try {
            for (const goal of goalsArray){
                if (!goal.user_id || !goal.goal_name || !goal.target_amount) {
                    throw new Error("All goals must have user_id, goal_name, and target_amount");
                }
                if (goal.target_amount <= 0) {
                    throw new Error("All target amounts must be greater than 0");
                }
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMultipleGoals"])(goalsArray);
            return result;
        } catch (error) {
            console.error("Error creating multiple goals:", error);
            return {
                data: null,
                error
            };
        }
    }
    async updateGoal(goalId, updates) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateGoal"])(goalId, updates);
            return result;
        } catch (error) {
            console.error("Error updating goal:", error);
            return {
                data: null,
                error
            };
        }
    }
    async deleteGoal(goalId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$goal$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteGoal"])(goalId);
            return result;
        } catch (error) {
            console.error("Error deleting goal:", error);
            return {
                error
            };
        }
    }
}
const goalService = new GoalService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useGoal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "goalKeys",
    ()=>goalKeys,
    "useGoal",
    ()=>useGoal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/goal-service.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const goalKeys = {
    all: [
        "goals"
    ],
    lists: ()=>[
            ...goalKeys.all,
            "list"
        ],
    list: (filters)=>[
            ...goalKeys.lists(),
            {
                filters
            }
        ],
    details: ()=>[
            ...goalKeys.all,
            "detail"
        ],
    detail: (id)=>[
            ...goalKeys.details(),
            id
        ]
};
const useGoal = ()=>{
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const getGoals = (userId)=>{
        _s1();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: goalKeys.list({
                userId
            }),
            queryFn: {
                "useGoal.getGoals.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goalService"].getGoals(userId)
            }["useGoal.getGoals.useQuery"],
            enabled: !!userId,
            staleTime: 2 * 60 * 1000
        });
    };
    _s1(getGoals, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
        ];
    });
    const createGoalMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goalService"].createGoal,
        onSuccess: {
            "useGoal.useMutation[createGoalMutation]": (result)=>{
                if (result.data) {
                    queryClient.invalidateQueries({
                        queryKey: goalKeys.lists()
                    });
                }
            }
        }["useGoal.useMutation[createGoalMutation]"]
    });
    const createMultipleGoalsMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goalService"].createMultipleGoals,
        onSuccess: {
            "useGoal.useMutation[createMultipleGoalsMutation]": (result)=>{
                if (result.data) {
                    queryClient.invalidateQueries({
                        queryKey: goalKeys.lists()
                    });
                }
            }
        }["useGoal.useMutation[createMultipleGoalsMutation]"]
    });
    const updateGoalMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useGoal.useMutation[updateGoalMutation]": (param)=>{
                let { goalId, updates } = param;
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goalService"].updateGoal(goalId, updates);
            }
        }["useGoal.useMutation[updateGoalMutation]"],
        onSuccess: {
            "useGoal.useMutation[updateGoalMutation]": (result, variables)=>{
                if (result.data) {
                    queryClient.setQueryData(goalKeys.lists(), {
                        "useGoal.useMutation[updateGoalMutation]": (old)=>old === null || old === void 0 ? void 0 : old.map({
                                "useGoal.useMutation[updateGoalMutation]": (goal)=>goal.id === variables.goalId ? result.data[0] : goal
                            }["useGoal.useMutation[updateGoalMutation]"])
                    }["useGoal.useMutation[updateGoalMutation]"]);
                }
            }
        }["useGoal.useMutation[updateGoalMutation]"]
    });
    const deleteGoalMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$goal$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goalService"].deleteGoal,
        onSuccess: {
            "useGoal.useMutation[deleteGoalMutation]": (result, variables)=>{
                queryClient.setQueryData(goalKeys.lists(), {
                    "useGoal.useMutation[deleteGoalMutation]": (old)=>old === null || old === void 0 ? void 0 : old.filter({
                            "useGoal.useMutation[deleteGoalMutation]": (goal)=>goal.id !== variables
                        }["useGoal.useMutation[deleteGoalMutation]"])
                }["useGoal.useMutation[deleteGoalMutation]"]);
            }
        }["useGoal.useMutation[deleteGoalMutation]"]
    });
    const createGoal = (goalData)=>{
        return createGoalMutation.mutateAsync(goalData);
    };
    const createMultipleGoals = (goalsArray)=>{
        return createMultipleGoalsMutation.mutateAsync(goalsArray);
    };
    const updateGoal = (goalId, updates)=>{
        return updateGoalMutation.mutateAsync({
            goalId,
            updates
        });
    };
    const deleteGoal = (goalId)=>{
        return deleteGoalMutation.mutateAsync(goalId);
    };
    const clearError = ()=>{
        createGoalMutation.reset();
        createMultipleGoalsMutation.reset();
        updateGoalMutation.reset();
        deleteGoalMutation.reset();
    };
    return {
        // Query methods
        getGoals,
        // Mutation methods
        createGoal,
        createMultipleGoals,
        updateGoal,
        deleteGoal,
        clearError,
        // Mutation states
        mutations: {
            createGoal: createGoalMutation,
            createMultipleGoals: createMultipleGoalsMutation,
            updateGoal: updateGoalMutation,
            deleteGoal: deleteGoalMutation
        }
    };
};
_s(useGoal, "I7Fo8PY7r4gCx934KQmKJqT6aVU=", false, function() {
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
"[project]/src/app/pages/dashboard/goal/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoalPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGoal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGoal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function GoalPage() {
    var _mutations_createGoal, _mutations_updateGoal, _mutations_createGoal1, _mutations_updateGoal1;
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { getGoals, createGoal, updateGoal, deleteGoal, mutations } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGoal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGoal"])();
    const { data: goalsData, isLoading, error } = getGoals(user === null || user === void 0 ? void 0 : user.id);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingGoal, setEditingGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        goal_name: "",
        target_amount: "",
        current_amount: "",
        deadline: ""
    });
    const goals = (goalsData === null || goalsData === void 0 ? void 0 : goalsData.data) || [];
    const handleCreateGoal = async (e)=>{
        e.preventDefault();
        const result = await createGoal({
            ...formData,
            user_id: user.id,
            target_amount: parseFloat(formData.target_amount),
            current_amount: parseFloat(formData.current_amount) || 0
        });
        if (result.data) {
            setIsModalOpen(false);
            setFormData({
                goal_name: "",
                target_amount: "",
                current_amount: "",
                deadline: ""
            });
        }
    };
    const handleEditGoal = (goal)=>{
        setEditingGoal(goal);
        setFormData({
            goal_name: goal.goal_name,
            target_amount: goal.target_amount.toString(),
            current_amount: goal.current_amount.toString(),
            deadline: goal.deadline.split("T")[0]
        });
        setIsModalOpen(true);
    };
    const hanldeUpdateGoal = async (e)=>{
        e.preventDefault();
        const result = await updateGoal(editingGoal.id, {
            ...formData,
            target_amount: parseFloat(formData.target_amount),
            current_amount: parseFloat(formData.current_amount)
        });
        if (result.data) {
            setIsModalOpen(false);
            setEditingGoal(null);
            setFormData({
                goal_name: "",
                target_amount: "",
                current_amount: "",
                deadline: ""
            });
        }
    };
    const handleDeleteGoal = async (goalId)=>{
        if (confirm("Are you sure you want to delete this goal?")) {
            await deleteGoal(goalId);
        }
    };
    const calculateProgress = (current, target)=>{
        return Math.min(current / target * 100, 100);
    };
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP",
            minimumFractionDigits: 2
        }).format(amount);
    };
    const getProgressColor = (progress)=>{
        if (progress >= 100) return "bg-green-500";
        if (progress >= 75) return "bg-[#9c167f]";
        if (progress >= 50) return "bg-yellow-500";
        return "bg-red-500";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-1bec3d89ad37a228" + " " + "relative flex h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-1bec3d89ad37a228" + " " + "absolute top-1/4 left-1/4 w-32 h-32 bg-[#9c167f]/10 rounded-full blur-xl animate-pulse-slow"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-1bec3d89ad37a228" + " " + "absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#9c167f]/5 rounded-full blur-lg animate-pulse-slow animation-delay-1000"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-1bec3d89ad37a228" + " " + "layout-container flex h-full grow flex-col z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-1bec3d89ad37a228" + " " + "px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-1bec3d89ad37a228" + " " + "layout-content-container flex flex-col w-full max-w-[960px] flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "jsx-1bec3d89ad37a228" + " " + "flex-1 mt-6 md:mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-1bec3d89ad37a228" + " " + "flex flex-wrap justify-between gap-4 p-4 items-center animate-fade-in-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-1bec3d89ad37a228" + " " + "flex min-w-72 flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "jsx-1bec3d89ad37a228" + " " + "text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]",
                                                    children: "My Goals"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-1bec3d89ad37a228" + " " + "text-[#c695bb] text-base font-normal leading-normal",
                                                    children: goals.length > 0 ? "You have ".concat(goals.length, " active goal").concat(goals.length !== 1 ? "s" : "") : "Track your financial goals and monitor your progress."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setEditingGoal(null);
                                                setFormData({
                                                    goal_name: "",
                                                    target_amount: "",
                                                    current_amount: "",
                                                    deadline: ""
                                                });
                                                setIsModalOpen(true);
                                            },
                                            className: "jsx-1bec3d89ad37a228" + " " + "group relative flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#b51a97] hover:shadow-lg hover:shadow-[#9c167f]/40 hover:-translate-y-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-1bec3d89ad37a228" + " " + "truncate relative z-10",
                                                    children: "Add New Goal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-1bec3d89ad37a228" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-1bec3d89ad37a228" + " " + "mt-8 flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-1bec3d89ad37a228" + " " + "text-[#c695bb] flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-1bec3d89ad37a228" + " " + "w-5 h-5 border-2 border-[#9c167f] border-t-transparent rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                lineNumber: 144,
                                                columnNumber: 21
                                            }, this),
                                            "Loading goals..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                        lineNumber: 143,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-1bec3d89ad37a228" + " " + "mt-8 flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-1bec3d89ad37a228" + " " + "text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4 animate-shake",
                                        children: [
                                            "Error loading goals: ",
                                            error.message
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this),
                                !isLoading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-1bec3d89ad37a228" + " " + "mt-6 md:mt-8 flex flex-col gap-4 px-4",
                                    children: goals.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-1bec3d89ad37a228" + " " + "text-center py-12 animate-fade-in",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-1bec3d89ad37a228" + " " + "text-[#c695bb] text-lg mb-4",
                                                children: "No goals found"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                lineNumber: 164,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-1bec3d89ad37a228" + " " + "text-[#c695bb] text-sm",
                                                children: "Create your first goal to start tracking your financial progress"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                lineNumber: 167,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                        lineNumber: 163,
                                        columnNumber: 21
                                    }, this) : goals.map((goal, index)=>{
                                        const progress = calculateProgress(goal.current_amount, goal.target_amount);
                                        const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                animationDelay: "".concat(index * 100, "ms")
                                            },
                                            className: "jsx-1bec3d89ad37a228" + " " + "group flex flex-col gap-4 bg-[#321b2d] p-6 justify-between rounded-xl border border-[#63365a] transition-all duration-300 hover:border-[#9c167f] hover:shadow-lg hover:shadow-[#9c167f]/20 animate-fade-in-up",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-1bec3d89ad37a228" + " " + "flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-1bec3d89ad37a228" + " " + "text-white flex items-center justify-center rounded-lg bg-[#63365a] shrink-0 size-12 transition-all duration-300 group-hover:bg-[#9c167f] group-hover:scale-105",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-1bec3d89ad37a228" + " " + "material-symbols-outlined text-2xl",
                                                            children: "flag"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                            lineNumber: 191,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                        lineNumber: 190,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-1bec3d89ad37a228" + " " + "flex flex-col justify-center flex-grow min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-1bec3d89ad37a228" + " " + "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-1bec3d89ad37a228" + " " + "text-white text-lg font-bold leading-normal line-clamp-1",
                                                                        children: goal.goal_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                        lineNumber: 198,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-1bec3d89ad37a228" + " " + "flex items-center gap-4 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-1bec3d89ad37a228" + " " + "text-[#c695bb]",
                                                                                children: [
                                                                                    "Target: ",
                                                                                    formatCurrency(goal.target_amount)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                                lineNumber: 202,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-1bec3d89ad37a228" + " " + "text-[#c695bb]",
                                                                                children: [
                                                                                    "Saved: ",
                                                                                    formatCurrency(goal.current_amount)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                                lineNumber: 205,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-1bec3d89ad37a228" + " " + "px-2 py-1 rounded-full text-xs font-medium ".concat(daysLeft < 0 ? "bg-red-500/20 text-red-400" : daysLeft < 30 ? "bg-yellow-500/20 text-yellow-400" : "bg-green-500/20 text-green-400"),
                                                                                children: daysLeft < 0 ? "Overdue" : "".concat(daysLeft, " days left")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                                lineNumber: 208,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                        lineNumber: 201,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                lineNumber: 197,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-1bec3d89ad37a228" + " " + "mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-1bec3d89ad37a228" + " " + "flex justify-between text-sm text-[#c695bb] mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-1bec3d89ad37a228",
                                                                                children: "Progress"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                                lineNumber: 227,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-1bec3d89ad37a228",
                                                                                children: [
                                                                                    progress.toFixed(1),
                                                                                    "%"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                                lineNumber: 228,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                        lineNumber: 226,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-1bec3d89ad37a228" + " " + "w-full bg-[#21121e] rounded-full h-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                width: "".concat(progress, "%")
                                                                            },
                                                                            className: "jsx-1bec3d89ad37a228" + " " + "h-2 rounded-full transition-all duration-500 ".concat(getProgressColor(progress))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                            lineNumber: 231,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                        lineNumber: 230,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                lineNumber: 225,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                        lineNumber: 196,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-1bec3d89ad37a228" + " " + "flex gap-2 shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEditGoal(goal),
                                                                className: "jsx-1bec3d89ad37a228" + " " + "flex items-center justify-center rounded-lg h-10 px-4 bg-[#321b2d] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#3d2245] border border-[#63365a] hover:border-[#9c167f] hover:scale-105",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-1bec3d89ad37a228" + " " + "material-symbols-outlined text-lg",
                                                                        children: "edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                        lineNumber: 246,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-1bec3d89ad37a228",
                                                                        children: "Edit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                        lineNumber: 249,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                lineNumber: 242,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDeleteGoal(goal.id),
                                                                className: "jsx-1bec3d89ad37a228" + " " + "flex items-center justify-center rounded-lg h-10 px-4 bg-red-500/20 text-red-400 gap-2 text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500 hover:scale-105",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-1bec3d89ad37a228" + " " + "material-symbols-outlined text-lg",
                                                                        children: "delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                        lineNumber: 255,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-1bec3d89ad37a228",
                                                                        children: "Delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                        lineNumber: 258,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                lineNumber: 251,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                        lineNumber: 241,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                lineNumber: 189,
                                                columnNumber: 27
                                            }, this)
                                        }, goal.id, false, {
                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                            lineNumber: 184,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-1bec3d89ad37a228" + " " + "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-1bec3d89ad37a228" + " " + "bg-[#321b2d] rounded-xl border border-[#63365a] w-full max-w-md transform animate-scale-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-1bec3d89ad37a228" + " " + "flex items-center justify-between p-6 border-b border-[#63365a]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-1bec3d89ad37a228" + " " + "text-white text-xl font-bold",
                                    children: editingGoal ? "Edit Goal" : "Create New Goal"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsModalOpen(false),
                                    className: "jsx-1bec3d89ad37a228" + " " + "text-[#c695bb] hover:text-white transition-colors duration-300 hover:scale-110",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-1bec3d89ad37a228" + " " + "material-symbols-outlined",
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                            lineNumber: 280,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: editingGoal ? handleUpdateGoal : handleCreateGoal,
                            className: "jsx-1bec3d89ad37a228" + " " + "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-1bec3d89ad37a228",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-1bec3d89ad37a228" + " " + "text-white text-sm font-medium block mb-2",
                                            children: "Goal Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: formData.goal_name,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    goal_name: e.target.value
                                                }),
                                            placeholder: "e.g., Emergency Fund, Vacation",
                                            className: "jsx-1bec3d89ad37a228" + " " + "w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white placeholder-[#c695bb] focus:border-[#9c167f] focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-1bec3d89ad37a228" + " " + "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-1bec3d89ad37a228",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-1bec3d89ad37a228" + " " + "text-white text-sm font-medium block mb-2",
                                                    children: "Target Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    required: true,
                                                    min: "0",
                                                    step: "0.01",
                                                    value: formData.target_amount,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            target_amount: e.target.value
                                                        }),
                                                    placeholder: "0.00",
                                                    className: "jsx-1bec3d89ad37a228" + " " + "w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white placeholder-[#c695bb] focus:border-[#9c167f] focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-1bec3d89ad37a228",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-1bec3d89ad37a228" + " " + "text-white text-sm font-medium block mb-2",
                                                    children: "Current Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    step: "0.01",
                                                    value: formData.current_amount,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            current_amount: e.target.value
                                                        }),
                                                    placeholder: "0.00",
                                                    className: "jsx-1bec3d89ad37a228" + " " + "w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white placeholder-[#c695bb] focus:border-[#9c167f] focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-1bec3d89ad37a228",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "jsx-1bec3d89ad37a228" + " " + "text-white text-sm font-medium block mb-2",
                                            children: "Target Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            required: true,
                                            value: formData.deadline,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    deadline: e.target.value
                                                }),
                                            min: new Date().toISOString().split("T")[0],
                                            className: "jsx-1bec3d89ad37a228" + " " + "w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:border-[#9c167f] focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-1bec3d89ad37a228" + " " + "flex gap-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsModalOpen(false),
                                            className: "jsx-1bec3d89ad37a228" + " " + "flex-1 bg-[#321b2d] border border-[#63365a] text-white rounded-lg py-2 px-4 hover:bg-[#3d2245] transition-all duration-300 hover:scale-105",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: ((_mutations_createGoal = mutations.createGoal) === null || _mutations_createGoal === void 0 ? void 0 : _mutations_createGoal.isPending) || ((_mutations_updateGoal = mutations.updateGoal) === null || _mutations_updateGoal === void 0 ? void 0 : _mutations_updateGoal.isPending),
                                            className: "jsx-1bec3d89ad37a228" + " " + "group relative flex-1 bg-[#9c167f] text-white rounded-lg py-2 px-4 hover:bg-[#b51a97] transition-all duration-300 hover:scale-105 disabled:opacity-50 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-1bec3d89ad37a228" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-1bec3d89ad37a228" + " " + "relative z-10 flex items-center justify-center gap-2",
                                                    children: ((_mutations_createGoal1 = mutations.createGoal) === null || _mutations_createGoal1 === void 0 ? void 0 : _mutations_createGoal1.isPending) || ((_mutations_updateGoal1 = mutations.updateGoal) === null || _mutations_updateGoal1 === void 0 ? void 0 : _mutations_updateGoal1.isPending) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-1bec3d89ad37a228" + " " + "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                                lineNumber: 392,
                                                                columnNumber: 25
                                                            }, this),
                                                            editingGoal ? "Updating..." : "Creating..."
                                                        ]
                                                    }, void 0, true) : editingGoal ? "Update Goal" : "Create Goal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                                    lineNumber: 388,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                            lineNumber: 292,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                    lineNumber: 276,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                lineNumber: 275,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
                rel: "stylesheet",
                className: "jsx-1bec3d89ad37a228"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/dashboard/goal/page.js",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "1bec3d89ad37a228",
                children: '@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes shake{0%,to{transform:translate(0)}25%{transform:translate(-5px)}75%{transform:translate(5px)}}@keyframes pulse-slow{0%,to{opacity:.1}50%{opacity:.2}}.animate-fade-in-up.jsx-1bec3d89ad37a228{opacity:0;animation:.6s ease-out forwards fadeInUp}.animate-fade-in.jsx-1bec3d89ad37a228{opacity:0;animation:.4s ease-out forwards fadeIn}.animate-scale-in.jsx-1bec3d89ad37a228{animation:.3s ease-out forwards scaleIn}.animate-shake.jsx-1bec3d89ad37a228{animation:.5s ease-in-out shake}.animate-pulse-slow.jsx-1bec3d89ad37a228{animation:3s ease-in-out infinite pulse-slow}.animation-delay-1000.jsx-1bec3d89ad37a228{animation-delay:1s}.material-symbols-outlined.jsx-1bec3d89ad37a228{font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 24}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/dashboard/goal/page.js",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(GoalPage, "LDZcv0bFxbQBpDy6YbBiImnjRgY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGoal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGoal"]
    ];
});
_c = GoalPage;
var _c;
__turbopack_context__.k.register(_c, "GoalPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_97824a99._.js.map