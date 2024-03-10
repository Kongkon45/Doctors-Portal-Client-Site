import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Sidebar from "../Sidebar/Sidebar";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="flex h-screen">
      <div className="w-2/12 bg-gradient-to-t from-[#18D2B5] to-[#13D1D7] text-white flex justify-center pt-20">
        <Sidebar />
      </div>
      <div className="w-4/12">
        <h3 className="text-xl text-black ml-10 mt-10 font-bold">Appointments</h3>
        <div className="flex justify-center mt-12">
        <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
      </div>
      <div className="w-6/12">
        <AppointmentsByDate />
      </div>
    </div>
  );
};

export default Dashboard;
