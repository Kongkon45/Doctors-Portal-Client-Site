import React from "react";
import { useForm } from "react-hook-form";

import Modal from "react-modal";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  closeModal()
  } 
  

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
          className="border-2 p-2 rounded-md my-1"
            type="text"
            placeholder="First name"
            {...register("First name", { required: true, maxLength: 80 })}
          /> <br />
          <input
          className="border-2 p-2 rounded-md my-1"
            type="text"
            placeholder="Last name"
            {...register("Last name", { required: true, maxLength: 100 })}
          /> <br />
          <input
          className="border-2 p-2 rounded-md my-1"
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          /> <br />
          <input
          className="border-2 p-2 rounded-md my-1"
            type="tel"
            placeholder="Mobile number"
            {...register("Mobile number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          /> <br />

          <input className="bg-orange-400 text-white py-1 px-4 rounded-lg ml-16" type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default FormAppointment;
