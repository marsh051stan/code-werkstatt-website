import Image from 'next/image'
import Link from 'next/link'

const blogArticles = [
  {
    id: 'typische-fehler-im-it-vorstellungsgespraech',
    title: 'Typische Fehler im IT-Vorstellungsgespräch – Einblicke einer Senior-Recruiterin',
    excerpt: 'Was Bewerber im Gespräch sagen – und was Personaler wirklich hören. Echte Geschichten aus dem Recruiting-Alltag.',
    author: 'Sandra T',
    authorTitle: 'Senior IT-Recruiterin',
    image: '/blog/images/228-main.png',
    slug: 'typische-fehler-im-it-vorstellungsgespraech'
  },
  {
    id: 'effiziente-programmierkurse-schweiz-ueberblick',
    title: 'Effiziente Programmierkurse in der Schweiz: Ein strategischer Überblick',
    excerpt: 'Die Schweiz entwickelt sich zu einem Zentrum für innovative Programmierkurse. Hier ist ein umfassender Leitfaden für erfolgreiches Lernen.',
    author: 'Stefan Müller',
    authorTitle: 'Bildungsexperte',
    image: '/blog/images/227-main.jpeg',
    slug: 'effiziente-programmierkurse-schweiz-ueberblick'
  },
  {
    id: 'effiziente-wege-programmierungserziehung-schweiz',
    title: 'Effiziente Wege zur Programmierungserziehung: Ein Leitfaden für die Schweiz',
    excerpt: 'Innovative Ansätze zur Programmierausbildung in der Schweiz mit praktischen Tipps für erfolgreiche Kurse.',
    author: 'Johann Schneider',
    authorTitle: 'Bildungsberater',
    image: '/blog/images/226-main.jpeg',
    slug: 'effiziente-wege-programmierungserziehung-schweiz'
  },
  {
    id: 'effektive-programmierkurse-schweiz-fortschritt',
    title: 'Effektive Programmierkurse in der Schweiz: Ein Schlüssel zum technologischen Fortschritt',
    excerpt: 'Wie Programmierkurse in der Schweiz den technologischen Fortschritt vorantreiben und Karrierechancen schaffen.',
    author: 'Klaus Vogel',
    authorTitle: 'Tech-Analyst',
    image: '/blog/images/224-main.jpeg',
    slug: 'effektive-programmierkurse-schweiz-fortschritt'
  },
  {
    id: 'entfaltung-digitaler-talente-schweiz',
    title: 'Entfaltung digitaler Talente: Programmierkurse in der Schweiz',
    excerpt: 'Wie Sie mit praxisnahen Programmierkursen in der Schweiz Ihre digitalen Talente entfalten und Karriere machen.',
    author: 'Johannes Bauer',
    authorTitle: 'Digitalexperte',
    image: '/blog/images/223-main.jpeg',
    slug: 'entfaltung-digitaler-talente-schweiz'
  },
  {
    id: 'schluesselstrategien-erfolg-programmierkursen',
    title: 'Schlüsselstrategien für Erfolg in Programmierkursen',
    excerpt: 'Entdecken Sie die effektivsten Strategien, um das Maximum aus Ihren Programmierkursen zu holen.',
    author: 'Max Müller',
    authorTitle: 'Lernstratege',
    image: '/blog/images/225-main.jpeg',
    slug: 'schluesselstrategien-erfolg-programmierkursen'
  }
]

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6">
            <span className="text-brand-primary">Code Werkstatt</span> Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertenwissen, Karrieretipps und Einblicke in die Welt der Programmierung.
            Erfahren Sie mehr über erfolgreiche Tech-Karrieren und moderne Lernmethoden.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dark-blue mb-8">Neueste Artikel</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src={blogArticles[0].image}
                  alt={blogArticles[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-brand-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-brand-primary font-semibold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-blue text-sm">{blogArticles[0].author}</p>
                    <p className="text-gray-600 text-xs">{blogArticles[0].authorTitle}</p>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-dark-blue mb-4 leading-tight">
                  {blogArticles[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogArticles[0].excerpt}
                </p>
                <Link
                  href={`/blog/${blogArticles[0].slug}`}
                  className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors inline-flex items-center shadow-none"
                >
                  Artikel lesen
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark-blue mb-8">Alle Artikel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-none border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-brand-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <span className="text-brand-primary font-semibold text-sm">
                        {article.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-blue text-sm">{article.author}</p>
                      <p className="text-gray-600 text-xs">{article.authorTitle}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-dark-blue mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-brand-primary font-semibold hover:text-brand-primary-dark transition-colors inline-flex items-center text-sm"
                  >
                    Weiterlesen
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Bleiben Sie auf dem Laufenden
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Erhalten Sie die neuesten Artikel und Karrieretipps direkt in Ihr Postfach.
            Keine Spam – nur wertvolle Inhalte für Ihre Tech-Karriere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4 w-full" data-netlify="true">
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                type="email"
                name="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-white focus:border-transparent outline-none shadow-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-none"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
