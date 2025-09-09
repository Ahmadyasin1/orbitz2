'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link')
      fontLink.rel = 'preload'
      fontLink.href = '/fonts/inter.woff2'
      fontLink.as = 'font'
      fontLink.type = 'font/woff2'
      fontLink.crossOrigin = 'anonymous'
      document.head.appendChild(fontLink)

      // Preload critical images
      const criticalImages = [
        '/aws.png',
        '/microsoft.png',
        '/google.png',
        '/insight-logo.png'
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = src
        link.as = 'image'
        document.head.appendChild(link)
      })
    }

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Lazy load non-critical scripts
      const scripts = document.querySelectorAll('script[data-lazy]')
      
      const loadScript = (script: Element) => {
        const newScript = document.createElement('script')
        newScript.src = script.getAttribute('data-src') || ''
        newScript.async = true
        document.head.appendChild(newScript)
      }

      // Use Intersection Observer for lazy loading
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadScript(entry.target)
            observer.unobserve(entry.target)
          }
        })
      })

      scripts.forEach(script => observer.observe(script))
    }

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.getAttribute('data-src') || ''
            img.removeAttribute('data-src')
            imageObserver.unobserve(img)
          }
        })
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Memory cleanup for animations
    const optimizeAnimations = () => {
      // Clean up completed animations
      const animatedElements = document.querySelectorAll('.animate-in')
      
      animatedElements.forEach(element => {
        const htmlElement = element as HTMLElement
        
        // Remove will-change after animation completes
        setTimeout(() => {
          htmlElement.style.willChange = 'auto'
        }, 1500)
      })
    }

    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        try {
          await navigator.serviceWorker.register('/sw.js')
        } catch (error) {
          console.log('Service Worker registration failed')
        }
      }
    }

    // Run optimizations
    preloadCriticalResources()
    optimizeThirdPartyScripts()
    optimizeImages()
    optimizeAnimations()
    registerServiceWorker()

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor LCP (Largest Contentful Paint)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log('LCP:', lastEntry.startTime)
        }
      })
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch (e) {
        // Fallback for browsers that don't support LCP
      }
    }

    // Memory cleanup on unmount
    return () => {
      // Remove any remaining event listeners or observers
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', () => {})
      }
    }
  }, [])

  return null
}
