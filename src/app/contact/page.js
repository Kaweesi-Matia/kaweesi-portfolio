"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const TO_EMAIL = "matiakaweesi@gmail.com";

export default function ContactPage() {
  return <ContactContent />;
}

function ContactContent() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const socialLinks = [
    {
      href: "https://github.com/Kaweesi-Matia",
      label: "GitHub",
      hint: "Projects and engineering work",
      icon: Github,
    },
    {
      href: "https://www.linkedin.com/in/kaweesi-matia/",
      label: "LinkedIn",
      hint: "Professional experience and background",
      icon: Linkedin,
    },
    {
      href: `mailto:${TO_EMAIL}`,
      label: "Email",
      hint: TO_EMAIL,
      icon: Mail,
    },
  ];

  function openGmailCompose(name, email, message) {
    const emailBody = `Hello Kaweesi,

${message}

—
${name}
${email}
`;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(emailBody);
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(TO_EMAIL)}` +
      `&su=${subject}` +
      `&body=${body}`;

    const opened = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("idle");
      setError("Please fill in your name, email, and message.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.ok) {
        form.reset();
        setStatus("sent");
        return;
      }

      openGmailCompose(name, email, message);
      setStatus("gmail");
    } catch {
      openGmailCompose(name, email, message);
      setStatus("gmail");
    }
  }

  return (
    <section className="py-2 sm:py-4">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Contact
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-slate-600">
            I&apos;m open to full-time, contract, and remote software
            engineering opportunities. I typically respond within one business
            day.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 shrink-0" />
            Uganda · Open to Remote Software Engineering Opportunities
          </p>

          <ul className="mt-12 space-y-4">
            {socialLinks.map(({ href, label, hint, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-indigo-200 hover:shadow-sm"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-indigo-50 text-indigo-700">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      {label}
                    </span>
                    <span className="text-sm text-slate-500">{hint}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-xl font-semibold text-slate-900">
            Send me a message
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-slate-500">
            Have an opportunity, project, or question? Send me a message and
            I&apos;ll get back to you as soon as possible. You can also reach
            me directly by email.
          </p>

          {status === "sent" ? (
            <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-5 text-sm text-emerald-800">
              Message sent. I will get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="Tell me about the opportunity or project..."
                />
              </div>

              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              {status === "gmail" && (
                <p className="text-sm text-slate-600">
                  Gmail should be open with your message ready. Click Send
                  there to deliver it.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-16 text-center sm:mt-20">
        <p className="text-sm text-slate-500">
          Prefer to review my background first?
        </p>
        <a
          href="/files/kaweesi-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800"
        >
          View Resume →
        </a>
      </div>
    </section>
  );
}
