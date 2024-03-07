import React from 'react'
import BusinessInfoCart from '../BusinessInfoCart/BusinessInfoCart'
import { CiClock2 } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const infosData = [
    {
        title : "Opening Hours",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        icon : <CiClock2 />,
        background : "primary"
    },
    {
        title : "Visits our location",
        description : "Brooklyn, NY 10036, United Stated",
        icon : <FaMapMarkerAlt />,
        background : "dark"
    },
    {
        title : "Contact us now",
        description : "+000 123 564398",
        icon : <MdOutlinePhoneInTalk />,
        background : "primary"
    }
]
const BusinessInfo = () => {
    
  return (
    <section className='grid lg:grid-cols-3 lg:w-10/12 lg:mx-auto lg:gap-5  md:grid-cols-2 grid-cols-1'>
        {infosData?.map((info, index )=> <BusinessInfoCart key={index}  info={info}/>)}
    </section>
  )
}

export default BusinessInfo