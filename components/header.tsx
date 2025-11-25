"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between">
        {/* --- IZQUIERDA (Links) --- */}
        <div className="flex items-center gap-8 md:gap-12">
          <Link
            href="/"
            className="text-sm font-medium text-black transition-colors duration-150 relative group"
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--rex-blue)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
          >
            Home
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-150"
              style={{ backgroundColor: "var(--rex-blue)" }}
            />
          </Link>

          <Link
            href="/info"
            className="text-sm font-medium text-black transition-colors duration-150 relative group"
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--rex-blue)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
          >
            Info
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-150"
              style={{ backgroundColor: "var(--rex-blue)" }}
            />
          </Link>

          <Link
            href="/spotify"
            className="text-sm font-medium text-black transition-colors duration-150 relative group"
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--rex-blue)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
          >
            Spotify
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-150"
              style={{ backgroundColor: "var(--rex-blue)" }}
            />
          </Link>

          <Link
            href="/redes"
            className="text-sm font-medium text-black transition-colors duration-150 relative group"
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--rex-blue)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
          >
            Redes
            <span
              className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-150"
              style={{ backgroundColor: "var(--rex-blue)" }}
            />
          </Link>
        </div>

        {/* --- DERECHA (Logo) --- */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/rexx.svg"
            alt="Rex Logo"
            width={65}
            height={65}
            className="object-contain"
          />
        </Link>
      </nav>
    </header>
  );
}
