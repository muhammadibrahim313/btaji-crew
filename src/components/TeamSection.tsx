import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown } from "lucide-react";

const team = [
  { name: "Muhammad Ibrahim Qasmi", role: "Founder & Lead", initials: "MI", founder: true },
  { name: "Muhammad Bilal", role: "Research Head & Software Engineer", initials: "MB", founder: false },
  { name: "Tayo Sajjad", role: "Software Engineer & AI/ML Engineer", initials: "TS", founder: false },
  { name: "Muhammad Jawad", role: "Data Analyst", initials: "MJ", founder: false },
  { name: "Ahmed Fakar", role: "Analyst", initials: "AF", founder: false },
  { name: "Imama Junaid", role: "Software Engineer", initials: "IJ", founder: false },
  { name: "Hassan Mahmood", role: "Agentic AI Engineer", initials: "HM", founder: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
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
              {/* Avatar */}
              <div className="relative mx-auto mb-4 w-20 h-20">
                <div className="absolute inset-0 rounded-full gradient-bg opacity-60 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-lg font-bold">
                  {member.initials}
                </div>
                {member.founder && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                    <Crown size={12} className="text-primary-foreground" />
                  </div>
                )}
              </div>

              <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              {member.founder && (
                <span className="inline-block mt-3 text-xs gradient-text font-medium px-3 py-1 rounded-full glass-card">
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
