import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  ArrowRight, 
  Building2,
  MapPin,
  GraduationCap,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  CheckCircle2,
  Shield,
  Clock,
  Sparkles
} from "lucide-react"

export const metadata = {
  title: "About Us | SR NEXTGEN EDUCATION",
  description: "Learn about SR NEXTGEN EDUCATION - 15+ years of experience helping students achieve their dreams. Trusted educational consultancy with 10,000+ successful placements.",
}

const milestones = [
  { year: "2010", title: "Founded", description: "Started with a vision to make quality education accessible" },
  { year: "2013", title: "1000+ Students", description: "Helped over 1000 students get into top colleges" },
  { year: "2016", title: "Pan India Presence", description: "Expanded operations to 5 states across India" },
  { year: "2019", title: "100+ Partners", description: "Established partnerships with 100+ prestigious institutions" },
  { year: "2022", title: "10,000+ Alumni", description: "Proud network of 10,000+ successful alumni" },
  { year: "2026", title: "Industry Leader", description: "Recognized as a leading educational consultancy" },
]

const values = [
  {
    icon: Heart,
    title: "Student First",
    description: "Every decision we make is centered around what's best for our students and their future.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "We believe in honest communication and never hide any information from students or parents.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from counseling to college placements.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Quality education guidance should be accessible to everyone, regardless of background.",
  },
]

const team = [
  {
    name: "Educational Counselors",
    count: "15+",
    description: "Expert counselors with deep knowledge of the education sector",
  },
  {
    name: "College Relations",
    count: "10+",
    description: "Dedicated team maintaining relationships with partner institutions",
  },
  {
    name: "Student Support",
    count: "20+",
    description: "Support staff available 24/7 to assist students and parents",
  },
  {
    name: "Field Executives",
    count: "25+",
    description: "On-ground team across 5 states for personalized assistance",
  },
]

const achievements = [
  { number: "10,000+", label: "Students Placed" },
  { number: "100+", label: "Partner Colleges" },
  { number: "5", label: "States Covered" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" },
]

const coverage = [
  { state: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Mehsana"] },
  { state: "Maharashtra", cities: ["Mumbai", "Pune", "Nashik", "Kolhapur", "Nagpur"] },
  { state: "Karnataka", cities: ["Bengaluru", "Mysore", "Mangalore", "Hubli", "Belgaum"] },
  { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Trichy", "Vellore"] },
  { state: "Andhra Pradesh", cities: ["Hyderabad", "Vijayawada", "Visakhapatnam", "Tirupati", "Guntur"] },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">SR NEXTGEN EDUCATION</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              For over 15 years, we have been helping students across India achieve their dreams of studying at top colleges. Our mission is to make quality education accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To bridge the gap between students and quality education by providing comprehensive admission guidance, transparent information, and end-to-end support. We believe every student deserves access to the best educational opportunities, and we work tirelessly to make that a reality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become India&apos;s most trusted educational consultancy, known for integrity, student success, and positive impact on thousands of families. We envision a future where every student can make informed decisions about their education without barriers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {item.number}
                </div>
                <div className="text-primary-foreground/80 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a leading educational consultancy
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="p-3.5 md:p-6">
                  <div className="text-2xl md:text-4xl font-bold text-primary mb-1">{milestone.year}</div>
                  <h3 className="text-sm md:text-xl font-semibold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-[0.65rem] md:text-base text-muted-foreground leading-snug">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-3.5 md:p-6 text-center">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <value.icon className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-2">{value.title}</h3>
                  <p className="text-[0.65rem] md:text-base text-muted-foreground leading-snug">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to your success
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="p-3.5 md:p-6 text-center">
                  <div className="text-2xl md:text-4xl font-bold text-primary mb-1">{member.count}</div>
                  <h3 className="text-xs md:text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-[0.6rem] md:text-sm text-muted-foreground leading-snug">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Coverage</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving students across 5 states with local presence in major cities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {coverage.map((region, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-3.5 md:p-6">
                  <div className="flex items-center gap-2 mb-2 md:mb-4">
                    <MapPin className="w-4 h-4 md:w-6 md:h-6 text-primary flex-shrink-0" />
                    <h3 className="text-sm md:text-xl font-semibold text-foreground truncate">{region.state}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {region.cities.map((city, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 md:px-3 md:py-1 bg-primary/10 text-foreground rounded-full text-[0.6rem] md:text-sm">
                        {city}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">SR NEXTGEN?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">15+ Years of Experience</h3>
                <p className="text-muted-foreground">Deep understanding of the education sector and admission processes</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">100+ Partner Institutions</h3>
                <p className="text-muted-foreground">Strong relationships with top colleges across India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Free College Visits</h3>
                <p className="text-muted-foreground">Experience campuses firsthand before making decisions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">24/7 Support</h3>
                <p className="text-muted-foreground">Round the clock assistance throughout your journey</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Transparent Process</h3>
                <p className="text-muted-foreground">No hidden fees or information - complete transparency</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Post-Admission Support</h3>
                <p className="text-muted-foreground">Continued assistance even after college admission</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved their dreams with our guidance. Your success story starts here!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Contact Us Today
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
