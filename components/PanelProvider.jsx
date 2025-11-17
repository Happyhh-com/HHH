"use client";
import { createContext, useContext, useState } from "react";

const PanelContext = createContext(null);

export function PanelProvider({ children }) {
    const [panelContent, setPanelContent] = useState(null);

    const openPanel = (content) => setPanelContent(content);
    const closePanel = () => setPanelContent(null);

    return (
        <PanelContext.Provider value={{ openPanel, closePanel, panelContent }}>
            {children}
            {panelContent && (
                <div className="fixed inset-0 z-[60] pointer-events-none">
                    <div className="absolute inset-0 pointer-events-auto" onClick={closePanel} />
                    <div className="absolute inset-x-0 top-[13vh] pointer-events-none">
                        <div className="flex justify-end pointer-events-none">
                            <div className="pointer-events-auto w-[65%] bg-white shadow-xl rounded-xl mr-5" onClick={(e) => e.stopPropagation()}>
                                {panelContent}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </PanelContext.Provider>
    );
}

export function usePanel() {
    return useContext(PanelContext);
}
