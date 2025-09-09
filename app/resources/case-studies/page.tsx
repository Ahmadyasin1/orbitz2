"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, Building2, Heart, Factory, GraduationCap, Home, Download, Eye, Clock, DollarSign, BarChart3, BookOpen, Star, Award } from "lucide-react"

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const categories = [
    { name: "All", icon: BookOpen },
    { name: "Healthcare", icon: Heart },
    { name: "Financial", icon: Building2 },
    { name: "Manufacturing", icon: Factory },
    { name: "Education", icon: GraduationCap },
    { name: "Real Estate", icon: Home }
  ]

  const caseStudies = [
    {
      id: 1,
      title: "CRM Cloud Migration with AI & Copilot Enablement in Financial Services",
      subtitle: "Microsoft Dynamics CRM to Dynamics 365 Online Migration",
      industry: "Financial",
      client: "Leading Financial Services Firm",
      duration: "12 months",
      team_size: "8 specialists",
      image: "/modern-office-colorful-lighting.png",
      thumbnail: "/modern-office-colorful-lighting.png",
      challenge: "A leading financial services firm relied on an aging on-premise Microsoft Dynamics CRM, limiting scalability, data security, and innovation potential. To modernize client management, strengthen compliance, and unlock AI-driven insights, the firm needed a seamless migration to Dynamics 365 Online.",
      solution: "The Orbitz Technology team successfully led the end-to-end migration of Microsoft Dynamics CRM from on-premise to Dynamics 365 Online, delivering a secure, scalable, and modern platform while aligning business, technology, and compliance stakeholders.",
      implementation: [
        "Governance & Reporting – Facilitated monthly Steering Committee meetings and provided transparent executive reporting",
        "Test Transformation – Modernized testing by moving from Excel to Jira Xray, ensuring efficiency and compliance traceability",
        "Regulatory Compliance – Collaborated with InfoSec and Deloitte to meet stringent financial security and infrastructure requirements",
        "Agile Delivery – Partnered with system integration teams using Azure DevOps for backlog management, bug triage, and issue resolution",
        "AI & Copilot Roadmap – Researched and planned adoption of AI and Microsoft Copilot features within Dynamics 365 to enable predictive customer insights, automate workflows, and enhance financial advisor productivity",
        "Change Adoption – Delivered training, newsletters, and communications to drive user adoption and trust in the new platform and upcoming AI capabilities"
      ],
      results: [
        "Modernized CRM platform with enhanced security",
        "Foundation laid for AI-powered client engagement",
        "Improved compliance readiness",
        "Enhanced operational efficiency",
        "Smarter recommendations for financial advisors",
        "Automated reporting capabilities",
        "Enhanced client interaction tools",
        "Next-generation data-driven customer relationship management"
      ],
      metrics: {
        efficiency: "Significant",
        compliance: "100%",
        ai_readiness: "Complete",
        satisfaction: "High"
      },
      technologies: ["Microsoft Dynamics 365", "Azure DevOps", "Jira Xray", "AI & Copilot", "Cloud Migration", "Financial Compliance"],
      color: "from-blue-500 to-cyan-500",
      testimonial: {
        quote: "The migration not only modernized our CRM platform but also positioned us for AI-powered client engagement in a highly regulated industry.",
        author: "CTO",
        position: "Financial Services Firm"
      }
    },
    {
      id: 2,
      title: "Global Marketing Tech Transformation in the Technology Industry",
      subtitle: "Stensul & Folloze Implementation for Enhanced Marketing Operations",
      industry: "Technology",
      client: "Global Technology Leader",
      duration: "18 months",
      team_size: "10 specialists",
      image: "/ai-neural-network-data.png",
      thumbnail: "/ai-neural-network-data.png",
      challenge: "A global technology leader needed to streamline its email marketing and account-based marketing (ABM) processes, which were slowed by manual approvals, inconsistent design standards, and complex agency handoffs. Additionally, the organization required stronger privacy and governance controls to meet global data protection expectations while scaling marketing programs across multiple regions.",
      solution: "The Orbitz Technology team led the implementation and delivery of Stensul (Email Creation Platform) and Folloze (ABM Engagement Platform), enhancing speed, compliance, and design consistency across global business teams.",
      implementation: [
        "Faster Campaign Execution – Implemented Stensul globally, reducing email campaign go-to-market time by 50% and introducing efficiencies in layout approval and agency handoff",
        "Governance & Privacy – Partnered with the data privacy team to implement governance guardrails in Folloze, ensuring compliance with global privacy standards in account-based marketing campaigns",
        "Custom Development – Designed an integrated Stensul–Eloqua solution to support internal communications, enabling marketers to repurpose approved templates for employee-facing communications",
        "Design Enforcement – Collaborated with the design team to ensure consistent brand and design principles across Stensul, Eloqua, and Folloze platforms",
        "Partner Marketing Expansion – Supported partner marketing program managers to roll out the Stensul-based email solution to Cisco partner teams across North America, ensuring adoption and alignment with brand best practices"
      ],
      results: [
        "50% reduction in email campaign go-to-market time",
        "Global brand consistency enforcement",
        "Privacy compliance embedded across ABM campaigns",
        "Enhanced external customer engagement",
        "Improved internal communication workflows",
        "Greater scalability over global marketing operations",
        "Successful partner marketing program rollout",
        "Streamlined agency handoff processes"
      ],
      metrics: {
        time_reduction: "50%",
        efficiency: "Significant",
        compliance: "100%",
        scalability: "Enhanced"
      },
      technologies: ["Stensul", "Folloze", "Eloqua", "Marketing Automation", "Privacy Compliance", "Brand Management"],
      color: "from-purple-500 to-pink-500",
      testimonial: {
        quote: "The program delivered significant marketing efficiency gains while enforcing global brand consistency and embedding privacy compliance across our campaigns.",
        author: "Marketing Director",
        position: "Global Technology Leader"
      }
    },
    {
      id: 3,
      title: "CRM Cloud Transformation for Commercial Real Estate",
      subtitle: "Microsoft Dynamics CRM Migration and Custom Application Development",
      industry: "Real Estate",
      client: "Leading Commercial Real Estate Firm",
      duration: "15 months",
      team_size: "12 specialists",
      image: "/modern-data-center.png",
      thumbnail: "/modern-data-center.png",
      challenge: "A leading commercial real estate firm relied on legacy CRM tools that lacked scalability, mobility, and integration with core financial systems. Sales teams across the Americas faced inefficiencies managing leads, generating quotes, and standardizing processes across diverse regional markets. The firm required a CRM modernization initiative that could unify processes, integrate with back-office systems, and support the speed and transparency demanded in real estate transactions.",
      solution: "The Orbitz Technology team led the migration of Microsoft Dynamics CRM to the cloud and delivered a custom CRM application for the Americas Markets Teams, providing a scalable and feature-rich platform tailored to the firm's needs.",
      implementation: [
        "CRM Cloud Migration – Successfully migrated Dynamics CRM from on-premise to the cloud, unlocking the platform's latest features and ensuring flexibility for future growth",
        "Custom CRM App Development – Designed and delivered a custom Dynamics CRM-based application integrated with PeopleSoft to support the end-to-end quoting process for real estate leads, improving response speed and accuracy for client opportunities",
        "Sales Process Standardization – Collaborated with North American business leaders to define a standardized sales process within the CRM, while accommodating unique regional variations across different markets",
        "User-Centric Delivery – Ensured business alignment through regular stakeholder engagement, requirements workshops, and platform demos, driving smooth adoption across regional sales teams"
      ],
      results: [
        "Modernized cloud-enabled CRM platform",
        "Streamlined lead-to-quote cycle times",
        "Greater process consistency across regional markets",
        "Enhanced integration with financial systems",
        "Improved visibility into sales pipelines",
        "Faster quote generation capabilities",
        "Scalable operations in competitive environment",
        "Unified platform for sales teams"
      ],
      metrics: {
        efficiency: "Significant",
        integration: "Enhanced",
        scalability: "Improved",
        adoption: "Smooth"
      },
      technologies: ["Microsoft Dynamics CRM", "Cloud Migration", "PeopleSoft Integration", "Custom Development", "Sales Process Automation"],
      color: "from-green-500 to-emerald-500",
      testimonial: {
        quote: "The modernized CRM platform streamlined our operations and enhanced our ability to scale in a competitive real estate environment.",
        author: "Sales Director",
        position: "Commercial Real Estate Firm"
      }
    },
    {
      id: 4,
      title: "CRM & Service Cloud Transformation in the Heavy Equipment Industry",
      subtitle: "Comprehensive Customer Engagement and Service Operations Modernization",
      industry: "Manufacturing",
      client: "Global Heavy Equipment Manufacturer",
      duration: "24 months",
      team_size: "18 specialists",
      image: "/business-success.png",
      thumbnail: "/business-success.png",
      challenge: "A global heavy equipment manufacturer serving the Agriculture (AG) and Construction Equipment (CE) markets across North America needed to modernize its customer engagement strategy. The firm relied on fragmented CRM processes, inconsistent customer data, and outsourced call center operations, leading to high call handling times (CHT) and increased operational costs. Additionally, siloed marketing functions made it difficult to engage customers consistently across sales, service, and marketing channels.",
      solution: "The Orbitz Technology team delivered a comprehensive transformation program to modernize CRM, digitize service operations, and optimize marketing automation for the NAFTA AG and CE business units.",
      implementation: [
        "Unified CRM & Marketing Oversight – Took ownership of all CRM and marketing automation needs for AG and CE brands, ensuring business-wide consistency and scalability",
        "Call Center Modernization – Scoped and implemented a Service Cloud–based Call Center solution for Breakdown Assistance, improving real-time visibility into cases and faster resolution for customers",
        "Marketing Automation Enablement – Led the selection and onboarding of a Marketing Automation platform, enabling personalized campaigns and stronger dealer and customer engagement",
        "Customer Data Standardization – Defined and executed a re-platforming of the customer database with enhanced deduplication and standardization rules, improving data quality for sales, service, and marketing teams",
        "In-sourced Call Center Operations – Transitioned call center support back in-house with a Microsoft Dynamics solution, delivering a 20% reduction in Call Handling Time (CHT) and 20% annual cost savings (YOY)"
      ],
      results: [
        "20% reduction in Call Handling Time (CHT)",
        "20% annual cost savings (YOY)",
        "Faster roadside and breakdown assistance",
        "Improved customer satisfaction and loyalty",
        "Clean, standardized customer data access",
        "More effective campaigns and upsell opportunities",
        "Strong digital foundation for customer engagement",
        "Streamlined operations across equipment lifecycle"
      ],
      metrics: {
        cht_reduction: "20%",
        cost_savings: "20%",
        efficiency: "Significant",
        satisfaction: "Improved"
      },
      technologies: ["Microsoft Dynamics", "Service Cloud", "Marketing Automation", "Customer Data Platform", "Call Center Solutions", "CRM Integration"],
      color: "from-orange-500 to-red-500",
      testimonial: {
        quote: "The transformation delivered measurable business value with faster customer support, cleaner data, and significant cost savings while improving our digital foundation.",
        author: "Operations Director",
        position: "Heavy Equipment Manufacturer"
      }
    }
  ]

  const filteredStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedCategory)

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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-200 text-sm">Successful Projects</div>
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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
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
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-16">
            {filteredStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${study.color} opacity-90`}></div>
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
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
                            <div className="font-medium">{study.duration}</div>
                          </div>
                          <div>
                            <Users className="w-4 h-4 mb-1" />
                            <div className="font-medium">{study.team_size}</div>
                          </div>
                          <div>
                            <Award className="w-4 h-4 mb-1" />
                            <div className="font-medium">Success</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-10 lg:p-12">
                    <div className="mb-6">
                      <div className="text-purple-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                        {study.client}
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                        {study.title}
                      </h2>
                      <p className="text-xl text-gray-600 font-medium">
                        {study.subtitle}
                      </p>
                    </div>
                    
                    <div className="space-y-8 mb-10">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          Challenge
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          Solution
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                          <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {value}
                          </div>
                          <div className="text-sm text-gray-600 capitalize font-medium mt-1">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="mb-10">
                      <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Key Results
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 font-medium text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
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

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8">
                      <div className="flex items-start">
                        <div className="text-4xl text-purple-600 mr-4">"</div>
                        <div>
                          <p className="text-gray-700 italic mb-4 leading-relaxed">
                            {study.testimonial.quote}
                          </p>
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                              {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                              <div className="text-sm text-gray-600">{study.testimonial.position}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        <Download className="w-4 h-4 mr-2" />
                        Download Full Case Study
                      </Button>
                      <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-full font-semibold">
                        <Eye className="w-4 h-4 mr-2" />
                        View Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
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

// Add CSS animations to globals.css
const additionalStyles = `
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-5deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(3deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}
`
