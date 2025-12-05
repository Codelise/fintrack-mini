import BudgetClient from "./BudgetClient";

export const metadata = {
  title: "Budget | FinTrack",
  description:
    "Create and manage your budgets. Set spending limits and monitor your budget performance.",
};

export default function Budget() {
  return <BudgetClient />;
}
