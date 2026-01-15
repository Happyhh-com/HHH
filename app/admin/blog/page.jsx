"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";

export default function Blog(props) {
  const router = useRouter();
  const searchParams = use(props.searchParams);
  const blogId = searchParams?.blogId;

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  const entityProperties = [
    "Id",
    // "Image",
    "Title",
    "BlogDescription",
    "P1",
    "P2",
    "H1",
    "H1P1",
    "H1P2",
    "H1P3",
    "H1P4",
    "H2",
    "H2P1",
    "H2P2",
    "H2P3",
    "H2P4",
    "H3",
    "H3P1",
    "H3P2",
    "H3P3",
    "H3P4",
    "H4",
    "H4P1",
    "H4B1",
    "H4B2",
    "H4B3",
    "H4B4",
    "H4B5",
    "H4B6",
    "H4B7",
    "H4B8",
    "H4B9",
    "H4B10",
    "H4P2",
    "H5",
    "H5P1",
    "H5P2",
    "H5P3",
    "H5P4",
    "H6",
    "H6P1",
    "H6P2",
    "H6P3",
    "H6P4",
    "H7",
    "H7P1",
    "H7P2",
    "H7P3",
    "H7P4",
    "H8",
    "H8P1",
    "H8B1",
    "H8B2",
    "H8B3",
    "H8B4",
    "H8B5",
    "H8B6",
    "H8B7",
    "H8B8",
    "H8B9",
    "H8B10",
    "H8P2",
    "H9",
    "H9P1",
    "H9P2",
    "H9P3",
    "H9P4",
    "H10",
    "H10P1",
    "H10P2",
    "H10P3",
    "H10P4",
    "H11",
    "H11P1",
    "H11P2",
    "H11P3",
    "H11P4",
    "H12",
    "H12P1",
    "H12B1",
    "H12B2",
    "H12B3",
    "H12B4",
    "H12B5",
    "H12B6",
    "H12B7",
    "H12B8",
    "H12B9",
    "H12B10",
    "H12P2",
    "H13",
    "H13P1",
    "H13P2",
    "H13P3",
    "H13P4",
    "H14",
    "H14P1",
    "H14P2",
    "H14P3",
    "H14P4",
    "H15",
    "H15P1",
    "H15P2",
    "H15P3",
    "H15P4",
    "H16",
    "H16P1",
    "H16B1",
    "H16B2",
    "H16B3",
    "H16B4",
    "H16B5",
    "H16B6",
    "H16B7",
    "H16B8",
    "H16B9",
    "H16B10",
    "H16P2",
    "Final_Overview",
    "FP1",
    "FB1",
    "FB2",
    "FB3",
    "FB4",
    "FB5",
    "FB6",
    "FB7",
    "FB8",
    "FB9",
    "FB10",
    "FP2",
  ];

  useEffect(() => {
    async function fetchBlog() {
      if (!blogId) {
        const emptyData = entityProperties.reduce((acc, key) => {
          acc[key] = "";
          return acc;
        }, {});
        setFormData(emptyData);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://happyhealthyhospital-auh0b2dsctfab7bf.canadacentral-01.azurewebsites.net/Blog/getBlogByID?Id=${blogId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log("data", data?.Blog?.[0]);

        const blog = data?.Blog?.[0] || {};

        const filled = entityProperties.reduce((acc, key) => {
          acc[key] = blog[key] ?? "";
          return acc;
        }, {});

        setFormData(filled);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load blog:", err);
      }
    }

    fetchBlog();
  }, [blogId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formObj = {};

    // Convert form fields (HTML inputs) into an object

    const fd = new FormData(e.target);
    fd.forEach((value, key) => {
      if (!blogId && key !== "Id") {
        formObj[key] = value;
      }
    });

    // Include any missing values from formData state
    Object.keys(formData).forEach((key) => {
      if (!blogId && key === "Id") return;

      if (!formObj.hasOwnProperty(key)) {
        formObj[key] = formData[key] ?? "";
      }
    });

    try {
      const url = blogId
        ? `https://happyhealthyhospital-auh0b2dsctfab7bf.canadacentral-01.azurewebsites.net/Blog/putBlogDetails?id=${blogId}`
        : "https://happyhealthyhospital-auh0b2dsctfab7bf.canadacentral-01.azurewebsites.net/Blog/postBlogDetails";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObj),
      });
    } catch (err) {
      console.error("Failed to load blog:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-600">
        <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full mb-4"></div>
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );

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
          Admin Blog
        </span>
      </div>

      <p className="px-8 font-bold m-11 text-4xl text-[#203169]">
        {blogId ? "Update Blog" : "Create Blog"}
      </p>

      <div className="max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <div className="flex flex-col">
            <label className="font-semibold block">Image</label>
            <input
              type="file"
              // name="Image"
              accept="image/*"
              className="border border-gray-300 rounded-xl bg-white p-2"
            />
          </div> */}

          {entityProperties
            .filter((prop) => prop !== "Id")
            .map((prop) => (
              <div key={prop} className="flex flex-col">
                <label className="font-semibold block capitalize">{prop}</label>
                <textarea
                  name={prop}
                  className="border border-gray-300 rounded-xl bg-white p-2"
                  value={formData[prop] || ""}
                  onChange={handleChange}
                />
              </div>
            ))}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
