import Link from "next/link"

import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FinancialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Transforming Finance Through Innovation
          </h1>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-gray-700 font-light">Secure. Scalable. Intelligent. Orbitz Technology delivers modern financial software for banks, fintechs, and insurance leaders—</p>
            <p className="text-lg md:text-xl text-gray-700 font-light">empowering growth, compliance, and customer trust</p>
            <p className="text-lg md:text-xl text-gray-700 font-light">in a digital-first world.</p>
          </div>
        </div>
      </section>

  {/* Solutions Section */}
  <section className="pt-4 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">Financial Software Solutions We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-purple-700 mb-2">Wealth & Investment Management</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Portfolio optimization</li>
                <li>Market & volatility analysis</li>
                <li>Risk assessment & rebalancing</li>
                <li>Investment diversification tools</li>
                <li>Alerts & notifications for timely trades</li>
                <li>Model portfolio management</li>
                <li>Investment calculators (profit/loss, position sizing, returns)</li>
              </ul>
              <p className="mt-4 text-gray-700 text-sm">AI-powered platforms for advisors, firms, and investors. ISO/IEC, PCI DSS, GDPR, and local regulatory compliance.</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Digital Self-Service Solutions</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Chatbots & AI-powered virtual assistants</li>
                <li>Automated customer support with escalation to agents</li>
                <li>Personalized financial recommendations</li>
                <li>Bias detection & advisory guidance</li>
                <li>Expense tracking and budgeting tools</li>
                <li>Self-service portals with FAQs & learning hubs</li>
                <li>Secure authentication & identity verification (KYC/AML)</li>
                <li>Personalized dashboards & insights</li>
              </ul>
              <p className="mt-4 text-gray-700 text-sm">Customer-friendly platforms for BFSIs, compliant with KYC/AML regulations.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Banking Software Development</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Core Banking Systems: Account management, payment processing, deposits & loan management, insurance & policy management, currency exchange, cross-border remittances & transfers, automated reporting</li>
                <li>Mobile Banking Apps: Account creation & management, personalized dashboards, payment scheduling, location-based offers, security alerts, integration with wearables/IoT</li>
                <li>Banking CRM Solutions: Customer journey mapping, segmentation, omnichannel engagement, workflow management, data synchronization</li>
              </ul>
              <p className="mt-4 text-gray-700 text-sm">End-to-end banking ecosystems and modular solutions for retail, commercial, investment, and central banks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Orbitz Technology for BFSI */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-700">Why Orbitz Technology for BFSI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <ul className="list-disc ml-6 text-gray-700 text-left">
                <li>Domain Expertise – Years of experience delivering software tailored to banking, insurance, and financial organizations.</li>
                <li>Compliance-First Development – Expertise in PCI DSS, GDPR, ISO 27001, SOX, and other international financial regulations.</li>
                <li>Enterprise-Grade Security – Failsafe encryption, role-based access, MFA, blockchain integrations, and fraud prevention.</li>
                <li>Proven Scalability – From startup fintech platforms to enterprise banking systems.</li>
                <li>Integration Excellence – Connecting with payment gateways, trading APIs, accounting systems, and financial ecosystems.</li>
                <li>Innovation-Ready – AI, ML, robotic process automation (RPA), predictive analytics, blockchain, and open banking APIs.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <ul className="list-disc ml-6 text-gray-700 text-left">
                <li>Enhanced security – Multi-layer encryption and fraud-proof architectures.</li>
                <li>Improved customer trust – Compliant, transparent, and safe digital experiences.</li>
                <li>Operational efficiency – Automation of back-office and customer-facing processes.</li>
                <li>Personalized financial services – Tailored recommendations, insights, and products.</li>
                <li>Faster time-to-market – Agile delivery backed by deep BFSI expertise.</li>
                <li>Cost optimization – Reduced overheads with self-service and automation.</li>
              </ul>
            </div>
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
                <li>Industry analysis, risk assessment, and compliance gap review</li>
                <li>Requirement gathering & technology stack selection</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-pink-700 mb-2">2. Solution Development</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Platform configuration or custom development</li>
                <li>Security-first architecture design</li>
                <li>Third-party system/API integration</li>
                <li>QA & regulatory testing</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-2">3. Deployment & Data Migration</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Seamless transition from legacy systems</li>
                <li>User onboarding and cross-department training</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-purple-700 mb-2">4. Post-Launch & Continuous Support</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Performance optimization & scaling</li>
                <li>Security upgrades & compliance audits</li>
                <li>Ongoing technical support and system modernization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 flex-1">
            <h2 className="text-3xl font-bold mb-6 text-purple-700">Expertise in Emerging Financial Technologies</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>AI & ML – Market predictions, fraud detection, trading algorithms, robo-advisors.</li>
              <li>Blockchain & Digital Ledger Technologies – Secure transactions, smart contracts, cross-border settlements.</li>
              <li>RPA (Robotic Process Automation) – Automated KYC, claims, account reconciliation, and reporting.</li>
              <li>Open Banking APIs – Interoperability and new customer experience opportunities.</li>
              <li>Data Analytics & BI – Predictive and prescriptive dashboards for executives.</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" alt="Emerging Financial Tech" className="rounded-xl shadow-md object-cover w-full h-80 max-w-md" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Partner With Orbitz Technology</h2>
        <p className="text-xl mb-8 text-pink-100">
          As a trusted technology partner, Orbitz Technology helps banks, insurance providers, and financial institutions modernize their IT ecosystems without compromising on security, compliance, or performance.<br />
          Whether you need AI-powered wealth management platforms, next-gen mobile banking apps, or advanced risk and compliance systems, our team is ready to deliver.
        </p>
        <Link href="/contact" className="inline-block bg-white text-purple-700 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-purple-100 transition-all text-lg">Contact Us</Link>
      </section>
    </div>
  )
}
