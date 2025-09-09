"use client"
import { Card } from "@/components/ui/card"

export default function CompanyPartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-purple-700 via-pink-600 to-pink-500 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-text-reveal delay-200 tracking-tight">
          Our Partners
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light animate-fadeInScale delay-300">
          Orbitz Technology collaborates with leading technology providers and strategic partners to deliver best-in-class solutions for our clients. (Add partner logos and details here)
        </p>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Example partner cards, replace with real logos/details */}
          <Card className="p-8 flex flex-col items-center shadow-xl animate-slideInFromLeft delay-400">
            <div className="w-20 h-20 bg-gray-100 rounded-full mb-4 flex items-center justify-center">Logo</div>
            <h3 className="text-lg font-bold text-pink-600 mb-2">Partner Name</h3>
            <p className="text-gray-700 text-sm text-center">Description of partnership and value delivered.</p>
          </Card>
          <Card className="p-8 flex flex-col items-center shadow-xl animate-slideInFromBottom delay-500">
            <div className="w-20 h-20 bg-gray-100 rounded-full mb-4 flex items-center justify-center">Logo</div>
            <h3 className="text-lg font-bold text-orange-500 mb-2">Partner Name</h3>
            <p className="text-gray-700 text-sm text-center">Description of partnership and value delivered.</p>
          </Card>
          <Card className="p-8 flex flex-col items-center shadow-xl animate-slideInFromRight delay-600">
            <div className="w-20 h-20 bg-gray-100 rounded-full mb-4 flex items-center justify-center">Logo</div>
            <h3 className="text-lg font-bold text-blue-600 mb-2">Partner Name</h3>
            <p className="text-gray-700 text-sm text-center">Description of partnership and value delivered.</p>
          </Card>
        </div>
      </section>
    </div>
  )
}
