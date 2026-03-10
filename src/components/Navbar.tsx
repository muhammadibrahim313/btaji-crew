import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/btaji_crew_logo.jfif";

const navLinks = ["Home", "About", "Team", "Community", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/60 backdrop-blur-2xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <img src={logoImg} alt="BTAJI CREW" className="w-8 h-8 rounded-lg object-cover" />
          <span className="text-lg font-bold tracking-tight font-display">
            <span className="text-foreground">BTAJI</span>
            <span className="text-muted-foreground font-normal ml-1">CREW</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 px-4 py-2 rounded-full hover:bg-muted/50"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://www.linkedin.com/company/btaji-crew"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
          >
            <Linkedin size={16} />
          </a>
          <Button variant="gradient" size="sm" asChild>
            <a href="https://chat.whatsapp.com/E29f5rozhAo8RbKjA00eSh" target="_blank" rel="noopener noreferrer">
              Join Community
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border/50 overflow-hidden"
          >
            <div className="container flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-xl hover:bg-muted/30"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="flex items-center gap-2 mt-4">
                <a
                  href="https://www.linkedin.com/company/btaji-crew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  <Linkedin size={20} />
                </a>
                <Button variant="gradient" className="flex-1" asChild>
                  <a href="https://chat.whatsapp.com/E29f5rozhAo8RbKjA00eSh" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                    Join Community
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
