"use client"

import { Header } from "@/components/header"

const tracks = [
  {
    name: "Apricot Princess",
    url: "https://open.spotify.com/intl-es/track/6SK6sdcklU02bEuhjvs5bK?si=800ca941a0574e70",
  },
  {
    name: "Television / So Far So Good",
    url: "https://open.spotify.com/intl-es/track/27rZYxE4l21wTaovX4WTnI?si=65bbee76ed6f4d67",
  },
  {
    name: "Nothing (feat. Marco Mckinnis)",
    url: "https://open.spotify.com/intl-es/track/5J27KD5G7Ub3hubaRnGoVB?si=afb87571393442b7",
  },
  {
    name: "Sycamore Girl",
    url: "https://open.spotify.com/intl-es/track/7lUX7bNyCJZeSn0ZCvL0GW?si=65e79f6c21374449",
  },
  {
    name: "Untitled",
    url: "https://open.spotify.com/intl-es/track/40GRJBeHKroMtWwGX9EFyQ?si=db65bf6b981c474c",
  },
  {
    name: "4 Seasons",
    url: "https://open.spotify.com/intl-es/track/4fg2EzaeNhR2PWNGXbX18n?si=6b4569149a8b4c28",
  },
  {
    name: "Waiting Room",
    url: "https://open.spotify.com/intl-es/track/1B04mWViAk7jcLEifYbvdi?si=26e37e97fe844a76",
  },
  {
    name: "Rain Man",
    url: "https://open.spotify.com/intl-es/track/12dtBMOafWqGvjJhKxAJ7q?si=28025763bb0e4671",
  },
  {
    name: "Never Enough",
    url: "https://open.spotify.com/intl-es/track/2UO6VQNKdwygetKaVCe39h?si=97b08998cf134004",
  },
  {
    name: "Happiness",
    url: "https://open.spotify.com/intl-es/track/7aSyG7cskkG3zhfO2JLxq3?si=5cb2300060664b46",
  },
]

export default function Album2Page() {
  return (
    <main className="w-full bg-white">
      <Header />

      <section className="min-h-screen w-full pt-32 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">

          <div>
            <p className="text-sm text-gray-500 font-medium mb-2">Álbum • 2018</p>
            <h1 className="rex-heading-lg mb-6">Apricot Princess</h1>

            <p className="rex-text-base text-gray-700 leading-relaxed">
              Si <i>Bcos u will never b free</i> era el germen íntimo, <b>Apricot Princess</b> es el florecimiento súbito:
              el momento en que un artista todavía enamorado de la precariedad descubre que también puede componer con grandeza.
              El disco funciona como un coming-of-age emocional y musical, donde Rex deja de ser un chico talentoso con un teclado 
              y se convierte en un arquitecto de armonías modernas. Hay una ambición nueva, pero no arrogante; una sensibilidad 
              orquestal que convive con la frescura del bedroom pop, sin pedir permiso ni disculpas.
              <br /><br />
              <b>Producción: la intimidad elevada a épica miniatura</b><br />
              Combina el candor lo-fi con arreglos casi cinematográficos. Las cuerdas, siempre melancólicas, funcionan como pinceladas 
              que completan una paleta emocional más compleja que en su debut. Rex ya no está improvisando: está diseñando.
              <br /><br />
              <b>Armonía y teoría musical disfrazada de espontaneidad</b><br />
              Rex empieza a apoyarse en una armonía que dialoga con el soul contemporáneo, la escuela jazzera británica y un guiño tímido 
              al musical moderno. Hay modulaciones sutiles, acordes con novenas y oncenas, y cambios de groove que funcionan como giros 
              narrativos.
              <br /><br />
              <b>Temática: la ingenuidad hecha obra</b><br />
              Es un álbum que se siente como escribir un diario íntimo con tinta de orquesta. Habla del amor con euforia y fragilidad, 
              sin cinismo, entendiendo que la cursilería —cuando es honesta— es una forma sofisticada de valentía.
              <br /><br />
              <b>Culminación estética</b><br />
              Apricot Princess equilibra dos fuerzas opuestas: la intimidad juvenil del bedroom pop y la ambición sinfónica de un artista 
              que empieza a pensar en términos de proyecto y no solo de canción.
              <br /><br />
              <b>Conclusión</b><br />
              Captura la transición exacta entre la inocencia y la construcción consciente de una identidad sonora. Un universo donde 
              la vulnerabilidad tiene cuerdas, las dudas acordes extendidos, y el amor —por primera vez— forma de princesa damasco.
            </p>
          </div>

          <div>
            <h2 className="rex-heading-md mb-6">Lista de Canciones</h2>
            <ol className="space-y-4">
              {tracks.map((track, index) => (
                <li
                  key={track.name}
                  onClick={() => window.open(track.url, "_blank")}
                  className="flex items-center gap-4 pb-4 border-b border-gray-100 cursor-pointer transition-colors"
                  style={{ color: "black" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rex-blue)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                >
                  <span className="text-lg font-bold text-gray-300 w-8">{index + 1}</span>
                  <span className="text-lg">{track.name}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>
    </main>
  )
}
