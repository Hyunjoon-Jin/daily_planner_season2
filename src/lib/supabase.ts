import { createBrowserClient } from '@supabase/ssr';

// Safe initialization for build-time static generation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createBrowserClient(supabaseUrl, supabaseAnonKey)
    : null as any;
