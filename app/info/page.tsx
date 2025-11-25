"use client";

import { Header } from "@/components/header";
// import { Footer } from "@/components/footer"
import Image from "next/image";

export default function InfoPage() {
  return (
    <main className="w-full bg-white">
      <Header />

      <section className="min-h-screen w-full pt-32 pb-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="rex-heading-lg mb-4 animate-fade-in">
            Sobre Rex Orange County
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-6 animate-slide-up">
              <p className="rex-text-base text-gray-600">
                Rex Orange County es el proyecto musical del cantante,
                compositor y multiinstrumentista inglés, Alexander James
                O’Connor. Nacido en 1998 en Hampshire, Reino Unido, comenzó a
                producir música desde su habitación y rápidamente se volvió una
                de las figuras más queridas del bedroom-pop moderno.
              </p>

              <p className="rex-text-base text-gray-600">
                Su sonido combina elementos de indie pop, soul, jazz y R&B,
                acompañado por arreglos cálidos, letras confesionales y una
                estética nostálgica que lo distingue dentro de la escena
                alternativa. Rex ganó reconocimiento internacional tras
                colaborar con Tyler, The Creator en el álbum Flower Boy
                (2017), participación que impulsó su carrera a nivel global.
              </p>

              <p className="rex-text-base text-gray-600">
                Entre sus álbumes más importantes se encuentran Bcos U Will
                Never B Free (2015), Apricot Princess (2017), Pony (2019) y
                Who Cares? (2022), todos caracterizados por su sensibilidad
                emocional y su enfoque íntimo hacia la composición. Rex también
                ha realizado giras por Europa, América y Asia, donde su conexión
                con los fans se convirtió en una de sus marcas registradas.
              </p>

              <p className="rex-text-base text-gray-600">
                Tras un período de descanso mediático, Rex regresó a la música
                con una visión renovada, reafirmando su lugar como uno de los
                artistas contemporáneos más influyentes de su generación. Su
                trabajo sigue representando la vulnerabilidad, honestidad y
                creatividad que lo convirtieron en un ícono del bedroom-pop.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 animate-blur-fade">
              <div className="relative h-64 md:h-72 rounded-lg overflow-hidden">
                <Image
                  src="/rexxx.jpg"
                  alt="Rex Orange County Portrait"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-48 md:h-56 rounded-lg overflow-hidden">
                <Image
                  src="/rexxxx.jpg"
                  alt="Studio Setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}
