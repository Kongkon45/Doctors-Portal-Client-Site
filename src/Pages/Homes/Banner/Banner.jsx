import React from 'react'
import chair from '../../../assets/images/chair.png'
const Banner = () => {
  return (
    <main className='flex lg:flex-row flex-col justify-center items-center'>
        <div className='w-1/2 ml-16'>
            <h2 className='text-[#3a4256] text-4xl font-bold '>Youe New Smail <br /> Starts Here</h2>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Officiis autem modi ad nam officia. Necessitatibus <br /> obcaecati similique harum reiciendis eveniet.</p>
            <button className='bg-[#1DC9C3] text-white rounded-md py-2 px-4 mt-4'>Get Appointment</button>
        </div>
        <div className='w-1/2 mr-16 my-16'>
            <img src={chair} alt="" />
        </div>
    </main>
  )
}

export default Banner