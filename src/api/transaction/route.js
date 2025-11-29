import { supabase } from "@/lib/supabase";

export async function getTransactions(userId, filters = {}) {
  let query = supabase
    .from("transactions")
    .select(`*, categories (*)`)
    .eq("user_id", userId);

  if (filters.wallet_id) {
    query = query.eq("wallet_id", filters.wallet_id);
  }

  if (filters.startDate && filters.endDate) {
    query = query.gte("date", filters.startDate).lte("date", filters.endDate);
  }

  const { data, error } = await query.order("date", { ascending: false });
  return { data, error };
}

export async function createTransaction(transactionData) {
  const { data, error } = await supabase
    .from("transactions")
    .insert([transactionData])
    .select();

  return { data, error };
}

export async function updateTransaction(transactionId, updates) {
  const { data, error } = await supabase
    .from("transactions")
    .update(updates)
    .eq("transaction_id", transactionId)
    .select();

  return { data, error };
}

export async function deleteTransaction(transactionId) {
  const { data, error } = await supabase
    .from("transactions")
    .delete()
    .eq("transaction_id", transactionId);

  return { data, error };
}

export async function getTransactionById(transactionId) {
  const { data, error } = await supabase
    .from("transactions")
    .select(`*, categories (*)`)
    .eq("transaction_id", transactionId)
    .single();

  return { data, error };
}

export async function getTransactionsByWallet(userId, walletId) {
  const { data, error } = await supabase
    .from("transactions")
    .select(`*, categories (*)`)
    .eq("user_id", userId)
    .eq("wallet_id", walletId)
    .order("date", { ascending: false });

  return { data, error };
}

export async function getTransactionsByCategory(userId, categoryId) {
  const { data, error } = await supabase
    .from("transactions")
    .select(`*, categories (*)`)
    .eq("user_id", userId)
    .eq("category_id", categoryId)
    .order("date", { ascending: false });

  return { data, error };
}

export async function getTransactionsByDateRange(userId, startDate, endDate) {
  const { data, error } = await supabase
    .from("transactions")
    .select(`*, categories (*)`)
    .eq("user_id", userId)
    .gte("date", startDate)
    .lte("date", endDate)
    .order("date", { ascending: false });

  return { data, error };
}
