import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, company, phone } = await req.json();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { error: dbError } = await supabase
      .from("investor_requests")
      .insert({
        name,
        email,
        company,
        phone,
        submitted_at: new Date().toISOString(),
      });

    if (dbError) {
      console.error("Database error:", dbError);
    }

    const emailData = {
      to: "bryce@3v3live.com",
      subject: "New Investor Deck Request - Derma Finance",
      body: `New Investor Deck Request\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nPhone: ${phone || 'Not provided'}\n\nSubmitted: ${new Date().toISOString()}`,
    };

    console.log("Investor request received:", emailData);

    return new Response(
      JSON.stringify({ success: true, message: "Request received successfully" }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
