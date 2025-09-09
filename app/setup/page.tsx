"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, XCircle, Loader2, Database, FileText, Users } from 'lucide-react'

export default function SetupPage() {
  const [loading, setLoading] = useState(false)
  const [setupComplete, setSetupComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [steps, setSteps] = useState<{ [key: string]: 'pending' | 'loading' | 'success' | 'error' }>({
    database: 'pending',
    sampleData: 'pending'
  })

  const handleSetup = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Step 1: Setup database
      setSteps(prev => ({ ...prev, database: 'loading' }))
      
      const setupResponse = await fetch('/api/setup-database', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'setup' })
      })
      
      if (!setupResponse.ok) {
        const errorData = await setupResponse.json()
        throw new Error(errorData.error || 'Failed to setup database')
      }
      
      setSteps(prev => ({ ...prev, database: 'success' }))
      
      // Step 2: Insert sample data
      setSteps(prev => ({ ...prev, sampleData: 'loading' }))
      
      const sampleDataResponse = await fetch('/api/setup-database', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'sample-data' })
      })
      
      if (!sampleDataResponse.ok) {
        const errorData = await sampleDataResponse.json()
        throw new Error(errorData.error || 'Failed to insert sample data')
      }
      
      setSteps(prev => ({ ...prev, sampleData: 'success' }))
      setSetupComplete(true)
      
    } catch (error) {
      console.error('Setup error:', error)
      setError(error instanceof Error ? error.message : 'An unknown error occurred')
      setSteps(prev => ({ ...prev, database: 'error', sampleData: 'error' }))
    } finally {
      setLoading(false)
    }
  }

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'loading':
        return <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
    }
  }

  const getStepText = (status: string, stepName: string) => {
    switch (status) {
      case 'loading':
        return `Setting up ${stepName}...`
      case 'success':
        return `${stepName} completed successfully`
      case 'error':
        return `Failed to setup ${stepName}`
      default:
        return `Setup ${stepName}`
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              Database Setup
            </CardTitle>
            <p className="text-gray-600">
              Initialize your Supabase database with the required tables and sample data
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {!setupComplete ? (
              <>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    {getStepIcon(steps.database)}
                    <span className={steps.database === 'error' ? 'text-red-600' : 'text-gray-700'}>
                      {getStepText(steps.database, 'Database Tables')}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    {getStepIcon(steps.sampleData)}
                    <span className={steps.sampleData === 'error' ? 'text-red-600' : 'text-gray-700'}>
                      {getStepText(steps.sampleData, 'Sample Data')}
                    </span>
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 text-red-800">
                      <XCircle className="w-5 h-5" />
                      <span className="font-medium">Setup Error</span>
                    </div>
                    <p className="text-red-700 mt-1">{error}</p>
                  </div>
                )}

                <Button 
                  onClick={handleSetup} 
                  disabled={loading}
                  className="w-full"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Setting up database...
                    </>
                  ) : (
                    <>
                      <Database className="w-4 h-4 mr-2" />
                      Setup Database
                    </>
                  )}
                </Button>
              </>
            ) : (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Setup Complete!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your database has been successfully set up with all required tables and sample data.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-medium text-blue-900">Blogs</h4>
                    <p className="text-sm text-blue-700">2 sample blog posts</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-medium text-green-900">Case Studies</h4>
                    <p className="text-sm text-green-700">2 sample case studies</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-medium text-purple-900">Resources</h4>
                    <p className="text-sm text-purple-700">Whitepapers & webinars</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={() => window.location.href = '/admin'}
                    className="flex-1"
                  >
                    Go to Admin Panel
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/'}
                    variant="outline"
                    className="flex-1"
                  >
                    View Website
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-4">
            This setup will create the following tables: blogs, case_studies, whitepapers, webinars, admin_users
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
            <h3 className="font-semibold text-blue-900 mb-2">Manual Setup Required</h3>
            <p className="text-sm text-blue-800 mb-3">
              Due to Supabase security restrictions, you need to manually run the SQL schema. 
              Follow these steps:
            </p>
            <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
              <li>Go to your Supabase Dashboard</li>
              <li>Navigate to SQL Editor</li>
              <li>Copy the contents of <code className="bg-blue-100 px-1 rounded">SUPABASE_SCHEMA.sql</code></li>
              <li>Paste and run the SQL</li>
              <li>Come back and click "Insert Sample Data"</li>
            </ol>
            <div className="mt-3">
              <a 
                href="https://wcoqnrwifybuhcgeasep.supabase.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Open Supabase Dashboard →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
