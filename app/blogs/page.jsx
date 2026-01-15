"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const imageUrl = "/assets/Tempblogs/temp_blog_pic.jpg";

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          "https://happyhealthyhospital-auh0b2dsctfab7bf.canadacentral-01.azurewebsites.net/Blog/getBlogsList",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );

        const data = await res.json();
        setBlogs(data?.Blog || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  const handleReadMore = (id) => {
    router.push(`/blog?blogId=${id}`);
  };

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
        <span className="text-[#2B7B37] cursor-pointer">Blogs</span>
      </div>

      <p className="font-bold mt-11 mb-5 ml-19 text-4xl text-[#203169]">
        Our Blogs
      </p>

      <div className="w-[70%] ml-19">
        Our hospital blog is your trusted source for health tips, expert
        insights, and the latest updates in medical care. Whether you're looking
        to understand a condition, explore treatment options, or learn how to
        stay healthy, our articles are written by experienced doctors and
        healthcare professionals to keep you informed and empowered.
      </div>

      {loading && (
        <div className="flex justify-center mt-10">
          <div className="animate-spin h-10 w-10 border-4 border-green-600 border-t-transparent rounded-full"></div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 mx-19 my-10">
        {blogs.map((blog) => (
          <div key={blog.Id} className="grid grid-cols-2 gap-4 mb-8">
            <div className="aspect-[268/212]">
              <img
                src={imageUrl}
                alt={blog.Title}
                className="rounded-sm h-full w-full object-cover"
              />
            </div>

            <div className="ml-5">
              <p className="text-[#14141491] mb-2">{blog.CreatedDate}</p>

              <p className="text-[#2B7B37] mb-2 font-bold">{blog.Title}</p>

              <p className="mb-2 line-clamp-3">{blog.BlogDescription}</p>

              <p
                className="text-[#AD2525] font-bold underline cursor-pointer"
                onClick={() => handleReadMore(blog.Id)}
              >
                Read More
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
