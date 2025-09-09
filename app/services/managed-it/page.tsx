"use client"
import { ArrowRight, Shield, Clock, Users, Phone, Server, Cloud, Lock, RefreshCw, ShoppingCart, UserPlus } from "lucide-react"
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Head from "next/head"

export default function ManagedITPage() {
  return (
    <>
      <Head>
        <title>Managed IT Services - Orbitz Technology | 24/7 Support & Monitoring</title>
        <meta name="description" content="Comprehensive managed IT services with 24/7 monitoring, cybersecurity, cloud solutions, and strategic IT consulting. Reduce costs and boost productivity with Orbitz Technology." />
        <meta name="keywords" content="managed IT services, IT support Chicago, 24/7 monitoring, cybersecurity, cloud solutions, IT consulting, network management, data backup" />
        <link rel="canonical" href="https://www.orbitztechnology.com/services/managed-it" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Managed IT Services",
              "description": "Comprehensive managed IT services including 24/7 monitoring, cybersecurity, cloud solutions, and strategic IT consulting",
              "provider": {
                "@type": "Organization",
                "name": "Orbitz Technology",
                "url": "https://www.orbitztechnology.com"
              },
              "areaServed": ["Chicago", "Illinois", "United States"],
              "serviceType": "IT Support and Management",
              "url": "https://www.orbitztechnology.com/services/managed-it",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceRange": "$$"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center animate-slideInFromBottom delay-100">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-text-reveal delay-200 tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Managed IT Services & Strategic Solutions
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-white/90 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light drop-shadow-lg">
              Unlock enterprise-level IT expertise to optimize costs and accelerate business performance!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow animate-bounce"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}

      {/* What We Do Section with 6 Feature Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-900">What We Do:</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Complete, Secure IT Solutions Designed for Your Success</h3>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">From network management to cybersecurity, we deliver comprehensive IT services that protect your business and drive operational excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Network */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Cloud className="w-10 h-10 text-blue-600 bg-blue-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-blue-700">Network</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Planning to optimize your network infrastructure? We partner with you to design, implement, and monitor reliable network solutions that ensure business continuity and operational stability.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Network architecture design</li>
                <li>24/7 monitoring and maintenance</li>
                <li>Performance optimization</li>
                <li>Security implementation</li>
              </ul>
            </div>
            {/* Service Desk */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-10 h-10 text-pink-500 bg-pink-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-pink-600">Service Desk</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Need responsive IT support for your team? We provide comprehensive helpdesk services that resolve issues quickly, minimize downtime, and keep your workforce productive around the clock.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>24/7 technical support</li>
                <li>Incident management and resolution</li>
                <li>User training and guidance</li>
                <li>Service level agreement compliance</li>
              </ul>
            </div>
            {/* Infrastructure */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Server className="w-10 h-10 text-orange-500 bg-orange-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-orange-500">Infrastructure</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Looking to modernize your IT foundation? We assess, optimize, and manage your entire IT infrastructure to ensure scalability, security, and peak performance across all systems.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Infrastructure assessment and planning</li>
                <li>Server and storage management</li>
                <li>Cloud migration and hybrid solutions</li>
                <li>Disaster recovery planning</li>
              </ul>
            </div>
            {/* Endpoint Management */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Lock className="w-10 h-10 text-purple-600 bg-purple-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-purple-600">Endpoint Management</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Managing multiple devices across your organization? We deploy, secure, and maintain all your endpoint devices—from laptops to mobile devices—ensuring consistent performance and compliance.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Device deployment and configuration</li>
                <li>Remote monitoring and updates</li>
                <li>Security patch management</li>
                <li>Mobile device management (MDM)</li>
              </ul>
            </div>
            {/* Applications */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <ShoppingCart className="w-10 h-10 text-green-600 bg-green-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-green-600">Applications</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Ready to streamline your software ecosystem? We manage your entire application portfolio, from installation and updates to integration and optimization, ensuring seamless business operations.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Software deployment and licensing</li>
                <li>Application updates and maintenance</li>
                <li>Integration and compatibility testing</li>
                <li>Performance monitoring and optimization</li>
              </ul>
            </div>
            {/* Managed IT Support */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <UserPlus className="w-10 h-10 text-indigo-600 bg-indigo-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-indigo-600">Managed IT Support</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Want comprehensive IT management without the overhead? We provide advanced managed services with cutting-edge tools and proactive monitoring to transform your IT operations into a strategic business advantage.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Advanced monitoring and analytics</li>
                <li>Proactive maintenance and optimization</li>
                <li>Strategic IT planning and consulting</li>
                <li>Vendor management and coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Orbitz Technology Section with 4 Value Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Why choose Orbitz Technology?</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">Reliable infrastructure, proactive support, and comprehensive IT solutions that deliver seamless business operations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Quick Response */}
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Clock className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="text-lg font-bold text-blue-700 mb-2">Quick Response</h4>
              <p className="text-gray-700 text-sm">Whether you're dealing with system downtime, security threats, network issues, or software glitches, we deliver fast and efficient IT solutions that minimize disruption and maximize your operational uptime.</p>
            </div>
            {/* Experienced */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Shield className="w-8 h-8 text-purple-600 mb-3" />
              <h4 className="text-lg font-bold text-purple-700 mb-2">Experienced</h4>
              <p className="text-gray-700 text-sm">Whether you're a startup, mid-sized company, or enterprise organization, we bring years of proven expertise and a solid track record in delivering reliable IT support across diverse industries and business scales.</p>
            </div>
            {/* No Geek Speak */}
            <div className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <RefreshCw className="w-8 h-8 text-pink-600 mb-3" />
              <h4 className="text-lg font-bold text-pink-700 mb-2">No Geek Speak</h4>
              <p className="text-gray-700 text-sm">Whether you're tech-savvy or prefer simple explanations, we communicate in clear, straightforward language that ensures you understand exactly what we're doing and why it matters to your business.</p>
            </div>
            {/* One Stop Shop */}
            <div className="bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Users className="w-8 h-8 text-indigo-600 mb-3" />
              <h4 className="text-lg font-bold text-indigo-700 mb-2">One Stop Shop</h4>
              <p className="text-gray-700 text-sm">Whether you need IT support, network management, cybersecurity, or cloud computing, we provide comprehensive technology solutions tailored to meet all your business requirements under one roof.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Clients Choose Us */}
  {/* Why Clients Choose Us - Unified with Our Approach for clarity and conciseness */}
  {/* ...existing code... */}

      {/* Services Table Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">Services at a Glance</h2>
            <p className="text-xl md:text-2xl text-gray-600 animate-fadeInScale delay-300 font-light">A quick look at our core offerings</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl animate-slideInFromBottom delay-400">
            <div className="overflow-x-auto">
              <table className="w-full bg-white">
                <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-bold">Service Area</th>
                    <th className="px-8 py-6 text-left text-lg font-bold">What You Get</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-500">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">24/7 Help Desk Support</td>
                    <td className="px-8 py-6 text-gray-700">Always-on assistance from skilled engineers, not generic call-center agents.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-600">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Remote & On-Site IT Support</td>
                    <td className="px-8 py-6 text-gray-700">Quick resolutions via secure remote access or in-person visits when needed.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-700">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Server & Network Management</td>
                    <td className="px-8 py-6 text-gray-700">Proactive monitoring, patching, updates, and performance optimization.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Cloud Services & Migration</td>
                    <td className="px-8 py-6 text-gray-700">Secure, seamless cloud adoption and management tailored to your business.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Cybersecurity & Compliance</td>
                    <td className="px-8 py-6 text-gray-700">Endpoint protection, threat detection, and compliance management (HIPAA, PCI).</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Backup & Disaster Recovery</td>
                    <td className="px-8 py-6 text-gray-700">Automated backups and reliable recovery to protect against data loss.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">IT Procurement & Asset Mgmt</td>
                    <td className="px-8 py-6 text-gray-700">Streamlined purchasing, renewals, and lifecycle management of IT assets.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Onboarding & Offboarding</td>
                    <td className="px-8 py-6 text-gray-700">Smooth employee setup and secure deactivation to maintain compliance.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Co-Managed IT Services</td>
                    <td className="px-8 py-6 text-gray-700">Supplemental expertise, tools, and monitoring to support internal IT teams.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section (moved below Services Table) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">Our Approach</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">Assessment & Discovery | Planning & Customization | Implementation & Support | Monitoring & Improvement</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromLeft delay-400">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-12 h-12 text-pink-500 bg-pink-100 rounded-xl p-2 shadow-md" />
                <h3 className="text-lg font-bold text-pink-600 leading-tight">Assessment & Discovery</h3>
              </div>
              <p className="text-gray-600 text-sm">We evaluate your IT infrastructure to uncover strengths, weaknesses, and risks.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromBottom delay-500">
              <div className="flex items-center gap-4 mb-4">
                <Server className="w-12 h-12 text-orange-500 bg-orange-100 rounded-xl p-2 shadow-md" />
                <h3 className="text-lg font-bold text-orange-500 leading-tight">Planning & Customization</h3>
              </div>
              <p className="text-gray-600 text-sm">We design tailored solutions that align with your goals and budget.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromBottom delay-600">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-12 h-12 text-blue-600 bg-blue-100 rounded-xl p-2 shadow-md" />
                <h3 className="text-lg font-bold text-blue-600 leading-tight">Implementation & Support</h3>
              </div>
              <p className="text-gray-600 text-sm">From onboarding to ongoing management, we deliver seamless operations.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md animate-slideInFromRight delay-700">
              <div className="flex items-center gap-4 mb-4">
                <RefreshCw className="w-12 h-12 text-purple-600 bg-purple-100 rounded-xl p-2 shadow-md" />
                <h3 className="text-lg font-bold text-purple-600 leading-tight">Monitoring & Improvement</h3>
              </div>
              <p className="text-gray-600 text-sm">We proactively monitor and continuously optimize your systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section (like homepage) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Insights</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">Explore our latest articles, case studies, and webinars to stay ahead in IT innovation and best practices.</p>
          </div>
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
              {/* Blog Post 1 - Latest Insights */}
              <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                   onClick={() => (window.location.href = "/resources/blog")}> 
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/practicee-ehr.png" 
                    alt="AI in Healthcare" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">BLOG POST</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-indigo-300 text-sm font-medium mb-2 block">Healthcare Technology</span>
                    <h3 className="text-white text-xl font-bold leading-tight">AI Revolution in Healthcare</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Exploring how artificial intelligence is transforming patient care, streamlining operations, and revolutionizing healthcare delivery in the digital age.
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
                    alt="Network Optimization" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-purple-300 text-sm font-medium mb-2 block">Network Solutions</span>
                    <h3 className="text-white text-xl font-bold leading-tight">Network Optimization for 99.99% Uptime</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    See how we helped a client achieve 99.99% uptime and seamless scalability with our network solutions.
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
                    alt="Cybersecurity Webinar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">WEBINAR</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-pink-300 text-sm font-medium mb-2 block">Cybersecurity</span>
                    <h3 className="text-white text-xl font-bold leading-tight">Cybersecurity Trends 2025</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Join our experts for a deep dive into the latest threats and strategies for protecting your business.
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
            {/* Enhanced Scroll Navigation */}
            <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-10">
              <button className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
              <button className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
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
              <BookOpen className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-12 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
        }}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl font-bold mb-6 animate-text-reveal delay-200">Your business deserves IT that works seamlessly, securely, and strategically.</h2>
            <p className="text-xl mb-8 text-pink-100 animate-fadeInScale delay-300">
              At Orbitz Technology, we deliver Managed & Co-Managed IT Services that eliminate headaches, reduce risks, and unlock growth opportunities.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us Today
            <Phone className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

  {/* ...existing code... */}
      </div>
    </>
  )
}
