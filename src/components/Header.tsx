import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Code Werkstatt"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Dienstleistungen
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Über uns
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/guarantees"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Garantien
            </Link>
            <Link
              href="/return-policy"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Rückgaberichtlinie
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Kontakt
            </Link>
            <Link
              href="/contact"
              className="bg-brand-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors shadow-none"
            >
              Kurs anfragen
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-brand-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x h-6 w-6"
                style={{ display: 'none' }}
              >
                <path d="m18 6-12 12"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden mobile-menu-hidden" style={{ display: 'none' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Dienstleistungen
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Über uns
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/guarantees"
              className="block px-3 py-2 text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Garantien
            </Link>
            <Link
              href="/return-policy"
              className="block px-3 py-2 text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Rückgaberichtlinie
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-brand-primary font-medium transition-colors"
            >
              Kontakt
            </Link>
            <Link
              href="/contact"
              className="block mx-3 my-2 bg-brand-primary text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-brand-primary-dark transition-colors shadow-none"
            >
              Kurs anfragen
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
