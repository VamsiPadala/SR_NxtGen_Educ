"use client"

import { useState } from "react"
import { MessageCircle, Phone, Mail, MessageSquare, ChevronLeft } from "lucide-react"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const contacts = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
      label: "WhatsApp",
      href: "https://wa.me/917799478413",
      color: "hover:bg-white/20",
    },
    {
      icon: "https://img.icons8.com/color/96/phone.png",
      label: "Call",
      href: "tel:7799478413",
      color: "hover:bg-white/20",
    },
    {
      icon: "https://img.icons8.com/color/96/gmail-new.png",
      label: "Email",
      href: "mailto:contact@srnextgen.com",
      color: "hover:bg-white/20",
    },
    {
      icon: "https://img.icons8.com/color/96/chat--v1.png",
      label: "Chat",
      href: "/contact",
      color: "hover:bg-white/20",
    },
  ]

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-end">
      {/* Container for the whole widget - Slimmer and translucent red */}
      <div className={`flex flex-col items-center bg-red-600/90 dark:bg-red-500/80 backdrop-blur-md text-white shadow-2xl transition-all duration-500 ease-in-out border-l border-y border-white/20 ${
        isOpen ? "rounded-l-2xl py-2 w-10 md:w-12" : "rounded-l-lg py-4 w-7 md:w-8"
      }`}>
        
        {/* Toggle Button - Slimmer */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center transition-all duration-300 ${
            isOpen ? "mb-4 h-8" : "h-14 md:h-16 w-full"
          }`}
          aria-label="Toggle Contact Menu"
        >
          <ChevronLeft className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Icons - Line by line, tightly packed */}
        <div className={`flex flex-col gap-1.5 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300 ${contact.color} hover:text-white rounded-lg group relative`}
              title={contact.label}
            >
              <img src={contact.icon} alt={contact.label} className="w-5 h-5 md:w-6 md:h-6 object-contain drop-shadow-md" />
              {/* Tooltip on hover */}
              <span className="absolute right-full mr-2 px-2 py-1 bg-black/80 backdrop-blur-sm text-[0.6rem] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {contact.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
