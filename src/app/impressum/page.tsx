export default function Impressum() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6">
            <span className="text-brand-primary">Impressum</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rechtliche Angaben und Kontaktdaten gemäss Schweizer Recht
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-12">

            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Unternehmensangaben</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Firmenname</h3>
                    <p className="text-gray-700">Code Werkstatt AG</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Rechtsform</h3>
                    <p className="text-gray-700">Aktiengesellschaft (AG)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Handelsregister-Nummer</h3>
                    <p className="text-gray-700">CHE-123.456.789</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">UID-Nummer</h3>
                    <p className="text-gray-700">CHE-123.456.789 MWST</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">MWST-Nummer</h3>
                    <p className="text-gray-700">CHE-123.456.789 MWST</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Gründungsjahr</h3>
                    <p className="text-gray-700">2020</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address and Contact */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Kontaktdaten</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-4">Geschäftsadresse</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Code Werkstatt AG</p>
                    <p>Bahnhofstrasse 15</p>
                    <p>8001 Zürich</p>
                    <p>Schweiz</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-4">Kontaktmöglichkeiten</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-dark-blue">Telefon:</span>
                      <p className="text-gray-700">+41 44 123 45 67</p>
                    </div>
                    <div>
                      <span className="font-medium text-dark-blue">E-Mail:</span>
                      <p className="text-gray-700">info@codewerkstatt.ch</p>
                    </div>
                    <div>
                      <span className="font-medium text-dark-blue">Website:</span>
                      <p className="text-gray-700">www.codewerkstatt.ch</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Management */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Geschäftsführung</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Geschäftsführer</h3>
                    <p className="text-gray-700">Thomas Müller</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Stellvertretung</h3>
                    <p className="text-gray-700">Sarah Weber</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Licenses */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Berufliche Zulassungen</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Bildungsanbieter-Lizenz</h3>
                    <p className="text-gray-700">
                      Lizenz-Nr.: EDU-CH-2020-089<br />
                      Ausgestellt vom Staatsekretariat für Bildung, Forschung und Innovation (SBFI)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Zertifizierungen</h3>
                    <p className="text-gray-700">
                      • ISO 29990:2010 (Lerndienstleistungen für die Aus- und Weiterbildung)<br />
                      • eduQua-Zertifikat (Schweizerisches Qualitätszertifikat für Weiterbildungsinstitutionen)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsible Authority */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Zuständige Aufsichtsbehörde</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Handelsregisteramt</h3>
                    <p className="text-gray-700">
                      Handelsregisteramt des Kantons Zürich<br />
                      Beethovenstrasse 15<br />
                      8002 Zürich
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Bildungsaufsicht</h3>
                    <p className="text-gray-700">
                      Staatsekretariat für Bildung, Forschung und Innovation (SBFI)<br />
                      Einsteinstrasse 2<br />
                      3003 Bern
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright and Liability */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Urheberrecht und Haftung</h2>
              <div className="space-y-6">

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Urheberrecht</h3>
                  <p className="text-gray-700 mb-4">
                    Alle Inhalte dieser Website (Texte, Bilder, Grafiken, Design, etc.) unterliegen dem Schweizer
                    Urheberrecht und sind Eigentum der Code Werkstatt AG oder deren Lizenzgeber.
                  </p>
                  <p className="text-gray-700">
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen der
                    schriftlichen Zustimmung der Code Werkstatt AG.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Haftungsausschluss</h3>
                  <p className="text-gray-700 mb-4">
                    Die Code Werkstatt AG übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit und
                    Aktualität der bereitgestellten Informationen.
                  </p>
                  <p className="text-gray-700">
                    Haftungsansprüche gegen die Code Werkstatt AG, welche sich auf Schäden materieller oder
                    ideeller Art beziehen, die durch die Nutzung der dargebotenen Informationen bzw. durch die
                    Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich
                    ausgeschlossen.
                  </p>
                </div>

              </div>
            </div>

            {/* Technical Implementation */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Technische Umsetzung</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Webdesign & Entwicklung</h3>
                    <p className="text-gray-700">Code Werkstatt AG</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Hosting</h3>
                    <p className="text-gray-700">Netlify, Inc. (USA)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">SSL-Zertifikat</h3>
                    <p className="text-gray-700">Let's Encrypt</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Analytics</h3>
                    <p className="text-gray-700">Datenschutzkonform implementiert</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Streitbeilegung</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Gerichtsstand</h3>
                    <p className="text-gray-700">
                      Für alle Streitigkeiten ist ausschliesslich das Gericht am Sitz der Code Werkstatt AG
                      (Zürich, Schweiz) zuständig.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Anwendbares Recht</h3>
                    <p className="text-gray-700">
                      Es gilt ausschliesslich Schweizer Recht unter Ausschluss des UN-Kaufrechts.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Alternative Streitbeilegung</h3>
                    <p className="text-gray-700">
                      Bei Verbraucherbeschwerden können Sie sich an die Schweizerische Schlichtungsstelle
                      für Konsumentenangelegenheiten wenden.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Legal Questions */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Rechtliche Anfragen</h2>
              <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Für rechtliche Anfragen, Beschwerden oder Anregungen wenden Sie sich bitte an:
                </p>
                <div className="space-y-2">
                  <p className="font-medium text-dark-blue">E-Mail: legal@codewerkstatt.ch</p>
                  <p className="font-medium text-dark-blue">Telefon: +41 44 123 45 67</p>
                  <p className="text-gray-700">Antwortzeit: Innerhalb von 5 Werktagen</p>
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
            Dieses Impressum wurde zuletzt am 15. Januar 2025 aktualisiert.
          </p>
        </div>
      </section>
    </div>
  )
}
