






import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactPopup from "./ContactPopup";

const DELAY = 120000; // 2 minutes
// Jin pages par popup nahi dikhana
const HIDE_ON = ["/thank-you"];

const AutoContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const hidden = HIDE_ON.includes(pathname.replace(/\/$/, "") || "/");

  useEffect(() => {
    // Thank-you page par popup band rakho aur timer mat chalao
    if (hidden) {
      setIsOpen(false);
      return;
    }

    // Popup band hai to 5 second baad kholo
    if (isOpen) return;
    const timer = setTimeout(() => setIsOpen(true), DELAY);
    return () => clearTimeout(timer);
  }, [isOpen, hidden]);

  if (hidden) return null;

  return <ContactPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export default AutoContactPopup;