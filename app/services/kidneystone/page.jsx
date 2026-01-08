"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function KidneyStone() {
    const router = useRouter();

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: " What are your office hours?",
            answer: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
        },
        {
            question: "How can I schedule an appointment?",
            answer: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
        },
        {
            question: "Do you accept insurance?",
            answer: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
        },
        {
            question: "What should I bring to my appointment?",
            answer: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
        },
        {
            question: "Do you offer telemedicine appointments?",
            answer: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours."
        }
    ]

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
                <span
                    onClick={() => router.push("/services")}
                    className="cursor-pointer hover:underline"
                >
                    Services
                </span>
                <span>/</span>
                <span className="text-green-600 transition cursor-pointer">
                    Kidney Stone Management
                </span>
            </div>

            <p className="px-8 font-bold m-11 text-4xl text-blue-900">
                Kidney Stone Management
            </p>
            <div className="flex flex-wrap mx-25">
                <div className="w-[37vw] h-[55vh] overflow-hidden">
                    <img
                        src="/assets/services/servicedescription/kidney_stone.png"
                        alt="Happy Health Hospital"
                        className=" object-cover"
                    />
                </div>

                <div className="w-[51%] ml-12">
                    <p className="font-bold text-2xl text-[#2B7B37]">
                        Trusted care, tailored for you. Explore our most sought-after
                        treatments and specialties.
                    </p>
                    <p className="my-6 text-l">
                        We provide comprehensive and advanced care for patients dealing with kidney stones—one of the most common and painful urological conditions. Our goal is to diagnose the stone accurately, relieve symptoms quickly, and ensure long-term prevention. Guided by experienced urologists, we create personalized treatment plans based on stone size, location, and severity. From hydration therapy and medication to cutting-edge laser and minimally invasive procedures, our approach is designed to provide quick relief with minimal discomfort.
                    </p>
                    <p className="my-6 text-l font-medium">
                        Our multidisciplinary team focuses on precise diagnosis, early intervention, and preventive strategies to reduce future stone formation. Whether your stone is small enough to pass naturally or requires advanced removal techniques, we tailor treatment to your needs using high-end imaging tools, modern endoscopic equipment, and evidence-based protocols. With expert monitoring, dietary counseling, and personalized treatment pathways, we ensure seamless care at every step of your recovery.
                    </p>
                </div>
            </div>
            <div className="flex mt-[5vh] mx-25">
                <p className="my-6 text-l">
                    Our kidney stone management services also extend to identifying the underlying causes of stone formation, such as dehydration, dietary imbalance, or metabolic disorders. We emphasize preventive care through lifestyle guidance, metabolic evaluation, and regular follow-ups to help reduce recurrence. For complex cases or larger stones, we offer specialized procedures such as ESWL, URS, RIRS, and PCNL—ensuring safe and effective stone clearance with faster healing and shorter hospital stay. As one of Bangalore’s trusted centers for kidney stone treatment, Happy Healthy Hospital combines advanced technology with expert care to deliver the best outcomes.
                </p>
            </div>

            <section className="bg-[#eaf5ec] relative overflow-hidden h-[60vh] ">
                <div className=" flex flex-row items-center justify-between gap-10">
                    <div className=" flex justify-start">
                        <img
                            src="/assets/services/servicedescription/stethoscope.png"
                            alt="Stethoscope"
                            className="w-[35vw]  object-contain"
                        />
                    </div>

                    <div className="w-full text-center lg:text-left">
                        <h2 className="text-xl font-semibold text-[#023047] mb-2">
                            Common Conditions Treated
                        </h2>
                        <h3 className="text-2xl italic font-semibold text-green-700 mb-8">
                            Under Kidney Stone Management
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-10 text-gray-800">
                            <ul className="space-y-3">
                                {[
                                    "Renal stones (kidney stones)",
                                    "Ureteric stones (stones lodged in the ureter)",
                                    "Bladder stones",
                                    "Recurrent kidney stones",
                                    "Pain due to stone obstruction",
                                    "Blood in urine (hematuria)",
                                ].map((condition, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-green-700 mt-2 mr-3 rounded-sm"></span>
                                        {condition}
                                    </li>
                                ))}
                            </ul>

                            <ul className="space-y-3">
                                {[
                                    "Infection associated with stones",
                                    "Hydronephrosis (kidney swelling due to blockage)",
                                    "Stones linked to metabolic disorders",
                                    "Stones associated with prostate enlargement"
                                ].map((condition, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-green-700 mt-2 mr-3 rounded-sm"></span>
                                        {condition}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* 
            <img
              src="/assets/services/servicedescription/heart.png"
              alt="Heart"
              className="absolute top-8 right-8 w-10 opacity-80"
            /> */}
            </section>

            <div className="my-20 mx-30">
                <p className="font-bold my-5 text-4xl text-center text-[#203169]">
                    Why Choose Us
                </p>
                <p className="text-center mx-40">
                    We offer expert-led, personalized care for every stage of CKD, backed
                    by advanced diagnostics and a <br />
                    compassionate team. Your kidney health is our priority, every step of
                    the way.
                </p>

                <div className="gap-4 flex felx-col">
                    <div
                        className="w-[25%] my-5 rounded-2xl"
                        style={{ background: "linear-gradient(135deg, #1D2C55, #1C5A25)" }}
                    >
                        <p className="mt-17 mb-5 mx-7 block text-white font-bold text-2xl text-center">
                            Expert <br />
                            Nephrologists
                        </p>
                        <p className="mx-8 mb-5 text-white block text-center">
                            Highly experienced specialists focused on kidney health.
                        </p>
                    </div>

                    <div
                        className="w-[25%] my-5 rounded-2xl"
                        style={{ background: "linear-gradient(135deg, #1D2C55, #1C5A25)" }}
                    >
                        <p className="mt-17 mb-5 mx-7 block text-white font-bold text-2xl text-center">
                            Advanced Diagnostics
                        </p>
                        <p className="mx-8 mb-5 text-white block text-center">
                            Early detection and precise monitoring with state-of-the-art labs.
                        </p>
                    </div>

                    <div
                        className="w-[25%] my-5 rounded-2xl"
                        style={{ background: "linear-gradient(135deg, #1D2C55, #1C5A25)" }}
                    >
                        <p className="mt-17 mb-5 mx-7 block text-white font-bold text-2xl text-center">
                            Personalized Treatment Plans
                        </p>
                        <p className="mx-8 mb-5 text-white block text-center">
                            Tailored care based on your stage and health needs.
                        </p>
                    </div>

                    <div
                        className="w-[25%] my-5 rounded-2xl"
                        style={{ background: "linear-gradient(135deg, #1D2C55, #1C5A25)" }}
                    >
                        <p className="mt-17 mb-5 mx-7 block text-white font-bold text-2xl text-center">
                            Integrated Care <br />
                            Team
                        </p>
                        <p className="mx-8 mb-5 text-white block text-center">
                            Includes dietitians, cardiologists, and diabetes specialists.
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-20 mx-30">
                <p className="font-bold my-5 text-4xl text-center text-[#203169]">
                    Our Team
                </p>
                <p className="text-center mx-40">
                    Our team of skilled nephrologists, nurses, and support staff work
                    together to deliver personalized, expert care.
                    <br /> With compassion and precision, we’re committed to improving
                    your kidney health.
                </p>

                <div className="gap-4 flex felx-col">
                    <div className="w-[25%] my-5 bg-[#EEFFF1] rounded-2xl flex flex-col items-center justify-center py-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img
                            src="/assets/services/servicedescription/doctor.png"
                            alt="Dr. Anjali Mehra"
                            className="w-32 h-32 rounded-full object-cover mb-6 "
                        />
                        <p className="text-green-800 font-bold text-xl text-center">
                            Dr. Anjali Mehra
                        </p>
                        <p className="text-gray-700 text-center mt-2 leading-tight">
                            Senior Consultant
                            <br />
                            Nephrologist
                        </p>
                    </div>

                    <div className="w-[25%] my-5 bg-[#EEFFF1] rounded-2xl flex flex-col items-center justify-center py-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img
                            src="/assets/services/servicedescription/doctor.png"
                            alt="Dr. Anjali Mehra"
                            className="w-32 h-32 rounded-full object-cover mb-6 "
                        />
                        <p className="text-green-800 font-bold text-xl text-center">
                            Dr. Anjali Mehra
                        </p>
                        <p className="text-gray-700 text-center mt-2 leading-tight">
                            Senior Consultant
                            <br />
                            Nephrologist
                        </p>
                    </div>

                    <div className="w-[25%] my-5 bg-[#EEFFF1] rounded-2xl flex flex-col items-center justify-center py-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img
                            src="/assets/services/servicedescription/doctor.png"
                            alt="Dr. Anjali Mehra"
                            className="w-32 h-32 rounded-full object-cover mb-6"
                        />
                        <p className="text-green-800 font-bold text-xl text-center">
                            Dr. Anjali Mehra
                        </p>
                        <p className="text-gray-700 text-center mt-2 leading-tight">
                            Senior Consultant
                            <br />
                            Nephrologist
                        </p>
                    </div>

                    <div className="w-[25%] my-5 bg-[#EEFFF1] rounded-2xl flex flex-col items-center justify-center py-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img
                            src="/assets/services/servicedescription/doctor.png"
                            alt="Dr. Anjali Mehra"
                            className="w-32 h-32 rounded-full object-cover mb-6 "
                        />
                        <p className="text-green-800 font-bold text-xl text-center">
                            Dr. Anjali Mehra
                        </p>
                        <p className="text-gray-700 text-center mt-2 leading-tight">
                            Senior Consultant
                            <br />
                            Nephrologist
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-20 mx-20">
                <p className="font-bold my-10 text-4xl text-center text-[#203169]">
                    What they say about us
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <div className="bg-[#EAF2FF] rounded-2xl p-6 w-[30%] shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Expertise and Compassion <br /> Combined
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
                            I can't thank enough for their exceptional care. The doctors and
                            staff showed incredible expertise and compassion throughout my
                            treatment journey. I felt truly cared for every step of the way.
                        </p>
                        <div className="flex items-center space-x-3">
                            <img
                                src="/assets/services/servicedescription/reviewer.png"
                                alt="Sarah D"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-900 text-[15px]">
                                    Sarah D{" "}
                                    <span className="text-gray-500 text-sm font-normal">
                                        , IT Professional
                                    </span>
                                </p>
                                <div className="flex items-center space-x-1 mt-1">
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#EAF2FF] rounded-2xl p-6 w-[30%] shadow-md   transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Life-Saving Care, Life-Changing Experience
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
                            My experience at [Healthcare Provider Name] was life-changing. The
                            prompt and accurate diagnosis, coupled with the advanced
                            treatments they provided, saved my life.
                        </p>
                        <div className="flex items-center space-x-3">
                            <img
                                src="/assets/services/servicedescription/reviewer.png"
                                alt="Sarah D"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-900 text-[15px]">
                                    Sarah D{" "}
                                    <span className="text-gray-500 text-sm font-normal">
                                        , IT Professional
                                    </span>
                                </p>
                                <div className="flex items-center space-x-1 mt-1">
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#EAF2FF] rounded-2xl p-6 w-[30%] shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            A Partner in Health and Wellness
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
                            As a busy professional, I appreciate the convenience and quality
                            of care I receive at [Healthcare Provider Name]. From telemedicine
                            consultations to routine check-ups, they’ve become my trusted
                            partner in health.
                        </p>
                        <div className="flex items-center space-x-3">
                            <img
                                src="/assets/services/servicedescription/reviewer.png"
                                alt="Sarah D"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-900 text-[15px]">
                                    Sarah D{" "}
                                    <span className="text-gray-500 text-sm font-normal">
                                        , IT Professional
                                    </span>
                                </p>
                                <div className="flex items-center space-x-1 mt-1">
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                    <img
                                        src="/assets/services/servicedescription/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-30 my-10">
                <span className="text-[#020043] text-3xl font-bold">Frequently Asked Question</span>

                <div className="space-y-4 my-5">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={` bg-white shadow-sm transition-all duration-300 ${isOpen ? "shadow-md" : ""
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full bg-[#EEFFF1] text-left px-4 py-3 flex justify-between items-center focus:outline-none"
                                >
                                    <span
                                        className={`text-base sm:text-xl font-medium transition-colors duration-200 ${isOpen ? "text-[#2B7B37]" : "text-[#020043]"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <svg
                                        className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-90 text-[#2B7B37]" : "rotate-0 text-gray-500"
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>

                                {isOpen && (
                                    <div className="px-4 pb-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}