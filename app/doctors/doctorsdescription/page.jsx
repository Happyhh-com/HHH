"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DoctorDescription() {
  const router = useRouter();

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
        <span className="text-green-600">Dr. Sachin Arakere Nataraj</span>
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
            Dr. Sachin Arakere Nataraj
          </h1>
          <p className="text-gray-700 font-medium text-sm md:text-base">
            MBBS, MS, MRCS (Edinburgh), MCh in Urology and Renal Transplantation
            (SGPGIMS, Lucknow)
          </p>
          <p className="text-gray-700 font-medium text-sm md:text-base">
            Fellowship in Uro-Oncology, Robotic Surgery and Renal
            Transplantation (Vattikuti Foundation)
          </p>
          <p className="text-blue-600 font-semibold text-sm md:text-base">
            Uro-Oncology & Robotic Surgery • 18 Years Experience
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-lg w-fit mx-auto md:mx-0 text-sm md:text-base font-semibold">
            Book an Appointment
          </button>
        </div>
      </div>

      <Section title="Overview">
        <p>
          Dr. Sachin Arakere Nataraj is a renowned Uro-Oncologist and Robotic
          Surgeon with over 18 years of expertise in managing urological
          cancers, robotic surgery, and renal transplantation. As the Program
          Director of Uro-Oncology and Robotic Surgery at Aster CMI Hospital &
          Aster Whitefield Hospital, Bangalore, Dr. Sachin leads one of the most
          advanced programs in minimally invasive and robotic-assisted surgical
          care.
        </p>
        <p>
          Dr. Sachin specializes in cutting-edge robotic surgical techniques,
          including robotic radical prostatectomy, robotic partial nephrectomy,
          and robotic radical cystectomy with intracorporeal neobladders. His
          expertise extends to highly specialized procedures such as Robotic
          Retroperitoneal Lymph Node Dissection (RPLND), Robotic Video
          Endoscopic Inguinal Lymphadenectomy (VEIL), fusion biopsies for
          diagnosing prostate cancer, and focal therapy for prostate cancer.
        </p>
        <p>
          Dr. Sachin completed his MCh in Urology and Renal Transplantation from
          the prestigious SGPGIMS, Lucknow, one of India’s premier institutes
          for medical education and research. He pursued a Robotic Fellowship in
          Uro-Oncology and Renal Transplantation from the Vattikuti Foundation,
          receiving advanced training in robotic-assisted surgeries at leading
          international centers such as the Henry Ford Hospital, Detroit, USA.
        </p>
      </Section>

      <Section title="Area of Expertise">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Diagnosis and management of urinary tract infections (UTI)</li>
          <li>Treatment of kidney stones (nephrolithiasis)</li>
          <li>Benign prostatic hyperplasia (BPH) treatment</li>
          <li>Chronic kidney disease (CKD) management</li>
          <li>Urological cancers (prostate, bladder, kidney, testicular)</li>
          <li>Pediatric urology and congenital urinary anomalies</li>
          <li>Management of erectile dysfunction and male infertility</li>
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
              Urology, Nephrology, Urinary Tract Infections (UTI)
            </p>
          </div>
        </Card>

        <Card>
          <div className="ml-0 sm:ml-6 w-full">
            <h2 className="text-sm text-gray-700 mb-1 font-semibold">
              Experience
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mt-1">
              8 Years
            </p>
          </div>
        </Card>
      </Section>

      <Section title="Education / Certificates">
        <Card>
          <div className="ml-0 sm:ml-6 w-full">
            <h2 className="text-sm text-gray-700 mb-2 font-semibold">
              Education
            </h2>
            <ul className="list-disc ml-5 text-gray-800 space-y-1 text-sm md:text-base">
              <li>
                MBBS - All India Institute of Medical Sciences (AIIMS), New
                Delhi, 2005
              </li>
              <li>
                MS (General Surgery) - Maulana Azad Medical College, New Delhi,
                2009
              </li>
              <li>
                MCh (Urology) - Postgraduate Institute of Medical Education and
                Research (PGIMER), Chandigarh, 2013
              </li>
            </ul>
          </div>
        </Card>

        <Card>
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
        </Card>
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
