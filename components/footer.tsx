"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GraduationCap, Phone, MapPin, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"

export function Footer() {
  const pathname = usePathname()
  const isSoftware = pathname?.startsWith("/software")

  const quickLinks = isSoftware 
    ? [
        { name: "Home", href: "/software" },
        { name: "Services", href: "/software/services" },
        { name: "Projects", href: "/software/projects" },
        { name: "About Us", href: "/software/about" },
        { name: "Contact", href: "/software/contact" }
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Colleges", href: "/colleges" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" }
      ];

  const ourServices = isSoftware
    ? [
        "Web App Development",
        "Mobile App Development",
        "UI/UX Design",
        "Custom Software",
        "Cloud Architecture",
        "Database Solutions"
      ]
    : [
        "Engineering Admissions",
        "Degree Programs",
        "PG Admissions",
        "Autonomous Colleges",
        "Career Counseling",
        "Free College Visits"
      ];

  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8">
          {/* Brand Card */}
          <div className="col-span-2 md:col-span-1 bg-card/80 border border-border/50 p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <Link href="/" className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 group transition-transform">
              <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0 rounded-md overflow-hidden shadow-sm ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <img 
                  src="https://res.cloudinary.com/dvp5tek75/image/upload/v1777791644/IMG_20260503_122309.jpg_etyvmd.jpg" 
                  alt="SR Nextgen Education Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm md:text-lg font-extrabold tracking-tight leading-none">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                    {isSoftware ? "SR SOFTWARE" : "SR NEXTGEN"}
                  </span>
                </span>
                <span className="text-[0.55rem] md:text-[0.65rem] font-bold tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
                  {isSoftware ? "Development" : "Education"}
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-xs md:text-sm mb-5 leading-relaxed">
              {isSoftware 
                ? "Your trusted partner for building scalable, high-performance software and mobile applications."
                : "Your trusted partner for college admissions across India. Expert guidance for a brighter future."}
            </p>
            <div className="flex items-center gap-2.5">
              <a href="#" className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="https://wa.me/917799478413" className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links Card */}
          <div className="col-span-1 bg-card/80 border border-border/50 p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <h4 className="font-bold text-foreground mb-3 md:mb-4 text-xs md:text-base uppercase tracking-wide border-b border-border/50 pb-2">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground text-[0.7rem] md:text-sm">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors block py-0.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services Card */}
          <div className="col-span-1 bg-card/80 border border-border/50 p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <h4 className="font-bold text-foreground mb-3 md:mb-4 text-xs md:text-base uppercase tracking-wide border-b border-border/50 pb-2">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground text-[0.75rem] md:text-sm">
              {ourServices.map(service => (
                <li key={service} className="py-0.5 leading-tight">{service}</li>
              ))}
            </ul>
          </div>
          
          {/* Contact Card */}
          <div className="col-span-2 md:col-span-1 bg-card/80 border border-border/50 p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <h4 className="font-bold text-foreground mb-3 md:mb-4 text-xs md:text-base uppercase tracking-wide border-b border-border/50 pb-2">Contact Us</h4>
            <ul className="space-y-3 text-[0.7rem] md:text-sm">
              <li className="flex items-center gap-2.5 text-muted-foreground group">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <a href="tel:7799478413" className="hover:text-primary transition-colors font-medium">7799478413</a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground group">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="truncate font-medium">srnextgeneducation@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground group">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="font-medium leading-tight">Annavaram, Kakinada<br /><span className="text-[0.65rem] text-muted-foreground/80 block mt-1">Andhra Pradesh</span></span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-muted-foreground text-sm font-medium">
                © 2026 {isSoftware ? "SR SOFTWARE DEVELOPMENT" : "SR NEXTGEN EDUCATION"}. All rights reserved.
              </p>
              <div className="flex items-center gap-1.5 text-[0.7rem] font-bold text-muted-foreground/60 uppercase tracking-[0.2em]">
                <span>Expert Guidance</span>
                <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                <span>Trusted Support</span>
                <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                <span>Bright Future</span>
              </div>
            </div>
            
            <div className="group flex flex-wrap items-center justify-center md:justify-end gap-2 px-5 py-2.5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl md:rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-500">
              <span className="text-xs md:text-sm text-muted-foreground font-medium">Design & Develop by</span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://padalavamsi.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group/link"
                >
                  <span className="text-sm md:text-base font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-500 to-primary bg-[length:200%_auto] animate-gradient-x hover:scale-105 transition-transform inline-block">
                    Vamsi_Leo
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-500 rounded-full"></span>
                </a>
                <span className="text-muted-foreground/40 font-bold">&</span>
                <a 
                  href="https://ravibabu.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group/link"
                >
                  <span className="text-sm md:text-base font-black bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500 bg-[length:200%_auto] animate-gradient-x hover:scale-105 transition-transform inline-block">
                    Ravikolla
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 group-hover/link:w-full transition-all duration-500 rounded-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
