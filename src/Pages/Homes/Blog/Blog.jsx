import React from 'react'
import people_1 from '../../../assets/images/people-1.png'
import people_2 from '../../../assets/images/people-2.png'
import people_3 from '../../../assets/images/people-3.png'
import Blog_Details from '../Blog_Details/Blog_Details'
const blogData = [
    {
        desc :"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos perferendis, aut quaerat nemo nam ab.",
        
        image : people_3,
        name : "Winson Herry",
        date : "23 April 2023",
        title : "Check at least a doctor in a  year for your teeth"
    },
    {
        desc :"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos perferendis, aut quaerat nemo nam ab.",
        image : people_1,
        name : "Winson Herry",
        date : "23 April 2023",
        title : "2 times of brush in a day can  keep you healthy"
    },
    {
        desc :"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos perferendis, aut quaerat nemo nam ab.",
        image : people_2,
        name : "Winson Herry",
        date : "23 April 2023",
        title : "The tooth cancer is taking a challenge"
    },
]

const Blog = () => {
  return (
    <div>
        <div className='text-center'>
            <h5 className='text-[#1CC7C1] font-bold text-md '>OUR BLOG</h5>
            <h3 className='text-3xl font-semibold text-[#3A4256]'>From Our Blog News</h3>
        </div>
        <div className='lg:w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-8'>
            {
               blogData?.map((blog, index)=> <Blog_Details key={index} blog={blog}/>) 
            }
        </div>
    </div>
  )
}

export default Blog