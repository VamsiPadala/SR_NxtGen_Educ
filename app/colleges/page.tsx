import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  ArrowRight,
  Building2,
  MapPin,
  GraduationCap,
  Star,
  CheckCircle2,
  Bus,
  Cpu,
  Cog,
  FlaskConical,
  Lightbulb,
  Rocket,
  Zap,
  BookOpen,
  Award,
  Landmark,
  Factory,
  Globe,
  Code,
  Microscope,
  BriefcaseBusiness,
  Building,
  School,
  University,
  Trophy,
  Target,
  Sparkles,
  type LucideIcon
} from "lucide-react"

export const metadata = {
  title: "Partner Colleges | SR NEXTGEN EDUCATION",
  description: "Explore our network of 100+ partner colleges across Gujarat, Maharashtra, Bengaluru, Tamil Nadu, and Andhra Pradesh. Engineering, Degree, and PG programs available.",
}

const autonomousColleges: {
  name: string
  location: string
  courses: string[]
  rating: number
  highlights: string[]
  icon: LucideIcon
  bgColor: string
}[] = [
    {
      name: "MVR College of Engineering & Technology",
      location: "Andhra Pradesh",
      courses: ["B.Tech", "M.Tech"],
      rating: 4.5,
      highlights: ["NAAC Accredited", "100+ Placements", "Modern Labs"],
      icon: Cpu,
      bgColor: "#f97316", // Orange
    },
    {
      name: "Vikas Engineering College",
      location: "Andhra Pradesh",
      courses: ["B.Tech", "B.Pharm"],
      rating: 4.3,
      highlights: ["Autonomous", "Industry Tie-ups", "Sports Facilities"],
      icon: Rocket,
      bgColor: "#3b82f6", // Blue
    },
    {
      name: "Amrutha Sai Engineering College",
      location: "Andhra Pradesh",
      courses: ["B.Tech", "MBA"],
      rating: 4.2,
      highlights: ["Placement Support", "Hostel Facility", "Transport"],
      icon: Lightbulb,
      bgColor: "#8b5cf6", // Violet
    },
    {
      name: "Lingayas Engineering College",
      location: "Andhra Pradesh",
      courses: ["B.Tech", "M.Tech", "MCA"],
      rating: 4.4,
      highlights: ["Research Focus", "Experienced Faculty", "Workshops"],
      icon: FlaskConical,
      bgColor: "#ec4899", // Pink
    },
    {
      name: "Aditya Engineering College",
      location: "Andhra Pradesh",
      courses: ["B.Tech", "M.Tech", "MBA"],
      rating: 4.6,
      highlights: ["Top Placements", "Modern Infrastructure", "Scholarships"],
      icon: Trophy,
      bgColor: "#10b981", // Emerald
    },
    {
      name: "KITS Engineering College",
      location: "Andhra Pradesh",
      courses: ["B.Tech", "M.Tech"],
      rating: 4.3,
      highlights: ["NBA Accredited", "Strong Alumni", "Internships"],
      icon: Cog,
      bgColor: "#06b6d4", // Cyan
    },
    {
      name: "KITE Engineering College",
      location: "Andhra Pradesh",
      courses: ["B.Tech", "MCA"],
      rating: 4.1,
      highlights: ["Affordable Fees", "Good Faculty", "Campus Placement"],
      icon: Zap,
      bgColor: "#f43f5e", // Rose
    },
    {
      name: "Pragathi Engineering College",
      location: "Andhra Pradesh",
      courses: ["B.Tech", "M.Tech", "MBA"],
      rating: 4.2,
      highlights: ["Industry Visits", "Tech Fests", "Career Guidance"],
      icon: Target,
      bgColor: "#6366f1", // Indigo
    },
  ]

