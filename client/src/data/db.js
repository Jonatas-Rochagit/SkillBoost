import { createClient } from '@supabase/supabase-js';

// Em Create React App, use process.env.REACT_APP_*
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('[db] Missing env vars REACT_APP_SUPABASE_URL and/or REACT_APP_SUPABASE_ANON_KEY');
}

export const supabase = createClient(SUPABASE_URL || '', SUPABASE_ANON_KEY || '');
export default supabase;


