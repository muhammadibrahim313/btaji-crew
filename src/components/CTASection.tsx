import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px] animate-pulse-glow" />

      <div className="container relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0}
        >
          Ready to Join the <span className="gradient-text">Crew?</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={1}
        >
          Connect with like-minded data science and AI enthusiasts. Learn, build, and grow together.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={2}
        >
          <Button variant="gradient" size="lg" asChild>
            <a href="#">Join Our Community</a>
          </Button>
          <Button variant="ghost-glow" size="lg" asChild>
            <a href="#">Follow on LinkedIn</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
