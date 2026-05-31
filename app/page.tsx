import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  GraduationCap,
  Phone,
  Bus,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Building2,
  MapPin,
  Star,
  Castle,
  Map,
  Building,
  Waves,
  Landmark
} from "lucide-react"

const stats = [
  { number: "10,000+", label: "Students Placed", icon: Users },
  { number: "100+", label: "Partner Colleges", icon: Building2 },
  { number: "5", label: "States Covered", icon: MapPin },
  { number: "15+", label: "Years Experience", icon: Award },
]

const features = [
  "100% Admission Guidance",
  "Free College Visiting",
  "Expert Career Counseling",
  "End-to-End Support",
  "Scholarship Assistance",
  "Document Processing",
]

const topLocations = [
  { name: "Andhra Pradesh", icon: Map, description: "Top ranking institutions" },
  { name: "Telangana", icon: Castle, description: "Premier tech universities" },
  { name: "Bangalore", icon: Building2, description: "IT & engineering hubs" },
  { name: "Chennai", icon: Waves, description: "Prestigious universities" },
  { name: "Mumbai", icon: Building, description: "Business & tech colleges" },
  { name: "Gujarat", icon: Landmark, description: "Modern educational campuses" },
]

const testimonials = [
  {
    name: "Rahul Sharma",
    college: "Alliance University, Bengaluru",
    text: "SR NEXTGEN helped me get into my dream college. Their guidance throughout the admission process was exceptional.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    college: "Marwadi University, Gujarat",
    text: "The free college visit program helped me make an informed decision. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Karthik Reddy",
    college: "VVIT, Andhra Pradesh",
    text: "Professional team with great knowledge about various colleges. They made the entire process stress-free.",
    rating: 5,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden pt-24 pb-10 md:pt-32 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-left md:text-center max-w-4xl mx-auto flex flex-col items-start md:items-center w-full">



            {/* Logo and Brand */}
            <div className="flex flex-row items-center justify-start md:justify-center gap-3 md:gap-5 mb-5 md:mb-8 group">
              <div className="relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <img
                  src="https://res.cloudinary.com/dvp5tek75/image/upload/v1777791644/IMG_20260503_122309.jpg_etyvmd.jpg"
                  alt="SR Nextgen Education Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left justify-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none" style={{ color: "var(--primary)" }}>
                  SR NEXTGEN Education
                </h1>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-4 md:mb-6 tracking-tight text-balance leading-[1.1] md:leading-tight">
              Your Gateway to{" "}
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Top Colleges</span>{" "}
              in India
            </h2>

            {/* Trust badges - Compact on Mobile */}
            <div className="flex flex-wrap justify-start md:justify-center gap-2 md:gap-4 mb-6 md:mb-8">
              <div className="flex items-center gap-1.5 bg-card/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-border shadow-sm">
                <span className="text-primary font-bold text-xs md:text-sm">100%</span>
                <span className="text-foreground text-xs md:text-sm">Guidance</span>
              </div>
              <div className="flex items-center gap-1.5 bg-card/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-border shadow-sm">
                <span className="text-primary font-bold text-xs md:text-sm">15+</span>
                <span className="text-foreground text-xs md:text-sm">Years Exp.</span>
              </div>
              <div className="flex items-center gap-1.5 bg-card/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-border shadow-sm">
                <Bus className="w-3.5 h-3.5 text-primary" />
                <span className="text-foreground text-xs md:text-sm">Free Visits</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center justify-start md:justify-center gap-2 md:gap-4 w-full sm:w-auto mb-8 md:mb-12">
              <Link href="/contact" className="flex-1 sm:flex-none">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base px-4 md:px-8 py-5 md:py-6 h-auto rounded-xl shadow-md">
                  Apply Now
                  <ArrowRight className="ml-1.5 md:ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
              <a
                href="tel:7799478413"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-8 py-[1.15rem] md:py-5 border-2 border-primary text-foreground rounded-xl hover:bg-primary/10 transition-colors font-semibold text-sm md:text-base shadow-sm"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span>Call<span className="hidden sm:inline">: 7799478413</span></span>
              </a>
            </div>

            {/* Features Grid - Minimal on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 w-full md:max-w-2xl md:mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start md:items-center gap-2 text-foreground bg-secondary/20 p-2 md:p-3 rounded-lg border border-border/50 text-left md:text-center">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5 md:mt-0" />
                  <span className="text-xs md:text-sm font-medium leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {stats.map((stat, index) => {
              const Content = (
                <div
                  className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300 h-full w-full"
                >
                  <div className="bg-white/20 p-3 rounded-full mb-3 md:mb-4">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground mb-1 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-[0.65rem] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-primary-foreground/90 text-center">
                    {stat.label}
                  </div>
                </div>
              );

              if (stat.label === "Partner Colleges") {
                return (
                  <Link key={index} href="/colleges" className="block h-full w-full">
                    {Content}
                  </Link>
                );
              }

              return <div key={index} className="h-full w-full">{Content}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-10 md:py-16 bg-indigo-50/50 dark:bg-indigo-950/20 border-y border-indigo-100 dark:border-indigo-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4 tracking-tight">
              Our <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Services</span>
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive admission guidance for your academic journey
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <Card className="group relative overflow-hidden bg-white dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl flex flex-col cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-5 md:p-8 text-center flex flex-col h-full items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-indigo-50 dark:bg-indigo-900/30 shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 ring-1 ring-indigo-100 group-hover:ring-indigo-300 group-hover:-translate-y-1 transition-all duration-300">
                  <GraduationCap className="w-7 h-7 md:w-10 md:h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-indigo-600 transition-colors">Engineering</h3>
                <p className="text-[0.7rem] md:text-sm text-muted-foreground font-medium">B.Tech, B.E. admissions</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-white dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl flex flex-col cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-5 md:p-8 text-center flex flex-col h-full items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-indigo-50 dark:bg-indigo-900/30 shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 ring-1 ring-indigo-100 group-hover:ring-indigo-300 group-hover:-translate-y-1 transition-all duration-300">
                  <Award className="w-7 h-7 md:w-10 md:h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-indigo-600 transition-colors">Degree</h3>
                <p className="text-[0.7rem] md:text-sm text-muted-foreground font-medium">BBA, BCA, B.Com, B.Sc</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-white dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl flex flex-col cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-5 md:p-8 text-center flex flex-col h-full items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-indigo-50 dark:bg-indigo-900/30 shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 ring-1 ring-indigo-100 group-hover:ring-indigo-300 group-hover:-translate-y-1 transition-all duration-300">
                  <Building2 className="w-7 h-7 md:w-10 md:h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-indigo-600 transition-colors">PG Admissions</h3>
                <p className="text-[0.7rem] md:text-sm text-muted-foreground font-medium">M.Tech, MBA, MCA</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-white dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl flex flex-col cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-5 md:p-8 text-center flex flex-col h-full items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-indigo-50 dark:bg-indigo-900/30 shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 ring-1 ring-indigo-100 group-hover:ring-indigo-300 group-hover:-translate-y-1 transition-all duration-300">
                  <Bus className="w-7 h-7 md:w-10 md:h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-indigo-600 transition-colors">Free Visits</h3>
                <p className="text-[0.7rem] md:text-sm text-muted-foreground font-medium">Complimentary visits</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-primary text-foreground hover:bg-primary/10">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Locations Preview */}
      <section id="presence-section" className="py-10 md:py-16 bg-amber-50/50 dark:bg-amber-950/20 border-b border-amber-100 dark:border-amber-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Pan India <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Presence</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We have tie-ups with 100+ prestigious institutions across these major educational hubs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {topLocations.map((location, index) => (
              <Card key={index} className="group overflow-hidden bg-white dark:bg-amber-900/10 border-amber-100 dark:border-amber-800 hover:border-amber-300 dark:hover:border-amber-700 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl md:rounded-2xl cursor-pointer relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-4 md:p-8 flex flex-col items-center text-center relative z-10 h-full justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-50 dark:bg-amber-900/30 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-5 ring-1 ring-amber-100 group-hover:ring-amber-300 transition-all group-hover:scale-110 duration-300">
                    <location.icon className="w-6 h-6 md:w-8 md:h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-bold text-[0.95rem] md:text-xl text-foreground mb-1 md:mb-2 group-hover:text-amber-600 transition-colors">{location.name}</h3>
                  <p className="text-[0.65rem] md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-none">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-16">
            <Link href="/colleges">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 md:px-10 h-12 md:h-14 text-sm md:text-base shadow-lg hover:shadow-primary/25 transition-all">
                Explore All Partner Colleges
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 md:py-16 bg-emerald-50/50 dark:bg-emerald-950/20 border-b border-emerald-100 dark:border-emerald-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Student <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from students who achieved their dreams with our guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.college}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get expert guidance for admissions in top colleges across India. Free consultation available!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
                Get Free Counseling
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a
              href="tel:7799478413"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-lg">Call Now: 7799478413</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
