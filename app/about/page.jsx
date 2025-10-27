'use client'
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  const [isVisionActive, setVisionActive] = useState(true);

  return (
    <>
      <div className="px-8 flex space-x-2 font-semibold text-gray-400 mt-11 ml-11"> 
        <span onClick={() => router.push('/')} className="cursor-pointer hover:underline">Home</span>
        <span>/</span>
        <span className="text-green-600 transition cursor-pointer">About us</span>
      </div>

      <p className="px-8 font-bold m-11 text-4xl text-blue-900">About us</p>
      <p className="px-8 m-11">Welcome to Happy Health Hospital, where your well-being is our top priority. Our state-of-the-art facility offers a wide range of services, from emergency care to specialized treatments. With a team of dedicated professionals, we ensure that every patient receives personalized attention and compassionate care. Our modern amenities and advanced technology create a healing environment that promotes recovery and wellness. Whether you need routine check-ups or complex surgeries, Harmony Health Hospital is here to support you every step of the way.</p>

      <div className="p-10 bg-green-50 font-medium">
        <span onClick={() => setVisionActive(true)} className={`ml-11 inline-flex items-center justify-center h-10 px-3 cursor-pointer transition ${isVisionActive ? 'text-white bg-green-700' : 'hover:underline'}`}>Vision</span>
        <span onClick={() => setVisionActive(false)} className={`ml-8 inline-flex items-center justify-center h-10 px-3 cursor-pointer transition ${!isVisionActive ? 'text-white bg-green-700' : 'hover:underline'}`}>Mission</span>
      </div>

      <p className="px-8 mx-11 my-4">At HealthFirst, we envision a world where every individual has access to comprehensive healthcare services tailored to their unique needs. Our mission is to empower communities through innovative solutions that promote wellness and preventive care. We believe in a future where technology bridges the gap between patients and providers, ensuring timely and effective treatment.</p>
      <p className="px-8 mx-11 mb-11">By fostering collaboration among healthcare professionals, we aim to create a supportive environment that prioritizes mental and physical health. Together, we can transform healthcare into a more inclusive and compassionate system.</p>

      <div className="p-8 m-11 flex gap-6">
        <div className="w-1/2 aspect-[630/500] overflow-hidden">
          <Image
            src="/assets/about/73929d7687768d7017ecada02ff34e1faa2397f2.jpg"
            className="rounded-xl h-full w-full object-cover"
            width={630}
            height={500}
            alt="Reception image"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-6">
          <div className="aspect-[630/240] overflow-hidden">
            <Image
              src="/assets/about/c675209f4a910cb1dad256c06365dc5c57b1f98b.jpg"
              className="rounded-xl h-full w-full object-cover"
              width={630}
              height={240}
              alt="Lab image side"
            />
          </div>
          <div className="aspect-[630/240] overflow-hidden">
            <Image
              src="/assets/about/fe76fa8c01c3d1fe73cc39644ed0a5c66b40fe5b.jpg"
              className="rounded-xl h-full w-full object-cover"
              width={630}
              height={240}
              alt="Lab image front"
          />
          </div>
        </div>
      </div>

      <div className="py-12">
        <Image
          src="/assets/about/bn76fa8c01c3d1fe54cc39644ed0a5c66b40fe5r.jpg"
          width={1772.5}
          height={866}
          alt="Road map"
        />
      </div>
    
    </>
    
  );
}
