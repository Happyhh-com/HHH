"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AppointmentModal from "../../../../components/AppointmentModal";
import { useModal } from "../../../../components/ModalProvider";

export default function AnirudhDescription() {
  const router = useRouter();
  const { openModal } = useModal();

  const appointmentModal = () => {
    openModal(<AppointmentModal />);
  };
  return (
    <div className="px-6 md:px-10 py-10">
      <div className="flex flex-wrap items-center space-x-2 font-semibold text-gray-400 mb-6 text-sm md:text-base">
        <span
          onClick={() => router.push("/")}
          className="cursor-pointer hover:underline"
        >
          Home
        </span>
        <span>/</span>
        <span
          onClick={() => router.push("/doctors")}
          className="cursor-pointer hover:underline"
        >
          Doctors
        </span>
        <span>/</span>
        <span className="text-green-600"> Dr. Anirudh S </span>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-10">
        <Image
          src="/assets/doctors/doctor1.jpg"
          alt="Dr. Sachin Arakere Nataraj"
          width={280}
          height={280}
          className="rounded-2xl object-cover bg-white shadow-md w-full md:w-[280px] h-auto"
        />

        <div className="flex flex-col space-y-3 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
            Dr. Anirudh S
          </h1>
          <p className="text-gray-700 font-medium text-sm md:text-base">
            MBBS, MS (General Surgery), MCh (Neurosurgery), Fellowship in
            Functional Neurosurgery
          </p>

          <p className="text-blue-600 font-semibold text-sm md:text-base">
            Neurosurgery surgeon • 15+ years
          </p>
          <button
            className="bg-red-600 hover:bg-red-700 transition text-white px-5 
          py-2 rounded-lg w-fit mx-auto md:mx-0 text-sm md:text-base font-semibold
          "
            onClick={appointmentModal}
          >
            Book an Appointment
          </button>
        </div>
      </div>

      {/* <Section title="Overview">
        <p>
          Dr. Arjun A is a skilled General and Laparoscopic Surgeon with
          experience in managing a wide range of abdominal, gastrointestinal,
          and general surgical conditions. He is trained in minimally invasive
          surgical techniques and endoscopic procedures, with a strong focus on
          safe, evidence-based patient care. His clinical strengths include
          diagnosis, surgical planning, laparoscopic procedures, and
          comprehensive perioperative management.
        </p>
      </Section> */}

      <Section title="Area of Expertise">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Brain & Spine Tumour Surgery </li>
          <li>Minimally Invasive Spine Surgery </li>
          <li>Cerebrovascular Surgery </li>
          <li>Functional Neurosurgery (Movement Disorders)</li>
          <li>Trauma-related Neurosurgery</li>
        </ul>
      </Section>

      <Section title="Speciality & Experience">
        <Card>
          <div className="flex-shrink-0 hidden sm:block">
            <div className="flex items-center justify-center bg-[#2B7B37] rounded-lg h-[6vh] w-[6vh]">
              <img
                src="/assets/home/Other Specialties.png"
                alt="speciality"
                className="h-[4vh] w-[4vh] object-contain"
              />
            </div>
          </div>
          <div className="ml-0 sm:ml-6 w-full">
            <h2 className="text-xs text-gray-700">Speciality</h2>
            <p className="text-sm font-semibold text-gray-900 leading-snug mt-1">
             Neurosurgery surgeon  
            </p>
          </div>
        </Card>

        <Card>
          <div className="ml-0 sm:ml-6 w-full">
            <h2 className="text-sm text-gray-700 mb-1 font-semibold">
              Experience
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mt-1">
              15+ years
            </p>
          </div>
        </Card>
      </Section>

      <Section title="Education">
        <Card>
          <div className="ml-0 sm:ml-6 w-full">
            <h2 className="text-sm text-gray-700 mb-2 font-semibold">
              Education
            </h2>
            <ul className="list-disc ml-5 text-gray-800 space-y-1 text-sm md:text-base">
              <li>MBBS</li>
              <li>MS (General Surgery)</li>
              <li>MCh (Neurosurgery)</li>
              <li>Fellowship in Functional Neurosurgery</li>
            </ul>
          </div>
        </Card>

        {/* <Card>
          <div className="ml-0 sm:ml-6 w-full">
            <h2 className="text-sm text-gray-700 mb-2 font-semibold">
              Certifications
            </h2>
            <ul className="list-disc ml-5 text-gray-800 space-y-1 text-sm md:text-base">
              <li>
                Fellowship in Endourology and Laparoscopic Urology – Singapore
                General Hospital, 2015
              </li>
              <li>
                Fellowship in Renal Transplantation – Apollo Hospitals, Chennai,
                2017
              </li>
              <li>Certified in Advanced Laparoscopic and Robotic Surgery</li>
            </ul>
          </div>
        </Card> */}
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="space-y-4 mt-8">
      <h2 className="text-xl md:text-2xl font-semibold text-blue-900">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed text-sm md:text-base space-y-3">
        {children}
      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center bg-[#E9F3FF] rounded-2xl p-4 w-full sm:w-[90%] md:w-[70%] lg:w-[45vw] shadow-sm space-y-3 sm:space-y-0">
      {children}
    </div>
  );
}
