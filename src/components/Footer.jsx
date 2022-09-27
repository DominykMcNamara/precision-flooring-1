import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-screen">
      <div className="mx-auto  flex flex-wrap desktop:flex-row mobile:flex-col justify-between mobile:pl-10 align-center w-1/2 desktop:w-3/4  laptop:w-3/4  tablet:w-screen mobile:w-screen mt-10 pb-10">
        <div className="flex flex-row align-center opacity-75 pointer-auto opacity-75 hover:opacity-100">
          <i className="fa-sharp fa-solid fa-phone text-orange-600"></i>
          <h3 className="ml-2 text-stone-200">(207)-703-2990</h3>
        </div>
        <div className="flex flex-row align-center opacity-75 pointer-auto opacity-75 hover:opacity-100">
          <i className="fa-sharp fa-solid fa-envelope text-orange-600"></i>
          <h3 className="ml-2 text-stone-200">mg.precision.flooring@gmail.com</h3>
        </div>
        <div className="flex flex-row align-center opacity-75 pointer-auto opacity-75 hover:opacity-100">
          <i className="fa-sharp fa-solid fa-clock text-orange-600"></i>
          <h3 className="ml-2 text-stone-200">
            Mon - Sat 7AM - 5PM || Sun - Closed
          </h3>
        </div>
        <div className="flex flex-row align-center opacity-75 pointer-default opacity-75 hover:opacity-100">
          <i className="fa-solid fa-location-pin text-orange-600"></i>
          <h3 className="ml-2 text-stone-200">
            398 Dow Hwy Unit 44, Eliot, ME 03903
          </h3>{" "}
        </div>
        <h3 className="ml-2 text-stone-200 opacity-75 cursor-pointer"><Link to="/webmaster">Webmaster</Link></h3>
      </div>
    </div>
  );
};
