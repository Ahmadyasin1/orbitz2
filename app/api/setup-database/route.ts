import { NextRequest, NextResponse } from 'next/server'
import { setupDatabase, insertSampleData } from '@/lib/setup-database'

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json()
    
    if (action === 'setup') {
      // Setup the database
      const setupSuccess = await setupDatabase()
      if (!setupSuccess) {
        return NextResponse.json({ error: 'Failed to setup database' }, { status: 500 })
      }
      
      return NextResponse.json({ message: 'Database setup completed successfully!' })
    }
    
    if (action === 'sample-data') {
      const sampleDataSuccess = await insertSampleData()
      if (!sampleDataSuccess) {
        return NextResponse.json({ error: 'Failed to insert sample data' }, { status: 500 })
      }
      
      return NextResponse.json({ message: 'Sample data inserted successfully!' })
    }
    
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Setup error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
