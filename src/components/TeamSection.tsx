import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Linkedin } from "lucide-react";

import ibrahimImg from "@/assets/team/ibrahim.jpg";
import imamaImg from "@/assets/team/imama_kainat.jfif";
import harisImg from "@/assets/team/muhammad_haris.jfif";
import zulqarnainImg from "@/assets/team/zulqarnain_ali.jfif";
import faheemImg from "@/assets/team/faheem.jfif";

const founder = { name: "Muhammad Ibrahim Qasmi", role: "Founder & Lead", image: ibrahimImg, linkedin: "https://www.linkedin.com/in/ibrahimqasmi313/" };

const coreTeam = [
  { name: "Zulqarnain Ali", role: "Machine Learning Engineer & Researcher", image: zulqarnainImg, linkedin: "https://www.linkedin.com/in/zulqarnainalipk/" },
  { name: "Muhammad Haris Ahsan", role: "Software Engineer", image: harisImg },
  { name: "Imama Kainat", role: "Software Engineer", image: imamaImg },
  { name: "Muhammad Faheem", role: "Community Admin & AI Engineer", image: faheemImg },
];

const ease = [0.23, 1, 0.32, 1] as const;

const LinkedInButton = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full bg-[hsl(210,80%,50%)]/10 text-[hsl(210,80%,55%)] border border-[hsl(210,80%,50%)]/20 hover:bg-[hsl(210,80%,50%)]/20 hover:border-[hsl(210,80%,50%)]/40 transition-all duration-300 mt-3"
  >
    <Linkedin size={11} />
    LinkedIn
  </a>
);

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
              <p className="text-sm text-muted-foreground mb-1">{founder.role}</p>
              <p className="text-xs text-primary/80 font-medium mb-4">Pakistan's Youngest Kaggle 3× Grandmaster</p>
              <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full gradient-bg text-primary-foreground tracking-wide uppercase">
                Founder
              </span>
              <div className="flex justify-center">
                <LinkedInButton href={founder.linkedin} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
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
              <div className="flex justify-center">
                {member.linkedin && <LinkedInButton href={member.linkedin} />}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TeamSection;
