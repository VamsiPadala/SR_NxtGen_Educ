"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Bus,
  GraduationCap,
  Users,
  Building2
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["7799478413", "Available 24/7"],
    action: "tel:7799478413",
    actionText: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["7799478413", "Quick Response"],
    action: "https://wa.me/917799478413",
    actionText: "Chat Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["srnextgeneducation@gmail.com"],
    action: "mailto:srnextgeneducation@gmail.com",
    actionText: "Send Email",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9 AM - 8 PM", "Sunday: 10 AM - 5 PM"],
    action: null,
    actionText: null,
  },
]

const offices = [
  { state: "Gujarat", address: "Corporate Office, Ahmedabad" },
  { state: "Maharashtra", address: "Regional Office, Pune" },
  { state: "Karnataka", address: "Regional Office, Bengaluru" },
  { state: "Tamil Nadu", address: "Regional Office, Chennai" },
  { state: "Andhra Pradesh", address: "Head Office, Annavaram, Kakinada" },
]

const courses = [
  "Engineering (B.Tech/B.E.)",
  "Management (BBA/MBA)",
  "Computer Applications (BCA/MCA)",
  "Commerce (B.Com/M.Com)",
  "Science (B.Sc/M.Sc)",
  "Pharmacy (B.Pharm/M.Pharm)",
  "Medical/Paramedical",
  "Other",
]

const faqs = [
  {
    question: "Is the consultation free?",
    answer: "Yes! Our initial consultation and counseling sessions are completely free. We believe in helping students first.",
  },
  {
    question: "Do you charge any fees?",
    answer: "We have transparent fee structures with no hidden charges. Fees are only applicable after successful admission.",
  },
  {
    question: "How does free college visiting work?",
    answer: "We arrange transportation and campus visits to shortlisted colleges at no extra cost to help you make informed decisions.",
  },
  {
    question: "Which states do you cover?",
    answer: "We have partner colleges in Gujarat, Maharashtra, Karnataka (Bengaluru), Tamil Nadu, and Andhra Pradesh.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    course: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: "02c9b67b-9d2f-4b80-8a23-274cf0687425",
          subject: `New Inquiry from ${formData.name} - SR Nextgen Education`,
          from_name: "SR Nextgen Education Website",
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: "", phone: "", email: "", state: "", course: "", message: "" })
      } else {
        alert("Something went wrong. Please try again or call us directly.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to start your educational journey? Get in touch with our expert counselors for free guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7799478413" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">7799478413</span>
              </a>
              <a href="https://wa.me/917799478413" className="flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg hover:border-primary transition-colors">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Visit Banner */}
      <section className="py-4 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <Bus className="w-6 h-6 text-primary-foreground" />
            <p className="text-lg font-medium text-primary-foreground">
              Free College Visiting Available! Contact us to book your campus tour.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Get Free Counseling
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your inquiry has been submitted successfully. Our counselor will contact you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({ name: "", phone: "", email: "", state: "", course: "", message: "" })
                      }}
                      variant="outline"
                      className="border-primary text-foreground hover:bg-primary/10"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-border"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-foreground">Preferred State *</Label>
                        <select
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select State</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Karnataka">Karnataka (Bengaluru)</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Any">Any State</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course" className="text-foreground">Course Interest *</Label>
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          required
                          className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select Course</option>
                          {courses.map((course, index) => (
                            <option key={index} value={course}>{course}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message (Optional)</Label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Any specific requirements or questions?"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit Inquiry
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      By submitting, you agree to receive calls/messages regarding admissions.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                      </div>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                      {info.action && (
                        <a 
                          href={info.action}
                          className="inline-block mt-3 text-primary font-medium text-sm hover:underline"
                        >
                          {info.actionText} →
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Office Locations */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Our Offices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {offices.map((office, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                        <Building2 className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">{office.state}</p>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Colleges</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our expert counselors are ready to help you. Call us now for immediate assistance!
          </p>
          <a 
            href="tel:7799478413" 
            className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-primary px-10 py-5 rounded-xl text-xl font-bold hover:bg-primary-foreground/90 transition-colors"
          >
            <Phone className="w-7 h-7" />
            Call Now: 7799478413
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
