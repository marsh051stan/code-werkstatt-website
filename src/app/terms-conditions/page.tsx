export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6">
            <span className="text-brand-primary">Allgemeine Geschäfts</span>bedingungen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rechtliche Rahmenbedingungen für die Nutzung unserer Dienstleistungen und Website
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-12">

            {/* Geltungsbereich */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">§ 1 Geltungsbereich</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der
                  Code Werkstatt AG (nachfolgend "Anbieter") und dem Kunden über die Erbringung
                  von Bildungsdienstleistungen.
                </p>
                <p className="text-gray-700 mb-4">
                  Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nicht Vertragsbestandteil,
                  es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
                </p>
                <p className="text-gray-700">
                  Diese AGB gelten auch für alle künftigen Geschäftsbeziehungen, auch wenn sie nicht
                  nochmals ausdrücklich vereinbart werden.
                </p>
              </div>
            </div>

            {/* Vertragsschluss */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">§ 2 Vertragsschluss</h2>
              <div className="space-y-6">

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Anmeldung</h3>
                  <p className="text-gray-700 mb-3">
                    Die Anmeldung zu einem Kurs erfolgt über das Online-Formular, per E-Mail oder telefonisch.
                    Mit der Anmeldung gibt der Kunde ein verbindliches Angebot zum Abschluss eines
                    Bildungsvertrags ab.
                  </p>
                  <p className="text-gray-700">
                    Der Vertrag kommt mit der schriftlichen Bestätigung durch den Anbieter zustande.
                    Die Bestätigung erfolgt per E-Mail.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Mindestteilnehmerzahl</h3>
                  <p className="text-gray-700">
                    Kurse finden nur bei Erreichen der Mindestteilnehmerzahl statt. Der Anbieter behält sich vor,
                    Kurse bei Nichterreichen der Mindestteilnehmerzahl bis zu 14 Tage vor Kursbeginn abzusagen.
                  </p>
                </div>

              </div>
            </div>

            {/* Leistungen */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">§ 3 Leistungen des Anbieters</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Der Anbieter verpflichtet sich zur Erbringung folgender Leistungen:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Durchführung des gebuchten Kurses gemäss Kursbeschreibung</li>
                  <li>• Bereitstellung qualifizierter Instruktoren</li>
                  <li>• Zugang zur Lernplattform während der Kursdauer</li>
                  <li>• Bereitstellung der Kursmaterialien</li>
                  <li>• Ausstellung eines Zertifikats bei erfolgreichem Abschluss</li>
                  <li>• Career Services und Job-Placement-Unterstützung</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Geringfügige Änderungen des Kursinhalts oder -ablaufs, die dem aktuellen Stand der Technik
                  oder pädagogischen Erkenntnissen entsprechen, bleiben vorbehalten.
                </p>
              </div>
            </div>

            {/* Pflichten des Kunden */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">§ 4 Pflichten des Kunden</h2>
              <div className="space-y-6">

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Teilnahmepflichten</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Regelmässige und pünktliche Teilnahme (mindestens 80% Anwesenheit)</li>
                    <li>• Aktive Mitarbeit im Unterricht</li>
                    <li>• Fristgerechte Bearbeitung von Aufgaben und Projekten</li>
                    <li>• Respektvolles Verhalten gegenüber anderen Teilnehmern und Instruktoren</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Technische Voraussetzungen</h3>
                  <p className="text-gray-700 mb-3">
                    Der Kunde ist verpflichtet, die notwendigen technischen Voraussetzungen zu schaffen:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stabile Internetverbindung (min. 10 Mbit/s)</li>
                    <li>• Computer mit aktueller Software</li>
                    <li>• Webcam und Mikrofon für Online-Sessions</li>
                    <li>• Ruhige Lernumgebung</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Preise und Zahlungsbedingungen */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">§ 5 Preise und Zahlungsbedingungen</h2>
              <div className="space-y-6">

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Preise</h3>
                  <p className="text-gray-700 mb-3">
                    Es gelten die zum Zeitpunkt der Anmeldung ausgewiesenen Preise. Alle Preise verstehen sich
                    inklusive der gesetzlichen Mehrwertsteuer.
                  </p>
                  <p className="text-gray-700">
                    Im Kurspreis enthalten sind alle Unterrichtsmaterialien, Zugang zur Lernplattform,
                    Zertifikat und Career Services.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Zahlungsmodalitäten</h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <strong>Einmalzahlung:</strong> Vollständige Zahlung 14 Tage vor Kursbeginn
                    </div>
                    <div>
                      <strong>Ratenzahlung:</strong> 30% Anzahlung bei Anmeldung, Rest in monatlichen Raten
                    </div>
                    <div>
                      <strong>Zahlungsarten:</strong> Banküberweisung, Kreditkarte, TWINT
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Kündigung und Stornierung */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">§ 6 Kündigung und Stornierung</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>Ordentliche Kündigung:</strong> Der Kunde kann den Vertrag mit einer Frist von
                  30 Tagen zum Monatsende kündigen, frühestens jedoch nach Ablauf von 50% der Kursdauer.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Ausserordentliche Kündigung:</strong> Bei wichtigem Grund können beide Parteien
                  den Vertrag fristlos kündigen.
                </p>
                <p className="text-gray-700">
                  Details zu Stornierungsbedingungen und Erstattungen finden Sie in unserer Rückgaberichtlinie.
                </p>
              </div>
            </div>

            {/* Geistiges Eigentum */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">§ 7 Geistiges Eigentum</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Alle Kursmaterialien, Inhalte der Lernplattform und sonstigen Unterlagen sind urheberrechtlich
                  geschützt und Eigentum des Anbieters oder dessen Lizenzgeber.
                </p>
                <p className="text-gray-700 mb-4">
                  Der Kunde erhält ein nicht-übertragbares, zeitlich begrenztes Nutzungsrecht für die Dauer
                  des Kurses. Eine Weitergabe an Dritte ist untersagt.
                </p>
                <p className="text-gray-700">
                  Die Projekte und Arbeiten, die der Kunde während des Kurses erstellt, bleiben sein Eigentum
                  und können für Portfolio-Zwecke verwendet werden.
                </p>
              </div>
            </div>

            {/* Haftung */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">§ 8 Haftung</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers
                  oder der Gesundheit sowie für Schäden aus vorsätzlichen oder grob fahrlässigen
                  Pflichtverletzungen.
                </p>
                <p className="text-gray-700 mb-4">
                  Für sonstige Schäden haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten,
                  jedoch der Höhe nach begrenzt auf den typischen, vorhersehbaren Schaden.
                </p>
                <p className="text-gray-700">
                  Die Haftung für mittelbare Schäden, Folgeschäden und entgangenen Gewinn ist ausgeschlossen,
                  sofern nicht vorsätzlich oder grob fahrlässig gehandelt wurde.
                </p>
              </div>
            </div>

            {/* Datenschutz */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">§ 9 Datenschutz</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Der Anbieter erhebt, verarbeitet und nutzt personenbezogene Daten des Kunden nur
                  im Rahmen der geltenden Datenschutzbestimmungen.
                </p>
                <p className="text-gray-700">
                  Nähere Informationen finden Sie in unserer Datenschutzerklärung, die integraler
                  Bestandteil dieser AGB ist.
                </p>
              </div>
            </div>

            {/* Schlussbestimmungen */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">§ 10 Schlussbestimmungen</h2>
              <div className="space-y-6">

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Anwendbares Recht</h3>
                  <p className="text-gray-700">
                    Auf diese AGB und alle Rechtsbeziehungen zwischen dem Anbieter und dem Kunden
                    findet ausschliesslich Schweizer Recht Anwendung unter Ausschluss des UN-Kaufrechts.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Gerichtsstand</h3>
                  <p className="text-gray-700">
                    Ausschliesslicher Gerichtsstand für alle Streitigkeiten ist Zürich, Schweiz.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Salvatorische Klausel</h3>
                  <p className="text-gray-700">
                    Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein,
                    berührt dies nicht die Wirksamkeit der übrigen Bestimmungen. Die unwirksame
                    Bestimmung ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen
                    Zweck der unwirksamen Bestimmung am nächsten kommt.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-3">Änderungen der AGB</h3>
                  <p className="text-gray-700">
                    Der Anbieter behält sich vor, diese AGB zu ändern. Änderungen werden dem Kunden
                    mindestens 30 Tage vor Inkrafttreten schriftlich mitgeteilt. Widerspricht der
                    Kunde nicht innerhalb von 14 Tagen, gelten die Änderungen als genehmigt.
                  </p>
                </div>

              </div>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">§ 11 Kontakt</h2>
              <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Bei Fragen zu diesen AGB wenden Sie sich bitte an:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Code Werkstatt AG</strong></p>
                  <p>E-Mail: legal@codewerkstatt.ch</p>
                  <p>Telefon: +41 44 123 45 67</p>
                  <p>Adresse: Bahnhofstrasse 15, 8001 Zürich</p>
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
            Diese AGB wurden zuletzt am 15. Januar 2025 aktualisiert und treten mit sofortiger Wirkung in Kraft.
          </p>
        </div>
      </section>
    </div>
  )
}
