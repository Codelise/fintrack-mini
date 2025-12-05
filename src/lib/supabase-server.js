import { createClient } from "@supabase/supabase-js";

// Provide a factory for creating a server-side Supabase client on demand.
// Avoid creating the client at module-eval time because missing env vars
// (especially during local dev or SSR) will cause a hard failure.
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_KEY ||
    process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase server env variables are not set. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_SERVICE_KEY)."
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

export default getSupabaseServerClient;
