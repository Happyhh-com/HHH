"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Blogs() {
  const router = useRouter();
  const [blogsList, setBlogsList] = useState([]);

  const dateFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  // const blogs = [
  //     {
  //         "id": 1,
  //         "date": "September 1, 2023",
  //         "title": "Top 7 Foods to Prevent Urinary Tract Infections Naturally",
  //         "description": "Discover simple dietary choices that can help protect you from recurring UTIs.Discover simple dietary choices that can help protect you from recurring UTIs.Discover simple dietary choices that can help protect you from recurring UTIs.Discover simple dietary choices that can help protect you from recurring UTIs.Discover simple dietary choices that can help protect you from recurring UTIs.Discover simple dietary choices that can help protect you from recurring UTIs.",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     },
  //     {
  //         "id": 2,
  //         "date": "October 15, 2023",
  //         "title": "How to Boost Immunity During Monsoon",
  //         "description": "",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     },
  //     {
  //         "id": 3,
  //         "date": "September 1, 2023",
  //         "title": "Top 7 Foods to Prevent Urinary Tract Infections Naturally",
  //         "description": "Discover simple dietary choices that can help protect you from recurring UTIs.",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     },
  //     {
  //         "id": 4,
  //         "date": "October 15, 2023",
  //         "title": "How to Boost Immunity During Monsoon",
  //         "description": "Learn easy lifestyle tips to keep infections at bay this season.",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     }, {
  //         "id": 5,
  //         "date": "October 15, 2023",
  //         "title": "How to Boost Immunity During Monsoon",
  //         "description": "Learn easy lifestyle tips to keep infections at bay this season.",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     }, {
  //         "id": 6,
  //         "date": "October 15, 2023",
  //         "title": "How to Boost Immunity During Monsoon",
  //         "description": "Learn easy lifestyle tips to keep infections at bay this season.",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     }, {
  //         "id": 7,
  //         "date": "October 15, 2023",
  //         "title": "How to Boost Immunity During Monsoon",
  //         "description": "Learn easy lifestyle tips to keep infections at bay this season.",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     }, {
  //         "id": 8,
  //         "date": "October 15, 2023",
  //         "title": "How to Boost Immunity During Monsoon",
  //         "description": "Learn easy lifestyle tips to keep infections at bay this season.",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     }, {
  //         "id": 9,
  //         "date": "October 15, 2023",
  //         "title": "How to Boost Immunity During Monsoon",
  //         "description": "Learn easy lifestyle tips to keep infections at bay this season.",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     }, {
  //         "id": 10,
  //         "date": "October 15, 2023",
  //         "title": "How to Boost Immunity During Monsoon",
  //         "description": "Learn easy lifestyle tips to keep infections at bay this season.earn easy lifestyle tips to keep infections at bay this season.",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     }, {
  //         "id": 11,
  //         "date": "October 15, 2023",
  //         "title": "How to Boost Immunity During Monsoon",
  //         "description": "Learn easy lifestyle tips to keep infections at bay this season.",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     }, {
  //         "id": 12,
  //         "date": "October 15, 2023",
  //         "title": "How to Boost Immunity During Monsoon",
  //         "description": "Learn easy lifestyle tips to keep infections at bay this season.",
  //         "imageUrl": "/assets/Temp blogs/temp_blog_pic.jpg"
  //     }
  // ]

  const test = {
    Id: 3,
    Title: "Updated to check through api Blog Title",
    P1: "test intro paragraph",
    P2: "Intro paragraph 2",
    H1: "Updated Heading 1",
    H1P1: "Updated content",
    H1P2: "H1 paragraph 2",
    H1P3: "H1 paragraph 3",
    H1P4: "H1 paragraph 4",
    H2: "Heading 2",
    H2P1: "H2 paragraph 1",
    H2P2: "H2 paragraph 2",
    H2P3: "H2 paragraph 3",
    H2P4: "H2 paragraph 4",
    H3: "Heading 3",
    H3P1: "H3 paragraph 1",
    H3P2: "H3 paragraph 2",
    H3P3: "H3 paragraph 3",
    H3P4: "H3 paragraph 4",
    H4: "Heading 4",
    H4P1: "H4 paragraph 1",
    H4B1: "Updated bullet 1",
    H4B2: "H4 bullet 2",
    H4B3: "H4 bullet 3",
    H4B4: "H4 bullet 4",
    H4B5: "H4 bullet 5",
    H4B6: "H4 bullet 6",
    H4B7: "H4 bullet 7",
    H4B8: "H4 bullet 8",
    H4B9: "H4 bullet 9",
    H4B10: "H4 bullet 10",
    H4P2: "H4 paragraph 2",
    H5: "Heading 5",
    H5P1: "H5 paragraph 1",
    H5P2: "H5 paragraph 2",
    H5P3: "H5 paragraph 3",
    H5P4: "H5 paragraph 4",
    H6: "Heading 6",
    H6P1: "H6 paragraph 1",
    H6P2: "H6 paragraph 2",
    H6P3: "H6 paragraph 3",
    H6P4: "H6 paragraph 4",
    H7: "Heading 7",
    H7P1: "H7 paragraph 1",
    H7P2: "H7 paragraph 2",
    H7P3: "H7 paragraph 3",
    H7P4: "H7 paragraph 4",
    H8: "Heading 8",
    H8P1: "H8 paragraph 1",
    H8B1: "H8 bullet 1",
    H8B2: "H8 bullet 2",
    H8B3: "H8 bullet 3",
    H8B4: "H8 bullet 4",
    H8B5: "H8 bullet 5",
    H8B6: "H8 bullet 6",
    H8B7: "H8 bullet 7",
    H8B8: "H8 bullet 8",
    H8B9: "H8 bullet 9",
    H8B10: "H8 bullet 10",
    H8P2: "H8 paragraph 2",
    H9: "Heading 9",
    H9P1: "H9 paragraph 1",
    H9P2: "H9 paragraph 2",
    H9P3: "H9 paragraph 3",
    H9P4: "H9 paragraph 4",
    H10: "Heading 10",
    H10P1: "H10 paragraph 1",
    H10P2: "H10 paragraph 2",
    H10P3: "H10 paragraph 3",
    H10P4: "H10 paragraph 4",
    H11: "Heading 11",
    H11P1: "H11 paragraph 1",
    H11P2: "H11 paragraph 2",
    H11P3: "H11 paragraph 3",
    H11P4: "H11 paragraph 4",
    H12: "Heading 12",
    H12P1: "H12 paragraph 1",
    H12B1: "H12 bullet 1",
    H12B2: "H12 bullet 2",
    H12B3: "H12 bullet 3",
    H12B4: "H12 bullet 4",
    H12B5: "H12 bullet 5",
    H12B6: "H12 bullet 6",
    H12B7: "H12 bullet 7",
    H12B8: "H12 bullet 8",
    H12B9: "H12 bullet 9",
    H12B10: "H12 bullet 10",
    H12P2: "H12 paragraph 2",
    H13: "Heading 13",
    H13P1: "H13 paragraph 1",
    H13P2: "H13 paragraph 2",
    H13P3: "H13 paragraph 3",
    H13P4: "H13 paragraph 4",
    H14: "Heading 14",
    H14P1: "H14 paragraph 1",
    H14P2: "H14 paragraph 2",
    H14P3: "H14 paragraph 3",
    H14P4: "H14 paragraph 4",
    H15: "Heading 15",
    H15P1: "H15 paragraph 1",
    H15P2: "H15 paragraph 2",
    H15P3: "H15 paragraph 3",
    H15P4: "H15 paragraph 4",
    H16: "Heading 16",
    H16P1: "H16 paragraph 1",
    H16B1: "H16 bullet 1",
    H16B2: "H16 bullet 2",
    H16B3: "H16 bullet 3",
    H16B4: "H16 bullet 4",
    H16B5: "H16 bullet 5",
    H16B6: "H16 bullet 6",
    H16B7: "H16 bullet 7",
    H16B8: "H16 bullet 8",
    H16B9: "H16 bullet 9",
    H16B10: "H16 bullet 10",
    H16P2: "H16 paragraph 2",
    Final_Overview: "Updated summary",
    FP1: "Final paragraph 1",
    FB1: "Final bullet 1",
    FB2: "Final bullet 2",
    FB3: "Final bullet 3",
    FB4: "Final bullet 4",
    FB5: "Final bullet 5",
    FB6: "Final bullet 6",
    FB7: "Final bullet 7",
    FB8: "Final bullet 8",
    FB9: "Final bullet 9",
    FB10: "Final bullet 10",
    FP2: "Final paragraph 2",
  };

  useEffect(async function fetchBlogs() {
    const res = await fetch(
      "https://happyhealthyhospital-auh0b2dsctfab7bf.canadacentral-01.azurewebsites.net/Blog/getBlogsList",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}), // send empty object if API expects body
      }
    );
    const data = await res.json();
    setBlogsList(data?.Blogs || []);
  }, []);
  const handleEdit = (id) => {
    router.push(`/admin/blog?blogId=${id}`);
  };

  const handleCreate = () => {
    router.push("/admin/blog");
  };

  return (
    <>
      <div className="px-8 flex space-x-2 font-semibold text-gray-400 mt-11 ml-11">
        <span
          onClick={() => router.push("/")}
          className="cursor-pointer hover:underline"
        >
          Home
        </span>
        <span>/</span>
        <span className="text-[#2B7B37] transition cursor-pointer">
          Admin Blogs
        </span>
      </div>

      <div className="px-8 m-11 flex justify-between items-center">
        <span className="font-bold text-4xl text-[#203169]">Admin Blogs</span>
        <span
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() => handleCreate()}
        >
          Create Blog
        </span>
      </div>

      <div className="overflow-x-auto my-10 mx-19">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-[#2B7B37] text-white">
            <tr>
              <th className="py-3 px-4 text-left w-[5%]">Sl No</th>
              <th className="py-3 px-4 text-left w-[10%]">Date</th>
              <th className="py-3 px-4 text-left w-[30%]">Title</th>
              <th className="py-3 px-4 text-left w-[50%]">Description</th>
              <th className="py-3 px-4 text-left w-[5%]">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogsList.map((s, index) => {
              const formattedDate = new Date(s.date).toLocaleString(
                "en-IN",
                dateFormatOptions
              );
              return (
                <tr
                  key={s.id}
                  className="border-b hover:bg-green-50 transition-colors"
                >
                  <td className="py-3 px-4 text-left w-[20%]">{index + 1}</td>
                  <td className="py-3 px-4 text-left w-[20%]">
                    {s.CreatedDate}
                  </td>
                  <td className="py-3 px-4 text-left w-[20%]">{s.Title}</td>
                  <td className="py-3 px-4 text-left w-[20%]">{s.P1}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(s.Id)}
                      className="text-blue-600 hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
