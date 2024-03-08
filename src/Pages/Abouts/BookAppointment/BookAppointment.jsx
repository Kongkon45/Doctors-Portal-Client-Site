import React from 'react'
import BookingCart from '../BookingCart/BookingCart'

const bookingData = [
    {
        id :1,
        subject : "Teeth Orthodonitice",
        visitingHour : "8:00 AM - 9:00 AM",
        totalSpace : "10 SPACES AVAILABLE",

    },
    {
        id :2,
        subject : "Cosmetic Dentistry",
        visitingHour : "10:00 AM - 12:00 AM",
        totalSpace : "15 SPACES AVAILABLE",

    },
    {
        id :3,
        subject : "Teeth Cleaning",
        visitingHour : "5:00 AM - 9:00 AM",
        totalSpace : "20 SPACES AVAILABLE",

    },
    {
        id :4,
        subject : "Cavity Protection",
        visitingHour : "9:00 AM - 10:00 AM",
        totalSpace : "15 SPACES AVAILABLE",

    },
    {
        id :5,
        subject : "Teeth Cleaning",
        visitingHour : "6:00 AM - 8:00 AM",
        totalSpace : "10 SPACES AVAILABLE",

    },
    {
        id :6,
        subject : "Teeth Orthodonitice",
        visitingHour : "8:00 AM - 9:00 AM",
        totalSpace : "20 SPACES AVAILABLE",

    },
]

const BookAppointment = ({date}) => {
  return (
    <section className='w-11/12 mx-auto py-10'>
        <h2 className='text-center text-2xl font-bold text-[#1DC9C3] mb-6'>Available Appointment on {date.toDateString()}</h2>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
            {bookingData?.map((booking)=><BookingCart key={booking.id} date={date} booking={booking}/>)}
        </div>
    </section>
  )
}

export default BookAppointment