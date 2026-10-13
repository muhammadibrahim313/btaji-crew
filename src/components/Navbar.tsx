import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainLinks = [
  { label: "About", href: "/#about" },
  { label: "Research Lab", href: "/research-lab" },
  { label: "Competitions", href: "/competitions" },
  { label: "Community", href: "/#community" },
  { label: "Hackathons", href: "/hackathons" },
  { label: "Sessions", href: "/sessions" },
];

const exploreLinks = [
  { label: "Team", href: "/#team" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/95 backdrop-blur-2xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-0.5 group">
          <span className="text-2xl font-extrabold tracking-tighter font-display gradient-text">BTAJI</span>
          <span className="text-lg font-semibold text-muted-foreground ml-1.5 tracking-wide">Crew</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-1">
          {mainLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors duration-300 px-3 py-2 rounded-full hover:bg-muted/50"
            >
              {link.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 px-3 py-2 rounded-full hover:bg-muted/50 inline-flex items-center gap-1">
                Explore
                <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 rounded-xl p-2">
              {exploreLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild className="rounded-lg px-3 py-2.5">
                  <Link to={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden xl:flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5" asChild>
            <a
              href="https://www.linkedin.com/company/btaji-crew"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </Button>
          <Button variant="gradient" size="sm" asChild>
            <a href="https://chat.whatsapp.com/E29f5rozhAo8RbKjA00eSh" target="_blank" rel="noopener noreferrer">
              Join Community
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          className="xl:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors"
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
            className="xl:hidden bg-background border-b border-border/50 max-h-[calc(100dvh-4rem)] md:max-h-[calc(100dvh-5rem)] overflow-y-auto"
          >
            <div className="container flex flex-col gap-1 py-6">
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-xl hover:bg-muted/30"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pl-4 py-2">
                <span className="text-xs font-medium uppercase tracking-widest text-primary mb-2 block">Explore</span>
                {exploreLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors py-2.5 px-4 rounded-xl hover:bg-muted/30 block"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
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
