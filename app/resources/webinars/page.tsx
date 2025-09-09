"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Video, 
  Calendar, 
  Users, 
  Clock, 
  Play,
  BookOpen,
  Download,
  TrendingUp,
  Shield,
  Cloud,
  Code,
  Search,
  Filter
} from "lucide-react"
import { useState } from "react"

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  
  const categories = ["All", "Cybersecurity", "Cloud Computing", "AI & Machine Learning", "Digital Transformation", "Industry Insights"]
  const types = ["All", "Upcoming", "On-Demand", "Live"]
  
  const webinars = [
    {
      title: "Zero Trust Security: Implementation Strategies for 2024",
      category: "Cybersecurity",
      type: "Upcoming",
      date: "August 25, 2024",
      time: "2:00 PM EST",
      duration: "60 minutes",
      presenter: "Sarah Johnson, CISO",
      attendees: "250+ registered",
      description: "Learn how to implement zero trust architecture in your organization with practical strategies and real-world examples.",
      image: "/placeholder.jpg",
      isLive: false
    },
    {
      title: "AI-Powered Business Analytics: Transforming Decision Making",
      category: "AI & Machine Learning",
      type: "On-Demand",
      date: "July 15, 2024",
      time: "Available Now",
      duration: "45 minutes",
      presenter: "Dr. Michael Chen, AI Director",
      attendees: "1,200+ views",
      description: "Discover how artificial intelligence is revolutionizing business analytics and decision-making processes.",
      image: "/placeholder.jpg",
      isLive: false
    },
    {
      title: "Cloud Migration Best Practices: Enterprise Success Stories",
      category: "Cloud Computing",
      type: "On-Demand",
      date: "June 20, 2024",
      time: "Available Now",
      duration: "55 minutes",
      presenter: "Jennifer Martinez, Cloud Architect",
      attendees: "850+ views",
      description: "Real-world case studies and proven methodologies for successful enterprise cloud migration.",
      image: "/placeholder.jpg",
      isLive: false
    },
    {
      title: "The Future of Remote Work: Technology Trends & Security",
      category: "Digital Transformation",
      type: "Upcoming",
      date: "September 10, 2024",
      time: "1:00 PM EST",
      duration: "50 minutes",
      presenter: "Robert Kim, Technology Consultant",
      attendees: "180+ registered",
      description: "Explore emerging technologies shaping the future of remote work and essential security considerations.",
      image: "/placeholder.jpg",
      isLive: false
    },
    {
      title: "Healthcare Digital Transformation: Lessons Learned",
      category: "Industry Insights",
      type: "On-Demand",
      date: "May 28, 2024",
      time: "Available Now",
      duration: "40 minutes",
      presenter: "Dr. Amanda Foster, Healthcare IT",
      attendees: "950+ views",
      description: "Key insights from successful digital transformation initiatives in healthcare organizations.",
      image: "/placeholder.jpg",
      isLive: false
    },
    {
      title: "Cybersecurity Threat Landscape 2024: What You Need to Know",
      category: "Cybersecurity",
      type: "Live",
      date: "Today",
      time: "3:00 PM EST",
      duration: "45 minutes",
      presenter: "Alex Thompson, Security Expert",
      attendees: "Live Now",
      description: "Current cybersecurity threats and actionable strategies to protect your organization.",
      image: "/placeholder.jpg",
      isLive: true
    }
  ]

  const filteredWebinars = webinars.filter(webinar => {
    const categoryMatch = selectedCategory === "All" || webinar.category === selectedCategory
    const typeMatch = selectedType === "All" || webinar.type === selectedType
    return categoryMatch && typeMatch
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Technology Webinars
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Expert-led sessions on the latest technology trends, best practices, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold"
              >
                Register for Upcoming
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold"
              >
                Watch On-Demand
                <Play className="w-5 h-5 ml-2" />
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
                placeholder="Search webinars..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Category:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-gray-700">Type:</span>
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedType === type
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={webinar.image} 
                    alt={webinar.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      webinar.type === 'Live' 
                        ? 'bg-red-600 text-white animate-pulse' 
                        : webinar.type === 'Upcoming'
                        ? 'bg-green-600 text-white'
                        : 'bg-blue-600 text-white'
                    }`}>
                      {webinar.type === 'Live' ? '🔴 LIVE' : webinar.type}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-2 py-1 rounded text-xs font-medium">
                      {webinar.category}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-purple-600 ml-1" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {webinar.description}
                  </p>

                  {/* Webinar Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {webinar.date} • {webinar.time}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      {webinar.attendees}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      Presenter: {webinar.presenter}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className={`w-full rounded-lg font-medium ${
                    webinar.type === 'Upcoming'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : webinar.type === 'Live'
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}>
                    {webinar.type === 'Upcoming' && (
                      <>
                        <Calendar className="w-4 h-4 mr-2" />
                        Register Now
                      </>
                    )}
                    {webinar.type === 'Live' && (
                      <>
                        <Video className="w-4 h-4 mr-2" />
                        Join Live
                      </>
                    )}
                    {webinar.type === 'On-Demand' && (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Watch Now
                      </>
                    )}
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
              Webinar Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert-led webinars cover the most important technology topics affecting businesses today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
                <p className="text-gray-600 text-sm">Threat protection and security strategies</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Computing</h3>
                <p className="text-gray-600 text-sm">Migration and optimization strategies</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & ML</h3>
                <p className="text-gray-600 text-sm">Artificial intelligence applications</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Transformation</h3>
                <p className="text-gray-600 text-sm">Business modernization approaches</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-12">
            <Video className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss a Webinar
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to receive notifications about upcoming webinars and access to exclusive on-demand content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Host a Webinar?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Share your expertise with our community and showcase your knowledge to technology professionals.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold"
          >
            Propose a Webinar Topic
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
