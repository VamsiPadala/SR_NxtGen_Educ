"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const educationLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Colleges", href: "/colleges" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const softwareLinks = [
  { name: "Home", href: "/software" },
  { name: "Services", href: "/software/services" },
  { name: "Projects", href: "/software/projects" },
  { name: "About", href: "/software/about" },
  { name: "Contact", href: "/software/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isSoftware = pathname?.startsWith("/software")
  const activeLinks = isSoftware ? softwareLinks : educationLinks;

  return (
    <>
      {/* ── Navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="w-9 h-9 flex-shrink-0 rounded-lg overflow-hidden shadow ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <img
                  src="https://res.cloudinary.com/dvp5tek75/image/upload/v1777791644/IMG_20260503_122309.jpg_etyvmd.jpg"
                  alt="SR Nextgen Education Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tight" style={{ color: "#004aad" }}>
                {isSoftware ? "SR Software Development" : "SR NEXTGEN Education"}
              </span>
            </Link>

            {/* Desktop nav (lg+) */}
            <nav className="hidden lg:flex items-center gap-6">
              {activeLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${pathname === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA (lg+) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:7799478413"
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">7799478413</span>
              </a>
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
                  Contact Now
                </Button>
              </Link>
            </div>

            {/* Hamburger (below lg) */}
            <button
              className="lg:hidden p-2 -mr-1 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Admissions Marquee Banner (Below header) ── */}
      <div
        className="fixed left-0 right-0 z-[40] overflow-hidden shadow-sm"
        style={{ backgroundColor: isSoftware ? "#4f46e5" : "#dc2626", height: "30px", top: "64px" }}
      >
        <div className="marquee-track flex items-center h-full">
          <span className="marquee-content text-white text-sm font-bold">
            {isSoftware 
              ? "💻 We are ready to develop software products as per your instructions 🚀 &nbsp;|&nbsp; 💻 We are ready to develop software products as per your instructions 🚀 &nbsp;|&nbsp; 💻 We are ready to develop software products as per your instructions 🚀 &nbsp;|&nbsp; "
              : "🎓 Admissions Open 2026-27 &nbsp;|&nbsp; 🎓 Admissions Open 2026-27 &nbsp;|&nbsp; 🎓 Admissions Open 2026-27 &nbsp;|&nbsp; 🎓 Admissions Open 2026-27 &nbsp;|&nbsp; 🎓 Admissions Open 2026-27 &nbsp;|&nbsp; 🎓 Admissions Open 2026-27 &nbsp;|&nbsp;"}
          </span>
          <span className="marquee-content text-white text-sm font-bold" aria-hidden="true">
            {isSoftware 
              ? "💻 We are ready to develop software products as per your instructions 🚀 &nbsp;|&nbsp; 💻 We are ready to develop software products as per your instructions 🚀 &nbsp;|&nbsp; 💻 We are ready to develop software products as per your instructions 🚀 &nbsp;|&nbsp; "
              : "🎓 Admissions Open 2026-27 &nbsp;|&nbsp; 🎓 Admissions Open 2026-27 &nbsp;|&nbsp; 🎓 Admissions Open 2026-27 &nbsp;|&nbsp; 🎓 Admissions Open 2026-27 &nbsp;|&nbsp; 🎓 Admissions Open 2026-27 &nbsp;|&nbsp; 🎓 Admissions Open 2026-27 &nbsp;|&nbsp;"}
          </span>
        </div>
      </div>

      {/* ── Right-side Half-screen Drawer ── */}
      {mobileMenuOpen && (
        <>
          {/* Dark backdrop — clicking closes the drawer */}
          <div
            className="lg:hidden fixed inset-0 z-[199]"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel — right 72% of screen, max 320px */}
          <div
            className="lg:hidden fixed top-0 right-0 bottom-0 z-[200] w-[72%] max-w-xs flex flex-col overflow-y-auto shadow-2xl"
            style={{
              backgroundColor: "var(--card)",
              borderLeft: "1px solid var(--border)",
              borderRadius: "1.25rem 0 0 1.25rem",
              animation: "slideInRight 0.22s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {/* Drawer top: logo + close */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md overflow-hidden ring-1 ring-primary/20 shadow">
                  <img
                    src="https://res.cloudinary.com/dvp5tek75/image/upload/v1777791644/IMG_20260503_122309.jpg_etyvmd.jpg"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-base font-black tracking-tight" style={{ color: "#004aad" }}>
                  {isSoftware ? "SR Software Development" : "SR NEXTGEN Education"}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full transition-colors"
                style={{ backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col px-4 pt-3 gap-0.5 flex-1">
              {activeLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center py-3 px-4 rounded-xl text-base transition-all"
                  style={
                    pathname === link.href
                      ? {
                        color: "var(--primary)",
                        backgroundColor: "var(--secondary)",
                        fontWeight: 700,
                      }
                      : {
                        color: "var(--foreground)",
                        fontWeight: 600,
                      }
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div
              className="px-4 pb-8 pt-4 flex flex-col gap-3"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <a
                href="tel:7799478413"
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-colors"
                style={{
                  backgroundColor: "var(--secondary)",
                  color: "var(--foreground)",
                }}
              >
                <Phone className="w-4 h-4" style={{ color: "var(--primary)" }} />
                7799478413
              </a>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full h-12 rounded-xl text-sm font-bold shadow-lg">
                  Contact Now
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Keyframe + Marquee animation */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 22s linear infinite;
        }
        .marquee-content {
          white-space: nowrap;
          padding: 0 2rem;
        }
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}
