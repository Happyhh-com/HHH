"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AppointmentModal from "./AppointmentModal"
import { useModal } from "./ModalProvider";
import { usePanel } from "./PanelProvider";
import ServiceModal from "./ServiceModal";

const Header = () => {
  const router = useRouter();
  const { openModal } = useModal();
  const { openPanel } = usePanel();

  const appointmentModal = () => {
    openModal(<AppointmentModal />);
  }

  const handleNavClick = (path) => {


    if (path == "services") {
      openPanel(<ServiceModal onNavigate={() => router.push("/services")}/>)
    } else {
      router.push(`/${path.toLowerCase()}`);
    }

  };

  return (
    <header className="sticky top-0 z-50 bg-[#E9F3FFC7] backdrop-blur-md h-[15vh] flex items-center justify-between px-[5vw] text-gray-700">
      <section
        className="bg-cover bg-center w-[4vw] h-full flex items-center"
        style={{
          backgroundImage: "url('/assets/header/logo.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        onClick={() => router.push("/")}
      ></section>
      <div className="flex justify-between items-center gap-8 w-[55%]">
        <nav className="flex justify-start items-center gap-15 ">
          {["About", "Services", "Blogs", "Contact Us"].map((item) => (
            <h1
              key={item}
              onClick={() =>
                handleNavClick(item.replace(/\s/g, "").toLowerCase())
              }
              className="cursor-pointer hover:text-blue-600 transition font-bold text-xl"
            >
              {item}
            </h1>
          ))}
        </nav>
        <button
          className="text-white bg-[#AD2525] rounded-3xl py-3 px-5 font-semibold cursor-pointer"
          onClick={() => appointmentModal()}>
          Book An Appointment
        </button>
      </div>
    </header>
  );
};

export default Header;
