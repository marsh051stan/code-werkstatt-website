export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6">
            <span className="text-brand-primary">Rückgabe</span>richtlinie
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparente Bedingungen für Stornierungen, Rückerstattungen und Kursänderungen.
            Ihre Rechte und unsere Verpflichtungen im Überblick.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Overview */}
          <div className="bg-brand-primary/5 rounded-xl p-8 mb-12 border border-brand-primary/20">
            <h2 className="text-2xl font-bold text-dark-blue mb-4">Zusammenfassung</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-brand-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-brand-primary">30</span>
                </div>
                <h3 className="font-semibold text-dark-blue">Tage</h3>
                <p className="text-sm text-gray-600">Geld-zurück-Garantie</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-brand-primary">100%</span>
                </div>
                <h3 className="font-semibold text-dark-blue">Erstattung</h3>
                <p className="text-sm text-gray-600">Bei rechtzeitiger Stornierung</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-brand-primary">0</span>
                </div>
                <h3 className="font-semibold text-dark-blue">Gebühren</h3>
                <p className="text-sm text-gray-600">Keine versteckten Kosten</p>
              </div>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">

            {/* Stornierungsbedingungen */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">1. Stornierungsbedingungen</h2>
              <div className="space-y-6">

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">
                    Stornierung vor Kursbeginn
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Mehr als 14 Tage vor Kursbeginn:</strong> 100% Erstattung des gezahlten Betrags
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>7-14 Tage vor Kursbeginn:</strong> 90% Erstattung (CHF 100 Bearbeitungsgebühr)
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Weniger als 7 Tage vor Kursbeginn:</strong> 70% Erstattung (CHF 300 Bearbeitungsgebühr)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">
                    Stornierung nach Kursbeginn
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Innerhalb der ersten 30 Tage:</strong> Volle Geld-zurück-Garantie ohne Angabe von Gründen
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Nach 30 Tagen:</strong> Anteilige Erstattung basierend auf verbleibender Kurszeit
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Erstattungsverfahren */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">2. Erstattungsverfahren</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-blue mb-1">Antrag stellen</h3>
                      <p className="text-gray-600">
                        Senden Sie eine E-Mail an <strong>refund@codewerkstatt.ch</strong> mit Ihrer Buchungsnummer
                        und dem gewünschten Stornierungsdatum.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-blue mb-1">Bestätigung</h3>
                      <p className="text-gray-600">
                        Sie erhalten innerhalb von 2 Werktagen eine schriftliche Bestätigung
                        und Berechnung der Erstattung.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-blue mb-1">Rückerstattung</h3>
                      <p className="text-gray-600">
                        Die Erstattung erfolgt auf das ursprüngliche Zahlungsmittel
                        innerhalb von 5-10 Werktagen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sonderfälle */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">3. Sonderfälle und Ausnahmen</h2>
              <div className="space-y-6">

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">
                    Medizinische Notfälle
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Bei nachgewiesenen medizinischen Notfällen oder schwerwiegenden persönlichen Umständen
                    bieten wir individuelle Lösungen:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Pausierung des Kurses um bis zu 12 Monate
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Wechsel in einen späteren Kursdurchlauf
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Kulante Erstattungsregelung nach Einzelfallprüfung
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">
                    Kursabsagen durch Code Werkstatt
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Falls wir einen Kurs absagen müssen:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      100% Erstattung aller gezahlten Beträge
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Prioritätsplatz im nächsten verfügbaren Kurs
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      CHF 200 Gutschein als Entschädigung
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Wichtige Hinweise */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">4. Wichtige Hinweise</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Bitte beachten Sie:</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Stornierungen müssen schriftlich per E-Mail erfolgen</li>
                      <li>• Mündliche Stornierungen sind nicht bindend</li>
                      <li>• Erstattungen erfolgen nur auf das ursprüngliche Zahlungsmittel</li>
                      <li>• Bei Ratenzahlungen wird der Restbetrag entsprechend angepasst</li>
                      <li>• Diese Richtlinie unterliegt Schweizer Recht</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">5. Kontakt für Stornierungen</h2>
              <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">E-Mail</h3>
                    <p className="text-gray-700">refund@codewerkstatt.ch</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Telefon</h3>
                    <p className="text-gray-700">+41 44 123 45 67</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Bürozeiten</h3>
                    <p className="text-gray-700">Mo-Fr: 08:00-18:00</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Antwortzeit</h3>
                    <p className="text-gray-700">Innerhalb von 2 Werktagen</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            Diese Rückgaberichtlinie wurde zuletzt am 15. Januar 2025 aktualisiert.
            <br />
            Änderungen werden 30 Tage im Voraus angekündigt.
          </p>
        </div>
      </section>
    </div>
  )
}
