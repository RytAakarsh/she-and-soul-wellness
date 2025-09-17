-- Create a table for form submissions
CREATE TABLE public.submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('contact', 'newsletter')),
  name TEXT,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for form submissions)
CREATE POLICY "Anyone can submit forms" 
ON public.submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading (admin only)
CREATE POLICY "No public access to submissions" 
ON public.submissions 
FOR SELECT 
USING (false);

-- Create index for better performance
CREATE INDEX idx_submissions_created_at ON public.submissions(created_at DESC);
CREATE INDEX idx_submissions_type ON public.submissions(type);