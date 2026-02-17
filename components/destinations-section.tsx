"use client"

import { useState } from "react"
import Image from "next/image"
import { Clock, AlertTriangle, Banknote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DestinationModal } from "@/components/destination-modal"

export type Destination = {
  id: string
  name: string
  tag: string
  description: string
  image: string
  duration: string
  risk: string
  price: string
  experiences: string[]
  security: string[]
  tips: string[]
  pricing: string[]
}

const destinations: Destination[] = [
  {
    id: "paris-1889",
    name: "Paris 1889",
    tag: "Belle \u00c9poque",
    description:
      "Exposition Universelle, Tour Eiffel naissante, soir\u00e9es \u00e9l\u00e9gantes.",
    image: "/images/paris-1889.jpg",
    duration: "3 jours",
    risk: "Faible",
    price: "\u00c0 partir de 4\u202f900\u20ac",
    experiences: [
      "Visite priv\u00e9e de la Tour Eiffel en construction",
      "Soir\u00e9e au Moulin Rouge originel",
      "D\u00e9gustation gastronomique Belle \u00c9poque",
      "Rencontre avec Gustave Eiffel",
    ],
    security: [
      "Zone temporelle stabilis\u00e9e et certifi\u00e9e",
      "\u00c9quipe de s\u00e9curit\u00e9 sur place 24h/24",
      "V\u00eatements d\u2019\u00e9poque fournis",
      "Traducteur temporel int\u00e9gr\u00e9",
    ],
    tips: [
      "Pr\u00e9voyez des chaussures confortables pour les pav\u00e9s",
      "Les appareils \u00e9lectroniques modernes sont interdits",
      "Respectez les codes sociaux de l\u2019\u00e9poque",
    ],
    pricing: [
      "Forfait D\u00e9couverte : 4\u202f900\u20ac",
      "Forfait Prestige : 7\u202f200\u20ac",
      "Forfait Priv\u00e9 : 12\u202f000\u20ac",
      "Suppl\u00e9ment guide priv\u00e9 : 1\u202f500\u20ac",
    ],
  },
  {
    id: "cretace",
    name: "Cr\u00e9tac\u00e9 -65M",
    tag: "Pr\u00e9histoire",
    description:
      "Observation s\u00e9curis\u00e9e des dinosaures et nature sauvage.",
    image: "/images/cretaceous.jpg",
    duration: "2 jours",
    risk: "\u00c9lev\u00e9",
    price: "\u00c0 partir de 12\u202f000\u20ac",
    experiences: [
      "Observation de T-Rex en habitat naturel",
      "Survol en bulle temporelle des plaines",
      "Collecte de fossiles exclusifs",
      "Camp de base premium en for\u00eat primaire",
    ],
    security: [
      "Bulle de protection temporelle renforc\u00e9e",
      "D\u00e9tecteurs de pr\u00e9dateurs avanc\u00e9s",
      "\u00c9vacuation d\u2019urgence instantan\u00e9e",
      "Combinaison de survie fournie",
    ],
    tips: [
      "Vaccination temporelle obligatoire 48h avant",
      "Ne touchez aucun \u00eatre vivant",
      "Restez dans la zone s\u00e9curis\u00e9e en tout temps",
    ],
    pricing: [
      "Forfait Exploration : 12\u202f000\u20ac",
      "Forfait Aventure : 18\u202f500\u20ac",
      "Forfait Scientifique : 25\u202f000\u20ac",
      "Suppl\u00e9ment survol : 4\u202f000\u20ac",
    ],
  },
  {
    id: "florence-1504",
    name: "Florence 1504",
    tag: "Renaissance",
    description:
      "Michel-Ange, art florentin, naissance du David.",
    image: "/images/florence-1504.jpg",
    duration: "4 jours",
    risk: "Mod\u00e9r\u00e9",
    price: "\u00c0 partir de 6\u202f500\u20ac",
    experiences: [
      "Visite de l\u2019atelier de Michel-Ange",
      "D\u00e9voilement de la statue du David",
      "Banquet Renaissance avec la famille M\u00e9dicis",
      "Cours de peinture avec un ma\u00eetre florentin",
    ],
    security: [
      "Zone temporelle \u00e0 surveillance mod\u00e9r\u00e9e",
      "Guide historien sp\u00e9cialis\u00e9 Renaissance",
      "Protocole anti-paradoxe actif",
      "Identit\u00e9 d\u2019\u00e9poque fournie",
    ],
    tips: [
      "Apprenez quelques mots d\u2019italien ancien",
      "Les bijoux modernes sont interdits",
      "\u00c9vitez de mentionner le futur",
    ],
    pricing: [
      "Forfait Culture : 6\u202f500\u20ac",
      "Forfait Artiste : 9\u202f800\u20ac",
      "Forfait M\u00e9c\u00e8ne : 15\u202f000\u20ac",
      "Suppl\u00e9ment cours priv\u00e9 : 2\u202f000\u20ac",
    ],
  },
]

export function DestinationsSection() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)

  return (
    <>
      <section id="destinations" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-sans">
              {"\u00c9poques disponibles"}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance">
              Nos Destinations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={`Destination ${dest.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm">
                    {dest.tag}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-sans">
                    {dest.description}
                  </p>

                  {/* Quick Info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-xs text-muted-foreground font-sans">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5 text-primary/70" />
                      {dest.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="size-3.5 text-primary/70" />
                      {dest.risk}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Banknote className="size-3.5 text-primary/70" />
                      {dest.price}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedDestination(dest)}
                    className="w-full py-3 rounded-xl border border-primary/30 text-primary text-sm font-medium tracking-wide transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                  >
                    Explorer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </>
  )
}
