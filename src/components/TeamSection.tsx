import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown } from "lucide-react";

import ibrahimImg from "@/assets/team/ibrahim.jpg";
import bilalImg from "@/assets/team/muhammad_bilal.jfif";
import tayyabImg from "@/assets/team/tayyab.jfif";
import jawadImg from "@/assets/team/muhammad_jawad.jfif";
import fakharImg from "@/assets/team/ahmad_fakhar.jfif";
import imamaImg from "@/assets/team/imama_kainat.jfif";
import hassanImg from "@/assets/team/hassan_mehmood.png";

const team = [
  { name: "Muhammad Ibrahim Qasmi", role: "Founder & Lead", image: ibrahimImg, founder: true },
  { name: "Muhammad Bilal", role: "Research Head & Software Engineer", image: bilalImg, founder: false },
  { name: "Tayyab Sajjad", role: "Software Engineer & AI/ML Engineer", image: tayyabImg, founder: false },
  { name: "Muhammad Jawad", role: "Data Analyst", image: jawadImg, founder: false },
  { name: "Ahmad Fakhar", role: "Analyst", image: fakharImg, founder: false },
  { name: "Imama Kainat", role: "Software Engineer", image: imamaImg, founder: false },
  { name: "Hassan Mehmood", role: "Agentic AI Engineer", image: hassanImg, founder: false },
];

const ease = [0.23, 1, 0.32, 1] as const;

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" className="py-28 md:py-40 relative" ref={ref}>
      <div className="section-divider absolute top-0" />

      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              The Crew
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] font-display"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Meet the <span className="gradient-text">Team</span>
          </motion.h2>
        </div>

        {/* Founder card - featured */}
        <motion.div
          className="max-w-lg mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <div className="glass-card glass-card-hover rounded-3xl p-8 text-center relative overflow-hidden group">
            {/* Subtle gradient glow behind founder */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-primary/5 blur-[60px]" />
            </div>

            <div className="relative">
              <div className="relative mx-auto mb-6 w-28 h-28">
                <div className="absolute -inset-1 rounded-full gradient-bg opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />
                <img
                  src={team[0].image}
                  alt={team[0].name}
                  className="relative w-28 h-28 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                  <Crown size={14} className="text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1 font-display">{team[0].name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{team[0].role}</p>
              <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full gradient-bg text-primary-foreground tracking-wide uppercase">
                Founder
              </span>
            </div>
          </div>
        </motion.div>

        {/* Rest of team */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {team.slice(1).map((member, i) => (
            <motion.div
              key={member.name}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease }}
            >
              <div className="relative mx-auto mb-4 w-20 h-20">
                <div className="absolute -inset-0.5 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-20 h-20 rounded-full object-cover ring-1 ring-border group-hover:ring-primary/30 transition-all duration-500"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">{member.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
