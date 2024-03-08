import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import chair from '../../../assets/images/chair.png'
import styles from './AppointmentHeader.module.css'

const AppointmentHeader = ({handleDateChange}) => {
    
  return (
    <main className={`flex lg:flex-row flex-col justify-center items-center ${styles.banner}`}>
        <div className='w-1/2 ml-16'>
            <h2 className='text-[#3a4256] text-4xl font-bold mb-12 mt-6'>Appointment</h2>
            <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className='w-1/2 mr-16 my-16'>
            <img src={chair} alt="" />
        </div>
    </main>
  )
}

export default AppointmentHeader