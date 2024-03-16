import React, { useEffect, useState } from "react";
import axios from "axios";

const AppointmentTable = () => {
  const [appointment, setAppointment] = useState([]);
  console.log(appointment)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/appointment");
        const data = res.data;
        setAppointment(data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, []);
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold my-4 text-center">All Appointment Information</h1>
      <div>
        <table className="border border-black w-full mx-auto">
            <thead>
                <tr>
                    <th className="border-2 border-gray-400">ID</th>
                    <th className="border-2 border-gray-400">First Name</th>
                    <th className="border-2 border-gray-400">Last Name</th>
                    <th className="border-2 border-gray-400">Email</th>
                    <th className="border-2 border-gray-400">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointment.data?.map((info, index)=>{
                        return <tr key={index} className="text-center border">
                            <td className="border-2 border-gray-300">{index+1}</td>
                            <td className="border-2 border-gray-300">{info.firstName}</td>
                            <td className="border-2 border-gray-300">{info.lastName}</td>
                            <td className="border-2 border-gray-300">{info.email}</td>
                            <td className="border-2 border-gray-300">{info.phoneNumber}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentTable;
