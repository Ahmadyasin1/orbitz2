"use client"
import { Card } from "@/components/ui/card"
import { Lightbulb, Repeat, ShieldCheck, CheckCircle } from "lucide-react"

export default function CompanyApproachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="py-16 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-text-reveal delay-200 tracking-tight">
          Our Methodology
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light animate-fadeInScale delay-300">
          Transforming complexity into clarity and ideas into impactful solutions—rooted in a disciplined yet agile approach.
        </p>
      </section>

      {/* Infographic / Visual Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <Card className="p-8 flex flex-col items-center shadow-xl animate-slideInFromLeft delay-400">
            <Lightbulb className="w-10 h-10 text-pink-600 mb-4" />
            <h3 className="text-lg font-bold text-pink-600 mb-2">Careful Discovery</h3>
            <p className="text-gray-700 text-sm text-center">Deep understanding through analysis and engagement ensures strategies align with your goals.</p>
          </Card>
          <Card className="p-8 flex flex-col items-center shadow-xl animate-slideInFromBottom delay-500">
            <Repeat className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-bold text-orange-500 mb-2">Agile Delivery</h3>
            <p className="text-gray-700 text-sm text-center">Iterative cycles enable rapid feedback, early value, and adaptability to evolving requirements.</p>
          </Card>
          <Card className="p-8 flex flex-col items-center shadow-xl animate-slideInFromBottom delay-600">
            <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-blue-600 mb-2">Proof-of-Concept Driven</h3>
            <p className="text-gray-700 text-sm text-center">Milestones validate ideas early, reduce risk, and refine solutions for measurable impact.</p>
          </Card>
          <Card className="p-8 flex flex-col items-center shadow-xl animate-slideInFromRight delay-700">
            <ShieldCheck className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-lg font-bold text-purple-600 mb-2">Secure & Optimum Solutions</h3>
            <p className="text-gray-700 text-sm text-center">Robust, secure, and optimized solutions empower confident operations and seamless scaling.</p>
          </Card>
        </div>
      </section>
    </div>
  )
}
