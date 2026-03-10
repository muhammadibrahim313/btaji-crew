import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, FolderGit2, Trophy, Heart } from "lucide-react";

const stats = [
  { icon: Users, label: "Crew", value: 10, suffix: "+", desc: "Active team members building AI" },
  { icon: FolderGit2, label: "Projects", value: 15, suffix: "+", desc: "Real-world projects shipped" },
  { icon: Trophy, label: "Competitions", value: 5, suffix: "+", desc: "Kaggle & hackathon entries" },
  { icon: Heart, label: "Community", value: 100, suffix: "+", desc: "Members across Pakistan" },
];

const CountUp = ({ target, duration = 1.5 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const ease = [0.23, 1, 0.32, 1] as const;

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 md:py-40 relative" ref={ref}>
      {/* Subtle section divider */}
      <div className="section-divider absolute top-0" />

      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              Who We Are
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-8 font-display text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Building Pakistan's{" "}
            <span className="gradient-text">Next Gen AI Talent</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-base md:text-lg leading-relaxed text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            BTAJI CREW is a community of data scientists, ML engineers, and AI enthusiasts.
            We learn, build, compete, and grow together — from Kaggle competitions to hackathons,
            from open-source contributions to knowledge sharing.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-500">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-bold mb-2 font-display">
                <CountUp target={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </p>
              <p className="text-xs text-muted-foreground">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
