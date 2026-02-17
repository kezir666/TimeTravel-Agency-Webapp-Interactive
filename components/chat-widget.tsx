"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

const mockMessages = [
  {
    role: "bot" as const,
    text: "Bonjour ! Je suis votre assistant temporel. Comment puis-je vous aider ?",
  },
  {
    role: "user" as const,
    text: "Quel est le niveau de risque pour le Cr\u00e9tac\u00e9 ?",
  },
  {
    role: "bot" as const,
    text: "Le voyage au Cr\u00e9tac\u00e9 pr\u00e9sente un niveau de risque \u00e9lev\u00e9, mais notre bulle de protection temporelle renforc\u00e9e et nos d\u00e9tecteurs de pr\u00e9dateurs assurent votre s\u00e9curit\u00e9 en tout temps.",
  },
]

export function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div id="chat" className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      {open && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl bg-card border border-border/50 shadow-2xl shadow-black/40 overflow-hidden animate-fade-in">
          {/* Panel Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-secondary/50">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground font-sans">
                Assistant Temporel
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Fermer le chat"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
            {mockMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed font-sans ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50">
            <div className="flex items-center gap-2 bg-secondary rounded-xl px-4 py-3">
              <input
                type="text"
                placeholder="Posez-moi vos questions sur les voyages temporels..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-sans"
                readOnly
              />
              <button className="text-primary hover:text-gold-light transition-colors duration-300" aria-label="Envoyer">
                <Send className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-300 hover:bg-gold-light hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {open ? (
          <X className="size-5" />
        ) : (
          <MessageCircle className="size-5" />
        )}
      </button>
    </div>
  )
}
