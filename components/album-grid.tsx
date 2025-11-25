// components/album-grid.tsx
"use client"

import Link from "next/link"

// Orden y nombres corregidos
const albums = [
  {
    id: "album-1",
    title: "Bcos u will never b free",
    year: 2015,
    image: "/Bcos_U_Will_Never_B_Free.jpg",
  },
  {
    id: "album-2",
    title: "Apricot Princess",
    year: 2018,
    image: "/Apricot_Princess.jpg",
  },
  {
    id: "album-3",
    title: "Pony",
    year: 2019,
    image: "/Pony.png",
  },
  {
    id: "album-4",
    title: "Who Cares?",
    year: 2022,
    image: "/whocares.jpg",
  },
  {
    id: "album-5",
    title: "The Alexander Technique",
    year: 2023,
    image: "/Alexander.jpg",
  },
]

export function AlbumGrid() {
  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="rex-heading-lg mb-16 animate-fade-in">Discografía</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {albums.map((album, index) => (
            <Link
              key={album.id}
              href={`/albums/${album.id}`}
              className="block animate-subtle-zoom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4">
                <img
                  src={album.image}
                  alt={album.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-lg font-semibold">{album.title}</h3>
              <p className="text-sm text-gray-500">{album.year}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
