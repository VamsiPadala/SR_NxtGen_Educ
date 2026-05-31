import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  Globe,
  Code2,
  Database,
  Cloud,
  Layout,
  ArrowRight
} from "lucide-react"

const services = [
  {
    title: "Mobile App Development",
    description: "Native and cross-platform apps that deliver seamless experiences.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Web Application Dev",
    description: "Scalable, high-performance web applications tailored to your needs.",
    icon: Globe,
    color: "from-purple-500 to-indigo-500",
    shadow: "shadow-purple-500/20"
  },
  {
    title: "UI/UX Design",
    description: "Intuitive, premium user interfaces designed for engagement.",
    icon: Layout,
    color: "from-pink-500 to-rose-400",
    shadow: "shadow-pink-500/20"
  },
  {
    title: "Custom Software",
    description: "Bespoke software solutions solving complex business problems.",
    icon: Code2,
    color: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-500/20"
  },
  {
    title: "Cloud Architecture",
    description: "Secure, reliable, and scalable cloud infrastructure deployment.",
    icon: Cloud,
    color: "from-amber-500 to-orange-400",
    shadow: "shadow-amber-500/20"
  },
  {
    title: "Database Solutions",
    description: "Optimized data structures and secure database management.",
    icon: Database,
    color: "from-red-500 to-rose-600",
    shadow: "shadow-red-500/20"
  }
]

export default function SoftwareServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      <Header />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Expertise</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed text-balance">
              We deliver end-to-end software solutions customized to accelerate your business growth. From mobile apps to massive cloud infrastructures, we build it all.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-10 hover:bg-slate-800/50 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center bg-gradient-to-br ${service.color} ${service.shadow} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Floating shine effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] group-hover:animate-[shine_1s_ease-in-out]" />
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/software/contact">
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0 text-lg font-bold px-10 py-7 h-auto rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all hover:scale-105 active:scale-95">
                Discuss Your Requirements
                <ArrowRight className="ml-2 w-5 h-5 inline-block" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          100% { left: 200%; }
        }
      `}} />
    </main>
  )
}
