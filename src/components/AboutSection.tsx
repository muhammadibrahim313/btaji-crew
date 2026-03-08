import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, FolderGit2, Trophy, Heart } from "lucide-react";

const stats = [
  { icon: Users, label: "Members", value: 7, suffix: "+" },
  { icon: FolderGit2, label: "Projects", value: 10, suffix: "+" },
  { icon: Trophy, label: "Kaggle Grandmaster Led", value: null, suffix: "" },
  { icon: Heart, label: "Community Driven", value: null, suffix: "" },
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container">
        <motion.p
          className="text-sm uppercase tracking-widest text-primary mb-4 text-center"
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0}
        >
          Who We Are
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-6 tracking-tight"
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={1}
        >
          Building Pakistan's Next Gen <span className="gradient-text">AI Talent</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-16"
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={2}
        >
          BTAJI CREW is a community of data scientists, ML engineers, and AI enthusiasts. We learn, build, compete, and grow together. From Kaggle competitions to hackathons, from open-source contributions to knowledge sharing — we are building Pakistan's next generation of AI talent.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-500"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i + 3}
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              {stat.value !== null ? (
                <p className="text-3xl md:text-4xl font-bold mb-1">
                  <CountUp target={stat.value} />
                  {stat.suffix}
                </p>
              ) : (
                <p className="text-lg font-semibold mb-1 gradient-text">{stat.label}</p>
              )}
              {stat.value !== null && (
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
