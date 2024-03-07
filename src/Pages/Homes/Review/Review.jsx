import React from 'react'
import people_1 from '../../../assets/images/people-1.png'
import people_2 from '../../../assets/images/people-2.png'
import people_3 from '../../../assets/images/people-3.png'
import Review_Details from '../Review_Details/Review_Details'
const reviewData = [
    {
        desc :" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores at non magni neque explicabo eveniet doloribus cupiditate architecto libero voluptas nisi, ex incidunt! Explicabo earum magni inventore, odio qui laborum.",
        image : people_1,
        name : "Winson Herry",
        title : "California"
    },
    {
        desc :" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores at non magni neque explicabo eveniet doloribus cupiditate architecto libero voluptas nisi, ex incidunt! Explicabo earum magni inventore, odio qui laborum.",
        image : people_2,
        name : "Winson Herry",
        title : "California"
    },
    {
        desc :" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores at non magni neque explicabo eveniet doloribus cupiditate architecto libero voluptas nisi, ex incidunt! Explicabo earum magni inventore, odio qui laborum.",
        image : people_3,
        name : "Winson Herry",
        title : "California"
    },
]

const Review = () => {
  return (
    <div className='lg:w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-8'>
        {
            reviewData?.map((review, index)=> <Review_Details key={index} review={review}/>)
        }
    </div>
  )
}

export default Review