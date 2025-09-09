"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  BookOpen, 
  Download, 
  Calendar, 
  FileText, 
  TrendingUp,
  Shield,
  Cloud,
  Code,
  Users,
  Search,
  Filter
} from "lucide-react"
import { useState } from "react"

export default function WhitepapersPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const categories = ["All", "Cybersecurity", "Cloud Computing", "AI & Machine Learning", "Digital Transformation", "Industry Reports"]
  
  const whitepapers = [
    {
      title: "The Future of Cybersecurity: Zero Trust Architecture",
      category: "Cybersecurity",
      description: "Comprehensive guide to implementing zero trust security frameworks in modern organizations.",
      pages: 28,
      date: "August 2024",
      downloadCount: "2.5K+",
      image: "/placeholder.jpg"
    },
    {
      title: "Cloud Migration Strategies for Enterprise Success",
      category: "Cloud Computing", 
      description: "Best practices and proven methodologies for successful cloud adoption and migration.",
      pages: 35,
      date: "July 2024",
      downloadCount: "3.1K+",
      image: "/placeholder.jpg"
    },
    {
      title: "AI Implementation Roadmap for SMBs",
      category: "AI & Machine Learning",
      description: "Practical guide for small and medium businesses to leverage artificial intelligence effectively.",
      pages: 22,
      date: "June 2024", 
      downloadCount: "1.8K+",
      image: "/placeholder.jpg"
    },
    {
      title: "Digital Transformation in Healthcare: Trends & Opportunities",
      category: "Industry Reports",
      description: "Comprehensive analysis of digital transformation trends and opportunities in healthcare sector.",
      pages: 42,
      date: "May 2024",
      downloadCount: "4.2K+",
      image: "/placeholder.jpg"
    },
    {
      title: "Remote Work Security: Complete Protection Guide",
      category: "Cybersecurity",
      description: "Essential security measures and best practices for protecting remote workforce environments.",
      pages: 31,
      date: "April 2024",
      downloadCount: "2.9K+",
      image: "/placeholder.jpg"
    },
    {
      title: "Multi-Cloud Strategy: Optimization and Management",
      category: "Cloud Computing",
      description: "Strategic approaches to managing and optimizing multi-cloud environments for maximum ROI.",
      pages: 38,
      date: "March 2024",
      downloadCount: "2.1K+",
      image: "/placeholder.jpg"
    }
  ]

  const filteredWhitepapers = selectedCategory === "All" 
    ? whitepapers 
    : whitepapers.filter(wp => wp.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Technology Whitepapers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              In-depth research, insights, and best practices to help you make informed technology decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold"
              >
                Browse All Whitepapers
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold"
              >
                Subscribe for Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search whitepapers..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-gray-600" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWhitepapers.map((whitepaper, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={whitepaper.image} 
                    alt={whitepaper.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {whitepaper.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-2 py-1 rounded text-xs font-medium">
                      {whitepaper.pages} pages
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {whitepaper.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {whitepaper.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {whitepaper.date}
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {whitepaper.downloadCount} downloads
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Download Whitepaper
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Technology Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our whitepapers cover the latest technology trends and best practices across various domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
                <p className="text-gray-600 text-sm">Advanced security strategies and threat protection</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Computing</h3>
                <p className="text-gray-600 text-sm">Migration strategies and optimization techniques</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & ML</h3>
                <p className="text-gray-600 text-sm">Artificial intelligence implementation guides</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Transformation</h3>
                <p className="text-gray-600 text-sm">Business modernization strategies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Research
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to receive new whitepapers, industry insights, and technology trends directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Custom Research?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our experts can create custom whitepapers and research reports tailored to your specific technology challenges.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold"
          >
            Request Custom Research
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
