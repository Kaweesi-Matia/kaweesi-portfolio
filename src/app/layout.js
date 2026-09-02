import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FadeInWrapper from "./components/FadeInWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "Kaweesi Matia | Full-Stack Software Engineer",
    template: "%s | Kaweesi Matia",
  },
  description:
    "Full-stack software engineer building real-world applications, data systems, and AI-ready products with React, Node.js, Python, and FastAPI.",
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
  openGraph: {
    title: "Kaweesi Matia | Full-Stack Software Engineer",
    description:
      "Real-world applications, data systems, and AI-ready products. React, Node.js, Python, FastAPI.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body
        className="min-h-screen bg-slate-50 text-slate-900 antialiased"
        suppressHydrationWarning
      >
        <Header />
        <main className="shell py-8 sm:py-10 lg:py-12">
          <FadeInWrapper>{children}</FadeInWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
