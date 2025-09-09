"use client"

import { useState, useEffect, useRef } from "react"
import type { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Menu,
  X,
  ArrowRight,
  Shield,
  Code,
  Users,
  Globe,
  Phone,
  Mail,
  Clock,
  Award,
  CheckCircle,
  Building2,
  Stethoscope,
  Briefcase,
  Home,
  GraduationCap,
  Scale,
  ShoppingBag,
  Factory,
  Laptop,
  Cloud,
  Database,
  BookOpen,
  FileText,
  Video,
  Presentation,
} from "lucide-react"

export default function OrbitzTechnologyHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Video content configuration
  const videoContent = [
    {
      id: 1,
      videoSrc: "/hero_bg.mp4", // Keep existing video for AI content
      title: {
        line1: "Unlock Growth With Smart AI",
        line2: "Boost Productivity, Cut Costs"
      },
      description: "Embrace the future of work with AI-powered transformation. Drive efficiency, agility, and growth with solutions built just for you.",
      primaryButton: "Explore AI Solutions",
    secondaryButton: "Book Discovery Call",
      overlayStyle: "from-purple-600/80 via-pink-500/70 to-purple-700/80" // Original gradient
    },
    {
      id: 2,
      videoSrc: "/hero_bg2.mp4", // This will be the IT partner video (same video, different overlay)
      title: {
        line1: "Your All-in-One IT Partner",
        line2: "for Growth"
      },
      description: "Cut through complexity with integrated hardware, infrastructure, and custom software. Scale smarter, work easier, and unlock new possibilities.",
    primaryButton: "Discover Our Solutions",
    secondaryButton: "Book Discovery Call",
      overlayStyle: "from-blue-600/80 via-cyan-500/70 to-blue-700/80" // Different gradient for visual distinction
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Video rotation effect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentVideoIndex((prevIndex) => 
          prevIndex === videoContent.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000) // Change every 3 seconds as requested
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [videoContent.length, isPaused])

  // Function to handle manual video switching
  const handleVideoSwitch = (index: number) => {
    setCurrentVideoIndex(index)
    // Reset the interval when manually switching
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentVideoIndex((prevIndex) => 
          prevIndex === videoContent.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000)
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const handleDropdownEnter = (dropdownName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(dropdownName)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const services = [
  { name: "Managed IT Services", href: "/services/managed-it", icon: Cloud, desc: "24/7 IT support and management" },
  { name: "Software Development", href: "/services/software-development", icon: Laptop, desc: "Custom software solutions" },
  { name: "Technology Advisory", href: "/services/technology-advisory", icon: Users, desc: "Strategic technology guidance" },
  { name: "AI Development", href: "/services/ai-development", icon: Code, desc: "Artificial intelligence solutions" },
  { name: "Cyber Security", href: "/services/cybersecurity", icon: Shield, desc: "Advanced security solutions" },
  ]

  const industries = [
    { name: "Healthcare", href: "/industries/healthcare", icon: Stethoscope, desc: "HIPAA-compliant solutions" },
    { name: "Financial Services", href: "/industries/financial", icon: Briefcase, desc: "Secure banking technology" },
    { name: "Real Estate", href: "/industries/real-estate", icon: Home, desc: "Property management systems" },
    { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory, desc: "Industrial IoT solutions" },
    { name: "Education", href: "/industries/education", icon: GraduationCap, desc: "Learning management systems" },
    { name: "Legal", href: "/industries/legal", icon: Scale, desc: "Case management solutions" },
  ]

  const resources = [
    { 
      name: "Case Studies", 
      href: "#case-studies", 
      icon: FileText,
      action: () => {
        const caseStudiesSection = document.getElementById('case-studies-section');
        if (caseStudiesSection) {
          caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { name: "Blog", href: "https://orbitztechnology.com/blog", icon: Presentation },
  ]

  return (
    <>
      {/* SEO Head Elements */}
      <head>
        <title>Orbitz Technology - Leading IT Solutions, AI Development & Cybersecurity Services</title>
        <meta name="description" content="Transform your business with Orbitz Technology's expert IT consulting, AI development, cybersecurity, and software solutions. Serving healthcare, finance, and hi-tech industries across Chicago, UK & Pakistan." />
        <meta name="keywords" content="IT consulting Chicago, AI development services, cybersecurity solutions, software development, managed IT services, technology advisory, healthcare IT, financial IT, digital transformation" />
        <link rel="canonical" href="https://www.orbitztechnology.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Orbitz Technology",
              "image": "https://www.orbitztechnology.com/logo.png",
              "description": "Leading IT consulting, AI development, cybersecurity, and software solutions provider serving businesses across healthcare, finance, and hi-tech industries.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "14 Kimberley Cir",
                "addressLocality": "Oak Brook",
                "addressRegion": "IL",
                "postalCode": "60523",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.8369,
                "longitude": -87.9495
              },
              "url": "https://www.orbitztechnology.com",
              "telephone": "+13196104889",
              "email": "info@orbitztechnology.com",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "IT Consulting",
                  "description": "Strategic IT consulting for business transformation"
                },
                {
                  "@type": "Service", 
                  "name": "AI Development",
                  "description": "Custom AI and machine learning solutions"
                },
                {
                  "@type": "Service",
                  "name": "Cybersecurity",
                  "description": "Comprehensive cybersecurity solutions and threat protection"
                },
                {
                  "@type": "Service",
                  "name": "Software Development",
                  "description": "Custom software development and digital solutions"
                }
              ]
            })
          }}
        />
      </head>
      
      <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[90vh] sm:h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Video Container with Smooth Transitions */}
          <div className="relative w-full h-full">
            {videoContent.map((content, index) => (
              <div
                key={content.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentVideoIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <video
                  key={`video-${content.id}-${currentVideoIndex}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-1000"
                  style={{ filter: "brightness(0.7)" }}
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.play().catch(console.error);
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <source src={content.videoSrc} type="video/mp4" />
                </video>
                
                {/* Dynamic Gradient Overlay with enhanced animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${content.overlayStyle} pointer-events-none animate-pulse-glow`}></div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Animated Particles Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-bounce-in animation-delay-100"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white/50 rounded-full animate-bounce-in animation-delay-300"></div>
            <div className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-white/30 rounded-full animate-bounce-in animation-delay-500"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce-in animation-delay-700"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/35 rounded-full animate-bounce-in animation-delay-800"></div>
          </div>
        </div>

        {/* Dynamic Content with enhanced animations */}
        <div className="relative z-10 text-center text-white px-3 sm:px-4 lg:px-6 max-w-6xl mx-auto">
          <div className="animate-slide-in-bottom">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              <span 
                key={`line1-${currentVideoIndex}`}
                className="block bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent animate-text-reveal"
              >
                {videoContent[currentVideoIndex].title.line1}
              </span>
              <span 
                key={`line2-${currentVideoIndex}`}
                className="block bg-gradient-to-r from-pink-100 via-white to-purple-100 bg-clip-text text-transparent animate-text-reveal animation-delay-200"
              >
                {videoContent[currentVideoIndex].title.line2}
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-scale animation-delay-400">
            <p 
              key={`desc-${currentVideoIndex}`}
              className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-white/95 max-w-4xl mx-auto leading-relaxed font-light animate-slide-in-bottom animation-delay-500 px-2"
            >
              {videoContent[currentVideoIndex].description}
            </p>
          </div>

          <div className="animate-slide-in-bottom animation-delay-700">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-0 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-blue-500/20 hover:scale-105 transform transition-all duration-400 group"
                onClick={() => {
                  if (currentVideoIndex === 0) {
                    window.location.href = "/services/ai-development"
                  } else {
                    window.location.href = "/services/technology-advisory"
                  }
                }}
              >
                {videoContent[currentVideoIndex].primaryButton}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-700 border-2 border-blue-600 hover:bg-blue-50 hover:text-blue-800 transition-all duration-400 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-blue-500/20 hover:scale-105 transform"
                onClick={() => (window.location.href = "/contact")}
              >
                {videoContent[currentVideoIndex].secondaryButton}
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
          onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(2)');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div className="flex flex-col items-center hover:scale-110 transition-transform">
            <span className="text-sm mb-3 font-medium tracking-wider uppercase">Explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Capabilities Section - Moved from below */}
      <section id="services" className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-slideInFromBottom delay-100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 animate-text-reveal delay-200">IT Capabilities That Power Your Business</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto animate-fadeInScale delay-300 px-2">
              We provide comprehensive technology solutions that drive digital transformation and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {/* Technology Advisory */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 h-full animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-600">Technology Advisory</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow animate-slideInFromBottom delay-700">
                  We help businesses improve operations through tailored software solutions aligned with business goals and technical capacity.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Implementation Strategy</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Technology Advisory</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Business Consulting</span>
                  </li>
                </ul>
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 text-sm font-semibold mt-auto group hover-glow"
                  onClick={() => window.location.href = "/services/technology-advisory"}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* AI Development */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-pink-50 h-full animate-slideInFromBottom delay-500 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-600">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-700">AI Development</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow animate-slideInFromBottom delay-800">
                  Custom-built AI solutions with advanced machine learning models and NLP systems for actionable insights and smarter decisions.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>AI Assistants & Chatbots</span>
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Custom LLMs</span>
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>NLP Solutions</span>
                  </li>
                </ul>
                <Button 
                  variant="ghost" 
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 text-sm font-semibold mt-auto group hover-glow"
                  onClick={() => window.location.href = "/services/ai-development"}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Software Development */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-emerald-50 h-full animate-slideInFromLeft delay-600 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-700">
                    <Laptop className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">Software Development</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow animate-slideInFromBottom delay-800">
                  Full-cycle software development for enterprises, SMBs, and startups, backed by 20+ years of expertise and innovation.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Custom Development</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Platform Implementation</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>App Modernization</span>
                  </li>
                </ul>
                <Button 
                  variant="ghost" 
                  className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 text-sm font-semibold mt-auto group hover-glow"
                  onClick={() => window.location.href = "/services/software-development"}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Cyber Security */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-gradient-to-br from-red-50 to-orange-50 h-full animate-slideInFromBottom delay-700 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-800">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">Cyber Security</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow animate-slideInFromBottom delay-800">
                  Comprehensive cybersecurity services protecting organizational IT assets and building resilient digital ecosystems.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Software Security</span>
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Network Monitoring</span>
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Infrastructure Protection</span>
                  </li>
                </ul>
                <Button 
                  variant="ghost" 
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 p-0 text-sm font-semibold mt-auto group hover-glow"
                  onClick={() => window.location.href = "/services/cybersecurity"}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Managed IT Services */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-gradient-to-br from-cyan-50 to-blue-50 h-full animate-slideInFromRight delay-800 hover-lift">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounceIn delay-800">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight animate-fadeInScale delay-800">Managed IT Services</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow animate-slideInFromBottom delay-800">
                  Comprehensive managed IT services optimizing environments by integrating specialists with in-house teams.
                </p>
                <ul className="text-xs text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Software Management</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Infrastructure Management</span>
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>24/7 Monitoring</span>
                  </li>
                </ul>
                <Button 
                  variant="ghost" 
                  className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 p-0 text-sm font-semibold mt-auto group hover-glow"
                  onClick={() => window.location.href = "/services/managed-it"}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Partners Section - Moved below IT Capabilities */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our Partners</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">Trusted by industry leaders and innovators</p>
          <div className="relative">
            <div className="overflow-hidden group" style={{height: '110px'}}>
              <div
                className="flex gap-10 w-max items-center animate-partners-scroll group-hover:paused"
                style={{ minWidth: 'max-content', padding: '0 32px' }}
                onMouseEnter={e => e.currentTarget.classList.add('paused')}
                onMouseLeave={e => e.currentTarget.classList.remove('paused')}
              >
                {/* Partner logos, duplicated for seamless scroll */}
                {[
                  { src: "/aws.png", alt: "AWS" },
                  { src: "/insight-logo.png", alt: "Insight" },
                  { src: "/microsoft.png", alt: "Microsoft" },
                  { src: "/weave-logo.png", alt: "Weave" },
                  { src: "/google.png", alt: "Google" },
                  { src: "/teramind-logo.png", alt: "Teramind" },
                  { src: "/cisco-meraki-logo.png", alt: "Cisco Meraki" },
                  { src: "/chipmath-high-tech-community-logo.png", alt: "Chipmath" },
                ].concat([
                  { src: "/aws.png", alt: "AWS" },
                  { src: "/insight-logo.png", alt: "Insight" },
                  { src: "/microsoft.png", alt: "Microsoft" },
                  { src: "/weave-logo.png", alt: "Weave" },
                  { src: "/google.png", alt: "Google" },
                  { src: "/teramind-logo.png", alt: "Teramind" },
                  { src: "/cisco-meraki-logo.png", alt: "Cisco Meraki" },
                  { src: "/chipmath-high-tech-community-logo.png", alt: "Chipmath" },
                ]).map((partner, idx) => (
                  <img
                    key={idx}
                    src={partner.src}
                    alt={partner.alt}
                    className="object-contain h-14 w-28 mx-2 drop-shadow transition-transform duration-300 hover:scale-105"
                    style={{ filter: 'none', background: 'transparent' }}
                  />
                ))}
              </div>
            </div>
            <style jsx>{`
              @keyframes partners-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-partners-scroll {
                animation: partners-scroll 38s linear infinite;
              }
              .group:hover .animate-partners-scroll,
              .animate-partners-scroll.paused {
                animation-play-state: paused !important;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Slalom Inspired Design */}
      <section id="case-studies-section" className="py-8 sm:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8 animate-slideInFromBottom delay-100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 animate-text-reveal delay-200">Case Studies</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto animate-fadeInScale delay-300">
              See How We've Helped Businesses Achieve Growth Through Innovative IT Solutions
            </p>
          </div>
          
          {/* Horizontal Scrollable Case Studies with Image Focus */}
          <div className="relative animate-slideInFromLeft delay-400">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-8 pb-6" style={{ width: 'max-content' }}>
                
                {/* Case Study 1 - Financial Services CRM */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer animate-slideInFromLeft delay-500 hover-lift"
                     onClick={() => (window.location.href = "/resources/case-studies")}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/business-success.png" 
                      alt="Financial Services CRM Transformation" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 animate-fadeInScale delay-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold animate-bounceIn delay-700">CASE STUDY</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-blue-300 text-sm font-medium mb-2 block animate-slideInFromBottom delay-800">Financial Services</span>
                      <h3 className="text-white text-xl font-bold leading-tight animate-text-reveal delay-800">CRM Cloud Migration with AI Integration</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 animate-fadeInScale delay-800">
                      Complete transformation from on-premise Microsoft Dynamics CRM to Dynamics 365 Online with AI-powered Copilot implementation, delivering enhanced customer insights and streamlined operations.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">AI Ready</div>
                          <div className="text-xs text-gray-500">Platform</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">40%</div>
                          <div className="text-xs text-gray-500">Efficiency</div>
                        </div>
                      </div>
                      <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-700 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study 2 - Technology Marketing */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                     onClick={() => (window.location.href = "/resources/case-studies")}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/ai-neural-network-data.png" 
                      alt="Marketing Technology Transformation" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-purple-300 text-sm font-medium mb-2 block">Technology</span>
                      <h3 className="text-white text-xl font-bold leading-tight">Global Marketing Tech Transformation</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Revolutionized email marketing and ABM processes with Stensul and Folloze implementation, dramatically reducing campaign time-to-market and improving engagement rates.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">50%</div>
                          <div className="text-xs text-gray-500">Time Saved</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">3x</div>
                          <div className="text-xs text-gray-500">ROI</div>
                        </div>
                      </div>
                      <div className="flex items-center text-purple-600 text-sm font-semibold group-hover:text-purple-700 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study 3 - Commercial Real Estate */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                     onClick={() => (window.location.href = "/resources/case-studies")}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/modern-office-colorful-lighting.png" 
                      alt="Real Estate CRM Transformation" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-green-300 text-sm font-medium mb-2 block">Real Estate</span>
                      <h3 className="text-white text-xl font-bold leading-tight">CRM Cloud Transformation</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Seamless migration of Dynamics CRM to cloud with custom application development for Americas Markets Teams, featuring PeopleSoft integration and enhanced workflow automation.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">Enhanced</div>
                          <div className="text-xs text-gray-500">Workflow</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">Cloud</div>
                          <div className="text-xs text-gray-500">Ready</div>
                        </div>
                      </div>
                      <div className="flex items-center text-green-600 text-sm font-semibold group-hover:text-green-700 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study 4 - Heavy Equipment Industry */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                     onClick={() => (window.location.href = "/resources/case-studies")}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/modern-data-center.png" 
                      alt="Heavy Equipment CRM & Service Cloud" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">CASE STUDY</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-orange-300 text-sm font-medium mb-2 block">Manufacturing</span>
                      <h3 className="text-white text-xl font-bold leading-tight">CRM & Service Cloud Transformation</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Comprehensive CRM modernization and Service Cloud-based Call Center implementation for heavy equipment industry, achieving significant operational improvements and cost reductions.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">20%</div>
                          <div className="text-xs text-gray-500">Cost Saved</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">Modern</div>
                          <div className="text-xs text-gray-500">Platform</div>
                        </div>
                      </div>
                      <div className="flex items-center text-orange-600 text-sm font-semibold group-hover:text-orange-700 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blog Post 1 - Latest Insights */}
                <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                     onClick={() => (window.location.href = "/resources/blog")}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/practicee-ehr.png" 
                      alt="AI in Healthcare" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">BLOG POST</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-indigo-300 text-sm font-medium mb-2 block">Healthcare Technology</span>
                      <h3 className="text-white text-xl font-bold leading-tight">AI Revolution in Healthcare</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Exploring how artificial intelligence is transforming patient care, streamlining operations, and revolutionizing healthcare delivery in the digital age.
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

              </div>
            </div>
            
            {/* Enhanced Scroll Navigation */}
            <div className="absolute top-1/2 -left-2 sm:-left-5 transform -translate-y-1/2 z-10">
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-2 sm:-right-5 transform -translate-y-1/2 z-10">
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Dual CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 sm:mt-16">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => (window.location.href = "/resources/case-studies")}
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300"
              onClick={() => (window.location.href = "/resources/blog")}
            >
              Read Latest Blogs
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 text-gray-900 tracking-tight">By The Numbers</h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">World-Class Software Development Consulting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto text-left text-gray-700 mb-8 sm:mb-12 lg:mb-14">
              <div>
                <h3 className="font-semibold text-xl mb-2 text-blue-700">AI Solutions & Automation</h3>
                <p className="text-base">Transform productivity with intelligent automation and AI-driven workflows that eliminate manual tasks.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-purple-700">Tailored Software Development</h3>
                <p className="text-base">Custom-built applications and integrations designed to streamline your unique business processes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-pink-700">Intelligent Cloud Infrastructure</h3>
                <p className="text-base">Scalable, high-performance cloud platforms engineered to evolve with your growth trajectory while optimizing operational costs.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-indigo-700">Comprehensive Cyber Protection</h3>
                <p className="text-base">Multi-layered security architecture with industry-standard compliance (HIPAA, PCI DSS, SOC 2, GDPR) ensuring complete protection of your critical business data and client information.</p>
              </div>
            </div>
          </div>
          <div className="relative py-6 sm:py-8 px-2 sm:px-4 rounded-3xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-xl">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Stat Card 1 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center py-7 px-4 transition-transform duration-300 hover:-translate-y-1 animate-fadein">
                <div className="bg-blue-100 rounded-full p-2 mb-3">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 17V9m4 8V9m4 8V9" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-base text-gray-500 font-medium">Completed Projects</div>
              </div>
              {/* Stat Card 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center py-7 px-4 transition-transform duration-300 hover:-translate-y-1 animate-fadein" style={{animationDelay: '0.1s'}}>
                <div className="bg-purple-100 rounded-full p-2 mb-3">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 20v-4m0-4V4m0 12a4 4 0 1 0 0-8" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">20+</div>
                <div className="text-base text-gray-500 font-medium">Years of Experience</div>
              </div>
              {/* Stat Card 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center py-7 px-4 transition-transform duration-300 hover:-translate-y-1 animate-fadein" style={{animationDelay: '0.2s'}}>
                <div className="bg-pink-100 rounded-full p-2 mb-3">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M17 21v-4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">20,000+</div>
                <div className="text-base text-gray-500 font-medium">Work Hours</div>
              </div>
              {/* Stat Card 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center py-7 px-4 transition-transform duration-300 hover:-translate-y-1 animate-fadein" style={{animationDelay: '0.3s'}}>
                <div className="bg-indigo-100 rounded-full p-2 mb-3">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 17V9m4 8V9m4 8V9" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-base text-gray-500 font-medium">Customers</div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .animate-fadein {
              animation: fadein 1s ease both;
            }
            @keyframes fadein {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-slideInFromBottom delay-100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 animate-text-reveal delay-200">What makes Orbitz Technology a top development company</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 animate-fadeInScale delay-300">Why industry leaders choose us as their technology partner</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 h-full animate-slideInFromLeft delay-400 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3 animate-bounceIn delay-500">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 animate-fadeInScale delay-600">Business-First Philosophy</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm animate-slideInFromBottom delay-700">
                  We prioritize your business objectives over implementing technology for technology's sake. Our approach ensures every solution directly contributes to your bottom line and operational efficiency.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    ROI-focused implementations
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Stakeholder alignment process
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Measurable business outcomes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 h-full animate-slideInFromBottom delay-500 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3 animate-bounceIn delay-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 animate-fadeInScale delay-700">Proactive Excellence</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm animate-slideInFromBottom delay-800">
                  Our proactive monitoring and maintenance approach prevents issues before they impact your business. We don't just fix problems—we prevent them from occurring.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    24/7 system monitoring
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Predictive maintenance
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Automated issue resolution
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 h-full animate-slideInFromRight delay-600 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3 animate-bounceIn delay-700">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 animate-fadeInScale delay-800">Enterprise Security</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm animate-slideInFromBottom delay-800">
                  Comprehensive cybersecurity that goes beyond basic protection. We implement enterprise-grade security frameworks tailored to your industry's specific compliance requirements.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Multi-layered security architecture
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Compliance automation
                  </li>
                  <li className="flex items-center animate-slideInFromLeft delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Threat intelligence integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 h-full animate-slideInFromLeft delay-700 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3 animate-bounceIn delay-800">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 animate-fadeInScale delay-800">Dedicated Partnership</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm animate-slideInFromBottom delay-800">
                  You're not just a client—you're a partner. Our dedicated account management ensures consistent communication and strategic alignment with your evolving business needs.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Quarterly business reviews
                  </li>
                  <li className="flex items-center animate-slideInFromRight delay-800">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Strategic technology roadmaps
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-indigo-50 h-full animate-slideInFromBottom delay-800 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3 animate-bounceIn delay-800">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Scalable Innovation</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Our solutions are designed to scale with your growth. From startup to enterprise, our technology infrastructure adapts to your changing needs without disruption.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Elastic cloud architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Modular system design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Future-proof technology stack
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-cyan-50 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform mr-3">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Proven Results</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Our track record speaks for itself. With over 500 successful implementations and a 99.9% client satisfaction rate, we deliver measurable results that drive business growth.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    500+ successful projects
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    99.9% client satisfaction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    Industry-leading uptime
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 animate-slide-in-bottom">Technology Stack</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 animate-fade-in-scale animation-delay-200">
              We leverage the most advanced technologies to deliver superior solutions
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                id="tech-stack-scroll-row"
                className="flex gap-14 w-max items-center animate-tech-scroll group-hover:paused"
                style={{ minWidth: 'max-content', padding: '0 32px' }}
                onMouseEnter={e => e.currentTarget.classList.add('paused')}
                onMouseLeave={e => e.currentTarget.classList.remove('paused')}
              >
                {/* Duplicate logos for seamless infinite scroll */}
                {[
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
                  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
                  "/Technologies Logo/salesforce_logo.png",
                  "/Technologies Logo/hubspot_logo.png",
                  "/Technologies Logo/adobe_logo.png",
                  "/Technologies Logo/microsoft_dynamic_logo.png",
                ].concat([
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
                  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
                  "/Technologies Logo/salesforce_logo.png",
                  "/Technologies Logo/hubspot_logo.png",
                  "/Technologies Logo/adobe_logo.png",
                  "/Technologies Logo/microsoft_dynamic_logo.png",
                ]).map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={src.split('/').pop()?.split('.')[0]}
                    className="object-contain h-12 w-12 mx-2 transition-transform duration-300 hover:scale-105"
                    style={{ background: 'transparent' }}
                  />
                ))}
              </div>
            <style jsx>{`
              @keyframes tech-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-tech-scroll {
                animation: tech-scroll 40s linear infinite;
              }
              .group:hover .animate-tech-scroll,
              .animate-tech-scroll.paused {
                animation-play-state: paused !important;
              }
            `}</style>
            </div>
            {/* Manual Scroll Buttons */}
            <button className="absolute top-1/2 -left-2 sm:-left-5 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl border border-gray-100" onClick={() => {
              const row = document.getElementById('tech-stack-scroll-row');
              if (row) {
                row.parentElement?.classList.add('paused');
                row.scrollLeft -= 200;
                setTimeout(() => row.parentElement?.classList.remove('paused'), 800);
              }
            }}>
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
            <button className="absolute top-1/2 -right-2 sm:-right-5 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl border border-gray-100" onClick={() => {
              const row = document.getElementById('tech-stack-scroll-row');
              if (row) {
                row.parentElement?.classList.add('paused');
                row.scrollLeft += 200;
                setTimeout(() => row.parentElement?.classList.remove('paused'), 800);
              }
            }}>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section - New Professional Blue Design */}
      <section id="contact" className="relative py-12 sm:py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)`,
        }}></div>
        <div className="relative max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="mb-6 sm:mb-8 animate-slideInFromBottom delay-100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 animate-text-reveal delay-200">Ready to empower your business?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto animate-fadeInScale delay-300">Let's discuss how Orbitz Technology can help you achieve your goals with custom IT solutions.</p>
          </div>
          <div className="mb-8 sm:mb-10 animate-bounceIn delay-400">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-300 group pulse-glow hover-glow"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
