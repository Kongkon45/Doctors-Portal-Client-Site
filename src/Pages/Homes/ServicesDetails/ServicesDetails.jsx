import React from 'react'

const ServicesDetails = ({services}) => {
  return (
    <div className='mt-6 border shadow-xl py-6 px-12 rounded-lg'>
        
        <img className='w-2/5 h-2/5 mx-auto' src={services.image} alt="services-img" />
        <h5 className='text-center text-md font-semibold my-4'>{services.title}</h5>
        <p className='text-justify'>{services.desc}</p>
    </div>
  )
}

export default ServicesDetails