"use client";

import { useModal } from "@/components/ModalProvider";
import { useState } from "react";
import { X } from "lucide-react";

export default function AppointmentModal() {

    const { closeModal } = useModal();
    const [loading, setLoading] = useState(false);

    return (
        <>
            <button className="bg-[#AD2525] hover:bg-green-700 w-[12vw] h-[5vh] rounded-full text-sm font-bold">
                Book an Appointment
            </button>

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-lg relative animate-fade-in">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition"
                    >
                        <X size={22} />
                    </button>

                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Book an Appointment
                    </h2>

                    <form
                        // onSubmit={handleSubmit} 
                        className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                // value={formData.name}
                                // onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                // value={formData.phone}
                                // onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email ID
                            </label>
                            <input
                                type="email"
                                name="email"
                                // value={formData.email}
                                // onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                // value={formData.message}
                                // onChange={handleChange}
                                placeholder="Write your message..."
                                rows={4}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-red-700"
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