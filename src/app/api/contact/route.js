import { NextResponse } from "next/server";

const TO_EMAIL = "matiakaweesi@gmail.com";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const response = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio inquiry from ${name}`,
        _template: "table",
        _captcha: "false",
        _replyto: email,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.success === "false" || data.success === false) {
      return NextResponse.json(
        {
          ok: false,
          error:
            data.message ||
            "Could not send the message just now. Try email instead.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not send the message. Try email instead." },
      { status: 500 }
    );
  }
}
