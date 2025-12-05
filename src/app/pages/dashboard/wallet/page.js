import WalletClient from "./WalletClient";

export const metadata = {
  title: "Wallets | FinTrack",
  description:
    "Manage your financial wallets and accounts. Track balances and organize your money across different accounts.",
};

export default function Wallets() {
  return <WalletClient />;
}
