import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6">
            Über <span className="text-brand-primary">Code Werkstatt</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir sind Ihr vertrauensvoller Partner für professionelle Tech-Ausbildung in der Schweiz.
            Seit 2020 helfen wir Menschen dabei, ihre Träume in der Technologiebranche zu verwirklichen.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Unsere Geschichte</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Code Werkstatt wurde 2020 in Zürich mit einer klaren Vision gegründet:
                  Hochwertige Tech-Ausbildung für alle zugänglich zu machen. Was als kleines
                  Team von erfahrenen Entwicklern begann, ist heute eine der führenden
                  Coding-Akademien der Schweiz.
                </p>
                <p>
                  Unsere Gründer erkannten früh, dass der Schweizer Arbeitsmarkt einen
                  enormen Bedarf an qualifizierten Tech-Fachkräften hat. Gleichzeitig
                  fehlten praxisnahe Ausbildungsprogramme, die Menschen ohne Vorkenntnisse
                  den Einstieg in die Tech-Branche ermöglichen.
                </p>
                <p>
                  Heute haben über 500 Absolventen unsere Programme erfolgreich durchlaufen
                  und arbeiten in führenden Schweizer und internationalen Unternehmen.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Code Werkstatt Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-none border border-gray-200">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Unsere Mission</h3>
              <p className="text-gray-600">
                Wir befähigen Menschen, ihre Karriere in der Tech-Branche zu starten und
                erfolgreich zu gestalten. Durch praxisnahe Ausbildung, individuelle Betreuung
                und starke Industriepartnerschaften schaffen wir den direkten Weg in
                zukunftssichere Jobs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-none border border-gray-200">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Unsere Vision</h3>
              <p className="text-gray-600">
                Wir sehen eine Zukunft, in der jeder Mensch unabhängig von seinem Hintergrund
                Zugang zu hochwertiger Tech-Ausbildung hat. Code Werkstatt soll das Sprungbrett
                für tausende erfolgreiche Tech-Karrieren in der Schweiz und darüber hinaus werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">Unsere Werte</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Exzellenz</h3>
              <p className="text-gray-600">
                Wir streben nach höchster Qualität in unserer Ausbildung und halten unsere
                Kurse stets auf dem neuesten Stand der Technik.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Gemeinschaft</h3>
              <p className="text-gray-600">
                Wir schaffen eine unterstützende Lernumgebung, in der sich alle Teilnehmer
                wohlfühlen und voneinander lernen können.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Innovation</h3>
              <p className="text-gray-600">
                Wir nutzen modernste Lehrmethoden und Technologien, um unseren Teilnehmern
                das bestmögliche Lernerlebnis zu bieten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">Unser Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lernen Sie von erfahrenen Branchenexperten und leidenschaftlichen Pädagogen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-none border border-gray-200 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Thomas Mueller"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-1">Thomas Müller</h3>
              <p className="text-brand-primary text-sm mb-3">Gründer & CEO</p>
              <p className="text-gray-600 text-sm">
                15 Jahre Erfahrung in der Software-Entwicklung bei Google und Facebook.
                Spezialist für Web Development und DevOps.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-none border border-gray-200 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b0bd9090?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Sarah Weber"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-1">Sarah Weber</h3>
              <p className="text-brand-primary text-sm mb-3">Lead Data Science Instructor</p>
              <p className="text-gray-600 text-sm">
                PhD in Computer Science, ehemalige IBM Data Scientist.
                Expertin für Machine Learning und AI.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-none border border-gray-200 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Michael Fischer"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-1">Michael Fischer</h3>
              <p className="text-brand-primary text-sm mb-3">Cybersecurity Expert</p>
              <p className="text-gray-600 text-sm">
                Certified Ethical Hacker mit 12 Jahren Erfahrung in der Informationssicherheit.
                Ehemaliger Security Consultant bei Deloitte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">Code Werkstatt in Zahlen</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">500+</div>
              <p className="text-gray-600">Erfolgreiche Absolventen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">85%</div>
              <p className="text-gray-600">Job-Vermittlungsrate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">4.9/5</div>
              <p className="text-gray-600">Durchschnittliche Bewertung</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">50+</div>
              <p className="text-gray-600">Partnerunternehmen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Werden Sie Teil unserer Erfolgsgeschichte
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Starten Sie Ihre Tech-Karriere mit Code Werkstatt und profitieren Sie von
            unserer Erfahrung und unserem Netzwerk.
          </p>
          <Link
            href="/contact"
            className="bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center shadow-none"
          >
            Jetzt Beratungsgespräch buchen
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
