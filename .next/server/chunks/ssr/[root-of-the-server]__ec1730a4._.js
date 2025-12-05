module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/react-query.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queryClient",
    ()=>queryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false
        }
    }
});
}),
"[project]/src/lib/supabase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://xluxxuyionzsocdvinax.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsdXh4dXlpb256c29jZHZpbmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODMwNjcsImV4cCI6MjA3Nzk1OTA2N30.iOzYJKNYpIfpdht3V8PX_EU0KgYmuH-c8NaQKjvMIG0");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: "pkce",
        debug: false
    }
});
}),
"[project]/src/context/userContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProvider",
    ()=>UserProvider,
    "useUser",
    ()=>useUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const UserContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
function UserProvider({ children, initialSession }) {
    // If the server supplied an initialSession prop, use it to avoid an
    // unnecessary client-side roundtrip.
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialSession?.user ?? null);
    const [isOnboarded, setIsOnboarded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialSession ? false : true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If the server provided an initial session, skip the immediate getSession
        // call but still subscribe to auth state changes so the client stays in sync.
        let mounted = true;
        const setupSubscription = ()=>{
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange(async (event, session)=>{
                setUser(session?.user ?? null);
                setLoading(false);
                if (event === "SIGNED_OUT") {
                    setIsOnboarded(false);
                }
            });
            return ()=>subscription.unsubscribe();
        };
        if (initialSession && initialSession.user) {
            // Server provided user — skip fetching; still subscribe.
            const unsub = setupSubscription();
            return unsub;
        }
        // No initial session from server — perform normal client session check.
        const getSession = async ()=>{
            try {
                const { data: { session }, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                if (error) {
                    console.error("Error getting session:", error);
                    return;
                }
                if (session?.user) {
                    setUser(session.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Error in getSession:", error);
            } finally{
                if (mounted) setLoading(false);
            }
        };
        getSession();
        const unsub = setupSubscription();
        return ()=>{
            mounted = false;
            if (typeof unsub === "function") unsub();
        };
    }, [
        initialSession
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UserContext.Provider, {
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
const useUser = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
}),
"[project]/src/api/wallet/route.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-ssr] (ecmascript)");
;
async function getUserWallets(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("wallets").select("*").eq("user_id", userId).order("created_at", {
        ascending: false
    });
    return {
        data,
        error
    };
}
async function createWallet(walletData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("wallets").insert([
        walletData
    ]).select();
    return {
        data,
        error
    };
}
async function updateWallet(walletId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("wallets").update(updates).eq("wallet_id", walletId).select();
    return {
        data,
        error
    };
}
async function deleteWallet(walletId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("wallets").delete().eq("wallet_id", walletId);
    return {
        data,
        error
    };
}
async function getWalletById(walletId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("wallets").select("*").eq("wallet_id", walletId).single();
    return {
        data,
        error
    };
}
}),
"[project]/src/services/wallet-service.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletService",
    ()=>WalletService,
    "walletService",
    ()=>walletService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$wallet$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/wallet/route.js [app-ssr] (ecmascript)");
;
class WalletService {
    async getWallets(userId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$wallet$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserWallets"])(userId);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$wallet$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWallet"])(walletData);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$wallet$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateWallet"])(walletId, updates);
            return result;
        } catch (error) {
            console.error("Error updating wallet:", error);
            throw error;
        }
    }
    async deleteWallet(walletId) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$wallet$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteWallet"])(walletId);
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
}),
"[project]/src/hooks/useWallets.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWallets",
    ()=>useWallets,
    "walletKeys",
    ()=>walletKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/wallet-service.js [app-ssr] (ecmascript)");
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
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const getWallets = (userId)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: walletKeys.list({
                userId
            }),
            queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletService"].getWallets(userId),
            enabled: !!userId,
            staleTime: 2 * 60 * 1000
        });
    };
    const createWalletMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletService"].createWallet,
        onSuccess: (result)=>{
            if (result.data) {
                queryClient.invalidateQueries({
                    queryKey: walletKeys.lists()
                });
            }
        },
        onError: (error)=>{
            console.error("Error creating wallet:", error);
        }
    });
    const createDefaultWalletMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletService"].createDefaultWallet,
        onSuccess: (result)=>{
            if (result.data) {
                queryClient.invalidateQueries({
                    queryKey: walletKeys.lists()
                });
            }
        },
        onError: (error)=>{
            console.error("Error creating default wallet:", error);
        }
    });
    const updateWalletMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ walletId, updates })=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletService"].updateWallet(walletId, updates),
        onSuccess: (result, variables)=>{
            if (result.data) {
                queryClient.setQueryData(walletKeys.lists(), (old)=>old?.map((wallet)=>wallet.wallet_id === variables.walletId ? result.data[0] : wallet));
            }
        }
    });
    const deleteWalletMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$wallet$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletService"].deleteWallet,
        onSuccess: (result, variables)=>{
            queryClient.setQueryData(walletKeys.lists(), (old)=>old?.filter((wallet)=>wallet.wallet_id !== variables));
        }
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
}),
"[project]/src/api/transaction/route.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.js [app-ssr] (ecmascript)");
;
async function getTransactions(userId, filters = {}) {
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("transactions").select(`*, categories (*)`).eq("user_id", userId);
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("transactions").insert([
        transactionData
    ]).select();
    return {
        data,
        error
    };
}
async function updateTransaction(transactionId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("transactions").update(updates).eq("transaction_id", transactionId).select();
    return {
        data,
        error
    };
}
async function deleteTransaction(transactionId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("transactions").delete().eq("transaction_id", transactionId);
    return {
        data,
        error
    };
}
async function getTransactionById(transactionId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("transactions").select(`*, categories (*)`).eq("transaction_id", transactionId).single();
    return {
        data,
        error
    };
}
async function getTransactionsByWallet(userId, walletId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("transactions").select(`*, categories (*)`).eq("user_id", userId).eq("wallet_id", walletId).order("date", {
        ascending: false
    });
    return {
        data,
        error
    };
}
async function getTransactionsByCategory(userId, categoryId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("transactions").select(`*, categories (*)`).eq("user_id", userId).eq("category_id", categoryId).order("date", {
        ascending: false
    });
    return {
        data,
        error
    };
}
async function getTransactionsByDateRange(userId, startDate, endDate) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("transactions").select(`*, categories (*)`).eq("user_id", userId).gte("date", startDate).lte("date", endDate).order("date", {
        ascending: false
    });
    return {
        data,
        error
    };
}
}),
"[project]/src/services/transaction-service.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionService",
    ()=>TransactionService,
    "transactionService",
    ()=>transactionService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/transaction/route.js [app-ssr] (ecmascript)");
