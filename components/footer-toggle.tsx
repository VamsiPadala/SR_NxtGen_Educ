"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GraduationCap, Code2 } from "lucide-react"

export function FooterToggle() {
  const pathname = usePathname()
  
  // Consider /software as the software page, and anything else as the institute page for now.
  const isSoftware = pathname?.startsWith("/software")

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[95] w-full bg-[#070112] flex items-end px-1.5 pb-[calc(env(safe-area-inset-bottom))]">
      
      {/* Educational Institute Toggle */}
      <Link 
        href="/" 
        className={`relative flex flex-1 flex-col items-center justify-center transition-all duration-300 ${
          !isSoftware 
            ? "h-[4.5rem] md:h-[5rem] bg-[#220955] rounded-t-[1.5rem] border-t-2 border-white/40 shadow-[0_-10px_30px_rgba(34,9,85,0.4)] z-10" 
            : "h-[3.5rem] md:h-[4rem] bg-[#11042c] rounded-t-2xl border-t border-white/5 opacity-70 hover:opacity-100 z-0"
        }`}
      >
        {/* Spotlight Glow for Active Tab */}
        {!isSoftware && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/40 blur-[10px] rounded-full" />
        )}
        
        <div className="relative z-10 flex flex-col items-center gap-1">
          <div className={`transition-transform duration-300 ${!isSoftware ? 'scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]' : ''}`}>
             <GraduationCap className={`w-6 h-6 md:w-7 md:h-7 ${!isSoftware ? "text-white" : "text-white/40"}`} strokeWidth={!isSoftware ? 2.5 : 1.5} />
          </div>
          <span className={`text-[0.65rem] md:text-[0.75rem] font-bold tracking-wide ${!isSoftware ? "text-white" : "text-white/40"}`}>
            Education
          </span>
        </div>
      </Link>

      {/* Software Solutions Toggle */}
      <Link 
        href="/software" 
        className={`relative flex flex-1 flex-col items-center justify-center transition-all duration-300 ${
          isSoftware 
            ? "h-[4.5rem] md:h-[5rem] bg-[#220955] rounded-t-[1.5rem] border-t-2 border-white/40 shadow-[0_-10px_30px_rgba(34,9,85,0.4)] z-10" 
            : "h-[3.5rem] md:h-[4rem] bg-[#11042c] rounded-t-2xl border-t border-white/5 opacity-70 hover:opacity-100 z-0 -ml-1 md:-ml-2"
        }`}
      >
        {/* Spotlight Glow for Active Tab */}
        {isSoftware && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/40 blur-[10px] rounded-full" />
        )}

        <div className="relative z-10 flex flex-col items-center gap-1">
          <div className={`transition-transform duration-300 ${isSoftware ? 'scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]' : ''}`}>
             <Code2 className={`w-6 h-6 md:w-7 md:h-7 ${isSoftware ? "text-white" : "text-white/40"}`} strokeWidth={isSoftware ? 2.5 : 1.5} />
          </div>
          <span className={`text-[0.65rem] md:text-[0.75rem] font-bold tracking-wide ${isSoftware ? "text-white" : "text-white/40"}`}>
            Software
          </span>
        </div>
      </Link>
    </div>
  )
}
