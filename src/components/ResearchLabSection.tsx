import { motion } from "framer-motion";
import { FlaskConical, Github, Play, FileText, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ease = [0.23, 1, 0.32, 1] as const;

const sessions = [
  {
    num: "01",
    title: "How to Write Your First Research Paper",
    date: "21 Jun 2026",
    video: "https://youtu.be/IMJx7ECaIEk",
    slides:
      "https://github.com/muhammadibrahim313/btaji-crew-research-lab/blob/main/sessions/01-first-research-paper/slides.pdf",
    notes:
      "https://github.com/muhammadibrahim313/btaji-crew-research-lab/tree/main/sessions/01-first-research-paper",
  },
];

const ResearchLabSection = () => {
  return (
    <section id="research-lab" className="py-28 md:py-40 relative overflow-hidden">
      <div className="gradient-mesh absolute inset-0 pointer-events-none" />
      {/* Highlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <Sparkles size={12} />
            New · Now Live
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] font-display mb-6">
            BTAJI Crew <span className="gradient-text">Research Lab</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl text-balance">
            Learn how to actually do research, one session at a time. A free, community-led series
            that takes you from <em>"I want to do research"</em> to reading papers, finding gaps,
            and writing your first one.
          </p>
        </motion.div>

        {/* Sessions list */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Sessions
            </h3>
            <span className="text-xs text-muted-foreground">More on the way →</span>
          </div>

          <div className="space-y-4">
            {sessions.map((s, i) => (
              <motion.div
                key={s.num}
                className="glass-card glass-card-hover rounded-2xl p-6 md:p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                  <div className="flex items-center gap-4 md:w-auto">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {s.num}
                    </div>
                    <div className="md:hidden">
                      <h4 className="font-semibold text-foreground leading-tight">{s.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{s.date}</p>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1">
                    <h4 className="font-semibold text-foreground leading-tight">{s.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{s.date}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="gradient" size="sm" asChild>
                      <a href={s.video} target="_blank" rel="noopener noreferrer">
                        <Play size={14} />
                        Watch
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={s.slides} target="_blank" rel="noopener noreferrer">
                        <FileText size={14} />
                        Slides
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={s.notes} target="_blank" rel="noopener noreferrer">
                        Notes
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA bar */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="gradient" size="lg" asChild>
              <Link to="/research-lab">
                <FlaskConical size={16} />
                Explore Research Lab
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/muhammadibrahim313/btaji-crew-research-lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Star on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchLabSection;
