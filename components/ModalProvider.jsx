"use client";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (component) => setModalContent(component);
    const closeModal = () => setModalContent(null);

    return (
        <ModalContext.Provider value={{ openModal, closeModal, modalContent }}>
            {children}
            {modalContent}
        </ModalContext.Provider>
    );
}

export function useModal() {
  return useContext(ModalContext);
}