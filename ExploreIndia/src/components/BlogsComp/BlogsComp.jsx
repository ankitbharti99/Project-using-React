import React from 'react'
import BlogCard from "../Blogs/BlogCard"
import Img1 from "../../assets/image/Img1.jpg"
import Img2 from "../../assets/image/Img2.jpg"
import Img6 from "../../assets/image/Img6.jpg"

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "The 10 best places to visit in Northern States",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, aperiam. Quos asperiores adipisci, doloremque quidem necessitatibus quaerat consequatur ut saepe, et veniam libero earum iusto. Autem accusamus corporis iste adipisci? Tenetur et maiores, atque, quis ut asperiores voluptates inventore distinctio rerum, esse aliquam consequatur rem dolorum doloribus. Excepturi omnis veniam repellendus quaerat beatae nam harum est, blanditiis, esse nesciunt cupiditate! Quibusdam libero praesentium corporis dolore repudiandae ipsum impedit fugit ullam dolores, quisquam perspiciatis officia officiis nemo in nesciunt iure molestiae repellat eligendi totam ipsam tenetur sunt quis. Inventore, hic quisquam.",
    author: "John Doe",
    data: "November, 2024"
  },
  {
    id: 1,
    image: Img2,
    title: "The 10 best places to visit in Southern States",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, aperiam. Quos asperiores adipisci, doloremque quidem necessitatibus quaerat consequatur ut saepe, et veniam libero earum iusto. Autem accusamus corporis iste adipisci? Tenetur et maiores, atque, quis ut asperiores voluptates inventore distinctio rerum, esse aliquam consequatur rem dolorum doloribus. Excepturi omnis veniam repellendus quaerat beatae nam harum est, blanditiis, esse nesciunt cupiditate! Quibusdam libero praesentium corporis dolore repudiandae ipsum impedit fugit ullam dolores, quisquam perspiciatis officia officiis nemo in nesciunt iure molestiae repellat eligendi totam ipsam tenetur sunt quis. Inventore, hic quisquam.",
    author: "John Doe",
    data: "November, 2024"
  },
  {
    id: 1,
    image: Img6,
    title: "The 10 best places to visit in Western States",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, aperiam. Quos asperiores adipisci, doloremque quidem necessitatibus quaerat consequatur ut saepe, et veniam libero earum iusto. Autem accusamus corporis iste adipisci? Tenetur et maiores, atque, quis ut asperiores voluptates inventore distinctio rerum, esse aliquam consequatur rem dolorum doloribus. Excepturi omnis veniam repellendus quaerat beatae nam harum est, blanditiis, esse nesciunt cupiditate! Quibusdam libero praesentium corporis dolore repudiandae ipsum impedit fugit ullam dolores, quisquam perspiciatis officia officiis nemo in nesciunt iure molestiae repellat eligendi totam ipsam tenetur sunt quis. Inventore, hic quisquam.",
    author: "John Doe",
    data: "November, 2024"
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
        <div>
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
