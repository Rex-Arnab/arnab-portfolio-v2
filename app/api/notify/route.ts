import { NextRequest, NextResponse } from "next/server";

const GOWA_URL = "http://77.42.17.12:3111";
const GOWA_USER = "admin";
const GOWA_PASS = "admin";
const NOTIFY_PHONE = "918637823118@s.whatsapp.net";

// In-memory rate limit: one notification per IP per 10 minutes
const seen = new Map<string, number>();
const COOLDOWN_MS = 10 * 60 * 1000;

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const now = Date.now();
  const last = seen.get(ip) ?? 0;

  if (now - last < COOLDOWN_MS) {
    return NextResponse.json({ ok: false, reason: "rate_limited" }, { status: 429 });
  }

  seen.set(ip, now);

  // Clean up old entries to prevent memory growth
  if (seen.size > 500) {
    seen.forEach((ts, key) => {
      if (now - ts > COOLDOWN_MS) seen.delete(key);
    });
  }

  const ua = req.headers.get("user-agent") ?? "unknown";
  const time = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const message = `*Portfolio Visit*\nTime: ${time} IST\nIP: ${ip}\nUA: ${ua}`;

  try {
    const credentials = Buffer.from(`${GOWA_USER}:${GOWA_PASS}`).toString("base64");

    const res = await fetch(`${GOWA_URL}/send/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({ phone: NOTIFY_PHONE, message }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[notify] Gowa error:", res.status, text);
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[notify] fetch failed:", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
