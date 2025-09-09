import Link from "next/link"

import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ManufacturingIndustryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Manufacturing Technology Solutions
          </h1>
          <p className="text-2xl md:text-3xl mb-10 text-white/90 max-w-3xl mx-auto font-light drop-shadow-lg">
            At Orbitz Technology, we understand what it takes to build an end-to-end digital ecosystem that empowers manufacturers to transform their operations. From supply chain optimization to digital factories and smart manufacturing analytics, we help global leaders and emerging companies create real-time, connected, and intelligent solutions that accelerate output, reduce costs, and improve product quality.
            By combining expertise in Industry 4.0, IoT, automation, and AI-driven analytics, we enable manufacturers to drive operational efficiency, sustainability, and resilience while staying ahead of rapidly evolving market demands.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">Our Manufacturing Technology Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-8 shadow-md">
              <ul className="list-disc ml-6 text-gray-700">
                <li>Improve efficiency and profitability</li>
                <li>Accelerate time-to-market for new products</li>
                <li>Reduce downtime and optimize resource use</li>
                <li>Streamline supply chain and inventory management</li>
                  Manufacturing Excellence Through Digital Dominance
                <li>Enhance product quality and customer satisfaction</li>
              </ul>
                  Orbitz Technology empowers automotive and manufacturing enterprises to achieve operational excellence, compliance, and customer engagement through AI-driven innovation, automation, and scalable digital solutions.
              <ul className="list-disc ml-6 text-gray-700">
                <li>Smart Factory & Digital Twin Implementations</li>
                <li>Predictive Maintenance & Asset Management</li>
                <li>Supply Chain & Inventory Optimization</li>
                <li>Warehouse & Logistics Management</li>
                <li>Manufacturing Execution Systems (MES)</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 shadow-md">
              <ul className="list-disc ml-6 text-gray-700">
                <li>Production Planning & Workforce Scheduling</li>
                <li>IoT & Sensor-Based Monitoring Systems</li>
                <li>Product Lifecycle Management (PLM)</li>
                <li>Enterprise Resource Planning (ERP) Integrations</li>
                <li>Demand Forecasting with Real-time Analytics</li>
                <li>Automation & Robotics Integration</li>
                <li>Sustainability & Energy Efficiency Tracking</li>
                <li>Compliance & Safety Management Systems</li>
                <li>Customer Feedback & Product Performance Insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Orbitz Technology for Manufacturing */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-700">Why Orbitz Technology for Manufacturing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <ul className="list-disc ml-6 text-gray-700 text-left">
                <li>Deep Industry Experience – Expertise across discrete, process, automotive, high-tech, and industrial manufacturing sectors.</li>
                <li>Industry 4.0 Readiness – IoT, automation, robotics, and machine learning for smart, connected plants.</li>
                <li>Scalable Solutions – From pilot projects to global rollouts, we design systems that scale with business growth.</li>
                <li>Compliance-Focused – Tailored to meet ISO, OSHA, GDPR, and industry regulations for data and safety.</li>
                <li>Secure by Design – Enterprise-grade cybersecurity with encrypted integrations and role-based access controls.</li>
                <li>Operational Excellence – Streamlined processes that lower costs and improve workforce efficiency.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <ul className="list-disc ml-6 text-gray-700 text-left">
                <li>Lower operational costs through optimized production and supply chain.</li>
                <li>Higher productivity & reduced downtime with predictive maintenance.</li>
                <li>Improved quality control and compliance adherence.</li>
                <li>Faster time-to-market with digital twin simulations and real-time analytics.</li>
                <li>Smarter decision-making powered by AI, IoT, and big data.</li>
                <li>Greater customer satisfaction through demand forecasting and product feedback management.</li>
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
              <h3 className="text-lg font-bold text-purple-700 mb-2">1. Discovery & Planning</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Process and ecosystem assessment</li>
                <li>Technology roadmap aligned with business goals</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-pink-700 mb-2">2. Solution Development</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Smart factory systems, MES, ERP, IoT platforms</li>
                <li>Custom software and integrations</li>
                <li>Quality, compliance, and reporting modules</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-2">3. Deployment & Scaling</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Pilot programs with iterative rollout</li>
                <li>Seamless integration with existing workflows</li>
                <li>Training and workforce enablement</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-purple-700 mb-2">4. Post-Launch Optimization</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Real-time monitoring and predictive analytics</li>
                <li>Proactive maintenance and issue resolution</li>
                <li>Continuous upgrades to support future growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Emerging Technologies We Integrate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <ul className="list-disc ml-6 text-gray-700">
                <li>AI & Machine Learning – Predictive quality, production forecasting, and anomaly detection.</li>
                <li>IoT & Edge Computing – Real-time visibility into machines, tools, and shop-floor performance.</li>
                <li>Robotics & Automation – Streamlined workflows, reduced human error, and higher efficiency.</li>
                <li>Digital Twins – Virtual modeling for process optimization and product innovation.</li>
                <li>AR/VR for Manufacturing – Training, remote maintenance, and immersive prototyping.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Partner With Orbitz Technology</h2>
        <p className="text-xl mb-8 text-pink-100">
          At Orbitz Technology, we help manufacturers connect people, processes, and platforms across the value chain to deliver smarter, safer, and more sustainable operations. Whether it’s building a digital factory, optimizing the supply chain, or deploying IoT-driven predictive maintenance systems, we are your trusted partner for digital transformation in manufacturing.
        </p>
        <Link href="/contact" className="inline-block bg-white text-purple-700 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-purple-100 transition-all text-lg">Contact Us</Link>
      </section>
    </div>
  );
}
