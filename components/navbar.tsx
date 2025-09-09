"use client";

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Cloud, Laptop, Users, Code, Shield, Stethoscope, Briefcase, Home, Factory, GraduationCap, Scale, FileText, Presentation, Phone, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const company = [
	{ name: "Overview", href: "/company/overview", icon: Users },
	{ name: "Our Approach", href: "/company/our-approach", icon: Presentation },
];

const services = [
	{ name: "Managed IT Services", href: "/services/managed-it", icon: Cloud },
	{ name: "Software Development", href: "/services/software-development", icon: Laptop },
	{ name: "Technology Advisory", href: "/services/technology-advisory", icon: Users },
	{ name: "AI Development", href: "/services/ai-development", icon: Code },
	{ name: "Cyber Security", href: "/services/cybersecurity", icon: Shield },
]

const industries = [
	{ name: "Healthcare", href: "/industries/healthcare", icon: Stethoscope },
	{ name: "Financial Services", href: "/industries/financial", icon: Briefcase },
	{ name: "Hi-Tech Services", href: "/industries/hi-tech-services", icon: Cpu },
	// { name: "Real Estate", href: "/industries/real-estate", icon: Home },
	// { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
	// { name: "Education", href: "/industries/education", icon: GraduationCap },
	// { name: "Legal", href: "/industries/legal", icon: Scale },
]

