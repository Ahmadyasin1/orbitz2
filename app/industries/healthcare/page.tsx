"use client";
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Head from "next/head"

export default function HealthcarePage() {
  return (
    <>
      <Head>
        <title>Healthcare IT Solutions - HIPAA Compliant Systems | Orbitz Technology</title>
        <meta name="description" content="HIPAA-compliant healthcare IT solutions including EMR/EHR systems, telehealth platforms, patient engagement tools, and healthcare mobile apps by Orbitz Technology." />
        <meta name="keywords" content="healthcare IT, HIPAA compliant, EMR EHR systems, telehealth, patient engagement, healthcare mobile apps, medical software development" />
        <link rel="canonical" href="https://www.orbitztechnology.com/industries/healthcare" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Healthcare IT Solutions",
              "description": "HIPAA-compliant healthcare IT solutions including EMR/EHR systems, telehealth platforms, and patient engagement tools",
              "provider": {
                "@type": "Organization",
                "name": "Orbitz Technology",
                "url": "https://www.orbitztechnology.com",
                "logo": "https://www.orbitztechnology.com/logo.png"
              },
              "serviceType": "Healthcare IT and Medical Software Development",
              "url": "https://www.orbitztechnology.com/industries/healthcare",
              "audience": {
                "@type": "Audience",
                "audienceType": "Healthcare Providers, Hospitals, Medical Practices"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Secure, Scalable Healthcare IT Solutions
          </h1>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-gray-700 font-light">Orbitz Technology helps healthcare providers, research institutions, pharmaceutical companies, and health startups harness digital innovation.</p>
          </div>
        </div>
      </section>

  {/* Solutions Section */}
  <section className="pt-4 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">Healthcare Solutions We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-pink-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Telehealth Platforms</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Connect providers and patients with flexible, secure telemedicine services.</li>
                <li>Live video/audio consultations</li>
                <li>Secure chat & image sharing</li>
                <li>Patient records integration</li>
                <li>Payment & insurance gateway integration</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Patient Engagement Tools</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Empower patients to actively manage their health and improve provider–patient communication.</li>
                <li>Patient portals</li>
                <li>Telehealth integration</li>
                <li>Wellness & lifestyle apps</li>
                <li>Education & self-service tools</li>
                <li>Engagement analytics & reporting</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-purple-700 mb-2">Electronic Medical Records (EMR/EHR)</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Manage patient data securely and support interoperability across healthcare networks.</li>
                <li>Comprehensive medical history storage</li>
                <li>Lab results & treatment plans in one view</li>
                <li>Scheduling & automated reminders</li>
                <li>Data consolidation from devices & third-party systems</li>
                <li>Speech-to-text records entry</li>
                <li>E-prescriptions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Orbitz Technology */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 flex-1">
            <h2 className="text-3xl font-bold mb-6 text-purple-700">Why Orbitz Technology?</h2>
            <p className="text-lg text-gray-700 mb-4">Healthcare organizations choose Orbitz Technology because we combine deep medical IT expertise with a commitment to compliance, scalability, and user-centric design.</p>
            <ul className="list-disc ml-6 text-gray-700 text-left max-w-3xl mx-auto">
              <li>Healthcare IT expertise – Proven ability to build HIPAA-, GDPR-, and ISO-compliant solutions.</li>
              <li>Standards-driven development – Familiarity with FHIR, HL7, ICD-10, DICOM, and US/EU healthcare regulations.</li>
              <li>Scalable systems – Solutions that grow with your operations, from startups to enterprise healthcare networks.</li>
              <li>End-to-end support – From consulting and system design through launch, upgrades, and long-term support.</li>
              <li>Innovation-ready – Integration of AI, ML, predictive analytics, IoT, and automation for future-proof healthcare software.</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="/practicee-ehr.png" alt="Healthcare IT" className="rounded-xl shadow-md object-cover w-full h-80 max-w-md" />
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Implementation Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-purple-700 mb-2">1. Discovery & Strategy</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Stakeholder interviews & workflow assessment</li>
                <li>Requirements gathering & regulatory analysis</li>
                <li>Optimal technology stack selection</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-pink-700 mb-2">2. Development & Integration</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Custom software or platform-based solution design</li>
                <li>Compliance-first architecture (HIPAA/GDPR/FDA)</li>
                <li>Integration with hospital systems & third-party apps</li>
                <li>Rigorous QA and interoperability testing</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-2">3. Deployment</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>System rollout within IT infrastructure</li>
                <li>Data migration from legacy systems</li>
                <li>User training & onboarding programs</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-purple-700 mb-2">4. Post-Deployment & Support</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Continuous monitoring & performance optimization</li>
                <li>Security audits & compliance updates</li>
                <li>Feature upgrades, extensions, and scaling support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 flex-1">
            <h2 className="text-3xl font-bold mb-6 text-purple-700">Expertise in Emerging Healthcare Technologies</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>AI & Machine Learning – Diagnostic support, predictive analytics, and clinical decision assistance.</li>
              <li>RPA (Robotic Process Automation) – Intelligent bots for patient queries, scheduling, and reporting.</li>
              <li>Virtual & Augmented Reality (VR/AR/MR) – Surgical precision, medical training, and patient education.</li>
              <li>Medical Imaging Software – Automated medical image classification and analytics for faster, more accurate diagnoses.</li>
              <li>IoT-enabled Solutions – Remote patient monitoring, connected devices, and smart medical systems.</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="/modern-data-center.png" alt="Emerging Healthcare Tech" className="rounded-xl shadow-md object-cover w-full h-80 max-w-md" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build the Future of Healthcare Together</h2>
        <p className="text-xl mb-8 text-pink-100">
          At Orbitz Technology, we combine healthcare domain knowledge with strong engineering expertise to deliver digital solutions that transform care delivery. Whether you’re looking to create a next-gen telehealth app, modernize legacy EHRs, or implement advanced analytics, our team can help you achieve measurable results.
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

      {/* Insights Section (like homepage) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Insights</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">Explore our latest articles, case studies, and webinars to stay ahead in healthcare innovation and best practices.</p>
          </div>
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
              {/* Blog Post 1 - Latest Insights */}
              <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                   onClick={() => (window.location.href = "/resources/blog")}> 
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/practicee-ehr.png" 
                    alt="Healthcare Data Analytics" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">BLOG POST</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-indigo-300 text-sm font-medium mb-2 block">Healthcare Data Analytics</span>
                    <h3 className="text-white text-xl font-bold leading-tight">How Data Analytics Improves Patient Outcomes</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Learn how advanced analytics and AI are transforming healthcare delivery and decision-making.
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
                    alt="Telehealth Success" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-purple-300 text-sm font-medium mb-2 block">Telehealth Success</span>
                    <h3 className="text-white text-xl font-bold leading-tight">Telehealth Platform Scales Nationwide</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    See how our telehealth solution helped a provider expand access and improve patient engagement.
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
                    alt="Mobile Health Webinar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">WEBINAR</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-pink-300 text-sm font-medium mb-2 block">Mobile Health Webinar</span>
                    <h3 className="text-white text-xl font-bold leading-tight">Mobile Apps for Patient Engagement</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Join our experts for a deep dive into mobile health solutions and patient engagement strategies.
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
      </div>
    </>
  )
}
