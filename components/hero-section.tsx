"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 animate-fade-in-up font-sans">
          Agence de Voyage Temporel de Luxe
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight text-foreground animate-fade-in-up-delay text-balance">
          {"Voyagez au-del\u00e0 du temps"}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up-delay-2 leading-relaxed font-sans">
          {"Trois \u00e9poques. Une exp\u00e9rience d\u2019exception."}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay">
          <a
            href="#destinations"
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium tracking-wide transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-primary/25 text-sm"
          >
            {"D\u00e9couvrir les destinations"}
          </a>
          <a
            href="#chat"
            className="px-8 py-4 rounded-xl border border-border text-foreground font-medium tracking-wide transition-all duration-300 hover:border-primary hover:text-primary text-sm"
          >
            {"Parler \u00e0 un agent"}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="size-5 text-primary/60" />
      </div>
    </section>
  )
}
