"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface AlbumCardProps {
  id: string
  title: string
  year: number
  image: string
}

export function AlbumCard({ id, title, year, image }: AlbumCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/albums/${id}`}>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-lg mb-4 h-64 md:h-72">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          />
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isHovered ? "opacity-10" : "opacity-0"
            }`}
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-500 font-medium">{year}</p>
          <h3
            className="text-lg md:text-xl font-bold text-black transition-colors duration-200"
            style={{ color: isHovered ? "var(--rex-blue)" : "black" }}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
