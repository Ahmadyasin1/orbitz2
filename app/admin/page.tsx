"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Save, 
  X, 
  Upload,
  Calendar,
  User,
  Tag,
  Clock,
  Download,
  ExternalLink,
  DollarSign,
  BarChart3
} from 'lucide-react'

// All Supabase mutations are now done via server API routes to avoid client-side service keys

interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image_url: string
  author_name: string
  author_email: string
  published_at: string
  status: string
  tags: string[]
  read_time: number
  views: number
  likes: number
}

interface CaseStudy {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image_url: string
  client_name: string
  industry: string
  project_duration: string
  project_budget: string
  technologies: string[]
  results: any
  published_at: string
  status: string
  views: number
}

export default function AdminPage() {
  // Admin login state
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  // Hardcoded admin credentials (for demo only)
  const ADMIN_EMAIL = "admin@orbitz.com"
  const ADMIN_PASSWORD = "orbitz2025"

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginEmail === ADMIN_EMAIL && loginPassword === ADMIN_PASSWORD) {
      setIsLoggedIn(true)
      setLoginError("")
    } else {
      setLoginError("Invalid email or password.")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoginEmail("")
    setLoginPassword("")
    setLoginError("")
    setEditing(null)
    setFormData({})
  }

  const [activeTab, setActiveTab] = useState('blogs')
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<string | null>(null)
  const [formData, setFormData] = useState<any>({})
  const [uploading, setUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  // Small helper for API calls
  const apiFetch = async (input: string, init?: RequestInit) => {
    const res = await fetch(input, { ...init })
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: res.statusText }))
      console.error('API Error:', { status: res.status, statusText: res.statusText, error: err })
      throw new Error(err.error || `HTTP ${res.status}: ${res.statusText}`)
    }
    return res.json()
  }

  // Load data on component mount
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    try {
      const [blogsRes, caseStudiesRes] = await Promise.all([
        apiFetch('/api/content?type=blogs'),
        apiFetch('/api/content?type=case_studies')
      ])

      if (blogsRes.data) setBlogs(blogsRes.data)
      if (caseStudiesRes.data) setCaseStudies(caseStudiesRes.data)
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (item: any, type: string) => {
    setEditing(item.id)
    setFormData({ ...item })
  }

  const handleSave = async (type: string) => {
    try {
      // Validate required fields
      if (!formData.title?.trim()) {
        alert('Title is required')
        return
      }
      if (!formData.content?.trim()) {
        alert('Content is required')
        return
      }

      // Prepare the record with required fields
      const now = new Date().toISOString()
      let record = { ...formData }

      // For new records, ensure required fields are set
      if (editing === 'new') {
        record = {
          ...record,
          created_at: now,
          updated_at: now,
          published_at: record.published_at || now,
          status: record.status || 'published',
          slug: record.slug || generateSlug(record.title)
        }

        // Ensure required fields for blogs
        if (type === 'blogs') {
          record = {
            ...record,
            author_name: record.author_name || 'Orbitz Technology',
            tags: record.tags || [],
            read_time: record.read_time || 5,
            views: record.views || 0,
            likes: record.likes || 0
          }
        }

        // Ensure required fields for case studies
        if (type === 'case_studies') {
          record = {
            ...record,
            technologies: record.technologies || [],
            results: record.results || '',
            views: record.views || 0
          }
        }
      } else {
        // For updates, just set updated_at
        record.updated_at = now
      }

      console.log('Saving record:', { type, record, editing })

      if (editing && editing !== 'new') {
        const response = await apiFetch('/api/content', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type, id: editing, record })
        })
        console.log('Update response:', response)
      } else {
        const response = await apiFetch('/api/content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type, record })
        })
        console.log('Create response:', response)
      }
      
      setEditing(null)
      setFormData({})
      await loadData()
      alert('Content saved successfully!')
    } catch (error) {
      console.error('Error saving:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      alert(`Error saving content: ${errorMessage}`)
    }
  }

  const handleDelete = async (id: string, type: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      try {
        await apiFetch(`/api/content?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`, { method: 'DELETE' })
        loadData()
      } catch (error) {
        console.error('Error deleting:', error)
      }
    }
  }

  const handleCancel = () => {
    setEditing(null)
    setFormData({})
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleUpload = async (file: File, type: string) => {
    try {
      setUploading(true)
      const fd = new FormData()
      fd.append('file', file)
      fd.append('type', type)
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Upload failed')
      return data.publicUrl as string
    } finally {
      setUploading(false)
    }
  }

  const renderBlogs = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <Button onClick={() => setEditing('new')} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Blog Post
        </Button>
      </div>
      
      {editing === 'new' && (
        <Card className="border-2 border-purple-200 shadow-xl bg-gradient-to-br from-white to-purple-50">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
            <CardTitle className="text-xl flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Plus className="w-5 h-5" />
              </div>
              Create New Blog Post
            </CardTitle>
            <p className="text-purple-100 text-sm">Share your insights and expertise with our audience</p>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            {/* Basic Information Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Basic Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Edit className="w-4 h-4 text-purple-500" />
                    Blog Title *
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter an engaging title for your blog post..."
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) })}
                    className="border-2 border-gray-200 focus:border-purple-500 rounded-lg p-3 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500">This will be the main headline readers see</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-purple-500" />
                    URL Slug
                  </Label>
                  <Input
                    id="slug"
                    placeholder="auto-generated-from-title"
                    value={formData.slug || ''}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="border-2 border-gray-200 focus:border-purple-500 rounded-lg p-3 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500">This creates the web address for your post</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="excerpt" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-500" />
                  Short Description *
                </Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a compelling summary that will appear in search results and social media..."
                  value={formData.excerpt || ''}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="border-2 border-gray-200 focus:border-purple-500 rounded-lg p-3 transition-all duration-200"
                />
                <p className="text-xs text-gray-500">Keep it under 160 characters for best SEO results</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Content</h3>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Edit className="w-4 h-4 text-purple-500" />
                  Blog Content *
                </Label>
                <Textarea
                  id="content"
                  placeholder="Write your blog content here. You can use HTML tags for formatting..."
                  value={formData.content || ''}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={12}
                  className="border-2 border-gray-200 focus:border-purple-500 rounded-lg p-3 transition-all duration-200"
                />
                <p className="text-xs text-gray-500">Use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt; for formatting</p>
              </div>
            </div>

            {/* Media & Author Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Media & Author</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Upload className="w-4 h-4 text-purple-500" />
                    Featured Image
                  </Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
                    <Input
                      placeholder="Paste image URL here..."
                      value={formData.featured_image_url || ''}
                      onChange={(e) => setFormData({ ...formData, featured_image_url: e.target.value })}
                      className="mb-3 border-gray-200 focus:border-purple-500"
                    />
                    <div className="flex items-center gap-3">
                      <Input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        disabled={!selectedFile || uploading}
                        onClick={async () => {
                          if (!selectedFile) return
                          const url = await handleUpload(selectedFile, 'blogs')
                          setFormData((prev: any) => ({ ...prev, featured_image_url: url }))
                          setSelectedFile(null)
                        }}
                        className="bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200"
                      >
                        <Upload className="w-4 h-4 mr-2" /> 
                        {uploading ? 'Uploading...' : 'Upload'}
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Recommended size: 1200x630px for best social sharing</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="author_name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-purple-500" />
                    Author Name
                  </Label>
                  <Input
                    id="author_name"
                    placeholder="Your name or Orbitz Technology"
                    value={formData.author_name || 'Orbitz Technology'}
                    onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                    className="border-2 border-gray-200 focus:border-purple-500 rounded-lg p-3 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500">This will appear as the blog author</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <Button 
                onClick={() => handleSave('blogs')}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Save className="w-5 h-5 mr-2" />
                Publish Blog Post
              </Button>
              <Button 
                variant="outline" 
                onClick={handleCancel}
                className="px-8 py-3 border-2 border-gray-300 hover:border-red-300 hover:bg-red-50 hover:text-red-600 rounded-lg font-semibold transition-all duration-300"
              >
                <X className="w-5 h-5 mr-2" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {blogs.map((blog) => (
          <Card key={blog.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{blog.title}</h3>
                    <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                      {blog.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{blog.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {blog.author_name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(blog.published_at).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.read_time} min read
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {blog.views} views
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {blog.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Tag className="w-2 h-2 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(blog, 'blogs')}>
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(blog.id, 'blogs')}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              {editing === blog.id && (
                <div className="mt-4 border-t pt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`title-${blog.id}`}>Title</Label>
                      <Input
                        id={`title-${blog.id}`}
                        value={formData.title || ''}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`slug-${blog.id}`}>Slug</Label>
                      <Input
                        id={`slug-${blog.id}`}
                        value={formData.slug || ''}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor={`excerpt-${blog.id}`}>Excerpt</Label>
                    <Textarea
                      id={`excerpt-${blog.id}`}
                      value={formData.excerpt || ''}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`content-${blog.id}`}>Content</Label>
                    <Textarea
                      id={`content-${blog.id}`}
                      value={formData.content || ''}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={8}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Featured Image</Label>
                      <Input
                        placeholder="Paste URL or upload a file"
                        value={formData.featured_image_url || ''}
                        onChange={(e) => setFormData({ ...formData, featured_image_url: e.target.value })}
                      />
                      <div className="flex items-center gap-2 mt-2">
                        <Input type="file" accept="image/*" onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} />
                        <Button
                          type="button"
                          variant="outline"
                          disabled={!selectedFile || uploading}
                          onClick={async () => {
                            if (!selectedFile) return
                            const url = await handleUpload(selectedFile, 'blogs')
                            setFormData((prev: any) => ({ ...prev, featured_image_url: url }))
                            setSelectedFile(null)
                          }}
                        >
                          <Upload className="w-4 h-4 mr-2" /> {uploading ? 'Uploading...' : 'Upload'}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor={`author-${blog.id}`}>Author Name</Label>
                      <Input
                        id={`author-${blog.id}`}
                        value={formData.author_name || ''}
                        onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => handleSave('blogs')}>
                      <Save className="w-4 h-4 mr-2" /> Save
                    </Button>
                    <Button variant="outline" onClick={handleCancel}>
                      <X className="w-4 h-4 mr-2" /> Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderCaseStudies = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Case Studies</h2>
        <Button onClick={() => setEditing('new')} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Case Study
        </Button>
      </div>
      
      {editing === 'new' && (
        <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-white to-blue-50">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-xl flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Plus className="w-5 h-5" />
              </div>
              Create New Case Study
            </CardTitle>
            <p className="text-blue-100 text-sm">Showcase your successful client projects and achievements</p>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            {/* Project Overview Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Project Overview</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cs-title" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Edit className="w-4 h-4 text-blue-500" />
                    Case Study Title *
                  </Label>
                  <Input
                    id="cs-title"
                    placeholder="e.g., Digital Transformation for Healthcare Provider"
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) })}
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-lg p-3 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500">Describe the project in a compelling way</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cs-slug" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-blue-500" />
                    URL Slug
                  </Label>
                  <Input
                    id="cs-slug"
                    placeholder="auto-generated-from-title"
                    value={formData.slug || ''}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-lg p-3 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500">Web address for this case study</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cs-excerpt" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-500" />
                  Project Summary *
                </Label>
                <Textarea
                  id="cs-excerpt"
                  placeholder="Write a brief summary of the project, challenge solved, and key outcomes..."
                  value={formData.excerpt || ''}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="border-2 border-gray-200 focus:border-blue-500 rounded-lg p-3 transition-all duration-200"
                />
                <p className="text-xs text-gray-500">This appears in previews and search results</p>
              </div>
            </div>

            {/* Client Information Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Client Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cs-client" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-500" />
                    Client Name *
                  </Label>
                  <Input
                    id="cs-client"
                    placeholder="e.g., Regional Medical Center or Fortune 500 Company"
                    value={formData.client_name || ''}
                    onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-lg p-3 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500">You can use a generic name if confidential</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cs-industry" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-blue-500" />
                    Industry *
                  </Label>
                  <Input
                    id="cs-industry"
                    placeholder="e.g., Healthcare, Financial, Manufacturing"
                    value={formData.industry || ''}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-lg p-3 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500">This helps categorize your case study</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cs-duration" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    Project Duration
                  </Label>
                  <Input
                    id="cs-duration"
                    placeholder="e.g., 6 months, 1 year, 3-6 months"
                    value={formData.project_duration || ''}
                    onChange={(e) => setFormData({ ...formData, project_duration: e.target.value })}
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-lg p-3 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500">How long did the project take?</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cs-budget" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-blue-500" />
                    Investment Range
                  </Label>
                  <Input
                    id="cs-budget"
                    placeholder="e.g., $50K - $100K, Contact for Quote"
                    value={formData.project_budget || ''}
                    onChange={(e) => setFormData({ ...formData, project_budget: e.target.value })}
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-lg p-3 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500">Budget range or "Contact for Quote"</p>
                </div>
              </div>
            </div>

            {/* Technical Details Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Technical Details</h3>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cs-technologies" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-blue-500" />
                    Technologies Used
                  </Label>
                  <Input
                    id="cs-technologies"
                    placeholder="e.g., React, Node.js, PostgreSQL, AWS, AI/ML"
                    value={Array.isArray(formData.technologies) ? formData.technologies.join(', ') : formData.technologies || ''}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      technologies: e.target.value.split(',').map(t => t.trim()).filter(t => t.length > 0)
                    })}
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-lg p-3 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500">Separate multiple technologies with commas</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cs-results" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-500" />
                    Key Results & Metrics
                  </Label>
                  <Textarea
                    id="cs-results"
                    placeholder="• Improved efficiency by 40%
• Cost savings of $25,000 annually
• Increased user satisfaction to 95%
• Reduced processing time by 50%"
                    value={formData.results || ''}
                    onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                    rows={4}
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-lg p-3 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500">List your key achievements and measurable outcomes (one per line)</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Detailed Content</h3>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cs-content" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Edit className="w-4 h-4 text-blue-500" />
                  Full Case Study Content *
                </Label>
                <Textarea
                  id="cs-content"
                  placeholder="Write the detailed story: the challenge, solution approach, implementation process, and outcomes. Use HTML tags for formatting..."
                  value={formData.content || ''}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={12}
                  className="border-2 border-gray-200 focus:border-blue-500 rounded-lg p-3 transition-all duration-200"
                />
                <p className="text-xs text-gray-500">Include challenge, solution, implementation steps, and results</p>
              </div>
            </div>

            {/* Media Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 text-sm font-bold">5</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Featured Image</h3>
              </div>
              
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Upload className="w-4 h-4 text-blue-500" />
                  Project Image
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
                  <Input
                    placeholder="Paste image URL here..."
                    value={formData.featured_image_url || ''}
                    onChange={(e) => setFormData({ ...formData, featured_image_url: e.target.value })}
                    className="mb-3 border-gray-200 focus:border-blue-500"
                  />
                  <div className="flex items-center gap-3">
                    <Input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      disabled={!selectedFile || uploading}
                      onClick={async () => {
                        if (!selectedFile) return
                        const url = await handleUpload(selectedFile, 'case_studies')
                        setFormData((prev: any) => ({ ...prev, featured_image_url: url }))
                        setSelectedFile(null)
                      }}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
                    >
                      <Upload className="w-4 h-4 mr-2" /> 
                      {uploading ? 'Uploading...' : 'Upload'}
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Use a professional image that represents the project or industry</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <Button 
                onClick={() => handleSave('case_studies')}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Save className="w-5 h-5 mr-2" />
                Publish Case Study
              </Button>
              <Button 
                variant="outline" 
                onClick={handleCancel}
                className="px-8 py-3 border-2 border-gray-300 hover:border-red-300 hover:bg-red-50 hover:text-red-600 rounded-lg font-semibold transition-all duration-300"
              >
                <X className="w-5 h-5 mr-2" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {caseStudies.map((study) => (
          <Card key={study.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{study.title}</h3>
                    <Badge variant={study.status === 'published' ? 'default' : 'secondary'}>
                      {study.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{study.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>Client: {study.client_name}</span>
                    <span>Industry: {study.industry}</span>
                    <span>Duration: {study.project_duration}</span>
                    <span>Budget: {study.project_budget}</span>
                  </div>
                  {study.technologies && study.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {study.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{study.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(study, 'case_studies')}>
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(study.id, 'case_studies')}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              {editing === study.id && (
                <div className="mt-4 border-t pt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`cs-title-${study.id}`}>Title</Label>
                      <Input
                        id={`cs-title-${study.id}`}
                        value={formData.title || ''}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`cs-slug-${study.id}`}>Slug</Label>
                      <Input
                        id={`cs-slug-${study.id}`}
                        value={formData.slug || ''}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor={`cs-excerpt-${study.id}`}>Excerpt</Label>
                    <Textarea
                      id={`cs-excerpt-${study.id}`}
                      value={formData.excerpt || ''}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`cs-content-${study.id}`}>Content</Label>
                    <Textarea
                      id={`cs-content-${study.id}`}
                      value={formData.content || ''}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={8}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`cs-client-${study.id}`}>Client Name</Label>
                      <Input
                        id={`cs-client-${study.id}`}
                        value={formData.client_name || ''}
                        onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`cs-industry-${study.id}`}>Industry</Label>
                      <Input
                        id={`cs-industry-${study.id}`}
                        value={formData.industry || ''}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`cs-duration-${study.id}`}>Project Duration</Label>
                      <Input
                        id={`cs-duration-${study.id}`}
                        value={formData.project_duration || ''}
                        onChange={(e) => setFormData({ ...formData, project_duration: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`cs-budget-${study.id}`}>Project Budget</Label>
                      <Input
                        id={`cs-budget-${study.id}`}
                        value={formData.project_budget || ''}
                        onChange={(e) => setFormData({ ...formData, project_budget: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor={`cs-technologies-${study.id}`}>Technologies</Label>
                    <Input
                      id={`cs-technologies-${study.id}`}
                      value={Array.isArray(formData.technologies) ? formData.technologies.join(', ') : formData.technologies || ''}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        technologies: e.target.value.split(',').map(t => t.trim()).filter(t => t.length > 0)
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`cs-results-${study.id}`}>Results</Label>
                    <Textarea
                      id={`cs-results-${study.id}`}
                      placeholder="List key achievements and metrics..."
                      value={formData.results || ''}
                      onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label>Featured Image</Label>
                    <Input
                      placeholder="Paste URL or upload a file"
                      value={formData.featured_image_url || ''}
                      onChange={(e) => setFormData({ ...formData, featured_image_url: e.target.value })}
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <Input type="file" accept="image/*" onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} />
                      <Button
                        type="button"
                        variant="outline"
                        disabled={!selectedFile || uploading}
                        onClick={async () => {
                          if (!selectedFile) return
                          const url = await handleUpload(selectedFile, 'case_studies')
                          setFormData((prev: any) => ({ ...prev, featured_image_url: url }))
                          setSelectedFile(null)
                        }}
                      >
                        <Upload className="w-4 h-4 mr-2" /> {uploading ? 'Uploading...' : 'Upload'}
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => handleSave('case_studies')}>
                      <Save className="w-4 h-4 mr-2" /> Save
                    </Button>
                    <Button variant="outline" onClick={handleCancel}>
                      <X className="w-4 h-4 mr-2" /> Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {!isLoggedIn ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md mx-auto">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-lg">
              <CardHeader className="text-center pb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
                <p className="text-purple-100 text-sm">Content Management System</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="text-sm font-medium text-gray-700">Email Address</Label>
                    <Input 
                      id="admin-email" 
                      type="email" 
                      value={loginEmail} 
                      onChange={e => setLoginEmail(e.target.value)} 
                      required 
                      className="border-2 border-gray-200 focus:border-purple-500 rounded-lg p-3 transition-all duration-200"
                      placeholder="Enter your admin email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password" className="text-sm font-medium text-gray-700">Password</Label>
                    <Input 
                      id="admin-password" 
                      type="password" 
                      value={loginPassword} 
                      onChange={e => setLoginPassword(e.target.value)} 
                      required 
                      className="border-2 border-gray-200 focus:border-purple-500 rounded-lg p-3 transition-all duration-200"
                      placeholder="Enter your password"
                    />
                  </div>
                  {loginError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {loginError}
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Sign In to Admin Panel
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="min-h-screen">
          {/* Header */}
          <div className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Edit className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
                    <p className="text-gray-600 text-sm">Manage your website content with ease</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-white hover:bg-red-50 hover:text-red-600 hover:border-red-300 border-2 border-gray-200 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <User className="w-4 h-4" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 py-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md bg-white shadow-lg border border-gray-200 rounded-xl p-1">
                <TabsTrigger 
                  value="blogs" 
                  className="flex items-center gap-2 rounded-lg py-3 px-6 font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                >
                  <Edit className="w-4 h-4" />
                  Blog Posts
                </TabsTrigger>
                <TabsTrigger 
                  value="case-studies" 
                  className="flex items-center gap-2 rounded-lg py-3 px-6 font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                >
                  <Tag className="w-4 h-4" />
                  Case Studies
                </TabsTrigger>
              </TabsList>
              <TabsContent value="blogs" className="mt-8">
                {renderBlogs()}
              </TabsContent>
              <TabsContent value="case-studies" className="mt-8">
                {renderCaseStudies()}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  )
}
