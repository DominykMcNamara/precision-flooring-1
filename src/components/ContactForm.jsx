import React,  { useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h5llqol', 'template_le5yk64', form.current, 'nCbx7gmwJ6ehKLHLq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="w-screen mt-10 ">
      <form ref={form} onSubmit={sendEmail} id="contact" className="flex bg-stone-600 flex-col mx-auto text-3xl  desktop:w-3/4  laptop:w-3/4  tablet:w-screen mobile:w-screen p-10 rounded">
        <h1 className="text-center desktop:text-5xl mobile:text-2xl text-orange-600">
          Contact
        </h1>
        <label className="flex flex-col mx-auto p-3 text-stone-200 desktop:text-2xl mobile:text-xl">
          Name:
          <input
            type="text"
            className="form-input desktop:w-96 mobile:w-full mt-2 text-stone-800"
            name="name"
            required
          ></input>
        </label>
        <label className="flex flex-col mx-auto  p-3 text-stone-200 desktop:text-2xl mobile:text-xl">
          Email:
          <input
            type="email"
            className="form-input desktop:w-96 mobile:w-full mt-2 text-stone-800"
            required
            name="email"
          ></input>
        </label>
        <label className="flex flex-col mx-auto  p-3 mt-2 text-stone-200 desktop:text-2xl mobile:text-xl">
          How may we help you?
          <textarea
            className="form-textarea desktop:w-96 mobile:w-full text-stone-800"
            name="message"
            required
          />
        </label>
        <button className="bg-orange-500 mx-auto text-stone-300 desktop:w-96 mobile:w- mt-6 p-1 text-2xl mobile:text-xl rounded opacity-75 hover:opacity-100">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
