import React, {  useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { LoginForm } from "../components/LoginForm";
import { SpecialsForm } from "../components/SpecialsForm";
import { CurrentSpecials } from "../components/CurrentSpecials";
import { Specials } from "./Specials";

export const Webmaster = () => {

  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data:{session}  }) => {
      setSession(session)
      console.log(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
   
  }, [])

 
  return (
    <div className="w-screen">
      <header className="text-center bg-stone-600 pt-9 pb-9">
        <h1 className="text-stone-200 text-7xl">WebMaster</h1>
      </header>
      {!session  ? (
        <LoginForm />
      ): (
      <Specials session = {session} />
      )}
    </div>
  );
};
