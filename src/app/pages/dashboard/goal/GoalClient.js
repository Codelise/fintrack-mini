"use client";
/* eslint-disable @next/next/no-page-custom-font */
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useGoal } from "@/hooks/useGoal";
import Navbar from "@/app/components/Navbar";

export default function GoalClient() {
  const { user } = useAuth();
  const {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
    mutations: {
      createGoal: createMutation,
      updateGoal: updateMutation,
      deleteGoal: deleteMutation,
    },
  } = useGoal();

  const { data: goalsData, isLoading, error } = getGoals(user?.id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [deletingGoal, setDeletingGoal] = useState(null);
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    goal_name: "",
    target_amount: "",
    current_amount: "",
    deadline: "",
  });

  const goals = goalsData?.data || [];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCreateGoal = async (e) => {
    e.preventDefault();
    try {
      const result = await createGoal({
        ...formData,
        user_id: user?.id,
        target_amount: parseFloat(formData.target_amount),
        current_amount: parseFloat(formData.current_amount) || 0,
      });

      if (result.data) {
        setIsModalOpen(false);
        setFormData({
          goal_name: "",
          target_amount: "",
          current_amount: "",
          deadline: "",
        });
      }
    } catch (error) {
      console.error("Error creating goal:", error);
    }
  };

  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
    setFormData({
      goal_name: goal.goal_name,
      target_amount: goal.target_amount.toString(),
      current_amount: goal.current_amount.toString(),
      deadline: goal.deadline.split("T")[0],
    });
    setIsModalOpen(true);
  };

  const handleUpdateGoal = async (e) => {
    e.preventDefault();
    try {
      const result = await updateGoal(editingGoal.goal_id, {
        // FIXED: Use goal_id
        ...formData,
        target_amount: parseFloat(formData.target_amount),
        current_amount: parseFloat(formData.current_amount),
      });

      if (result.data) {
        setIsModalOpen(false);
        setEditingGoal(null);
        setFormData({
          goal_name: "",
          target_amount: "",
          current_amount: "",
          deadline: "",
        });
      }
    } catch (error) {
      console.error("Error updating goal:", error);
    }
  };

  const handleDeleteClick = (goal) => {
    setDeletingGoal(goal);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (deletingGoal) {
      try {
        await deleteGoal(deletingGoal.goal_id); // FIXED: Use goal_id
        setIsDeleteModalOpen(false);
        setDeletingGoal(null);
      } catch (error) {
        console.error("Error deleting goal:", error);
      }
    }
  };

  const calculateProgress = (current, target) => {
    if (!target || target === 0) return 0;
    return Math.min((current / target) * 100, 100);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const getProgressColor = (progress) => {
    if (progress >= 100) return "bg-green-500";
    if (progress >= 75) return "bg-[#9c167f]";
    if (progress >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#9c167f]/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#9c167f]/5 rounded-full blur-lg animate-pulse-slow animation-delay-1000"></div>

      <Navbar />
      <div className="layout-container flex h-full grow flex-col z-10">
        {/* Main Content */}
        <div className="mt-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full  flex-1">
            <main className="flex-1 mt-6 md:mt-10">
              {/* Page Header */}
              <div className="flex flex-wrap justify-between gap-4 p-4 items-center animate-fade-in-up">
                <div className="flex min-w-72 flex-col gap-2">
                  <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                    My Goals
                  </h1>
                  <p className="text-[#c695bb] text-base font-normal leading-normal">
                    {goals.length > 0
                      ? `You have ${goals.length} active goal${
                          goals.length !== 1 ? "s" : ""
                        }`
                      : "Track your financial goals and monitor your progress."}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setEditingGoal(null);
                    setFormData({
                      goal_name: "",
                      target_amount: "",
                      current_amount: "",
                      deadline: "",
                    });
                    setIsModalOpen(true);
                  }}
                  className="group relative flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#b51a97] hover:shadow-lg hover:shadow-[#9c167f]/40 hover:-translate-y-0.5"
                >
                  <span className="truncate relative z-10">Add New Goal</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="mt-8 flex justify-center">
                  <div className="text-[#c695bb] flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-[#9c167f] border-t-transparent rounded-full animate-spin"></div>
                    Loading goals...
                  </div>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="mt-8 flex justify-center">
                  <div className="text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4 animate-shake">
                    Error loading goals: {error.message}
                  </div>
                </div>
              )}

              {/* Goals List */}
              {!isLoading && !error && (
                <div className="mt-6 md:mt-8 flex flex-col gap-4 px-4">
                  {goals.length === 0 ? (
                    <div className="text-center py-12 animate-fade-in">
                      <div className="text-[#c695bb] text-lg mb-4">
                        No goals found
                      </div>
                      <p className="text-[#c695bb] text-sm">
                        Create your first goal to start tracking your financial
                        progress
                      </p>
                    </div>
                  ) : (
                    goals.map((goal, index) => {
                      const progress = calculateProgress(
                        goal.current_amount || 0,
                        goal.target_amount || 1
                      );
                      const daysLeft = Math.ceil(
                        (new Date(goal.deadline) - new Date()) /
                          (1000 * 60 * 60 * 24)
                      );

                      return (
                        <div
                          key={goal.goal_id}
                          className={`group flex flex-col gap-4 bg-[#321b2d] p-6 justify-between rounded-xl border border-[#63365a] transition-all duration-300 hover:border-[#9c167f] hover:shadow-lg hover:shadow-[#9c167f]/20 ${
                            mounted
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4"
                          }`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                            <div className="text-white flex items-center justify-center rounded-lg bg-[#63365a] shrink-0 size-12 transition-all duration-300 group-hover:bg-[#9c167f] group-hover:scale-105">
                              <span className="material-symbols-outlined text-2xl">
                                flag
                              </span>
                            </div>

                            <div className="flex flex-col justify-center flex-grow min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <p className="text-white text-lg font-bold leading-normal line-clamp-1">
                                  {goal.goal_name}
                                </p>
                                <div className="flex items-center gap-4 text-sm">
                                  <span className="text-[#c695bb]">
                                    Target: {formatCurrency(goal.target_amount)}
                                  </span>
                                  <span className="text-[#c695bb]">
                                    Saved: {formatCurrency(goal.current_amount)}
                                  </span>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      daysLeft < 0
                                        ? "bg-red-500/20 text-red-400"
                                        : daysLeft < 30
                                        ? "bg-yellow-500/20 text-yellow-400"
                                        : "bg-green-500/20 text-green-400"
                                    }`}
                                  >
                                    {daysLeft < 0
                                      ? "Overdue"
                                      : `${daysLeft} days left`}
                                  </span>
                                </div>
                              </div>

                              {/* Progress Bar */}
                              <div className="mt-3">
                                <div className="flex justify-between text-sm text-[#c695bb] mb-1">
                                  <span>Progress</span>
                                  <span>{progress.toFixed(1)}%</span>
                                </div>
                                <div className="w-full bg-[#21121e] rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(
                                      progress
                                    )}`}
                                    style={{
                                      width: `${Math.max(progress, 0)}%`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-2 shrink-0">
                              <button
                                onClick={() => handleEditGoal(goal)}
                                disabled={
                                  updateMutation.isPending ||
                                  deleteMutation.isPending
                                }
                                className="flex items-center justify-center rounded-lg h-10 px-4 bg-[#321b2d] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#3d2245] border border-[#63365a] hover:border-[#9c167f] hover:scale-105 disabled:opacity-50"
                              >
                                <span className="material-symbols-outlined text-lg">
                                  edit
                                </span>
                                <span>Edit</span>
                              </button>
                              <button
                                onClick={() => handleDeleteClick(goal)}
                                disabled={deleteMutation.isPending}
                                className="flex items-center justify-center rounded-lg h-10 px-4 bg-red-500/20 text-red-400 gap-2 text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500 hover:scale-105 disabled:opacity-50"
                              >
                                <span className="material-symbols-outlined text-lg">
                                  {deleteMutation.isPending
                                    ? "hourglass_empty"
                                    : "delete"}
                                </span>
                                <span>
                                  {deleteMutation.isPending
                                    ? "Deleting..."
                                    : "Delete"}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Add/Edit Goal Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className={`bg-[#321b2d] border border-[#63365a] rounded-2xl p-6 mx-4 w-full max-w-md transform transition-all duration-500 ${
              isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl font-bold">
                {editingGoal ? "Edit Goal" : "Create New Goal"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#c695bb] hover:text-white transition-colors duration-200 p-1 rounded-lg hover:bg-white/10"
              >
                <span className="material-symbols-outlined text-2xl">
                  close
                </span>
              </button>
            </div>

            <form
              onSubmit={editingGoal ? handleUpdateGoal : handleCreateGoal}
              className="space-y-4"
            >
              <div>
                <label className="block text-[#c695bb] text-sm font-medium mb-2">
                  Goal Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.goal_name}
                  onChange={(e) =>
                    setFormData({ ...formData, goal_name: e.target.value })
                  }
                  className="w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#9c167f] transition-colors duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20"
                  placeholder="e.g., Emergency Fund, Vacation"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#c695bb] text-sm font-medium mb-2">
                    Target Amount
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={formData.target_amount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        target_amount: e.target.value,
                      })
                    }
                    className="w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#9c167f] transition-colors duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-[#c695bb] text-sm font-medium mb-2">
                    Current Amount
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.current_amount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        current_amount: e.target.value,
                      })
                    }
                    className="w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#9c167f] transition-colors duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#c695bb] text-sm font-medium mb-2">
                  Target Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.deadline}
                  onChange={(e) =>
                    setFormData({ ...formData, deadline: e.target.value })
                  }
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-[#21121e] border border-[#63365a] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#9c167f] transition-colors duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9c167f]/20"
                />
              </div>

              {/* Error Messages */}
              {(createMutation.isError || updateMutation.isError) && (
                <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                  Error saving goal. Please check your data and try again.
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 px-4 bg-transparent border border-[#63365a] text-[#c695bb] rounded-lg hover:bg-[#3d2245] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={
                    createMutation.isPending || updateMutation.isPending
                  }
                  className="group relative flex-1 py-3 px-4 bg-[#9c167f] text-white rounded-lg hover:bg-[#b51a97] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  {createMutation.isPending || updateMutation.isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {editingGoal ? "Updating..." : "Creating..."}
                    </>
                  ) : (
                    <span className="relative z-10">
                      {editingGoal ? "Update Goal" : "Create Goal"}
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className={`bg-[#321b2d] border border-[#63365a] rounded-2xl p-6 mx-4 w-full max-w-md transform transition-all duration-500 ${
              isDeleteModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl font-bold">Delete Goal</h2>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="text-[#c695bb] hover:text-white transition-colors duration-200 p-1 rounded-lg hover:bg-white/10"
              >
                <span className="material-symbols-outlined text-2xl">
                  close
                </span>
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-[#c695bb] text-sm">
                Are you sure you want to delete the goal &quot;
                <span className="text-white font-medium">
                  {deletingGoal?.goal_name}
                </span>
                &quot;? This action cannot be undone.
              </p>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="flex-1 py-3 px-4 bg-transparent border border-[#63365a] text-[#c695bb] rounded-lg hover:bg-[#3d2245] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  disabled={deleteMutation.isPending}
                  className="flex-1 py-3 px-4 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 border border-red-500/30 hover:border-red-500 transition-all duration-300 hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {deleteMutation.isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>
                      Deleting...
                    </>
                  ) : (
                    "Delete Goal"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Material Icons CSS */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
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
