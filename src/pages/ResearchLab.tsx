import { communityInviteUrl } from "@/data/contact";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Github,
  Users,
  MessageCircle,
  Youtube,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResearchSessionList from "@/components/ResearchSessionList";
import { mainSessionCount, researchPlaylist } from "@/data/researchLab";

const ease = [0.23, 1, 0.32, 1] as const;

const hosts = [
  {
    name: "Muhammad Ibrahim Qasmi",
    role: "Founder · 3× Kaggle Grandmaster · ML Researcher",
  },
  {
    name: "Zulqarnain Ali",
    role: "ML Researcher & Mentor",
  },
];

const links = [
  {
    label: "GitHub Repo",
    desc: "All slides, notes & sessions",
    href: "https://github.com/muhammadibrahim313/btaji-crew-research-lab",
    icon: Github,
  },
  {
    label: "YouTube",
    desc: "Recorded sessions",
    href: "https://www.youtube.com/@Btajicrew",
    icon: Youtube,
  },
  {
    label: "WhatsApp Community",
    desc: "Join the conversation",
    href: communityInviteUrl,
    icon: MessageCircle,
  },
];

const ResearchLab = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
      <div className="gradient-mesh absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <FlaskConical size={12} />
            Research Lab
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] font-display mb-6">
            Learn how to actually <span className="gradient-text">do research</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 text-balance">
            Want to write your first research paper? Start here. These free sessions walk you through
            reading papers, finding a research question, running experiments, and sharing your work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <a
                href="https://github.com/muhammadibrahim313/btaji-crew-research-lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Star on GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href={communityInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                Join Community
              </a>
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {[`${mainSessionCount} main sessions + LaTeX bonus`, "Language: Urdu", "For beginners", "Slides free to use"].map((b) => (
              <span
                key={b}
                className="text-xs px-3 py-1.5 rounded-full bg-muted/40 border border-border/50 text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* What this is */}
    <section className="py-16 md:py-20 relative">
      <div className="container max-w-4xl">
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-primary" size={22} />
            <h2 className="text-2xl md:text-3xl font-bold font-display">What this is</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            BTAJI Crew Research Lab is an open series of live sessions on how to do real research,
            made for students and complete beginners. Watch the recordings whenever you like,
            and use the free slides and notes on GitHub to follow along.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Sessions */}
    <section id="sessions" className="py-16 md:py-20 relative scroll-mt-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                <Sparkles size={12} />
                Sessions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display">All Sessions</h2>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Follow the six main sessions in order, with a bonus LaTeX workshop after Session 4.
            Each recording includes slides, notes, and a practical task.
          </p>
          <Button variant="outline" className="mb-8" asChild>
            <a href={researchPlaylist} target="_blank" rel="noopener noreferrer">Watch the full playlist</a>
          </Button>
          <div className="space-y-4">
            <ResearchSessionList />

            {/* Coming soon placeholder */}
            <div className="rounded-2xl p-6 md:p-7 border border-dashed border-border/60 text-center">
              <p className="text-sm text-muted-foreground">
                More sessions are on the way.{" "}
                <a
                  href="https://github.com/muhammadibrahim313/btaji-crew-research-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Star the repo
                </a>{" "}
                to get notified.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Who runs it */}
    <section className="py-16 md:py-20 relative">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-primary" size={22} />
            <h2 className="text-3xl md:text-4xl font-bold font-display">Who runs it</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {hosts.map((h) => (
              <div key={h.name} className="glass-card glass-card-hover rounded-2xl p-6">
                <h4 className="font-semibold text-foreground mb-1">{h.name}</h4>
                <p className="text-sm text-muted-foreground">{h.role}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Guest hosts join us for some sessions.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Join us / Links */}
    <section className="py-16 md:py-24 relative">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Join us</h2>
          <p className="text-muted-foreground">
            If these sessions help you, share them with one friend who wants to start doing research.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-2xl p-6 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{l.label}</h4>
                  <p className="text-sm text-muted-foreground">{l.desc}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ResearchLab;
