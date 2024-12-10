import React from 'react'
import { IoLocationSharp } from "react-icons/io5"
import Img1 from "../../assets/image/Img1.jpg";
import Img2 from "../../assets/image/Img2.jpg";
import Img3 from "../../assets/image/Img3.jpg";
import Img4 from "../../assets/image/Img4.jpg";
import Img5 from "../../assets/image/Img5.jpg";

const PlacesCard = ({ img, title, location, description, price, type }) => {
  return (
    <div className='shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer'>
      <div className='overflow-hidden'>
        <img src={img} alt="Goa/beaches" className='mx-auto my-5 h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'/>
      </div>
      
      <div className='space-y-2 p-3'>
        <h1 className='line-clamp-1 font-bold text-xl'>
        {title}</h1>
        <div className='flex items-center gap-2 opacity-70'>
            <IoLocationSharp/>
            <span>{location}</span>
        </div>
        <p className='line-clamp-2'>{description}</p>
        <div className='flex items-center justify-between border-t-2 y-3 !mt-3'>
            <div className="opacity-70">
                <p>{type}</p>
            </div>
            <div className='text-2xl font-bold'>
                <p>₹{price}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlacesCard
