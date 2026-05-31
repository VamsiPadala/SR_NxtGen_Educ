import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  Globe,
  Code2,
  Database,
  Cloud,
  Layout,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2
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

const features = [
  "Agile Development Methodology",
  "Dedicated QA & Testing",
  "Post-Launch Support",
  "Scalable Architecture",
  "Premium UI/UX Standards",
  "Secure Codebase"
]

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      <Header />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto flex flex-col items-center w-full">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8 hover:bg-white/10 transition-colors">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-200">Next-Gen Software Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6">
              Build Digital <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Experiences</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed text-balance">
              Transforming your ideas into scalable, high-performance web and mobile applications with premium design and bleeding-edge technology.
            </p>

            <div className="flex flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <Link href="/contact" className="flex-1 sm:flex-none">
                <Button className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-200 text-[0.8rem] sm:text-base font-semibold px-2 sm:px-8 py-5 sm:py-6 h-auto rounded-xl sm:rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
                  Start a Project
                  <ArrowRight className="ml-1 sm:ml-2 w-3.5 h-3.5 sm:w-5 sm:h-5 inline-block" />
                </Button>
              </Link>
              <Link href="#services" className="flex-1 sm:flex-none">
                <Button variant="outline" className="w-full sm:w-auto border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white text-[0.8rem] sm:text-base font-semibold px-2 sm:px-8 py-5 sm:py-6 h-auto rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all whitespace-nowrap">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-10 md:py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Expertise</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We deliver end-to-end software solutions customized to accelerate your business growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:bg-slate-800/50 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} ${service.shadow} shadow-lg mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                
                <h3 className="text-[0.85rem] md:text-xl font-bold text-slate-100 mb-1.5 md:mb-3 group-hover:text-white transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-[0.65rem] md:text-base text-slate-400 leading-snug md:leading-relaxed">
                  {service.description}
                </p>

                {/* Floating shine effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] group-hover:animate-[shine_1s_ease-in-out]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 md:py-16 bg-slate-900/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Excellence</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              We don't just write code; we build digital ecosystems. Our approach combines rigorous engineering standards with beautiful, intuitive design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-sm md:text-base text-slate-300 font-medium leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl mb-8">
            <Code2 className="w-12 h-12 text-indigo-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to Build?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Let's turn your vision into reality. Partner with us to build software that scales and delights.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0 text-lg font-bold px-10 py-7 h-auto rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all hover:scale-105 active:scale-95">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      
      {/* Global styles for animations added specifically for software page if needed */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          100% { left: 200%; }
        }
      `}} />
    </main>
  )
}
