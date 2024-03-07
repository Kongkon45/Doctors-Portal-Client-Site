import React from 'react'
import Header from '../Header/Header'
import Services from '../Services/Services'
import Dental_Care from '../Dental_Care/Dental_Care'
import Appointment from '../Appointment/Appointment'
import Testimonial from '../Testimonial/Testimonial'
import Review from '../Review/Review'
import Blog from '../Blog/Blog'
import Doctor from '../Doctor/Doctor'
import Contact_Us from '../Contact_Us/Contact_Us'

const Home = () => {
  return (
    <div>
        <Header/>
        <Services/>
        <Dental_Care/>
        <Appointment/>
        <Testimonial/>
        <Review/>
        <Blog/>
        <Doctor/>
        <Contact_Us/>
    </div>
  )
}

export default Home