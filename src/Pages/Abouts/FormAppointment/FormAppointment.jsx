import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Modal from "react-modal";
import axios from 'axios';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const FormAppointment = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const [formData, setFormData] = useState({})
  // console.log(formData)
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    data.services = appointmentOn;
    data.date = date;
    try {
      const appointment={
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber
      }
      const apiUrl = 'http://localhost:5000/appointment';
      console.log(data)
      const response = await axios.post(apiUrl, appointment);
      setFormData(response.data.data);
      alert("User Data post successfully")
      closeModal();
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-[#1DC9C3] text-xl font-bold">
          {appointmentOn}
        </h2>
        <p className="text-center ">
          <small>{date.toDateString()}</small>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-96 mt-3">
          <input
          className="border-2 p-2 rounded-md my-1 w-full"
            type="text"
            name="firstName"
            defaultValue={formData?.firstName}
            placeholder="First name"
            {...register("firstName", { required: true, maxLength: 80 })}
          /> <br />
          <input
          className="border-2 p-2 rounded-md my-1 w-full"
            type="text"
            name="lastName"
            defaultValue={formData?.lastName}
            placeholder="Last name"
            {...register("lastName", { required: true, maxLength: 100 })}
          /> <br />
          <input
          className="border-2 p-2 rounded-md my-1 w-full"
            type="text"
            name="email"
            defaultValue={formData?.email}
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          /> <br />
          <input
          className="border-2 p-2 rounded-md my-1 w-full"
            type="tel"
            name="phoneNumber"
            defaultValue={formData?.phoneNumber}
            placeholder="Mobile number"
            {...register("phoneNumber", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          /> <br />

          <input className="bg-orange-400 text-white py-1 px-4 mt-3 rounded-lg ml-40 font-bold" type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default FormAppointment;
