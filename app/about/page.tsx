"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Users, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Orbitz Technology</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Empowering businesses through innovative technology solutions since 2009. We're not just your IT
              provider—we're your strategic technology partner.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower small and mid-sized businesses with enterprise-grade technology solutions that drive
                  growth, enhance security, and optimize operations. We believe every business deserves access to
                  cutting-edge technology, regardless of size or budget.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the most trusted technology partner for businesses seeking digital transformation. We envision a
                  future where technology seamlessly integrates with business operations, creating unprecedented
                  opportunities for growth and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600">From humble beginnings to industry leadership</p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Founded on Innovation</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Orbitz Technology was founded in 2009 with a simple yet powerful vision: to democratize
                  enterprise-grade technology for businesses of all sizes. Our founders recognized that small and
                  mid-sized businesses were often left behind in the digital revolution, lacking access to the
                  sophisticated IT solutions that larger corporations enjoyed.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Starting with just three employees in a small office in Oak Brook, Illinois, we began our journey by
                  focusing on what mattered most: understanding our clients' unique challenges and crafting tailored
                  solutions that delivered real business value.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">2009</div>
                      <div className="text-gray-600">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">500+</div>
                      <div className="text-gray-600">Clients Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">15+</div>
                      <div className="text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">99.9%</div>
                      <div className="text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity First</h3>
                <p className="text-gray-600">
                  We believe in transparent communication, honest assessments, and ethical business practices. Our
                  clients trust us because we always put their interests first.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Centric</h3>
                <p className="text-gray-600">
                  Every decision we make is filtered through one question: "How does this benefit our clients?" Your
                  success is our success, and we're committed to your long-term growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We don't settle for "good enough." Our team is committed to delivering exceptional results that exceed
                  expectations and drive measurable business outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts driving our vision forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">JD</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">John Doe</h3>
                <p className="text-purple-600 font-semibold mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With over 20 years in technology leadership, John drives our strategic vision and ensures we stay at
                  the forefront of industry innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">JS</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jane Smith</h3>
                <p className="text-blue-600 font-semibold mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Jane leads our technical team and oversees all technology implementations, ensuring we deliver
                  cutting-edge solutions that drive business results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">MJ</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Johnson</h3>
                <p className="text-green-600 font-semibold mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Mike ensures our operations run smoothly and our clients receive the exceptional service they deserve,
                  every single day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's discuss how Orbitz Technology can help transform your business through strategic technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 px-8 py-3 rounded-full font-semibold"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/30 transition-all duration-300 px-8 py-3 rounded-full font-semibold"
            >
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
