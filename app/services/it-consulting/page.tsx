import { ArrowRight, Target, TrendingUp, Users, Phone, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ITConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden animate-fadeInUp" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center animate-fadeInUp delay-100">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-text-reveal delay-200 tracking-tight">
              IT Consulting Solutions
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-blue-100 max-w-3xl mx-auto animate-fadeInUp delay-300 font-light">
              Strategic IT guidance to align technology with your business objectives and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-400">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow animate-pulse delay-500"
              >
                Book My Discovery Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-900">What We Do:</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Complete, Secure IT Solutions Designed for Your Success</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Strategic Planning */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 h-full animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center animate-bounceIn delay-500">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-600">Strategic Planning</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-700">
                  Develop comprehensive IT strategies aligned with your business goals.
                </p>
              </CardContent>
            </Card>
            {/* Digital Transformation */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 h-full animate-slideInFromBottom delay-500 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-bounceIn delay-600">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 animate-fadeInScale delay-700">
                    Digital Transformation
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  Guide your organization through digital transformation initiatives.
                </p>
              </CardContent>
            </Card>
            {/* Technology Assessment */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 h-full animate-slideInFromRight delay-600 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center animate-bounceIn delay-700">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 animate-fadeInScale delay-800">
                    Technology Assessment
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  Evaluate current systems and recommend improvements for optimal performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Orbitz Technology Section */}
      <section className="py-20 bg-gray-50 animate-fadeInUp delay-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">
              Why Choose Orbitz Technology?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">
              Industry expertise, proven results, and cutting-edge IT consulting solutions that deliver measurable business impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Industry-Centric Solutions */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-500">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-600">
                  Industry-Centric Solutions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-700">
                  We craft IT strategies rooted in industry understanding and real-world applicability.
                </p>
              </CardContent>
            </Card>
            {/* Proven Track Record */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromBottom delay-500 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-600">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-700">
                  Proven Track Record, Trusted Impact
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  Our solutions mirror the excellence recognized in industry leaders for results-driven consulting.
                </p>
              </CardContent>
            </Card>
            {/* Top-Tier Talent */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromBottom delay-600 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-700">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">
                  Top-Tier Talent
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  Our team brings together IT strategists, engineers, and consultants to build robust solutions.
                </p>
              </CardContent>
            </Card>
            {/* Security, Ethics & Performance */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromRight delay-700 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-800">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">
                  Security, Ethics & Performance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  We embed secure, ethical practices into every project, ensuring responsible innovation.
                </p>
              </CardContent>
            </Card>
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
              Comprehensive IT consulting services designed to transform your business operations
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
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Strategic Planning</td>
                    <td className="px-8 py-6 text-gray-700">Comprehensive IT strategy development and alignment with business goals.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-600">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Digital Transformation</td>
                    <td className="px-8 py-6 text-gray-700">Guidance through digital transformation initiatives and change management.</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-all duration-300 animate-slideInFromLeft delay-700">
                    <td className="px-8 py-6 text-lg font-semibold text-gray-900">Technology Assessment</td>
                    <td className="px-8 py-6 text-gray-700">Evaluation of current systems and recommendations for improvement.</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
            <h2 className="text-4xl font-bold mb-6 animate-text-reveal delay-200">Your business deserves IT strategy that is visionary, practical, and results-driven.</h2>
            <p className="text-xl mb-8 text-pink-100 animate-fadeInScale delay-300">
              At Orbitz Technology, we deliver IT Consulting Services that align technology with business goals and drive digital transformation.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 group hover-glow"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
