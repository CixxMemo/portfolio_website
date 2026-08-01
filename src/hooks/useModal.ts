import { useState, useCallback } from "react";

export function useModal<T = unknown>() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<T | null>(null);

    const openModal = useCallback((modalData?: T) => {
        if (modalData) setData(modalData);
        setIsOpen(true);
        // Prevent body scroll when modal is open
        if (typeof window !== "undefined") {
            document.body.style.overflow = "hidden";
        }
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        setTimeout(() => setData(null), 300); // Wait for transition
        // Restore body scroll
        if (typeof window !== "undefined") {
            document.body.style.overflow = "unset";
        }
    }, []);

    return {
        isOpen,
        data,
        openModal,
        closeModal,
    };
}
