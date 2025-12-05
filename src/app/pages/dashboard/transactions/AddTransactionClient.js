"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import useTransactions from "@/hooks/useTransactions";
import { useUser } from "@/context/userContext";
import { supabase } from "@/lib/supabase";

export default function AddTransactionClient({
  initialWallets = [],
  initialTransactions = [],
  initialCategories = [],
}) {
  const { createTransaction, getTransactions, mutations } = useTransactions();
  const { createTransaction: createTransactionMutation } = mutations;
  const { user, loading: userLoading } = useUser();

  const [formData, setFormData] = useState({
    amount: "",
    transaction_type: "expense",
    date: new Date().toISOString().split("T")[0],
    description: "",
    category_id: "",
    wallet_id: "",
  });

  const [categories, setCategories] = useState(initialCategories || []);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [wallets, setWallets] = useState(initialWallets || []);
  const [loadingData, setLoadingData] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [transactions, setTransactions] = useState(initialTransactions || []);
  const [loadingTransactions, setLoadingTransactions] = useState(false);

  useEffect(() => {
    // If initial categories provided by server, set filtered categories
    if (categories.length > 0) {
      const expenseCats = categories.filter(
        (cat) => cat.category_type === "expense"
      );
      setFilteredCategories(expenseCats);
    }
  }, [categories]);

  useEffect(() => {
    // If no initial categories, fetch them client-side
    const fetchCategoriesAndWallets = async () => {
      if (categories.length === 0) {
        try {
          const { data: categoriesData, error: categoriesError } =
            await supabase
              .from("categories")
              .select("category_id, category_name, category_type")
              .order("category_name", { ascending: true });

          if (!categoriesError && categoriesData) {
            setCategories(categoriesData);
            const expenseCats = categoriesData.filter(
              (cat) => cat.category_type === "expense"
            );
            setFilteredCategories(expenseCats);
          }
        } catch (err) {
          console.error("Error fetching categories:", err);
        }
      }

      if (wallets.length === 0 && user?.id) {
        try {
          const { data: walletsData, error: walletsError } = await supabase
            .from("wallets")
            .select("wallet_id, wallet_name, balance, currency")
            .eq("user_id", user.id)
            .order("created_at", { ascending: false });

          if (!walletsError && walletsData) setWallets(walletsData);
        } catch (err) {
          console.error("Error fetching wallets:", err);
        }
      }

      // If no initial transactions, fetch them
      if (transactions.length === 0 && user?.id) {
        await fetchTransactions();
      }
    };

    fetchCategoriesAndWallets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchTransactions = async () => {
    if (!user?.id) return;
    setLoadingTransactions(true);
    try {
      const { data: transactionsData, error } = await supabase
        .from("transactions")
        .select(
          `
          *,
          categories (category_name, category_type),
          wallets (wallet_name, currency)
        `
        )
        .eq("user_id", user.id)
        .order("date", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(50);

      if (!error) setTransactions(transactionsData || []);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    } finally {
      setLoadingTransactions(false);
    }
  };

  useEffect(() => {
    if (categories.length > 0) {
      const filtered = categories.filter(
        (category) => category.category_type === formData.transaction_type
      );
      setFilteredCategories(filtered);
      setFormData((prev) => ({ ...prev, category_id: "" }));
    }
  }, [formData.transaction_type, categories]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTransactionTypeChange = (type) => {
    setFormData((prev) => ({ ...prev, transaction_type: type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.id) return;
    if (!formData.amount || !formData.wallet_id || !formData.category_id)
      return;

    try {
      const submissionData = {
        user_id: user.id,
        amount: parseFloat(formData.amount),
        transaction_type: formData.transaction_type,
        date: formData.date,
        description: formData.description || null,
        wallet_id: formData.wallet_id,
        category_id: formData.category_id,
        budget_id: null,
        goal_id: null,
      };

      const result = await createTransaction(submissionData);
      if (result.error) throw new Error(result.error.message);

      setShowSuccess(true);
      setFormData({
        amount: "",
        transaction_type: formData.transaction_type,
        date: new Date().toISOString().split("T")[0],
        description: "",
        category_id: "",
        wallet_id: formData.wallet_id,
      });
      await fetchTransactions();
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error("Failed to create transaction:", err);
    }
  };

  const handleCancel = () => {
    setFormData({
      amount: "",
      transaction_type: "expense",
      date: new Date().toISOString().split("T")[0],
      description: "",
      category_id: "",
      wallet_id: "",
    });
  };

  const formatCurrency = (amount, currency = "PHP") => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const loading =
    createTransactionMutation.isPending || userLoading || loadingData;
  const error = createTransactionMutation.error;

  if (userLoading) {
    return (
      <div className="min-h-screen bg-[#21121e] text-white font-sans">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white">Loading...</div>
        </div>
      </div>
    );
  }

  if (!user && !userLoading) {
    return (
      <div className="min-h-screen bg-[#21121e] text-white font-sans">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white text-center">
            <p>Please log in to add transactions.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#21121e] text-white font-sans">
      <Navbar />

      <main className="flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="mt-15 w-full max-w-6xl">
          <div className="flex flex-wrap justify-between gap-3 p-4 mb-6">
            <div className="flex w-full flex-col gap-3 text-center">
              <h1 className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
                Transactions
              </h1>
              <p className="text-accent-cream/70 text-base font-normal leading-normal">
                Record your income and expenses to track your finances.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-center">
                  Transaction created successfully!
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300 text-center">
                  Error: {error.message}
                </div>
              )}

              <div className="bg-white/10 p-6 sm:p-8 rounded-xl flex flex-col gap-6">
                <h2 className="text-white text-2xl font-bold text-center">
                  Add New Transaction
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex justify-center">
                    <div className="flex items-center bg-black/30 p-1 rounded-full">
                      <button
                        type="button"
                        className={`px-4 sm:px-6 py-2 text-sm font-bold rounded-full transition-colors cursor-pointer ${
                          formData.transaction_type === "expense"
                            ? "bg-[#9c167f] text-white"
                            : "text-accent-cream/70 hover:text-accent-cream"
                        }`}
                        onClick={() => handleTransactionTypeChange("expense")}
                      >
                        Expense
                      </button>
                      <button
                        type="button"
                        className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                          formData.transaction_type === "income"
                            ? "bg-[#9c167f] text-white"
                            : "text-accent-cream/70 hover:text-accent-cream"
                        }`}
                        onClick={() => handleTransactionTypeChange("income")}
                      >
                        Income
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <label className="flex flex-col">
                      <span className="text-white text-base font-medium leading-normal pb-2">
                        Amount *
                      </span>
                      <input
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="w-full rounded-lg text-white focus:outline-none focus:ring-2 border border-transparent bg-black/20 focus:border-black h-12 sm:h-14 placeholder:text-white/30 px-4 text-base font-normal leading-normal"
                        placeholder="₱0.00"
                        type="number"
                        step="0.01"
                        min="0.01"
                        required
                      />
                    </label>

                    <label className="flex flex-col">
                      <span className="text-white text-base font-medium leading-normal pb-2">
                        Wallet *
                      </span>
                      <div className="relative w-full">
                        <select
                          name="wallet_id"
                          value={formData.wallet_id}
                          onChange={handleInputChange}
                          className="appearance-none w-full cursor-pointer rounded-lg text-white focus:outline-none focus:ring-2 border border-transparent bg-black/20 focus:border-black/20 h-12 sm:h-14 px-4 text-base font-normal leading-normal"
                          required
                        >
                          <option value="">Select Wallet</option>
                          {wallets.map((wallet) => (
                            <option
                              key={wallet.wallet_id}
                              value={wallet.wallet_id}
                            >
                              {wallet.wallet_name} ({wallet.currency})
                            </option>
                          ))}
                        </select>
                      </div>
                    </label>
                  </div>

                  {/* form continues... keep rest of UI same as before */}
                  <div className="flex gap-3 justify-end">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-4 py-2 rounded bg-[#382935]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded bg-[#9c167f]"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white/6 p-6 sm:p-8 rounded-xl">
                <h2 className="text-white text-2xl font-bold mb-4">
                  Recent Transactions
                </h2>
                {loadingTransactions ? (
                  <div>Loading...</div>
                ) : (
                  <ul className="space-y-3">
                    {transactions.map((tx) => (
                      <li
                        key={tx.transaction_id}
                        className="flex justify-between bg-black/20 p-3 rounded-lg"
                      >
                        <div>
                          <div className="text-white font-semibold">
                            {tx.description ||
                              (tx.categories?.category_name ??
                                "No description")}
                          </div>
                          <div className="text-accent-cream/70 text-sm">
                            {formatDate(tx.date)} • {tx.wallets?.wallet_name}
                          </div>
                        </div>
                        <div
                          className={`font-bold ${
                            tx.transaction_type === "income"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {formatCurrency(tx.amount, tx.wallets?.currency)}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
