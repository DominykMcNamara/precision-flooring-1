import React, { useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    session,
  }

  return <AuthContext.Provider value={ value }>{!loading && children}</AuthContext.Provider>;
};
