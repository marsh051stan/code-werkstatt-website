export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6">
            <span className="text-brand-primary">Datenschutz</span>erklärung
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparente Informationen über die Erhebung, Verarbeitung und Nutzung Ihrer persönlichen Daten
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-12">

            {/* Overview */}
            <div className="bg-brand-primary/5 rounded-xl p-8 border border-brand-primary/20">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Zusammenfassung</h2>
              <p className="text-gray-700 mb-4">
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie über die
                Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten durch Code Werkstatt AG.
              </p>
              <p className="text-gray-700">
                Wir halten uns strikt an die Bestimmungen der EU-Datenschutz-Grundverordnung (DSGVO) und des
                Schweizer Datenschutzgesetzes (DSG).
              </p>
            </div>

            {/* Verantwortlicher */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">1. Verantwortlicher</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Verantwortlicher für die Datenverarbeitung im Sinne der DSGVO ist:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Code Werkstatt AG</strong></p>
                  <p>Bahnhofstrasse 15</p>
                  <p>8001 Zürich, Schweiz</p>
                  <p>Telefon: +41 44 123 45 67</p>
                  <p>E-Mail: privacy@codewerkstatt.ch</p>
                </div>
              </div>
            </div>

            {/* Datenerhebung */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">2. Erhebung personenbezogener Daten</h2>
              <div className="space-y-6">

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Automatisch erhobene Daten</h3>
                  <p className="text-gray-700 mb-3">
                    Beim Besuch unserer Website werden automatisch folgende Daten erhoben:
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• IP-Adresse (anonymisiert nach 24 Stunden)</li>
                    <li>• Datum und Uhrzeit des Zugriffs</li>
                    <li>• Aufgerufene Seiten</li>
                    <li>• Browser-Typ und Version</li>
                    <li>• Betriebssystem</li>
                    <li>• Referrer-URL</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Aktiv bereitgestellte Daten</h3>
                  <p className="text-gray-700 mb-3">
                    Sie stellen uns aktiv Daten zur Verfügung, wenn Sie:
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Das Kontaktformular ausfüllen</li>
                    <li>• Sich für einen Kurs anmelden</li>
                    <li>• Den Newsletter abonnieren</li>
                    <li>• Mit uns telefonieren oder E-Mails schreiben</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Zweck der Datenverarbeitung */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">3. Zweck der Datenverarbeitung</h2>
              <div className="space-y-4">

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-blue mb-1">Vertragserfüllung</h3>
                      <p className="text-gray-600 text-sm">
                        Durchführung von Kursen, Kundenbetreuung, Rechnungsstellung
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-blue mb-1">Berechtigtes Interesse</h3>
                      <p className="text-gray-600 text-sm">
                        Website-Optimierung, Sicherheit, anonyme Statistiken
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-2 mr-3 mt-1">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-blue mb-1">Einwilligung</h3>
                      <p className="text-gray-600 text-sm">
                        Newsletter-Versand, Marketing-Kommunikation
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Datenweitergabe */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">4. Weitergabe von Daten</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, ausser:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brand-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Sie haben ausdrücklich eingewilligt
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brand-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Es besteht eine gesetzliche Verpflichtung
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brand-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Die Weitergabe ist für die Vertragserfüllung erforderlich
                  </li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">5. Cookies und Tracking</h2>
              <div className="space-y-6">

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Notwendige Cookies</h3>
                  <p className="text-gray-700">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht
                    deaktiviert werden. Sie speichern keine persönlich identifizierbaren Informationen.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Analyse-Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    Mit Ihrer Einwilligung verwenden wir Analyse-Cookies, um die Nutzung unserer Website
                    zu verstehen und zu verbessern:
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Seitenaufrufe und Verweildauer</li>
                    <li>• Beliebteste Inhalte</li>
                    <li>• Technische Probleme</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Ihre Rechte */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">6. Ihre Rechte</h2>
              <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Recht auf Auskunft</li>
                    <li>• Recht auf Berichtigung</li>
                    <li>• Recht auf Löschung</li>
                    <li>• Recht auf Einschränkung</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Recht auf Datenübertragbarkeit</li>
                    <li>• Widerspruchsrecht</li>
                    <li>• Widerruf der Einwilligung</li>
                    <li>• Beschwerderecht</li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-4">
                  Kontaktieren Sie uns unter <strong>privacy@codewerkstatt.ch</strong> zur Ausübung Ihrer Rechte.
                </p>
              </div>
            </div>

            {/* Datensicherheit */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">7. Datensicherheit</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Wir treffen angemessene technische und organisatorische Massnahmen zum Schutz Ihrer Daten:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• SSL-Verschlüsselung für alle Datenübertragungen</li>
                  <li>• Sichere Server in der Schweiz und EU</li>
                  <li>• Regelmässige Sicherheitsupdates</li>
                  <li>• Zugriffsbeschränkungen für Mitarbeitende</li>
                  <li>• Backup- und Wiederherstellungsverfahren</li>
                </ul>
              </div>
            </div>

            {/* Aufbewahrung */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">8. Speicherdauer</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Kundendaten</h3>
                    <p className="text-gray-700">
                      Werden 10 Jahre nach Vertragsende aufbewahrt (gesetzliche Aufbewahrungspflicht)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Kontaktanfragen</h3>
                    <p className="text-gray-700">
                      Werden 2 Jahre nach der letzten Kommunikation gelöscht
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Newsletter-Daten</h3>
                    <p className="text-gray-700">
                      Werden nach Abmeldung sofort gelöscht
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Änderungen */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">9. Änderungen der Datenschutzerklärung</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen
                  oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen. Dies gilt jedoch nur
                  im Hinblick auf Erklärungen zur Datenverarbeitung. Sofern Einwilligungen des Nutzers erforderlich
                  sind oder Bestandteile der Datenschutzerklärung Regelungen des Vertragsverhältnisses mit den
                  Nutzern enthalten, erfolgen die Änderungen nur mit Zustimmung der Nutzer.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            Diese Datenschutzerklärung wurde zuletzt am 15. Januar 2025 aktualisiert.
          </p>
        </div>
      </section>
    </div>
  )
}
