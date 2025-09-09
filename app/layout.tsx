import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Chatbot from '@/components/chatbot'
import './globals.css'

export const metadata: Metadata = {
  title: 'Orbitz Technology - Leading IT Solutions, AI Development & Cybersecurity Services',
  description: 'Transform your business with Orbitz Technology\'s expert IT consulting, AI development, cybersecurity, and software solutions. Serving healthcare, finance, and hi-tech industries across Chicago, UK & Pakistan.',
  keywords: 'IT consulting, AI development, cybersecurity, software development, managed IT services, technology advisory, healthcare IT, financial IT, digital transformation, cloud solutions',
  authors: [{ name: 'Orbitz Technology' }],
  generator: 'Orbitz Technology',
  applicationName: 'Orbitz Technology',
  referrer: 'origin-when-cross-origin',
  creator: 'Orbitz Technology',
  publisher: 'Orbitz Technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.orbitztechnology.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Orbitz Technology - Leading IT Solutions & AI Development Services',
    description: 'Expert IT consulting, AI development, cybersecurity, and software solutions for business transformation.',
    url: 'https://www.orbitztechnology.com',
    siteName: 'Orbitz Technology',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Orbitz Technology - IT Solutions & AI Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbitz Technology - Leading IT Solutions & AI Development',
    description: 'Expert IT consulting, AI development, cybersecurity, and software solutions for business transformation.',
    images: ['/logo.png'],
    creator: '@OrbitizTech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Orbitz Technology",
              "url": "https://www.orbitztechnology.com",
              "logo": "https://www.orbitztechnology.com/logo.png",
              "description": "Leading IT consulting, AI development, cybersecurity, and software solutions provider",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "14 Kimberley Cir",
                "addressLocality": "Oak Brook",
                "addressRegion": "IL",
                "postalCode": "60523",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-319-610-4889",
                "contactType": "Customer Service",
                "email": "info@orbitztechnology.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/orbitz-technology"
              ],
              "foundingDate": "2011",
              "founder": {
                "@type": "Person",
                "name": "Orbitz Technology Team"
              },
              "areaServed": ["US", "UK", "Pakistan"],
              "serviceType": [
                "IT Consulting",
                "AI Development", 
                "Cybersecurity",
                "Software Development",
                "Managed IT Services",
                "Technology Advisory"
              ],
              "knowsAbout": [
                "Information Technology",
                "Artificial Intelligence",
                "Cybersecurity",
                "Software Development",
                "Cloud Computing",
                "Digital Transformation"
              ]
            })
          }}
        />
        <style>{`
html {
  font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  --font-sans: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: ${GeistMono.variable};
  background: #f7f8fa;
  color: #22223b;
}
body {
  font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.05rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.7;
  background: #f7f8fa;
  color: #22223b;
}
        `}</style>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Chatbot whatsappNumber="+13196104889" />
      </body>
    </html>
  )
}
