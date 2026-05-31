import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  GraduationCap, 
  Phone, 
  Bus, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Building2,
  FileText,
  Users,
  BookOpen,
  Briefcase,
  Target,
  Shield,
  Clock,
  HeartHandshake
} from "lucide-react"

export const metadata = {
  title: "Our Services | SR NEXTGEN EDUCATION",
  description: "Comprehensive admission guidance services for Engineering, Degree, and PG programs across India. Free college visits, expert counseling, and end-to-end support.",
}

const mainServices = [
  {
    icon: GraduationCap,
    title: "Engineering Admissions",
    description: "Get admission in top engineering colleges across India for B.Tech, B.E., and other technical programs.",
    features: [
      "B.Tech / B.E. Programs",
      "Computer Science & IT",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electronics & Communication",
      "Electrical Engineering",
      "Autonomous College Options",
      "University Affiliated Colleges",
    ],
  },
  {
    icon: Award,
    title: "Degree Programs",
    description: "Comprehensive guidance for undergraduate degree programs in various disciplines.",
    features: [
      "BBA - Business Administration",
      "BCA - Computer Applications",
      "B.Com - Commerce",
      "B.Sc - Sciences",
      "BA - Arts & Humanities",
      "B.Pharm - Pharmacy",
      "Agriculture Courses",
      "Paramedical Courses",
    ],
  },
  {
    icon: Building2,
    title: "PG Admissions",
    description: "Expert guidance for postgraduate programs including MBA, M.Tech, MCA, and more.",
    features: [
      "MBA - Business Administration",
      "M.Tech - Technology",
      "MCA - Computer Applications",
      "M.Com - Commerce",
      "M.Sc - Sciences",
      "M.Pharm - Pharmacy",
      "Executive Programs",
      "Distance Education Options",
    ],
  },
  {
    icon: Bus,
    title: "Free College Visits",
    description: "We arrange complimentary visits to colleges so you can make informed decisions.",
    features: [
      "Campus Tour",
      "Faculty Interaction",
      "Infrastructure Review",
      "Hostel Facilities Check",
      "Lab & Library Visit",
      "Student Interaction",
      "Placement Cell Visit",
      "Transportation Provided",
    ],
  },
]

