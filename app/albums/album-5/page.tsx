"use client"

import { Header } from "@/components/header"
import Link from "next/link"

// Lista de canciones con links reales
const tracks = [
  { title: "Alexander", url: "https://open.spotify.com/intl-es/track/3zlt0KJ7XvbtiNuBbFCife?si=15d6854a52e84a51" },
  { title: "Guitar Song", url: "https://open.spotify.com/intl-es/track/7LacIDU4wp5RdBVO6DmwHT?si=e8c579d7fd044ac1" },
  { title: "2008", url: "https://open.spotify.com/intl-es/track/5S2fYAHI2zwSIc2RWcFL7V?si=817083858c814093" },
  { title: "Therapy", url: "https://open.spotify.com/intl-es/track/75FQnbNzIeX9QAl21BEnKI?si=58db851449294f8e" },
  { title: "4 In The Morning", url: "https://open.spotify.com/intl-es/track/4YSYzelIzckY5oTIXGU3lc?si=0c9abd0980f84340" },
  { title: "Jealousy", url: "https://open.spotify.com/intl-es/track/5JKnHK8cU8k4w7mB44DWL4?si=ec5a83cbbb954eaf" },
  { title: "The Table", url: "https://open.spotify.com/intl-es/track/5o3kn5HJIYAQ14GYmR6IAg?si=b686f367c2b94e33" },
  { title: "Pure", url: "https://open.spotify.com/intl-es/track/1vtFlSfBhHcrj3TSYjpK8J?si=772fa29d498443c4" },
  { title: "One Of These Days", url: "https://open.spotify.com/intl-es/track/7FL9hBxZMMjyMg7ezluCTB?si=b12f986b063b4b2c" },
  { title: "Carrera", url: "https://open.spotify.com/intl-es/track/6hejXDjMHr0dt1Y5Rj7p93?si=bdb8de29089c498c" },
  { title: "Much Too Much", url: "https://open.spotify.com/intl-es/track/7ItACWwnj2dfcI8JgzIlCC?si=e4dc76ae64114648" },
  { title: "Sliding Doors", url: "https://open.spotify.com/intl-es/track/4s0wkyeXeMTUERLQ9UX8kZ?si=165000f971bf4c7f" },
  { title: "Lost For Words", url: "https://open.spotify.com/intl-es/track/1bAjrBfU21dxXiwxCXNF5C?si=44db434d946e490e" },
  { title: "Look Me In The Eyes (feat. James Blake)", url: "https://open.spotify.com/intl-es/track/4K6QZO2D3FNhLr7jKpPoQm?si=ff88e89f27714517" },
  { title: "New Years", url: "https://open.spotify.com/intl-es/track/2wXOmg1tD7cJuU9HhffYXG?si=3a267a9ed9b1481e" },
  { title: "Finally", url: "https://open.spotify.com/intl-es/track/5wV1jwBjTkxxAa2gpfyQYR?si=458ffdb6428c4d6e" },
]

