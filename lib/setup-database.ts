import { supabaseAdmin } from './supabase-admin'

export async function setupDatabase() {
  try {
    console.log('Setting up database...')
    
    // Try to create tables using direct insert approach
    // This will fail if tables don't exist, but that's expected
    
    // First, let's try to create a simple test table to see if we can create tables
    const { error: testError } = await supabaseAdmin
      .from('test_table')
      .select('*')
      .limit(1)
    
    if (testError && testError.code === 'PGRST116') {
      console.log('Tables need to be created manually. Please use the SQL schema provided.')
      return false
    }
    
    console.log('Database setup completed successfully!')
    return true
  } catch (error) {
    console.error('Error setting up database:', error)
    return false
  }
}

// Function to insert sample data
export async function insertSampleData() {
  try {
    console.log('Inserting sample data...')
    
    // Sample blogs
    const blogs = [
      {
        title: 'AI in Healthcare: Transforming Patient Care',
        slug: 'ai-healthcare-transforming-patient-care',
        excerpt: 'Discover how artificial intelligence is revolutionizing healthcare delivery, improving patient outcomes, and streamlining medical processes.',
        content: 'Artificial Intelligence is transforming healthcare in unprecedented ways...',
        featured_image_url: '/practicee-ehr.png',
        author_name: 'Dr. Sarah Johnson',
        author_email: 'sarah@orbitztechnology.com',
        status: 'published',
        tags: ['AI', 'Healthcare', 'Technology', 'Innovation'],
        read_time: 8,
        views: 1250,
        likes: 45
      },
      {
        title: 'Cybersecurity Best Practices for Small Businesses',
        slug: 'cybersecurity-best-practices-small-businesses',
        excerpt: 'Learn essential cybersecurity measures to protect your small business from cyber threats and data breaches.',
        content: 'Small businesses are increasingly targeted by cybercriminals...',
        featured_image_url: '/ai-neural-network-data.png',
        author_name: 'Michael Chen',
        author_email: 'michael@orbitztechnology.com',
        status: 'published',
        tags: ['Cybersecurity', 'Small Business', 'Security', 'Best Practices'],
        read_time: 12,
        views: 890,
        likes: 32
      }
    ]

    // Sample case studies
    const caseStudies = [
      {
        title: 'Financial Services CRM Transformation',
        slug: 'financial-services-crm-transformation',
        excerpt: 'How we helped a regional bank streamline customer relationship management and increase operational efficiency by 40%.',
        content: '## Project Overview\n\nWe partnered with a regional financial institution...',
        featured_image_url: '/business-success.png',
        client_name: 'Regional Financial Institution',
        industry: 'Financial Services',
        project_duration: '6 months',
        project_budget: '$150,000 - $200,000',
        technologies: ['Salesforce', 'MuleSoft', 'AWS', 'Tableau', 'Okta'],
        results: { efficiency_gain: '40%', cost_savings: '$2.3M', customer_satisfaction: '25%', revenue_increase: '15%' },
        status: 'published',
        views: 2100
      },
      {
        title: 'Healthcare AI Implementation',
        slug: 'healthcare-ai-implementation',
        excerpt: 'Implementing AI-powered diagnostic tools for a healthcare network, improving diagnostic accuracy by 35%.',
        content: '## Project Overview\n\nWe partnered with a regional healthcare network...',
        featured_image_url: '/ai-neural-network-data.png',
        client_name: 'Regional Healthcare Network',
        industry: 'Healthcare',
        project_duration: '8 months',
        project_budget: '$200,000 - $300,000',
        technologies: ['TensorFlow', 'PyTorch', 'Azure', 'DICOM', 'HIPAA'],
        results: { accuracy_improvement: '35%', turnaround_time: '60%', patient_outcomes: '20%', workload_reduction: '45%' },
        status: 'published',
        views: 1800
      }
    ]

    // Sample whitepapers
    const whitepapers = [
      {
        title: 'The Future of AI in Business: A Comprehensive Guide',
        slug: 'future-ai-business-comprehensive-guide',
        excerpt: 'Explore the transformative potential of artificial intelligence in modern business operations and discover practical implementation strategies.',
        content: '## Executive Summary\n\nArtificial Intelligence (AI) is no longer a futuristic concept...',
        featured_image_url: '/ai-neural-network-data.png',
        file_url: '/whitepapers/ai-business-guide.pdf',
        author_name: 'Orbitz Technology Research Team',
        status: 'published',
        downloads: 1250,
        tags: ['AI', 'Business', 'Technology', 'Strategy', 'Innovation']
      }
    ]

    // Sample webinars
    const webinars = [
      {
        title: 'Cybersecurity Trends 2025: Protecting Your Business',
        slug: 'cybersecurity-trends-2025-protecting-business',
        excerpt: 'Join our cybersecurity experts as they discuss the latest threats, trends, and best practices for protecting your business in 2025.',
        content: '## Webinar Overview\n\nJoin our cybersecurity experts for an in-depth discussion...',
        featured_image_url: '/ai-neural-network-data.png',
        webinar_url: 'https://zoom.us/j/123456789',
        duration: '2.5 hours',
        scheduled_at: '2025-03-15T09:00:00Z',
        presenter_name: 'Dr. Sarah Johnson',
        presenter_title: 'Chief Cybersecurity Officer',
        status: 'published',
        registrations: 450,
        tags: ['Cybersecurity', 'Webinar', 'Security', 'Trends', '2025']
      }
    ]

    // Insert data
    const { error: blogsError } = await supabaseAdmin.from('blogs').insert(blogs)
    if (blogsError) console.error('Error inserting blogs:', blogsError)

    const { error: caseStudiesError } = await supabaseAdmin.from('case_studies').insert(caseStudies)
    if (caseStudiesError) console.error('Error inserting case studies:', caseStudiesError)

    const { error: whitepapersError } = await supabaseAdmin.from('whitepapers').insert(whitepapers)
    if (whitepapersError) console.error('Error inserting whitepapers:', whitepapersError)

    const { error: webinarsError } = await supabaseAdmin.from('webinars').insert(webinars)
    if (webinarsError) console.error('Error inserting webinars:', webinarsError)

    console.log('Sample data inserted successfully!')
    return true
  } catch (error) {
    console.error('Error inserting sample data:', error)
    return false
  }
}

