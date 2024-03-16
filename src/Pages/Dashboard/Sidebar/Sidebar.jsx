import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaRegCalendar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
        <ul>
            <li onClick={()=>navigate(`/dashboard`)} className='flex items-center text-xl font-semibold my-2 hover:cursor-pointer hover:underline'><span><RxDashboard className='mr-3'/></span>Dashboard</li>
            <li onClick={()=>navigate(`/dashboard/appointment`)} className='flex items-center text-xl font-semibold my-2 hover:cursor-pointer hover:underline'><span><FaRegCalendar className='mr-3'/></span>Appointment</li>
            <li className='flex items-center text-xl font-semibold my-2 hover:cursor-pointer hover:underline'><span><FaUsers className='mr-3'/></span>Patients</li>
            <li className='flex items-center text-xl font-semibold my-2 hover:cursor-pointer hover:underline'><span><IoDocument className='mr-3'/></span>Prescriptions</li>
            <li className='flex items-center text-xl font-semibold my-2 hover:cursor-pointer hover:underline'><span><MdOutlineSettings className='mr-3'/></span>Setting</li>
            <li className='flex items-center text-xl font-semibold my-2 mt-48 cursor-pointer hover:underline'><span><FaArrowRightFromBracket className='mr-3'/></span>Log Out</li>
        </ul>
    </div>
  )
}

export default Sidebar