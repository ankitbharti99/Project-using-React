import React from 'react'
import {Link} from "react-router-dom";

const BlogCard = ({ image, date, title, description, author }) => {
  return (
    <Link>
      <div className='p-4'>
        <div className='overflow-hidden'>
            <img src={image} alt="" 
            className='mx-auto h-[250px] w-full object-cover transition-all duration-700 hover:skew-x-2 hover:scale-110'
            />
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
