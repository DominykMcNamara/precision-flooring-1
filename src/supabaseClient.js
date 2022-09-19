import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sphjhoehdeefdkpcimuw.supabase.co'
const supabaseAnonKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwaGpob2VoZGVlZmRrcGNpbXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI4NDU3MzIsImV4cCI6MTk3ODQyMTczMn0.K7FwhI55mu-3V5LqU-45lJ7LbwLHKzVMzZrP-8hhJwg'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)