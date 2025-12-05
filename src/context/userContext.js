"use client";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { supabase } from "@/lib/supabase";

const UserContext = createContext();

export function UserProvider({ children, initialSession }) {
  // If the server supplied an initialSession prop, use it to avoid an
  // unnecessary client-side roundtrip.
  const [user, setUser] = useState(initialSession?.user ?? null);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [loading, setLoading] = useState(initialSession ? false : true);

  useEffect(() => {
    // If the server provided an initial session, skip the immediate getSession
    // call but still subscribe to auth state changes so the client stays in sync.
    let mounted = true;

    const setupSubscription = () => {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);

        if (event === "SIGNED_OUT") {
          setIsOnboarded(false);
        }
      });

      return () => subscription.unsubscribe();
    };

    if (initialSession && initialSession.user) {
      // Server provided user — skip fetching; still subscribe.
      const unsub = setupSubscription();
      return unsub;
    }

    // No initial session from server — perform normal client session check.
    const getSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          console.error("Error getting session:", error);
          return;
        }

        if (session?.user) {
          setUser(session.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error in getSession:", error);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    getSession();
    const unsub = setupSubscription();

    return () => {
      mounted = false;
      if (typeof unsub === "function") unsub();
    };
  }, [initialSession]);

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
