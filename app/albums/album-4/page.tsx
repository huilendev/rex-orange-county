"use client"

import { Header } from "@/components/header"
import Link from "next/link"

// Lista de canciones con sus links
const tracks = [
  { title: "KEEP IT UP", url: "https://open.spotify.com/intl-es/track/1dxqk42KIlMyrSawZ5YjBE?si=42cfe33bc5f14f42" },
  { title: "OPEN A WINDOW (feat. Tyler, The Creator)", url: "https://open.spotify.com/intl-es/track/1TDeDFUYHjZKLsO6bzoVg1?si=85c2e108855c482e" },
  { title: "WORTH IT", url: "https://open.spotify.com/intl-es/track/2agJG5mKBoOL8uojjKQvCD?si=117a8e516551439d" },
  { title: "AMAZING", url: "https://open.spotify.com/intl-es/track/3OM6qQmdFV6uy61GIqpRtf?si=bd3936398f22448d" },
  { title: "ONE IN A MILLION", url: "https://open.spotify.com/intl-es/track/2XkDm5m2vPowecEAAR5gmb?si=51c8b434c20f4969" },
  { title: "IF YOU WANT IT", url: "https://open.spotify.com/intl-es/track/2ZZ0ITwRqitCvddi2CGfgq?si=032b3a4f191c4b08" },
  { title: "7AM", url: "https://open.spotify.com/intl-es/track/32B72vNdAd1987euX9Lkgs?si=5424457f27c44097" },
  { title: "THE SHADE", url: "https://open.spotify.com/intl-es/track/1gH1h30wkQdd9zhY3j7a8T?si=12806d2a3d06499e" },
  { title: "MAKING TIME", url: "https://open.spotify.com/intl-es/track/6VxUwrFA62k7apLawHsC08?si=65dac5a9da4d40f8" },
  { title: "SHOOT ME DOWN", url: "https://open.spotify.com/intl-es/track/5jLjUQIa8fV6erihJb1App?si=b864c4a771fc4fd5" },
  { title: "WHO CARES?", url: "https://open.spotify.com/intl-es/track/1SKN0qfmaLESOcr9rV9kvn?si=ac49d32c87cb4f26" },
]

export default function Album4Page() {
  return (
    <main className="w-full bg-white">
      <Header />

      <section className="min-h-screen w-full pt-32 pb-20 px-6 md:px-8">

        <div className="max-w-5xl mx-auto space-y-12 animate-slide-up">

          {/* INFO DEL ÁLBUM */}
          <div>
            <p className="text-sm text-gray-500 font-medium mb-2">Álbum • 2022</p>
            <h1 className="rex-heading-lg mb-4">Who Cares?</h1>

            <div className="rex-text-base text-gray-600 space-y-6">

              <p>
                Who Cares? es el disco en el que Rex Orange County parece contestar su propia pregunta con un suspiro elegante. 
                Si en Pony había suavidad luminosa y en Apricot Princess un romanticismo sinfónico, acá aparece un Rex que abraza 
                el desencanto con sutileza, envuelto en una instrumentación que suena a pasacalle londinense, a jazz de domingo, 
                a pop radiante que esconde ansiedad existencial como si fuera un detalle menor.
              </p>

              <p>
                Es su álbum más ligero en apariencia, pero paradójicamente el más cargado de subtexto: un ejercicio de optimismo 
                forzado, sostenido por arreglos brillantes que funcionan como maquillaje emocional.
              </p>

              <h3 className="font-semibold text-lg">Producción: la melancolía disfrazada de pop soleado</h3>

              <p>
                En Who Cares?, Rex colabora nuevamente con Benny Sings, y esa influencia se nota en cada centímetro del sonido: 
                producción cristalina, grooves que flotan, bajos que caminan con una calma sospechosa y arreglos que suenan a pop 
                europeo minimalista con perfume de cámara.
              </p>

              <p>
                Los vientos y cuerdas están usados con precisión quirúrgica: nunca grandilocuentes, sino conversacionales, casi como 
                pensamientos musicales que se deslizan sin pedir permiso. Es un álbum que se mueve con polidez emocional, como si no 
                quisiera molestar demasiado a nadie… ni siquiera a sí mismo.
              </p>

              <h3 className="font-semibold text-lg">Armonía: sofisticación pop con guiños jazzeros</h3>

              <p>
                Aunque suene liviano, Who Cares? está lleno de detalles que delatan una madurez armónica que Rex ya maneja con 
                naturalidad:
              </p>

              <ul className="list-disc ml-6 space-y-1">
                <li>El uso recurrente de acordes mayores con séptima mayor.</li>
                <li>Cadencias engañosas que provocan caídas inesperadas.</li>
                <li>Cambios sutiles de modo que funcionan como mini giros emocionales.</li>
                <li>Melodías casi habladas apoyadas en bajos sofisticados.</li>
              </ul>

              <p>
                Es un disco que suena “simple”, pero solo porque Rex aprendió a esconder su complejidad detrás de sonrisas musicales 
                muy bien producidas.
              </p>

              <h3 className="font-semibold text-lg">Narrativa emocional: la elegancia del cansancio</h3>

              <p>
                Who Cares? habla desde un agotamiento dulce, ese momento en el que uno ya entendió que no puede controlar demasiado 
                y entonces decide bailar un poco igual. Hay desilusión, dudas, inseguridad… pero tratadas con una resiliencia suave.
              </p>

              <p>
                Las letras parecen simples, pero la simplicidad funciona como un mecanismo de defensa: decir poco para no sentir 
                demasiado. Es un álbum sobre el cansancio emocional dicho desde la luz, no desde la sombra.
              </p>

              <h3 className="font-semibold text-lg">Culminación estética</h3>

              <p>
                Es el Rex más pulido, elegante y seguro en su inseguridad. Pop de los 70s, soul ligero, jazz pop moderno y ese tono 
                adolescente-anciano tan suyo.
              </p>

              <p>
                Cada canción es un pequeño intento de convencer al mundo —y a sí mismo— de que está todo bien, incluso cuando no lo 
                está. Y en ese contraste reside el encanto del álbum.
              </p>

              <h3 className="font-semibold text-lg">Conclusión</h3>

              <p>
                Who Cares? cierra un arco evolutivo: un disco donde la complejidad emocional se camufla en un barniz brillante de pop 
                sofisticado. Maduro sin solemnidad, ligero sin superficialidad, melancólico sin perder luminosidad.
              </p>

              <p>
                La vulnerabilidad acá encontró swing. Y ahí está su belleza más honesta.
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
                  className="flex items-center gap-4 pb-4 border-b border-gray-100 cursor-pointer transition-colors duration-200"
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
