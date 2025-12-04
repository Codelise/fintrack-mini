"use client";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { supabase } from "@/lib/supabase";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Get initial session from Supabase
    const getSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        console.log("UserContext - Session:", session?.user?.id); // Debug
        console.log("UserContext - Error:", error); // Debug

        if (error) {
          console.error("Error getting session:", error);
          return;
        }

        if (session?.user) {
          console.log("UserContext - Setting user:", session.user.id);
          setUser(session.user);

          // Check if user is onboarded (you can add your logic here)
          // const { data: profile } = await supabase.from('profiles').select('is_onboarded').eq('id', session.user.id).single();
          // setIsOnboarded(profile?.is_onboarded || false);
        } else {
          console.log("UserContext - No user found");
          setUser(null);
        }
      } catch (error) {
        console.error("Error in getSession:", error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(
        "UserContext - Auth state changed:",
        event,
        session?.user?.id
      );

      setUser(session?.user ?? null);
      setLoading(false);

      // Reset onboarding when user signs out
      if (event === "SIGNED_OUT") {
        setIsOnboarded(false);
      }

      // Check onboarding when user signs in
      if (event === "SIGNED_IN" && session?.user) {
        // Add your onboarding check logic here
      }
    });

    return () => subscription.unsubscribe();
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isOnboarded,
        setIsOnboarded,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
