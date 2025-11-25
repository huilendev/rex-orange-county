
// app/page.tsx
import  Hero  from "@/components/hero"
import { AlbumGrid } from "@/components/album-grid"
import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <Hero />
      <AlbumGrid />
      {/* <Footer /> */}
    </main>
  )
}
