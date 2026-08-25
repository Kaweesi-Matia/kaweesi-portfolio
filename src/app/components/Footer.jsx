"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 py-10 px-6 mt-20">
      {/* Up arrow bump */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="absolute left-1/2 -top-4 transform -translate-x-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:shadow-md transition cursor-pointer hover:scale-140"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Kaweesi Matia</p>

        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-black transition">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-black transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
