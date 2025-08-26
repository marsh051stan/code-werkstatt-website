import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Code Werkstatt - Programmierkurse in der Schweiz",
  description: "Professionelle Programmierkurse für Anfänger und Fortgeschrittene. Web Development, Data Science, Cybersecurity und UX/UI Design. Starten Sie Ihre Tech-Karriere mit Code Werkstatt.",
  keywords: "Programmierkurse, Coding Bootcamp, Web Development, Data Science, Schweiz, Zürich, Bern, Basel",
  authors: [{ name: "Code Werkstatt" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Code Werkstatt - Programmierkurse in der Schweiz",
    description: "Professionelle Programmierkurse für Anfänger und Fortgeschrittene. Starten Sie Ihre Tech-Karriere.",
    type: "website",
    locale: "de_CH",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH" className="no-shadow">
      <body className="no-shadow">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
