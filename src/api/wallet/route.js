import { supabase } from "@/lib/supabase";

export async function getUserWallets(userId) {
  const { data, error } = await supabase
    .from("wallets")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  return { data, error };
}

export async function createWallet(walletData) {
  const { data, error } = await supabase
    .from("wallets")
    .insert([walletData])
    .select();

  return { data, error };
}

export async function updateWallet(walletId, updates) {
  const { data, error } = await supabase
    .from("wallets")
    .update(updates)
    .eq("wallet_id", walletId)
    .select();

  return { data, error };
}

export async function deleteWallet(walletId) {
  const { data, error } = await supabase
    .from("wallets")
    .delete()
    .eq("wallet_id", walletId);

  return { data, error };
}

export async function getWalletById(walletId) {
  const { data, error } = await supabase
    .from("wallets")
    .select("*")
    .eq("wallet_id", walletId)
    .single();

  return { data, error };
}
