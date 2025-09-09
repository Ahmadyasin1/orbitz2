"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, X, Send, User, Bot, Phone, MessageSquare, Minimize2, Maximize2, Clock, CheckCheck } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  status?: 'sending' | 'sent' | 'delivered'
}

interface ChatbotProps {
  whatsappNumber?: string
}

export default function Chatbot({ whatsappNumber = "+1234567890" }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isPopup, setIsPopup] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '👋 Welcome to Orbitz Technology! I\'m Salman, your assistant. Ask me about our services, case studies, or how we can help your business.',
      sender: 'bot',
      timestamp: new Date(),
      status: 'delivered'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [conversationStage, setConversationStage] = useState<'initial' | 'engaged' | 'ready_for_human'>('initial')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [lastUserActivity, setLastUserActivity] = useState(new Date())

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Enhanced AI responses with more human-like conversation
  const getBotResponse = (userMessage: string): { text: string; delay?: number } => {
    const message = userMessage.toLowerCase()
    setLastUserActivity(new Date())

    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return {
        text: "Hello there! 😊 It's wonderful to meet you! I'm here to help you discover how Orbitz Technology can transform your business with cutting-edge solutions.\n\nWhat brings you to us today? Are you looking for:\n• AI Development Solutions\n• Cybersecurity Services\n• Software Development\n• IT Consulting\n• Or something else entirely?",
        delay: 1200
      }
    }

    // Services inquiry
    if (message.includes('service') || message.includes('what do you do') || message.includes('capabilities') || message.includes('solutions')) {
      setConversationStage('engaged')
      return {
        text: "Great question! 🚀 We're a full-service technology company specializing in:\n\n🤖 **AI Development Solutions** - Machine learning, automation, and intelligent systems\n🔐 **Cybersecurity** - Enterprise-grade protection and compliance\n💻 **Software Development** - Custom applications and platforms\n☁️ **IT Consulting** - Strategic technology guidance\n🛠️ **Managed IT Services** - 24/7 support and infrastructure management\n\nWhich of these interests you most? I'd love to share more specific details! Or would you prefer to speak with one of our specialists for a personalized consultation?",
        delay: 1800
      }
    }

    // AI-specific questions
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning') || message.includes('automation')) {
      setConversationStage('engaged')
      return {
        text: "Excellent choice! 🧠✨ AI is truly revolutionary for businesses. Our AI Development Solutions include:\n\n• **Custom AI Models** - Tailored to your specific business needs\n• **Process Automation** - Streamline operations and reduce costs\n• **Predictive Analytics** - Data-driven insights for better decisions\n• **Natural Language Processing** - Chatbots, document analysis, and more\n• **Computer Vision** - Image recognition and analysis systems\n\nMany of our clients see 40-60% efficiency improvements within the first 6 months! 📈\n\nWhat specific challenges are you hoping AI might solve for your business? Our AI specialists would love to discuss your unique requirements in detail.",
        delay: 2000
      }
    }

    // Cybersecurity questions
    if (message.includes('security') || message.includes('cybersecurity') || message.includes('protection') || message.includes('compliance')) {
      setConversationStage('engaged')
      return {
        text: "Security is absolutely critical in today's digital landscape! 🔒 Our cybersecurity services provide comprehensive protection:\n\n• **Zero Trust Architecture** - Never trust, always verify approach\n• **24/7 Threat Monitoring** - Real-time protection and response\n• **Compliance Management** - HIPAA, PCI DSS, GDPR, and more\n• **Penetration Testing** - Regular security assessments\n• **Employee Training** - Your team as the first line of defense\n\nWe've helped organizations prevent over $2.3M in potential cyber damages last year alone! 💪\n\nAre you dealing with specific security concerns, or looking for a comprehensive security audit? Our cybersecurity experts can provide a free security assessment.",
        delay: 1900
      }
    }

    // Pricing questions
    if (message.includes('price') || message.includes('cost') || message.includes('budget') || message.includes('quote') || message.includes('how much')) {
      setConversationStage('ready_for_human')
      return {
        text: "I completely understand that budget is an important consideration! 💰\n\nOur pricing varies significantly based on your specific needs, project scope, and the level of customization required. Here's what I can tell you:\n\n• **AI Projects**: Typically range from $15K - $150K+ depending on complexity\n• **Cybersecurity**: Monthly services from $2K - $25K based on company size\n• **Software Development**: $50 - $200 per hour depending on expertise needed\n\nHowever, these are just rough estimates. The best way to get accurate pricing is through a personalized consultation where we understand your exact requirements.\n\n**[Get In Touch](/contact)** with one of our solution specialists for a detailed quote tailored to your needs - the consultation is completely free! 🎯",
        delay: 2200
      }
    }

    // Timeline questions
    if (message.includes('time') || message.includes('timeline') || message.includes('how long') || message.includes('duration') || message.includes('when')) {
      return {
        text: "Great question about timelines! ⏰ Project duration really depends on scope and complexity:\n\n• **Simple AI Solutions**: 4-8 weeks\n• **Custom Software**: 2-6 months\n• **Enterprise AI Systems**: 3-12 months\n• **Cybersecurity Implementation**: 2-4 weeks\n• **Full Digital Transformation**: 6-18 months\n\nWe always work with you to establish realistic timelines that meet your business objectives. Most clients are impressed with how quickly we can deliver initial results!\n\nWhat's your ideal timeline? Are you working with any specific deadlines? Our project managers are excellent at creating delivery schedules that work for you.",
        delay: 1600
      }
    }

    // Industry-specific questions
    if (message.includes('healthcare') || message.includes('financial') || message.includes('banking') || message.includes('education') || message.includes('manufacturing')) {
      return {
        text: "Absolutely! We have extensive experience in your industry! 🏥🏦🏫🏭\n\nWe understand that every industry has unique challenges, compliance requirements, and operational needs. Our industry-specific expertise includes:\n\n• **Healthcare**: HIPAA compliance, EHR integration, telemedicine\n• **Financial**: PCI DSS compliance, fraud detection, secure transactions\n• **Education**: Learning management systems, student data protection\n• **Manufacturing**: IoT integration, supply chain optimization\n• **Legal**: Case management, document automation, client portals\n\nWe've successfully delivered 200+ projects across various industries, and we'd love to share relevant case studies with you.\n\nWould you like to discuss your industry-specific challenges with one of our specialists who understands your sector inside and out?",
        delay: 1800
      }
    }

    // Contact/consultation requests
    if (message.includes('contact') || message.includes('talk') || message.includes('speak') || message.includes('consultation') || message.includes('meeting') || message.includes('call')) {
      setConversationStage('ready_for_human')
      return {
        text: "Perfect! I'd love to connect you with our expert team! 🤝\n\nOur specialists can provide:\n• **Free consultation** (30-45 minutes)\n• **Detailed project assessment**\n• **Custom solution recommendations**\n• **Accurate timeline and pricing**\n• **Live demonstrations** of relevant solutions\n\nYou can reach out in two convenient ways:\n1. **Continue our conversation on WhatsApp** - Instant connection with our team\n2. **Schedule a video call** - Face-to-face consultation at your convenience\n\nWhich would you prefer? Our team typically responds within 10 minutes during business hours! ⚡",
        delay: 1500
      }
    }

    // Company questions
    if (message.includes('company') || message.includes('about') || message.includes('who are you') || message.includes('experience') || message.includes('team')) {
      return {
        text: "I'm so glad you asked! 🌟 Here's what makes Orbitz Technology special:\n\n• **8+ years** of technology excellence\n• **500+ successful projects** delivered\n• **98.5% client satisfaction** rate\n• **24/7 support** for all our solutions\n• **Certified experts** in AI, cybersecurity, and software development\n\nWe're not just a service provider - we're your technology partner! Our team includes former engineers from Microsoft, Google, and Amazon, and we're passionate about helping businesses thrive through technology.\n\nOur clients often tell us we feel more like an extension of their team rather than an external vendor. That's exactly the relationship we aim for!\n\nWould you like to hear about some of our recent success stories, or do you have specific questions about our expertise?",
        delay: 1900
      }
    }

    // Help or confused responses
    if (message.includes('help') || message.includes('confused') || message.includes('not sure') || message.includes('don\'t know')) {
      return {
        text: "No worries at all! I'm here to help make everything clear! 😊\n\nLet me ask you a few simple questions to better understand how we can help:\n\n1. **What's your main business challenge right now?**\n   (e.g., manual processes, security concerns, outdated systems)\n\n2. **What's your industry or business type?**\n   (e.g., healthcare, finance, retail, manufacturing)\n\n3. **What's prompting you to look for technology solutions?**\n   (e.g., growth, compliance, efficiency, competition)\n\nJust answer any of these that feel relevant, and I'll provide much more targeted information! Or if you'd prefer, I can connect you directly with one of our consultants who can walk you through everything step by step.",
        delay: 1700
      }
    }

    // Default response with conversation progression
    const defaultResponses = [
      "That's a really interesting point! 🤔 I want to make sure I give you the most helpful information. Could you tell me a bit more about what you're looking for specifically?",
      "I appreciate you sharing that with me! To provide you with the most relevant information, could you help me understand your main technology challenges or goals?",
      "Thank you for that question! I'd love to give you a detailed answer. Are you exploring technology solutions for a specific business need or project?",
      "That's a great question! I want to make sure I address exactly what you're looking for. What's the most important technology challenge your business is facing right now?"
    ]

    const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
    
    return {
      text: `${randomResponse}\n\nAlternatively, if you'd prefer to discuss your needs directly with one of our technology experts, I can connect you with them right away. They're fantastic at understanding unique business requirements and providing personalized recommendations! 🚀`,
      delay: 1400
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
      status: 'sent'
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    const response = getBotResponse(inputValue)
    const typingDelay = response.delay || 1500

    // Simulate more realistic typing
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        status: 'delivered'
      }

      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)

      // Auto-suggest human contact for engaged users
      if (conversationStage === 'engaged') {
        setTimeout(() => {
          const followUp: Message = {
            id: (Date.now() + 2).toString(),
            text: "💡 **Quick tip**: If you'd like to dive deeper into any of these topics, our specialists are available for immediate consultation via WhatsApp or scheduled calls. They love talking about these solutions! 😊",
            sender: 'bot',
            timestamp: new Date(),
            status: 'delivered'
          }
          setMessages(prev => [...prev, followUp])
        }, 3000)
      }
    }, typingDelay)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  // Utility to format bot message text with headings and lists
  function formatBotMessage(text: string) {
    // Replace markdown headings (e.g., **Heading**) with styled divs
    let formatted = text.replace(/\*\*(.+?)\*\*/g, '<span class="font-semibold text-blue-700 text-base md:text-lg">$1</span>');
    // Replace numbered lists
    formatted = formatted.replace(/\n(\d+)\. /g, '<br/><span class="font-semibold text-blue-700">$1.</span> ');
    // Replace bullet lists
    formatted = formatted.replace(/\n• /g, '<br/><span class="text-blue-600">•</span> ');
    // Replace line breaks
    formatted = formatted.replace(/\n/g, '<br/>');
    // Replace [Get In Touch](/contact) with a styled link
    formatted = formatted.replace(/\[Get In Touch\]\(\/contact\)/g, '<a href="/contact" class="text-blue-600 underline font-semibold">Get In Touch</a>');
    return formatted;
  }

  return (
    <>
      {/* Enhanced Chatbot Trigger Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => { setIsOpen(true); setIsPopup(true); setIsMinimized(false); }}
            className="rounded-full w-12 h-12 sm:w-16 sm:h-16 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group relative"
          >
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="absolute right-full mr-2 sm:mr-3 bg-white text-purple-700 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-purple-100 shadow hidden sm:block">
              Chat with Salman
            </div>
          </Button>
        )}
      </div>

      {/* Enhanced Chatbot Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end">
          {/* Overlay for popup/modal effect */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          <Card className={`relative transition-all duration-300 shadow-lg border border-gray-200 bg-white ${
            isMinimized 
              ? 'w-64 h-12' 
              : 'w-[90vw] sm:w-80 md:w-[340px] h-[70vh] sm:h-[420px] md:h-[440px]'
          } rounded-xl m-2 sm:m-4 md:m-8`}>
            <CardHeader className="bg-white rounded-t-xl p-0 border-b border-gray-200 sticky top-0 z-10">
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-t-xl mb-0"></div>
              <div className="flex items-center justify-between px-4 pt-2 pb-1">
                <div className="flex items-center gap-2">
                  <img src="/salman_amin.png" alt="AI Assistant" className="w-9 h-9 rounded-full border border-blue-200 object-cover" />
                  <div>
                    <CardTitle className="text-sm font-semibold text-gray-900">Salman</CardTitle>
                    <div className="text-xs text-gray-500">Orbitz Technology</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-gray-700 hover:bg-gray-100 p-1"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:bg-gray-100 p-1"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {!isMinimized && (
              <CardContent className="p-0 flex flex-col h-[calc(70vh-80px)] sm:h-[320px] md:h-[340px]">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-white">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] bg-white text-gray-900 rounded-md border border-gray-100 shadow-sm px-3 py-2 flex flex-col items-start gap-1`}
                      >
                        <div className="flex items-center gap-2">
                          {message.sender === 'bot' && (
                            <Bot className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                        {message.sender === 'bot' ? (
                          <p className="text-sm leading-relaxed whitespace-pre-wrap font-normal" dangerouslySetInnerHTML={{ __html: formatBotMessage(message.text) }} />
                        ) : (
                          <p className="text-sm leading-relaxed whitespace-pre-wrap font-normal">{message.text}</p>
                        )}
                        <div className="flex items-center justify-between w-full mt-1 text-xs text-gray-400">
                          <span>{formatTime(message.timestamp)}</span>
                          {message.sender === 'user' && (
                            <CheckCheck className="w-3 h-3 text-blue-300" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 px-3 py-2 rounded-md border border-gray-100 shadow-sm max-w-[80%] flex items-center gap-2">
                        <Bot className="w-4 h-4 text-blue-400" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-xs text-gray-400">Salman is typing...</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Enhanced Input Area */}
                <div className="p-3 border-t bg-white rounded-b-xl">
                  <div className="flex space-x-1 items-center">
                    <div className="flex-1 relative">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="pr-8 border border-gray-200 focus:border-blue-400 focus:ring-blue-400 rounded-md py-1 bg-gray-50 text-sm"
                        maxLength={500}
                      />
                      <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                        {inputValue.length}/500
                      </div>
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  {/* Suggested Quick Questions as simple pills */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue("Tell me about Orbitz Technology")}
                      className="text-xs border-blue-100 text-blue-500 hover:bg-blue-50 rounded-full px-1.5 sm:px-2 py-0.5 font-normal"
                    >
                      <span className="hidden sm:inline">About Orbitz</span>
                      <span className="sm:hidden">About</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue("What services do you offer?")}
                      className="text-xs border-blue-100 text-blue-500 hover:bg-blue-50 rounded-full px-1.5 sm:px-2 py-0.5 font-normal"
                    >
                      Services
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue("Show me your case studies")}
                      className="text-xs border-blue-100 text-blue-500 hover:bg-blue-50 rounded-full px-1.5 sm:px-2 py-0.5 font-normal"
                    >
                      <span className="hidden sm:inline">Case Studies</span>
                      <span className="sm:hidden">Cases</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue("How can I contact your team?")}
                      className="text-xs border-blue-100 text-blue-500 hover:bg-blue-50 rounded-full px-1.5 sm:px-2 py-0.5 font-normal"
                    >
                      Contact
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue("What are your pricing options?")}
                      className="text-xs border-blue-100 text-blue-500 hover:bg-blue-50 rounded-full px-1.5 sm:px-2 py-0.5 font-normal"
                    >
                      <span className="hidden sm:inline">Pricing</span>
                      <span className="sm:hidden">Price</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      )}
    </>
  )
}
