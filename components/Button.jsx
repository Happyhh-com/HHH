"use client";

import React, { useState } from "react";

const ButtonWithModal = ({ className = "", buttonText = "Open Modal", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={handleOpen}
        className={`px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
      >
        {buttonText}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Modal content passed as children */}
            <div className="mt-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonWithModal;
