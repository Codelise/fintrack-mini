import { UserProvider } from "@/context/userContext";

export const metadata = {
  title: "FinTrack",
  description: "Manage your finances easily",
};

export default function RootLayout({ children }) {
  return <UserProvider>{children}</UserProvider>;
}
