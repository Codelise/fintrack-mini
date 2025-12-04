import {
  getTransactions as getTransactionsQuery,
  createTransaction as createTransactionQuery,
  updateTransaction as updateTransactionQuery,
  deleteTransaction as deleteTransactionQuery,
  getTransactionById as getTransactionByIdQuery,
  getTransactionsByWallet as getTransactionsByWalletQuery,
  getTransactionsByCategory as getTransactionsByCategoryQuery,
  getTransactionsByDateRange as getTransactionsByDateRangeQuery,
} from "../api/transaction/route";

export class TransactionService {
  async getTransactions(userId, filters = {}) {
    try {
      const result = await getTransactionsQuery(userId, filters);
      return result;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      return { data: null, error };
    }
  }

  async getTransactionById(transactionId) {
    try {
      const result = await getTransactionByIdQuery(transactionId);
      return result;
    } catch (error) {
      console.error("Error fetching transaction:", error);
      return { data: null, error };
    }
  }

  async createTransaction(transactionData) {
    try {
      console.log(
        "🎯 Transaction Service - Creating transaction with data:",
        JSON.stringify(transactionData, null, 2)
      );

      if (
        !transactionData.user_id ||
        !transactionData.amount ||
        !transactionData.transaction_type ||
        !transactionData.date
      ) {
        console.error("❌ Missing required fields:", {
          user_id: transactionData.user_id,
          amount: transactionData.amount,
          transaction_type: transactionData.transaction_type,
          date: transactionData.date,
        });
        throw new Error(
          "User ID, amount, transaction type, and date are required"
        );
      }

      if (transactionData.amount <= 0) {
        throw new Error("Transaction amount must be greater than 0");
      }

      const result = await createTransactionQuery(transactionData);
      console.log("✅ Transaction creation result:", result);

      return result;
    } catch (error) {
      console.error("❌ Error creating transaction:", error);
      return { data: null, error };
    }
  }
  async updateTransaction(transactionId, updates) {
    try {
      console.log("Service: Updating transaction", transactionId, updates);

      if (!transactionId) {
        throw new Error("Transaction ID is required");
      }

      if (updates.amount && updates.amount <= 0) {
        throw new Error("Transaction amount must be greater than 0");
      }

      const result = await updateTransactionQuery(transactionId, updates);
      console.log("Service: Update result", result);

      if (result.error) {
        console.error("Service: Update failed:", result.error);
        throw result.error;
      }

      return result;
    } catch (error) {
      console.error("Service: Error updating transaction:", error);
      throw error;
    }
  }

  async deleteTransaction(transactionId) {
    try {
      const result = await deleteTransactionQuery(transactionId);
      return result;
    } catch (error) {
      console.error("Error deleting transaction:", error);
      return { error };
    }
  }

  async getTransactionsByWallet(userId, walletId) {
    try {
      const result = await getTransactionsByWalletQuery(userId, walletId);
      return result;
    } catch (error) {
      console.error("Error fetching wallet transactions:", error);
      return { data: null, error };
    }
  }

  async getTransactionsByCategory(userId, categoryId) {
    try {
      const result = await getTransactionsByCategoryQuery(userId, categoryId);
      return result;
    } catch (error) {
      console.error("Error fetching category transactions:", error);
      return { data: null, error };
    }
  }

  async getTransactionsByDateRange(userId, startDate, endDate) {
    try {
      const result = await getTransactionsByDateRangeQuery(
        userId,
        startDate,
        endDate
      );
      return result;
    } catch (error) {
      console.error("Error fetching transactions by date range:", error);
      return { data: null, error };
    }
  }
}

export const transactionService = new TransactionService();
