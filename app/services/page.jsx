'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Services() {
  const router = useRouter();
  const [active, setActive] = useState("Laser Treatments");

  return (
    <>
      <div className="px-8 flex space-x-2 font-semibold text-gray-400 mt-11 ml-11">
        <span onClick={() => router.push('/')} className="cursor-pointer hover:underline">Home</span>
        <span>/</span>
        <span className="text-[#2B7B37] transition cursor-pointer">Services</span>
      </div>

      <p className="px-8 font-bold m-11 text-4xl text-[#203169]">Services</p>

      <div className="flex mx-25">
        <div className="w-[47%] overflow-hidden">
          <img
            src="/assets/services/Services.png"
            width={568}
            height={396}
            alt="Happy Health Hospital"
            className="rounded-4xl h-full w-full object-cover"
          />
        </div>

        <div className="w-[51%] ml-12">
          <p className="font-bold text-2xl text-[#2B7B37]">Trusted care, tailored for you. Explore our most sought-after treatments and specialties.</p>
          <p className="my-6 text-lg">At Happy Healthy Hospital, we pride ourselves on delivering world-class medical services with a compassionate touch. Our hospital is equipped with cutting-edge technology and staffed by experienced doctors, skilled nurses, and dedicated support teams who put patient care above all else. From preventive health checkups to advanced surgical procedures, we offer a comprehensive range of services designed to meet every healthcare need.</p>
          <p className="my-6 text-lg">Whether it’s cardiology, orthopedics, neurology, pediatrics, or emergency care, our departments are known for clinical excellence and personalized attention. Each patient is treated with respect, dignity, and a deep commitment to their well-being. Our state-of-the-art diagnostic labs and fully equipped operation theaters ensure timely and accurate treatment, while our post-care support helps patients recover comfortably and confidently.</p>
        </div>
      </div>

      <p className="mx-25 my-6 text-lg">What sets us apart is not just our medical expertise, but the warmth and dedication with which we serve. We believe in building trust, ensuring transparency, and creating a healing environment that patients and families can rely on. At [Hospital Name], you’re not just receiving care — you’re in the hands of professionals who truly care. Your health is our mission, and your recovery is our success.</p>

      <div style={{ background: "linear-gradient(135deg, #1D2C55, #1C5A25)" }}>
        <p className="font-bold pt-15 mx-27 text-5xl text-white">Our Services</p>
        <p className="mx-27 my-7 text-white text-lg">Minimally Invasive | Faster Recovery | Higher Precision</p>

        <div className="flex ml-27">
          <div className="w-[24%] mb-15">
            <p
              onClick={() => setActive("Laser Treatments")}
              className={`cursor-pointer my-6 text-lg ${active === "Laser Treatments" ? "text-white" : "text-gray-500"}`}
            >Laser Treatments</p>
            <div className={`h-px ${active === "Laser Treatments" ? "bg-white" : "bg-gray-500"}`}></div>

            <p
              onClick={() => setActive("Laparoscopic Surgeries")}
              className={`cursor-pointer my-6 text-lg ${active === "Laparoscopic Surgeries" ? "text-white" : "text-gray-500"}`}
            >Laparoscopic Surgeries</p>
            <div className={`h-px ${active === "Laparoscopic Surgeries" ? "bg-white" : "bg-gray-500"}`}></div>

            <p
              onClick={() => setActive("Endoscopic & Bronchoscopic Services")}
              className={`cursor-pointer my-6 text-lg ${active === "Endoscopic & Bronchoscopic Services" ? "text-white" : "text-gray-500"}`}
            >Endoscopic & Bronchoscopic Services</p>
            <div className={`h-px ${active === "Endoscopic & Bronchoscopic Services" ? "bg-white" : "bg-gray-500"}`}></div>

            <p
              onClick={() => setActive("Other Specialties")}
              className={`cursor-pointer my-6 text-lg ${active === "Other Specialties" ? "text-white" : "text-gray-500"}`}
            >Other Specialties</p>
            <div className={`h-px ${active === "Other Specialties" ? "bg-white" : "bg-gray-500"}`}></div>

            <p
              onClick={() => setActive("General Surgical Procedures")}
              className={`cursor-pointer my-6 text-lg ${active === "General Surgical Procedures" ? "text-white" : "text-gray-500"}`}
            >General Surgical Procedures</p>
            <div className={`h-px ${active === "General Surgical Procedures" ? "bg-white" : "bg-gray-500"}`}></div>

            <p
              onClick={() => setActive("Chronic & Lifestyle Diseases")}
              className={`cursor-pointer my-6 text-lg ${active === "Chronic & Lifestyle Diseases" ? "text-white" : "text-gray-500"}`}
            >Chronic & Lifestyle Diseases</p>
            <div className={`h-px ${active === "Chronic & Lifestyle Diseases" ? "bg-white" : "bg-gray-500"}`}></div>
          </div>

          <div className={`${active === "Laser Treatments" ? "block" : "hidden"} mx-20 w-[76%]`}>
            <p className="my-6 text-white text-xl font-bold">Laser Treatments</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 my-4">

              <div className="flex bg-[#2B7B3724] rounded-xl items-center gap-x-6 py-1 px-4">
                <div className="flex items-center justify-center bg-[#2B7B37] rounded-lg h-[6vh] w-[6vh]">
                  <img
                    src="/assets/services/Kidney Stones.png"
                    alt="Kidney Stones"
                    className="h-[3vh] w-[3vw] object-contain"
                  />
                </div>
                <span className="font-medium text-white">Kidney Stones</span>
              </div>

              <div className="flex bg-[#2B7B3724] rounded-xl items-center gap-x-6 py-3 px-4">
                <div className="flex items-center justify-center bg-[#2B7B37] rounded-lg h-[6vh] w-[6vh]">
                  <img
                    src="/assets/services/Prostate.png"
                    alt="Prostate"
                    className="h-[3vh] w-[3vw] object-contain"
                  />
                </div>
                <span className="font-medium text-white">Prostate</span>
              </div>

              <div className="flex bg-[#2B7B3724] rounded-xl items-center gap-x-6 py-3 px-4">
                <div className="flex items-center justify-center bg-[#2B7B37] rounded-lg h-[6vh] w-[6vh]">
                  <img
                    src="/assets/services/Bladder Tumors.png"
                    alt="Bladder Tumors"
                    className="h-[3vh] w-[3vw] object-contain"
                  />
                </div>
                <span className="font-medium text-white">Bladder Tumors</span>
              </div>

              <div className="flex bg-[#2B7B3724] rounded-xl items-center gap-x-6 py-3 px-4">
                <div className="flex items-center justify-center bg-[#2B7B37] rounded-lg h-[6vh] w-[6vh]">
                  <img
                    src="/assets/services/Cosmetic & Plastic Surgeries.png"
                    alt="Cosmetic & Plastic Surgeries"
                    className="h-[3vh] w-[3vw] object-contain"
                  />
                </div>
                <span className="font-medium text-white block whitespace-normal break-words text-base leading-relaxed">Cosmetic & Plastic Surgeries</span>
              </div>

              <div className="flex bg-[#2B7B3724] rounded-xl items-center gap-x-6 py-3 px-4">
                <div className="flex items-center justify-center bg-[#2B7B37] rounded-lg h-[6vh] w-[6vh]">
                  <img
                    src="/assets/services/Varicose Veins.png"
                    alt="Varicose Veins"
                    className="h-[3vh] w-[3vw] object-contain"
                  />
                </div>
                <span className="font-medium text-white">Varicose Veins</span>
              </div>

            </div>
          </div>

        </div>
      </div>


    </>
  );
}