const stateWiseColleges: {
  state: string
  stateIcon: LucideIcon
  description: string
  theme: {
    gradient: string
    border: string
    iconBg: string
    iconHoverBg: string
    badge: string
    hoverText: string
  }
  colleges: { name: string; city: string; courses: string[]; icon: LucideIcon; bgColor: string }[]
}[] = [
    {
      state: "Andhra Pradesh",
      stateIcon: GraduationCap,
      description: "Emerging education destination with quality institutions and affordable fees",
      theme: {
        gradient: "from-orange-500/15 via-transparent to-transparent",
        border: "hover:border-orange-500/50 hover:shadow-orange-500/5",
        iconBg: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
        iconHoverBg: "group-hover:bg-orange-500/10 text-primary group-hover:text-orange-600 dark:group-hover:text-orange-400",
        badge: "group-hover:border-orange-500/30 group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:bg-orange-500/5",
        hoverText: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
      },
    colleges: [
      { name: "Aditya University", city: "Kakinada", courses: ["Eng", "Phar", "Mgmt"], icon: Star, bgColor: "#f97316" },
      { name: "VVIT - Vasireddy Venkatadri", city: "Guntur", courses: ["Eng", "MCA", "MBA"], icon: Cpu, bgColor: "#ef4444" },
      { name: "MITS - Madanapalle", city: "Madanapalle", courses: ["Eng", "Sci", "Mgmt"], icon: Lightbulb, bgColor: "#06b6d4" },
      { name: "NRI Institute", city: "Vijayawada", courses: ["Eng", "Phar", "Mgmt"], icon: University, bgColor: "#8b5cf6" },
      { name: "MBU - Mohan Babu University", city: "Tirupati", courses: ["Eng", "Media", "Mgmt"], icon: Target, bgColor: "#ec4899" },
      { name: "KL University", city: "Vijayawada", courses: ["Eng", "Phar", "Mgmt"], icon: Award, bgColor: "#10b981" },
      { name: "SRM University AP", city: "Amaravati", courses: ["Eng", "Sci", "Mgmt"], icon: Rocket, bgColor: "#6366f1" },
      { name: "Vignan University", city: "Guntur", courses: ["Eng", "Phar", "Mgmt"], icon: Zap, bgColor: "#f43f5e" },
    ],
  },
    {
      state: "Gujarat",
      stateIcon: Landmark,
      description: "Premier institutions in western India known for innovation and entrepreneurship",
      theme: {
        gradient: "from-blue-500/15 via-transparent to-transparent",
        border: "hover:border-blue-500/50 hover:shadow-blue-500/5",
        iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        iconHoverBg: "group-hover:bg-blue-500/10 text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400",
        badge: "group-hover:border-blue-500/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-500/5",
        hoverText: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      },
    colleges: [
      { name: "Marwadi University", city: "Rajkot", courses: ["Eng", "Mgmt", "Phar"], icon: Building2, bgColor: "#2563eb" },
      { name: "Ganpat University", city: "Mehsana", courses: ["Eng", "IT", "Mgmt"], icon: Factory, bgColor: "#f59e0b" },
      { name: "PP Savani University", city: "Surat", courses: ["Eng", "Comm", "Sci"], icon: BookOpen, bgColor: "#10b981" },
      { name: "Gokul Global University", city: "Siddhpur", courses: ["Eng", "Phar", "Agri"], icon: Globe, bgColor: "#d946ef" },
      { name: "Parul University", city: "Vadodara", courses: ["Eng", "Med", "Mgmt"], icon: University, bgColor: "#6366f1" },
      { name: "LJ University", city: "Ahmedabad", courses: ["Eng", "Comm", "Arts"], icon: Award, bgColor: "#f43f5e" },
    ],
  },
    {
      state: "Maharashtra",
      stateIcon: Building,
      description: "Home to India's financial capital with world-class educational institutions",
      theme: {
        gradient: "from-purple-500/15 via-transparent to-transparent",
        border: "hover:border-purple-500/50 hover:shadow-purple-500/5",
        iconBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
        iconHoverBg: "group-hover:bg-purple-500/10 text-primary group-hover:text-purple-600 dark:group-hover:text-purple-400",
        badge: "group-hover:border-purple-500/30 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:bg-purple-500/5",
        hoverText: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
      },
    colleges: [
      { name: "Sanjay Ghodawat University", city: "Kolhapur", courses: ["Eng", "Mgmt", "Law"], icon: Trophy, bgColor: "#4f46e5" },
      { name: "Sandip University", city: "Nashik", courses: ["Eng", "Phar", "Mgmt"], icon: Rocket, bgColor: "#06b6d4" },
      { name: "MIT World Peace University", city: "Pune", courses: ["Eng", "Mgmt", "Des"], icon: Globe, bgColor: "#f97316" },
      { name: "Symbiosis University", city: "Pune", courses: ["Mgmt", "Law", "Media"], icon: BriefcaseBusiness, bgColor: "#10b981" },
      { name: "D Y Patil University", city: "Mumbai", courses: ["Eng", "Med", "Mgmt"], icon: Microscope, bgColor: "#ef4444" },
      { name: "Amity University", city: "Mumbai", courses: ["Eng", "Mgmt", "Sci"], icon: Sparkles, bgColor: "#ec4899" },
    ],
  },
    {
      state: "Bengaluru (Karnataka)",
      stateIcon: Code,
      description: "Silicon Valley of India with top-ranked technical and management institutions",
      theme: {
        gradient: "from-emerald-500/15 via-transparent to-transparent",
        border: "hover:border-emerald-500/50 hover:shadow-emerald-500/5",
        iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        iconHoverBg: "group-hover:bg-emerald-500/10 text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
        badge: "group-hover:border-emerald-500/30 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:bg-emerald-500/5",
        hoverText: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
      },
    colleges: [
      { name: "Alliance University", city: "Bengaluru", courses: ["Eng", "Mgmt", "Law"], icon: Target, bgColor: "#059669" },
      { name: "Jain University", city: "Bengaluru", courses: ["Eng", "Mgmt", "Sci"], icon: Lightbulb, bgColor: "#f43f5e" },
      { name: "RV University", city: "Bengaluru", courses: ["Eng", "Des", "Arts"], icon: Cpu, bgColor: "#3b82f6" },
      { name: "Ramaiah University", city: "Bengaluru", courses: ["Eng", "Mgmt", "Med"], icon: Microscope, bgColor: "#ea580c" },
      { name: "Presidency University", city: "Bengaluru", courses: ["Eng", "Mgmt", "Law"], icon: Landmark, bgColor: "#8b5cf6" },
      { name: "Dayananda Sagar University", city: "Bengaluru", courses: ["Eng", "Phar", "Mgmt"], icon: FlaskConical, bgColor: "#06b6d4" },
      { name: "CMR University", city: "Bengaluru", courses: ["Eng", "Mgmt", "Arch"], icon: Building2, bgColor: "#ec4899" },
      { name: "PES University", city: "Bengaluru", courses: ["Eng", "Mgmt", "Sci"], icon: Zap, bgColor: "#10b981" },
    ],
  },
    {
      state: "Tamil Nadu",
      stateIcon: School,
      description: "Educational hub with a rich legacy of technical excellence",
      theme: {
        gradient: "from-rose-500/15 via-transparent to-transparent",
        border: "hover:border-rose-500/50 hover:shadow-rose-500/5",
        iconBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
        iconHoverBg: "group-hover:bg-rose-500/10 text-primary group-hover:text-rose-600 dark:group-hover:text-rose-400",
        badge: "group-hover:border-rose-500/30 group-hover:text-rose-600 dark:group-hover:text-rose-400 group-hover:bg-rose-500/5",
        hoverText: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
      },
    colleges: [
      { name: "Vel Tech University", city: "Chennai", courses: ["Eng", "Sci", "Mgmt"], icon: Rocket, bgColor: "#e11d48" },
      { name: "Bharath University", city: "Chennai", courses: ["Eng", "Med", "Mgmt"], icon: Award, bgColor: "#1d4ed8" },
      { name: "AVIT - Aarupadai Veedu", city: "Chennai", courses: ["Eng", "Phar", "Arch"], icon: Building, bgColor: "#059669" },
      { name: "MGR University", city: "Chennai", courses: ["Eng", "Med", "Arts"], icon: Trophy, bgColor: "#f59e0b" },
      { name: "Dhanalakshmi University", city: "Chennai", courses: ["Eng", "Sci", "Mgmt"], icon: Cog, bgColor: "#8b5cf6" },
      { name: "SRM University", city: "Chennai", courses: ["Eng", "Med", "Mgmt"], icon: Sparkles, bgColor: "#ea580c" },
      { name: "VIT University", city: "Vellore", courses: ["Eng", "Sci", "Mgmt"], icon: Globe, bgColor: "#10b981" },
      { name: "SASTRA University", city: "Thanjavur", courses: ["Eng", "Law", "Mgmt"], icon: BookOpen, bgColor: "#3b82f6" },
    ],
  },
  ]

