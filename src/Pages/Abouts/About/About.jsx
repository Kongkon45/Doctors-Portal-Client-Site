import React, { useState } from 'react'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import BookAppointment from '../BookAppointment/BookAppointment'

const About = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const handleDateChange = (date)=>{
    setSelectedDate(date)
}
  return (
    <div>
      <AppointmentHeader handleDateChange={handleDateChange}/>
      <BookAppointment date={selectedDate}/>
    </div>
  )
}

export default About