"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 320);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-12 border-t border-slate-200 bg-white sm:mt-16">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      <div className="shell flex flex-col gap-8 py-12 sm:py-14 lg:flex-row lg:items-start lg:justify-between lg:py-16">
        <div className="max-w-sm">
          <p className="text-sm font-semibold text-slate-900">Kaweesi Matia</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Full-stack software engineer. Real-world applications, data systems,
            and AI-ready products.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-slate-900">
            Work
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
          <a
            href="/files/kaweesi-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-3 text-slate-500">
          <a
            href="https://github.com/Kaweesi-Matia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-1.5 hover:bg-slate-100 hover:text-slate-900"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/kaweesi-matia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-1.5 hover:bg-slate-100 hover:text-slate-900"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=matiakaweesi@gmail.com&su=Portfolio%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            title="Email Kaweesi Matia"
            className="rounded-lg p-1.5 hover:bg-slate-100 hover:text-slate-900"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <p className="shell py-5 text-xs text-slate-500">
          © {new Date().getFullYear()} Kaweesi Matia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
