"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X } from "lucide-react";

const MediumIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0ZM4.408 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.144 1.065-.353 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004v-.146Z" />
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Work" },
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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-nav text-white">
      <div className="shell relative">
        <nav className="grid h-[68px] grid-cols-[1fr_auto_1fr] items-center">
          <Link
            href="/"
            className="justify-self-start text-[16px] font-semibold leading-none tracking-tight text-white transition hover:text-white/80"
          >
            Kaweesi Matia
          </Link>

          <ul className="hidden items-center gap-8 text-[14px] md:flex">
            {links.map(({ href, label }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : pathname === href || pathname.startsWith(`${href}/`);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative pb-0.5 transition ${
                      active
                        ? "font-medium text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center justify-self-end">
            <div className="hidden items-center gap-2 md:flex">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} strokeWidth={2} />
                </a>
              ))}
              <Link
                href="/contact"
                className="ml-3 inline-flex h-[38px] w-[86px] items-center justify-center rounded-lg bg-brand text-[14px] font-semibold text-white transition hover:brightness-110"
              >
                Hire me
              </Link>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="rounded-lg p-2 text-white md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        <div
          className={`overflow-hidden border-t border-white/10 md:hidden ${
            mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          } transition-all duration-300`}
        >
          <ul className="space-y-1 pt-4 text-[15px]">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block rounded-lg px-3 py-2.5 ${
                    pathname === href
                      ? "bg-white/10 font-medium text-white"
                      : "text-slate-300"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4 px-3">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-300"
              >
                <Icon size={18} strokeWidth={2} />
              </a>
            ))}
            <Link
              href="/contact"
              className="inline-flex h-[38px] w-[86px] items-center justify-center rounded-lg bg-brand text-[14px] font-semibold text-white"
            >
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
