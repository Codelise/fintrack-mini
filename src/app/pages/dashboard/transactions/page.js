import TransactionsClient from "./TransactionsClient";

export const metadata = {
  title: "Transactions | FinTrack",
  description:
    "Track and manage your income and expenses. Record transactions and monitor your financial activity.",
};

export default function Transactions() {
  return <TransactionsClient />;
}
