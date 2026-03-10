import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Heart } from "lucide-react";

import ibrahimImg from "@/assets/team/ibrahim.jpg";
import bilalImg from "@/assets/team/muhammad_bilal.jfif";
import tayyabImg from "@/assets/team/tayyab.jfif";
import jawadImg from "@/assets/team/muhammad_jawad.jfif";
import fakharImg from "@/assets/team/ahmad_fakhar.jfif";
import imamaImg from "@/assets/team/imama_kainat.jfif";
import hassanImg from "@/assets/team/hassan_mehmood.png";
import harisImg from "@/assets/team/muhammad_haris.jfif";
import zulqarnainImg from "@/assets/team/zulqarnain_ali.jfif";
import moaviaImg from "@/assets/team/moavia.jfif";
import faheemImg from "@/assets/team/faheem.jfif";

const founder = { name: "Muhammad Ibrahim Qasmi", role: "Founder & Lead", image: ibrahimImg };

const coreTeam = [
  // Row 1
  { name: "Zulqarnain Ali", role: "Machine Learning Engineer & Researcher", image: zulqarnainImg },
  { name: "Muhammad Haris Ahsan", role: "Software Engineer", image: harisImg },
  { name: "Hassan Mehmood", role: "Agentic AI Engineer", image: hassanImg },
  // Row 2
  { name: "Tayyab Sajjad", role: "Software Engineer & AI/ML Engineer", image: tayyabImg },
  { name: "Muhammad Jawad", role: "Data Analyst", image: jawadImg },
  { name: "Ahmad Fakhar", role: "Data Analyst", image: fakharImg },
  // Row 3
  { name: "Muhammad Bilal", role: "Research Head & Software Engineer", image: bilalImg },
  { name: "Imama Kainat", role: "Software Engineer", image: imamaImg },
];

const volunteers = [
  { name: "Moavia Hassan", role: "Data Scientist", image: moaviaImg },
  { name: "Muhammad Faheem", role: "AI Engineer", image: faheemImg },
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
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-primary/5 blur-[60px]" />
            </div>

            <div className="relative">
              <div className="relative mx-auto mb-6 w-28 h-28">
                <div className="absolute -inset-1 rounded-full gradient-bg opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="relative w-28 h-28 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                  <Crown size={14} className="text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1 font-display">{founder.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{founder.role}</p>
              <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full gradient-bg text-primary-foreground tracking-wide uppercase">
                Founder
              </span>
            </div>
          </div>
        </motion.div>

        {/* Core team */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {coreTeam.map((member, i) => (
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

        {/* Volunteers section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9, ease }}
        >
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <Heart size={12} className="fill-primary" />
              Star Volunteers
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] font-display">
              Our <span className="gradient-text">Contributors</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-2xl mx-auto">
            {volunteers.map((member, i) => (
              <motion.div
                key={member.name}
                className="glass-card glass-card-hover rounded-2xl p-6 text-center group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + i * 0.1, ease }}
              >
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    <Heart size={8} className="fill-primary" />
                    Volunteer
                  </span>
                </div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
