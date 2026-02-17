"use client"
import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"

type Message = { role: "bot" | "user"; text: string }

const SYSTEM_PROMPT = `Tu es l'assistant IA de TimeTravel Agency, une agence de voyages temporels fictive haut de gamme.
Tu aides les clients parmi 3 destinations :
1. Paris 1889 — Belle Époque, Exposition Universelle. Prix : à partir de 12 500€.
2. Crétacé (-65M d'années) — Dinosaures, nature sauvage. Prix : à partir de 18 000€.
3. Florence 1504 — Renaissance, Michel-Ange. Prix : à partir de 9 800€.
Réponds toujours en français, avec un ton élégant et rassurant.`

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Bonjour ! Je suis votre assistant temporel. Comment puis-je vous aider ?" },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return
    const userMessage: Message = { role: "user", text }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)
    try {
      const history = [...messages, userMessage].map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.text,
      }))
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: SYSTEM_PROMPT, messages: history }),
      })
      const data = await response.json()
      const botText = data.content?.[0]?.text ?? "Désolé, je n'ai pas pu répondre."
      setMessages((prev) => [...prev, { role: "bot", text: botText }])
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Une erreur est survenue. Veuillez réessayer." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id="chat" className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl bg-card border border-border/50 shadow-2xl shadow-black/40 overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-secondary/50">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground font-sans">Assistant Temporel</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              <X className="size-4" />
            </button>
          </div>
          <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed font-sans ${
                  msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-secondary text-foreground rounded-bl-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-secondary px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-2">
                  <Loader2 className="size-3 animate-spin" />
                  <span className="text-sm text-muted-foreground">En train de répondre...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-border/50">
            <div className="flex items-center gap-2 bg-secondary rounded-xl px-4 py-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Posez-moi vos questions..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-sans"
                disabled={loading}
              />
              <button onClick={sendMessage} disabled={loading || !input.trim()} className="text-primary transition-colors duration-300 disabled:opacity-40">
                <Send className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105">
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
      </button>
    </div>
  )
}