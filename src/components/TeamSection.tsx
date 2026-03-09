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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container">
        <motion.p
          className="text-sm uppercase tracking-widest text-primary mb-4 text-center"
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0}
        >
          The Crew
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight"
          initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={1}
        >
          Meet the <span className="gradient-text">Team</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className={`glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-500 group ${
                member.founder ? "sm:col-span-2 lg:col-span-1 ring-1 ring-primary/20" : ""
              }`}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i + 2}
            >
              <div className="relative mx-auto mb-4 w-20 h-20">
                <div className="absolute inset-0 rounded-full gradient-bg opacity-60 group-hover:opacity-100 transition-opacity blur-sm" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-20 h-20 rounded-full object-cover border-2 border-primary/30"
                />
                {member.founder && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                    <Crown size={12} className="text-primary-foreground" />
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              {member.founder && (
                <span className="inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full gradient-bg text-primary-foreground">
                  Founder
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
