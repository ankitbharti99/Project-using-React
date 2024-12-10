import React from 'react'
import video4 from "../../assets/video4.mp4"
import video3 from "../../assets/video3.mp4"
import video2 from "../../assets/video2.mp4"
import video1 from "../../assets/video1.mp4"
import Hero from "../Hero/Hero.jsx"
import Places from "../Places/Places.jsx"
import BannerImg from '../BannerImg/BannerImg.jsx'
import bannerImg from "../../assets/image/bannerImg.jpeg"
import Blogs from '../Blogs/Blogs.jsx'

const Home = () => {
  return (
    <>
      <div>
        <div className='relative h-[700px]'>
          <video
            autoPlay
            loop
            muted
            className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'
          >
            <source src={video1} type='video/mp4'/>
          </video>
          <Hero/>
        </div>
        <Places/>
        <BannerImg img={bannerImg}/>
        <Blogs/>
      </div>
    </>
  )
}

export default Home
