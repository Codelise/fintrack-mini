import { UserProvider } from "@/context/userContext";
import { cookies } from "next/headers";
import { getSupabaseServerClient } from "@/lib/supabase-server";

export const metadata = {
  title: "FinTrack",
  description: "Manage your finances easily",
};

export default async function RootLayout({ children }) {
  // Best-effort: try to read a supabase session cookie and expose it to the client
  // for immediate hydration. Many sessions in this project are stored in
  // localStorage, so this may be absent. This is intentionally non-blocking.
  let initialSession = null;
  try {
    const cookieStore = cookies();
    const raw =
      cookieStore.get("supabase.auth.token")?.value ||
      cookieStore.get("supabase-session")?.value ||
      null;

    if (raw) {
      // supabase client sometimes stores a JSON string in the cookie
      const parsed = JSON.parse(raw);
      const user = parsed?.user || parsed?.currentSession?.user || null;
      if (user) initialSession = { user };
    }
  } catch (err) {
    // ignore parsing errors — fallback to client detection
    initialSession = null;
  }

  // Best-effort server fetch of initial dashboard data when we have a user id
  let initialData = null;
  try {
    const userId = initialSession?.user?.id;
    if (userId) {
      const supabaseServer = getSupabaseServerClient();

      const [
        { data: wallets },
        { data: transactions },
        { data: budgets },
        { data: goals },
      ] = await Promise.all([
        supabaseServer
          .from("wallets")
          .select("*")
          .eq("user_id", userId)
          .order("created_at", { ascending: false }),
        supabaseServer
          .from("transactions")
          .select(`*, categories(*)`)
          .eq("user_id", userId)
          .order("date", { ascending: false })
          .limit(10),
        supabaseServer.from("budgets").select("*").eq("user_id", userId),
        supabaseServer.from("goals").select("*").eq("user_id", userId),
      ]);

      initialData = { wallets, transactions, budgets, goals };
    }
  } catch (err) {
    // If server fetch fails, continue without blocking the client.
    initialData = null;
  }

  return (
    <>
      <UserProvider initialSession={initialSession}>{children}</UserProvider>
      {initialSession && (
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__FINTRACK_INITIAL_SESSION__ = ${JSON.stringify(
              initialSession
            )}; window.__FINTRACK_INITIAL_DATA__ = ${JSON.stringify(
              initialData
            )};`,
          }}
        />
      )}
    </>
  );
}
