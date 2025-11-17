"use client";
import { usePanel } from "@/components/PanelProvider";

export default function ServiceModal({ onNavigate }) {

    const { closePanel } = usePanel();

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
                    <p className="text-[#2B7B37] font-xl">Laser Treatments</p>
                    <ul className="ml-3">
                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Kidney Stones
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Prostate
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Bladder Tumors
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Piles
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Circumcision
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Cosmetic & Plastic Surgeries
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Varicose Veins
                        </li>
                    </ul>
                </div>

                <div className="flex-1">
                    <p className="text-[#2B7B37] font-xl">Laparoscopic Surgeries</p>
                    <ul className="ml-3">
                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Prostatectomy
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Nephrectomy
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Appendix Removal
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Hernia Repair
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Gallbladder Stones
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Varicocelectomy
                        </li>
                    </ul>
                </div>

                <div className="flex-1">
                    <p className="text-[#2B7B37] font-xl">Endoscopic & Bronchoscopic Services</p>
                    <ul className="ml-3">
                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Advanced internal diagnostics
                        </li>
                    </ul>

                    <p className="text-[#2B7B37] font-xl">General Surgical Procedures</p>
                    <ul className="ml-3">
                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Gallstones
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Hernia Repair
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Haemorrhoids (Piles)
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Appendicitis
                        </li>

                        <li className="flex items-center border-b border-black my-4 cursor-pointer">
                            <span className="mr-2 block h-2 aspect-square rounded-full bg-[#0061A7]"></span>
                            Stomach & Intestinal Cancer
                        </li>
                    </ul>

                </div>

            </div>

            <p className="text-[#2B7B37] mx-10 my-10 underline cursor-pointer" onClick={() => handelServices()}>View All Specialities</p>

        </>
    );
}