"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building2, Sparkles, ArrowRight, FolderGit2 } from "lucide-react"

export function StickyCTA() {
  const pathname = usePathname()
  const isSoftware = pathname?.startsWith("/software")

  return (
    <div className="fixed bottom-20 md:bottom-24 left-6 z-[90] w-full max-w-fit pr-4">
      <Link href={isSoftware ? "/software/projects" : "/colleges"}>
        <div className={`group relative flex items-center gap-3 bg-gradient-to-br ${isSoftware ? "from-indigo-600/95 to-violet-600/90 shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_rgba(79,70,229,0.5)]" : "from-red-600/95 to-rose-600/90 shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)]"} backdrop-blur-2xl border border-white/30 dark:border-white/10 p-2 pl-4 pr-2 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ring-1 ring-white/20`}>
          
          {/* Animated Glow Background */}
          <div className={`absolute inset-0 bg-gradient-to-r ${isSoftware ? "from-indigo-500/30 to-indigo-500/30" : "from-red-500/30 to-red-500/30"} via-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse`}></div>
          
          {/* Sparkle Animations */}
          <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-bounce" />
          </div>

          <div className="relative z-10 flex flex-col">
            <span className="text-[0.65rem] md:text-[0.7rem] font-bold text-white/70 uppercase tracking-widest leading-none mb-1">
              {isSoftware ? "Next-Gen Software" : "Admission Open 2026-27"}
            </span>
            <span className="text-sm md:text-base font-black text-white tracking-tight leading-none">
              {isSoftware ? "Explore Our Projects" : "Explore Top Colleges"}
            </span>
          </div>

          {/* Icon with Ring Animation */}
          <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
            {isSoftware ? (
               <FolderGit2 className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            ) : (
               <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            )}
            
            {/* Moving Light Beam */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>

          {/* Right Arrow that slides in */}
          <div className="relative z-10 w-0 group-hover:w-6 overflow-hidden transition-all duration-500 flex items-center justify-center">
             <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </Link>

      {/* Decorative Ring under the button */}
      <div className={`absolute -bottom-2 left-6 w-3/4 h-1 ${isSoftware ? "bg-indigo-500/30" : "bg-red-500/30"} blur-md rounded-full group-hover:w-full transition-all duration-500`}></div>
    </div>
  )
}
