import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FormSubmission {
  type: 'contact' | 'newsletter';
  name?: string;
  email: string;
  subject?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const formData: FormSubmission = await req.json();
    console.log("Form submission received:", formData);

    // Insert submission into database
    const { data: submission, error: dbError } = await supabase
      .from('submissions')
      .insert([
        {
          type: formData.type,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log("Submission saved to database:", submission);

    // Prepare email content based on form type
    let emailSubject = '';
    let emailHtml = '';

    if (formData.type === 'contact') {
      emailSubject = `New Contact Form Submission from ${formData.name}`;
      emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject || 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message?.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `;
    } else if (formData.type === 'newsletter') {
      emailSubject = `New Newsletter Signup: ${formData.name}`;
      emailHtml = `
        <h2>New Newsletter Signup</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <hr>
        <p><small>Signed up at: ${new Date().toLocaleString()}</small></p>
      `;
    }

    // Send email notification to admin
    const emailResponse = await resend.emails.send({
      from: "SheSoul Forms <onboarding@resend.dev>",
      to: ["shesoul19@gmail.com"],
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      submission: submission,
      email: emailResponse 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in submit-form function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "An error occurred while processing your submission" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);