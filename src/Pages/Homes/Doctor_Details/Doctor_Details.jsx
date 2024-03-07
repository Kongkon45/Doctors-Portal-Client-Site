import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Doctor_Details = ({doctor}) => {
  return (
    <div>
        <img src={doctor.image} alt="" />
        <h3 className='text-center font-bold text-md mt-2'>{doctor.name}</h3>
        <p className='text-center text-sm ml-6 text-gray-400 relative'><span className='absolute left-20 top-1'><FaPhoneAlt/></span>{doctor.phone}</p>
    </div>
  )
}

export default Doctor_Details