"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, Building2, Heart, Factory, GraduationCap, Home, Download, Eye, Clock, DollarSign, BarChart3, BookOpen, Star, Award, Search } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface CaseStudy {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image_url: string
  client_name: string
  industry: string
  project_duration: string
  project_budget: string
  technologies: string[]
  results: any
  published_at: string
  created_at: string
  updated_at: string
  status: string
  views: number
}

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)
  
  const categories = [
    { name: "All", icon: BookOpen },
    { name: "Healthcare", icon: Heart },
    { name: "Financial", icon: Building2 },
    { name: "Manufacturing", icon: Factory },
    { name: "Education", icon: GraduationCap },
    { name: "Real Estate", icon: Home },
    { name: "Technology", icon: TrendingUp },
  ]

  useEffect(() => {
    loadCaseStudies()
  }, [])

  const loadCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false })

      if (error) throw error
      setCaseStudies(data || [])
    } catch (error) {
      console.error('Error loading case studies:', error)
    } finally {
      setLoading(false)
    }
  }

  // Filter case studies based on search term and selected category
  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.industry.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || study.industry === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getIndustryColor = (industry: string) => {
    const colors = {
      'Financial': 'from-blue-500 to-cyan-500',
      'Technology': 'from-purple-500 to-pink-500', 
      'Real Estate': 'from-green-500 to-emerald-500',
      'Manufacturing': 'from-orange-500 to-red-500',
      'Healthcare': 'from-pink-500 to-rose-500',
      'Education': 'from-indigo-500 to-purple-500'
    }
    return colors[industry as keyof typeof colors] || 'from-gray-500 to-gray-600'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading case studies...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Hero Section with Book Background */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800"></div>
        
        {/* Book/Knowledge Pattern Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-lg animate-float-delayed"></div>
          <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-pink-400/5 rounded-full blur-2xl animate-float-slow"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 font-light">
            Discover how we've transformed businesses across industries with innovative technology solutions. 
            Each case study represents a journey of digital transformation and measurable success.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{caseStudies.length}+</div>
              <div className="text-purple-200 text-sm">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-purple-200 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$50M+</div>
              <div className="text-purple-200 text-sm">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{new Set(caseStudies.map(s => s.industry)).size}+</div>
              <div className="text-purple-200 text-sm">Industries Served</div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-500 px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transform"
            onClick={() => {
              const studiesSection = document.getElementById('case-studies');
              if (studiesSection) {
                studiesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore Success Stories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
          <div className="flex flex-col items-center hover:scale-110 transition-transform">
            <span className="text-sm mb-3 font-medium tracking-wider uppercase">Discover</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies by title, client, or industry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full bg-white shadow-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              )
            })}
          </div>

          {/* Results Count */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Showing {filteredStudies.length} case stud{filteredStudies.length === 1 ? 'y' : 'ies'}
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {filteredStudies.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No Case Studies Found</h3>
              <p className="text-gray-500">
                {searchTerm || selectedCategory !== "All" 
                  ? "Try adjusting your search criteria or browse all case studies."
                  : "Case studies will appear here once added to the database."
                }
              </p>
              {(searchTerm || selectedCategory !== "All") && (
                <Button 
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  className="mt-4"
                  variant="outline"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          ) : (
            <div className="grid gap-16">
              {filteredStudies.map((study, index) => (
                <Card key={study.id} className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image Section */}
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${getIndustryColor(study.industry)} opacity-90`}></div>
                      {study.featured_image_url ? (
                        <img 
                          src={study.featured_image_url} 
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <Building2 className="w-24 h-24 text-gray-400" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/30"></div>
                      
                      {/* Industry Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                          {study.industry}
                        </span>
                      </div>

                      {/* Project Info */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                          <div className="grid grid-cols-3 gap-4 text-white text-sm">
                            <div>
                              <Clock className="w-4 h-4 mb-1" />
                              <div className="font-medium">{study.project_duration || 'N/A'}</div>
                            </div>
                            <div>
                              <DollarSign className="w-4 h-4 mb-1" />
                              <div className="font-medium">{study.project_budget || 'Contact Us'}</div>
                            </div>
                            <div>
                              <Eye className="w-4 h-4 mb-1" />
                              <div className="font-medium">{study.views || 0} views</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent className="p-10 lg:p-12">
                      <div className="mb-6">
                        <div className="text-purple-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                          {study.client_name}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                          {study.title}
                        </h2>
                        <p className="text-xl text-gray-600 font-medium">
                          {study.excerpt}
                        </p>
                      </div>
                      
                      <div className="space-y-8 mb-10">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            Overview
                          </h3>
                          <div 
                            className="text-gray-700 leading-relaxed prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: study.content.substring(0, 300) + '...' }}
                          />
                        </div>
                      </div>

                      {/* Key Results */}
                      {study.results && Object.keys(study.results).length > 0 && (
                        <div className="mb-10">
                          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            Key Results
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {Object.entries(study.results).slice(0, 6).map(([key, value], idx) => (
                              <div key={idx} className="flex items-start p-3 bg-green-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium text-sm">
                                  {typeof value === 'string' ? value : `${key}: ${value}`}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technologies */}
                      {study.technologies && study.technologies.length > 0 && (
                        <div className="mb-10">
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {study.technologies.map((tech, idx) => (
                              <span key={idx} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Project Details */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Project Details</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Published:</span>
                            <div className="font-semibold">{formatDate(study.published_at)}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Industry:</span>
                            <div className="font-semibold">{study.industry}</div>
                          </div>
                          {study.project_duration && (
                            <div>
                              <span className="text-gray-600">Duration:</span>
                              <div className="font-semibold">{study.project_duration}</div>
                            </div>
                          )}
                          {study.project_budget && (
                            <div>
                              <span className="text-gray-600">Investment:</span>
                              <div className="font-semibold">{study.project_budget}</div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                          <Download className="w-4 h-4 mr-2" />
                          Download Full Case Study
                        </Button>
                        <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-full font-semibold">
                          <Eye className="w-4 h-4 mr-2" />
                          View Project Details
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-purple-100">
            Join the growing list of businesses that have transformed their operations with our innovative technology solutions. 
            Let's create your next success story together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              onClick={() => (window.location.href = "/contact")}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 hover:border-white/70 px-10 py-4 rounded-full font-semibold text-lg bg-transparent backdrop-blur-sm transition-all duration-300"
              onClick={() => (window.location.href = "/services")}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