const additionalServices = [
  {
    icon: FileText,
    title: "Document Processing",
    description: "Complete assistance with all documentation required for admissions including verification and attestation.",
  },
  {
    icon: BookOpen,
    title: "Course Selection",
    description: "Expert guidance to help you choose the right course based on your interests, aptitude, and career goals.",
  },
  {
    icon: Users,
    title: "Career Counseling",
    description: "One-on-one counseling sessions to understand your strengths and align them with the best career paths.",
  },
  {
    icon: Briefcase,
    title: "Placement Guidance",
    description: "Information about placement records, recruiting companies, and average packages at various colleges.",
  },
  {
    icon: Target,
    title: "Scholarship Assistance",
    description: "Help in identifying and applying for various scholarships to reduce your financial burden.",
  },
  {
    icon: HeartHandshake,
    title: "Parent Counseling",
    description: "Special sessions for parents to address their concerns and help them make informed decisions.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Free counseling session to understand your academic background, interests, and career aspirations.",
  },
  {
    step: "02",
    title: "College Shortlisting",
    description: "Based on your preferences, we shortlist the best colleges that match your requirements and budget.",
  },
  {
    step: "03",
    title: "College Visit",
    description: "Arrange free visits to shortlisted colleges for campus tour and faculty interaction.",
  },
  {
    step: "04",
    title: "Application Process",
    description: "Complete assistance with application forms, documentation, and fee payment.",
  },
  {
    step: "05",
    title: "Admission Confirmation",
    description: "Follow up with colleges and ensure smooth admission confirmation.",
  },
  {
    step: "06",
    title: "Post-Admission Support",
    description: "Assistance with hostel allotment, transport, and settling into college life.",
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "15+ Years Experience",
    description: "Trusted by thousands of students and parents across India.",
  },
  {
    icon: Building2,
    title: "100+ Partner Colleges",
    description: "Strong network with top institutions across 5 states.",
  },
  {
    icon: Users,
    title: "10,000+ Students Placed",
    description: "Successful track record of helping students achieve their dreams.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round the clock assistance throughout your admission journey.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive admission guidance and support for your educational journey. From course selection to college admission, we are with you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Free Counseling
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:7799478413">
                <Button size="lg" variant="outline" className="border-primary text-foreground hover:bg-primary/10">
                  <Phone className="mr-2 w-4 h-4" />
                  7799478413
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Admission <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Services</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert guidance for all types of educational programs
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 md:gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-card to-secondary/30 border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-xl md:rounded-2xl flex flex-col">
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative p-3 sm:p-5 md:p-8 pb-0 md:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white dark:bg-card shadow-sm md:shadow-md rounded-lg md:rounded-2xl flex items-center justify-center flex-shrink-0 ring-1 ring-border group-hover:ring-primary/30 group-hover:scale-105 transition-all duration-300">
                      <service.icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-[0.95rem] sm:text-xl md:text-2xl font-bold text-foreground mb-0.5 sm:mb-1 leading-tight">{service.title}</CardTitle>
                      <p className="text-[0.6rem] sm:text-[0.8rem] md:text-sm text-primary font-semibold tracking-wide uppercase">{service.features.length} Features</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative p-3 sm:p-5 md:p-8 pt-3 md:pt-6 flex-1 flex flex-col">
                  <p className="text-[0.7rem] sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6 line-clamp-3 sm:line-clamp-none">{service.description}</p>
                  
                  {/* Modern Pill-shaped features */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2.5 mt-auto">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 sm:gap-1.5 bg-background/60 backdrop-blur-sm text-foreground px-1.5 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-1.5 rounded-md md:rounded-lg text-[0.55rem] sm:text-[0.7rem] md:text-xs font-medium border border-border/50 shadow-sm group-hover:border-primary/20 transition-colors">
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" />
                        <span className="truncate max-w-[80px] sm:max-w-[120px] md:max-w-none">{feature}</span>
                      </span>
                    ))}
                    {service.features.length > 4 && (
                      <span className="inline-flex items-center px-1.5 py-1 sm:px-2.5 sm:py-1.5 rounded-md md:rounded-lg text-[0.55rem] sm:text-[0.7rem] md:text-xs font-medium bg-primary/5 text-primary border border-primary/20">
                        +{service.features.length - 4} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Additional <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Support</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Beyond admissions, we provide comprehensive support services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-card border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col rounded-xl md:rounded-2xl group cursor-pointer">
                <CardContent className="p-4 md:p-8 flex flex-col h-full">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="text-[0.95rem] md:text-xl font-bold text-foreground mb-1.5 md:mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-[0.7rem] md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-3xl rounded-full opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Our <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Process</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent, and proven admission roadmap
            </p>
          </div>
          
          {/* Flowchart Layout */}
          <div className="relative max-w-3xl mx-auto">
            {/* Connecting Vertical Line */}
            <div className="absolute left-6 md:left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-primary/30 to-transparent rounded-full z-0 hidden sm:block"></div>
            
            <div className="space-y-5 md:space-y-8 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4 md:gap-6 group">
                  {/* Step Node */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border-4 border-primary/20 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/5 group-hover:shadow-lg transition-all duration-500 relative z-10 self-start sm:self-auto">
                    <span className="text-base md:text-xl font-extrabold text-primary">{step.step}</span>
                  </div>
                  
                  {/* Content Card */}
                  <Card className="flex-1 bg-gradient-to-br from-card to-secondary/30 border-border/50 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-500 rounded-xl md:rounded-2xl cursor-default">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-base md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Trusted by thousands of students across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 shadow-lg hover:-translate-y-1 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-4 md:p-8 text-center flex flex-col h-full items-center justify-start md:justify-center">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-sm">
                    <item.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1.5 md:mb-2 leading-tight">{item.title}</h3>
                  <p className="text-[0.65rem] md:text-sm text-white/80 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-card border-border">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today for free counseling and take the first step towards your dream college.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                    Contact Us Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:7799478413">
                  <Button size="lg" variant="outline" className="border-primary text-foreground hover:bg-primary/10 px-8">
                    <Phone className="mr-2 w-4 h-4" />
                    Call: 7799478413
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
