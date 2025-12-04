"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        alert("Logout error:", error);
        return;
      }

      sessionStorage.removeItem("fintrack_visited");
      sessionStorage.removeItem("supabase.auth.token");
      localStorage.removeItem("supabase.auth.token");

      setShowLogoutModal(false);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full flex items-center z-1000 bg-[#382935] fixed justify-between whitespace-nowrap  border-solid  px-4 py-3 sm:px-6 md:px-10">
        <div className="flex items-center  gap-4 text-white">
          <div className="w-auto flex items-center">
            <Image
              src="/no background/whitelogo.svg"
              alt="FinTrack"
              width={40}
              height={40}
            />
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] md:text-xl">
            FinTrack
          </h2>
        </div>

        <div className="hidden md:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <Link
              className="text-white text-lg font-medium leading-normal hover:text-lightText transition-colors"
              href="/pages/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-white text-lg font-medium leading-normal hover:text-lightText transition-colors"
              href="/pages/dashboard/transactions"
            >
              Transactions
            </Link>
            <Link
              className="text-white text-lg font-medium leading-normal hover:text-lightText transition-colors"
              href="/pages/dashboard/budget"
            >
              Budget
            </Link>
            <Link
              className="text-white text-lg font-medium leading-normal hover:text-lightText transition-colors"
              href="/pages/dashboard/goal"
            >
              Goal
            </Link>
            <Link
              className="text-white text-lg font-medium leading-normal hover:text-lightText transition-colors"
              href="/pages/dashboard/wallet"
            >
              Wallet
            </Link>
            <button
              onClick={() => setShowLogoutModal(true)}
              className="flex min-w-[84px] cursor-pointer items-center justify-center outline-0 rounded-lg h-10 px-4 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#8a156f]"
            >
              <span className="truncate">Logout</span>
            </button>
          </nav>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 rounded-lg hover:bg-[#382935] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="md:hidden fixed top-0 right-0 h-full w-1/2 max-w-xs bg-[#382935] border-l border-[#523d4c] z-50 shadow-lg">
            <div className="p-6">
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-2 rounded-lg hover:bg-[#382935] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col space-y-6">
                <Link
                  className="text-white text-lg font-medium leading-normal hover:text-lightText transition-colors"
                  href="/pages/dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  className="text-white text-lg font-medium leading-normal hover:text-lightText transition-colors"
                  href="/pages/dashboard/transactions"
                >
                  Transactions
                </Link>
                <Link
                  className="text-white text-lg font-medium leading-normal hover:text-lightText transition-colors"
                  href="/pages/dashboard/reports"
                >
                  Reports
                </Link>
                <Link
                  className="text-white text-lg font-medium leading-normal hover:text-lightText transition-colors"
                  href="/pages/dashboard/budget"
                >
                  Budget
                </Link>
                <Link
                  className="text-white text-lg font-medium leading-normal hover:text-lightText transition-colors"
                  href="/pages/dashboard/goal"
                >
                  Goal
                </Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowLogoutModal(true);
                  }}
                  className="flex w-full cursor-pointer items-center justify-center outline-0 rounded-lg h-12 bg-[#9c167f] text-white text-lg font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#8a156f] mt-4"
                >
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>
        </>
      )}

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#261c23] rounded-lg p-6 max-w-md w-full border border-[#523d4c]">
            <div className="text-center mb-6">
              <div className="mx-auto w-12 h-12 mb-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16,17 21,12 16,7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                Confirm Logout
              </h3>
              <p className="text-[#b79eb0]">
                Are you sure you want to log out?
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleLogout}
                className="flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#9c167f] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-[#8a156f] transition-colors"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#382935] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-[#2d212a] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
