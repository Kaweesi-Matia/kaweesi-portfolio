"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin } from "lucide-react";

/*
 * Medium brand symbol
 * Designed to visually match the 24px GitHub and LinkedIn icons.
 */
const MediumIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0ZM4.408 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.144 1.065-.353 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004v-.146Z"
    />
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/Kaweesi-Matia",
      Icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/kaweesi-matia/",
      Icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://medium.com/@matiakaweesi",
      Icon: MediumIcon,
      label: "Medium",
    },
  ];

  return (
    <header className="bg-black text-white p-6">
      <div className="relative max-w-7xl mx-auto">
        <nav className="flex justify-between items-center">
          {/* Left: Name */}
          <h1
            className="
              transition-all
              duration-200
              text-white
              hover:text-gray-300
              inline-block
              text-xl
              font-semibold
            "
          >
            <Link href="/">Kaweesi Matia</Link>
          </h1>

          {/* Center: Desktop Navigation */}
          <ul className="hidden md:flex gap-10 text-md">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition ${
                    pathname === href
                      ? "text-white border-b-2 border-white pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-md
                  text-gray-300
                  hover:text-white
                  hover:bg-white/10
                  transition-all
                  duration-200
                  hover:scale-110
                "
              >
                <Icon
                  size={24}
                  strokeWidth={2}
                />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="
              md:hidden
              text-3xl
              transition-transform
              duration-200
            "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        <ul
          className={`fixed top-20 right-0 h-full w-full bg-black px-6 py-10 space-y-6 text-md shadow-lg z-50 transition-transform duration-300 transform ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full pointer-events-none"
          }`}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block transition ${
                  pathname === href
                    ? "font-bold text-white"
                    : "text-gray-300"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Mobile social icons */}
          <div className="flex gap-4 pt-6">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-md
                  text-gray-300
                  hover:text-white
                  hover:bg-white/10
                  transition-all
                  duration-200
                  hover:scale-110
                "
              >
                <Icon
                  size={24}
                  strokeWidth={2}
                />
              </a>
            ))}
          </div>
        </ul>
      </div>
    </header>
  );
}