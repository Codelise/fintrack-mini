// app/providers.js
"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { UserProvider } from "@/context/userContext";
import { useEffect } from "react";
import { walletKeys } from "@/hooks/useWallets";
import { transactionKeys } from "@/hooks/useTransactions";

export default function Providers({ children }) {
  useEffect(() => {
    try {
      const initialSession = window.__FINTRACK_INITIAL_SESSION__;
      const initialData = window.__FINTRACK_INITIAL_DATA__;
      const userId = initialSession?.user?.id;
      if (userId && initialData) {
        // Seed wallets
        if (initialData.wallets) {
          queryClient.setQueryData(
            walletKeys.list({ userId }),
            initialData.wallets
          );
        }

        // Seed transactions
        if (initialData.transactions) {
          queryClient.setQueryData(
            transactionKeys.list({ userId }),
            initialData.transactions
          );
        }

        // Seed budgets
        if (initialData.budgets) {
          queryClient.setQueryData(
            ["budgets", "list", { userId }],
            initialData.budgets
          );
        }

        // Seed goals
        if (initialData.goals) {
          queryClient.setQueryData(
            ["goals", "list", { userId }],
            initialData.goals
          );
        }
      }
    } catch (err) {
      // ignore
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>{children}</UserProvider>
    </QueryClientProvider>
  );
}
