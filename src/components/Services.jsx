import React from "react";
import BirchFloor from "../assets/markus-spiske-3tbtq3oCQ1s-unsplash.jpg";

export const Services = () => {
  return (
    <div className="w-screen">
    <div className=" w-1/2 bg-stone-600 mx-auto flex flex-row justify-center align-center flex-row p-10 mt-20 rounded">
      <img
        src={BirchFloor}
        alt="Birchwood Floor"
        className="w-2/4 h-15 rounded"
      />
      <div className=" ml-3 text-center text-stone-200">
        <h1 className="text-5xl text-orange-600 mt-10">Services</h1>
        <h3 className=" mt-2 text-2xl font-regular">
          We provide high quality flooring in a vaiety of categories including
          hardwood, carpet, vinyl, tile. laminate, and more in residential &
          commercial applications
        </h3>
      </div>
    </div>
    </div>
  );
};
