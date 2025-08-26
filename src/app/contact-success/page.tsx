import Link from 'next/link'

export default function ContactSuccess() {
  return (
    <div className="min-h-screen bg-white shadow-none flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-dark-blue mb-6">
          Nachricht erfolgreich gesendet!
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.
        </p>

        <p className="text-gray-600 mb-8">
          In der Regel antworten wir innerhalb von 24 Stunden. Falls Sie eine dringende Anfrage haben,
          können Sie uns auch direkt unter <strong>+41 44 123 45 67</strong> erreichen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors shadow-none"
          >
            Zur Startseite
          </Link>
          <Link
            href="/services"
            className="bg-transparent text-dark-blue border-2 border-dark-blue px-8 py-3 rounded-lg font-semibold hover:bg-dark-blue hover:text-white transition-colors shadow-none"
          >
            Kurse ansehen
          </Link>
        </div>
      </div>
    </div>
  )
}
