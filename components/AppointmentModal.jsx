"use client";

import { useModal } from "@/components/ModalProvider";
import { useState } from "react";
import { X } from "lucide-react";

export default function AppointmentModal() {
  const { closeModal } = useModal();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const payload =  {
        id: 0,
        PatientName: formData.get("name"),
        PhoneNumber: formData.get("phone"),
        Email: formData.get("email"),
        PatientMessage: formData.get("message"),
        createdDateTime: new Date().toISOString(),
      };

    try {
      const res = await fetch("https://happyhealthyhospital-auh0b2dsctfab7bf.canadacentral-01.azurewebsites.net/Appointment/postAppointmentDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit appointment");
      }

      await res.json();
      closeModal();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="bg-[#AD2525] hover:bg-green-700 w-[12vw] h-[5vh] rounded-full text-sm font-bold text-white">
        Book an Appointment
      </button>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-lg relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition"
          >
            <X size={22} />
          </button>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Book an Appointment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-red-700"
              } text-white font-semibold py-2 rounded-lg transition`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
