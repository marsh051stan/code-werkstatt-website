import Image from 'next/image'
import Link from 'next/link'

export default function Article() {
  return (
    <div className="min-h-screen bg-white shadow-none">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-brand-primary hover:text-brand-primary-dark mb-8 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
            </svg>
            Zurück zum Blog
          </Link>

          <h1 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-6 leading-tight">
            Entfaltung digitaler Talente: Programmierkurse in der Schweiz
          </h1>

          <div className="flex items-center mb-8">
            <div className="bg-brand-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <span className="text-brand-primary font-semibold">J</span>
            </div>
            <div>
              <p className="font-semibold text-dark-blue">Johannes Bauer</p>
              <p className="text-gray-600 text-sm">Digitalexperte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/blog/images/223-main.jpeg"
              alt="Entfaltung digitaler Talente"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Im Zentrum der diskursiven Landschaft der beruflichen Weiterbildung nimmt die Informationstechnologie eine bedeutende Rolle ein. Angesichts der stetig wachsenden Nachfrage nach qualifizierten Programmierern bieten wir, ein führendes Institut in der Schweiz für Programmierkurse, maßgeschneiderte Lehrangebote, die praxisnah und marktorientiert konzipiert sind.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Unsere Kurse richten sich sowohl an Anfänger als auch an fortgeschrittene Entwickler, die ihre Fähigkeiten vertiefen möchten.
            </p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">
              Eine neue Dimension des Lernens
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Indem Sie sich für unsere Kurse entscheiden, betreten Sie einen Lernraum, der nicht nur das technische Know-how vermittelt, sondern auch kritisches Denken und Problemlösungsfähigkeiten schärft. Unsere Curricula beinhalten eine tiefe Eintauchung in moderne Programmiersprachen wie Python, Java und C++, ergänzt durch Rahmenwerke und Bibliotheken, die in der Industrie aktuell sind und bleiben.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Wir legen großen Wert auf eine Lernumgebung, die interaktive und kollaborative Ansätze fördert, und bieten stets aktuelle Lehrinhalte, die von Experten aus der Praxis geleitet und regelmäßig aktualisiert werden.
            </p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">
              Praxiserfahrung und Industrieverbindungen
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Unsere Dozenten bringen eine reiche Palette an Erfahrungen aus der Industrie mit und sind leidenschaftlich daran interessiert, ihr Wissen zu teilen. Die praxisnahe Ausbildung beinhaltet Projekte und Aufgaben, die reale Arbeitsszenarien simulieren, wodurch Sie nicht nur lernen, sondern auch die Herausforderungen und Lösungen der realen Welt verstehen.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Durch diese immersive Erfahrung können Sie sich sicher sein, dass Ihre Investition in unsere Kurse zu echten und messbaren Karrierefortschritten führt.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Außerdem versichert unsere Nähe zu führenden Technologieunternehmen und unseren Alumni ein starkes Netzwerk, das Ihnen auch nach dem Kursende zur Verfügung steht. Mit regelmäßigen Networking-Events und Partnerschaften mit Unternehmen erleichtern wir den Übergang von der Ausbildung in die Berufswelt.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Unsere Absolventen sind daher bei Top-Unternehmen und Start-ups gefragt und tragen wesentlich zum technologischen Fortschritt in der Schweiz und weltweit bei.
            </p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">
              Kreativität und Innovation
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Der Weg zur digitalen Meisterschaft ist nicht nur eine Frage der Aneignung technischer Fähigkeiten. Es geht auch darum, das kreative Potenzial zu entfesseln und innovative Lösungen zu entwickeln, die die Grenzen des Möglichen erweitern.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Mit unseren individuell angepassten Programmen finden Sie genau den Weg, der zu Ihren beruflichen Zielen und persönlichen Ambitionen passt. Gleich, ob Sie sich mit dem Gedanken tragen, Ihre Karriere auf eine neue Ebene zu heben oder eine Vorliebe für komplexe Problemstellungen haben: Bei uns finden Sie die Ressourcen, Inspiration und das Netzwerk, um Ihre Ziele zu verwirklichen.
            </p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">
              Flexible Standorte und Zeitpläne
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Unsere Standorte in verschiedenen Schweizer Städten, darunter Zürich, Genf und Basel, erleichtern den Zugang zu unseren Kursen, und unsere flexiblen Zeitpläne passen sich Ihrem Leben an, nicht umgekehrt. Melden Sie sich heute noch an und beginnen Sie Ihre Reise zur digitalen Exzellenz!
            </p>

          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Entfalten Sie Ihr digitales Talent
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Werden Sie Teil einer dynamischen Gemeinschaft und starten Sie Ihre Reise zur digitalen Exzellenz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center shadow-none"
            >
              Kostenloses Beratungsgespräch
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
            <Link
              href="/blog"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors inline-flex items-center justify-center shadow-none"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
              </svg>
              Zurück zum Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
