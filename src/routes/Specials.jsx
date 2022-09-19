import React, { useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { SpecialsForm } from '../components/SpecialsForm'
import { CurrentSpecials } from "../components/CurrentSpecials";

export const Specials = ({ session }) => {
  const [editMode, setEditMode] = useState(false)
  const toggleEditMode = () => {
    setEditMode(!editMode)
  }
  return (
    <div className="w-screen">
      <section>
        <div className="flex my-10 p-10">
      <button
          onClick={toggleEditMode}
          className="bg-orange-500 mx-auto  text-stone-300 desktop:w-96 mobile:w-96 mt-6 p-1 text-2xl mobile:text-xl rounded"
        >
          {editMode ? 'EXIT EDIT MODE' : 'EDIT WEEKLY SPECIALS' }
        </button>
        </div>
        <SpecialsForm session = {{session}} /> 
        <CurrentSpecials editMode={editMode} />
      </section>
    </div>
  )
}
