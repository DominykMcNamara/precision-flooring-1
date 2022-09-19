import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { SpecialCard } from "./SpecialCard";

export const CurrentSpecials = ({ editMode }) => {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    fetchSpecials();
  }, [specials, setSpecials]);
  const fetchSpecials = async () => {
    let { data: specials, error } = await supabase.from("Specials").select("*");
    if (error) {
      console.log("error", error);
    } else {
      setSpecials(specials)
      console.log(specials)
    }
  };

  const specialsItems = specials.map((special) => (
    <>
    <l1 className="flex">
      <SpecialCard
        name={special.item_name}
        details={special.description}
        price={special.price}
        id={special.id}
        editMode={editMode}
      />
      
    </l1>
   
    </>
  ));
  
  return (
    <div className="flex  flex-col mx-auto text-3xl  desktop:w-3/4  laptop:w-3/4  tablet:w-screen mobile:w-screen p-10 rounded mt-10">
      <h1 className="text-center desktop:text-5xl mobile:text-2xl text-orange-600">
        Current Specials
      </h1>
      {specials ? <ul>{specialsItems}</ul> : "no specials"}
    </div>
  );
};
