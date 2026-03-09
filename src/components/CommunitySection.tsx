import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Code2, Trophy, Rocket, Globe, Megaphone } from "lucide-react";

const activities = [
  { icon: BookOpen, title: "Knowledge Sharing", desc: "Resources, tutorials, and insights on Data Science, ML, and AI.", span: "lg:col-span-2" },
  { icon: Code2, title: "Coding Group", desc: "Collaborative coding sessions, reviews, and pair programming.", span: "" },
  { icon: Trophy, title: "Kaggle Competitions", desc: "Compete and learn together on Kaggle as a team.", span: "" },
  { icon: Rocket, title: "Hackathons", desc: "Participate in and organize hackathons for real-world solutions.", span: "" },
  { icon: Globe, title: "General Discussion", desc: "Open space for tech discussions, career advice, and networking.", span: "" },
  { icon: Megaphone, title: "Good Info", desc: "Curated news, opportunities, and updates from the AI/tech world.", span: "lg:col-span-2" },
];

const ease = [0.23, 1, 0.32, 1];

const CommunitySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="community" className="py-28 md:py-40 relative" ref={ref}>
      <div className="section-divider absolute top-0" />

      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-6 font-display"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Explore Our <span className="gradient-text">Activities</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-base md:text-lg text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Everything we do to learn, build, and grow together
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {activities.map((item, i) => (
            <motion.div
              key={item.title}
              className={`glass-card glass-card-hover rounded-2xl p-7 md:p-8 group ${item.span}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-500">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 font-display">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
