import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// Unified content CRUD for blogs, case_studies, whitepapers, webinars
export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get('type')
  if (!type) return NextResponse.json({ error: 'Missing type' }, { status: 400 })

  const { data, error } = await supabaseAdmin.from(type).select('*').order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ data })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, record } = body
    if (!type || !record) return NextResponse.json({ error: 'Missing type or record' }, { status: 400 })

    const { data, error } = await supabaseAdmin.from(type).insert([record]).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ data })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Invalid JSON' }, { status: 400 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, id, record } = body
    if (!type || !id || !record) return NextResponse.json({ error: 'Missing type, id or record' }, { status: 400 })

    const { data, error } = await supabaseAdmin.from(type).update(record).eq('id', id).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ data })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Invalid JSON' }, { status: 400 })
  }
}

export async function DELETE(request: NextRequest) {
  const type = request.nextUrl.searchParams.get('type')
  const id = request.nextUrl.searchParams.get('id')
  if (!type || !id) return NextResponse.json({ error: 'Missing type or id' }, { status: 400 })

  const { error } = await supabaseAdmin.from(type).delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
