"use client"
import { ArrowRight, Code, Smartphone, Globe, Users, TrendingUp, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SoftwareDevelopmentPage() {

    return (
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center animate-fadeInUp delay-100">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-text-reveal delay-200 tracking-tight">
              Custom Software Development
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-blue-100 max-w-3xl mx-auto animate-fadeInUp delay-300 font-light">
              Unlock enterprise-grade development expertise to transform your ideas into scalable, market-ready applications!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow animate-pulse delay-500"
              onClick={() => (window.location.href = "/contact")}
            >
              Book My Discovery Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section (6 Feature Cards Only) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-900">What We Do:</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Innovative, Scalable Software Solutions Built for Your Vision</h3>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">From mobile apps to SaaS platforms, we deliver comprehensive development services that accelerate your digital transformation and drive measurable business growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom API & System Integrations */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Code className="w-10 h-10 text-blue-600 bg-blue-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-blue-700">Custom API & System Integrations</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Need to connect your disconnected business systems? We develop custom APIs and integration solutions that bridge the gap between your web services, creating seamless data flow and operational efficiency across your entire digital ecosystem.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>System connectivity and data synchronization</li>
                <li>Custom API development and management</li>
                <li>Legacy system integration and modernization</li>
                <li>Business process automation through integration</li>
                <li>Third-party service connection and orchestration</li>
              </ul>
            </div>
            {/* Cloud-Native Software Development & Enablement */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-10 h-10 text-purple-600 bg-purple-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-purple-600">Cloud-Native Software Development & Enablement</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Ready to scale your business with enterprise-grade cloud solutions? As a Microsoft Cloud Platform Gold partner, we develop cloud-ready applications and migrate legacy systems to Azure, unlocking auto-scaling capabilities and reducing your infrastructure overhead.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Microsoft Azure application development</li>
                <li>Cloud-native architecture design and implementation</li>
                <li>Legacy system cloud migration and modernization</li>
                <li>Serverless infrastructure optimization</li>
                <li>Auto-scaling and disaster recovery configuration</li>
              </ul>
            </div>
            {/* Mobile App Development */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Smartphone className="w-10 h-10 text-pink-500 bg-pink-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-pink-600">Mobile App Development</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Need to bring your business mobile and deliver consistent experiences across all devices? We develop custom mobile applications for iOS and Android that maximize performance and user experience, while also creating cost-efficient cross-platform solutions for your entire workforce.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Native iOS and Android app development</li>
                <li>Cross-platform development with Xamarin and React Native</li>
                <li>Progressive Web App (PWA) solutions</li>
                <li>Enterprise mobile application modernization</li>
                <li>Offline-capable mobile solutions for disconnected environments</li>
              </ul>
            </div>
            {/* Business Process Automation */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-10 h-10 text-orange-500 bg-orange-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-orange-500">Business Process Automation</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Want to eliminate tedious tasks and free up your most valuable resource—time? Our team of business analysts, software architects, and engineers design custom workflow solutions that automate repetitive processes, boost efficiency, and improve employee productivity across your organization.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Custom workflow design and implementation</li>
                <li>Legacy software automation and integration</li>
                <li>Complex approval process automation</li>
                <li>Task elimination and efficiency optimization</li>
                <li>Employee productivity enhancement solutions</li>
              </ul>
            </div>
            {/* SaaS Product Development */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-10 h-10 text-green-600 bg-green-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-green-600">SaaS Product Development</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Ready to turn your innovative software idea into a scalable, profitable SaaS business? We help startups and companies transform internal solutions into market-ready products with multi-tenant architecture, cloud scalability, and enterprise-grade security compliance that attracts investors and maximizes recurring revenue potential.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Multi-tenant SaaS architecture design</li>
                <li>Scalable cloud infrastructure implementation</li>
                <li>Security and compliance framework development</li>
                <li>Market-ready product transformation</li>
                <li>Revenue model optimization and scaling</li>
              </ul>
            </div>
            {/* .NET Development Services */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Code className="w-10 h-10 text-indigo-600 bg-indigo-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-indigo-600">.NET Development Services</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Need robust, enterprise-grade applications built on Microsoft's proven technology stack? Our expert .NET developers deliver custom-built solutions that meet your specific goals—from building new applications and modernizing legacy systems to integrating multiple platforms with reliable, high-performance code.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Custom .NET application development</li>
                <li>Legacy system modernization and migration</li>
                <li>Multi-platform integration solutions</li>
                <li>Enterprise application architecture</li>
                <li>Performance optimization and scalability enhancement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Orbitz Technology Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Why Choose Orbitz Technology?</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">Innovative development expertise, agile delivery methodology, and comprehensive software solutions that transform your business vision into market-ready applications.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Full-Stack Expertise */}
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Code className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="text-lg font-bold text-blue-700 mb-2">Full-Stack Expertise</h4>
              <p className="text-gray-700 text-sm">Cloud infrastructure, database design, application architecture, and UI/UX development—all covered for your project and future initiatives.</p>
            </div>
            {/* Agile Development Process */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
              <h4 className="text-lg font-bold text-purple-700 mb-2">Agile Development Process</h4>
              <p className="text-gray-700 text-sm">Frequent updates or milestone-based communication—our agile methodology ensures progress, collaboration, and faster delivery.</p>
            </div>
            {/* Solutions-Focused Approach */}
            <div className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Globe className="w-8 h-8 text-pink-600 mb-3" />
              <h4 className="text-lg font-bold text-pink-700 mb-2">Solutions-Focused Approach</h4>
              <p className="text-gray-700 text-sm">We minimize unnecessary development time by leveraging best-in-class tools and frameworks to solve your business challenges efficiently.</p>
            </div>
            {/* Flexible Budget Control */}
            <div className="bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Users className="w-8 h-8 text-indigo-600 mb-3" />
              <h4 className="text-lg font-bold text-indigo-700 mb-2">Flexible Budget Control</h4>
              <p className="text-gray-700 text-sm">Reduce costs or accelerate delivery—our flexible scheduling gives you control over your project timeline and budget allocation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Table */}
      <section className="py-20 bg-white animate-fadeInUp delay-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">
              Services at a Glance
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 animate-fadeInScale delay-300 font-light">
              Comprehensive software development services designed to transform your business operations
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl animate-slideInFromBottom delay-400">
            <div className="overflow-x-auto">
              <table className="w-full bg-white">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-bold">Service</th>
                    <th className="px-8 py-6 text-left text-lg font-bold">What We Deliver</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-all duration-300 animate-slideInFromLeft delay-500">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Custom Software Development</td>
                    <td className="px-8 py-6 text-gray-700">Tailored web and desktop applications built for scalability, flexibility, and integration.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-600">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Mobile Development</td>
                    <td className="px-8 py-6 text-gray-700">Native (iOS/Android), cross-platform, hybrid, and PWA apps with stellar UX and performance.</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-all duration-300 animate-slideInFromLeft delay-700">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Software/Product Engineering</td>
                    <td className="px-8 py-6 text-gray-700">Strategy-led development: MVPs, full products, compliance, design, and road mapping.</td>
                  </tr>
                  <tr className="hover:bg-red-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">QA & Testing</td>
                    <td className="px-8 py-6 text-gray-700">Comprehensive QA—functional, performance, security, usability, compatibility, and automated testing.</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Maintenance & DevOps</td>
                    <td className="px-8 py-6 text-gray-700">CI/CD, secure deployments, legacy modernization, and ongoing enhancements.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section (moved below Services Table) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Our Approach</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">Discovery & Strategy | Agile Development | Quality Assurance | Ongoing Support</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-12 h-12 text-blue-600 bg-blue-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-blue-600 leading-tight">Discovery & Strategy</h3>
              </div>
              <p className="text-gray-600 text-sm">We analyze your business needs and define a clear roadmap for success.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="w-12 h-12 text-purple-600 bg-purple-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-purple-600 leading-tight">Agile Development</h3>
              </div>
              <p className="text-gray-600 text-sm">Iterative development cycles ensure rapid delivery and continuous improvement.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="w-12 h-12 text-green-600 bg-green-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-green-600 leading-tight">Quality Assurance</h3>
              </div>
              <p className="text-gray-600 text-sm">Comprehensive testing guarantees reliability, security, and performance.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-12 h-12 text-indigo-600 bg-indigo-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-indigo-600 leading-tight">Ongoing Support</h3>
              </div>
              <p className="text-gray-600 text-sm">We provide continuous support and optimization for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section (like homepage) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Insights</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">Explore our latest articles, case studies, and webinars to stay ahead in software innovation and best practices.</p>
          </div>
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
              {/* Blog Post 1 - Latest Insights */}
              <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                   onClick={() => (window.location.href = "/resources/blog")}> 
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/practicee-ehr.png" 
                    alt="API Integration" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">BLOG POST</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-indigo-300 text-sm font-medium mb-2 block">API Integration</span>
                    <h3 className="text-white text-xl font-bold leading-tight">How APIs Drive Business Efficiency</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Discover how custom API integrations can streamline operations and boost productivity.
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
                    alt="Cloud Enablement" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-purple-300 text-sm font-medium mb-2 block">Cloud Enablement</span>
                    <h3 className="text-white text-xl font-bold leading-tight">Scaling with Azure Cloud</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    See how we helped a client migrate legacy systems to Azure for auto-scaling and cost savings.
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
                    alt="SaaS Webinar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">WEBINAR</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-pink-300 text-sm font-medium mb-2 block">SaaS Development</span>
                    <h3 className="text-white text-xl font-bold leading-tight">Building SaaS for Scale</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Join our experts for a deep dive into SaaS product development and cloud scalability.
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
      <section className="py-12 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
        }}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl font-bold mb-6 animate-text-reveal delay-200">Your business deserves software that is robust, scalable, and innovative.</h2>
            <p className="text-xl mb-8 text-pink-100 animate-fadeInScale delay-300">
              At Orbitz Technology, we deliver Software Development Services that turn your ideas into market-ready solutions and drive digital transformation.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    {/* Remove duplicate closing div and parenthesis */}
      </div>
    )
}
