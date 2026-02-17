"use client"

import Image from "next/image"
import { ShieldCheck, Gem, BookOpen } from "lucide-react"
import { getAssetPath } from "@/lib/paths"

const features = [
  {
    icon: ShieldCheck,
    title: "S\u00e9curit\u00e9 temporelle certifi\u00e9e",
    description:
      "Chaque voyage est supervis\u00e9 par notre \u00e9quipe de physiciens quantiques et valid\u00e9 par les autorit\u00e9s temporelles.",
  },
  {
    icon: Gem,
    title: "Exp\u00e9riences ultra exclusives",
    description:
      "Acc\u00e8s priv\u00e9 \u00e0 des moments historiques, limit\u00e9 \u00e0 12 voyageurs par \u00e9poque.",
  },
  {
    icon: BookOpen,
    title: "Guides experts en chronologie historique",
    description:
      "Nos guides sont des historiens renomm\u00e9s, form\u00e9s aux protocoles de voyage temporel.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Description */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-sans">
              Notre histoire
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight text-balance">
              {"L\u2019excellence du voyage\u00a0temporel"}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-base lg:text-lg font-sans">
              {"Fond\u00e9e en 2087, TimeTravel Agency red\u00e9finit le voyage de luxe. Nous ouvrons des fen\u00eatres sur les \u00e9poques les plus fascinantes de l\u2019histoire, avec un niveau de s\u00e9curit\u00e9 et de confort in\u00e9gal\u00e9. Chaque destination est soigneusement s\u00e9lectionn\u00e9e pour offrir une immersion totale dans le pass\u00e9."}
            </p>
            <div className="mt-8 h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
          </div>

          {/* Right: Decorative Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={getAssetPath('/images/about-visual.jpg')}
              alt="Illustration abstraite d'un sablier doré dans l'espace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-6 transition-colors duration-300 group-hover:bg-primary/20">
                <feature.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
