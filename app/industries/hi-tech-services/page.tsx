"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HiTechServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Next-gen AI engineering. Innovate. Scale. Disrupt.
          </h1>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">Hi-Tech Solutions We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-pink-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Product Engineering & Digital Innovation</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>AI-powered development and iteration cycles</li>
                <li>Data-driven product optimization and testing</li>
                <li>Cloud-native architecture design and implementation</li>
                <li>Market-leading solution development and deployment</li>
                <li>Scalable product lifecycle management</li>
                <li>Customer expectation analysis and product alignment</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Customer Experience & Personalization Platform</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Hyper-personalized customer journey mapping</li>
                <li>Real-time analytics and behavioral insights</li>
                <li>AI-driven customer engagement automation</li>
                <li>Digital interaction optimization and enhancement</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-purple-700 mb-2">Intelligent Automation & Operational Excellence</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>AI-powered workflow automation and optimization</li>
                <li>Manual task elimination and process streamlining</li>
                <li>Decision-making intelligence and support systems</li>
                <li>Productivity enhancement through smart automation</li>
                <li>Digital transformation acceleration platforms</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Data & Artificial Intelligence Solutions</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Real-time data processing and actionable insights</li>
                <li>Predictive analytics and forecasting models</li>
                <li>Generative AI integration and implementation</li>
                <li>Customer engagement optimization through data</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Cloud Platforms & Infrastructure Modernization</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Cloud-native infrastructure design and deployment</li>
                <li>Seamless cloud migration and modernization</li>
                <li>Operational cost reduction and optimization</li>
                <li>Agile development and deployment platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Technology Solutions? */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 flex-1">
            <h2 className="text-3xl font-bold mb-6 text-purple-700">Why Choose Our Technology Solutions?</h2>
            <ul className="list-disc ml-6 text-gray-700 text-left">
              <li>Best-in-Class Product Engineering – 22 years of experience delivering unparalleled product engineering solutions to global enterprises and digital disruptors alike, ensuring world-class quality and reliability.</li>
              <li>AI-Driven Innovation Pipeline – Proven track record in taking AI Proofs of Concept beyond experimentation to enterprise-scale solutions that deliver measurable business value and competitive advantage.</li>
              <li>Transformative Solutions at Scale – Trusted partner to global technology disruptors, delivering next-generation solutions that harness the power of design thinking and scaled agile delivery methodologies.</li>
              <li>Enterprise-Ready Expertise – Deep experience working with global enterprises across industries, understanding complex organizational needs and delivering solutions that integrate seamlessly with existing systems.</li>
              <li>Proof-of-Concept to Production – Specialized capability in bridging the gap between innovative concepts and production-ready solutions, ensuring smooth transition from pilot to full-scale deployment.</li>
              <li>Design Thinking Methodology – Human-centered approach to innovation that combines creative problem-solving with technical excellence to deliver solutions that truly meet user needs.</li>
              <li>Agile Delivery at Scale – Flexible, responsive delivery models that adapt to changing requirements while maintaining quality and timeline commitments across large-scale implementations.</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="Hi-Tech Solutions" className="rounded-xl shadow-md object-cover w-full h-80 max-w-md" />
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Implementation Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-purple-700 mb-2">1. Discovery & Strategic Assessment</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Business requirements and stakeholder analysis</li>
                <li>Technology stack evaluation and gap analysis</li>
                <li>Digital transformation roadmap aligned with enterprise objectives</li>
                <li>Risk assessment and mitigation planning</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-pink-700 mb-2">2. Proof-of-Concept Development</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>AI/ML model prototyping and validation</li>
                <li>MVP development with core functionality</li>
                <li>User experience design and testing</li>
                <li>Technology feasibility and performance benchmarking</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-2">3. Enterprise Solution Engineering</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Full-scale product development and architecture</li>
                <li>Cloud-native platform implementation</li>
                <li>API integrations and system interoperability</li>
                <li>Security, compliance, and governance frameworks</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-purple-700 mb-2">4. Deployment & Production Launch</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Phased rollout with pilot user groups</li>
                <li>Production environment setup and configuration</li>
                <li>Data migration and system integration</li>
                <li>Go-live support and issue resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section (like homepage) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Insights</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">Explore our latest articles, case studies, and webinars to stay ahead in hi-tech innovation and best practices.</p>
          </div>
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
              {/* Blog Post 1 - Latest Insights */}
              <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                   onClick={() => (window.location.href = "/resources/blog")}> 
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/chipmath-high-tech-community-logo.png" 
                    alt="Hi-Tech Data Analytics" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">BLOG POST</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-indigo-300 text-sm font-medium mb-2 block">Hi-Tech Data Analytics</span>
                    <h3 className="text-white text-xl font-bold leading-tight">How Data Analytics Drives Innovation</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Learn how advanced analytics and AI are transforming hi-tech operations and decision-making.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-500">5 min read</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">Jan 15, 2025</span>
                    </div>
                    <div className="flex items-center text-indigo-600 text-sm font-semibold group-hover:text-indigo-700 transition-colors">
                      <span>Read article</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog Post 2 */}
              <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                   onClick={() => (window.location.href = "/resources/case-studies")}> 
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/modern-data-center.png" 
                    alt="Hi-Tech Success" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-purple-300 text-sm font-medium mb-2 block">Hi-Tech Success</span>
                    <h3 className="text-white text-xl font-bold leading-tight">AI Platform Scales Nationwide</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    See how our AI solution helped a hi-tech company expand production and improve efficiency.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-500">7 min read</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">Feb 2, 2025</span>
                    </div>
                    <div className="flex items-center text-purple-600 text-sm font-semibold group-hover:text-purple-700 transition-colors">
                      <span>Read case study</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog Post 3 */}
              <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                   onClick={() => (window.location.href = "/resources/webinars")}> 
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/ai-neural-network-data.png" 
                    alt="Hi-Tech Webinar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">WEBINAR</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-pink-300 text-sm font-medium mb-2 block">Hi-Tech Webinar</span>
                    <h3 className="text-white text-xl font-bold leading-tight">AI & Automation for Hi-Tech Excellence</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Join our experts for a deep dive into AI, automation, and digital transformation in hi-tech.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-500">1 hr</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">Mar 10, 2025</span>
                    </div>
                    <div className="flex items-center text-pink-600 text-sm font-semibold group-hover:text-pink-700 transition-colors">
                      <span>Watch webinar</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => (window.location.href = "/resources/case-studies")}
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              onClick={() => (window.location.href = "/resources/blog")}
            >
              Read Latest Insights
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build the Future of Manufacturing Together</h2>
        <p className="text-xl mb-8 text-pink-100">
          Orbitz Technology combines deep industry expertise with digital innovation to deliver transformative solutions for hi-tech enterprises. Ready to drive excellence?
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
          onClick={() => (window.location.href = "/contact")}
        >
          Book My Discovery Call
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </section>
    </div>
  );
}
