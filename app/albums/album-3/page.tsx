"use client"

import { Header } from "@/components/header"

const tracks = [
  { title: "10/10", url: "https://open.spotify.com/intl-es/track/4tVphly4D1PB8tJC9gHMcJ?si=426899c843ff4a2d" },
  { title: "Always", url: "https://open.spotify.com/intl-es/track/3SxSrUogj4LpAkLKXeTtTQ?si=b6e14d952d7c4317" },
  { title: "Laser Lights", url: "https://open.spotify.com/intl-es/track/1pi6ZMcC30dpQSOQHfc4QE?si=3d3bfd2768f34884" },
  { title: "Face To Face", url: "https://open.spotify.com/intl-es/track/0YdIIMb2MHuxoUudkAY9gS?si=58dbe3a09e854eac" },
  { title: "Stressed Out", url: "https://open.spotify.com/intl-es/track/7uNUSxzFjPj9JQaZidFreW?si=217ed080a62143d4" },
  { title: "Never Had The Balls", url: "https://open.spotify.com/intl-es/track/5h68UTytwmTJDwoGbqLwzV?si=02b60a4c57ea44b3" },
  { title: "Pluto Projector", url: "https://open.spotify.com/intl-es/track/4EWBhKf1fOFnyMtUzACXEc?si=82fff518e8664a7d" },
  { title: "Every Way", url: "https://open.spotify.com/intl-es/track/7HOsPWfUoMjc2tcC4hVyQV?si=b2d28ee2dc2c48e6" },
  { title: "It Gets Better", url: "https://open.spotify.com/intl-es/track/6lxJDscGCALBzA0BdhGCiL?si=8c374e86a8a94549" },
  { title: "It's Not The Same Anymore", url: "https://open.spotify.com/intl-es/track/7vRia9rlEuTDQxkfXIKySi?si=643e38b2b08a4fab" },
]

export default function Album3Page() {
  return (
    <main className="w-full bg-white">
      <Header />

      <section className="min-h-screen w-full pt-32 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">

          <div>
            <p className="text-sm text-gray-500 font-medium mb-2">Álbum • 2019</p>
            <h1 className="rex-heading-lg mb-6">Pony</h1>

            <p className="rex-text-base text-gray-600 mb-6">
              Con <strong>Pony</strong>, Rex Orange County deja de ser el chico prodigio del bedroom pop para
              convertirse en un narrador emocional que abraza la producción limpia, los arreglos luminosos y un pop
              sofisticado que —sin perder vulnerabilidad— empieza a mirar de frente al mainstream. Es su álbum más
              accesible, sí, pero también el más consciente y mi favorito: una obra que transforma la crisis emocional en melodrama
              íntimo, envuelto en armonías tan pulidas que casi disimulan las grietas personales.
            </p>

            <p className="rex-text-base text-gray-600 mb-6">
              <strong>Producción: el brillo como recurso narrativo.</strong> En Pony, todo suena deliberadamente
              limpio. La producción abraza sintetizadores suaves, guitarras pristinas y baterías moderadas, como si la
              claridad sonora fuese una extensión de su necesidad de orden emocional.
            </p>

            <p className="rex-text-base text-gray-600 mb-6">
              <strong>Armonía: sofisticación disfrazada de sencillez.</strong> Aunque se percibe como su disco más
              simple, está lleno de elecciones armónicas inteligentes: modulaciones suaves, voces apiladas en terceras
              y sextas, y melodías con saltos amplios que revelan a un compositor más que a un simple cantante.
            </p>

            <p className="rex-text-base text-gray-600 mb-6">
              <strong>Narrativa emocional.</strong> Este es el álbum del desencanto contado desde la serenidad. Habla
              de ansiedad, melancolía y adultez joven sin dramatismo exagerado. La metáfora del “pony” funciona como
              símbolo de sensibilidad y extrañeza en un mundo que exige dureza.
            </p>

            <p className="rex-text-base text-gray-600 mb-6">
              Pony es el momento en que Rex deja de esconderse detrás de lo lo-fi y se anima a mirar de frente a su
              propio brillo. Pop elegante, sensible y profundamente humano, construido con una delicadeza que convierte
              cada canción en un refugio emocional.
            </p>
          </div>

          <div>
            <h2 className="rex-heading-md mb-6">Lista de Canciones</h2>
            <ol className="space-y-4">
              {tracks.map((track, index) => (
                <li
                  key={track.title}
                  onClick={() => window.open(track.url, "_blank")}
                  className="flex items-center gap-4 pb-4 border-b border-gray-100 transition-colors cursor-pointer"
                  style={{ color: "black" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rex-blue)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                >
                  <span className="text-lg font-bold text-gray-300 w-8">{index + 1}</span>
                  <span className="text-lg">{track.title}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>
    </main>
  )
}
