"use client"
import { ArrowRight, Shield, Lock, Eye, Users, Search, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CyberSecurityPage() {

    return (
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(59, 130, 246, 0.7)), url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center animate-slideInFromBottom delay-100">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-text-reveal delay-200 tracking-tight">
              Cybersecurity & Threat Protection Services
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-white/90 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light drop-shadow-lg">
              Unlock enterprise-grade security expertise to detect, respond, and remediate against invisible threats while minimizing cyber risk!
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
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Comprehensive, Proactive Cybersecurity Solutions Built for Your Protection</h3>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">From 24/7 threat monitoring to incident response, we deliver complete security services that prevent costly data breaches and safeguard your business operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 24/7 Security Operations Center (SOC) */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-10 h-10 text-blue-600 bg-blue-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-blue-700">24/7 Security Operations Center (SOC)</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Need round-the-clock protection against cyber threats? Our best-in-class Security Operations Center provides continuous monitoring with dedicated security engineers and strategic partnerships to ensure you have the most capable team watching your systems.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Live threat monitoring and detection</li>
                <li>Real-time incident response and containment</li>
                <li>Expert security analyst support</li>
                <li>Advanced threat intelligence integration</li>
                <li>Proactive vulnerability identification</li>
              </ul>
            </div>
            {/* Threat Detection & Response */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Lock className="w-10 h-10 text-purple-600 bg-purple-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-purple-600">Threat Detection & Response</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Looking to stop threats before they become breaches? We combine cutting-edge security technologies with expert analysis to detect, investigate, and remediate security incidents quickly and effectively.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Endpoint detection and response (EDR)</li>
                <li>Network traffic analysis and monitoring</li>
                <li>Behavioral analytics and anomaly detection</li>
                <li>Automated threat containment</li>
                <li>Forensic investigation and analysis</li>
              </ul>
            </div>
            {/* Vulnerability Management */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-10 h-10 text-pink-500 bg-pink-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-pink-600">Vulnerability Management</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Want to identify and fix security weaknesses before attackers exploit them? Our comprehensive vulnerability management program continuously scans, assesses, and prioritizes security gaps across your entire IT infrastructure.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Continuous vulnerability scanning</li>
                <li>Risk assessment and prioritization</li>
                <li>Patch management and deployment</li>
                <li>Security configuration reviews</li>
                <li>Compliance gap analysis</li>
              </ul>
            </div>
            {/* Security Awareness Training */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-10 h-10 text-orange-500 bg-orange-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-orange-500">Security Awareness Training</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Need to strengthen your human firewall? We provide comprehensive security awareness programs that educate your employees about current threats and best practices to prevent social engineering attacks.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Phishing simulation campaigns</li>
                <li>Interactive security training modules</li>
                <li>Policy development and implementation</li>
                <li>Incident reporting procedures</li>
                <li>Regular security awareness updates</li>
              </ul>
            </div>
            {/* Compliance & Risk Management */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-10 h-10 text-green-600 bg-green-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-green-600">Compliance & Risk Management</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Ready to meet regulatory requirements and industry standards? Our security consultants help you navigate complex compliance frameworks while implementing robust risk management strategies tailored to your industry.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>HIPAA/HITECH compliance assistance</li>
                <li>FFIEC/GLBA regulatory support</li>
                <li>NIST framework implementation</li>
                <li>Risk assessment and mitigation</li>
                <li>Audit preparation and documentation</li>
              </ul>
            </div>
            {/* Email & Endpoint Security */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Lock className="w-10 h-10 text-indigo-600 bg-indigo-100 rounded-xl p-2" />
                <h3 className="text-xl font-bold text-indigo-600">Email & Endpoint Security</h3>
              </div>
              <p className="text-gray-700 text-base mb-2">Planning to secure your communication and devices? We deploy advanced email security solutions and endpoint protection to defend against malware, ransomware, and other sophisticated cyber threats.</p>
              <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
                <li>Advanced email threat protection</li>
                <li>Anti-phishing and anti-malware solutions</li>
                <li>Endpoint detection and response</li>
                <li>Mobile device management (MDM)</li>
                <li>Data loss prevention (DLP)</li>
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
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">Advanced threat detection, expert security engineers, and comprehensive cybersecurity solutions that deliver peace of mind and business continuity.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Advanced Security Technology */}
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Shield className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="text-lg font-bold text-blue-700 mb-2">Advanced Security Technology</h4>
              <p className="text-gray-700 text-sm">Cutting-edge cybersecurity technologies and strategic partnerships for the most effective protection available.</p>
            </div>
            {/* Expert Security Team */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Users className="w-8 h-8 text-purple-600 mb-3" />
              <h4 className="text-lg font-bold text-purple-700 mb-2">Expert Security Team</h4>
              <p className="text-gray-700 text-sm">Certified security professionals with years of experience across diverse industries.</p>
            </div>
            {/* Industry-Specific Expertise */}
            <div className="bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <FileText className="w-8 h-8 text-pink-600 mb-3" />
              <h4 className="text-lg font-bold text-pink-700 mb-2">Industry-Specific Expertise</h4>
              <p className="text-gray-700 text-sm">Expertise in healthcare, finance, legal, and education sectors for unique security requirements and compliance.</p>
            </div>
            {/* Proactive Security Approach */}
            <div className="bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Lock className="w-8 h-8 text-indigo-600 mb-3" />
              <h4 className="text-lg font-bold text-indigo-700 mb-2">Proactive Security Approach</h4>
              <p className="text-gray-700 text-sm">Prevention, early detection, and rapid response to minimize business impact and protect critical assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Table */}
      <section className="py-20 bg-white animate-fadeInUp delay-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">
              Our Offerings at a Glance
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 animate-fadeInScale delay-300 font-light">
              Comprehensive cyber security services designed to protect your business operations
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
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Risk Assessment & vCISO</td>
                    <td className="px-8 py-6 text-gray-700">Cybersecurity risk audits, roadmap development, and virtual CISO advisory.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-600">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Threat Detection & Response</td>
                    <td className="px-8 py-6 text-gray-700">24/7 Security Operations monitoring, Endpoint Detection & Response (EDR), Managed Detection & Response (MDR).</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-all duration-300 animate-slideInFromLeft delay-700">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Network & Endpoint Security</td>
                    <td className="px-8 py-6 text-gray-700">Firewall management, intrusion detection/prevention (IDPS), device and application protection.</td>
                  </tr>
                  <tr className="hover:bg-red-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Identity & Access Management</td>
                    <td className="px-8 py-6 text-gray-700">Multi-Factor Authentication (MFA), Zero-Trust security, privileged access controls.</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Dark Web Monitoring</td>
                    <td className="px-8 py-6 text-gray-700">Continuous scanning of the dark web for compromised data and credential leaks.</td>
                  </tr>
                  <tr className="hover:bg-cyan-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Governance, Risk & Compliance (GRC)</td>
                    <td className="px-8 py-6 text-gray-700">HIPAA, PCI, GDPR, and other regulatory compliance frameworks.</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Vulnerability & Penetration Testing</td>
                    <td className="px-8 py-6 text-gray-700">Regular scans, penetration tests, and remediation reports.</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Incident Response & Recovery</td>
                    <td className="px-8 py-6 text-gray-700">Rapid response plans, disaster recovery, and business continuity support.</td>
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
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">Discovery & Strategy | Proactive Defense | Incident Response | Ongoing Support</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-12 h-12 text-blue-600 bg-blue-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-blue-600 leading-tight">Discovery & Strategy</h3>
              </div>
              <p className="text-gray-600 text-sm">We analyze your business needs and define a clear roadmap for security success.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Lock className="w-12 h-12 text-purple-600 bg-purple-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-purple-600 leading-tight">Proactive Defense</h3>
              </div>
              <p className="text-gray-600 text-sm">Continuous monitoring and threat prevention to keep your business safe.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="w-12 h-12 text-green-600 bg-green-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-green-600 leading-tight">Incident Response</h3>
              </div>
              <p className="text-gray-600 text-sm">Rapid response and recovery to minimize impact and restore operations.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-12 h-12 text-indigo-600 bg-indigo-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-indigo-600 leading-tight">Ongoing Support</h3>
              </div>
              <p className="text-gray-600 text-sm">Continuous support and optimization for long-term security and peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section (like homepage) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Insights</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">Explore our latest articles, case studies, and webinars to stay ahead in cybersecurity innovation and best practices.</p>
          </div>
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
              {/* Blog Post 1 - Latest Insights */}
              <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                   onClick={() => (window.location.href = "/resources/blog")}> 
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/practicee-ehr.png" 
                    alt="Threat Detection" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">BLOG POST</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-indigo-300 text-sm font-medium mb-2 block">Threat Detection</span>
                    <h3 className="text-white text-xl font-bold leading-tight">How Threat Detection Prevents Breaches</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Learn how proactive monitoring and detection can stop attacks before they cause damage.
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
                    alt="Incident Response" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-purple-300 text-sm font-medium mb-2 block">Incident Response</span>
                    <h3 className="text-white text-xl font-bold leading-tight">Rapid Response Saves Millions</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    See how our incident response team helped a client recover quickly and avoid major losses.
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
                    alt="Security Webinar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">WEBINAR</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-pink-300 text-sm font-medium mb-2 block">Security Webinar</span>
                    <h3 className="text-white text-xl font-bold leading-tight">Building a Human Firewall</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Join our experts for a deep dive into security awareness and employee training for cyber resilience.
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
            <h2 className="text-4xl font-bold mb-6 animate-text-reveal delay-200">Your business deserves security that is seamless, proactive, and resilient.</h2>
            <p className="text-xl mb-8 text-pink-100 animate-fadeInScale delay-300">
              At Orbitz Technology, we deliver Cybersecurity & Threat Protection Services that eliminate risks, prevent breaches, and ensure business continuity.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us Today
            <Lock className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
      </div>
    )
}
