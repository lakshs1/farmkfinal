import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createHash } from "https://deno.land/std@0.168.0/hash/mod.ts";

serve(async (req) => {
  try {
    const body = await req.json();
    const { amount, productinfo, firstname, email, phone } = body;

    // Env variables from supabase dashboard
    const key = Deno.env.get("PAYU_KEY")!;
    const salt = Deno.env.get("PAYU_SALT")!;
    const baseUrl = Deno.env.get("PAYU_BASE_URL")!;

    // Generate txnid (random string)
    const txnid = crypto.randomUUID().replace(/-/g, "").slice(0, 20);

    // Hash string format: key|txnid|amount|productinfo|firstname|email|||||||||||salt
    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
    const hash = new createHash("sha512").update(hashString).toString();

    return new Response(
      JSON.stringify({
        action: baseUrl,
        key,
        txnid,
        amount,
        productinfo,
        firstname,
        email,
        phone,
        hash,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
});
