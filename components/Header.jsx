"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AppointmentModal from "./AppointmentModal";
import { useModal } from "./ModalProvider";
import { usePanel } from "./PanelProvider";
import ServiceModal from "./ServiceModal";

const Header = () => {
  const router = useRouter();
  const { openModal } = useModal();
  const { openPanel } = usePanel();

  const appointmentModal = () => {
    openModal(<AppointmentModal />);
  };

  const handleNavClick = (path) => {
    if (path == "services") {
      openPanel(<ServiceModal onNavigate={() => router.push("/services")} />);
    } else {
      router.push(`/${path.toLowerCase()}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#E9F3FF] backdrop-blur-md h-[15vh] flex items-center px-[5vw] relative overflow-hidden">
      {/* LOGO */}
      <div
        className="flex items-center h-[15vh] max-h-[140px]"
        onClick={() => router.push("/")}
      >
        <img
          src="/assets/header/logo4.png"
          alt="Happy Healthy Hospital"
          className="h-[15vh] w-[15vw] object-contain"
        />
      </div>

      <div className="ml-auto flex items-center gap-10">
        <nav className="flex items-center gap-10">
          {["About", "Services", "Blogs", "Contact Us"].map((item) => (
            <h1
              key={item}
              onClick={() =>
                handleNavClick(item.replace(/\s/g, "").toLowerCase())
              }
              className="cursor-pointer hover:text-blue-600 transition font-bold text-lg"
            >
              {item}
            </h1>
          ))}
        </nav>

        <button
          className="text-white bg-[#AD2525] rounded-3xl py-3 px-6 font-semibold cursor-pointer whitespace-nowrap"
          onClick={appointmentModal}
        >
          Book An Appointment
        </button>
      </div>
    </header>
  );
};

export default Header;
