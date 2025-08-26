import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6">
            Unsere <span className="text-brand-primary">Programmierkurse</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Ausbildung in den gefragtesten Tech-Bereichen. Von Web Development bis Cybersecurity -
            starten Sie Ihre Karriere mit praxisnahen Bootcamps.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

            {/* Web Development */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-none">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Web Development Kurs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">Web Development</h3>
                  <p className="text-white/90">Frontend & Backend Entwicklung</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                    12-24 Wochen
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Lernen Sie moderne Web-Technologien wie React, Node.js, JavaScript, HTML5, CSS3 und Datenbanken.
                  Erstellen Sie vollständige Web-Anwendungen von der Konzeption bis zur Bereitstellung.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    React, Vue.js, Angular
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Node.js, Express.js, MongoDB
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Git, Docker, AWS Deployment
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-dark-blue">CHF 8.500</span>
                  <Link
                    href="/contact"
                    className="bg-brand-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors shadow-none"
                  >
                    Jetzt anmelden
                  </Link>
                </div>
              </div>
            </div>

            {/* Data Science & AI */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-none">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Data Science Kurs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">Data Science & KI</h3>
                  <p className="text-white/90">Machine Learning & Analytics</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                    12-24 Wochen
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Tauchen Sie ein in die Welt der Datenanalyse, Machine Learning und Künstlichen Intelligenz.
                  Lernen Sie Python, R, SQL und moderne ML-Frameworks.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Python, R, SQL, Pandas
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    TensorFlow, PyTorch, Scikit-learn
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Big Data, Cloud Computing
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-dark-blue">CHF 9.200</span>
                  <Link
                    href="/contact"
                    className="bg-brand-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors shadow-none"
                  >
                    Jetzt anmelden
                  </Link>
                </div>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-none">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Cybersecurity Kurs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">Cybersecurity</h3>
                  <p className="text-white/90">Ethical Hacking & Security</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                    12-24 Wochen
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Werden Sie zum Cybersecurity-Experten. Lernen Sie Penetration Testing, Incident Response,
                  Netzwerksicherheit und moderne Sicherheitstools.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Ethical Hacking, Penetration Testing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Netzwerksicherheit, Firewalls
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    CISSP, CEH Zertifizierungen
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-dark-blue">CHF 8.800</span>
                  <Link
                    href="/contact"
                    className="bg-brand-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors shadow-none"
                  >
                    Jetzt anmelden
                  </Link>
                </div>
              </div>
            </div>

            {/* UX/UI Design */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-none">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="UX/UI Design Kurs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">UX/UI Design</h3>
                  <p className="text-white/90">User Experience & Interface Design</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                    12-24 Wochen
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Gestalten Sie benutzerfreundliche und ansprechende digitale Erlebnisse.
                  Lernen Sie Design Thinking, Prototyping und moderne Design-Tools.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Figma, Adobe XD, Sketch
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    User Research, Prototyping
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Design Systems, Usability Testing
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-dark-blue">CHF 7.900</span>
                  <Link
                    href="/contact"
                    className="bg-brand-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors shadow-none"
                  >
                    Jetzt anmelden
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">
              Was Sie bei uns erwartet
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professionelle Ausbildung mit praxisnahen Projekten und individueller Betreuung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Expertinstruktoren</h3>
              <p className="text-gray-600">Lernen Sie von erfahrenen Entwicklern und Branchenexperten</p>
            </div>

            <div className="text-center">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Flexible Zeiten</h3>
              <p className="text-gray-600">Vollzeit oder Teilzeit - wählen Sie das passende Format</p>
            </div>

            <div className="text-center">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Zertifizierung</h3>
              <p className="text-gray-600">Erhalten Sie anerkannte Zertifikate für Ihren Karriereschub</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Starten Sie Ihre Tech-Karriere heute
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Buchen Sie ein kostenloses Beratungsgespräch und erfahren Sie, welcher Kurs am besten zu Ihnen passt.
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
