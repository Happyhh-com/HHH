"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AppointmentModal from "./AppointmentModal";
import { useModal } from "./ModalProvider";

const DoctorCard = ({route, name, overview, experience }) => {
  const router = useRouter();
  const { openModal } = useModal();

  const appointmentModal = () => {
    openModal(<AppointmentModal />);
  };

  return (
    <div className="flex flex-row items-center bg-[#E9F3FF] rounded-2xl p-4 w-[45vw] h-[30vh] shadow-sm">
      <div className="flex-shrink-0">
        <img
          src="/assets/doctors/doctor.png"
          alt="Doctor"
          className="w-[8rem] h-[12rem] object-contain rounded-xl bg-white"
        />
      </div>

      <div className="ml-6 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {name && `Dr. ${name}`}
          </h2>

          {overview && (
            <p className="text-sm text-gray-700 leading-snug mt-1">
              {overview}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-sm text-gray-500">Experience</p>
            <p className="text-base font-medium text-gray-800">{experience}</p>
          </div>

          <button
            className="text-white bg-[#AD2525] rounded-3xl w-[12vw] h-[5vh] font-semibold cursor-pointer"
            onClick={appointmentModal}
          >
            Book An Appointment
          </button>

          <button
            onClick={() =>
              router.push(`/doctors/doctorsdescription/${route}`)
            }
            className="w-[12vw] h-[5vh] border border-[#970000] text-black font-semibold rounded-full hover:bg-green-700 hover:text-white transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