const resources = [
	{ name: "Case Studies", href: "/resources/case-studies", icon: FileText },
	{ name: "Blog", href: "/resources/blog", icon: Presentation },
]

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
	const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

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

	return (
		<nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
			isScrolled 
				? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
				: 'bg-white shadow-sm'
		}`}>
			<div className="w-full px-3 sm:px-4 lg:px-8">
				<div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="/" className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 group">
							<img 
								src="/logo.png" 
								alt="Orbitz Technology Logo" 
								className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain transition-transform duration-300 group-hover:scale-105" 
							/>
							<span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-purple-700 transition-colors duration-300">
								<span className="hidden sm:inline">Orbitz Technology</span>
								<span className="sm:hidden">Orbitz</span>
							</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1">
						{/* Expertise Dropdown */}
						<div 
							className="relative"
							onMouseEnter={() => handleDropdownEnter('services')}
							onMouseLeave={handleDropdownLeave}
						>
							<button className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-700 font-medium transition-all duration-200 rounded-lg hover:bg-purple-50 group">
								<span>Expertise</span>
								<ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
									activeDropdown === 'services' ? 'rotate-180' : ''
								}`} />
							</button>
										<div className={`absolute left-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
											activeDropdown === 'services' 
												? 'opacity-100 visible transform translate-y-0' 
												: 'opacity-0 invisible transform -translate-y-2'
										}`}>
											<div className="p-4">
												<div className="grid gap-2">
													{services.map((service, index) => (
														<Link
															key={index}
															href={service.href}
															className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-all duration-200 group"
														>
															<div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
																<service.icon className="w-5 h-5 text-purple-600" />
															</div>
															<span className="ml-3 text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
																{service.name}
															</span>
														</Link>
													))}
												</div>
											</div>
										</div>
						</div>
						{/* Markets Dropdown */}
						<div 
							className="relative"
							onMouseEnter={() => handleDropdownEnter('industries')}
							onMouseLeave={handleDropdownLeave}
						>
							<button className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-700 font-medium transition-all duration-200 rounded-lg hover:bg-purple-50 group">
								<span>Markets</span>
								<ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
									activeDropdown === 'industries' ? 'rotate-180' : ''
								}`} />
							</button>
										<div className={`absolute left-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
											activeDropdown === 'industries' 
												? 'opacity-100 visible transform translate-y-0' 
												: 'opacity-0 invisible transform -translate-y-2'
										}`}>
											<div className="p-4">
												<div className="grid gap-2">
													{industries.map((industry, index) => (
														<Link
															key={index}
															href={industry.href}
															className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
														>
															<div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
																<industry.icon className="w-5 h-5 text-blue-600" />
															</div>
															<span className="ml-3 text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
																{industry.name}
															</span>
														</Link>
													))}
												</div>
											</div>
										</div>
						</div>
						{/* Insights Dropdown */}
						<div 
							className="relative"
							onMouseEnter={() => handleDropdownEnter('resources')}
							onMouseLeave={handleDropdownLeave}
						>
							<button className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-700 font-medium transition-all duration-200 rounded-lg hover:bg-purple-50 group">
								<span>Insights</span>
								<ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
									activeDropdown === 'resources' ? 'rotate-180' : ''
								}`} />
							</button>
										<div className={`absolute left-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
											activeDropdown === 'resources' 
												? 'opacity-100 visible transform translate-y-0' 
												: 'opacity-0 invisible transform -translate-y-2'
										}`}>
											<div className="p-4">
												<div className="grid gap-2">
													{resources.map((resource, index) => (
														resource.href.startsWith('http') ? (
															<a
																key={index}
																href={resource.href}
																target="_blank"
																rel="noopener noreferrer"
																className="flex items-center p-2 rounded-lg hover:bg-green-50 transition-all duration-200 group"
															>
																<div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
																	<resource.icon className="w-5 h-5 text-green-600" />
																</div>
																<span className="ml-3 text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
																	{resource.name}
																</span>
															</a>
														) : (
															<Link
																key={index}
																href={resource.href}
																className="flex items-center p-2 rounded-lg hover:bg-green-50 transition-all duration-200 group"
															>
																<div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
																	<resource.icon className="w-5 h-5 text-green-600" />
																</div>
																<span className="ml-3 text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
																	{resource.name}
																</span>
															</Link>
														)
													))}
												</div>
											</div>
										</div>
						</div>
									{/* Company Dropdown */}
									<div 
										className="relative"
										onMouseEnter={() => handleDropdownEnter('company')}
										onMouseLeave={handleDropdownLeave}
									>
										<button className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-700 font-medium transition-all duration-200 rounded-lg hover:bg-purple-50 group">
											<span>Company</span>
											<ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
												activeDropdown === 'company' ? 'rotate-180' : ''
											}`} />
										</button>
													<div className={`absolute left-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
														activeDropdown === 'company' 
															? 'opacity-100 visible transform translate-y-0' 
															: 'opacity-0 invisible transform -translate-y-2'
													}`}>
														<div className="p-4">
															<div className="grid gap-2">
																{company.map((item, index) => (
																	<Link
																		key={index}
																		href={item.href}
																		className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-all duration-200 group"
																	>
																		<div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
																			{/* Optionally add an icon here if desired */}
																		</div>
																		<span className="ml-3 text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
																			{item.name}
																		</span>
																	</Link>
																))}
															</div>
														</div>
													</div>
									</div>
					</div>

					{/* Right Side Actions */}
					<div className="hidden md:flex items-center space-x-2 lg:space-x-4">
						{/* Phone Number - Hidden on tablet, shown on desktop */}
						<a 
							   href="tel:+13196104889"
							   className="hidden lg:flex items-center space-x-2 px-3 lg:px-4 py-2 text-gray-700 hover:text-purple-700 font-medium transition-all duration-200 rounded-lg hover:bg-purple-50 group"
						   >
							   <Phone className="w-4 h-4 group-hover:text-purple-700 transition-colors" />
							   <span className="text-sm font-semibold">(319) 610-4889</span>
						   </a>
						{/* CTA Button */}
						<Link 
							   href="/contact" 
							   className="px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
						   >
							   Get Started
						   </Link>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center space-x-3">
						{/* Mobile Menu Toggle */}
						<button 
							onClick={(e) => {
								e.stopPropagation()
								setIsMenuOpen(!isMenuOpen)
							}} 
							className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-30"
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						>
							<div className="w-6 h-6 relative flex flex-col justify-center">
								<span className={`block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
									isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'
								}`}></span>
								<span className={`block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
									isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
								}`}></span>
								<span className={`block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
									isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'
								}`}></span>
							</div>
						</button>
					</div>
				</div>
			</div>
			{/* Mobile Navigation */}
			<div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
				isMenuOpen 
					? 'max-h-[80vh] opacity-100' 
					: 'max-h-0 opacity-0'
			}`}>
				<div className="bg-white border-t border-gray-100 shadow-lg">
					<div className="max-h-[70vh] overflow-y-auto">
						<div className="px-4 py-6 space-y-4">
							{/* Mobile Expertise */}
							<div className="space-y-1">
								<h3 className="text-lg font-semibold text-gray-900 px-2 py-2">Expertise</h3>
								<div className="space-y-1">
									{services.map((service, index) => (
										<Link
											key={index}
											href={service.href}
											className="flex items-center px-3 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-all duration-200 active:bg-purple-100"
											onClick={() => setIsMenuOpen(false)}
										>
											<service.icon className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0" />
											<span className="font-medium text-sm">{service.name}</span>
										</Link>
									))}
								</div>
							</div>
							{/* Mobile Markets */}
							<div className="space-y-1 pt-4 border-t border-gray-100">
								<h3 className="text-lg font-semibold text-gray-900 px-2 py-2">Markets</h3>
								<div className="space-y-1">
									{industries.map((industry, index) => (
										<Link
											key={index}
											href={industry.href}
											className="flex items-center px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 active:bg-blue-100"
											onClick={() => setIsMenuOpen(false)}
										>
											<industry.icon className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
											<span className="font-medium text-sm">{industry.name}</span>
										</Link>
									))}
								</div>
							</div>
							{/* Mobile Insights */}
							<div className="space-y-1 pt-4 border-t border-gray-100">
								<h3 className="text-lg font-semibold text-gray-900 px-2 py-2">Insights</h3>
								<div className="space-y-1">
									{resources.map((resource, index) => (
													resource.href.startsWith('http') ? (
														<a
															key={index}
															href={resource.href}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center px-3 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-200 active:bg-green-100"
															onClick={() => setIsMenuOpen(false)}
														>
															<resource.icon className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
															<span className="font-medium text-sm">{resource.name}</span>
														</a>
													) : (
														<Link
															key={index}
															href={resource.href}
															className="flex items-center px-3 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-200 active:bg-green-100"
															onClick={() => setIsMenuOpen(false)}
														>
															<resource.icon className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
															<span className="font-medium text-sm">{resource.name}</span>
														</Link>
													)
												))}
								</div>
							</div>
							{/* Mobile Who We Are */}
							<div className="pt-4 border-t border-gray-100">
												<div className="space-y-1 pt-4 border-t border-gray-100">
													<h3 className="text-lg font-semibold text-gray-900 px-2 py-2">Company</h3>
													<div className="space-y-1">
														{company.map((item, index) => (
																		<Link
																			key={index}
																			href={item.href}
																			className="flex items-center px-3 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-all duration-200 active:bg-purple-100"
																			onClick={() => setIsMenuOpen(false)}
																		>
																			{item.icon && <item.icon className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0" />}
																			<span className="font-medium text-sm">{item.name}</span>
																		</Link>
														))}
													</div>
												</div>
							</div>
							{/* Mobile Phone Number */}
							<div className="pt-4 border-t border-gray-100">
								<a 
									href="tel:+13196104889"
									className="flex items-center justify-center px-4 py-3 text-gray-700 hover:text-purple-700 font-medium transition-all duration-200 rounded-lg hover:bg-purple-50 group"
									onClick={() => setIsMenuOpen(false)}
								>
									<Phone className="w-5 h-5 mr-2 group-hover:text-purple-700 transition-colors" />
									<span className="font-semibold">(319) 610-4889</span>
								</a>
							</div>
							{/* Mobile CTA */}
							<div className="pt-2 pb-2">
								<Link 
									href="/contact" 
									className="block w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
									onClick={() => setIsMenuOpen(false)}
								>
									Get Started
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}
