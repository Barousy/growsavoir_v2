// src/app/api/unlock/route.ts
export async function POST(req: Request) {
    try {
      const { code } = await req.json();
      const ok = code && process.env.UNLOCK_CODE && code === process.env.UNLOCK_CODE;
  
      const body = JSON.stringify({ ok });
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };
  
      if (ok) {
        // Cookie d'accès pendant 30 jours
        headers["Set-Cookie"] =
          "gs_unlock=1; Path=/; Max-Age=2592000; SameSite=Lax; Secure";
        return new Response(body, { status: 200, headers });
      } else {
        // Optionnel: on efface le cookie si code faux
        headers["Set-Cookie"] =
          "gs_unlock=; Path=/; Max-Age=0; SameSite=Lax; Secure";
        return new Response(body, { status: 401, headers });
      }
    } catch {
      return new Response(JSON.stringify({ ok: false }), { status: 400 });
    }
  }
  