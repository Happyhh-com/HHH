import React from "react";

const DoctorCard = () => {
  return (
    <div className="flex flex-row items-center bg-[#E9F3FF] rounded-2xl p-4 w-[45vw] shadow-sm">
      <div className="flex-shrink-0">
        <img
          src="/assets/doctors/doctor.png"
          alt="Doctor"
          className="w-[8rem] h-[8rem] object-contain rounded-xl bg-white"
        />
      </div>

      <div className="ml-6 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Dr. Michael Thompson
          </h2>
          <p className="text-sm text-gray-700 leading-snug mt-1">
            Senior Advisor, Gynaecologic Oncology Services, Bengaluru Cluster &
            Head of Academics, Aster International Institute of Oncology
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-sm text-gray-500">Experience</p>
            <p className="text-base font-medium text-gray-800">6 Years</p>
          </div>
          <button className="px-5 py-2 border border-[#970000] text-[#000] font-semibold rounded-full hover:bg-[#970000] hover:text-white transition">
            Book an Appointment
          </button>
           <button className="px-5 py-2 border border-[#970000] text-[#000] font-semibold rounded-full hover:bg-[#970000] hover:text-white transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
