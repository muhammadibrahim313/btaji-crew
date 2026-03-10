import { Linkedin, Globe } from "lucide-react";
import logoImg from "@/assets/btaji_crew_logo.jfif";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="BTAJI CREW" className="w-6 h-6 rounded-md object-cover" />
            <span className="text-sm font-semibold font-display text-foreground">BTAJI CREW</span>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 BTAJI CREW. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/btaji-crew"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://btaji-crew.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
