import React from 'react'
import './BusinessInfoCart.css'

const BusinessInfoCart = ({info}) => {
  return (
    <div className= {`flex justify-center items-center p-5 rounded-md  text-white info-${info.background}`}>
        <div className='mr-5'>
            <span className='text-4xl text-bold '>{info.icon}</span>
        </div>
        <div>
            <h5 className='text-base font-semibold'>{info.title}</h5>
            <small className='text-xs leading-3'>{info.description}</small>
            
        </div>
    </div>
  )
}

export default BusinessInfoCart