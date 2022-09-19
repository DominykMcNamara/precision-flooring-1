import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        email: "dominyksmith@gmail.com",
        options: {
          emailRedirectTo: "http://localhost:3000/webmaster"
        }
      });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        "Sending magic link..."
      ) : (
        <div className="w-screen mt-10 ">
          <form
            id="webmaster"
            className="flex bg-stone-600 flex-col mx-auto text-3xl  desktop:w-3/4  laptop:w-3/4  tablet:w-screen mobile:w-screen p-10 rounded"
            onSubmit={handleLogin}
          >
            <h1 className="text-center desktop:text-5xl mobile:text-2xl text-orange-600">
              Login
            </h1>
            <button className="bg-orange-500 mx-auto text-stone-300 desktop:w-96 mobile:w- mt-6 p-1 text-2xl mobile:text-xl rounded opacity-75 hover:opacity-100">
              SEND MAGIC LINK
            </button>
          </form>
        </div>
      )}
    </>
  );
};
