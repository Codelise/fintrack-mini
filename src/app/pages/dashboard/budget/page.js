"use client";
import Navbar from "@/app/components/Navbar";
import { useState, useEffect } from "react";
import { useBudget, budgetKeys } from "@/hooks/useBudget";
import { useAuth } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";

export default function BudgetPage() {
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    budget_name: "",
    amount: "",
    period: "month",
  });

  // Result modal state
  const [resultModal, setResultModal] = useState({
    isOpen: false,
    type: "", // 'success', 'error'
    title: "",
    message: "",
    action: "", // 'create', 'update', 'delete'
  });

  const { user } = useAuth();
  const {
    getBudgets,
    createBudget,
    updateBudget,
    deleteBudget,
    mutations: {
      createBudget: createMutation,
      updateBudget: updateMutation,
      deleteBudget: deleteMutation,
    },
  } = useBudget();

  const [deleteConfirmModal, setDeleteConfirmModal] = useState({
    isOpen: false,
    budgetId: null,
    budgetName: "",
  });

  const { data: budgetsData, isLoading, error } = getBudgets(user?.id);
  const budgets = budgetsData?.data || [];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Open result modal
  const openResultModal = (type, title, message, action = "") => {
    setResultModal({
      isOpen: true,
      type,
      title,
      message,
      action,
    });
  };

  // Close result modal
  const closeResultModal = () => {
    setResultModal({
      isOpen: false,
      type: "",
      title: "",
      message: "",
      action: "",
    });
  };

  const openModal = (budget = null) => {
    if (budget) {
      setSelectedBudget(budget);
      setFormData({
        budget_name: budget.budget_name,
        amount: budget.amount?.toString() || "",
        period: budget.period?.replace("/", "") || "month",
      });
    } else {
      setSelectedBudget(null);
      setFormData({
        budget_name: "",
        amount: "",
        period: "month",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBudget(null);
    createMutation.reset();
    updateMutation.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const budgetData = {
      user_id: user?.id,
      budget_name: formData.budget_name,
      amount: parseFloat(formData.amount) || 0,
      period: `/${formData.period}`,
    };

    try {
      if (selectedBudget) {
        await updateBudget(selectedBudget.budget_id, budgetData);
        openResultModal(
          "success",
          "Budget Updated",
          "Your budget has been successfully updated.",
          "update"
        );
      } else {
        await createBudget(budgetData);
        openResultModal(
          "success",
          "Budget Created",
          "Your new budget has been successfully created.",
          "create"
        );
      }
      closeModal();

      queryClient.invalidateQueries({
        queryKey: ["budgets", "list", { userId: user?.id }],
      });
    } catch (error) {
      openResultModal(
        "error",
        "Operation Failed",
        selectedBudget
          ? "Failed to update budget. Please try again."
          : "Failed to create budget. Please try again.",
        selectedBudget ? "update" : "create"
      );
    }
  };

  const handleDelete = async (budgetId, budgetName) => {
    // Open confirmation modal instead of using confirm()
    setDeleteConfirmModal({
      isOpen: true,
      budgetId,
      budgetName,
    });
  };

  const confirmDelete = async () => {
    const { budgetId } = deleteConfirmModal;
    try {
      await deleteBudget(budgetId);
      openResultModal(
        "success",
        "Budget Deleted",
        "The budget has been successfully deleted.",
        "delete"
      );

      // Close confirmation modal
      setDeleteConfirmModal({ isOpen: false, budgetId: null, budgetName: "" });
      setTimeout(() => {
        window.location.reload();
      }, 1200);

      // Invalidate queries to refresh data
      queryClient.invalidateQueries({
        queryKey: ["budgets", "list", { userId: user?.id }],
      });
    } catch (error) {
      openResultModal(
        "error",
        "Delete Failed",
        "Failed to delete budget. Please try again.",
        "delete"
      );
      setDeleteConfirmModal({ isOpen: false, budgetId: null, budgetName: "" });
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmModal({ isOpen: false, budgetId: null, budgetName: "" });
  };

  if (isLoading) {
    return (
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-white text-lg flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-[#9c167f] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-base sm:text-lg">Loading budgets...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4 max-w-md w-full text-center">
            <div className="text-lg font-semibold mb-2">
              Error Loading Budgets
            </div>
            <div className="text-sm">{error.message}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#9c167f]/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#9c167f]/5 rounded-full blur-lg animate-pulse-slow animation-delay-1000"></div>

      <div className="layout-container flex h-full grow flex-col z-10">
        <Navbar />

        {/* Main Content */}
        <div className="px-3 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 flex flex-1 justify-center py-4 sm:py-5">
          <div className="layout-content-container flex flex-col w-full  flex-1">
            <main className="flex-1 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
              {/* Page Header with Animation */}
              <div
                className={`flex flex-col sm:flex-row justify-between gap-4 p-3 sm:p-4 items-start sm:items-center transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex flex-col gap-2 min-w-0 flex-1">
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] break-words">
                    My Budgets
                  </h1>
                  <p className="text-[#c695bb] text-sm sm:text-base font-normal leading-normal">
                    {budgets.length > 0
                      ? `You have ${budgets.length} active budget${
                          budgets.length !== 1 ? "s" : ""
                        }`
                      : "Here are your allocated budgets for the current period."}
                  </p>
                </div>

                {/* Add New Budget Button */}
                <button
                  onClick={() => openModal()}
                  className="group relative flex w-full sm:w-auto min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:px-5 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-500 hover:bg-[#b51a97] hover:shadow-2xl hover:shadow-[#9c167f]/50 hover:-translate-y-1 active:translate-y-0 mt-2 sm:mt-0"
                >
                  <span className="truncate relative z-10">Add New Budget</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>

              {/* Budget List */}
              <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col gap-3 px-2 sm:px-4">
                {budgets.length === 0 ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="text-[#c695bb] text-lg mb-3 sm:mb-4">
                      No budgets found
                    </div>
                    <p className="text-[#c695bb] text-sm mb-4 max-w-md mx-auto">
                      Start tracking your expenses by creating your first budget
                    </p>
                    <button
                      onClick={() => openModal()}
                      className="px-6 py-2 bg-[#9c167f] text-white rounded-lg hover:bg-[#b51a97] transition-colors text-sm sm:text-base"
                    >
                      Create Your First Budget
                    </button>
                  </div>
                ) : (
                  budgets.map((budget, index) => (
                    <div
                      key={budget.budget_id}
                      className={`group flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 bg-[#321b2d] p-3 sm:p-4 justify-between rounded-xl border border-[#63365a] transition-all duration-500 hover:border-[#9c167f] hover:shadow-xl hover:shadow-[#9c167f]/25 hover:-translate-y-1 ${
                        mounted
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        {/* Budget Icon */}
                        <div className="text-white flex items-center justify-center rounded-lg bg-[#63365a] shrink-0 size-10 sm:size-12 transition-all duration-300 group-hover:bg-[#9c167f] group-hover:scale-110">
                          <span className="material-symbols-outlined text-xl sm:text-2xl">
                            account_balance_wallet
                          </span>
                        </div>

                        {/* Budget Info */}
                        <div className="flex flex-col justify-center flex-1 min-w-0">
                          <p className="text-white text-base sm:text-lg font-medium leading-normal line-clamp-1 break-words">
                            {budget.budget_name}
                          </p>
                          <p className="text-[#c695bb] text-xs sm:text-sm font-normal leading-normal">
                            Allocated Budget
                          </p>
                        </div>

                        {/* Amount */}
                        <div className="shrink-0 text-right">
                          <p className="text-white text-base sm:text-lg font-bold leading-normal whitespace-nowrap">
                            PHP{" "}
                            {parseFloat(budget.amount || 0).toLocaleString(
                              "en-US",
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                          </p>
                          <span className="text-xs sm:text-sm font-normal text-[#c695bb]">
                            {budget.period || "/month"}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 sm:ml-4 w-full sm:w-auto justify-end sm:justify-start">
                        <button
                          onClick={() => openModal(budget)}
                          className="flex items-center justify-center gap-2 rounded-lg h-9 sm:h-10 px-3 sm:px-4 bg-[#321b2d] text-white text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#3d2245] border border-[#63365a] hover:border-[#9c167f] hover:scale-105 flex-1 sm:flex-none min-w-[70px] sm:min-w-[84px]"
                        >
                          <span className="material-symbols-outlined text-base sm:text-lg">
                            edit
                          </span>
                          <span className="truncate">Edit</span>
                        </button>
                        <button
                          onClick={() =>
                            handleDelete(budget.budget_id, budget.budget_name)
                          }
                          className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#321b2d] text-red-400 gap-2 text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#3d2245] border border-[#63365a] hover:border-red-500 hover:scale-105"
                        >
                          <span className="material-symbols-outlined text-lg">
                            delete
                          </span>
                          <span className="truncate">Delete</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Budget Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className={`bg-[#321b2d] border border-[#63365a] rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-md transform transition-all duration-500 ${
              isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-white text-lg sm:text-xl font-bold">
                {selectedBudget ? "Edit Budget" : "Add New Budget"}
              </h2>
              <button
                onClick={closeModal}
                className="text-[#c695bb] hover:text-white transition-colors duration-200 p-1 rounded-lg hover:bg-white/10"
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl">
                  close
                </span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#c695bb] text-sm font-medium mb-2">
                  Budget Name
                </label>
                <input
                  type="text"
                  value={formData.budget_name}
                  onChange={(e) =>
                    setFormData({ ...formData, budget_name: e.target.value })
                  }
                  className="w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#9c167f] transition-colors duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20 text-sm sm:text-base"
                  placeholder="Enter budget name"
                  required
                />
              </div>

              <div>
                <label className="block text-[#c695bb] text-sm font-medium mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  className="w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#9c167f] transition-colors duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20 text-sm sm:text-base"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  required
                />
              </div>

              <div>
                <label className="block text-[#c695bb] text-sm font-medium mb-2">
                  Period
                </label>
                <select
                  value={formData.period}
                  onChange={(e) =>
                    setFormData({ ...formData, period: e.target.value })
                  }
                  className="w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#9c167f] transition-colors duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20 text-sm sm:text-base"
                >
                  <option value="month">Monthly</option>
                  <option value="week">Weekly</option>
                  <option value="year">Yearly</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 py-2 sm:py-3 px-4 bg-transparent border border-[#63365a] text-[#c695bb] rounded-lg hover:bg-[#3d2245] hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={
                    createMutation.isPending || updateMutation.isPending
                  }
                  className="group relative flex-1 py-2 sm:py-3 px-4 bg-[#9c167f] text-white rounded-lg hover:bg-[#b51a97] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  {createMutation.isPending || updateMutation.isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="truncate">Saving...</span>
                    </>
                  ) : (
                    <span className="relative z-10 truncate">
                      {selectedBudget ? "Update Budget" : "Create Budget"}
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Result Modal */}
      {resultModal.isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className={`bg-[#321b2d] border border-[#63365a] rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-sm transform transition-all duration-500 scale-100 opacity-100`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              {/* Icon */}
              <div
                className={`mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full ${
                  resultModal.type === "success"
                    ? "bg-[#9c167f]/20 text-[#9c167f]"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {resultModal.type === "success" ? "check_circle" : "error"}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`text-lg sm:text-xl font-bold mb-2 ${
                  resultModal.type === "success"
                    ? "text-[#9c167f]"
                    : "text-red-400"
                }`}
              >
                {resultModal.title}
              </h3>

              {/* Message */}
              <p className="text-[#c695bb] text-sm sm:text-base mb-6">
                {resultModal.message}
              </p>

              {/* Action Button */}
              <button
                onClick={closeResultModal}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  resultModal.type === "success"
                    ? "bg-[#9c167f] hover:bg-[#b51a97] text-white"
                    : "bg-red-500 hover:bg-red-600 text-white"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmModal.isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-[#321b2d] border border-[#63365a] rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-sm transform transition-all duration-500 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              {/* Warning Icon */}
              <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 text-yellow-400">
                <span className="material-symbols-outlined text-3xl">
                  warning
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-yellow-400">
                Confirm Deletion
              </h3>

              {/* Message */}
              <p className="text-[#c695bb] text-sm sm:text-base mb-2">
                Are you sure you want to delete
              </p>
              <p className="text-white font-semibold text-sm sm:text-base mb-6">
                "{deleteConfirmModal.budgetName}"?
              </p>
              <p className="text-red-400 text-xs mb-6">
                This action cannot be undone.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={cancelDelete}
                  className="flex-1 py-3 px-4 bg-transparent border border-[#63365a] text-[#c695bb] rounded-lg hover:bg-[#3d2245] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="flex-1 py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Material Icons CSS */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .material-symbols-outlined {
          font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        }
      `}</style>
    </div>
  );
}
