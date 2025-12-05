import Providers from "./Providers";

import "./globals.css";
// import AuthGuard from "./components/AuthGuard";

export const metadata = {
  title: "FinTrack - Personal Finance Management",
  description:
    "Take control of your finances with FinTrack. Track expenses, manage budgets, set financial goals, and achieve financial freedom.",
  keywords:
    "finance, budget, expense tracking, financial goals, money management",
  openGraph: {
    title: "FinTrack - Personal Finance Management",
    description:
      "Track your spending, manage budgets, and achieve your financial goals.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
