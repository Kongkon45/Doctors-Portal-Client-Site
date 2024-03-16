import React from "react";
import AppointmentTable from "../AppointmentTable/AppointmentTable";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const Appointment = () => {
  return (
    <div className="flex gap-10">
      <div className="w-1/4 bg-gradient-to-t from-[#18D2B5] to-[#13D1D7] text-white flex justify-center pt-20">
        <Sidebar />
      </div>
      <div className="w-3/4 mr-10">
        <AppointmentTable />
      </div>
    </div>
  );
};

export default Appointment;
