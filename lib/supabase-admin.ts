import { createClient } from '@supabase/supabase-js'

// Server-only Supabase client using the service role key
// NEVER import this from the client. Use in route handlers or server actions only.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string

if (!supabaseUrl || !serviceRoleKey) {
  // eslint-disable-next-line no-console
  console.warn('Supabase admin env vars missing. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
}

export const supabaseAdmin = createClient(supabaseUrl ?? '', serviceRoleKey ?? '', {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})
