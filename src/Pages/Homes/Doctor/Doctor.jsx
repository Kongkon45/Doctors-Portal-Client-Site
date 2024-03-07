import React from 'react'
import doctor from '../../../assets/images/doctor-small.png'
import Doctor_Details from '../Doctor_Details/Doctor_Details'

const doctorData = [
    {
        image : doctor,
        name : "Dr.Caudi",
        phone : "+61 452 200 126"
    },
    {
        image : doctor,
        name : "Dr.Caudi",
        phone : "+61 452 200 126"
    },
    {
        image : doctor,
        name : "Dr.Caudi",
        phone : "+61 452 200 126"
    }
]


const Doctor = () => {
  return (
    <div>
        <h3 className='text-center text-[#1DC9C3] text-xl font-bold mt-6'>OUR DOCTOR</h3>
        <div className='lg:w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-8'>
            {doctorData?.map((doctor, index)=> <Doctor_Details key={index} doctor={doctor}/>)}
        </div>
    </div>
  )
}

export default Doctor