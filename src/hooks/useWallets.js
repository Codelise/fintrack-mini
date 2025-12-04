import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { walletService } from "@/services/wallet-service";

export const walletKeys = {
  all: ["wallets"],
  lists: () => [...walletKeys.all, "list"],
  list: (filters) => [...walletKeys.lists(), { filters }],
  details: () => [...walletKeys.all, "detail"],
  detail: (id) => [...walletKeys.details(), id],
};

export const useWallets = () => {
  const queryClient = useQueryClient();

  const getWallets = (userId) => {
    return useQuery({
      queryKey: walletKeys.list({ userId }),
      queryFn: () => walletService.getWallets(userId),
      enabled: !!userId,
      staleTime: 2 * 60 * 1000, // 2 minutes
    });
  };

  const createWalletMutation = useMutation({
    mutationFn: walletService.createWallet,
    onSuccess: (result) => {
      if (result.data) {
        queryClient.invalidateQueries({ queryKey: walletKeys.lists() });
      }
    },
    onError: (error) => {
      console.error("Error creating wallet:", error);
    },
  });

  const createDefaultWalletMutation = useMutation({
    mutationFn: walletService.createDefaultWallet,
    onSuccess: (result) => {
      if (result.data) {
        queryClient.invalidateQueries({ queryKey: walletKeys.lists() });
      }
    },
    onError: (error) => {
      console.error("Error creating default wallet:", error);
    },
  });

  const updateWalletMutation = useMutation({
    mutationFn: ({ walletId, updates }) =>
      walletService.updateWallet(walletId, updates),
    onSuccess: (result, variables) => {
      if (result.data) {
        queryClient.setQueryData(walletKeys.lists(), (old) =>
          old?.map((wallet) =>
            wallet.wallet_id === variables.walletId ? result.data[0] : wallet
          )
        );
      }
    },
  });

  const deleteWalletMutation = useMutation({
    mutationFn: walletService.deleteWallet,
    onSuccess: (result, variables) => {
      queryClient.setQueryData(walletKeys.lists(), (old) =>
        old?.filter((wallet) => wallet.wallet_id !== variables)
      );
    },
  });

  const createWallet = (walletData) => {
    return createWalletMutation.mutateAsync(walletData);
  };

  const createDefaultWallet = (userId) => {
    return createDefaultWalletMutation.mutateAsync(userId);
  };

  const updateWallet = (walletId, updates) => {
    return updateWalletMutation.mutateAsync({ walletId, updates });
  };

  const deleteWallet = (walletId) => {
    return deleteWalletMutation.mutateAsync(walletId);
  };

  const clearError = () => {
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
      deleteWallet: deleteWalletMutation,
    },
  };
};
