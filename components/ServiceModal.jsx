"use client";
import { usePanel } from "@/components/PanelProvider";
import { useRouter } from "next/navigation";


export default function ServiceModal({ onNavigate }) {

    const { closePanel } = usePanel();
    const router = useRouter();


    const handelServices = () => {
        closePanel();
        if (onNavigate) {
            onNavigate();
        }
    };

    return (
        <>
            <div className="flex mt-15 gap-5 mx-10">

                <div className="flex-1">
                    <p className="text-[#2B7B37] font-xl">Chronic & lifestyle Disease</p>
                    <ul className="ml-3">
                        <li onClick={() => { closePanel(); router.push("/services/chronickidneydisease") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Chronic Kidney Disease (CKD) Management
                        </li>

                        <li onClick={() => { closePanel(); router.push("/services/kidneystone") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Kidney Stone Management
                        </li>

                        <li onClick={() => { closePanel(); router.push("/services/prostatecare") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Prostate Care
                        </li>
                    </ul>

                    <p className="text-[#2B7B37] font-xl mt-10">Endoscopic</p>
                    <ul className="ml-3">
                        <li onClick={() => { closePanel(); router.push("/services/diagnosticssupportservices") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Diagnostics & Support Services
                        </li>
                    </ul>
                </div>

                <div className="flex-1">

                    <p className="text-[#2B7B37] font-xl">Laproscopic Surgeries</p>
                    <ul className="ml-3">
                        <li onClick={() => { closePanel(); router.push("/services/nephrology") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Nephrology (Kidney Care)
                        </li>
                    </ul>

                    <p className="text-[#2B7B37] font-xl mt-10">Laser treatments</p>
                    <ul className="ml-3">
                        <li onClick={() => { closePanel(); router.push("/services/bladderhealth") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Bladder Health
                        </li>

                        <li onClick={() => { closePanel(); router.push("/services/plasticcosmeticsurgery") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Plastic & Cosmetic Surgery
                        </li>

                        <li onClick={() => { closePanel(); router.push("/services/kidneystone") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Kidney Stone Management
                        </li>

                        <li onClick={() => { closePanel(); router.push("/services/prostatecare") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Prostate Care
                        </li>
                    </ul>
                </div>

                <div className="flex-1">
                    <p className="text-[#2B7B37] font-xl">Other Specialities</p>
                    <ul className="ml-3">
                        <li onClick={() => { closePanel(); router.push("/services/cardiology") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Cardiology (Heart Care)
                        </li>
                        <li onClick={() => { closePanel(); router.push("/services/nutritiondietetics") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Nutrition & Dietetics
                        </li>
                        <li onClick={() => { closePanel(); router.push("/services/ent") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            ENT (Ear, Nose & Throat)
                        </li>
                        <li onClick={() => { closePanel(); router.push("/services/generalmedicine") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            General Medicine
                        </li>
                        <li onClick={() => { closePanel(); router.push("/services/nephrology") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Nephrology (Kidney Care)
                        </li>
                        <li onClick={() => { closePanel(); router.push("/services/neurology") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Neurology
                        </li>
                        <li onClick={() => { closePanel(); router.push("/services/orthopedics") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Orthopedics (Bone & Joint Care)
                        </li>
                        <li onClick={() => { closePanel(); router.push("/services/plasticcosmeticsurgery") }} className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Plastic & Cosmetic Surgery
                        </li>
                    </ul>
                </div>
            </div>

            <p className="text-[#2B7B37] mx-10 mb-10 underline cursor-pointer" onClick={() => handelServices()}>View All Specialities</p>

        </>
    );
}