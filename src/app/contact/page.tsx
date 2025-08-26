import Image from 'next/image'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6">
            <span className="text-brand-primary">Kontaktieren</span> Sie uns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Haben Sie Fragen zu unseren Kursen? Wir sind hier, um Ihnen zu helfen.
            Buchen Sie ein kostenloses Beratungsgespräch oder senden Sie uns eine Nachricht.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-white">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Nachricht senden</h2>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/contact-success"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field */}
                <p style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-colors shadow-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-colors shadow-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-colors shadow-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-colors shadow-none"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Interessierter Kurs
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-colors shadow-none"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science & KI</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="ux-ui-design">UX/UI Design</option>
                    <option value="python">Python Programmierung</option>
                    <option value="other">Andere / Allgemeine Anfrage</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-colors resize-y shadow-none"
                    placeholder="Erzählen Sie uns von Ihren Zielen und wie wir Ihnen helfen können..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors shadow-none"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Kontaktinformationen</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-blue mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Bahnhofstrasse 15<br />
                      8001 Zürich<br />
                      Schweiz
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-blue mb-1">Telefon</h3>
                    <p className="text-gray-600">+41 44 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-blue mb-1">E-Mail</h3>
                    <p className="text-gray-600">info@codewerkstatt.ch</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-blue mb-1">Öffnungszeiten</h3>
                    <p className="text-gray-600">
                      Montag - Freitag: 08:00 - 18:00<br />
                      Samstag: 09:00 - 14:00<br />
                      Sonntag: Geschlossen
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Code Werkstatt Büro in Zürich"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-gray-600">
              Die wichtigsten Antworten auf Ihre Fragen zu unseren Kursen
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-none border border-gray-200">
              <h3 className="text-lg font-semibold text-dark-blue mb-3">
                Welche Vorkenntnisse benötige ich für die Kurse?
              </h3>
              <p className="text-gray-600">
                Unsere Kurse sind anfängerfreundlich gestaltet. Grundkenntnisse im Umgang mit Computern sind ausreichend.
                Für spezielle Kurse geben wir individuelle Empfehlungen.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-none border border-gray-200">
              <h3 className="text-lg font-semibold text-dark-blue mb-3">
                Kann ich den Kurs auch berufsbegleitend absolvieren?
              </h3>
              <p className="text-gray-600">
                Ja, wir bieten sowohl Vollzeit- als auch Teilzeitoptionen an. Die Teilzeitkurse finden abends und am Wochenende statt,
                ideal für Berufstätige.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-none border border-gray-200">
              <h3 className="text-lg font-semibold text-dark-blue mb-3">
                Gibt es Finanzierungsmöglichkeiten?
              </h3>
              <p className="text-gray-600">
                Wir bieten verschiedene Finanzierungsoptionen an, einschließlich Ratenzahlung und Kooperationen mit
                Bildungsfinanzierern. Sprechen Sie uns gerne darauf an.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-none border border-gray-200">
              <h3 className="text-lg font-semibold text-dark-blue mb-3">
                Welche Zertifikate erhalte ich nach Abschluss?
              </h3>
              <p className="text-gray-600">
                Sie erhalten ein anerkanntes Code Werkstatt-Zertifikat sowie branchenspezifische Zertifizierungen,
                je nach gewähltem Kurs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
