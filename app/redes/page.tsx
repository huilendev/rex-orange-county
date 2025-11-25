"use client"

import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/rexorangecounty/" },
  { name: "YouTube",  url: "https://www.youtube.com/channel/UC7Yqsq07_fdXg23hLRODh-w" },
  { name: "Web",  url: "https://www.rexorangecounty.com/" },
  { name: "Spotify",  url: "https://open.spotify.com/intl-es/artist/7pbDxGE6nQSZVfiFdq9lOL?si=Ihch_SChToicSEVvvx5ulg" },
]

export default function RedesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <main className="w-full bg-white">
      <Header />

      <section className="min-h-screen w-full pt-32 pb-20 px-6 md:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <h1 className="rex-heading-lg text-center mb-16 animate-fade-in"> Redes Sociales</h1>

          <div className="space-y-6">
            {socials.map((social, index) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="p-6 md:p-8 bg-white border-2 rounded-lg transition-all duration-300 group cursor-pointer"
                  style={{
                    borderColor: hoveredIndex === index ? "var(--rex-blue)" : "#f3f4f6",
                    backgroundColor: hoveredIndex === index ? "#f7f7f7" : "white",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="text-4xl group-hover:scale-110 transition-transform">{}</span>
                      <span
                        className="text-2xl font-bold transition-colors"
                        style={{ color: hoveredIndex === index ? "var(--rex-blue)" : "black" }}
                      >
                        {social.name}
                      </span>
                    </div>
                    <span
                      className="text-2xl transition-colors"
                      style={{ color: hoveredIndex === index ? "var(--rex-blue)" : "#d1d5db" }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  )
}
