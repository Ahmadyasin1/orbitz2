"use client";

import { Calendar, User, Tag, ArrowRight, Clock, TrendingUp, Search, BookOpen, Share2, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Head from "next/head";
import { supabase } from "@/lib/supabase";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  featured_image_url: string;
  published_at: string;
  author_name: string;
  tags: string[];
  excerpt: string;
  read_time: number;
  views: number;
  likes: number;
  content: string;
  status: string;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "AI", "Healthcare", "Cybersecurity", "Small Business", "Security", "Best Practices", "Technology", "Innovation", "Business", "Strategy"];

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error loading blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.tags.some(tag => tag === selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>IT Blog & Technology Insights - Orbitz Technology</title>
        <meta name="description" content="Stay updated with the latest IT trends, cybersecurity insights, digital transformation strategies, and technology news from Orbitz Technology's expert blog." />
        <meta name="keywords" content="IT blog, technology insights, cybersecurity news, digital transformation, cloud computing, AI development, business technology" />
        <link rel="canonical" href="https://www.orbitztechnology.com/resources/blog" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/modern-office-colorful-lighting.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-pink-900/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Latest Technology Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Orbitz Technology Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore cutting-edge insights, expert analysis, and best practices in IT infrastructure, cloud computing, cybersecurity, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Featured Stats */}
      <section className="py-16 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-indigo-600">{blogPosts.length}+</div>
              <div className="text-gray-600 font-medium">Expert Articles</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-600 font-medium">IT Support Coverage</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-pink-600">1000+</div>
              <div className="text-gray-600 font-medium">Businesses Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights & Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our expert insights on technology trends, best practices, and industry innovations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.featured_image_url || '/placeholder.jpg'} 
                    alt={post.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.tags[0] || 'Technology'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 text-gray-700 backdrop-blur-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.read_time} min read
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.published_at)}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author_name}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 font-semibold group/btn"
                      onClick={() => openModal(post)}
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    
                    {/* Share Button */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <button className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors">
                        <BookOpen className="w-4 h-4 mr-1" />
                        Bookmark
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-500 text-lg">No articles found matching your search criteria.</div>
                <Button 
                  onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
                  className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Load More Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Stay Updated with Latest Tech Insights</h2>
            <p className="text-xl text-blue-100">
              Subscribe to our newsletter and never miss our latest articles, tips, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-blue-200">
              Join 10,000+ professionals who trust Orbitz Technology for the latest IT insights.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Modal */}
      {showModal && selectedPost && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPost.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(selectedPost.published_at)}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {selectedPost.author_name}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {selectedPost.read_time} min read
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {selectedPost.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-xs font-semibold">
                          {tag}
                    </span>
                      ))}
                    </div>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="ml-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="prose prose-lg max-w-none" style={{whiteSpace: 'pre-line'}}>
                {selectedPost.content}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <Heart className="w-5 h-5 mr-2" />
                      Like ({selectedPost.likes})
                    </button>
                    <button className="flex items-center px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <Share2 className="w-5 h-5 mr-2" />
                      Share
                    </button>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Eye className="w-5 h-5 mr-2" />
                    {selectedPost.views} views
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  )
}
