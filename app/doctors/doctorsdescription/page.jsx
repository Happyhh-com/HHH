"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DoctorDescription() {
  const router = useRouter();
  return (
    <div className="px-10 py-10">
      <div className="flex space-x-2 font-semibold text-gray-400 mb-8">
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

      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-10">
        <Image
          src="/assets/doctors/doctor1.jpg"
          alt="Dr. Sachin Arakere Nataraj"
          width={250}
          height={250}
          className="rounded-2xl object-cover bg-white shadow-md"
        />

        <div className="flex flex-col space-y-3">
          <h1 className="text-3xl font-bold text-blue-900">
            Dr. Sachin Arakere Nataraj
          </h1>
          <p className="text-gray-700 font-medium">
            MBBS, MS, MRCS (Edinburgh), MCh in Urology and Renal Transplantation
            (SGPGIMS, Lucknow)
          </p>
          <p className="text-gray-700 font-medium">
            Fellowship in Uro-Oncology, Robotic Surgery and Renal
            Transplantation (Vattikuti Foundation)
          </p>
          <p className="text-blue-600 font-semibold">
            Uro-Oncology & Robotic Surgery • 18 Years Experience
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-lg w-fit font-semibold">
            Book an Appointment
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-900">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Dr. Sachin Arakere Nataraj is a renowned Uro-Oncologist and Robotic
          Surgeon with over 18 years of expertise in managing urological
          cancers, robotic surgery, and renal transplantation. As the Program
          Director of Uro-Oncology and Robotic Surgery at Aster CMI Hospital &
          Aster Whitefield Hospital, Bangalore, Dr. Sachin leads one of the most
          advanced programs in minimally invasive and robotic-assisted surgical
          care.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dr. Sachin specializes in cutting-edge robotic surgical techniques,
          including robotic radical prostatectomy, robotic partial nephrectomy,
          and robotic radical cystectomy with intracorporeal neobladders. His
          expertise extends to highly specialized procedures such as Robotic
          Retroperitoneal Lymph Node Dissection (RPLND), Robotic Video
          Endoscopic Inguinal Lymphadenectomy (VEIL), fusion biopsies for
          diagnosing prostate cancer, and focal therapy for prostate cancer.
          These advanced techniques reflect his commitment to precision and
          innovation in urological oncology.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dr. Sachin completed his MCh in Urology and Renal Transplantation from
          the prestigious SGPGIMS, Lucknow, one of India’s premier institutes
          for medical education and research. To further enhance his expertise,
          he pursued a Robotic Fellowship in Uro-Oncology and Renal
          Transplantation from the Vattikuti Foundation, receiving advanced
          training in robotic-assisted surgeries at leading international
          centers such as the Henry Ford Hospital, Detroit, USA. Before joining
          Aster Hospital, Dr. Sachin served as the Director of Uro-Oncology and
          Robotic Surgery at Medanta, The Medicity, Gurgaon, where he
          significantly expanded the robotic surgery program.
        </p>
      </div>
      <div className="space-y-4 mt-[4vh]">
        <h2 className="text-2xl font-semibold text-blue-900">
          Area of expertise
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Diagnosis and management of urinary tract infections (UTI)
          <br />
          Treatment of kidney stones (nephrolithiasis) Male and female urinary{" "}
          <br />
          incontinence management Benign prostatic hyperplasia (BPH) treatment{" "}
          <br />
          Chronic kidney disease (CKD) management Hematuria (blood in urine){" "}
          <br />
          evaluation and treatment Acute and chronic glomerulonephritis care{" "}
          <br />
          Urological cancers (prostate, bladder, kidney, testicular) Renal{" "}
          <br />
          replacement therapy and dialysis care Pediatric urology and congenital{" "}
          <br />
          urinary anomalies Management of erectile dysfunction and male <br />
          infertility Hypertension related to renal causes <br />
        </p>
      </div>
      <div className="space-y-4 mt-[4vh]">
        <h2 className="text-2xl font-semibold text-blue-900">
          Speciality & Experience
        </h2>
        <div className="flex flex-row items-center bg-[#E9F3FF] rounded-2xl p-4 w-[45vw] shadow-sm">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center bg-[#2B7B37] rounded-lg h-[6vh] w-[6vh]">
              <img
                src="/assets/home/Other Specialties.png"
                alt="laser"
                className="h-[4vh] w-[8vw] object-contain"
              />
            </div>
          </div>

          <div className="ml-6 flex flex-col justify-between w-full">
             <div>
              <h2 className="text-xs font-semibold text-gray-900">
               Speciality
              </h2>
              <p className="text-xs text-gray-700 leading-snug mt-1">
                Senior Advisor, Gynaecologic Oncology Services, Bengaluru
                Cluster & Head of Academics, Aster International Institute of
                Oncology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
