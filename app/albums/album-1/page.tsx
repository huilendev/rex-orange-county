"use client";

import { Header } from "@/components/header";

const tracks = [
  {
    name: "Rex (Intro)",
    url: "https://open.spotify.com/intl-es/track/5GB646asCrgVsjO9FK68Gy?si=7abcec217b2541af",
  },
  {
    name: "Paradise",
    url: "https://open.spotify.com/intl-es/track/0AOc5dG23RCMvXTi47aLdl?si=d7ec58191c764d7c",
  },
  {
    name: "Belly",
    url: "https://open.spotify.com/intl-es/track/4tVJ827zOdHHv3vIharAOQ?si=38a8aac0648647c5",
  },
  {
    name: "Corduroy Dreams",
    url: "https://open.spotify.com/intl-es/track/2ravLKGYnJWa7szKSBRTRJ?si=8e199578d47f48ea",
  },
  {
    name: "Japan",
    url: "https://open.spotify.com/intl-es/track/3LZY9DOv1inEE7WWS3FM2y?si=fc8caec37f084a8f",
  },
  {
    name: "Portrait of Ned",
    url: "https://open.spotify.com/intl-es/track/4WgnOBkGpZHgiHN33NmOsh?si=0b69850df28f487f",
  },
  {
    name: "Green Eyes",
    url: "https://open.spotify.com/intl-es/track/79UGpzB8R9a2wozcRFjJy9?si=2ca1dd5dc3ad4c8e",
  },
  {
    name: "A Song About Being Sad",
    url: "https://open.spotify.com/intl-es/track/1phSI7mJzqlu2HE6gIwu7I?si=1cdedede86594b55",
  },
  {
    name: "Know love",
    url: "https://open.spotify.com/intl-es/track/6EyMjnZqL89XVWWM1jT4Ci?si=04953c1c106a466d",
  },
  {
    name: "Curfew",
    url: "https://open.spotify.com/intl-es/track/6bI50CF2njHJgj7C0OwN8W?si=9bf652ae1bd848e4",
  },
];

export default function Album1Page() {
  return (
    <main className="w-full bg-white">
      <Header />

      <section className="min-h-screen w-full pt-32 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">

          {/* Header */}
          <div>
            <p className="text-sm text-gray-500 font-medium mb-2">Álbum • 2015</p>
            <h1 className="rex-heading-lg mb-6">Bcos U Will Never B Free</h1>

            <p className="rex-text-base text-gray-700 leading-relaxed">
              Hay discos que no suenan a debut, sino a manifiesto. <i>bcos u will never b free</i> es exactamente eso:
              la maqueta honesta de un artista que, sin saberlo, estaba por redefinir la sensibilidad indie-pop de toda una generación.
              Grabado literalmente en una habitación, con un teclado barato y una intuición melódica absurda para alguien de su edad,
              el álbum respira precariedad, pero una precariedad deliberada: la fidelidad importa menos que la intención.
              <br /><br />

              <b>Producción y atmósfera</b><br />
              El encanto del disco está en su desprolijidad calculada: voces sin pulir, capas que entran y salen, beats torpes pero expresivos.
              Todo vibra como un cuaderno de bocetos donde cada idea —incluso la más mínima— tiene espacio para existir.
              Lo lo-fi no es un filtro estético: es un vehículo emocional.
              <br /><br />

              <b>Composición: simplicidad aparente, teoría escondida</b><br />
              Rex juega con estructuras que parecen simples, pero esconden decisiones armónicas sofisticadas:
              cambios repentinos entre modo mayor y menor, progresiones cercanas al neo-soul y al jazz suave,
              y un uso constante de séptimas mayores que definen el tono agridulce del álbum.
              Es música que parece fácil… hasta que intentás hacerla.
              <br /><br />

              <b>Temas y narrativa emocional</b><br />
              El álbum funciona como una radiografía de la adolescencia: inseguridad, enamoramientos torpes, dudas.
              No intenta sonar más maduro de lo que es —y ahí reside su fuerza—.
              Todo suena cercano, como un mensaje de voz enviado a las tres de la mañana.
              <br /><br />

              <b>Conclusión</b><br />
              <i>bcos u will never b free</i> no busca ser perfecto, busca ser verdadero.
              Su magia vive en lo frágil, lo inacabado y esa mezcla irrepetible de torpeza y genialidad
              que solo aparece cuando la técnica se subordina al sentimiento.
            </p>
          </div>

          {/* Tracklist */}
          <div>
            <h2 className="rex-heading-md mb-6">Lista de Canciones</h2>

            <ol className="space-y-4">
              {tracks.map((track, index) => (
                <li
                  key={track.name}
                  onClick={() => window.open(track.url, "_blank")}
                  className="flex items-center gap-4 pb-4 border-b border-gray-100 cursor-pointer transition-colors"
                  style={{ color: "black" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--rex-blue)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "black")
                  }
                >
                  <span className="text-lg font-bold text-gray-300 w-8">
                    {index + 1}
                  </span>
                  <span className="text-lg">{track.name}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>
    </main>
  );
}
