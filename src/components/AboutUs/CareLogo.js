import React from 'react'
import CareLogo1 from '../../Asserts/CareLogo.jpg'

const CareLogo = () => {
  return (
    <>

    <div className='mt-10 relative'>
        <img className='w-full h-full object-cover ' src={CareLogo1} alt='#'/>

        <div className='flex justify-center items-center absolute inset-0  text-white md:text-3xl lg:text-5xl font-bold'>
          <h1>Join Hands to Create a Better Tomorrow</h1>
        </div>
    </div>
    
    
    </>
  )
}

export default CareLogo