"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false)
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [travelers, setTravelers] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="booking" className="py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <div className="p-12 rounded-2xl bg-card border border-primary/20">
            <CheckCircle2 className="size-16 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-medium text-foreground mb-4">
              Demande envoy&eacute;e
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              {"Merci pour votre demande de devis. Notre \u00e9quipe de chrononautes vous contactera dans les 24 heures pour finaliser votre voyage temporel."}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 px-8 py-3 rounded-xl border border-border text-foreground text-sm font-medium tracking-wide transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Nouvelle demande
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-sans">
            {"R\u00e9servation"}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance">
            Planifiez votre voyage
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 lg:p-10 rounded-2xl bg-card border border-border/50 space-y-6"
        >
          {/* Destination */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground font-sans">Destination</Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="w-full h-12 rounded-xl bg-secondary border-border/50 text-foreground">
                <SelectValue placeholder="Choisir une destination" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border/50">
                <SelectItem value="paris-1889">Paris 1889</SelectItem>
                <SelectItem value="cretace">{"Cr\u00e9tac\u00e9 -65M"}</SelectItem>
                <SelectItem value="florence-1504">Florence 1504</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground font-sans">{"Date de d\u00e9part"}</Label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="flex w-full h-12 rounded-xl bg-secondary border border-border/50 px-4 text-sm text-foreground transition-colors duration-300 focus:border-primary focus:outline-none font-sans"
            />
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground font-sans">Nombre de voyageurs</Label>
            <Select value={travelers} onValueChange={setTravelers}>
              <SelectTrigger className="w-full h-12 rounded-xl bg-secondary border-border/50 text-foreground">
                <SelectValue placeholder="Nombre de voyageurs" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border/50">
                <SelectItem value="1">1 voyageur</SelectItem>
                <SelectItem value="2">2 voyageurs</SelectItem>
                <SelectItem value="3">3 voyageurs</SelectItem>
                <SelectItem value="4">4 voyageurs</SelectItem>
                <SelectItem value="5+">5+ voyageurs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Options */}
          <div className="space-y-4 pt-2">
            <Label className="text-sm text-muted-foreground font-sans">Options</Label>
            <div className="flex items-center gap-3">
              <Checkbox
                id="guide"
                className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor="guide" className="text-sm text-foreground font-sans cursor-pointer">
                {"Guide priv\u00e9"}
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="comfort"
                className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor="comfort" className="text-sm text-foreground font-sans cursor-pointer">
                Confort premium
              </Label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground text-sm font-medium tracking-wide transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-primary/20 mt-4"
          >
            Demander un devis
          </button>
        </form>
      </div>
    </section>
  )
}
