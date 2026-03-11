import { Linkedin, Youtube, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold tracking-tighter font-display gradient-text">BTAJI</span>
              <span className="text-sm font-medium text-muted-foreground ml-1.5 tracking-wide">crew</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              Pakistan's premier AI & tech community — learn, build, and compete together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="/#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Team</a>
              <a href="/#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</a>
              <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">Explore</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/competitions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Competitions</Link>
              <Link to="/hackathons" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hackathons</Link>
              <Link to="/sessions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sessions</Link>
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-4">Connect</h4>
            <a href="mailto:btajicrew@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mb-4">
              <Mail size={14} />
              btajicrew@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/btaji-crew"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mt-10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 BTAJI CREW. All rights reserved.
          </p>
          <a
            href="https://btag-crew.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            btag-crew.lovable.app
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
