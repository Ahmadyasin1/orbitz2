"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Head from "next/head"
import { 
  ArrowRight, 
  Brain, 
  Cpu, 
  Database, 
  Bot, 
  Eye,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  Phone,
  Mail,
  Zap
} from "lucide-react"

export default function AIDevelopmentPage() {
  return (
    <>
      <Head>
        <title>AI Development Services - Custom AI Solutions | Orbitz Technology</title>
        <meta name="description" content="Transform your business with custom AI development services. Machine learning, natural language processing, computer vision, and AI automation solutions by Orbitz Technology experts." />
        <meta name="keywords" content="AI development, machine learning, artificial intelligence, custom AI solutions, NLP, computer vision, AI automation, business intelligence" />
        <link rel="canonical" href="https://www.orbitztechnology.com/services/ai-development" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Development Services",
              "description": "Custom AI and machine learning solutions including natural language processing, computer vision, and AI automation",
              "provider": {
                "@type": "Organization",
                "name": "Orbitz Technology",
                "url": "https://www.orbitztechnology.com",
                "logo": "https://www.orbitztechnology.com/logo.png"
              },
              "serviceType": "AI Development and Machine Learning",
              "url": "https://www.orbitztechnology.com/services/ai-development",
              "areaServed": ["United States", "United Kingdom", "Pakistan"],
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceRange": "$$$"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 text-white relative overflow-hidden" style={{
        background: `linear-gradient(to bottom, rgba(40, 7, 89, 0.7), rgba(236, 72, 153, 0.7)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      }}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center animate-slideInFromBottom delay-100">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-text-reveal delay-200 tracking-tight">
              AI Development Solutions
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-white/90 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light drop-shadow-lg">
              Smart, scalable AI services tailored for your business. Automate, gain insights, and innovate with Orbitz Technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-400">
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
        </div>
      </section>

  {/* What We Do Section */}
  <section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-900">What We Do:</h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Smart, Scalable AI Services</h3>
      <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">From machine learning models to intelligent automation, we deliver comprehensive AI services that drive innovation and operational efficiency.</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* AI Strategy & Consulting */}
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <Brain className="w-10 h-10 text-blue-600 bg-blue-100 rounded-xl p-2" />
          <h3 className="text-xl font-bold text-blue-700">AI Strategy & Consulting</h3>
        </div>
        <p className="text-gray-700 text-base mb-2">
          Planning to go AI-first? We partner with you to assess your landscape, define your AI roadmap, and unlock the right opportunities—from AIOps to legacy system integration and automation strategy.
        </p>
        <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
          <li>AI readiness assessment</li>
          <li>Strategic roadmap development</li>
          <li>Legacy system integration</li>
        </ul>
      </div>

      {/* Custom Generative AI Systems */}
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-10 h-10 text-purple-600 bg-purple-100 rounded-xl p-2" />
          <h3 className="text-xl font-bold text-purple-600">Custom Generative AI Systems</h3>
        </div>
        <p className="text-gray-700 text-base mb-2">
          Leverage the power of generative intelligence—our AI agents and custom model development solutions help you automatically generate content, insights, and experiences that truly resonate.
        </p>
        <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
          <li>Custom model training</li>
          <li>Model adaptation & fine-tuning</li>
          <li>Full lifecycle support</li>
        </ul>
      </div>

      {/* AI-Powered Chatbots & Agents */}
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <Bot className="w-10 h-10 text-pink-500 bg-pink-100 rounded-xl p-2" />
          <h3 className="text-xl font-bold text-pink-600">AI-Powered Chatbots & Agents</h3>
        </div>
        <p className="text-gray-700 text-base mb-2">
          Deliver round-the-clock support with smart chatbots and AI agents. From LLM-powered assistants to voice interfaces, our bots understand context and engage naturally.
        </p>
        <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
          <li>Natural conversational bots</li>
          <li>Intelligent assistants</li>
          <li>Voice interface integration</li>
        </ul>
      </div>

      {/* Advanced Machine Learning */}
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-10 h-10 text-orange-500 bg-orange-100 rounded-xl p-2" />
          <h3 className="text-xl font-bold text-orange-500">Advanced Machine Learning</h3>
        </div>
        <p className="text-gray-700 text-base mb-2">
          Predict trends, detect fraud, personalize responses, and automate intelligently. Using tailored ML pipelines and real-time models to drive smarter decisions.
        </p>
        <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
          <li>Predictive analytics</li>
          <li>Fraud detection systems</li>
          <li>Intelligent automation</li>
        </ul>
      </div>

      {/* Generative AI for Content */}
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <Cpu className="w-10 h-10 text-green-600 bg-green-100 rounded-xl p-2" />
          <h3 className="text-xl font-bold text-green-600">Generative AI for Content</h3>
        </div>
        <p className="text-gray-700 text-base mb-2">
          From generating text, images, or code to streamlining creative workflows, our generative AI capabilities span all forms of media using top frameworks.
        </p>
        <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
          <li>Content generation (text, images, code)</li>
          <li>Creative workflow automation</li>
          <li>Multi-media AI solutions</li>
        </ul>
      </div>

      {/* End-to-End Integration */}
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <Database className="w-10 h-10 text-indigo-600 bg-indigo-100 rounded-xl p-2" />
          <h3 className="text-xl font-bold text-indigo-600">End-to-End Integration</h3>
        </div>
        <p className="text-gray-700 text-base mb-2">
          We ensure your AI solutions integrate securely and seamlessly with DevOps, AIOps, vector databases, RAG systems, and model observability.
        </p>
        <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
          <li>DevOps & AIOps integration</li>
          <li>Vector databases & RAG systems</li>
          <li>Model observability & monitoring</li>
        </ul>
      </div>
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
              Industry expertise, proven results, and cutting-edge AI solutions that deliver measurable business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Industry-Centric Solutions */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-500">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-600">
                  Industry-Centric Solutions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-700">
                  Whether you're in healthcare, finance, logistics, real estate, retail, or beyond, we craft AI that's rooted in industry understanding and real-world applicability.
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
                  Our solutions mirror the excellence recognized in industry leaders for cutting-edge, results-driven development that delivers measurable business outcomes.
                </p>
              </CardContent>
            </Card>

            {/* Top-Tier Talent */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromBottom delay-600 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-700">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">
                  Top-Tier Talent
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  Our team brings together data engineers, AI strategists, developers, and DevOps specialists, all under one roof to build solutions that are as creative as they are robust.
                </p>
              </CardContent>
            </Card>

            {/* Security, Ethics & Performance */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromRight delay-700 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-800">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">
                  Security, Ethics & Performance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">
                  We embed secure, ethical AI practices into every project—from encrypted data handling to bias mitigation and continuous model audits ensuring responsible innovation.
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
              Comprehensive AI services designed to transform your business operations
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
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">AI Strategy & Consulting</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">AI readiness, roadmap, legacy integration</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-all duration-300 animate-slideInFromLeft delay-600">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">Generative AI</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">Custom model training, adaptation, lifecycle support</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-all duration-300 animate-slideInFromLeft delay-700">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">Chatbots & AI Agents</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">Natural conversational bots, intelligent assistants</td>
                  </tr>
                  <tr className="hover:bg-red-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">Machine Learning</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">Predictive analytics, automation, fraud detection</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-all duration-300 animate-slideInFromLeft delay-800">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                          <Database className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">Secure Integration & Ops</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">DevOps, AIOps, observability, RAG, vector stores</td>
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
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">Discovery & Strategy | Proactive Development | Integration | Ongoing Support</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Brain className="w-12 h-12 text-blue-600 bg-blue-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-blue-600 leading-tight">Discovery & Strategy</h3>
              </div>
              <p className="text-gray-600 text-sm">We analyze your business needs and define a clear roadmap for AI success.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Cpu className="w-12 h-12 text-purple-600 bg-purple-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-purple-600 leading-tight">Proactive Development</h3>
              </div>
              <p className="text-gray-600 text-sm">We build, train, and validate AI models using cutting-edge techniques.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Database className="w-12 h-12 text-green-600 bg-green-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-green-600 leading-tight">Integration</h3>
              </div>
              <p className="text-gray-600 text-sm">Seamless integration with your existing systems and workflows for maximum impact.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Bot className="w-12 h-12 text-indigo-600 bg-indigo-100 rounded-xl p-2" />
                <h3 className="text-lg font-bold text-indigo-600 leading-tight">Ongoing Support</h3>
              </div>
              <p className="text-gray-600 text-sm">Continuous support and optimization for long-term AI success and peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section (like homepage) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Insights</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">Explore our latest articles, case studies, and webinars to stay ahead in AI innovation and best practices.</p>
          </div>
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
              {/* Blog Post 1 - Latest Insights */}
              <div className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                   onClick={() => (window.location.href = "/resources/blog")}> 
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/ai-neural-network-data.png" 
                    alt="AI Innovation" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">BLOG POST</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-indigo-300 text-sm font-medium mb-2 block">AI Innovation</span>
                    <h3 className="text-white text-xl font-bold leading-tight">How AI Drives Business Growth</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Discover how AI solutions are transforming industries and creating new opportunities.
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
                    alt="Case Study" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-purple-300 text-sm font-medium mb-2 block">Case Study</span>
                    <h3 className="text-white text-xl font-bold leading-tight">AI Implementation Success</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    See how our AI solutions helped a client achieve measurable results and operational efficiency.
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
                    alt="AI Webinar" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">WEBINAR</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-pink-300 text-sm font-medium mb-2 block">AI Webinar</span>
                    <h3 className="text-white text-xl font-bold leading-tight">AI for Business Leaders</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Join our experts for a deep dive into AI strategy and implementation for business growth.
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
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16 animate-slideInFromBottom delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-text-reveal delay-200 tracking-tight">
              Our AI Development Process
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInScale delay-300 font-light">
              A proven, systematic approach to deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-10">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-500">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-600">Discovery & Analysis</h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-700">We understand your business needs, data landscape, and AI opportunities.</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromBottom delay-500 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-600">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-700">Data Preparation</h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">We clean, organize, and prepare your data for optimal AI model performance.</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromBottom delay-600 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-700">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">Model Development</h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">We build, train, and validate AI models using cutting-edge techniques.</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full animate-slideInFromRight delay-700 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-800">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 animate-fadeInScale delay-800">Deployment & Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed animate-slideInFromBottom delay-800">We deploy AI solutions and provide ongoing monitoring and optimization.</p>
              </CardContent>
            </Card>
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
            <h2 className="text-4xl font-bold mb-6 animate-text-reveal delay-200">Your business deserves AI that is innovative, scalable, and transformative.</h2>
            <p className="text-xl mb-8 text-pink-100 animate-fadeInScale delay-300">
              At Orbitz Technology, we deliver AI Development Services that automate processes, unlock insights, and drive business growth.
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
      </div>
    </>
  )
}
