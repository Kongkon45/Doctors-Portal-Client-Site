import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';

const Testimonial = () => {
  return (
    <div className='w-11/12 mx-auto flex lg:flex-row flex-col justify-center items-center'>
      <div className='w-1/2'>
        <h5 className='text-[#1CC7C1] font-bold text-md'>TESTIMONIAL</h5>
        <h3 className='text-[#3a4256] text-3xl font-bold mt-4'>What's Our Patients <br /> Says</h3>
      </div>
      <div className='w-1/2 flex items-center lg:justify-end justify-start'>
        <span className="text-[150px] text-[#1CC7C1] opacity-20"><FaQuoteLeft/></span>
      </div>
    </div>
  );
}

export default Testimonial;
