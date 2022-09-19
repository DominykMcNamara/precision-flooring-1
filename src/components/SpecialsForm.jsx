import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../supabaseClient";

export const SpecialsForm = ({ session }) => {
  const [loading, setLoading] = useState(false);
  const [itemName, setItemName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  //const [imgUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    if (session) {
      try {
        setLoading(true);
        await supabase.auth.signOut();
        navigate("/");
        alert("Signed out!");
      } catch (error) {
        alert(error.error_description || error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleInsert = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("Specials").insert([
        {
          item_name: itemName,
          description: details,
          price: price,
          //img_url: imgUrl,
        },
      ]);
      alert("Special added!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen mt-10 ">
      <form
        onSubmit={handleInsert}
        className="flex bg-stone-600 flex-col mx-auto text-3xl  desktop:w-3/4  laptop:w-3/4  tablet:w-screen mobile:w-screen p-10 rounded"
      >
        <h1 className="text-center desktop:text-5xl mobile:text-2xl text-orange-600">
          Add Special
        </h1>
        <label className="flex flex-col mx-auto p-3 text-stone-200 desktop:text-2xl mobile:text-xl">
          Item Name:
          <input
            type="text"
            className="form-input desktop:w-96 mobile:w-full mt-2 text-stone-800"
            value={itemName || ""}
            onChange={(e) => setItemName(e.target.value)}
            name="itemName"
            required
          ></input>
        </label>
        <label className="flex flex-col mx-auto  p-3 mt-2 text-stone-200 desktop:text-2xl mobile:text-xl">
          Details:
          <textarea
            className="form-textarea desktop:w-96 mobile:w-full text-stone-800"
            name="details"
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col mx-auto  p-3 mt-2 text-stone-200 desktop:text-2xl mobile:text-xl">
          Price
          <input
            className="form-input desktop:w-96 mobile:w-full mt-2 text-stone-800"
            value={price || ""}
            onChange={(e) => setPrice(e.target.value)}
            name="price"
            required
          />
        </label>
        {/*  <label className="flex flex-col mx-auto  p-3 mt-2 text-stone-200 desktop:text-2xl mobile:text-xl">
          Image URL:
          <input
            className="form-file desktop:w-96 mobile:w-full mt-2 text-stone-800"
            type="file"
            name="img"
          />
        </label>
  */}
        <button
          onClick={handleInsert}
          type="submit"
          className="bg-orange-500 mx-auto text-stone-300 desktop:w-96 mobile:w- mt-6 p-1 text-2xl mobile:text-xl rounded opacity-75 hover:opacity-100"
        >
          SUBMIT
        </button>
        <button
          onClick={handleLogout}
          className="bg-orange-500 mx-auto text-stone-300 desktop:w-96 mobile:w-96 mt-6 p-1 text-2xl mobile:text-xl rounded opacity-25 hover:opacity-100"
        >
          LOGOUT
        </button>
      </form>
    </div>
  );
};
