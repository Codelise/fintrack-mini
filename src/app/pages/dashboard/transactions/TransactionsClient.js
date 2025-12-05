"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/app/components/Navbar";
import useTransactions from "@/hooks/useTransactions";
import { useUser } from "@/context/userContext";
import { supabase } from "@/lib/supabase";

export default function TransactionsClient() {
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

  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [wallets, setWallets] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  // New state for transactions history
  const [transactions, setTransactions] = useState([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);

  // Function to fetch transactions
  const fetchTransactions = useCallback(async () => {
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
        .limit(50); // Limit to last 50 transactions

      if (error) {
        console.error("Error fetching transactions:", error);
      } else {
        setTransactions(transactionsData || []);
        console.log("≡ƒôï Transactions fetched:", transactionsData?.length);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoadingTransactions(false);
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.id) return;

      try {
        console.log("≡ƒöä Starting to fetch categories...");

        // Fetch categories from database - REMOVED user_id filter
        const { data: categoriesData, error: categoriesError } = await supabase
          .from("categories")
          .select("category_id, category_name, category_type")
          .order("category_name", { ascending: true });

        console.log("≡ƒôè Categories fetch result:", {
          data: categoriesData,
          error: categoriesError,
          count: categoriesData?.length,
        });

        if (!categoriesError && categoriesData) {
          setCategories(categoriesData);
          console.log(
            "Γ£à Categories set in state:",
            categoriesData.length,
            "categories"
          );

          // Initially show expense categories (since default type is expense)
          const expenseCats = categoriesData.filter(
            (cat) => cat.category_type === "expense"
          );
          setFilteredCategories(expenseCats);
          console.log("≡ƒÆ░ Filtered expense categories:", expenseCats.length);
        } else {
          console.error("Γ¥î Error fetching categories:", categoriesError);
        }

        // Fetch wallets (keep this as is since wallets are user-specific)
        const { data: walletsData, error: walletsError } = await supabase
          .from("wallets")
          .select("wallet_id, wallet_name, balance, currency")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        console.log("≡ƒæ¢ Wallets fetch result:", {
          data: walletsData,
          error: walletsError,
          count: walletsData?.length,
        });

        if (!walletsError && walletsData) {
          setWallets(walletsData);
        } else {
          console.error("Error fetching wallets:", walletsError);
        }

        // Fetch transactions history
        await fetchTransactions();
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, [user?.id, fetchTransactions]);

  // Filter categories based on transaction type
  useEffect(() => {
    if (categories.length > 0) {
      const filtered = categories.filter(
        (category) => category.category_type === formData.transaction_type
      );
      setFilteredCategories(filtered);

      // Reset category selection when type changes
      setFormData((prev) => ({
        ...prev,
        category_id: "",
      }));
    }
  }, [formData.transaction_type, categories]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle transaction type toggle
  const handleTransactionTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      transaction_type: type,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.id) {
      console.error("User not found. Please make sure you're logged in.");
      return;
    }

    // Validate required fields
    if (!formData.amount || !formData.wallet_id || !formData.category_id) {
      console.error("Amount, wallet, and category are required");
      return;
    }

    try {
      // Prepare the data for submission
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

      console.log("Submitting transaction:", submissionData);

      const result = await createTransaction(submissionData);
      console.log("Transaction creation result:", result);

      if (result.error) {
        throw new Error(result.error.message);
      }

      // Show success message
      setShowSuccess(true);

      // Reset form but keep wallet selection
      setFormData({
        amount: "",
        transaction_type: formData.transaction_type, // Keep same type
        date: new Date().toISOString().split("T")[0],
        description: "",
        category_id: "",
        wallet_id: formData.wallet_id, // Keep the same wallet
      });

      // Refresh transactions list
      await fetchTransactions();

      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error("Failed to create transaction:", err);
    }
  };

  // Handle cancel
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

  // Format currency
  const formatCurrency = (amount, currency = "PHP") => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Format date
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

      {/* Main Content */}
      <main className="flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="mt-15 w-full max-w-6xl">
          {/* Page Header */}
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
            {/* Left Column - Add Transaction Form */}
            <div>
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-center">
                  Transaction created successfully!
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300 text-center">
                  Error: {error.message}
                </div>
              )}

              {/* Transaction Form */}
              <div className="bg-white/10 p-6 sm:p-8 rounded-xl flex flex-col gap-6">
                <h2 className="text-white text-2xl font-bold text-center">
                  Add New Transaction
                </h2>

                {/* ... (Keep all your existing form code exactly as it is) */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Transaction Type Toggle */}
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

                  {/* Amount and Wallet Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Amount Input */}
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

                    {/* Wallet Selection */}
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
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* Date Field */}
                  <div className="flex flex-col">
                    <span className="text-white text-base font-medium leading-normal pb-2">
                      Date *
                    </span>
                    <div className="flex w-full items-stretch rounded-lg">
                      <input
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="flex-1 rounded-l-lg text-white focus:outline-none focus:ring-2 border border-transparent bg-black/20 focus:border-black h-12 sm:h-14 placeholder:text-white/30 px-4 border-r-0 text-base font-normal leading-normal"
                        type="date"
                        required
                      />
                      <div className="text-white flex border border-transparent bg-black/20 items-center justify-center px-3 sm:px-4 rounded-r-lg border-l-0">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Category Field */}
                  <div className="flex flex-col">
                    <span className="text-white text-base font-medium leading-normal pb-2">
                      Category *
                    </span>
                    <div className="relative w-full">
                      <select
                        name="category_id"
                        value={formData.category_id}
                        onChange={handleInputChange}
                        className="appearance-none w-full cursor-pointer rounded-lg text-white focus:outline-none focus:ring-2 border border-transparent bg-black/20 focus:border-black/20 h-12 sm:h-14 px-4 text-base font-normal leading-normal"
                        required
                      >
                        <option value="">
                          Select{" "}
                          {formData.transaction_type === "income"
                            ? "Income"
                            : "Expense"}{" "}
                          Category
                        </option>
                        {filteredCategories.map((category) => (
                          <option
                            key={category.category_id}
                            value={category.category_id}
                          >
                            {category.category_name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm mt-1">
                      {formData.transaction_type === "income"
                        ? "Income categories"
                        : "Expense categories"}{" "}
                      ({filteredCategories.length} available)
                    </p>
                  </div>

                  {/* Description Field */}
                  <div className="flex flex-col">
                    <span className="text-white text-base font-medium leading-normal pb-2">
                      Description
                    </span>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full rounded-lg text-white focus:outline-none focus:ring-2 border border-transparent bg-black/20 focus:border-black/20 min-h-24 placeholder:text-white/30 p-4 text-base font-normal leading-normal resize-none"
                      placeholder="Add a description (optional)"
                      rows={3}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleCancel}
                      disabled={loading}
                      className="w-full sm:w-auto flex items-center justify-center rounded-full h-12 bg-black/10 text-accent-cream text-sm font-bold leading-normal tracking-[0.015em] px-6 sm:px-8 border-2 border-[#9c167f] hover:bg-[#9c167f] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto flex items-center justify-center rounded-full h-12 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] px-6 sm:px-8 hover:bg-[#9c167f]/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Saving..." : "Save Transaction"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column - Transactions History */}
            <div>
              <div className="bg-white/10 p-6 sm:p-8 rounded-xl">
                <h2 className="text-white text-2xl font-bold text-center mb-6">
                  Recent Transactions
                </h2>

                {loadingTransactions ? (
                  <div className="text-center py-8">
                    <div className="text-white">Loading transactions...</div>
                  </div>
                ) : transactions.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-white/50">No transactions yet</div>
                    <p className="text-white/30 text-sm mt-2">
                      Your transactions will appear here
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {transactions.map((transaction) => (
                      <div
                        key={transaction.transaction_id}
                        className="bg-black/20 rounded-lg p-4 border border-white/10"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`inline-block w-2 h-2 rounded-full ${
                                  transaction.transaction_type === "income"
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                }`}
                              ></span>
                              <span className="text-white font-medium">
                                {transaction.categories?.category_name}
                              </span>
                            </div>
                            <p className="text-white/70 text-sm">
                              {transaction.description || "No description"}
                            </p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-white/50 text-xs">
                                {formatDate(transaction.date)}
                              </span>
                              <span className="text-white/50 text-xs">
                                {transaction.wallets?.wallet_name}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`text-lg font-bold ${
                                transaction.transaction_type === "income"
                                  ? "text-green-400"
                                  : "text-red-400"
                              }`}
                            >
                              {transaction.transaction_type === "income"
                                ? "+"
                                : "-"}
                              {formatCurrency(
                                transaction.amount,
                                transaction.wallets?.currency
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
