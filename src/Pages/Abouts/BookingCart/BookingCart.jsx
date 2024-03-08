import React from 'react'
import FormAppointment from '../FormAppointment/FormAppointment'

const BookingCart = ({booking, date}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
        <div className='border shadow-md py-6 px-10 rounded-md text-center'>
            <h3 className='text-[#1DC9C3] text-xl font-semibold '>{booking.subject}</h3>
            <h5 className='text-md text-black '>{booking.visitingHour}</h5>
            <p className='text-xs text-gray-400'>{booking.totalSpace}</p>
            <button onClick={openModal} className=' bg-gradient-to-r from-[#30ada9] to-[#11ddd6] text-white rounded-md py-2 px-4 mt-4'>BOOK APPOINMENT</button>
            <FormAppointment modalIsOpen={modalIsOpen} date={date} appointmentOn ={booking.subject} closeModal={closeModal} />
        </div>
    </div>
  )
}

export default BookingCart