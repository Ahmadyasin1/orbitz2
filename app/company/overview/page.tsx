// Banner Punchline
// “Orbitz Technology — Innovate Boldly, Scale Smartly, Lead Fearlessly with AI.”

"use client"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Carousel } from "@/components/ui/carousel"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { Avatar } from "@/components/ui/avatar"

export default function CompanyOverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Punchline with Carousel */}
      <section className="relative py-20 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white text-center flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/hero_bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-text-reveal delay-200 tracking-tight drop-shadow-lg">
            Beyond Technology - We Deliver Transformation
          </h1>
          <Carousel className="max-w-2xl mx-auto mt-8">
            <div className="flex gap-6 justify-center">
              <Image src="/business-success.png" alt="Success" width={180} height={120} className="rounded-xl shadow-lg" />
              <Image src="/ai-neural-network-data.png" alt="AI" width={180} height={120} className="rounded-xl shadow-lg" />
              <Image src="/modern-data-center.png" alt="Data Center" width={180} height={120} className="rounded-xl shadow-lg" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* About Us Section with Vertical Scroll Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-stretch">
          {/* About Us Card */}
          <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col justify-center animate-slideInFromBottom delay-100">
            <div className="flex items-center gap-5 mb-6">
              <Avatar className="size-16 shadow-lg">
                <Image src="/logo.png" alt="Orbitz Logo" width={64} height={64} className="rounded-full" />
              </Avatar>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-text-reveal delay-200">About Us</h2>
                <p className="text-purple-700 font-semibold text-base md:text-lg">Founded in 2011, Chicago <span className='mx-1'>|</span> UK <span className='mx-1'>|</span> Pakistan</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700 text-base md:text-lg">Orbitz Technology was born from a passionate belief that technology should be a catalyst for transformation, not just a tool. We are an innovation-driven IT consulting and solutions company on a mission to revolutionize how businesses harness the power of AI, software, and strategic technology to unlock their full potential.</p>
              <p className="text-gray-700 text-base md:text-lg">What sets us apart is our unique blend of strategic brilliance and technical artistry. We combine the precision and insight of former Big 4 consultants with the creativity and technical mastery of world-class developers, creating a powerhouse team that doesn't just deliver solutions—we craft technological experiences that drive real change.</p>
              <p className="text-gray-700 text-base md:text-lg">Our approach is deeply collaborative and purposefully strategic. We begin with careful planning and strategic consulting, leveraging AI-powered analytics and deep cross-industry expertise to craft tailored roadmaps that seamlessly align cutting-edge technology with your boldest business ambitions. Our passionate development teams then transform these visions into reality—building bespoke software and intelligent infrastructure engineered for explosive growth, unmatched agility, and bulletproof security.</p>
              {/* <p className="text-gray-700 text-base md:text-lg">Because we believe in your success as much as you do, our dedicated Managed IT team stands as your technology guardians, providing continuous monitoring, proactive maintenance, and lightning-fast response services that ensure your operations never skip a beat.</p>
              <p className="text-gray-700 text-base md:text-lg">At Orbitz Technology, we don't just work for you—we work with you. We are your innovation partners, your technology advocates, and your growth champions. We build collaborative relationships founded on unwavering trust, complete transparency, and shared victories. We embed ourselves as an extension of your team, co-creating breakthrough solutions that don't just solve today's challenges but unlock tomorrow's possibilities and create lasting competitive advantage.</p>
              <p className="text-gray-700 text-base md:text-lg">We take immense pride in being the trusted technology partner that small and medium businesses turn to when they're ready to think bigger, move faster, and achieve more than they ever thought possible.</p> */}
            </div>
          </Card>
          {/* Mission and Vision Cards - Aligned with About Us Card */}
          <div className="flex flex-col h-full justify-between items-stretch gap-8">
            <div className="flex flex-1 flex-row gap-6 items-stretch">
              <Card className="flex-1 p-8 shadow-lg border-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-extrabold text-purple-700 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg mb-4">Our mission is to empower ambitious businesses to innovate fearlessly, scale intelligently, and create extraordinary futures powered by transformative AI and technology solutions that change everything.</p>
              </Card>
              <div className="flex items-center h-full"><Image src="/modern-data-center.png" alt="Mission" width={220} height={140} className="rounded-xl shadow-lg object-cover" /></div>
            </div>
            <div className="flex flex-1 flex-row gap-6 items-stretch">
              <div className="flex items-center h-full"><Image src="/modern-office-colorful-lighting.png" alt="Vision" width={220} height={140} className="rounded-xl shadow-lg object-cover" /></div>
              <Card className="flex-1 p-8 shadow-lg border-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-extrabold text-pink-600 mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg mb-4">Our vision is a world where every business—regardless of size—has access to enterprise-grade technology that drives smarter, faster, and simpler pathways to success. We are not just participants in this digital revolution; we are the architects of transformation, pioneering the future one breakthrough solution at a time.</p>
              </Card>
            </div>
          </div>
        </div>
        {/* Partners Logos Grid - Creative & Rich */}
        <div className="max-w-5xl mx-auto mt-12 flex flex-col items-center gap-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">Our Trusted Partners</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-5 w-full">
            <div className="group bg-gradient-to-br from-purple-100 via-white to-pink-100 rounded-xl shadow-lg p-3 flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-200">
              <Image src="/aws.png" alt="AWS" width={54} height={54} />
            </div>
            <div className="group bg-gradient-to-br from-purple-100 via-white to-pink-100 rounded-xl shadow-lg p-3 flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-200">
              <Image src="/google.png" alt="Google" width={54} height={54} />
            </div>
            <div className="group bg-gradient-to-br from-purple-100 via-white to-pink-100 rounded-xl shadow-lg p-3 flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-200">
              <Image src="/cisco-meraki-logo.png" alt="Cisco" width={54} height={54} />
            </div>
            <div className="group bg-gradient-to-br from-purple-100 via-white to-pink-100 rounded-xl shadow-lg p-3 flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-200">
              <Image src="/nexustek-logo.png" alt="Nexustek" width={54} height={54} />
            </div>
            <div className="group bg-gradient-to-br from-purple-100 via-white to-pink-100 rounded-xl shadow-lg p-3 flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-200">
              <Image src="/privacy-evolved-logo.png" alt="Privacy Evolved" width={54} height={54} />
            </div>
            <div className="group bg-gradient-to-br from-purple-100 via-white to-pink-100 rounded-xl shadow-lg p-3 flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-200">
              <Image src="/weave-logo.png" alt="Weave" width={54} height={54} />
            </div>
            <div className="group bg-gradient-to-br from-purple-100 via-white to-pink-100 rounded-xl shadow-lg p-3 flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-200">
              <Image src="/teramind-logo.png" alt="Teramind" width={54} height={54} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Professional Card Layout */}
      <section className="py-16 bg-gradient-to-r from-purple-50 via-white to-pink-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <Card className="p-10 shadow-xl border-0 bg-white">
            <h3 className="text-3xl font-bold text-purple-700 mb-6">Our Mission</h3>
            <p className="text-gray-700 text-lg">Our mission is to empower ambitious businesses to innovate fearlessly, scale intelligently, and create extraordinary futures powered by transformative AI and technology solutions that change everything.</p>
          </Card>
          <Image src="/modern-data-center.png" alt="Mission" width={400} height={240} className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Vision Section - Professional Card Layout */}
      <section className="py-16 bg-gradient-to-r from-pink-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <Image src="/modern-office-colorful-lighting.png" alt="Vision" width={400} height={240} className="rounded-xl shadow-lg" />
          <Card className="p-10 shadow-xl border-0 bg-white">
            <h3 className="text-3xl font-bold text-pink-600 mb-6">Our Vision</h3>
            <p className="text-gray-700 text-lg">Our vision is a world where every business—regardless of size—has access to enterprise-grade technology that drives smarter, faster, and simpler pathways to success. We are not just participants in this digital revolution; we are the architects of transformation, pioneering the future one breakthrough solution at a time.</p>
          </Card>
        </div>
      </section>

      {/* Core Values Section - Professional Cards with Icons */}
      <section className="py-20 bg-gradient-to-br from-purple-100 via-white to-pink-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-14 animate-text-reveal delay-200">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="p-8 shadow-lg flex flex-col items-center text-center border-0 bg-white">
              <h4 className="text-xl font-bold text-purple-700 mb-2">EXCELLENCE</h4>
              <p className="text-gray-700">Excellence is woven into our DNA. We deliver world-class solutions by combining strategic precision with technical mastery, ensuring every project exceeds expectations and drives transformational results.</p>
            </Card>
            <Card className="p-8 shadow-lg flex flex-col items-center text-center border-0 bg-white">
              <h4 className="text-xl font-bold text-pink-600 mb-2">COLLABORATION</h4>
              <p className="text-gray-700">True partnership guides our every interaction. We work as an extension of your team, fostering open communication and shared ownership to achieve breakthrough outcomes together.</p>
            </Card>
            <Card className="p-8 shadow-lg flex flex-col items-center text-center border-0 bg-white">
              <h4 className="text-xl font-bold text-purple-700 mb-2">INTEGRITY</h4>
              <p className="text-gray-700">Integrity forms the foundation of everything we do. We build trust through honest communication, ethical practices, and unwavering commitment to our promises and your success.</p>
            </Card>
            <Card className="p-8 shadow-lg flex flex-col items-center text-center border-0 bg-white">
              <h4 className="text-xl font-bold text-pink-600 mb-2">ADAPTABILITY</h4>
              <p className="text-gray-700">We thrive in change and embrace emerging technologies. Our agile mindset allows us to pivot quickly, seize new opportunities, and continuously evolve to meet your evolving business needs.</p>
            </Card>
            <Card className="p-8 shadow-lg flex flex-col items-center text-center border-0 bg-white">
              <h4 className="text-xl font-bold text-purple-700 mb-2">EMPOWERMENT</h4>
              <p className="text-gray-700">Your success is our passion. We don't just deliver solutions—we empower your team with knowledge, tools, and confidence to own and maximize the value of every technology investment.</p>
            </Card>
            <Card className="p-8 shadow-lg flex flex-col items-center text-center border-0 bg-white">
              <h4 className="text-xl font-bold text-pink-600 mb-2">AUTHENTICITY</h4>
              <p className="text-gray-700">We believe in genuine relationships built on trust and transparency. Our straightforward approach ensures clear expectations, honest feedback, and authentic partnerships that stand the test of time.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
