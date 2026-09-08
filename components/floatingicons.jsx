"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContact() {
  const whatsappNumber = "918860968260";
  const phoneNumber = "+918860968260";

  return (
    <div className="floating-contact">

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-contact-button whatsapp-button"
      >
        <MessageCircle className="floating-contact-icon" />

        <span className="floating-contact-label">
          WhatsApp
        </span>
      </a>

      {/* Call */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call us"
        className="floating-contact-button call-button"
      >
        <Phone className="floating-contact-icon" />

        <span className="floating-contact-label">
          Call Us
        </span>
      </a>

    </div>
  );
}
