"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ButtonWithModal from "./Button";

const Header = () => {
  const router = useRouter();

  const handleNavClick = (path) => {
    router.push(`/${path.toLowerCase()}`);
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
      <div className="flex justify-start items-center gap-8 w-[55%]">
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
         <ButtonWithModal
            className="bg-[#AD2525] hover:bg-green-700 w-[12vw] h-[5vh] rounded-full text-sm font-bold"
            buttonText="Book An Appointment"
          />
      </div>
    </header>
  );
};

export default Header;
