import React from 'react'
import BlogCard from "../Blogs/BlogCard"
import Img1 from "../../assets/image/Img1.jpg"
import Img2 from "../../assets/image/Img2.jpg"
import Img6 from "../../assets/image/Img6.jpg"

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Best place to visit in Western States:",
    description: "Goa, located on India's western coast, is famous for its beautiful beaches, vibrant nightlife, rich history, and diverse culture. Its most popular attractions include: Beaches: North Goa is known for its lively beaches like Baga and Anjuna, while South Goa offers quieter spots like Palolem and Agonda. Historic Sites: Old Goa has stunning churches like the Basilica of Bom Jesus and Se Cathedral, while forts like Aguada offer panoramic views. Wildlife & Nature: The Dudhsagar Falls and wildlife sanctuaries like Salim Ali Bird Sanctuary are perfect for nature lovers. Culture: Goa's festivals like the Carnival and Shigmo showcase its vibrant culture. Cuisine: Goan food includes seafood dishes like Fish Curry Rice and the famous Feni drink. Nightlife: Goa is known for its exciting nightlife with beach shacks, bars, and clubs.",
    author: "Vikram Seth",
    date: "December, 2024"
  },
  {
    id: 1,
    image: Img2,
    title: "Best place to visit in Northern States",
    description: "Kashmir, often referred to as 'Paradise on Earth', is a stunning region located in the northern part of India, known for its breathtaking landscapes, snow-capped mountains, lush valleys, and rich cultural heritage. Here’s a brief overview of Kashmir tourism: Scenic Beauty: Kashmir is famous for its picturesque landscapes, including the famous Dal Lake in Srinagar, where visitors can enjoy a Shikara ride. The Gulmarg and Pahalgam valleys are also popular for their natural beauty, with lush meadows, dense forests, and tranquil surroundings. Adventure Sports: Gulmarg is a hub for winter sports like skiing and snowboarding, while Sonamarg offers trekking and camping opportunities in the summer. Cultural Heritage: Kashmir’s rich history includes landmarks such as the Shankaracharya Temple, Mughal Gardens like Nishat Bagh and Shalimar Bagh, and ancient mosques with unique architectural styles. Cuisine: Kashmiri cuisine, known for its spices, includes dishes like Rogan Josh, Gushtaba, and Kashmiri Pulao. The traditional Kahwa tea is also a must-try. Festivals: The Shikara Festival and Tulip Festival in Srinagar celebrate Kashmir's natural beauty and cultural vibrancy. Shopping: Kashmir is known for its Pashmina shawls, Kashmiri carpets, and Saffron, which are popular souvenirs for tourists.",
    author: "Khuswant Singh",
    date: "December, 2024"
  },
  {
    id: 1,
    image: Img6,
    title: "The 10 best place to visit in Western States",
    description: "Kerala, located on the southwestern coast of India, is renowned for its lush landscapes, tranquil backwaters, vibrant culture, and stunning beaches. Here's a brief overview of Kerala tourism: Backwaters: Kerala's backwaters, especially in Alleppey and Kumarakom, offer unique houseboat cruises through serene canals, offering a glimpse into the rural life and natural beauty. Beaches: Kerala has beautiful beaches like Varkala, Kovalam, and Bekal, perfect for relaxation, water sports, and sunset views. Hill Stations: Places like Munnar and Wayanad are famous for their tea plantations, cool climate, and scenic views of the Western Ghats. Wildlife: Kerala is home to wildlife sanctuaries such as Periyar Wildlife Sanctuary and Parambikulam Tiger Reserve, where visitors can enjoy safaris and spot animals like elephants and tigers. Culture & Festivals: Kerala’s cultural heritage includes Kathakali dance, Kalaripayattu martial arts, and festivals like Onam, which celebrates the harvest season with grand feasts and boat races. Cuisine: Kerala cuisine is famous for its seafood, Kerala Sadya (a traditional vegetarian feast), and Appam with stew. The state is also known for its Toddy (palm wine). Ayurveda: Kerala is the birthplace of Ayurveda, and tourists come here for wellness treatments that include massages, detox programs, and herbal therapies.",
    author: "Arundhati Roy",
    date: "December, 2024"
  },
]
const BlogsComp = () => {
  return (
    <div>
      <div data-aos="fade-up" className='container'>
        <h1
        className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'
        >Our latest Blogs
        </h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {
            BlogsData.map((value, index) => (
                <BlogCard key={index} { ...value} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsComp
