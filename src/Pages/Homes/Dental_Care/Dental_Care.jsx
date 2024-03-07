import React from 'react'
import treatment from '../../../assets/images/treatment.png'

const Dental_Care = () => {
  return (
    <div className='w-11/12 mx-auto flex lg:flex-row flex-col my-12'>
        <div className='w-1/2'>
            <img className='w-96 h-96 rounded-md' src={treatment} alt="" />
        </div>
        <div className='w-1/2 mt-10'>
            <h2 className='text-[#3a4256] text-3xl font-semibold'>Exceptional Dental <br /> Care, on Your Terms</h2>
            <p className='text-md my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eaque delectus nisi provident numquam vel suscipit labore sed velit illo praesentium ratione odit inventore, asperiores aspernatur! Tempora expedita fuga dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aliquam?</p>
            <button className='bg-[#1DC9C3] text-white rounded-md py-2 px-4 mt-4'>Learn More</button>
        </div>
    </div>
  )
}

export default Dental_Care