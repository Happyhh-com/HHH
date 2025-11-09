"use client";
import { useRouter } from "next/navigation";

export default function Blogs() {
  const router = useRouter();
  const blogs = [
    {
      "id": 1,
      "date": "September 1, 2023",
      "title": "Top 7 Foods to Prevent Urinary Tract Infections Naturally",
      "description": "Discover simple dietary choices that can help protect you from recurring UTIs.",
      "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
    },
    {
      "id": 2,
      "date": "October 15, 2023",
      "title": "How to Boost Immunity During Monsoon",
      "description": "Learn easy lifestyle tips to keep infections at bay this season.",
      "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
    },
    {
      "id": 3,
      "date": "September 1, 2023",
      "title": "Top 7 Foods to Prevent Urinary Tract Infections Naturally",
      "description": "Discover simple dietary choices that can help protect you from recurring UTIs.",
      "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
    }
  ]


  return (
    <>
      <div className="flex space-x-2 font-semibold text-gray-400 mt-11 ml-19">
        <span
          onClick={() => router.push("/")}
          className="cursor-pointer hover:underline"
        >
          Home
        </span>
        <span>/</span>
        <span className="text-[#2B7B37] transition cursor-pointer">
          Blogs
        </span>
      </div>

      <p className="font-bold mt-11 mb-5 ml-19 text-4xl text-[#203169]">Our Blogs</p>

      <div className="w-[70%] ml-19">
        Our hospital blog is your trusted source for health tips, expert insights, and the latest updates in medical care. Whether you're looking to understand a condition, explore treatment options, or learn how to stay healthy, our articles are written by experienced doctors and healthcare professionals to keep you informed and empowered.
      </div>

      <div className="grid grid-cols-2 gap-4 mx-19 my-10">

        {blogs.map((blog) => (
          <div key={blog.id} className="grid grid-cols-2 gap-2 mb-8">
            <div className="aspect-[268/212]">
              <img
                src={blog.imageUrl}
                alt={`Blog ${blog.id}`}
                className="rounded-sm h-full w-full object-cover"
              />
            </div>

            <div className="ml-5">
              <p className="text-[#14141491] mb-2">{blog.date}</p>
              <p className="text-[#2B7B37] mb-2 font-bold">{blog.title}</p>
              <p className="mb-2">{blog.description}</p>
              <p className="text-[#AD2525] font-bold underline cursor-pointer">Read More</p>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}
