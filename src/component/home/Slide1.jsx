import React from 'react'
import "./Slide1.css"

const Slide1 = () => {
  return (
    <div className='flex flex-col overflow-hidden mt-20 md:pb-10 lg:pb-20'>
        <div className='hidden md:block md:py-9 md:text-3xl lg:text-4xl'>
            <p id='static_text' className='text-center text-gray-200 font-mono inline font-bold uppercase'>The world </p>
            <span id='dyanmic_text' className='inline text-gray-200 font-mono relative font-bold py-2 uppercase'>biggest movie app . . . !</span>
        </div>
    </div>  
  )
}

export default Slide1;