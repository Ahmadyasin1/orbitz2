import React from "react"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-8 sm:py-10">
			<div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 sm:gap-0 items-start">
					{/* Logo & Description (separate column, more space) */}
					<div className="sm:col-span-2 md:col-span-2 flex flex-col justify-start sm:pr-8 border-r-0 sm:border-r border-gray-800">
						<div className="flex items-center space-x-2 mb-4">
							<img src="/logo.png" alt="Orbitz Technology Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-lg bg-white rounded-lg p-1 sm:p-2" />
							<span className="text-lg sm:text-xl font-bold text-white align-middle">Orbitz Technology</span>
						</div>
						<p className="text-gray-400 text-xs sm:text-sm mb-4 max-w-xs">
							Empowering Small & Mid-Sized Businesses with Scalable IT Solutions, Expertise in Cybersecurity, AI Development, Cloud Solutions, and Custom Software Development.
						</p>
						{/* Social Media Links */}
						<div className="flex space-x-4 mt-4">
							<a href="https://www.linkedin.com/company/orbitz-technology/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.5a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm15.11 12.95h-3.56v-5.59c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.68h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.49v6.25z"/></svg></a>
						</div>
					</div>
					{/* Expertise, Markets, Insights, Company (aligned) */}
					<div className="md:col-span-1 flex flex-col sm:pl-8">
						<h4 className="text-base sm:text-lg font-semibold mb-3">Expertise</h4>
						<ul className="space-y-2">
							<li><Link href="/services/managed-it" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Managed IT Services</Link></li>
							<li><Link href="/services/software-development" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Software Development</Link></li>
							<li><Link href="/services/technology-advisory" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Technology Advisory</Link></li>
							<li><Link href="/services/ai-development" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">AI Development</Link></li>
							<li><Link href="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Cyber Security</Link></li>
						</ul>
					</div>
					<div className="md:col-span-1 flex flex-col sm:pl-8">
						<h4 className="text-base sm:text-lg font-semibold mb-3">Markets</h4>
						<ul className="space-y-2">
							<li><Link href="/industries/healthcare" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Healthcare</Link></li>
							<li><Link href="/industries/financial" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Financial Services</Link></li>
							<li><Link href="/industries/hi-tech-services" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Hi-Tech Services</Link></li>
							<li><Link href="/industries/manufacturing" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Manufacturing</Link></li>
						</ul>
					</div>
					<div className="md:col-span-1 flex flex-col sm:pl-8">
						<h4 className="text-base sm:text-lg font-semibold mb-3">Insights</h4>
						<ul className="space-y-2">
							<li><Link href="/resources/case-studies" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Case Studies</Link></li>
							<li><Link href="/resources/blog" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Blog</Link></li>
						</ul>
					</div>
					<div className="md:col-span-1 flex flex-col sm:pl-8">
						<h4 className="text-base sm:text-lg font-semibold mb-3">Company</h4>
						<ul className="space-y-2">
							<li><Link href="/company/overview" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Overview</Link></li>
							<li><Link href="/company/our-approach" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Our Approach</Link></li>
							{/* <li><Link href="/company/our-partners" className="text-gray-400 hover:text-white transition-colors text-sm">Our Partners</Link></li> */}
							<li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Contact</Link></li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-6 sm:mt-8 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-xs sm:text-sm">© 2025 Orbitz Technology. All rights reserved.</p>
					<div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0">
						<Link href="/privacy-policy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Privacy Policy</Link>
						<Link href="/terms-of-service" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Terms of Service</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
