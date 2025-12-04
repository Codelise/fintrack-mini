import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionService } from "@/services/transaction-service";

export const transactionKeys = {
  all: ["transactions"],
  lists: () => [...transactionKeys.all, "list"],
  list: (filters) => [...transactionKeys.lists(), { filters }],
  details: () => [...transactionKeys.all, "detail"],
  detail: (id) => [...transactionKeys.details(), id],
  byWallet: (walletId) => [...transactionKeys.lists(), { walletId }],
  byCategory: (categoryId) => [...transactionKeys.lists(), { categoryId }],
  byDateRange: (startDate, endDate) => [
    ...transactionKeys.lists(),
    { startDate, endDate },
  ],
};

export const useTransactions = () => {
  const queryClient = useQueryClient();

  const getTransactions = (userId, filters = {}) => {
    return useQuery({
      queryKey: transactionKeys.list({ userId, ...filters }),
      queryFn: () => transactionService.getTransactions(userId, filters),
      enabled: !!userId,
      staleTime: 2 * 60 * 1000, // 2 minutes
    });
  };

  const getTransactionById = (transactionId) => {
    return useQuery({
      queryKey: transactionKeys.detail(transactionId),
      queryFn: () => transactionService.getTransactionById(transactionId),
      enabled: !!transactionId,
      staleTime: 5 * 60 * 1000, // 5 minutes for single transaction
    });
  };

  const getTransactionsByWallet = (userId, walletId) => {
    return useQuery({
      queryKey: transactionKeys.byWallet(walletId),
      queryFn: () =>
        transactionService.getTransactionsByWallet(userId, walletId),
      enabled: !!userId && !!walletId,
      staleTime: 2 * 60 * 1000,
    });
  };

  const getTransactionsByCategory = (userId, categoryId) => {
    return useQuery({
      queryKey: transactionKeys.byCategory(categoryId),
      queryFn: () =>
        transactionService.getTransactionsByCategory(userId, categoryId),
      enabled: !!userId && !!categoryId,
      staleTime: 2 * 60 * 1000,
    });
  };

  const getTransactionsByDateRange = (userId, startDate, endDate) => {
    return useQuery({
      queryKey: transactionKeys.byDateRange(startDate, endDate),
      queryFn: () =>
        transactionService.getTransactionsByDateRange(
          userId,
          startDate,
          endDate
        ),
      enabled: !!userId && !!startDate && !!endDate,
      staleTime: 2 * 60 * 1000,
    });
  };

  const createTransactionMutation = useMutation({
    mutationFn: transactionService.createTransaction,
    onSuccess: (result) => {
      if (result.data) {
        // Invalidate all transaction lists
        queryClient.invalidateQueries({ queryKey: transactionKeys.lists() });

        // Also invalidate dashboard queries that might be affected
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });
        queryClient.invalidateQueries({ queryKey: ["reports"] });
      }
    },
    onError: (error) => {
      console.error("Error creating transaction:", error);
    },
  });

  const updateTransactionMutation = useMutation({
    mutationFn: ({ transactionId, updates }) =>
      transactionService.updateTransaction(transactionId, updates),
    onSuccess: (result, variables) => {
      if (result.data) {
        // Update the specific transaction in all lists and cache
        queryClient.setQueryData(
          transactionKeys.detail(variables.transactionId),
          result.data[0]
        );
        queryClient.setQueryData(transactionKeys.lists(), (old) =>
          old?.map((transaction) =>
            transaction.transaction_id === variables.transactionId
              ? result.data[0]
              : transaction
          )
        );

        // Invalidate dashboard and reports
        queryClient.invalidateQueries({ queryKey: ["dashboard"] });
        queryClient.invalidateQueries({ queryKey: ["reports"] });
      }
    },
    onError: (error) => {
      console.error("Error updating transaction:", error);
    },
  });

  const deleteTransactionMutation = useMutation({
    mutationFn: transactionService.deleteTransaction,
    onSuccess: (result, variables) => {
      // Remove the transaction from all caches
      queryClient.removeQueries({
        queryKey: transactionKeys.detail(variables),
      });
      queryClient.setQueryData(transactionKeys.lists(), (old) =>
        old?.filter((transaction) => transaction.transaction_id !== variables)
      );

      // Invalidate dashboard and reports
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      queryClient.invalidateQueries({ queryKey: ["reports"] });
    },
    onError: (error) => {
      console.error("Error deleting transaction:", error);
    },
  });

  // Mutation methods
  const createTransaction = (transactionData) => {
    return createTransactionMutation.mutateAsync(transactionData);
  };

  const updateTransaction = (transactionId, updates) => {
    return updateTransactionMutation.mutateAsync({ transactionId, updates });
  };

  const deleteTransaction = (transactionId) => {
    return deleteTransactionMutation.mutateAsync(transactionId);
  };

  const clearError = () => {
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
      deleteTransaction: deleteTransactionMutation,
    },
  };
};

export default useTransactions;
