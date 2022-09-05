import React from "react";

export const Header = () => {
  return (
    <div className="bg-headerImage w-screen pt-36 pb-36">
      <div className="flex flex-row text-stone-200 justify-end align-center text-3xl">
        <p className="mr-20">Contact</p>
        <p className="mr-20">Services</p>
      </div>
      <div className="text-center font-bold mt-20  mx-auto w-2/4">
        <h1 className="text-orange-600 text-7xl">
          <span className="text-5xl text-stone-200">Mark Gagne's</span>{" "}
          Precision Flooring
        </h1>
        <h2 className="text-stone-200 text-3xl mx-auto mt-10 leading-10 font-regular">
          Since 1998 Precision Flooring has provided commercial flooring sales
          and services to meet the desires of their customers with a customer
          satisfaction gurantee.
        </h2>
        <button className="bg-orange-500 text-stone-300 w-96 mt-6 p-3 rounded">
          REQUEST A FREE QUOTE
        </button>
      </div>
    </div>
  );
};
