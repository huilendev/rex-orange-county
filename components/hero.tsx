"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-8">

          {/* TITLE */}
          <h1 
            className="text-7xl md:text-8xl lg:text-9xl font-black text-[#156EB8] leading-[0.9] tracking-tight"
            style={{ 
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 900 
            }}
          >
            Rex Orange County
          </h1>

          {/* IMAGE */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/rex.jpg" 
              alt="Rex Orange County" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>

        </div>
      </div>
    </section>
  )
}