export default function Album5Page() {
  return (
    <main className="w-full bg-white">
      <Header />

      <section className="min-h-screen w-full pt-32 pb-20 px-6 md:px-8">
        
        <div className="max-w-5xl mx-auto space-y-12 animate-slide-up">

          {/* INFO DEL ALBUM */}
          <div>
            <p className="text-sm text-gray-500 font-medium mb-2">EP • 2023</p>
            <h1 className="rex-heading-lg mb-4">The Alexander Technique</h1>

            <div className="rex-text-base text-gray-600 space-y-6">

              <p>
                The Alexander Technique es la anomalía perfecta: un EP que funciona como un laboratorio emocional y sonoro,
                una especie de cuaderno de apuntes donde Rex ensaya las ideas que luego definirán toda su estética.
                Es un trabajo que vive entre la adolescencia cruda y la sensibilidad sofisticada, como si Rex hubiera tenido acceso
                a la teoría musical antes que a la estabilidad emocional.
              </p>

              <p>
                No es un disco menor. Es un disco embrionario, cargado de promesas y de decisiones que parecen improvisadas
                pero esconden un oído inquieto.
              </p>

              <h3 className="font-semibold text-lg">Producción: lo-fi quirúrgico</h3>

              <p>
                El sonido del EP es intencionalmente áspero, pero nunca descuidado. Hay algo casi ritual en la forma en que Rex
                abraza la precariedad técnica: voces sin pulir, texturas que crujen, silencios que suenan más fuerte que algunos
                acordes. Es el tipo de producción que convierte la habitación en estudio, y el error en identidad estética.
              </p>

              <p>
                En vez de perseguir perfección, Rex persigue verdad. Y la encuentra.
              </p>

              <h3 className="font-semibold text-lg">Armonía: la intuición de alguien que ya sabe demasiado</h3>

              <p>
                A pesar de su rusticidad sonora, el EP está lleno de guiños musicales que delatan una comprensión profunda:
              </p>

              <ul className="list-disc ml-6 space-y-1">
                <li>Progresiones que combinan acordes mayores cálidos con menores inesperados.</li>
                <li>Apariciones súbitas de séptimas y novenas usadas como lenguaje natural.</li>
                <li>Melodías que nunca buscan la nota obvia, siempre un poco más vulnerables.</li>
              </ul>

              <p>
                Es un trabajo donde la teoría musical no se ostenta, pero tampoco se esconde: simplemente fluye.
              </p>

              <h3 className="font-semibold text-lg">Narrativa emocional: un diario íntimo con eco</h3>

              <p>
                El EP captura un momento donde Rex parece no saber aún si está componiendo para sí mismo o para alguien más.
                Hay una honestidad casi torpe, una fragilidad confesional que lo vuelve magnético.
              </p>

              <p>
                El título —The Alexander Technique— funciona como metáfora involuntaria: en la técnica real, uno aprende
                a liberar tensiones del cuerpo. En este EP, Rex parece intentar liberar tensiones del alma, aunque todavía no
                sepa cómo hacerlo del todo.
              </p>

              <p>
                Es música como terapia, pero sin solemnidad.
              </p>

              <h3 className="font-semibold text-lg">Estética: una identidad formándose en tiempo real</h3>

              <p>
                Lo más fascinante del EP es que no está “cerrado”. Se siente vivo, en construcción, lleno de impulsos y decisiones
                que en otros artistas serían descartes, pero que en Rex funcionan como ventanas hacia lo que está por venir.
              </p>

              <p>
                Es un esqueleto emocional. Una cartografía emocional dibujada con lápiz.
              </p>

              <p>
                Y sin embargo, tiene una solidez conceptual que sorprende: todo suena cohesivo, como si incluso las dudas
                estuvieran ordenadas.
              </p>

              <h3 className="font-semibold text-lg">Conclusión</h3>

              <p>
                The Alexander Technique es la pieza perdida del rompecabezas Rex Orange County.
                No es su obra más conocida ni la más pulida, pero sí una de las más reveladoras.
              </p>

              <p>
                En su aparente simpleza se esconde el germen de su sensibilidad armónica;
                en su producción cruda, el ADN de su honestidad estética.
              </p>

              <p>
                Es un EP que suena como mirar un boceto de un gran cuadro: imperfecto, íntimo, esencial.
              </p>
            </div>
          </div>

          {/* LISTA DE CANCIONES */}
          <div>
            <h2 className="rex-heading-md mb-6">Lista de Canciones</h2>
            <ol className="space-y-4">
              {tracks.map((track, index) => (
                <li
                  key={track.title}
                  className="flex items-center gap-4 pb-4 border-b border-gray-100 cursor-pointer transition-colors"
                  style={{ color: "black" }}
                  onClick={() => window.open(track.url, "_blank")}
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
