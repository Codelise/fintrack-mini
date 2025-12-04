<<<<<<< HEAD
export default function dashboardPage () {

  return (

    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#171116] dark group/design-root overflow-x-hidden" >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#382935] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">FinTrack</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Dashboard</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Transactions</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Reports</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Settings</a>
            </div>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#382935] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div className="text-white" data-icon="Bell" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARjrwJLz0jsQ7kY2M3YY60k2MTf1J2y50HMSAaIlZj2hWisAEeivdz9KmDNumRowmzOqHLE8wrmgjsIIJWH80d4tvANfXOtqs5d7X8-74osH__IzaAzvh6c8sOIOtmZQJLkceAs6juui7kjmhPOe-7m_x0WnUorMuCY0bxbtRUtueBAc1FRnZLpw9q_2fVkMKTdCztGTQQj-Woxsm8sIUr1H43bTJaLO_DXpfciIyfhB41pmLC0xs1UoDIOMZ3ZP3xIe_uPUsONuKt")'}} 
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">Dashboard</p>
                <p className="text-[#b79eb2] text-sm font-normal leading-normal">Overview of your financial health</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#382935]">
                <p className="text-white text-base font-medium leading-normal">Total Income</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">$5,500</p>
                <p className="text-[#0bda84] text-base font-medium leading-normal">+10%</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#382935]">
                <p className="text-white text-base font-medium leading-normal">Total Expenses</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">$3,200</p>
                <p className="text-[#fa7538] text-base font-medium leading-normal">-5%</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#523d4d] p-6">
                <p className="text-white text-base font-medium leading-normal">Spending Over Time</p>
                <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">$3,200</p>
                <div className="flex gap-1">
                  <p className="text-[#b79eb2] text-base font-normal leading-normal">Last 6 Months</p>
                  <p className="text-[#fa7538] text-base font-medium leading-normal">-5%</p>
                </div>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#b79eb2"
                      strokeWidth="3"
                      strokelinecup="round"
                    ></path>
                    <defs>
                      <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#382935"></stop>
                        <stop offset="1" stopColor="#382935" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                    <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                  </div>
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#523d4d] p-6">
                <p className="text-white text-base font-medium leading-normal">Spending by Category</p>
                <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">$3,200</p>
                <div className="flex gap-1">
                  <p className="text-[#b79eb2] text-base font-normal leading-normal">This Month</p>
                  <p className="text-[#fa7538] text-base font-medium leading-normal">-10%</p>
                </div>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  <div className="border-[#b79eb2] bg-[#382935] border-t-2 w-full" > </div>
                  <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Food</p>
                  <div className="border-[#b79eb2] bg-[#382935] border-t-2 w-full" ></div>
                  <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Rent</p>
                  <div className="border-[#b79eb2] bg-[#382935] border-t-2 w-full" ></div>
                  <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Utilities</p>
                  <div className="border-[#b79eb2] bg-[#382935] border-t-2 w-full" ></div>
                  <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Entertainment</p>
                  <div className="border-[#b79eb2] bg-[#382935] border-t-2 w-full" ></div>
                  <p className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em]">Transport</p>
                </div>
=======
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import { useUser } from "@/context/userContext";
import { useWallets } from "@/hooks/useWallets";
import { useTransactions } from "@/hooks/useTransactions";
import { supabase } from "@/lib/supabase";

export default function WalletsPage() {
  const { user, loading: userLoading } = useUser();
  const { getWallets, createWallet, deleteWallet, updateWallet } = useWallets();
  const { getTransactions } = useTransactions();
  const router = useRouter();

  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showEditWalletModal, setShowEditWalletModal] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [walletToEdit, setWalletToEdit] = useState(null);
  const [walletBalances, setWalletBalances] = useState({});
  const [goals, setGoals] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [loadingGoals, setLoadingGoals] = useState(true);
  const [loadingBudgets, setLoadingBudgets] = useState(true);
  const [showDeleteWalletModal, setShowDeleteWalletModal] = useState(false);
  const [walletToDelete, setWalletToDelete] = useState(null);

  // Fetch wallets and transactions
  const {
    data: walletsData,
    isLoading: walletsLoading,
    refetch: refetchWallets,
  } = getWallets(user?.id);
  const { data: transactionsData, isLoading: transactionsLoading } =
    getTransactions(user?.id, { limit: 5 });

  const wallets = walletsData?.data || [];
  const transactions = transactionsData?.data || [];

  // Fetch goals data
  useEffect(() => {
    const fetchGoals = async () => {
      if (!user?.id) return;

      setLoadingGoals(true);
      try {
        const { data, error } = await supabase
          .from("goals")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(3);

        if (error) {
          console.error("Error fetching goals:", error);
        } else {
          setGoals(data || []);
        }
      } catch (error) {
        console.error("Error fetching goals:", error);
      } finally {
        setLoadingGoals(false);
      }
    };

    fetchGoals();
  }, [user?.id]);

  // Fetch budgets data
  useEffect(() => {
    const fetchBudgets = async () => {
      if (!user?.id) return;

      setLoadingBudgets(true);
      try {
        const { data, error } = await supabase
          .from("budgets")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(1);

        if (error) {
          console.error("Error fetching budgets:", error);
        } else {
          setBudgets(data || []);
        }
      } catch (error) {
        console.error("Error fetching budgets:", error);
      } finally {
        setLoadingBudgets(false);
      }
    };

    fetchBudgets();
  }, [user?.id]);

  // Calculate wallet balances based on transactions
  useEffect(() => {
    const calculateWalletBalances = async () => {
      if (!user?.id || wallets.length === 0) return;

      const balances = {};

      for (const wallet of wallets) {
        // Get all transactions for this wallet
        const { data: walletTransactions, error } = await supabase
          .from("transactions")
          .select("amount, transaction_type")
          .eq("wallet_id", wallet.wallet_id)
          .eq("user_id", user.id);

        if (error) {
          console.error("Error fetching wallet transactions:", error);
          balances[wallet.wallet_id] = wallet.balance;
          continue;
        }

        // Calculate balance from transactions
        let calculatedBalance = parseFloat(wallet.balance) || 0;

        if (walletTransactions) {
          walletTransactions.forEach((transaction) => {
            if (transaction.transaction_type === "income") {
              calculatedBalance += parseFloat(transaction.amount);
            } else {
              calculatedBalance -= parseFloat(transaction.amount);
            }
          });
        }

        balances[wallet.wallet_id] = calculatedBalance;
      }

      setWalletBalances(balances);
    };

    calculateWalletBalances();
  }, [user?.id, wallets, transactions]);

  // Auto-select first wallet if none selected
  useEffect(() => {
    if (wallets.length > 0 && !selectedWallet) {
      setSelectedWallet(wallets[0]);
    }
  }, [wallets, selectedWallet]);

  const handleAddWallet = async (walletData) => {
    try {
      await createWallet(walletData);
      setShowWalletModal(false);
      refetchWallets();
    } catch (error) {
      console.error("Failed to create wallet:", error);
    }
  };

  const handleEditWallet = async (walletData) => {
    try {
      await updateWallet(walletData.wallet_id, {
        wallet_name: walletData.wallet_name,
        currency: walletData.currency,
      });
      setShowEditWalletModal(false);
      setWalletToEdit(null);
      refetchWallets();
    } catch (error) {
      console.error("Failed to update wallet:", error);
    }
  };

  const handleDeleteWallet = async (walletId) => {
    try {
      await deleteWallet(walletId);
      refetchWallets();

      // Reset selected wallet if it was deleted
      if (selectedWallet?.wallet_id === walletId) {
        setSelectedWallet(
          wallets.find((w) => w.wallet_id !== walletId) || null
        );
      }

      setShowDeleteWalletModal(false);
      setWalletToDelete(null);
    } catch (error) {
      console.error("Failed to delete wallet:", error);
    }
  };
  // SVG Icons
  const WalletIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  );

  const AddIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );

  const CloseIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const EditIcon = ({ className = "w-4 h-4" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );

  const DeleteIcon = ({ className = "w-4 h-4" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );

  const ShoppingCartIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21"
      />
    </svg>
  );

  const RestaurantIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );

  const TrainIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2c-4.97 0-9 4.03-9 9 0 4.97 4.03 9 9 9 4.97 0 9-4.03 9-9 0-4.97-4.03-9-9-9zm0 14.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11z"
      />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );

  const TrendingUpIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  );

  const ReceiptIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  );

  const MovieIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
      />
    </svg>
  );

  const BoltIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );

  // Wallet Card Component
  const WalletCard = ({ wallet, isSelected, onSelect, index }) => {
    const currentBalance =
      walletBalances[wallet.wallet_id] !== undefined
        ? walletBalances[wallet.wallet_id]
        : wallet.balance;

    return (
      <div
        onClick={onSelect}
        className={`rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
          isSelected
            ? "border-[#9b177e] bg-[#9b177e]/10 shadow-lg shadow-[#9b177e]/20"
            : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-black/20"
        }`}
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#FFEAD8] text-xl font-bold">
            {wallet.wallet_name}
          </h3>
          <div
            className={`p-2 rounded-full ${
              isSelected ? "bg-[#9b177e]" : "bg-black/20"
            }`}
          >
            <WalletIcon className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[#FFEAD8]/70 text-sm">Current Balance</span>
            <span className="text-[#FFEAD8] font-bold text-lg">
              ₱
              {parseFloat(currentBalance).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#FFEAD8]/70 text-sm">Currency</span>
            <span className="text-[#FFEAD8] font-medium">
              {wallet.currency}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#FFEAD8]/70 text-sm">Initial Balance</span>
            <span className="text-[#FFEAD8] text-sm">
              ₱
              {parseFloat(wallet.balance).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>

        {isSelected && (
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setWalletToEdit(wallet);
                  setShowEditWalletModal(true);
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-black/20 hover:bg-white/20 text-[#FFEAD8] text-sm font-medium py-2 px-3 rounded-lg transition-colors"
              >
                <EditIcon className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setWalletToDelete(wallet);
                  setShowDeleteWalletModal(true);
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 text-sm font-medium py-2 px-3 rounded-lg transition-colors"
              >
                <DeleteIcon className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Transactions Card Component
  const TransactionsCard = ({ transactions, loading }) => {
    const getTransactionIcon = (category) => {
      const icons = {
        groceries: ShoppingCartIcon,
        food: RestaurantIcon,
        transport: TrainIcon,
        entertainment: MovieIcon,
        utilities: BoltIcon,
        salary: TrendingUpIcon,
        default: ReceiptIcon,
      };

      const IconComponent = icons[category?.toLowerCase()] || icons.default;
      return <IconComponent className="w-5 h-5" />;
    };

    const getAmountColor = (type) => {
      if (type === "income") return "text-green-400";
      return "text-[#FFEAD8]/90";
    };

    if (loading) {
      return (
        <div className="flex flex-col gap-4 rounded-xl bg-[#FFEAD8]/5 p-6 border border-white/10">
          <h3 className="text-[#FFEAD8] text-xl font-bold">
            Recent Transactions
          </h3>
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="size-10 bg-black/20 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-black/20 rounded w-3/4"></div>
                  <div className="h-3 bg-black/20 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4 rounded-xl bg-[#FFEAD8]/5  p-6 border border-white/10 hover:shadow-lg hover:shadow-[#9b177e]/10 transition-all duration-300">
        <h3 className="text-[#FFEAD8] text-xl font-bold leading-tight tracking-[-0.015em]">
          Recent Transactions
        </h3>

        <ul className="flex flex-col gap-4 py-4">
          {transactions.slice(0, 4).map((transaction, index) => (
            <li
              key={transaction.transaction_id}
              className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-200 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex items-center justify-center size-10 rounded-full ${
                    transaction.transaction_type === "income"
                      ? "bg-green-500/20"
                      : "bg-[#E8988A]/20"
                  }`}
                >
                  {getTransactionIcon(transaction.categories?.category_name)}
                </div>
                <div>
                  <p className="font-semibold text-[#FFEAD8]">
                    {transaction.description || "No description"}
                  </p>
                  <p className="text-sm text-[#FFEAD8]/70">
                    {transaction.categories?.category_name || "Uncategorized"}
                  </p>
                </div>
              </div>
              <p
                className={`font-semibold ${getAmountColor(
                  transaction.transaction_type
                )}`}
              >
                {transaction.transaction_type === "income" ? "+" : "-"}₱
                {Math.abs(parseFloat(transaction.amount)).toLocaleString()}
              </p>
            </li>
          ))}

          {transactions.length === 0 && (
            <li className="text-center py-8 text-[#FFEAD8]/50">
              <ReceiptIcon className="w-10 h-10 mx-auto mb-2" />
              <p>No transactions yet</p>
            </li>
          )}
        </ul>

        <button
          onClick={() => router.push("./dashboard/transactions")}
          className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#9b177e] text-white text-sm font-bold leading-normal hover:opacity-90 transition-all duration-200 hover:scale-105"
        >
          <span className="truncate">Go to Transaction History</span>
        </button>
      </div>
    );
  };

  // Budget Card Component - Updated to use real data
  const BudgetCard = () => {
    if (loadingBudgets) {
      return (
        <div className="flex flex-col gap-4 rounded-xl bg-[#FFEAD8]/5 p-6 border border-white/10">
          <h3 className="text-[#FFEAD8] text-xl font-bold">Budget Summary</h3>
          <div className="animate-pulse space-y-4">
            <div className="h-40 bg-black/20 rounded"></div>
            <div className="h-4 bg-black/20 rounded"></div>
            <div className="h-4 bg-black/20 rounded w-3/4"></div>
          </div>
        </div>
      );
    }

    const currentBudget = budgets[0];

    if (!currentBudget) {
      return (
        <div className="flex flex-col gap-4 rounded-xl bg-[#FFEAD8]/5 p-6 border border-white/10 hover:shadow-lg hover:shadow-[#9b177e]/10 transition-all duration-300">
          <h3 className="text-[#FFEAD8] text-xl font-bold leading-tight tracking-[-0.015em]">
            Budget Summary
          </h3>
          <div className="text-center py-8 text-[#FFEAD8]/50">
            <p>No budget set</p>
            <p className="text-sm mt-2">Create a budget to start tracking</p>
          </div>
          <button className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#9b177e] text-white text-sm font-bold leading-normal hover:opacity-90 transition-all duration-200 hover:scale-105">
            <span className="truncate">Create Budget</span>
          </button>
        </div>
      );
    }

    // Calculate progress percentage (you'll need to replace this with actual spending data)
    const progressPercentage = 62; // Example percentage

    return (
      <div className="flex flex-col gap-4 rounded-xl bg-[#FFEAD8]/5 p-6 border border-white/10 hover:shadow-lg hover:shadow-[#9b177e]/10 transition-all duration-300">
        <h3 className="text-[#FFEAD8] text-xl font-bold leading-tight tracking-[-0.015em]">
          {currentBudget.budget_name}
        </h3>
        <div className="flex items-center justify-center my-4">
          <div className="relative size-40">
            <svg
              className="size-full"
              height="36"
              viewBox="0 0 36 36"
              width="36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="stroke-[#E8988A]/20"
                cx="18"
                cy="18"
                fill="none"
                r="16"
                strokeWidth="3"
              ></circle>
              <circle
                className="stroke-[#E8988A]"
                cx="18"
                cy="18"
                fill="none"
                r="16"
                strokeDasharray={`${progressPercentage} 100`}
                strokeDashoffset={100 - progressPercentage}
                strokeLinecap="round"
                strokeWidth="3"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-[#FFEAD8]">
                {progressPercentage}%
              </span>
              <span className="text-sm text-[#FFEAD8]/70">Used</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between text-sm text-[#FFEAD8]/90">
            <p>Budget Amount</p>
            <span>₱{parseFloat(currentBudget.amount).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-[#FFEAD8]/90">
            <p>Period</p>
            <span>{currentBudget.period}</span>
          </div>
        </div>
        <button
          onClick={() => router.push("./dashboard/budget")}
          className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#9b177e] text-white text-sm font-bold leading-normal hover:opacity-90 transition-all duration-200 hover:scale-105"
        >
          <span className="truncate">View Budget Details</span>
        </button>
      </div>
    );
  };

  // Goals Card Component - Updated to use real data
  const GoalsCard = () => {
    if (loadingGoals) {
      return (
        <div className="flex flex-col gap-4 rounded-xl bg-[#FFEAD8]/5 p-6 border border-white/10">
          <h3 className="text-[#FFEAD8] text-xl font-bold">Goal Progress</h3>
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-black/20 rounded w-3/4"></div>
                <div className="h-2 bg-black/20 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (goals.length === 0) {
      return (
        <div className="flex flex-col gap-4 rounded-xl bg-[#FFEAD8]/5 p-6 border border-white/10 hover:shadow-lg hover:shadow-[#9b177e]/10 transition-all duration-300">
          <h3 className="text-[#FFEAD8] text-xl font-bold leading-tight tracking-[-0.015em]">
            Goal Progress
          </h3>
          <div className="text-center py-8 text-[#FFEAD8]/50">
            <p>No goals set</p>
            <p className="text-sm mt-2">
              Create financial goals to track progress
            </p>
          </div>
          <button className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#9b177e] text-white text-sm font-bold leading-normal hover:opacity-90 transition-all duration-200 hover:scale-105">
            <span className="truncate">Create Goal</span>
          </button>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4 rounded-xl bg-[#FFEAD8]/5 p-6 border border-white/10 hover:shadow-lg hover:shadow-[#9b177e]/10 transition-all duration-300">
        <h3 className="text-[#FFEAD8] text-xl font-bold leading-tight tracking-[-0.015em]">
          Goal Progress
        </h3>
        <div className="flex flex-col gap-6 py-4">
          {goals.map((goal, index) => {
            // Calculate progress percentage (you'll need to replace this with actual progress data)
            const progressPercentage = Math.min(
              Math.round((goal.current_amount / goal.target_amount) * 100),
              100
            );

            return (
              <div key={goal.goal_id} className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <p className="text-[#FFEAD8] font-semibold">
                    {goal.goal_name}
                  </p>
                  <p className="text-[#FFEAD8]/70 text-sm">
                    {progressPercentage}%
                  </p>
                </div>
                <div className="w-full bg-[#E8988A]/20 rounded-full h-2.5">
                  <div
                    className="bg-[#E8988A] h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-[#FFEAD8]/70">
                  <span>
                    ₱{parseFloat(goal.current_amount).toLocaleString()}
                  </span>
                  <span>
                    ₱{parseFloat(goal.target_amount).toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => router.push("./dashboard/goal")}
          className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#9b177e] text-white text-sm font-bold leading-normal hover:opacity-90 transition-all duration-200 hover:scale-105"
        >
          <span className="truncate">View All Goals</span>
        </button>
      </div>
    );
  };

  // Add Wallet Modal Component
  const AddWalletModal = ({ isOpen, onClose, onSubmit }) => {
    const { user } = useUser();
    const [formData, setFormData] = useState({
      wallet_name: "",
      balance: "0",
      currency: "PHP",
    });

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!user?.id) {
        console.error("User not found");
        return;
      }

      onSubmit({
        ...formData,
        user_id: user.id,
        balance: parseFloat(formData.balance),
      });

      setFormData({
        wallet_name: "",
        balance: "0",
        currency: "PHP",
      });
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div
          className="bg-[#21121e] rounded-xl w-full max-w-md border border-white/10 shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#FFEAD8] text-xl font-bold">
                Add New Wallet
              </h2>
              <button
                onClick={onClose}
                className="text-[#FFEAD8]/70 hover:text-[#FFEAD8] transition-colors"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[#FFEAD8] text-sm font-medium mb-2 block">
                  Wallet Name
                </label>
                <input
                  type="text"
                  name="wallet_name"
                  value={formData.wallet_name}
                  onChange={handleInputChange}
                  placeholder="e.g., Main Wallet, Savings"
                  className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-[#FFEAD8] placeholder-[#FFEAD8]/50 focus:outline-none focus:border-[#9b177e] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="text-[#FFEAD8] text-sm font-medium mb-2 block">
                  Initial Balance
                </label>
                <input
                  type="number"
                  name="balance"
                  value={formData.balance}
                  onChange={handleInputChange}
                  placeholder="₱0.00"
                  step="0.01"
                  min="0"
                  className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-[#FFEAD8] placeholder-[#FFEAD8]/50 focus:outline-none focus:border-[#9b177e] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="text-[#FFEAD8] text-sm font-medium mb-2 block">
                  Currency
                </label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-[#FFEAD8] focus:outline-none focus:border-[#9b177e] transition-colors"
                >
                  <option value="PHP">Philippine Peso (₱)</option>
                  <option value="USD">US Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-black/20 hover:bg-white/20 text-[#FFEAD8] py-3 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#9b177e] hover:bg-[#9b177e]/90 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Create Wallet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Edit Wallet Modal Component
  const EditWalletModal = ({ isOpen, onClose, onSubmit, wallet }) => {
    const [formData, setFormData] = useState({
      wallet_name: "",
      currency: "PHP",
    });

    useEffect(() => {
      if (wallet) {
        setFormData({
          wallet_name: wallet.wallet_name,
          currency: wallet.currency,
        });
      }
    }, [wallet]);

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({
        wallet_id: wallet.wallet_id,
        ...formData,
      });
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    if (!isOpen || !wallet) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div
          className="bg-[#21121e] rounded-xl w-full max-w-md border border-white/10 shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#FFEAD8] text-xl font-bold">Edit Wallet</h2>
              <button
                onClick={onClose}
                className="text-[#FFEAD8]/70 hover:text-[#FFEAD8] transition-colors cursor-pointer"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[#FFEAD8] text-sm font-medium mb-2 block">
                  Wallet Name
                </label>
                <input
                  type="text"
                  name="wallet_name"
                  value={formData.wallet_name}
                  onChange={handleInputChange}
                  placeholder="e.g., Main Wallet, Savings"
                  className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-[#FFEAD8] placeholder-[#FFEAD8]/50 focus:outline-none focus:border-[#9b177e] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="text-[#FFEAD8] text-sm font-medium mb-2 block">
                  Currency
                </label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-[#FFEAD8] focus:outline-none focus:border-[#9b177e] transition-colors"
                >
                  <option value="PHP">Philippine Peso (₱)</option>
                  <option value="USD">US Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                </select>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <p className="text-blue-300 text-sm">
                  <strong>Note:</strong> Wallet balance is automatically
                  calculated from your transactions.
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-black/20 hover:bg-white/20 text-[#FFEAD8] py-3 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#9b177e] hover:bg-[#9b177e]/90 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Update Wallet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Delete Wallet Modal Component
  const DeleteWalletModal = ({ isOpen, onClose, onConfirm, wallet }) => {
    if (!isOpen || !wallet) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div
          className="bg-[#21121e] rounded-xl w-full max-w-md border border-white/10 shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#FFEAD8] text-xl font-bold">
                Delete Wallet
              </h2>
              <button
                onClick={onClose}
                className="text-[#FFEAD8]/70 hover:text-[#FFEAD8] transition-colors cursor-pointer"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                      <DeleteIcon className="w-5 h-5 text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#FFEAD8] font-semibold">Warning</h3>
                    <p className="text-[#FFEAD8]/70 text-sm mt-1">
                      This action cannot be undone. All wallet data will be
                      permanently removed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-[#FFEAD8] text-center">
                  Are you sure you want to delete{" "}
                  <strong>"{wallet.wallet_name}"</strong>?
                </p>
                <p className="text-[#FFEAD8]/70 text-sm text-center mt-2">
                  Current Balance: ₱
                  {parseFloat(
                    walletBalances[wallet.wallet_id] || wallet.balance
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={onClose}
                  className="flex-1 bg-black/20 hover:bg-white/20 text-[#FFEAD8] py-3 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  No, Cancel
                </button>
                <button
                  onClick={() => onConfirm(wallet.wallet_id)}
                  className="flex-1 bg-[#9c167f] text-white py-3 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Yes, Delete
                </button>
>>>>>>> 922ef849142dc029589ce554b53384aeed7155fd
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Transactions</h2>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div
                    className="text-[#b79eb2] flex border-none bg-[#382935] items-center justify-center pl-4 rounded-l-lg border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search transactions"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#382935] focus:border-none h-full placeholder:text-[#b79eb2] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    // value=""
                  />
                </div>
              </label>
            </div>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#382935] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">All</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#382935] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Income</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#382935] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Expenses</p>
              </div>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-lg border border-[#523d4d] bg-[#171116]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#261c24]">
                      <th className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Date</th>
                      <th className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Category</th>
                      <th className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Description</th>
                      <th className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#523d4d]">
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        2024-07-15
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">Food</td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Grocery shopping
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">-$150</td>
                    </tr>
                    <tr className="border-t border-t-[#523d4d]">
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        2024-07-14
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">Income</td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Salary deposit
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">+$3,000</td>
                    </tr>
                    <tr className="border-t border-t-[#523d4d]">
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        2024-07-13
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">Rent</td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Monthly rent payment
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">-$1,500</td>
                    </tr>
                    <tr className="border-t border-t-[#523d4d]">
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        2024-07-12
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Utilities
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Electricity bill
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">-$200</td>
                    </tr>
                    <tr className="border-t border-t-[#523d4d]">
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-120 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        2024-07-11
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-240 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Entertainment
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-360 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">
                        Movie tickets
                      </td>
                      <td className="table-769922b4-6e57-4419-bb1b-2c8f72e15f17-column-480 h-[72px] px-4 py-2 w-[400px] text-[#b79eb2] text-sm font-normal leading-normal">-$50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  if (userLoading) {
    return (
      <div className="min-h-screen bg-[#2A1458] text-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#21121e] text-white font-sans">
      <Navbar />

      {/* Main Content */}
      <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between items-center gap-4 mt-10 mb-8">
            <div className="flex min-w-72 flex-col gap-2">
              <h1 className="text-[#FFEAD8] text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
                My Digital Wallet
              </h1>
              <p className="text-[#FFEAD8]/70 text-base font-normal leading-normal">
                A quick overview of your budget, goals, and recent transactions.
              </p>
            </div>
            <div className="flex flex-1 gap-3 flex-wrap justify-start sm:justify-end">
              <button
                onClick={() => setShowWalletModal(true)}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-black/20 text-[#FFEAD8] text-sm font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <WalletIcon className="w-5 h-5" />
                <span className="truncate">New Wallet</span>
              </button>
            </div>
          </div>

          {/* Wallets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {wallets.map((wallet, index) => (
              <WalletCard
                key={wallet.wallet_id}
                wallet={wallet}
                isSelected={selectedWallet?.wallet_id === wallet.wallet_id}
                onSelect={() => setSelectedWallet(wallet)}
                index={index}
              />
            ))}

            {/* Add Wallet Card */}
            <div
              onClick={() => setShowWalletModal(true)}
              className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/5 p-6 border-2 border-dashed border-white/20 hover:border-[#9b177e] hover:bg-black/20 transition-all duration-300 cursor-pointer group hover:scale-105"
            >
              <div className="flex items-center justify-center size-16 rounded-full bg-[#9b177e]/20 group-hover:bg-[#9b177e]/30 transition-colors">
                <AddIcon className="w-8 h-8 text-[#9b177e] group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-[#FFEAD8] font-semibold text-center">
                Add New Wallet
              </p>
              <p className="text-[#FFEAD8]/70 text-sm text-center">
                Create a new wallet to organize your finances
              </p>
            </div>
          </div>

          {/* Dashboard Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <BudgetCard />
            <GoalsCard />
            <TransactionsCard
              transactions={transactions}
              loading={transactionsLoading}
            />
          </div>
        </div>
      </main>

      {/* Modals */}
      <AddWalletModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onSubmit={handleAddWallet}
      />

      <EditWalletModal
        isOpen={showEditWalletModal}
        onClose={() => {
          setShowEditWalletModal(false);
          setWalletToEdit(null);
        }}
        onSubmit={handleEditWallet}
        wallet={walletToEdit}
      />

      <DeleteWalletModal
        isOpen={showDeleteWalletModal}
        onClose={() => {
          setShowDeleteWalletModal(false);
          setWalletToDelete(null);
        }}
        onConfirm={handleDeleteWallet}
        wallet={walletToDelete}
      />
    </div>
 



  )
}