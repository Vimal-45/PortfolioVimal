import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pdio44b", "template_hyv7spr", form.current, {
        publicKey: "mls0elGrRm2gIOBRW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className=" w-full  h-auto contact flex justify-center items-center  px-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" flex flex-col  p-10 max-w-[600px] w-full"
      >
        <div className="pb-8 mt-14">
          <p className=" text-4xl font-bold inline border-b-4 border-teal-400  text-gray-300">
            Contact
          </p>
          <p className=" text-gray-300 py-4">
            Please feel free to touch with me
          </p>
        </div>
        <input
          type="text"
          name="user_name"
          className=" rounded-full bg-gray-700 focus:border-blue-500  focus:bg-gray-800 focus:outline-none text-gray-300 py-2 px-4"
          placeholder="Name"
          
        />
        <input
          type="email" 
          name="user_email"
          className=" rounded-full bg-gray-700 focus:border-blue-500  focus:bg-gray-800 focus:o  utline-none text-gray-300 py-2 px-4 my-4"
          placeholder="Email"
         
        />
        <textarea
          className="rounded-3xl resize-none bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-gray-300 py-2 px-4"
          type="text"
          name="message"
          rows="10"
          placeholder="Message" 
        ></textarea>
        <button
          type="submit"
          value="Send"
          className=" text-white rounded-full border-2 hover:bg-teal-600 hover:boorder-teal-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Contact Me
        </button>
        <div className=" flex  justify-between">
          <h3 className="  font-bold inline border-b-2 border-teal-400  text-gray-300">
            Email : dvimal45@gmail.com
          </h3>
          <h3 className="  font-bold inline border-b-2 border-teal-400  text-gray-300">
            Mobile : +919884262781
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Contact;
