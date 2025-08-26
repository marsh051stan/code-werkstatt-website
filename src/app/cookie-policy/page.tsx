export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6">
            <span className="text-brand-primary">Cookie</span>-Richtlinie
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informationen über die Verwendung von Cookies und anderen Tracking-Technologien auf unserer Website
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-12">

            {/* Was sind Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Was sind Cookies?</h2>
              <div className="bg-brand-primary/5 rounded-xl p-8 border border-brand-primary/20">
                <p className="text-gray-700 mb-4">
                  Cookies sind kleine Textdateien, die von Websites auf Ihrem Computer oder mobilen Gerät
                  gespeichert werden, wenn Sie eine Website besuchen. Sie ermöglichen es der Website,
                  Ihre Aktionen und Präferenzen über einen Zeitraum zu speichern.
                </p>
                <p className="text-gray-700">
                  Wir verwenden Cookies, um Ihre Benutzererfahrung zu verbessern, die Funktionalität
                  unserer Website zu gewährleisten und anonyme Statistiken über die Nutzung zu erstellen.
                </p>
              </div>
            </div>

            {/* Cookie-Kategorien */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Cookie-Kategorien</h2>
              <div className="space-y-6">

                {/* Notwendige Cookies */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-dark-blue mb-3">
                        Notwendige Cookies <span className="text-sm text-green-600 font-normal">(Immer aktiv)</span>
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Diese Cookies sind für die Grundfunktionen der Website unerlässlich und können nicht
                        deaktiviert werden. Sie speichern keine persönlich identifizierbaren Informationen.
                      </p>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-dark-blue mb-2">Zweck:</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Speicherung Ihrer Cookie-Präferenzen</li>
                          <li>• Sicherstellung der Website-Funktionalität</li>
                          <li>• Session-Management für Formulare</li>
                          <li>• Schutz vor Spam und Missbrauch</li>
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-medium text-dark-blue mb-2">Beispiele:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-white border rounded p-3">
                            <strong className="text-dark-blue">cookieConsent</strong>
                            <div className="text-gray-600">Speichert Ihre Cookie-Einstellungen</div>
                            <div className="text-gray-500">Laufzeit: 1 Jahr</div>
                          </div>
                          <div className="bg-white border rounded p-3">
                            <strong className="text-dark-blue">sessionToken</strong>
                            <div className="text-gray-600">Sicherheitstoken für Formulare</div>
                            <div className="text-gray-500">Laufzeit: Session</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analyse-Cookies */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-dark-blue mb-3">
                        Analyse-Cookies <span className="text-sm text-blue-600 font-normal">(Optional)</span>
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Diese Cookies helfen uns zu verstehen, wie Sie unsere Website nutzen, damit wir
                        sie verbessern können. Alle Daten werden anonymisiert gesammelt.
                      </p>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-dark-blue mb-2">Zweck:</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Anonyme Besuchsstatistiken</li>
                          <li>• Verbesserung der Website-Performance</li>
                          <li>• Identifikation technischer Probleme</li>
                          <li>• Optimierung des Nutzererlebnisses</li>
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-medium text-dark-blue mb-2">Verwendete Services:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="bg-white border rounded p-3">
                            <strong className="text-dark-blue">Plausible Analytics</strong>
                            <div className="text-gray-600">Datenschutzfreundliche Website-Analyse</div>
                            <div className="text-gray-500">Keine persönlichen Daten | DSGVO-konform</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marketing-Cookies */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-dark-blue mb-3">
                        Marketing-Cookies <span className="text-sm text-purple-600 font-normal">(Optional)</span>
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Derzeit verwenden wir keine Marketing- oder Werbe-Cookies. Sollte sich dies ändern,
                        werden Sie entsprechend informiert und um Ihre Einwilligung gebeten.
                      </p>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-600 text-sm">
                          🚫 Aktuell nicht verwendet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Cookie-Verwaltung */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Cookie-Einstellungen verwalten</h2>
              <div className="space-y-6">

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Ihre Wahlmöglichkeiten</h3>
                  <p className="text-gray-700 mb-4">
                    Sie haben jederzeit die Kontrolle über die verwendeten Cookies:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-brand-primary/20 rounded-full p-2 mr-3 mt-1 flex-shrink-0">
                        <span className="text-brand-primary font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-blue mb-1">Cookie-Banner</h4>
                        <p className="text-gray-600 text-sm">
                          Beim ersten Besuch können Sie Ihre Präferenzen direkt im Cookie-Banner festlegen.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-brand-primary/20 rounded-full p-2 mr-3 mt-1 flex-shrink-0">
                        <span className="text-brand-primary font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-blue mb-1">Browser-Einstellungen</h4>
                        <p className="text-gray-600 text-sm">
                          Ändern Sie die Cookie-Einstellungen direkt in Ihrem Browser.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-brand-primary/20 rounded-full p-2 mr-3 mt-1 flex-shrink-0">
                        <span className="text-brand-primary font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-blue mb-1">Kontakt</h4>
                        <p className="text-gray-600 text-sm">
                          Kontaktieren Sie uns unter privacy@codewerkstatt.ch für individuelle Anfragen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Browser-spezifische Anleitungen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-dark-blue mb-2">Chrome</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Einstellungen → Datenschutz und Sicherheit → Cookies
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-dark-blue mb-2">Firefox</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Einstellungen → Datenschutz & Sicherheit → Cookies
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-dark-blue mb-2">Safari</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Einstellungen → Datenschutz → Cookies verwalten
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-dark-blue mb-2">Edge</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Einstellungen → Cookies und Websiteberechtigungen
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Auswirkungen bei Deaktivierung */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Auswirkungen bei Cookie-Deaktivierung</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Wichtiger Hinweis</h3>
                    <p className="text-gray-700 mb-3">
                      Die Deaktivierung bestimmter Cookies kann die Funktionalität unserer Website beeinträchtigen:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Ihre Präferenzen gehen beim nächsten Besuch verloren</li>
                      <li>• Formulare funktionieren möglicherweise nicht korrekt</li>
                      <li>• Einige Sicherheitsfeatures sind eingeschränkt</li>
                      <li>• Die Website-Performance kann beeinträchtigt sein</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Drittanbieter */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Drittanbieter-Services</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Wir verwenden sorgfältig ausgewählte, datenschutzfreundliche Drittanbieter-Services:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-brand-primary pl-4">
                    <h4 className="font-medium text-dark-blue mb-1">Netlify (Hosting)</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Hosting unserer Website mit SSL-Verschlüsselung und DDoS-Schutz.
                    </p>
                    <p className="text-gray-500 text-xs">
                      Datenschutzerklärung: netlify.com/privacy
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-dark-blue mb-1">Plausible Analytics (Optional)</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      DSGVO-konforme, cookielose Website-Analyse ohne persönliche Daten.
                    </p>
                    <p className="text-gray-500 text-xs">
                      Datenschutzerklärung: plausible.io/privacy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Fragen zu Cookies?</h2>
              <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Wenn Sie Fragen zu unserer Cookie-Verwendung haben, kontaktieren Sie uns gerne:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>E-Mail:</strong> privacy@codewerkstatt.ch</p>
                  <p><strong>Telefon:</strong> +41 44 123 45 67</p>
                  <p><strong>Post:</strong> Code Werkstatt AG, Bahnhofstrasse 15, 8001 Zürich</p>
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
            Diese Cookie-Richtlinie wurde zuletzt am 15. Januar 2025 aktualisiert.
          </p>
        </div>
      </section>
    </div>
  )
}
