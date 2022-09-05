import React from "react";

export const ContactForm = () => {
  return (
    <div className="w-screen mt-10 rounded ">
      <form className="flex bg-stone-600 flex-col mx-auto text-3xl w-1/2 p-10">
        <h1 className="text-center text-5xl text-orange-600">Contact</h1>
        <label className="flex flex-col mx-auto p-3 text-stone-200 text-2xl">
          Name:
          <input
            type="text"
            className="form-input w-96 mt-2 text-stone-800"
            required
          ></input>
        </label>
        <label className="flex flex-col mx-auto  p-3 text-stone-200 text-2xl">
          Email:
          <input
            type="email"
            className="form-input w-96 mt-2 text-stone-800"
            required
          ></input>
        </label>
        <label className="flex flex-col mx-auto  p-3 mt-2 text-stone-200 text-2xl">
          How may we help you?
          <textarea className="form-textarea w-96 text-stone-800" />
        </label>
        <button className="bg-orange-500 mx-auto text-stone-300 w-96 mt-6 p-1 text-2xl rounded">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
