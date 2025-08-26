import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6 leading-tight">
                Starten Sie Ihre Karriere.
                <br />
                <span className="text-brand-primary">Wechseln Sie in die Tech-Branche!</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Anfängerfreundliche Bootcamps in Web Development, Data Science & KI, Cybersecurity und UX/UI Design.
                Erwerben Sie Fähigkeiten, erstellen Sie ein Portfolio und starten Sie Ihre Tech-Karriere in der Schweiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-brand-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors inline-flex items-center justify-center shadow-none"
                >
                  Kurse entdecken
                  <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent text-dark-blue border-2 border-dark-blue px-8 py-4 rounded-lg font-semibold hover:bg-dark-blue hover:text-white transition-colors inline-flex items-center justify-center shadow-none"
                >
                  Beratungsgespräch buchen
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Programmierkurs Teilnehmer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-yellow-400 rounded p-2">
                  <span className="text-xs font-bold">★★★★★</span>
                </div>
              </div>
              <p className="text-sm font-medium">Google Reviews</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-green-500 rounded p-2">
                  <span className="text-xs font-bold text-white">CERT</span>
                </div>
              </div>
              <p className="text-sm font-medium">Zertifiziert</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-blue-600 rounded p-2">
                  <span className="text-xs font-bold text-white">EDU</span>
                </div>
              </div>
              <p className="text-sm font-medium">Bildungspartner</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-brand-primary rounded p-2">
                  <span className="text-xs font-bold text-white">CH</span>
                </div>
              </div>
              <p className="text-sm font-medium">Swiss Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-blue mb-4">
              Kommende Kurse
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Live Online-Kurse starten in den nächsten Monaten. Wählen Sie Ihr bevorzugtes Thema und Startdatum, um mehr zu erfahren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development Course */}
            <div className="bg-white rounded-lg p-6 shadow-none border border-gray-200">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-dark-blue mb-2">Web Development</h3>
                <p className="text-brand-primary font-semibold">Zürich - Schweiz (CET+1)</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  <span>15. März 2025</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span>Vollzeit: 12 Wochen | Teilzeit: 24 Wochen</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Online & Vor Ort</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Preis</span>
                  <span className="text-2xl font-bold text-dark-blue">CHF 8.500</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="block bg-brand-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors shadow-none"
              >
                Anmelden
              </Link>
            </div>

            {/* Data Science Course */}
            <div className="bg-white rounded-lg p-6 shadow-none border border-gray-200">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-dark-blue mb-2">Data Science & KI</h3>
                <p className="text-brand-primary font-semibold">Zürich - Schweiz (CET+1)</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  <span>22. April 2025</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span>Vollzeit: 12 Wochen | Teilzeit: 24 Wochen</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Online & Vor Ort</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Preis</span>
                  <span className="text-2xl font-bold text-dark-blue">CHF 9.200</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="block bg-brand-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors shadow-none"
              >
                Anmelden
              </Link>
            </div>

            {/* Cybersecurity Course */}
            <div className="bg-white rounded-lg p-6 shadow-none border border-gray-200">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-dark-blue mb-2">Cybersecurity</h3>
                <p className="text-brand-primary font-semibold">Zürich - Schweiz (CET+1)</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  <span>10. Juni 2025</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span>Vollzeit: 12 Wochen | Teilzeit: 24 Wochen</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Online & Vor Ort</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Preis</span>
                  <span className="text-2xl font-bold text-dark-blue">CHF 8.800</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="block bg-brand-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors shadow-none"
              >
                Anmelden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Learning Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-blue mb-6">
                Online lernen
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Online</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span>Vollzeit: 12 Wochen | Teilzeit: 24 Wochen</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Studieren Sie remote von überall auf der Welt in einem Kurs, der speziell darauf ausgelegt ist,
                die Lernherausforderungen zu bewältigen, denen Remote-Teilnehmer gegenüberstehen.
              </p>
              <Link
                href="/services"
                className="bg-dark-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center shadow-none"
              >
                Kurse entdecken
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Online Lernen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Code Werkstatt */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-blue mb-4">
              Warum bei Code Werkstatt lernen?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">1-zu-1 Karriere-Coaching</h3>
              <p className="text-gray-600">
                Persönliche Betreuung durch Karriere-Spezialisten: CV-Optimierung, Mock-Interviews
                und eine Tech-fokussierte Jobsuche-Strategie.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Portfolio-bereite Projekte</h3>
              <p className="text-gray-600">
                Absolvieren Sie mit einem GitHub-bereiten Portfolio aus realen Projekten,
                die im Unterricht erstellt und mit Mentor-Feedback verfeinert wurden.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Industriegetriebener Lehrplan</h3>
              <p className="text-gray-600">
                Ein Lehrplan, der vierteljährlich aktualisiert wird, um der neuesten Nachfrage
                in KI, Cybersecurity und Webentwicklung zu entsprechen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Anerkanntes Zertifikat</h3>
              <p className="text-gray-600">
                Präsentieren Sie Ihr anerkanntes Code Werkstatt-Zertifikat auf LinkedIn,
                Ihrem Lebenslauf und in Visa-Anträgen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Bereit, Ihre Tech-Karriere zu starten?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Treten Sie unserer Gemeinschaft von erfolgreichen Absolventen bei und
            verwandeln Sie Ihre Leidenschaft für Technologie in eine erfüllende Karriere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center shadow-none"
            >
              Kostenloses Beratungsgespräch
            </Link>
            <Link
              href="/services"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors inline-flex items-center justify-center shadow-none"
            >
              Alle Kurse ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
