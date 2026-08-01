"use client";

import { useEffect, useSyncExternalStore } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const emptySubscribe = () => () => {};

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!mounted) return null;

    return (
        <div 
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
        >
            {/* Backdrop with Blur */}
            <div 
                className="absolute inset-0 bg-navy/80 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            />
            
            {/* Modal Content */}
            <div 
                className={`relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4 border-4 border-navy shadow-[16px_16px_0_0_rgba(11,19,43,1)] transition-transform duration-300 ${
                    isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
                }`}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b-4 border-navy p-6 flex justify-between items-center z-10">
                    <h3 className="font-heading font-black text-3xl md:text-4xl uppercase text-navy tracking-tighter">
                        {title}
                    </h3>
                    <button 
                        onClick={onClose}
                        className="w-12 h-12 flex items-center justify-center bg-orange text-navy border-2 border-navy font-black text-xl hover:bg-navy hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        X
                    </button>
                </div>
                
                {/* Body */}
                <div className="p-8 text-navy">
                    {children}
                </div>
            </div>
        </div>
    );
};
