import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, FolderGit2, Smartphone, Monitor, Database, ShieldAlert, ShoppingBag, Leaf, Building2, Library, BookOpen } from "lucide-react"

const projects = [
  {
    title: "School ERP System",
    description: "A comprehensive enterprise resource planning solution tailored for educational institutions to manage administration, attendance, and grading.",
    icon: Building2,
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    title: "Jago App (Bike Taxi)",
    description: "A fast and reliable bike taxi booking application with real-time tracking, secure payments, and dynamic pricing.",
    icon: Smartphone,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Books Management",
    description: "A digital library and inventory system for tracking book issues, returns, and digital catalogs effortlessly.",
    icon: Library,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "SR Education App",
    description: "A dedicated mobile platform for SR NextGen Education to facilitate online learning and student-teacher communication.",
    icon: BookOpen,
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Akshaya Educ Platform",
    description: "An e-learning ecosystem featuring video courses, live classes, and interactive assessments.",
    icon: Monitor,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Woodworks Booking",
    description: "A specialized booking and e-commerce platform for custom woodworking and furniture services.",
    icon: FolderGit2,
    gradient: "from-amber-500 to-orange-500"
  },
  {
    title: "Clothing E-commerce",
    description: "A modern, high-performance online fashion store with advanced filtering, cart management, and payment gateways.",
    icon: ShoppingBag,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Deepfake Recognition",
    description: "An advanced AI-powered tool designed to detect and flag manipulated media and deepfake videos with high accuracy.",
    icon: ShieldAlert,
    gradient: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "Farm Product Booking",
    description: "An agricultural marketplace app connecting local farmers directly with consumers for fresh produce delivery.",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "College Complaints",
    description: "A streamlined ticketing system for college campuses to handle student grievances and facility issues efficiently.",
    icon: Database,
    gradient: "from-slate-500 to-zinc-500"
  }
]

export default function SoftwareProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30 flex flex-col">
      <Header />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Projects</span>
          </h1>
          <p className="text-lg text-slate-400 mb-6">
            Explore our diverse portfolio of software solutions, crafted with precision and cutting-edge technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="flex-1 w-full bg-slate-950 relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:bg-slate-800/60 transition-all duration-300 overflow-hidden flex flex-col h-full shadow-lg"
              >
                {/* Subtle Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
                
                {/* Icon Container */}
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center bg-gradient-to-br ${project.gradient} shadow-lg mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                
                <h3 className="text-sm md:text-xl font-bold text-slate-100 mb-2 group-hover:text-white transition-colors line-clamp-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-[0.65rem] md:text-sm text-slate-400 leading-snug md:leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
