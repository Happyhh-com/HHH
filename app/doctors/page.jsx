"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DoctorCard from "@/components/DoctorCard";

export default function Doctors() {
  const router = useRouter();

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
        <span className="text-green-600 transition cursor-pointer">
          doctors
        </span>
      </div>

      <p className="px-8 font-bold m-11 text-4xl text-blue-900">Our Doctors</p>
      <div className="flex justify-around items-center mb-[5vh]">
        <div className="gap-8 flex flex-col">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
        <div className="gap-8 flex flex-col">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </div>
    </>
  );
}
