"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Appointments() {
  const router = useRouter();

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dateFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const res = await fetch(
          "https://happyhealthyhospital-auh0b2dsctfab7bf.canadacentral-01.azurewebsites.net/Appointment/getAppointmentList",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}), // send empty object if API expects body
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch appointments");
        }

        const data = await res.json();

        setAppointments(data?.AppointmentsList || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAppointments();
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex space-x-2 font-semibold text-gray-400 mt-11 ml-19">
        <span
          onClick={() => router.push("/")}
          className="cursor-pointer hover:underline"
        >
          Home
        </span>
        <span>/</span>
        <span className="text-[#2B7B37] cursor-pointer">Appointments</span>
      </div>

      <p className="font-bold mt-11 mb-5 ml-19 text-4xl text-[#203169]">
        Appointments
      </p>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center my-20">
          <div className="h-10 w-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error */}
      {error && <p className="text-red-500 text-center my-10">{error}</p>}

      {/* Table */}
      {!loading && !error && (
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
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No appointments found
                  </td>
                </tr>
              ) : (
                appointments.map((s) => {
                  const formattedDate = new Date(
                    s.CreatedDateTime
                  ).toLocaleString("en-IN", dateFormatOptions);

                  return (
                    <tr
                      key={s.Id}
                      className="border-b hover:bg-green-50 transition-colors"
                    >
                      <td className="py-3 px-4">{formattedDate}</td>
                      <td className="py-3 px-4">{s.PatientName}</td>
                      <td className="py-3 px-4">{s.PhoneNumber}</td>
                      <td className="py-3 px-4">{s.Email}</td>
                      <td className="py-3 px-4">{s.PatientMessage}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