const courseTypes = [
  { name: "Engineering", count: "50+ Colleges", icon: GraduationCap },
  { name: "Management", count: "40+ Colleges", icon: Building2 },
  { name: "Pharmacy", count: "25+ Colleges", icon: Star },
  { name: "Medical", count: "15+ Colleges", icon: CheckCircle2 },
]

export default function CollegesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-6 leading-tight">
              Partner <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Colleges</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-6 md:mb-8 px-2 md:px-0">
              Explore our network of 100+ prestigious institutions across 5 states. From engineering to management, find the perfect college for your future.
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 mb-6 md:mb-8">
              {courseTypes.map((course, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-card px-2 py-2.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-full border border-border/50 shadow-sm text-center hover:border-primary/30 transition-colors">
                  <course.icon className="w-4 h-4 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-foreground font-semibold text-[0.75rem] sm:text-sm">{course.name}</span>
                  <span className="text-muted-foreground text-[0.6rem] sm:text-sm bg-secondary/50 sm:bg-transparent px-1.5 rounded sm:px-0">{course.count}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full px-4 sm:px-0">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-11 md:h-14 px-6 md:px-8 text-sm md:text-base rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                  Get Admission Guidance
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
              <a href="tel:7799478413" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-primary/50 text-foreground hover:bg-primary/10 h-11 md:h-14 px-6 md:px-8 text-sm md:text-base rounded-full">
                  <Phone className="mr-2 w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  Call: 7799478413
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Autonomous Engineering Colleges */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Engineering <span className="text-primary">AUTONOMOUS</span> Colleges
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Top autonomous engineering colleges with excellent placement records
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-5">
            {autonomousColleges.map((college, index) => (
              <Card key={index} className="border-none shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden group" style={{ backgroundColor: college.bgColor }}>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-4 md:p-6 flex flex-col h-full relative z-10">
                  {/* Header row: icon + rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                      <college.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center gap-1 text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-full flex-shrink-0 text-white font-bold">
                      <Star className="w-3 h-3 fill-white text-white" />
                      <span>{college.rating}</span>
                    </div>
                  </div>
                  {/* Name + location */}
                  <h3 className="font-bold text-base md:text-lg text-white leading-tight mb-1 group-hover:underline decoration-white/30 underline-offset-4">{college.name}</h3>
                  <p className="text-white/80 text-xs flex items-center gap-1 mb-4">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="font-medium">{college.location}</span>
                  </p>
                  {/* Course badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {college.courses.map((course, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg text-[0.65rem] font-bold tracking-wide uppercase">
                        {course}
                      </span>
                    ))}
                  </div>
                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-white/20 mt-auto">
                    {college.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                        <span className="leading-tight font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* State-wise Colleges Display All */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Top Universities <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Across India</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore colleges by state and find the perfect institution for your goals
            </p>
          </div>

          <div className="space-y-12 md:space-y-16 max-w-7xl mx-auto">
            {stateWiseColleges.map((state, index) => (
              <div key={index} className="flex flex-col space-y-6">
                <div className="flex items-center gap-3 md:gap-4 border-b border-border/50 pb-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${state.theme.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <state.stateIcon className="w-5 h-5 md:w-6 md:h-6 currentColor" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                      {state.state}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{state.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-6">
                  {state.colleges.map((college, idx) => (
                    <Card key={idx} className={`group border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-xl md:rounded-2xl flex flex-col overflow-hidden relative cursor-default h-full`} style={{ backgroundColor: college.bgColor }}>
                      <div className={`absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <CardContent className="p-3 md:p-6 flex flex-col h-full relative z-10">
                        {/* Icon */}
                        <div className={`w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ring-1 ring-white/30 mb-2 md:mb-4 transition-all duration-300`}>
                          <college.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                        </div>
                        {/* Name */}
                        <h4 className={`font-bold text-[0.72rem] md:text-lg text-white leading-tight mb-1 md:mb-2 group-hover:underline decoration-white/30 underline-offset-4 line-clamp-2`}>{college.name}</h4>
                        {/* City */}
                        <p className="text-white/80 text-[0.6rem] md:text-sm flex items-center gap-1 mb-2 md:mb-4 font-medium">
                          <MapPin className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 flex-shrink-0" />
                          <span className="truncate">{college.city}</span>
                        </p>
                        {/* Course badges */}
                        <div className="flex flex-wrap gap-1 mt-auto pt-2 md:pt-4 border-t border-white/20">
                          {college.courses.map((course, cidx) => (
                            <span key={cidx} className={`px-1 py-0.5 md:px-2 md:py-0.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded md:rounded-lg text-[0.55rem] md:text-[0.7rem] font-bold tracking-wide uppercase`}>
                              {course}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Can&apos;t Find Your College?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We have connections with many more institutions. Contact us to discuss your specific requirements and we&apos;ll help you find the perfect match.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Personalized Guidance
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:7799478413">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8">
                <Phone className="mr-2 w-4 h-4" />
                Call: 7799478413
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
