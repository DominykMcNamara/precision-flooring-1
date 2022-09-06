import React from "react";

export const Footer = () => {
  return (
    <div className="w-screen">
      <div className="mx-auto flex flex-row justify-between align-center w-1/2 desktop:w-3/4  laptop:w-3/4  tablet:w-screen mobile:w-screen mt-10 pb-10">
        <div className="flex flex-row align-center">
          <i className="fa-sharp fa-solid fa-phone text-orange-600"></i>
          <h3 className="ml-2 text-stone-200">(207)-703-2990</h3>
        </div>
        <div className="flex flex-row align-center">
          <i className="fa-sharp fa-solid fa-clock text-orange-600"></i>
          <h3 className="ml-2 text-stone-200">
            Mon - Sat 7AM - 5PM || Sun - Closed
          </h3>
        </div>
        <div className="flex flex-row align-center">
          <i className="fa-solid fa-location-pin text-orange-600"></i>
          <h3 className="ml-2 text-stone-200">
            398 Dow Hwy Unit 44, Eliot, ME 03903
          </h3>{" "}
        </div>
      </div>
    </div>
  );
};
