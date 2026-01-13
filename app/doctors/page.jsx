"use client";
import { useRouter } from "next/navigation";
import DoctorCard from "@/components/DoctorCard";

export default function Doctors() {
  const router = useRouter();

  const overviewGiridhar =
    "Experienced surgeon with expertise in general, laparoscopic, breast, thyroid, and gastrointestinal procedures.";
  const overviewHemaRaju = "MBBS, DLO, DipNB (ENT), MNAMS";
  const overviewSwathi = " MS (ENT), MBBS";
  const overviewArjun =
    "Dr. Arjun A is a skilled General and Laparoscopic Surgeon with experience in managing a wide range of abdominal, gastrointestinal, and general surgical conditions. ";
  const overviewArpitha =
    "Experience in obstetrics, gynaecology & reproductive medicine roles.";
  const overviewNainatara = "Dietitian & Nutritionist";
  const overviewDayananda = " MBBS, MD, DM (Neurology), FINS";
  const overviewAnirudh = " Neurosurgery surgeon ";
  const overviewGladson =
    "Dr. Gladson Guddappa Uchil is an experienced ENT, Head & Neck Surgeon with more than 28 years in the field.";
  const overviewPrathap =
    "Dr Prathap Urumkar is an experienced Orthopaedic Surgeon with over 13 years of clinical experience in the management of bone, joint, and musculoskeletal conditions.";
  const overviewMahantesh =
    "Dr. Mahantesh R. Charantimath is a highly experienced Interventional Cardiologist with more than three decades of clinical experience, including over 22 years specialising in advanced cardiac care.";
  const overviewSuresh =
    "Dr. Suresh Y. A is a highly experienced Consultant Physician with 35 years of clinical expertise in diagnosing and treating a wide range of adult medical conditions.";
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
        <span className="text-green-600 transition cursor-pointer">
          Doctors
        </span>
      </div>

      <p className="px-8 font-bold m-11 text-4xl text-blue-900">Our Doctors</p>

      <div className="flex justify-around items-center mb-[5vh]">
        <div className="gap-8 flex flex-col">
          <DoctorCard
            route="Giridhar"
            name="Giridhar"
            overview={overviewGiridhar}
            experience=" 30+ Years"
          />
          <DoctorCard
            route="HemaRaju"
            name="Hemaraju N"
            overview={overviewHemaRaju}
            experience=" 28+ Years"
          />
          <DoctorCard
            route="Swathi"
            name="Swathi R. K"
            overview={overviewSwathi}
            experience=""
          />
          <DoctorCard
            route="Arjun"
            name="Arjun A"
            overview={overviewArjun}
            experience=" 12+ Years"
          />
          <DoctorCard
            route="Arpitha"
            name="Arpitha M. R"
            overview={overviewArpitha}
            experience=""
          />
          <DoctorCard
            route="Nainatara"
            name="Nainatara M"
            overview={overviewNainatara}
            experience=" 17+ Years"
          />
        </div>

        <div className="gap-8 flex flex-col">
          <DoctorCard
            route="Dayananda"
            name="Dayananda K"
            overview={overviewDayananda}
            experience=" 23+ Years"
          />
          <DoctorCard
            route="Anirudh"
            name="Anirudh S"
            overview={overviewAnirudh}
            experience=" 15+ Years"
          />
          <DoctorCard
            route="Gladson"
            name="Gladson Guddappa Uchil"
            overview={overviewGladson}
            experience=" 28+ Years"
          />
          <DoctorCard
            route="Prathap"
            name="Prathap Urumkar"
            overview={overviewPrathap}
            experience=" 13 Years"
          />
          <DoctorCard
            route="Mahantesh"
            name="Mahantesh R. Charantimath"
            overview={overviewMahantesh}
            experience=" 31 Years"
          />
          <DoctorCard
            route="Suresh"
            name="Suresh Y. A"
            overview={overviewSuresh}
            experience=" 35 Years"
          />
        </div>
      </div>
    </>
  );
}
