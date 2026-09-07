import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FadeInWrapper from "./components/FadeInWrapper";
import { SITE_URL } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kaweesi Matia | Full-Stack Software Engineer",
    template: "%s | Kaweesi Matia",
  },
  description:
    "Full-stack software engineer building end-to-end web applications and data systems with React, Node.js, Python, and FastAPI.",
  keywords: [
    "Kaweesi Matia",
    "Full-Stack Developer",
    "React",
    "FastAPI",
    "Node.js",
    "Python",
    "Software Engineer",
  ],
  authors: [{ name: "Kaweesi Matia" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kaweesi Matia | Full-Stack Software Engineer",
    description:
      "End-to-end web applications and data systems. React, Node.js, Python, FastAPI.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Kaweesi Matia",
    images: [
      {
        url: "/images/kaweesi-port.jpg",
        width: 350,
        height: 420,
        alt: "Kaweesi Matia, full-stack software engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaweesi Matia | Full-Stack Software Engineer",
    description:
      "End-to-end web applications and data systems. React, Node.js, Python, FastAPI.",
    images: ["/images/kaweesi-port.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kaweesi Matia",
  jobTitle: "Full-Stack Software Engineer",
  url: SITE_URL,
  image: `${SITE_URL}/images/kaweesi-port.jpg`,
  email: "mailto:matiakaweesi@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UG",
    addressLocality: "Kampala",
  },
  sameAs: [
    "https://github.com/Kaweesi-Matia",
    "https://www.linkedin.com/in/kaweesi-matia/",
    "https://medium.com/@matiakaweesi",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body
        className="min-h-screen bg-slate-50 text-slate-900 antialiased"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main className="shell py-8 sm:py-10 lg:py-12">
          <FadeInWrapper>{children}</FadeInWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
