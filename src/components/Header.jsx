import React from "react";

export const Header = () => {
  return (
    <div className="bg-headerImage desktop:w-screen mobile:w-96 desktop:pt-36 desktop:pb-36">
      <div className="flex desktop:flex-row text-stone-200 justify-end align-center desktop:text-3xl mobile:text-2xl">
        <a href="#contact" className="mr-20 opacity-75 hover:opacity-100 hover:text-orange-500">Contact</a>
        <a href="#services" className="mr-20 opacity-75 hover:opacity-100 hover:text-orange-500">Services</a>
      </div>
      <div className="text-center font-bold mt-20  mx-auto w-2/4">
        <h1 className="text-orange-600 desktop:text-7xl mobile:text-4xl">
          <span className="desktop:text-5xl mobile:text-2xl text-stone-200">Mark Gagne's</span>{" "}
          Precision Flooring
        </h1>
        <h2 className="text-stone-200 desktop:text-3xl mobile:text-[1rem] mx-auto mt-10 leading-10 font-regular">
          Since 1998 Precision Flooring has provided commercial flooring sales
          and services to meet the desires of their customers with a customer
          satisfaction gurantee.
        </h2>
        <button className="bg-orange-500 text-stone-300 desktop:w-96 mobile:w-full mt-6 mobile:text-2 p-3 rounded opacity-75 hover:opacity-100">
          REQUEST A FREE QUOTE
        </button>
      </div>
    </div>
  );
};
