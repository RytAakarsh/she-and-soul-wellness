-- Fix RLS policies for submissions table
-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit forms" ON public.submissions;
DROP POLICY IF EXISTS "No public access to submissions" ON public.submissions;

-- Create proper RLS policies
-- Allow anyone to insert submissions (for public forms)
CREATE POLICY "Enable insert for everyone" ON public.submissions
  FOR INSERT WITH CHECK (true);

-- Only allow service role to read submissions (for admin access)
CREATE POLICY "Enable read access for service role only" ON public.submissions
  FOR SELECT USING (false);