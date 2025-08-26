import Link from 'next/link'

export default function Guarantees() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6">
            Unsere <span className="text-brand-primary">Garantien</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir stehen zu 100% hinter der Qualität unserer Ausbildung.
            Hier sind unsere verbindlichen Zusagen an Sie als Teilnehmer.
          </p>
        </div>
      </section>

      {/* Main Guarantees */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Job-Vermittlungsgarantie */}
            <div className="bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 rounded-2xl p-8 border border-brand-primary/20">
              <div className="bg-brand-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Job-Vermittlungsgarantie</h3>
              <p className="text-gray-700 mb-6">
                <strong>85% unserer Absolventen</strong> finden innerhalb von 6 Monaten nach Kursabschluss
                eine Anstellung in ihrem gewählten Tech-Bereich. Falls Sie nach 6 Monaten aktiver Jobsuche
                noch keine Stelle gefunden haben, erhalten Sie:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  6 Monate kostenloses Career Coaching
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Kostenlose Teilnahme an einem Auffrischungskurs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Prioritätszugang zu unserem Partnernetzwerk
                </li>
              </ul>
            </div>

            {/* Qualitätsgarantie */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Qualitätsgarantie</h3>
              <p className="text-gray-700 mb-6">
                Wir garantieren Ihnen <strong>erstklassige Ausbildungsqualität</strong> nach
                höchsten Schweizer Standards. Falls Sie mit unserem Kurs nicht zufrieden sind:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  30 Tage Geld-zurück-Garantie ohne Angabe von Gründen
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Kostenloser Wechsel zu einem anderen Kurs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Individuelle Lösungen bei besonderen Umständen
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Guarantees */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">
              Weitere Zusagen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unsere Verpflichtung geht über die Kurszeit hinaus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl p-6 shadow-none border border-gray-200">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-3">Lebenslanger Support</h3>
              <p className="text-gray-600">
                Auch nach Kursabschluss stehen wir Ihnen mit Rat und Tat zur Seite.
                Unser Alumni-Netzwerk bietet lebenslangen Zugang zu Updates und Community.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-none border border-gray-200">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-3">Datenschutz-Garantie</h3>
              <p className="text-gray-600">
                Ihre persönlichen Daten sind bei uns sicher. Wir halten uns strikt an
                die DSGVO und Schweizer Datenschutzbestimmungen.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-none border border-gray-200">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-3">Aktualitäts-Garantie</h3>
              <p className="text-gray-600">
                Unsere Kursinhalte werden vierteljährlich aktualisiert, um mit den
                neuesten Technologien und Branchenstandards Schritt zu halten.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-none border border-gray-200">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-3">Transparente Preise</h3>
              <p className="text-gray-600">
                Keine versteckten Kosten, keine Nachzahlungen. Der angegebene Preis
                beinhaltet alle Leistungen und Materialien.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-none border border-gray-200">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Unser Support-Team ist rund um die Uhr erreichbar für technische Fragen
                und organisatorische Anliegen.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-none border border-gray-200">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-3">Kleingruppen-Garantie</h3>
              <p className="text-gray-600">
                Maximal 12 Teilnehmer pro Kurs für optimale Betreuung und
                individuellen Lernerfolg.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark-blue mb-8 text-center">
            Garantie-Bedingungen
          </h2>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-dark-blue mb-2">Geltungsbereich</h3>
                <p>
                  Diese Garantien gelten für alle von Code Werkstatt angebotenen Kurse und
                  Dienstleistungen, sofern nicht anders angegeben.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-dark-blue mb-2">Job-Vermittlungsgarantie Voraussetzungen</h3>
                <p>
                  Die Job-Vermittlungsgarantie gilt bei erfolgreicher Kursteilnahme (min. 80% Anwesenheit),
                  aktivem Engagement in der Jobsuche und Teilnahme an unseren Career Services.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-dark-blue mb-2">Geld-zurück-Garantie</h3>
                <p>
                  Die 30-Tage Geld-zurück-Garantie beginnt mit dem ersten Kurstag.
                  Eine Rückerstattung erfolgt binnen 14 Tagen nach Antragstellung.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-dark-blue mb-2">Rechtswahl</h3>
                <p>
                  Es gilt Schweizer Recht. Gerichtsstand ist Zürich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Starten Sie risikofrei in Ihre Tech-Karriere
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Mit unseren umfassenden Garantien gehen Sie kein Risiko ein.
            Buchen Sie noch heute Ihr kostenloses Beratungsgespräch.
          </p>
          <Link
            href="/contact"
            className="bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center shadow-none"
          >
            Kostenloses Beratungsgespräch
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
