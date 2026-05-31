import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Users, Rocket, Target } from "lucide-react"

export default function SoftwareAboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Digital Futures</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            SR Software Development is an elite engineering division dedicated to transforming complex business challenges into elegant, scalable software solutions.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 relative z-10 bg-slate-900/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              { icon: Code2, title: "Clean Code", desc: "We adhere to rigorous engineering standards and clean architecture." },
              { icon: Users, title: "User-Centric", desc: "Beautiful interfaces designed around real user needs." },
              { icon: Rocket, title: "Scalability", desc: "Built to handle massive growth from day one." },
              { icon: Target, title: "Delivery", desc: "On-time execution with transparent agile sprints." }
            ].map((value, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-slate-400">{value.desc}</p>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Story / Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Born out of a passion for technology, we set out to bridge the gap between business ideas and technical execution. We believe that great software shouldn't just function—it should delight users and drive measurable growth.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you are a rising startup looking for an MVP, or an established enterprise needing a complete digital overhaul, our team of seasoned engineers and designers are ready to bring your vision to life.
              </p>
            </div>
            <div className="relative">
               <div className="aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-white/10 p-4">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                   alt="Team collaborating" 
                   className="w-full h-full object-cover rounded-2xl opacity-70"
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
