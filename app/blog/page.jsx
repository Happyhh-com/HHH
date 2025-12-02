"use client";

import { useState, useEffect, use } from "react";

export default function Blog(props) {

    const searchParams = use(props.searchParams);
    const blogId = searchParams?.blogId;

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);

    const entityProperties = [
        "Id",
        // "Image",
        "Title",
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
        "FP2"
    ];

    useEffect(() => {
        async function fetchBlog() {
            const res = await fetch(`https://localhost:727/Blog/get_BlogByID?Id=${6}`);
            const data = await res.json();
            console.log(data);
            

            const filled = entityProperties.reduce((acc, key) => {
                acc[key] = data[0][key] ?? "";
                return acc;
            }, {});

            setFormData(filled);
            setLoading(false);
        }

        fetchBlog();
    }, [blogId]);

    if (loading)
        return (
            <div className="flex flex-col items-center justify-center py-16 text-gray-600">
                <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full mb-4"></div>
                <p className="text-lg font-medium">Loading...</p>
            </div>
        );

    return (
        <>
            {formData["Title"] && (<p className="mx-19 font-bold text-2xl mt-10 text-green-500 mb-3">{formData["Title"]}</p>)}
            {formData["P1"] && (<p className="mx-19">{formData["P1"]}</p>)}
            {formData["P2"] && (<p className="mx-19">{formData["P2"]}</p>)}

            {formData["H1"] && (<p className="mx-19 font-bold mt-5">{formData["H1"]}</p>)}
            {formData["H1P1"] && (<p className="mx-19">{formData["H1P1"]}</p>)}
            {formData["H1P2"] && (<p className="mx-19">{formData["H1P2"]}</p>)}
            {formData["H1P3"] && (<p className="mx-19">{formData["H1P3"]}</p>)}
            {formData["H1P4"] && (<p className="mx-19">{formData["H1P4"]}</p>)}

            {formData["H2"] && (<p className="mx-19 font-bold mt-5">{formData["H2"]}</p>)}
            {formData["H2P1"] && (<p className="mx-19">{formData["H2P1"]}</p>)}
            {formData["H2P2"] && (<p className="mx-19">{formData["H2P2"]}</p>)}
            {formData["H2P3"] && (<p className="mx-19">{formData["H2P3"]}</p>)}
            {formData["H2P4"] && (<p className="mx-19">{formData["H2P4"]}</p>)}

            {formData["H3"] && (<p className="mx-19 font-bold mt-5">{formData["H3"]}</p>)}
            {formData["H3P1"] && (<p className="mx-19">{formData["H3P1"]}</p>)}
            {formData["H3P2"] && (<p className="mx-19">{formData["H3P2"]}</p>)}
            {formData["H3P3"] && (<p className="mx-19">{formData["H3P3"]}</p>)}
            {formData["H3P4"] && (<p className="mx-19">{formData["H3P4"]}</p>)}

            {formData["H4"] && (<p className="mx-19 font-bold mt-5">{formData["H4"]}</p>)}
            {formData["H4P1"] && (<p className="mx-19">{formData["H4P1"]}</p>)}
            <ul className="mx-19 list-disc pl-5">
                {formData["H4B1"] && (<li>{formData["H4B1"]}</li>)}
                {formData["H4B2"] && (<li>{formData["H4B2"]}</li>)}
                {formData["H4B3"] && (<li>{formData["H4B3"]}</li>)}
                {formData["H4B4"] && (<li>{formData["H4B4"]}</li>)}
                {formData["H4B5"] && (<li>{formData["H4B5"]}</li>)}
                {formData["H4B6"] && (<li>{formData["H4B6"]}</li>)}
                {formData["H4B7"] && (<li>{formData["H4B7"]}</li>)}
                {formData["H4B8"] && (<li>{formData["H4B8"]}</li>)}
                {formData["H4B9"] && (<li>{formData["H4B9"]}</li>)}
                {formData["H4B10"] && (<li>{formData["H4B10"]}</li>)}
            </ul>
            {formData["H4P2"] && (<p className="mx-19">{formData["H4P2"]}</p>)}

            {formData["H5"] && (<p className="mx-19 font-bold mt-5">{formData["H5"]}</p>)}
            {formData["H5P1"] && (<p className="mx-19">{formData["H5P1"]}</p>)}
            {formData["H5P2"] && (<p className="mx-19">{formData["H5P2"]}</p>)}
            {formData["H5P3"] && (<p className="mx-19">{formData["H5P3"]}</p>)}
            {formData["H5P4"] && (<p className="mx-19">{formData["H5P4"]}</p>)}

            {formData["H6"] && (<p className="mx-19 font-bold mt-5">{formData["H6"]}</p>)}
            {formData["H6P1"] && (<p className="mx-19">{formData["H6P1"]}</p>)}
            {formData["H6P2"] && (<p className="mx-19">{formData["H6P2"]}</p>)}
            {formData["H6P3"] && (<p className="mx-19">{formData["H6P3"]}</p>)}
            {formData["H6P4"] && (<p className="mx-19">{formData["H6P4"]}</p>)}

            {formData["H7"] && (<p className="mx-19 font-bold mt-5">{formData["H7"]}</p>)}
            {formData["H7P1"] && (<p className="mx-19">{formData["H7P1"]}</p>)}
            {formData["H7P2"] && (<p className="mx-19">{formData["H7P2"]}</p>)}
            {formData["H7P3"] && (<p className="mx-19">{formData["H7P3"]}</p>)}
            {formData["H7P4"] && (<p className="mx-19">{formData["H7P4"]}</p>)}

            {formData["H8"] && (<p className="mx-19 font-bold mt-5">{formData["H8"]}</p>)}
            {formData["H8P1"] && (<p className="mx-19">{formData["H8P1"]}</p>)}
            <ul className="mx-19 list-disc pl-5">
                {formData["H8B1"] && (<li>{formData["H8B1"]}</li>)}
                {formData["H8B2"] && (<li>{formData["H8B2"]}</li>)}
                {formData["H8B3"] && (<li>{formData["H8B3"]}</li>)}
                {formData["H8B4"] && (<li>{formData["H8B4"]}</li>)}
                {formData["H8B5"] && (<li>{formData["H8B5"]}</li>)}
                {formData["H8B6"] && (<li>{formData["H8B6"]}</li>)}
                {formData["H8B7"] && (<li>{formData["H8B7"]}</li>)}
                {formData["H8B8"] && (<li>{formData["H8B8"]}</li>)}
                {formData["H8B9"] && (<li>{formData["H8B9"]}</li>)}
                {formData["H8B10"] && (<li>{formData["H8B10"]}</li>)}
            </ul>
            {formData["H8P2"] && (<p className="mx-19">{formData["H8P2"]}</p>)}

            {formData["H9"] && (<p className="mx-19 font-bold mt-5">{formData["H9"]}</p>)}
            {formData["H9P1"] && (<p className="mx-19">{formData["H9P1"]}</p>)}
            {formData["H9P2"] && (<p className="mx-19">{formData["H9P2"]}</p>)}
            {formData["H9P3"] && (<p className="mx-19">{formData["H9P3"]}</p>)}
            {formData["H9P4"] && (<p className="mx-19">{formData["H9P4"]}</p>)}

            {formData["H10"] && (<p className="mx-19 font-bold mt-5">{formData["H10"]}</p>)}
            {formData["H10P1"] && (<p className="mx-19">{formData["H10P1"]}</p>)}
            {formData["H10P2"] && (<p className="mx-19">{formData["H10P2"]}</p>)}
            {formData["H10P3"] && (<p className="mx-19">{formData["H10P3"]}</p>)}
            {formData["H10P4"] && (<p className="mx-19">{formData["H10P4"]}</p>)}

            {formData["H11"] && (<p className="mx-19 font-bold mt-5">{formData["H11"]}</p>)}
            {formData["H11P1"] && (<p className="mx-19">{formData["H11P1"]}</p>)}
            {formData["H11P2"] && (<p className="mx-19">{formData["H11P2"]}</p>)}
            {formData["H11P3"] && (<p className="mx-19">{formData["H11P3"]}</p>)}
            {formData["H11P4"] && (<p className="mx-19">{formData["H11P4"]}</p>)}

            {formData["H12"] && (<p className="mx-19 font-bold mt-5">{formData["H12"]}</p>)}
            {formData["H12P1"] && (<p className="mx-19">{formData["H12P1"]}</p>)}
            <ul className="mx-19 list-disc pl-5">
                {formData["H12B1"] && (<li>{formData["H12B1"]}</li>)}
                {formData["H12B2"] && (<li>{formData["H12B2"]}</li>)}
                {formData["H12B3"] && (<li>{formData["H12B3"]}</li>)}
                {formData["H12B4"] && (<li>{formData["H12B4"]}</li>)}
                {formData["H12B5"] && (<li>{formData["H12B5"]}</li>)}
                {formData["H12B6"] && (<li>{formData["H12B6"]}</li>)}
                {formData["H12B7"] && (<li>{formData["H12B7"]}</li>)}
                {formData["H12B8"] && (<li>{formData["H12B8"]}</li>)}
                {formData["H12B9"] && (<li>{formData["H12B9"]}</li>)}
                {formData["H12B10"] && (<li>{formData["H12B10"]}</li>)}
            </ul>
            {formData["H12P2"] && (<p className="mx-19">{formData["H12P2"]}</p>)}

            {formData["H13"] && (<p className="mx-19 font-bold mt-5">{formData["H13"]}</p>)}
            {formData["H13P1"] && (<p className="mx-19">{formData["H13P1"]}</p>)}
            {formData["H13P2"] && (<p className="mx-19">{formData["H13P2"]}</p>)}
            {formData["H13P3"] && (<p className="mx-19">{formData["H13P3"]}</p>)}
            {formData["H13P4"] && (<p className="mx-19">{formData["H13P4"]}</p>)}

            {formData["H14"] && (<p className="mx-19 font-bold mt-5">{formData["H14"]}</p>)}

            {formData["H14P1"] && (<p className="mx-19">{formData["H14P1"]}</p>)}
            {formData["H14P2"] && (<p className="mx-19">{formData["H14P2"]}</p>)}
            {formData["H14P3"] && (<p className="mx-19">{formData["H14P3"]}</p>)}
            {formData["H14P4"] && (<p className="mx-19">{formData["H14P4"]}</p>)}

            {formData["H15"] && (<p className="mx-19 font-bold mt-5">{formData["H15"]}</p>)}
            {formData["H15P1"] && (<p className="mx-19">{formData["H15P1"]}</p>)}
            {formData["H15P2"] && (<p className="mx-19">{formData["H15P2"]}</p>)}
            {formData["H15P3"] && (<p className="mx-19">{formData["H15P3"]}</p>)}
            {formData["H15P4"] && (<p className="mx-19">{formData["H15P4"]}</p>)}

            {formData["H16"] && (<p className="mx-19 font-bold mt-5">{formData["H16"]}</p>)}
            {formData["H16P1"] && (<p className="mx-19">{formData["H16P1"]}</p>)}
            <ul className="mx-19 list-disc pl-5">
                {formData["H16B1"] && (<li>{formData["H16B1"]}</li>)}
                {formData["H16B2"] && (<li>{formData["H16B2"]}</li>)}
                {formData["H16B3"] && (<li>{formData["H16B3"]}</li>)}
                {formData["H16B4"] && (<li>{formData["H16B4"]}</li>)}
                {formData["H16B5"] && (<li>{formData["H16B5"]}</li>)}
                {formData["H16B6"] && (<li>{formData["H16B6"]}</li>)}
                {formData["H16B7"] && (<li>{formData["H16B7"]}</li>)}
                {formData["H16B8"] && (<li>{formData["H16B8"]}</li>)}
                {formData["H16B9"] && (<li>{formData["H16B9"]}</li>)}
                {formData["H16B10"] && (<li>{formData["H16B10"]}</li>)}
            </ul>
            {formData["H16P2"] && (<p className="mx-19">{formData["H16P2"]}</p>)}

            {formData["Final_Overview"] && (<p className="mx-19 mt-5 font-bold">{formData["Final_Overview"]}</p>)}
            {formData["FP1"] && (<p className="mx-19">{formData["FP1"]}</p>)}
            <ul className="mx-19 list-disc pl-5">
                {formData["FB1"] && (<li>{formData["FB1"]}</li>)}
                {formData["FB2"] && (<li>{formData["FB2"]}</li>)}
                {formData["FB3"] && (<li>{formData["FB3"]}</li>)}
                {formData["FB4"] && (<li>{formData["FB4"]}</li>)}
                {formData["FB5"] && (<li>{formData["FB5"]}</li>)}
                {formData["FB6"] && (<li>{formData["FB6"]}</li>)}
                {formData["FB7"] && (<li>{formData["FB7"]}</li>)}
                {formData["FB8"] && (<li>{formData["FB8"]}</li>)}
                {formData["FB9"] && (<li>{formData["FB9"]}</li>)}
                {formData["FB10"] && (<li>{formData["FB10"]}</li>)}
            </ul>
            {formData["FP2"] && (<p className="mx-19">{formData["FP2"]}</p>)}

            <div className="mb-10"></div>
        </>
    )
}