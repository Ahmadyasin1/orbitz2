import { createClient } from '@supabase/supabase-js'

// Browser client (anon) – prefer env vars, fallback to project defaults to keep site functional
const fallbackUrl = 'https://wcoqnrwifybuhcgeasep.supabase.co'
const fallbackAnon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indjb3FucndpZnlidWhjZ2Vhc2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczODUzMjcsImV4cCI6MjA3Mjk2MTMyN30.Nbl3TQQiQRr70MUHbRL_CWL8KeHNDw3dhT58gMpROuE'

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL as string) || fallbackUrl
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string) || fallbackAnon

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// NOTE: The admin client now lives in a server-only module to avoid leaking the service role key.
