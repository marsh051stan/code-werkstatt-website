import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Code Werkstatt"
                width={180}
                height={40}
                className="h-10 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Code Werkstatt ist Ihr zuverlässiger Partner für professionelle Programmierkurse in der Schweiz.
              Wir bieten erstklassige Ausbildung in Web Development, Data Science, Cybersecurity und UX/UI Design.
            </p>

            {/* Contact Information */}
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>+41 44 123 45 67</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>info@codewerkstatt.ch</span>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>
                  Bahnhofstrasse 15<br />
                  8001 Zürich<br />
                  Schweiz
                </span>
              </div>
            </div>
          </div>

          {/* Kurse */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kurse</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Data Science & KI
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-brand-primary transition-colors">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Python Programmierung
                </Link>
              </li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guarantees" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Garantien
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Rückgaberichtlinie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Code Werkstatt. Alle Rechte vorbehalten.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/impressum" className="text-gray-400 hover:text-brand-primary transition-colors">
                Impressum
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-brand-primary transition-colors">
                Datenschutz
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-brand-primary transition-colors">
                AGB
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-brand-primary transition-colors">
                Cookie-Richtlinie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
