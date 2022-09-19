import React, { createContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const SpecialsContext = createContext();

export const SpecialsProvider = (props) => {
  const [user, setUser] = useState(null);
  const [specials, setSpecials] = useState([]);

  return (
    <SpecialsContext.Provider
      value={{ user, setUser, setSpecials, specials }}
    >
      {props.children}
    </SpecialsContext.Provider>
  );
};
