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
  ExternalLink
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

interface Whitepaper {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image_url: string
  file_url: string
  author_name: string
  published_at: string
  status: string
  downloads: number
  tags: string[]
}

interface Webinar {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image_url: string
  webinar_url: string
  duration: string
  scheduled_at: string
  presenter_name: string
  presenter_title: string
  published_at: string
  status: string
  registrations: number
  tags: string[]
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
  const [activeTab, setActiveTab] = useState('blogs')
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [whitepapers, setWhitepapers] = useState<Whitepaper[]>([])
  const [webinars, setWebinars] = useState<Webinar[]>([])
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
      throw new Error(err.error || 'Request failed')
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
      const [blogsRes, caseStudiesRes, whitepapersRes, webinarsRes] = await Promise.all([
        apiFetch('/api/content?type=blogs'),
        apiFetch('/api/content?type=case_studies'),
        apiFetch('/api/content?type=whitepapers'),
        apiFetch('/api/content?type=webinars')
      ])

      if (blogsRes.data) setBlogs(blogsRes.data)
      if (caseStudiesRes.data) setCaseStudies(caseStudiesRes.data)
      if (whitepapersRes.data) setWhitepapers(whitepapersRes.data)
      if (webinarsRes.data) setWebinars(webinarsRes.data)
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
      if (editing && editing !== 'new') {
        await apiFetch('/api/content', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type, id: editing, record: formData })
        })
      } else {
        await apiFetch('/api/content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type, record: formData })
        })
      }
      setEditing(null)
      setFormData({})
      loadData()
    } catch (error) {
      console.error('Error saving:', error)
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
        <Card>
          <CardHeader>
            <CardTitle>Create New Blog Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) })}
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug || ''}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt || ''}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={formData.content || ''}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={10}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="featured_image_url">Featured Image</Label>
                <Input
                  id="featured_image_url"
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
                <Label htmlFor="author_name">Author Name</Label>
                <Input
                  id="author_name"
                  value={formData.author_name || ''}
                  onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => handleSave('blogs')}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" />
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderWhitepapers = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Whitepapers</h2>
        <Button onClick={() => setEditing('new')} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Whitepaper
        </Button>
      </div>
      
      <div className="grid gap-4">
        {whitepapers.map((paper) => (
          <Card key={paper.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{paper.title}</h3>
                    <Badge variant={paper.status === 'published' ? 'default' : 'secondary'}>
                      {paper.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{paper.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {paper.downloads} downloads
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(paper.published_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(paper, 'whitepapers')}>
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(paper.id, 'whitepapers')}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              {editing === paper.id && (
                <div className="mt-4 border-t pt-4 space-y-4">
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
                            const url = await handleUpload(selectedFile, 'insight')
                            setFormData((prev: any) => ({ ...prev, featured_image_url: url }))
                            setSelectedFile(null)
                          }}
                        >
                          <Upload className="w-4 h-4 mr-2" /> {uploading ? 'Uploading...' : 'Upload'}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label>File URL (PDF)</Label>
                      <Input
                        placeholder="Paste URL for downloadable file"
                        value={formData.file_url || ''}
                        onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => handleSave('whitepapers')}>
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

  const renderWebinars = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Webinars</h2>
        <Button onClick={() => setEditing('new')} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Webinar
        </Button>
      </div>
      
      <div className="grid gap-4">
        {webinars.map((webinar) => (
          <Card key={webinar.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{webinar.title}</h3>
                    <Badge variant={webinar.status === 'published' ? 'default' : 'secondary'}>
                      {webinar.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{webinar.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>Presenter: {webinar.presenter_name}</span>
                    <span>Duration: {webinar.duration}</span>
                    <span>Registrations: {webinar.registrations}</span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(webinar, 'webinars')}>
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(webinar.id, 'webinars')}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              {editing === webinar.id && (
                <div className="mt-4 border-t pt-4 space-y-4">
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
                            const url = await handleUpload(selectedFile, 'insight')
                            setFormData((prev: any) => ({ ...prev, featured_image_url: url }))
                            setSelectedFile(null)
                          }}
                        >
                          <Upload className="w-4 h-4 mr-2" /> {uploading ? 'Uploading...' : 'Upload'}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label>Webinar URL</Label>
                      <Input
                        placeholder="Link to webinar platform"
                        value={formData.webinar_url || ''}
                        onChange={(e) => setFormData({ ...formData, webinar_url: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => handleSave('webinars')}>
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {!isLoggedIn ? (
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-purple-700">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="admin-email">Email</Label>
              <Input id="admin-email" type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="admin-password">Password</Label>
              <Input id="admin-password" type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required />
            </div>
            {loginError && <div className="text-red-600 text-sm">{loginError}</div>}
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management System</h1>
            <p className="text-gray-600">Manage your website content, blogs, case studies, and more.</p>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="blogs">Blogs</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
              <TabsTrigger value="webinars">Webinars</TabsTrigger>
            </TabsList>
            <TabsContent value="blogs" className="mt-6">
              {renderBlogs()}
            </TabsContent>
            <TabsContent value="case-studies" className="mt-6">
              {renderCaseStudies()}
            </TabsContent>
            <TabsContent value="whitepapers" className="mt-6">
              {renderWhitepapers()}
            </TabsContent>
            <TabsContent value="webinars" className="mt-6">
              {renderWebinars()}
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
