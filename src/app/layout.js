import Providers from "./Providers";

import "./globals.css";
<<<<<<< HEAD
=======
// import AuthGuard from "./components/AuthGuard";
>>>>>>> 922ef849142dc029589ce554b53384aeed7155fd

export const metadata = {
  title: "FinTrack",
  description: "Finance Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
<<<<<<< HEAD
        {children}
=======
        <Providers>{children}</Providers>
>>>>>>> 922ef849142dc029589ce554b53384aeed7155fd
      </body>
    </html>
  );
}
