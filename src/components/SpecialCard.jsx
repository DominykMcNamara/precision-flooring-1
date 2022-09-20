import React from "react";
import { supabase } from "../supabaseClient";

export const SpecialCard = ({ name, details, price, editMode, id }) => {
  
  const handleDelete = async () => {
    const {data, error} = await supabase.from('Specials').delete().match({ id: id})
  }
  return (
    <>
      <div className=" desktop:w-3/4 laptop:w-3/4 text-center tablet:w-screen mobile:w-screen bg-stone-600 mx-auto flex desktop:flex-row  mobile:flex-col justify-center align-center flex-row p-10 desktop:p-15 mt-20 leading-10 rounded">
        <div>
          <h1 className=" text-stone-200 font-regular">{name ? name : 'Name is unavailable'}</h1>
          <h2 className="text-red-600 font-bold">${price ? price : 'Price is unavailable'}</h2>
          <h3 className=" mt-2 desktop:text-2xl mobile:text-[1rem] font-regular">{details ? details : "Details are unavailable"}</h3>
          {editMode ? <button onClick={handleDelete}className="bg-orange-500 mx-auto text-stone-300 desktop:w-full mobile::w-full mt-6 p-1 text-2xl mobile:text-xl rounded opacity-90 hover:opacity-100">Remove</button> : ''}
        </div>
      </div>
    </>
  );
};