;
class TransactionService {
    async getTransactions(userId, filters = {}) {
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactions"])(userId, filters);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionById"])(transactionId);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransaction"])(transactionData);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateTransaction"])(transactionId, updates);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteTransaction"])(transactionId);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionsByWallet"])(userId, walletId);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionsByCategory"])(userId, categoryId);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$transaction$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionsByDateRange"])(userId, startDate, endDate);
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
}),
"[project]/src/hooks/useTransactions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "transactionKeys",
    ()=>transactionKeys,
    "useTransactions",
    ()=>useTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/transaction-service.js [app-ssr] (ecmascript)");
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
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const getTransactions = (userId1, filters = {})=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: transactionKeys.list({
                userId: userId1,
                ...filters
            }),
            queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionService"].getTransactions(userId1, filters),
            enabled: !!userId1,
            staleTime: 2 * 60 * 1000
        });
    };
    const getTransactionById = (transactionId)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: transactionKeys.detail(transactionId),
            queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionService"].getTransactionById(transactionId),
            enabled: !!transactionId,
            staleTime: 5 * 60 * 1000
        });
    };
    const getTransactionsByWallet = (walletId)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: transactionKeys.byWallet(walletId),
            queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionService"].getTransactionsByWallet(userId, walletId),
            enabled: !!userId && !!walletId,
            staleTime: 2 * 60 * 1000
        });
    };
    const getTransactionsByCategory = (userId1, categoryId)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: transactionKeys.byCategory(categoryId),
            queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionService"].getTransactionsByCategory(userId1, categoryId),
            enabled: !!userId1 && !!categoryId,
            staleTime: 2 * 60 * 1000
        });
    };
    const getTransactionsByDateRange = (userId1, startDate, endDate)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: transactionKeys.byDateRange(startDate, endDate),
            queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionService"].getTransactionsByDateRange(userId1, startDate, endDate),
            enabled: !!userId1 && !!startDate && !!endDate,
            staleTime: 2 * 60 * 1000
        });
    };
    const createTransactionMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionService"].createTransaction,
        onSuccess: (result)=>{
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
        },
        onError: (error)=>{
            console.error("Error creating transaction:", error);
        }
    });
    const updateTransactionMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ transactionId, updates })=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionService"].updateTransaction(transactionId, updates),
        onSuccess: (result, variables)=>{
            if (result.data) {
                // Update the specific transaction in all lists and cache
                queryClient.setQueryData(transactionKeys.detail(variables.transactionId), result.data[0]);
                queryClient.setQueryData(transactionKeys.lists(), (old)=>old?.map((transaction)=>transaction.transaction_id === variables.transactionId ? result.data[0] : transaction));
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
        },
        onError: (error)=>{
            console.error("Error updating transaction:", error);
        }
    });
    const deleteTransactionMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2d$service$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionService"].deleteTransaction,
        onSuccess: (result, variables)=>{
            // Remove the transaction from all caches
            queryClient.removeQueries({
                queryKey: transactionKeys.detail(variables)
            });
            queryClient.setQueryData(transactionKeys.lists(), (old)=>old?.filter((transaction)=>transaction.transaction_id !== variables));
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
        },
        onError: (error)=>{
            console.error("Error deleting transaction:", error);
        }
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
const __TURBOPACK__default__export__ = useTransactions;
}),
"[project]/src/app/Providers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/providers.js
__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/react-query.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$userContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/userContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWallets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useWallets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTransactions.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Providers({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const initialSession = window.__FINTRACK_INITIAL_SESSION__;
            const initialData = window.__FINTRACK_INITIAL_DATA__;
            const userId = initialSession?.user?.id;
            if (userId && initialData) {
                // Seed wallets
                if (initialData.wallets) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryClient"].setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWallets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletKeys"].list({
                        userId
                    }), initialData.wallets);
                }
                // Seed transactions
                if (initialData.transactions) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryClient"].setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTransactions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transactionKeys"].list({
                        userId
                    }), initialData.transactions);
                }
                // Seed budgets
                if (initialData.budgets) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryClient"].setQueryData([
                        "budgets",
                        "list",
                        {
                            userId
                        }
                    ], initialData.budgets);
                }
                // Seed goals
                if (initialData.goals) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryClient"].setQueryData([
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
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryClient"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$userContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserProvider"], {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ec1730a4._.js.map