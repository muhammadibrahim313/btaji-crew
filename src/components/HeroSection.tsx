import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Orbital glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <div className="absolute inset-0 rounded-full bg-primary/[0.04] blur-[100px] animate-pulse-glow" />
        <div className="absolute inset-20 rounded-full bg-accent/[0.03] blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/40 animate-float" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/40 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "4s" }} />

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease }}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-card text-xs text-muted-foreground mb-10 group hover:border-primary/20 transition-colors duration-500">
            <Sparkles size={14} className="text-primary" />
            <span>Pakistan's Premier AI & Data Science Community</span>
            <ArrowRight size={12} className="text-primary group-hover:translate-x-0.5 transition-transform" />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-8 font-display text-balance"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.15, ease }}
        >
          Where Data Science
          <br />
          Meets{" "}
          <span className="gradient-text relative">
            Community
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-[2px] gradient-bg rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1, ease }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          A passionate crew of data scientists, AI engineers, and builders
          creating impact from Pakistan to the world.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease }}
        >
          <Button variant="gradient" size="lg" className="text-base px-8 h-12" asChild>
            <a href="#team">
              Meet the Team
              <ArrowRight size={16} className="ml-1" />
            </a>
          </Button>
          <Button variant="ghost-glow" size="lg" className="text-base px-8 h-12" asChild>
            <a href="https://chat.whatsapp.com/E29f5rozhAo8RbKjA00eSh" target="_blank" rel="noopener noreferrer">
              Join Us
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-6 h-10 rounded-full border border-muted-foreground/20 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 rounded-full bg-muted-foreground/40"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
