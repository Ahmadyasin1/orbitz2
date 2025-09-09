"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, TrendingUp, Shield, Cloud, Laptop, FileText } from "lucide-react"

export default function TechnologyAdvisoryPage() {

    return (
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1632&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center animate-slideInFromBottom delay-100">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-text-reveal delay-200 tracking-tight">
              Technology Advisory & Strategic Consulting
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-white/90 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light drop-shadow-lg">
              Unlock expert guidance and strategic insights to optimize your technology investments and accelerate digital transformation!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow animate-bounce"
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
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Strategic, Results-Driven Technology Solutions Built for Your Growth</h3>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">From digital strategy to cloud modernization, we deliver comprehensive advisory services that align technology with business objectives and drive measurable outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Strategy for Industries */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-10 h-10 text-blue-600 bg-blue-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-blue-700">Digital Strategy for Industries</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Need industry-specific technology guidance? We leverage deep applied experience across core industries along with proven technology partnerships to provide architectural guidance and integration capabilities tailored to your sector.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Industry-specific digital transformation roadmaps</li>
                <li>Technology architecture design and planning</li>
                <li>Strategic partnership evaluation and selection</li>
                <li>Integration capabilities assessment</li>
                <li>Competitive advantage identification</li>
              </ul>
            </div>
            {/* Customer Experience Strategy */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-10 h-10 text-purple-600 bg-purple-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-purple-600">Customer Experience Strategy</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Looking to revolutionize your customer interactions? We move beyond "one size fits all" approaches to align sales, marketing, and service while leveraging powerful strategic and process consulting capabilities across the entire 360° view of customer experience.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>End-to-end customer journey mapping</li>
                <li>Sales and marketing alignment strategies</li>
                <li>Service optimization and automation</li>
                <li>Multi-channel experience design</li>
                <li>Customer satisfaction improvement initiatives</li>
              </ul>
            </div>
            {/* Application Portfolio Rationalization */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Laptop className="w-10 h-10 text-pink-500 bg-pink-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-pink-600">Application Portfolio Rationalization</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Want to streamline your software ecosystem? We help you optimize existing application portfolios through structured modernization and transformation roadmaps that reduce overall operational costs while improving system performance.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Legacy application assessment and audit</li>
                <li>Modernization roadmap development</li>
                <li>Cost-benefit analysis and optimization</li>
                <li>System consolidation strategies</li>
                <li>Performance improvement planning</li>
              </ul>
            </div>
            {/* Agile & DevOps Acceleration */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-10 h-10 text-orange-500 bg-orange-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-orange-500">Agile & DevOps Acceleration</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Ready to accelerate your development lifecycle? We streamline software development processes to improve productivity and application stability from development through production deployment using proven agile and DevOps methodologies.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Development process optimization</li>
                <li>CI/CD pipeline implementation</li>
                <li>Team productivity enhancement</li>
                <li>Quality assurance integration</li>
                <li>Deployment automation strategies</li>
              </ul>
            </div>
            {/* Data and Analytics Advisory */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Cloud className="w-10 h-10 text-green-600 bg-green-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-green-600">Data and Analytics Advisory</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Need to unlock the power of your data? We elevate data strategy with executable roadmaps that deliver sustained data compliance, privacy regulation adherence, and comprehensive data governance frameworks.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Data strategy development and implementation</li>
                <li>Compliance and privacy framework design</li>
                <li>Analytics platform selection and deployment</li>
                <li>Data governance policy creation</li>
                <li>Business intelligence optimization</li>
              </ul>
            </div>
            {/* Cloud & Infrastructure Advisory */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-10 h-10 text-indigo-600 bg-indigo-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-indigo-600">Cloud & Infrastructure Advisory</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Planning your cloud transformation journey? We analyze your cloud adoption approach with detailed cloud-readiness assessments that help identify roadblocks, optimize investments, and create future-proof infrastructure strategies.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Cloud readiness assessment and planning</li>
                <li>Migration strategy development</li>
                <li>Infrastructure optimization analysis</li>
                <li>Cost management and forecasting</li>
                <li>Security and compliance evaluation</li>
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
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">Deep industry expertise, proven methodology, and strategic technology solutions that transform your business vision into competitive advantage.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Technology Insights */}
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Cloud className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="text-lg font-bold text-blue-700 mb-2">Technology Insights</h4>
              <p className="text-gray-700 text-sm">Leverage cutting-edge technology expertise to make informed decisions and build solutions that achieve measurable business results.</p>
            </div>
            {/* Deep Domain Expertise */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Target className="w-8 h-8 text-purple-600 mb-3" />
              <h4 className="text-lg font-bold text-purple-700 mb-2">Deep Domain Expertise</h4>
              <p className="text-gray-700 text-sm">Experience across healthcare, finance, manufacturing, and technology sectors for specialized business domain solutions.</p>
            </div>
            {/* Customer-Centric Approach */}
            <div className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Users className="w-8 h-8 text-pink-600 mb-3" />
              <h4 className="text-lg font-bold text-pink-700 mb-2">Customer-Centric Approach</h4>
              <p className="text-gray-700 text-sm">Human-centered methodology combining design, industry knowledge, and technology expertise with customer focus.</p>
            </div>
            {/* Solutions Focused, not Hours Focused */}
            <div className="bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <TrendingUp className="w-8 h-8 text-indigo-600 mb-3" />
              <h4 className="text-lg font-bold text-indigo-700 mb-2">Solutions Focused, not Hours Focused</h4>
              <p className="text-gray-700 text-sm">We deliver real results by harnessing proven, top-tier tools to efficiently address your unique challenges—saving you time, resources, and headaches.</p>
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
              Comprehensive technology advisory services designed to transform your business operations
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
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Digital Strategy Planning</td>
                    <td className="px-8 py-6 text-gray-700">Technology roadmap, transformation planning, innovation strategy.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-600">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Technology Assessment</td>
                    <td className="px-8 py-6 text-gray-700">Infrastructure analysis, performance optimization, security assessment.</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-all duration-300 animate-slideInFromLeft delay-700">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Cloud Strategy</td>
                    <td className="px-8 py-6 text-gray-700">Cloud readiness, migration planning, cost optimization.</td>
                  </tr>
                  <tr className="hover:bg-red-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Security Advisory</td>
                    <td className="px-8 py-6 text-gray-700">Security assessment, compliance, risk management.</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Vendor & Solution Selection</td>
                    <td className="px-8 py-6 text-gray-700">Objective recommendations, best-fit technology solutions.</td>
                  </tr>
                  <tr className="hover:bg-cyan-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">IT Governance & Compliance</td>
                    <td className="px-8 py-6 text-gray-700">Regulatory compliance, governance frameworks.</td>
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
                <Target className="w-12 h-12 text-blue-600 bg-blue-100 rounded-xl p-2" />
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
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">Explore our latest articles, case studies, and webinars to stay ahead in technology innovation and best practices.</p>
          </div>
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
              {/* Blog Post 1 - Latest Insights */}
              <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                   onClick={() => (window.location.href = "/resources/blog")}> 
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/practicee-ehr.png" 
                    alt="Digital Strategy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">BLOG POST</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-indigo-300 text-sm font-medium mb-2 block">Digital Strategy</span>
                    <h3 className="text-white text-xl font-bold leading-tight">How Digital Strategy Drives Growth</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Discover how strategic technology planning can accelerate business transformation.
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
                    alt="Cloud Modernization" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-purple-300 text-sm font-medium mb-2 block">Cloud Modernization</span>
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
                    alt="Data & Analytics Webinar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">WEBINAR</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-pink-300 text-sm font-medium mb-2 block">Data & Analytics</span>
                    <h3 className="text-white text-xl font-bold leading-tight">Unlocking Data for Business Growth</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Join our experts for a deep dive into data strategy, analytics, and governance for business transformation.
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
            <h2 className="text-4xl font-bold mb-6 animate-text-reveal delay-200">Your business deserves technology that is strategic, future-ready, and impactful.</h2>
            <p className="text-xl mb-8 text-pink-100 animate-fadeInScale delay-300">
              At Orbitz Technology, we deliver Technology Advisory Services that optimize investments, accelerate transformation, and drive measurable results.
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
