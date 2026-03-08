import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Code2, Trophy, Rocket, Globe, Megaphone } from "lucide-react";

const activities = [
  { icon: BookOpen, title: "Knowledge Sharing", desc: "We share resources, tutorials, and insights on Data Science, ML, and AI.", large: true },
  { icon: Code2, title: "Coding Group", desc: "Collaborative coding sessions, code reviews, and pair programming.", large: false },
  { icon: Trophy, title: "Kaggle Competitions", desc: "We compete and learn together on Kaggle as a team.", large: false },
  { icon: Rocket, title: "Hackathons", desc: "We participate in and organize hackathons to build real-world solutions.", large: false },
  { icon: Globe, title: "General Discussion", desc: "Open space for tech discussions, career advice, and networking.", large: false },
  { icon: Megaphone, title: "Good Info", desc: "Curated news, opportunities, and updates from the AI/tech world.", large: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const CommunitySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container">
        <motion.p
          className="text-sm uppercase tracking-widest text-primary mb-4 text-center"
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0}
        >
          What We Do
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-tight"
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={1}
        >
          Explore Our <span className="gradient-text">Activities</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center max-w-lg mx-auto mb-16"
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={2}
        >
          Explore our community spaces and activities
        </motion.p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {activities.map((item, i) => (
            <motion.div
              key={item.title}
              className={`glass-card glass-card-hover rounded-2xl p-6 md:p-8 transition-all duration-500 group ${
                item.large ? "lg:col-span-2" : ""
              }`}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i + 3}
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
