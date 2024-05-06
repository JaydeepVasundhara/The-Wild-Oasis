
import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = 'https://ksxeczvftuyatykrqcie.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzeGVjenZmdHV5YXR5a3JxY2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4OTczODMsImV4cCI6MjAyODQ3MzM4M30.zvOJRBBvNqExOlJkgkCgeVdZAisI7kdFTUVSsncs2x4`
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase