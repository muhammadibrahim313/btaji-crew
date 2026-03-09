import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden" ref={ref}>
      <div className="section-divider absolute top-0" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-8 font-display text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
          >
            Ready to Join the{" "}
            <span className="gradient-text">Crew?</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto mb-12 leading-relaxed text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Connect with like-minded data science and AI enthusiasts.
            Learn, build, and grow together.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <Button variant="gradient" size="lg" className="text-base px-8 h-12" asChild>
              <a href="https://chat.whatsapp.com/E29f5rozhAo8RbKjA00eSh" target="_blank" rel="noopener noreferrer">
                Join Our Community
                <ArrowRight size={16} className="ml-1" />
              </a>
            </Button>
            <Button variant="ghost-glow" size="lg" className="text-base px-8 h-12" asChild>
              <a href="https://www.linkedin.com/company/btaji-crew" target="_blank" rel="noopener noreferrer">
                Follow on LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
