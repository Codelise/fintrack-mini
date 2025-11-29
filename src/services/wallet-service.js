import {
  getUserWallets as getWalletsQuery,
  createWallet as createWalletQuery,
  updateWallet as updateWalletQuery,
  deleteWallet as deleteWalletQuery,
} from "../api/wallet/route";

export class WalletService {
  async getWallets(userId) {
    try {
      const result = await getWalletsQuery(userId);
      return result;
    } catch (error) {
      console.error("Error fetching wallets:", error);
      return { data: null, error };
    }
  }

  async createWallet(walletData) {
    try {
      if (!walletData.user_id || !walletData.wallet_name) {
        throw new Error("User ID and wallet name are required");
      }

      const result = await createWalletQuery(walletData);
      return result;
    } catch (error) {
      console.error("Error creating wallet:", error);
      return { data: null, error };
    }
  }

  async createDefaultWallet(userId) {
    try {
      const defaultWalletData = {
        user_id: userId,
        wallet_name: "Main Wallet",
        balance: 0,
        currency: "PHP",
      };

      const result = await this.createWallet(defaultWalletData);
      return result;
    } catch (error) {
      console.error("Error creating default wallet:", error);
      return { data: null, error };
    }
  }

  async updateWallet(walletId, updates) {
    try {
      if (!walletId) {
        throw new Error("Wallet ID is required");
      }

      const result = await updateWalletQuery(walletId, updates);
      return result;
    } catch (error) {
      console.error("Error updating wallet:", error);
      throw error;
    }
  }

  async deleteWallet(walletId) {
    try {
      const result = await deleteWalletQuery(walletId);
      return result;
    } catch (error) {
      console.error("Error deleting wallet:", error);
      return { error };
    }
  }
}

export const walletService = new WalletService();
