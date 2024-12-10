import React from 'react'
import PlacesCard from './PlacesCard.jsx'
import Img1 from "../../assets/image/Img1.jpg"
import Img2 from "../../assets/image/Img2.jpg"
import Img3 from "../../assets/image/Img3.jpg"
import Img4 from "../../assets/image/Img4.jpg"
import Img5 from "../../assets/image/Img5.jpg"
import Img6 from "../../assets/image/Img6.jpg"

const PlacesData = [
    {
        img: Img1,
        title: "Beach Bliss",
        location: "Goa",
        description: "Experience the beauty of Goa’s golden beaches, crystal-clear waters, and vibrant sunsets. Whether you seek relaxation, adventure, or beachside parties, Goa offers the perfect escape for every traveler.",
        price: 14999,
        type: "Beach Destination",
    },

    {
        img: Img2,
        title: "Nature's Paradise",
        location: "Kashmir",
        description: "Immerse yourself in the enchanting beauty of Kashmir, where snow-capped mountains, lush valleys, and pristine lakes create a landscape straight out of a dream.",
        price: 20999,
        type: "Cultural Heritage",
    },
    
    {
        img: Img3,
        title: "Land of Legends",
        location: "Gujrat",
        description: "From the towering Statue of Unity to vibrant festivals and historic temples, Gujarat is a land of rich traditions, diverse landscapes, and modern innovations.",
        price: 16999,
        type: "Adventure & Tranquility",
    },
    
    {
        img: Img4,
        title: "Sacred Shores",
        location: "Rameshwaram, TamilNadu",
        description: "A place of peace, pilgrimage, and natural beauty.",
        price: 21999,
        type: "Spiritual Destination",
    },
    
    {
        img: Img5,
        title: "Spiritual Epicenter",
        location: "Banaras, UP",
        description: "Discover the timeless charm of Banaras, where ancient temples, sacred ghats, and spiritual rituals offer a profound journey into India’s soul.",
        price: 10999,
        type: "Pilgrimage Site",
    },
    {
        img: Img6,
        title: "God's Own Country",
        location: "Kerala, India",
        description: "Experience the serene backwaters, lush landscapes, and vibrant culture of Kerala, a paradise for nature lovers and those seeking tranquility.",
        price: 17999,
        type: "Beach & Hill Destination",
    },
    
]

const Places = () => {
  return (
    <div className='bg-gray-50 py-10'>
      <div className='container'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Best Places to Visit</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
                PlacesData.map((value,index) => (
                    <PlacesCard key={index}
                    {...value} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Places
