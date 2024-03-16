import React from "react";
import styles from './Contact_Us.module.css'
const Contact_Us = () => {
  return (
    <div
      className={` bg-cover bg-center bg-[#3a4256] opacity-95 py-12 ${styles.background}`}
    >
      <h5 className="text-center text-[#1CC7C1] font-bold text-md">
        CONTACT US
      </h5>
      <h3 className="text-center text-white lg:text-3xl text-xl font-semibold">
        Always Connect With us
      </h3>
      <form className="lg:w-2/3 sm:w-full mx-auto">
        <input
          className="lg:w-full w-full sm:w-48 p-2 rounded-md mt-10"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address *"
        />{" "}
        <br />
        <input
          className="lg:w-full w-full sm:w-48 my-5 p-2 rounded-md"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject *"
        />{" "}
        <br />
        <textarea
          className="lg:w-full w-full mb-5 p-2 rounded-md"
          name="message"
          id="message"
          placeholder="Your Message*"
          cols="30"
          rows="5"
        ></textarea>
        <button className="bg-[#1DC9C3] text-white rounded-md py-2 px-6 mt-4 lg:w-32 lg:ml-[380px] w-full">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact_Us;
