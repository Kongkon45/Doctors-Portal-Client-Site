import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentsByDate = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const appointmentData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/appointment");
        const data = res.data;
        setAppointments(data);
      } catch (error) {
        console.log(error);
      }
    };
    appointmentData();
  }, []);

  return (
    <div className='mr-5'>
      <h3 className='text-center text-3xl font-bold my-2'>All Patients</h3>
      <table className="w-full my-5 mr-5">
        <thead>
          <tr>
            <th className='border-2 border-gray-600'>ID</th>
            <th className='border-2 border-gray-600'>First Name</th>
            <th className='border-2 border-gray-600'>Last Name</th>
            <th className='border-2 border-gray-600'>Email</th>
            <th className='border-2 border-gray-600'>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {appointments.data?.map((appointment, index)=> <tr key={index}>
            <td className='border-2 border-gray-300 '>{index+1}</td>
            <td className='border-2 border-gray-300 '>{appointment?.firstName}</td>
            <td className='border-2 border-gray-300 '>{appointment?.lastName}</td>
            <td className='border-2 border-gray-300 '>{appointment?.email}</td>
            <td className='border-2 border-gray-300 '>{appointment?.phoneNumber}</td>
          </tr> )}
            
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsByDate;
