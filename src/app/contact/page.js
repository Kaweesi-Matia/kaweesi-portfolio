"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export default function ContactPage() {
  return <ContactContent />;
}

function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      href: "https://github.com/Kaweesi-Matia",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "https://www.linkedin.com/in/kaweesi-matia/",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://www.facebook.com/kaweesi.matia.5/",
      label: "Facebook",
      icon: Facebook,
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=matiakaweesi@gmail.com&su=Portfolio%20Inquiry",
      label: "Email",
      icon: Mail,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.currentTarget;

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      setIsSubmitting(false);
      return;
    }

    /*
     * Create the email body.
     *
     * This information will appear inside Gmail
     * before the visitor clicks Send.
     */
    const emailBody = `Hello Kaweesi,

You have received a new message from your portfolio website.

Name: ${name}
Email: ${email}

Message:
${message}

--------------------------------
Sent from Kaweesi Matia's Portfolio
`;

    /*
     * Encode the subject and message so they can safely
     * be placed inside the Gmail URL.
     */
    const subject = encodeURIComponent("Portfolio Inquiry");

    const body = encodeURIComponent(emailBody);

    /*
     * Gmail compose URL.
     *
     * The visitor's Gmail compose window will open with:
     * - To: matiakaweesi@gmail.com
     * - Subject: Portfolio Inquiry
     * - Body: Name, Email and Message
     */
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=matiakaweesi@gmail.com` +
      `&su=${subject}` +
      `&body=${body}`;

    /*
     * Open Gmail in a new tab.
     */
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
  }

  return (
    <section className="max-w-6xl mx-auto px-0 sm:px-4 md:px-6 py-16 space-y-14">
      {/* Top hero */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-3">
            Contact
          </h1>

          <p className="text-gray-600 mb-8">
            Get in touch via social media or send me an email. I&apos;m always
            happy to talk about projects, collaboration, or anything
            dev-related.
          </p>

          {/* Social links */}
          <ul className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition">
                    <Icon size={18} />
                  </span>

                  <span className="text-gray-700 group-hover:underline">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Photo */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/images/kaweesi-port.jpg"
            alt="Kaweesi Matia"
            width={1200}
            height={900}
            className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] object-cover"
            priority
          />
        </div>
      </div>

      {/* Contact form */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">
        <h2 className="text-3xl font-semibold mb-6">
          Send me an email
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6"
        >
          {/* Name */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell me a little about your project…"
            />
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
            <p className="text-sm text-gray-500">
              Or email me directly at{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=matiakaweesi@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                matiakaweesi@gmail.com
              </a>
              .
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition ${
                isSubmitting
                  ? "bg-gray-500 text-gray-200 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800 active:bg-gray-900 cursor-pointer"
              }`}
            >
              {isSubmitting ? "Opening Gmail..." : "Send email"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}