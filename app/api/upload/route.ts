import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { randomUUID } from 'crypto'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || ''
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json({ error: 'Expected multipart/form-data' }, { status: 400 })
    }

    const formData = await request.formData()
    const type = (formData.get('type') as string) || 'blog'
    const file = formData.get('file') as File | null
    if (!file) return NextResponse.json({ error: 'Missing file' }, { status: 400 })

    const bucket = type === 'blogs' || type === 'blog' ? 'blog' : 'insight'

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const ext = file.name.split('.').pop() || 'bin'
    const path = `${new Date().getFullYear()}/${new Date().toISOString().slice(5,10).replace('-','')}/${randomUUID()}.${ext}`

    const { data, error } = await supabaseAdmin.storage.from(bucket).upload(path, buffer, {
      contentType: file.type || 'application/octet-stream',
      upsert: false
    })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    const { data: pub } = supabaseAdmin.storage.from(bucket).getPublicUrl(path)

    return NextResponse.json({ path, publicUrl: pub.publicUrl })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Upload failed' }, { status: 500 })
  }
}
