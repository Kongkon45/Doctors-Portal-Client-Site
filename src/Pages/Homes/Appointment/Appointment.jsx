import React from 'react';
import doctorImage from '../../../assets/images/doctor.png'; 
import styles from './Appointment.module.css';

const HeaderSection = () => {
  return (
    <div className={`flex lg:flex-row flex-col bg-cover bg-center lg:h-96 h-auto bg-[#3a4256] opacity-95 mt-24 mb-12 ${styles.background}`}>
      <div className='w-2/5 relative'>
        <img src={doctorImage} alt="Doctor" className="absolute lg:top-[-120px] " />
      </div>
      <div className='w-3/5 p-8'>
        <h5 className='text-[#1CC7C1] font-bold text-xl my-6'>APPOINTMENT</h5>
        <h2 className='text-3xl font-semibold mb-4 text-white'>Make an appointment <br/> Today</h2>
        <p className='text-white my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta itaque! <br /> Quae voluptatibus aliquam nesciunt expedita necessitatibus rem recusandae odit.</p>
        <button className='bg-[#1DC9C3] text-white rounded-md py-2 px-4'>Learn More</button>
      </div>
    </div>
  );
};

export default HeaderSection;
