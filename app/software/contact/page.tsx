import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function SoftwareContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      <Header />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Connect</span>
            </h1>
            <p className="text-lg text-slate-400">
              Ready to start your next software project? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Call Us</p>
                      <a href="tel:7799478413" className="text-slate-400 hover:text-indigo-400 transition-colors">7799478413</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Email Us</p>
                      <a href="mailto:srnextgeneducation@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors">srnextgeneducation@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Visit Us</p>
                      <p className="text-slate-400">Annavaram, Kakinada<br/>Andhra Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-400">First Name</label>
                    <input type="text" className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-400">Last Name</label>
                    <input type="text" className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-400">Email Address</label>
                  <input type="email" className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="john@company.com" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-400">Project Details</label>
                  <textarea rows={4} className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold h-12 rounded-xl mt-4">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
