import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DestinationsSection } from "@/components/destinations-section"
import { BookingSection } from "@/components/booking-section"
import { ChatWidget } from "@/components/chat-widget"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <DestinationsSection />
      <BookingSection />
      <SiteFooter />
      <ChatWidget />
    </main>
  )
}
