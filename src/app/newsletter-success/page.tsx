import Link from 'next/link'

export default function NewsletterSuccess() {
  return (
    <div className="min-h-screen bg-white shadow-none flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-dark-blue mb-6">
          Newsletter-Anmeldung erfolgreich!
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Vielen Dank für Ihre Anmeldung zu unserem Newsletter. Sie werden ab sofort über
          neue Kurse, Termine und exklusive Angebote informiert.
        </p>

        <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-dark-blue mb-3">Was Sie erwartet:</h2>
          <ul className="space-y-2 text-gray-700 text-left max-w-md mx-auto">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-brand-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Neue Kursankündigungen und Early-Bird-Angebote
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-brand-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Kostenlose Tech-Tipps und Lernressourcen
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-brand-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Einladungen zu exklusiven Events und Webinaren
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-brand-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Maximal 2 E-Mails pro Monat - kein Spam
            </li>
          </ul>
        </div>

        <p className="text-gray-600 mb-8">
          Sie können sich jederzeit mit einem Klick wieder abmelden. Ihre Daten werden vertraulich behandelt
          und nicht an Dritte weitergegeben.
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
            Kurse entdecken
          </Link>
        </div>
      </div>
    </div>
  )
}
