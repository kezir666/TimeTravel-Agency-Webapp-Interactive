"use client"

import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Destination } from "@/components/destinations-section"
import { Sparkles, Shield, Lightbulb, CreditCard } from "lucide-react"

interface DestinationModalProps {
  destination: Destination | null
  onClose: () => void
}

export function DestinationModal({ destination, onClose }: DestinationModalProps) {
  if (!destination) return null

  return (
    <Dialog open={!!destination} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border/50 p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header Image */}
        <div className="relative w-full aspect-[21/9]">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-sans">
              {destination.tag}
            </p>
            <DialogHeader>
              <DialogTitle className="font-serif text-3xl font-medium text-foreground mt-1">
                {destination.name}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground font-sans">
                {destination.description}
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="px-6 pb-6">
          <Tabs defaultValue="experiences" className="mt-4">
            <TabsList className="w-full bg-secondary border border-border/50 rounded-xl h-11">
              <TabsTrigger value="experiences" className="rounded-lg gap-1.5 text-xs data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                <Sparkles className="size-3.5" />
                {"Exp\u00e9riences"}
              </TabsTrigger>
              <TabsTrigger value="security" className="rounded-lg gap-1.5 text-xs data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                <Shield className="size-3.5" />
                {"S\u00e9curit\u00e9"}
              </TabsTrigger>
              <TabsTrigger value="tips" className="rounded-lg gap-1.5 text-xs data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                <Lightbulb className="size-3.5" />
                Conseils
              </TabsTrigger>
              <TabsTrigger value="pricing" className="rounded-lg gap-1.5 text-xs data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                <CreditCard className="size-3.5" />
                Tarifs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experiences" className="mt-6">
              <ul className="space-y-3">
                {destination.experiences.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground font-sans"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <ul className="space-y-3">
                {destination.security.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground font-sans"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="tips" className="mt-6">
              <ul className="space-y-3">
                {destination.tips.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground font-sans"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="pricing" className="mt-6">
              <ul className="space-y-3">
                {destination.pricing.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground font-sans"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>

          <a
            href="#booking"
            onClick={onClose}
            className="mt-8 block w-full py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium tracking-wide text-center transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-primary/20"
          >
            {"R\u00e9server cette destination"}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
