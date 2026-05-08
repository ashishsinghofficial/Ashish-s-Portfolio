import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-8">
           <div className="text-2xl font-bold tracking-tighter uppercase">Ashish</div>
           <p className="mono-tag text-text-muted">© 2026 Architectural Folio</p>
        </div>
        
        <div className="flex gap-12">
          {["LinkedIn", "GitHub", "Twitter"].map(link => (
            <a key={link} href="#" className="mono-tag hover:text-white transition-opacity">{link}</a>
          ))}
        </div>

        <div className="text-[10px] uppercase tracking-widest text-text-muted">
          Design via Minimalism / Tech via KIIT
        </div>
      </div>
    </footer>
  );
}
