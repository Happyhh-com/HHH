"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DoctorCard from "@/components/DoctorCard";

export default function CKD() {
  const router = useRouter();
  const leftConditions = [
    "High blood pressure (Hypertension)",
    "Diabetes-related kidney damage (Diabetic Nephropathy)",
    "Coronary artery disease (Ischemic Heart Disease)",
    "Chronic obstructive pulmonary disease (COPD)",
    "Heart failure (Congestive Heart Failure)",
    "Osteoarthritis (Degenerative Joint Disease)",
  ];

  const rightConditions = [
    "Mineral and bone disorders",
    "Fatigue and weakness caused by waste buildup",
    "Proteinuria (protein in urine)",
    "Cardiovascular complications related to CKD",
    "Heart failure (Congestive Heart Failure)",
    "Osteoarthritis (Degenerative Joint Disease)",
  ];
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
          Chronic Kidney Disease (CKD) Management
        </span>
      </div>

      <p className="px-8 font-bold m-11 text-4xl text-blue-900">
        Chronic Kidney Disease (CKD) Management
      </p>
      <div className="flex flex-wrap mx-25">
        <div className="w-[37vw] h-[55vh] overflow-hidden">
          <img
            src="/assets/services/servicedescription/kidney.png"
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
            We offer specialized and ongoing care for patients living with
            Chronic Kidney Disease (CKD). Our goal is to slow the progression of
            the disease, manage its symptoms, and maintain your quality of life.
            Under the guidance of experienced nephrologists, we provide
            personalized treatment plans that include regular kidney function
            monitoring, blood pressure control, medication management, and
            dietary counseling.
          </p>
          <p className="my-6 text-l font-medium">
            Our multidisciplinary approach focuses on early detection,
            prevention of complications, and patient education to empower you in
            managing your condition. Whether you are in the early stages of CKD
            or require advanced support, we ensure continuous care tailored to
            your specific needs. With access to advanced diagnostic tools,
            state-of-the-art facilities, and a compassionate care team, you’re
            in trusted hands throughout your kidney health journey.
          </p>
        </div>
      </div>
      <div className="flex mt-[5vh] mx-25">
        <p className="my-6 text-l">
          Our CKD management services also include close coordination with
          dietitians, cardiologists, and other specialists to address related
          health conditions such as diabetes and hypertension — two of the most
          common causes of kidney damage. We believe in a proactive approach,
          focusing on lifestyle modifications, patient education, and early
          intervention to reduce the risk of kidney failure. For patients in
          advanced stages, we also provide guidance on dialysis options and
          transplant readiness, ensuring you receive the right care at the right
          time.
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
              Under CKD Management
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-10 text-gray-800">
              <ul className="space-y-3">
                {[
                  "High blood pressure (Hypertension)",
                  "Diabetes-related kidney damage (Diabetic Nephropathy)",
                  "Coronary artery disease (Ischemic Heart Disease)",
                  "Chronic obstructive pulmonary disease (COPD)",
                  "Heart failure (Congestive Heart Failure)",
                  "Osteoarthritis (Degenerative Joint Disease)",
                ].map((condition, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-700 mt-2 mr-3 rounded-sm"></span>
                    {condition}
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {[
                  "Mineral and bone disorders",
                  "Fatigue and weakness caused by waste buildup",
                  "Proteinuria (protein in urine)",
                  "Cardiovascular complications related to CKD",
                  "Heart failure (Congestive Heart Failure)",
                  "Osteoarthritis (Degenerative Joint Disease)",
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
    </>
  );
}
