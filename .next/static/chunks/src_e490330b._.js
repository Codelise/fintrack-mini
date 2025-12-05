(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/react-query.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queryClient",
    ()=>queryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/context/userContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProvider",
    ()=>UserProvider,
    "useUser",
    ()=>useUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const UserContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function UserProvider(param) {
    let { children, initialSession } = param;
    _s();
    var _initialSession_user;
    // If the server supplied an initialSession prop, use it to avoid an
    // unnecessary client-side roundtrip.
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_initialSession_user = initialSession === null || initialSession === void 0 ? void 0 : initialSession.user) !== null && _initialSession_user !== void 0 ? _initialSession_user : null);
    const [isOnboarded, setIsOnboarded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSession ? false : true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserProvider.useEffect": ()=>{
            // If the server provided an initial session, skip the immediate getSession
            // call but still subscribe to auth state changes so the client stays in sync.
            let mounted = true;
            const setupSubscription = {
                "UserProvider.useEffect.setupSubscription": ()=>{
                    const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                        "UserProvider.useEffect.setupSubscription": async (event, session)=>{
                            var _session_user;
                            setUser((_session_user = session === null || session === void 0 ? void 0 : session.user) !== null && _session_user !== void 0 ? _session_user : null);
                            setLoading(false);
                            if (event === "SIGNED_OUT") {
                                setIsOnboarded(false);
                            }
                        }
                    }["UserProvider.useEffect.setupSubscription"]);
                    return ({
                        "UserProvider.useEffect.setupSubscription": ()=>subscription.unsubscribe()
                    })["UserProvider.useEffect.setupSubscription"];
                }
            }["UserProvider.useEffect.setupSubscription"];
            if (initialSession && initialSession.user) {
                // Server provided user — skip fetching; still subscribe.
                const unsub = setupSubscription();
                return unsub;
            }
            // No initial session from server — perform normal client session check.
            const getSession = {
                "UserProvider.useEffect.getSession": async ()=>{
                    try {
                        const { data: { session }, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                        if (error) {
                            console.error("Error getting session:", error);
                            return;
                        }
                        if (session === null || session === void 0 ? void 0 : session.user) {
                            setUser(session.user);
                        } else {
                            setUser(null);
                        }
                    } catch (error) {
                        console.error("Error in getSession:", error);
                    } finally{
                        if (mounted) setLoading(false);
                    }
                }
            }["UserProvider.useEffect.getSession"];
            getSession();
            const unsub = setupSubscription();
            return ({
                "UserProvider.useEffect": ()=>{
                    mounted = false;
                    if (typeof unsub === "function") unsub();
                }
            })["UserProvider.useEffect"];
        }
    }["UserProvider.useEffect"], [
        initialSession
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserContext.Provider, {
        value: {
            user,
            setUser,
            isOnboarded,
            setIsOnboarded,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/userContext.js",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(UserProvider, "bjhMtFH5lsBepc9XX99YYNKnMDg=");
_c = UserProvider;
const useUser = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
_s1(useUser, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "UserProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/wallet/route.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWallet",
    ()=>createWallet,
    "deleteWallet",
    ()=>deleteWallet,
    "getUserWallets",
    ()=>getUserWallets,
    "getWalletById",
    ()=>getWalletById,
    "updateWallet",
    ()=>updateWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
;
async function getUserWallets(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("wallets").select("*").eq("user_id", userId).order("created_at", {
        ascending: false
    });
    return {
        data,
        error
    };
}
async function createWallet(walletData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("wallets").insert([
        walletData
    ]).select();
    return {
        data,
        error
    };
}
async function updateWallet(walletId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("wallets").update(updates).eq("wallet_id", walletId).select();
    return {
        data,
        error
    };
}
async function deleteWallet(walletId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("wallets").delete().eq("wallet_id", walletId);
    return {
        data,
        error
    };
}
async function getWalletById(walletId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("wallets").select("*").eq("wallet_id", walletId).single();
    return {
        data,
        error
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/wallet-service.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletService",
    ()=>WalletService,
    "walletService",
    ()=>walletService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$wallet$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/wallet/route.js [app-client] (ecmascript)");
;
class WalletService {
    async getWallets(userId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$wallet$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserWallets"])(userId);
            return result;
        } catch (error) {
            console.error("Error fetching wallets:", error);
            return {
                data: null,
                error
            };
        }
    }
    async createWallet(walletData) {
        try {
            if (!walletData.user_id || !walletData.wallet_name) {
                throw new Error("User ID and wallet name are required");
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$wallet$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWallet"])(walletData);
            return result;
        } catch (error) {
            console.error("Error creating wallet:", error);
            return {
                data: null,
                error
            };
        }
    }
    async createDefaultWallet(userId) {
        try {
            const defaultWalletData = {
                user_id: userId,
                wallet_name: "Main Wallet",
                balance: 0,
                currency: "PHP"
            };
            const result = await this.createWallet(defaultWalletData);
            return result;
        } catch (error) {
            console.error("Error creating default wallet:", error);
            return {
                data: null,
                error
            };
        }
    }
    async updateWallet(walletId, updates) {
        try {
            if (!walletId) {
                throw new Error("Wallet ID is required");
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$wallet$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateWallet"])(walletId, updates);
            return result;
        } catch (error) {
            console.error("Error updating wallet:", error);
            throw error;
        }
    }
    async deleteWallet(walletId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$wallet$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteWallet"])(walletId);
            return result;
        } catch (error) {
            console.error("Error deleting wallet:", error);
            return {
                error
            };
        }
    }
}
const walletService = new WalletService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useWallets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWallets",
    ()=>useWallets,
    "walletKeys",
    ()=>walletKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/wallet-service.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const walletKeys = {
    all: [
        "wallets"
    ],
    lists: ()=>[
            ...walletKeys.all,
            "list"
        ],
    list: (filters)=>[
            ...walletKeys.lists(),
            {
                filters
            }
        ],
    details: ()=>[
            ...walletKeys.all,
            "detail"
        ],
    detail: (id)=>[
            ...walletKeys.details(),
            id
        ]
};
const useWallets = ()=>{
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const getWallets = (userId)=>{
        _s1();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: walletKeys.list({
                userId
            }),
            queryFn: {
                "useWallets.getWallets.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletService"].getWallets(userId)
            }["useWallets.getWallets.useQuery"],
            enabled: !!userId,
            staleTime: 2 * 60 * 1000
        });
    };
    _s1(getWallets, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
        ];
    });
    const createWalletMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletService"].createWallet,
        onSuccess: {
            "useWallets.useMutation[createWalletMutation]": (result)=>{
                if (result.data) {
                    queryClient.invalidateQueries({
                        queryKey: walletKeys.lists()
                    });
                }
            }
        }["useWallets.useMutation[createWalletMutation]"],
        onError: {
            "useWallets.useMutation[createWalletMutation]": (error)=>{
                console.error("Error creating wallet:", error);
            }
        }["useWallets.useMutation[createWalletMutation]"]
    });
    const createDefaultWalletMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletService"].createDefaultWallet,
        onSuccess: {
            "useWallets.useMutation[createDefaultWalletMutation]": (result)=>{
                if (result.data) {
                    queryClient.invalidateQueries({
                        queryKey: walletKeys.lists()
                    });
                }
            }
        }["useWallets.useMutation[createDefaultWalletMutation]"],
        onError: {
            "useWallets.useMutation[createDefaultWalletMutation]": (error)=>{
                console.error("Error creating default wallet:", error);
            }
        }["useWallets.useMutation[createDefaultWalletMutation]"]
    });
    const updateWalletMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useWallets.useMutation[updateWalletMutation]": (param)=>{
                let { walletId, updates } = param;
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletService"].updateWallet(walletId, updates);
            }
        }["useWallets.useMutation[updateWalletMutation]"],
        onSuccess: {
            "useWallets.useMutation[updateWalletMutation]": (result, variables)=>{
                if (result.data) {
                    queryClient.setQueryData(walletKeys.lists(), {
                        "useWallets.useMutation[updateWalletMutation]": (old)=>old === null || old === void 0 ? void 0 : old.map({
                                "useWallets.useMutation[updateWalletMutation]": (wallet)=>wallet.wallet_id === variables.walletId ? result.data[0] : wallet
                            }["useWallets.useMutation[updateWalletMutation]"])
                    }["useWallets.useMutation[updateWalletMutation]"]);
                }
            }
        }["useWallets.useMutation[updateWalletMutation]"]
    });
    const deleteWalletMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletService"].deleteWallet,
        onSuccess: {
            "useWallets.useMutation[deleteWalletMutation]": (result, variables)=>{
                queryClient.setQueryData(walletKeys.lists(), {
                    "useWallets.useMutation[deleteWalletMutation]": (old)=>old === null || old === void 0 ? void 0 : old.filter({
                            "useWallets.useMutation[deleteWalletMutation]": (wallet)=>wallet.wallet_id !== variables
                        }["useWallets.useMutation[deleteWalletMutation]"])
                }["useWallets.useMutation[deleteWalletMutation]"]);
            }
        }["useWallets.useMutation[deleteWalletMutation]"]
    });
    const createWallet = (walletData)=>{
        return createWalletMutation.mutateAsync(walletData);
    };
    const createDefaultWallet = (userId)=>{
        return createDefaultWalletMutation.mutateAsync(userId);
    };
    const updateWallet = (walletId, updates)=>{
        return updateWalletMutation.mutateAsync({
            walletId,
            updates
        });
    };
    const deleteWallet = (walletId)=>{
        return deleteWalletMutation.mutateAsync(walletId);
    };
    const clearError = ()=>{
        createWalletMutation.reset();
        createDefaultWalletMutation.reset();
        updateWalletMutation.reset();
        deleteWalletMutation.reset();
    };
    return {
        // Query methods
        getWallets,
        // Mutation methods
        createWallet,
        createDefaultWallet,
        updateWallet,
        deleteWallet,
        clearError,
        mutations: {
            createWallet: createWalletMutation,
            createDefaultWallet: createDefaultWalletMutation,
            updateWallet: updateWalletMutation,
            deleteWallet: deleteWalletMutation
        }
    };
};
_s(useWallets, "XYL3ll1vYVcE7X864npdB7+gHFY=", false, function() {
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
"[project]/src/api/transaction/route.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTransaction",
    ()=>createTransaction,
    "deleteTransaction",
    ()=>deleteTransaction,
    "getTransactionById",
    ()=>getTransactionById,
    "getTransactions",
    ()=>getTransactions,
    "getTransactionsByCategory",
    ()=>getTransactionsByCategory,
    "getTransactionsByDateRange",
    ()=>getTransactionsByDateRange,
    "getTransactionsByWallet",
    ()=>getTransactionsByWallet,
    "updateTransaction",
    ()=>updateTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-client] (ecmascript)");
;
async function getTransactions(userId) {
    let filters = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("transactions").select("*, categories (*)").eq("user_id", userId);
    if (filters.wallet_id) {
        query = query.eq("wallet_id", filters.wallet_id);
    }
    if (filters.startDate && filters.endDate) {
        query = query.gte("date", filters.startDate).lte("date", filters.endDate);
    }
    const { data, error } = await query.order("date", {
        ascending: false
    });
    return {
        data,
        error
    };
}
async function createTransaction(transactionData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("transactions").insert([
        transactionData
    ]).select();
    return {
        data,
        error
    };
}
async function updateTransaction(transactionId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("transactions").update(updates).eq("transaction_id", transactionId).select();
    return {
        data,
        error
    };
}
async function deleteTransaction(transactionId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("transactions").delete().eq("transaction_id", transactionId);
    return {
        data,
        error
    };
}
async function getTransactionById(transactionId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("transactions").select("*, categories (*)").eq("transaction_id", transactionId).single();
    return {
        data,
        error
    };
}
async function getTransactionsByWallet(userId, walletId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("transactions").select("*, categories (*)").eq("user_id", userId).eq("wallet_id", walletId).order("date", {
        ascending: false
    });
    return {
        data,
        error
    };
}
async function getTransactionsByCategory(userId, categoryId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("transactions").select("*, categories (*)").eq("user_id", userId).eq("category_id", categoryId).order("date", {
        ascending: false
    });
    return {
        data,
        error
    };
}
async function getTransactionsByDateRange(userId, startDate, endDate) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("transactions").select("*, categories (*)").eq("user_id", userId).gte("date", startDate).lte("date", endDate).order("date", {
        ascending: false
    });
    return {
        data,
        error
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/transaction-service.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionService",
    ()=>TransactionService,
    "transactionService",
    ()=>transactionService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/transaction/route.js [app-client] (ecmascript)");
;
class TransactionService {
    async getTransactions(userId) {
        let filters = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactions"])(userId, filters);
            return result;
        } catch (error) {
            console.error("Error fetching transactions:", error);
            return {
                data: null,
                error
            };
        }
    }
    async getTransactionById(transactionId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionById"])(transactionId);
            return result;
        } catch (error) {
            console.error("Error fetching transaction:", error);
            return {
                data: null,
                error
            };
        }
    }
    async createTransaction(transactionData) {
        try {
            console.log("🎯 Transaction Service - Creating transaction with data:", JSON.stringify(transactionData, null, 2));
            if (!transactionData.user_id || !transactionData.amount || !transactionData.transaction_type || !transactionData.date) {
                console.error("❌ Missing required fields:", {
                    user_id: transactionData.user_id,
                    amount: transactionData.amount,
                    transaction_type: transactionData.transaction_type,
                    date: transactionData.date
                });
                throw new Error("User ID, amount, transaction type, and date are required");
            }
            if (transactionData.amount <= 0) {
                throw new Error("Transaction amount must be greater than 0");
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTransaction"])(transactionData);
            console.log("✅ Transaction creation result:", result);
            return result;
        } catch (error) {
            console.error("❌ Error creating transaction:", error);
            return {
                data: null,
                error
            };
        }
    }
    async updateTransaction(transactionId, updates) {
        try {
            console.log("Service: Updating transaction", transactionId, updates);
            if (!transactionId) {
                throw new Error("Transaction ID is required");
            }
            if (updates.amount && updates.amount <= 0) {
                throw new Error("Transaction amount must be greater than 0");
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTransaction"])(transactionId, updates);
            console.log("Service: Update result", result);
            if (result.error) {
                console.error("Service: Update failed:", result.error);
                throw result.error;
            }
            return result;
        } catch (error) {
            console.error("Service: Error updating transaction:", error);
            throw error;
        }
    }
    async deleteTransaction(transactionId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteTransaction"])(transactionId);
            return result;
        } catch (error) {
            console.error("Error deleting transaction:", error);
            return {
                error
            };
        }
    }
    async getTransactionsByWallet(userId, walletId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionsByWallet"])(userId, walletId);
            return result;
        } catch (error) {
            console.error("Error fetching wallet transactions:", error);
            return {
                data: null,
                error
            };
        }
    }
    async getTransactionsByCategory(userId, categoryId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionsByCategory"])(userId, categoryId);
            return result;
        } catch (error) {
            console.error("Error fetching category transactions:", error);
            return {
                data: null,
                error
            };
        }
    }
    async getTransactionsByDateRange(userId, startDate, endDate) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionsByDateRange"])(userId, startDate, endDate);
            return result;
        } catch (error) {
            console.error("Error fetching transactions by date range:", error);
            return {
                data: null,
                error
            };
        }
    }
}
const transactionService = new TransactionService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTransactions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "transactionKeys",
    ()=>transactionKeys,
    "useTransactions",
    ()=>useTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/transaction-service.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const transactionKeys = {
    all: [
        "transactions"
    ],
    lists: ()=>[
            ...transactionKeys.all,
            "list"
        ],
    list: (filters)=>[
            ...transactionKeys.lists(),
            {
                filters
            }
        ],
    details: ()=>[
            ...transactionKeys.all,
            "detail"
        ],
    detail: (id)=>[
            ...transactionKeys.details(),
            id
        ],
    byWallet: (walletId)=>[
            ...transactionKeys.lists(),
            {
                walletId
            }
        ],
    byCategory: (categoryId)=>[
            ...transactionKeys.lists(),
            {
                categoryId
            }
        ],
    byDateRange: (startDate, endDate)=>[
            ...transactionKeys.lists(),
            {
                startDate,
                endDate
            }
        ]
};
const useTransactions = ()=>{
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const getTransactions = function(userId1) {
        let filters = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _s1();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: transactionKeys.list({
                userId: userId1,
                ...filters
            }),
            queryFn: {
                "useTransactions.getTransactions.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionService"].getTransactions(userId1, filters)
            }["useTransactions.getTransactions.useQuery"],
            enabled: !!userId1,
            staleTime: 2 * 60 * 1000
        });
    };
    _s1(getTransactions, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
        ];
    });
    const getTransactionById = (transactionId)=>{
        _s2();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: transactionKeys.detail(transactionId),
            queryFn: {
                "useTransactions.getTransactionById.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionService"].getTransactionById(transactionId)
            }["useTransactions.getTransactionById.useQuery"],
            enabled: !!transactionId,
            staleTime: 5 * 60 * 1000
        });
    };
    _s2(getTransactionById, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
        ];
    });
    const getTransactionsByWallet = (walletId)=>{
        _s3();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: transactionKeys.byWallet(walletId),
            queryFn: {
                "useTransactions.getTransactionsByWallet.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionService"].getTransactionsByWallet(userId, walletId)
            }["useTransactions.getTransactionsByWallet.useQuery"],
            enabled: !!userId && !!walletId,
            staleTime: 2 * 60 * 1000
        });
    };
    _s3(getTransactionsByWallet, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
        ];
    });
    const getTransactionsByCategory = (userId1, categoryId)=>{
        _s4();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: transactionKeys.byCategory(categoryId),
            queryFn: {
                "useTransactions.getTransactionsByCategory.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionService"].getTransactionsByCategory(userId1, categoryId)
            }["useTransactions.getTransactionsByCategory.useQuery"],
            enabled: !!userId1 && !!categoryId,
            staleTime: 2 * 60 * 1000
        });
    };
    _s4(getTransactionsByCategory, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
        ];
    });
    const getTransactionsByDateRange = (userId1, startDate, endDate)=>{
        _s5();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: transactionKeys.byDateRange(startDate, endDate),
            queryFn: {
                "useTransactions.getTransactionsByDateRange.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionService"].getTransactionsByDateRange(userId1, startDate, endDate)
            }["useTransactions.getTransactionsByDateRange.useQuery"],
            enabled: !!userId1 && !!startDate && !!endDate,
            staleTime: 2 * 60 * 1000
        });
    };
    _s5(getTransactionsByDateRange, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
        ];
    });
    const createTransactionMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionService"].createTransaction,
        onSuccess: {
            "useTransactions.useMutation[createTransactionMutation]": (result)=>{
                if (result.data) {
                    // Invalidate all transaction lists
                    queryClient.invalidateQueries({
                        queryKey: transactionKeys.lists()
                    });
                    // Also invalidate dashboard queries that might be affected
                    queryClient.invalidateQueries({
                        queryKey: [
                            "dashboard"
                        ]
                    });
                    queryClient.invalidateQueries({
                        queryKey: [
                            "reports"
                        ]
                    });
                }
            }
        }["useTransactions.useMutation[createTransactionMutation]"],
        onError: {
            "useTransactions.useMutation[createTransactionMutation]": (error)=>{
                console.error("Error creating transaction:", error);
            }
        }["useTransactions.useMutation[createTransactionMutation]"]
    });
    const updateTransactionMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useTransactions.useMutation[updateTransactionMutation]": (param)=>{
                let { transactionId, updates } = param;
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionService"].updateTransaction(transactionId, updates);
            }
        }["useTransactions.useMutation[updateTransactionMutation]"],
        onSuccess: {
            "useTransactions.useMutation[updateTransactionMutation]": (result, variables)=>{
                if (result.data) {
                    // Update the specific transaction in all lists and cache
                    queryClient.setQueryData(transactionKeys.detail(variables.transactionId), result.data[0]);
                    queryClient.setQueryData(transactionKeys.lists(), {
                        "useTransactions.useMutation[updateTransactionMutation]": (old)=>old === null || old === void 0 ? void 0 : old.map({
                                "useTransactions.useMutation[updateTransactionMutation]": (transaction)=>transaction.transaction_id === variables.transactionId ? result.data[0] : transaction
                            }["useTransactions.useMutation[updateTransactionMutation]"])
                    }["useTransactions.useMutation[updateTransactionMutation]"]);
                    // Invalidate dashboard and reports
                    queryClient.invalidateQueries({
                        queryKey: [
                            "dashboard"
                        ]
                    });
                    queryClient.invalidateQueries({
                        queryKey: [
                            "reports"
                        ]
                    });
                }
            }
        }["useTransactions.useMutation[updateTransactionMutation]"],
        onError: {
            "useTransactions.useMutation[updateTransactionMutation]": (error)=>{
                console.error("Error updating transaction:", error);
            }
        }["useTransactions.useMutation[updateTransactionMutation]"]
    });
    const deleteTransactionMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionService"].deleteTransaction,
        onSuccess: {
            "useTransactions.useMutation[deleteTransactionMutation]": (result, variables)=>{
                // Remove the transaction from all caches
                queryClient.removeQueries({
                    queryKey: transactionKeys.detail(variables)
                });
                queryClient.setQueryData(transactionKeys.lists(), {
                    "useTransactions.useMutation[deleteTransactionMutation]": (old)=>old === null || old === void 0 ? void 0 : old.filter({
                            "useTransactions.useMutation[deleteTransactionMutation]": (transaction)=>transaction.transaction_id !== variables
                        }["useTransactions.useMutation[deleteTransactionMutation]"])
                }["useTransactions.useMutation[deleteTransactionMutation]"]);
                // Invalidate dashboard and reports
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboard"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "reports"
                    ]
                });
            }
        }["useTransactions.useMutation[deleteTransactionMutation]"],
        onError: {
            "useTransactions.useMutation[deleteTransactionMutation]": (error)=>{
                console.error("Error deleting transaction:", error);
            }
        }["useTransactions.useMutation[deleteTransactionMutation]"]
    });
    // Mutation methods
    const createTransaction = (transactionData)=>{
        return createTransactionMutation.mutateAsync(transactionData);
    };
    const updateTransaction = (transactionId, updates)=>{
        return updateTransactionMutation.mutateAsync({
            transactionId,
            updates
        });
    };
    const deleteTransaction = (transactionId)=>{
        return deleteTransactionMutation.mutateAsync(transactionId);
    };
    const clearError = ()=>{
        createTransactionMutation.reset();
        updateTransactionMutation.reset();
        deleteTransactionMutation.reset();
    };
    return {
        // Query methods
        getTransactions,
        getTransactionById,
        getTransactionsByWallet,
        getTransactionsByCategory,
        getTransactionsByDateRange,
        // Mutation methods
        createTransaction,
        updateTransaction,
        deleteTransaction,
        clearError,
        // Mutation states
        mutations: {
            createTransaction: createTransactionMutation,
            updateTransaction: updateTransactionMutation,
            deleteTransaction: deleteTransactionMutation
        }
    };
};
_s(useTransactions, "A47QGLsNVJAK+lWFx37jZDg+L7c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const __TURBOPACK__default__export__ = useTransactions;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Providers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/providers.js
__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/react-query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$userContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/userContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTransactions.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Providers(param) {
    let { children } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Providers.useEffect": ()=>{
            try {
                var _initialSession_user;
                const initialSession = window.__FINTRACK_INITIAL_SESSION__;
                const initialData = window.__FINTRACK_INITIAL_DATA__;
                const userId = initialSession === null || initialSession === void 0 ? void 0 : (_initialSession_user = initialSession.user) === null || _initialSession_user === void 0 ? void 0 : _initialSession_user.id;
                if (userId && initialData) {
                    // Seed wallets
                    if (initialData.wallets) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryClient"].setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletKeys"].list({
                            userId
                        }), initialData.wallets);
                    }
                    // Seed transactions
                    if (initialData.transactions) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryClient"].setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionKeys"].list({
                            userId
                        }), initialData.transactions);
                    }
                    // Seed budgets
                    if (initialData.budgets) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryClient"].setQueryData([
                            "budgets",
                            "list",
                            {
                                userId
                            }
                        ], initialData.budgets);
                    }
                    // Seed goals
                    if (initialData.goals) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryClient"].setQueryData([
                            "goals",
                            "list",
                            {
                                userId
                            }
                        ], initialData.goals);
                    }
                }
            } catch (err) {
            // ignore
            }
        }
    }["Providers.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryClient"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$userContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/Providers.js",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/Providers.js",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(Providers, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e490330b._.js.map