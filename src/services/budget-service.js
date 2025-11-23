import {
  getBudgets as getBudgetsQuery,
  createBudget as createBudgetQuery,
  createMultipleBudgets as createMultipleBudgetsQuery,
  updateBudget as updateBudgetQuery,
  deleteBudget as deleteBudgetQuery,
} from "../api/budget/route";

export class BudgetService {
  async getBudgets(userId) {
    try {
      const result = await getBudgetsQuery(userId);
      return result;
    } catch (error) {
      console.error("Error fetching budgets:", error);
      return { data: null, error };
    }
  }

  async createBudget(budgetData) {
    try {
      if (
        !budgetData.user_id ||
        !budgetData.budget_name ||
        !budgetData.amount
      ) {
        throw new Error("User ID, budget_name, and amount are required");
      }

      if (budgetData.amount <= 0) {
        throw new Error("Budget amount must be greater than 0");
      }

      const result = await createBudgetQuery(budgetData);
      return result;
    } catch (error) {
      console.error("Error creating budget:", error);
      return { data: null, error };
    }
  }

  async createMultipleBudgets(budgetsArray) {
    try {
      for (const budget of budgetsArray) {
        if (!budget.user_id || !budget.budget_name || !budget.amount) {
          throw new Error(
            "All budgets must have user_id, budget_name, and amount"
          );
        }
        if (budget.amount <= 0) {
          throw new Error("All budget amounts must be greater than 0");
        }
      }

      const result = await createMultipleBudgetsQuery(budgetsArray);
      return result;
    } catch (error) {
      console.error("Error creating multiple budgets:", error);
      return { data: null, error };
    }
  }

  async updateBudget(budgetId, updates) {
    try {
      console.log("Service: Updating budget", budgetId, updates);

      if (!budgetId) {
        throw new Error("Budget ID is required");
      }

      const result = await updateBudgetQuery(budgetId, updates);
      console.log("Service: Update result", result);

      if (result.error) {
        console.error("Service: Update failed:", result.error);
        throw result.error;
      }

      return result;
    } catch (error) {
      console.error("Service: Error updating budget:", error);
      throw error;
    }
  }

  async deleteBudget(budgetId) {
    try {
      const result = await deleteBudgetQuery(budgetId);
      return result;
    } catch (error) {
      console.error("Error deleting budget:", error);
      return { error };
    }
  }
}

export const budgetService = new BudgetService();
