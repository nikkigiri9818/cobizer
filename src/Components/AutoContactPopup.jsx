import React, { useState, useEffect } from "react";
import ContactPopup from "./ContactPopup";


const DELAY = 5000; // 5 seconds

const AutoContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Popup band hai to 5 second baad kholo
    if (isOpen) return;
    const timer = setTimeout(() => setIsOpen(true), DELAY);
    return () => clearTimeout(timer);
  }, [isOpen]);

  return <ContactPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export default AutoContactPopup;