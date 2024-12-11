import React from 'react'
import banner from "../../assets/image/banner.png"

const Banner = () => {
  return (
    <div className='min-h-[550px] bg-gray-100'>
        <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
      <div className='container'>
        <div>
            {/* Image section */}
            <div data>
                <img src={banner}
                alt="" 
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
            </div>
            {/* Text content section */}
        </div>
      </div>
        </div>
    </div>
  )
}

export default Banner
