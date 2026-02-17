export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-serif tracking-wide text-muted-foreground">
            TimeTravel Agency
          </p>

          <div className="flex items-center gap-6 text-xs text-muted-foreground font-sans">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-primary"
            >
              {"Mentions l\u00e9gales"}
            </a>
            <span className="text-border">|</span>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-primary"
            >
              Contact
            </a>
            <span className="text-border">|</span>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-primary"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/60 font-sans">
            {"Projet p\u00e9dagogique fictif."}
          </p>
        </div>
      </div>
    </footer>
  )
}
