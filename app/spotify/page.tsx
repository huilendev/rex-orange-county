"use client"

import { Header } from "@/components/header"

export default function SpotifyPage() {
  return (
    <main className="w-full bg-white">
      <Header />

      <section className="min-h-screen w-full pt-32 pb-20 px-6 md:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center space-y-10 animate-fade-in">
          
          <div className="space-y-3">
            <h1 className="rex-heading-lg">Rex Orange County</h1>
            <p className="rex-text-base text-gray-600">
              Perfil oficial en Spotify
            </p>
          </div>

          {/* Spotify Card */}
          <div className="w-full rounded-xl overflow-hidden shadow-xl aspect-video">
            <iframe
              src="https://open.spotify.com/embed/artist/7pbDxGE6nQSZVfiFdq9lOL"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

        </div>
      </section>
    </main>
  )
}
