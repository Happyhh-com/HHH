"use client";
import { useRouter } from "next/navigation";

export default function Appointments() {
    const router = useRouter();

    const dateFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };

    const appointments = [
        {
            "Id": 3,
            "PatientName": "TestPatient asdffff asffffffff hgknkfgnk kefknkdnfn nwknkn 888",
            "PhoneNumber": "1234567890002",
            "Email": "ncdncdnvdvdvmnc@vndvn.com",
            "PatientMessage": "Very long message ajsdfgjhds kjahfj bjhv jSDBbfhd JHGFJDV asdjfbudgfuygu adfdfdf 777777777777777777",
            "CreatedDateTime": "2025-11-08T16:54:27.007"
        },
        {
            "Id": 2,
            "PatientName": "TestPatient",
            "PhoneNumber": "1234567890002",
            "Email": "ncdncdnvdvdvmnc@vndvn.com",
            "PatientMessage": "hii",
            "CreatedDateTime": "2025-11-08T16:54:27.007"
        },
        {
            "Id": 1,
            "PatientName": "Patient1",
            "PhoneNumber": "1234567890",
            "Email": "emial@gmul.com",
            "PatientMessage": "first message",
            "CreatedDateTime": "2025-11-08T16:21:58.537"
        }
    ];

    return (
        <>
            <div className="flex space-x-2 font-semibold text-gray-400 mt-11 ml-19">
                <span
                    onClick={() => router.push("/")}
                    className="cursor-pointer hover:underline"
                >
                    Home
                </span>
                <span>/</span>
                <span className="text-[#2B7B37] transition cursor-pointer">
                    Appointments
                </span>
            </div>

            <p className="font-bold mt-11 mb-5 ml-19 text-4xl text-[#203169]">Appointments</p>

            <div className="overflow-x-auto my-10 mx-19">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">

                    <thead className="bg-[#2B7B37] text-white">
                        <tr>
                            <th className="py-3 px-4 text-left w-[20%]">Date Time</th>
                            <th className="py-3 px-4 text-left w-[20%]">Name</th>
                            <th className="py-3 px-4 text-left w-[20%]">Phone</th>
                            <th className="py-3 px-4 text-left w-[20%]">Email</th>
                            <th className="py-3 px-4 text-left w-[20%]">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((s) => {
                            const formattedDate = new Date(s.CreatedDateTime).toLocaleString("en-IN", dateFormatOptions);
                            return (
                                <tr key={s.Id} className="border-b hover:bg-green-50 transition-colors">
                                    <td className="py-3 px-4 text-left w-[20%]">{formattedDate}</td>
                                    <td className="py-3 px-4 text-left w-[20%]">{s.PatientName}</td>
                                    <td className="py-3 px-4 text-left w-[20%]">{s.PhoneNumber}</td>
                                    <td className="py-3 px-4 text-left w-[20%]">{s.Email}</td>
                                    <td className="py-3 px-4 text-left w-[20%]">{s.PatientMessage}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}