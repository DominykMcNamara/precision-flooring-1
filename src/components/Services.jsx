import React from "react";
import BirchFloor from "../assets/markus-spiske-3tbtq3oCQ1s-unsplash.jpg";

export const Services = () => {
  return (
    <div className=" w-[75rem] bg-stone-600 ml-[25vw] flex flex-row justify-center align-center flex-row pt-[2rem] pb-[2rem] pl-[5rem] pr-[5rem] mt-[3rem] rounded">
      <img
        src={BirchFloor}
        alt="Birchwood Floor"
        className="w-[60rem] h-[20rem] rounded"
      />
      <div className=" ml-[5rem] text-center text-stone-200">
        <h1 className="text-5xl text-orange-600 mt-[2.5rem]">Services</h1>
        <h3 className="w-[30rem] mt-[1rem] text-2xl font-regular">
          We provide high quality flooring in a vaiety of categories including
          hardwood, carpet, vinyl, tile. laminate, and more in residential &
          commercial applications
        </h3>
      </div>
    </div>
  );
};
