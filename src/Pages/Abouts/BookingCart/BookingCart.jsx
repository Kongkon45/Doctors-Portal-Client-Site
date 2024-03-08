import React from 'react'

const BookingCart = ({booking}) => {
  return (
    <div>
        <div className='border shadow-md py-6 px-10 rounded-md text-center'>
            <h3 className='text-[#1DC9C3] text-xl font-semibold '>{booking.subject}</h3>
            <h5 className='text-md text-black '>{booking.visitingHour}</h5>
            <p className='text-xs text-gray-400'>{booking.totalSpace}</p>
            <button className=' bg-gradient-to-r from-[#30ada9] to-[#11ddd6] text-white rounded-md py-2 px-4 mt-4'>BOOK APPOINMENT</button>
        </div>
    </div>
  )
}

export default BookingCart