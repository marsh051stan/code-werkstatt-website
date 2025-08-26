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
            Typische Fehler im IT-Vorstellungsgespräch – Einblicke einer Senior-Recruiterin
          </h1>

          <div className="flex items-center mb-8">
            <div className="bg-brand-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <span className="text-brand-primary font-semibold">S</span>
            </div>
            <div>
              <p className="font-semibold text-dark-blue">Sandra T</p>
              <p className="text-gray-600 text-sm">Senior IT-Recruiterin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/blog/images/228-main.png"
              alt="IT-Vorstellungsgespräch"
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

            <blockquote className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 italic text-lg mb-0">
                Was Bewerber im Gespräch sagen – und was Personaler wirklich hören. Echte Geschichten aus dem Recruiting-Alltag.
              </p>
            </blockquote>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Sandra T. arbeitet seit über 12 Jahren im IT-Recruiting. In dieser Zeit hat sie mehr als 1.800 Interviews geführt – mit Berufseinsteigern, erfahrenen Senior Engineers, Architekten und Teamleads. Sie hat mit Unternehmen in der Schweiz, in Deutschland und Osteuropa zusammengearbeitet und Fachkräfte für Webprojekte, KI-Entwicklung und FinTech-Lösungen rekrutiert.
            </p>

            <blockquote className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 italic text-lg mb-0">
                „Ich lese nicht nur Lebensläufe – ich höre zu. Oft entscheidet nicht die Technologie, sondern das Denken", sagt sie.
              </p>
            </blockquote>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Heute berät Sandra junge Start-ups und hilft ihnen dabei, den Recruiting-Prozess so aufzubauen, dass nicht nur Stellen besetzt werden, sondern <strong>Teams entstehen, die gemeinsam denken und handeln.</strong>
            </p>

            <div className="my-8">
              <Image
                src="/blog/images/228-2.png"
                alt="Recruiting Prozess"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Dieser Artikel ist ihre persönliche Analyse der häufigsten Fehler, die Bewerber für technische Positionen machen – und wie ein einziger Satz selbst ein starkes Profil infrage stellen kann.
            </p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">
              Sandra brach das Interview in der Mitte ab. Das ist der Grund.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Das Gespräch begann vielversprechend: Junior Backend-Entwicklerin, solides Portfolio, gute technische Grundlagen. Alles lief ruhig – bis ich fragte:
            </p>

            <blockquote className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 mb-0">
                – Können Sie von einer Situation erzählen, in der Sie Eigeninitiative im Team gezeigt haben?
              </p>
            </blockquote>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">Die Antwort:</p>

            <blockquote className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 italic mb-0">
                „Ich versuche, mich aus Bereichen rauszuhalten, die nicht meine Zuständigkeit sind. Ich warte lieber auf meine Aufgaben."
              </p>
            </blockquote>

            <div className="my-8">
              <Image
                src="/blog/images/228-3.png"
                alt="Interview Situation"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              <strong>Ich beendete das Interview an dieser Stelle.</strong> Nicht aus Ärger, sondern weil klar war: Diese Person sucht klare Anweisungen – nicht Verantwortung. Doch gerade das wird in modernen IT-Teams erwartet, auch von Einsteigern.
            </p>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">
              So etwas sollte man im Interview nicht sagen.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Ein anderes Gespräch mit einer angehenden Frontend-Entwicklerin verlief zunächst gut. Sie hatte einen Online-Kurs abgeschlossen und war aufgeschlossen.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Doch auf die Frage nach ihrer letzten beruflichen Station sagte sie:
            </p>

            <blockquote className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 italic mb-0">
                „Ehrlich gesagt habe ich dort nicht viel gemacht. Die anderen haben sich um die wichtigen Sachen gekümmert."
              </p>
            </blockquote>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <strong>So etwas sollte man im Interview nicht sagen.</strong>
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Vielleicht wollte sie nur ehrlich sein. Aber beim Zuhörer kommt an:
            </p>

            <blockquote className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 mb-0">
                Ich war nicht wirklich beteiligt. Ich bin passiv.
              </p>
            </blockquote>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Und das ist kein gutes Signal – vor allem, wenn man eine aktive Rolle im Team anstrebt.
            </p>

            <div className="my-8">
              <Image
                src="/blog/images/228-4.png"
                alt="Team Diskussion"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">
              „Ich mag keine Diskussionen" – und das war das Warnsignal.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Ein Bewerber für eine Junior-Fullstack-Stelle machte zunächst einen soliden Eindruck. Fachlich fit, freundlich, kommunikativ.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Bis er auf diese Frage antwortete:
            </p>

            <blockquote className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 mb-0">
                – Wie bringen Sie sich in Teamdiskussionen ein?
              </p>
            </blockquote>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">Seine Antwort:</p>

            <blockquote className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 italic mb-0">
                „Ich mag Diskussionen eigentlich nicht. Ich arbeite lieber, wenn alles schon entschieden ist und die Aufgaben klar sind."
              </p>
            </blockquote>

            <div className="my-8">
              <Image
                src="/blog/images/228-5.png"
                alt="Agiles Team"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Das klingt nicht schlimm. Aber für ein agiles Produktteam ist das ein Alarmsignal.
            </p>

            <blockquote className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 italic mb-0">
                „Er signalisierte damit: Ich setze nur um – und will nicht mitdenken. Das ist in vielen Teams ein Problem, in denen auch Junioren aktiv mitgestalten sollen", erklärt Sandra.
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">
              „Ich will einfach Stabilität" – aber das passte nicht.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Ein anderer Kandidat war erfahrener Entwickler mit Start-up-Background. Sein Wechselwunsch? Absolut nachvollziehbar.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Doch so formulierte er es im Interview:
            </p>

            <blockquote className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 italic mb-0">
                „Ich suche jetzt etwas Stabiles. Mein letzter Job war ständiges Chaos – neue Deadlines, Richtungswechsel, Druck. Ich bin müde davon."
              </p>
            </blockquote>

            <div className="my-8">
              <Image
                src="/blog/images/228-6.png"
                alt="Stabilität vs Wachstum"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">
              Verständlich – aber heikel formuliert.
            </h2>

            <blockquote className="bg-gray-50 border-l-4 border-brand-primary p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 italic mb-0">
                „Wir bieten kein Chaos – aber wir sind ein wachsendes Tech-Produkt. Wer keinerlei Veränderung mehr will, wird sich schwer tun. Und genau das hörte man bei ihm deutlich raus", sagt Sandra.
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">
              Die häufigsten Fehler im Interview
            </h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-brand-primary mr-3 text-lg">•</span>
                <div>
                  <strong className="text-dark-blue">Passiv formulierter Werdegang</strong>
                  <p className="text-gray-700 italic">„Ich war dabei..." klingt schwach. Besser: „Ich habe umgesetzt..."</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-primary mr-3 text-lg">•</span>
                <div>
                  <strong className="text-dark-blue">Kritik an früheren Arbeitgebern</strong>
                  <p className="text-gray-700 italic">Auch bei schlechten Erfahrungen: Fokus auf das, was du gelernt hast</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-primary mr-3 text-lg">•</span>
                <div>
                  <strong className="text-dark-blue">Ungefilterte Ehrlichkeit</strong>
                  <p className="text-gray-700 italic">Offenheit ist gut – aber nicht auf Kosten der eigenen Positionierung</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-primary mr-3 text-lg">•</span>
                <div>
                  <strong className="text-dark-blue">Null Interesse am Produkt oder Team</strong>
                  <p className="text-gray-700 italic">Wer keine Rückfragen stellt, fällt sofort auf</p>
                </div>
              </li>
            </ul>

            <div className="my-8">
              <Image
                src="/blog/images/228-7.png"
                alt="Erfolgreiche Interview Tipps"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6 mt-12">
              Was funktioniert? Das hier:
            </h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-lg">✅</span>
                <strong className="text-dark-blue">Aktive Sprache – auch bei kleinen Erfolgen</strong>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-lg">✅</span>
                <strong className="text-dark-blue">Offenheit mit Lernwillen kombinieren</strong>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-lg">✅</span>
                <strong className="text-dark-blue">Beispiele statt Floskeln nennen</strong>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-lg">✅</span>
                <strong className="text-dark-blue">Echtes Interesse zeigen: „Warum genau dieses Team?"</strong>
              </li>
            </ul>

            <div className="my-8">
              <Image
                src="/blog/images/228-8.png"
                alt="Erfolgreiches IT Interview"
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>

            <blockquote className="bg-brand-primary/5 border-l-4 border-brand-primary p-6 rounded-r-lg mb-8 text-lg">
              <p className="text-gray-700 mb-0">
                „Ich erkenne sofort, wer einfach nur einen Kurs abgeschlossen hat – und wer wirklich verstanden hat, wie Dinge zusammenhängen. Selbst absolute Einsteiger lassen sich an ihrem Denken erkennen. Und das zählt oft mehr als Erfahrung", sagt Sandra.
              </p>
            </blockquote>

          </div>
        </div>
      </article>

      {/* Back to Blog */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-brand-primary hover:text-brand-primary-dark transition-colors font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
            </svg>
            Zurück zum Blog
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Bereiten Sie sich optimal vor
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Lernen Sie die gefragten Skills in unseren praxisorientierten Kursen und meistern Sie Ihr nächstes IT-Interview.
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
