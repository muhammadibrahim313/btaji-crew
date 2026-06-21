import { motion } from "framer-motion";
import {
  FlaskConical,
  Github,
  Play,
  FileText,
  Users,
  MessageCircle,
  Youtube,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    status: "Live",
  },
];

const hosts = [
  {
    name: "Muhammad Ibrahim Qasmi",
    role: "Founder · 3× Kaggle Grandmaster · ML Researcher",
  },
  {
    name: "Zulqarnain Ali",
    role: "ML Researcher & Mentor — making hard ideas simple",
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
    href: "https://chat.whatsapp.com/E29f5rozhAo8RbKjA00eSh",
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
            A free, community-led series that takes you from <em>"I want to do research"</em> to
            reading papers, finding gaps, and writing your first one. No fluff. Just the practical
            path.
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
                href="https://chat.whatsapp.com/E29f5rozhAo8RbKjA00eSh"
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
            {["Sessions: 1", "Language: Urdu", "For beginners", "Slides free to use"].map((b) => (
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
            made for students and complete beginners. Every session is recorded, and the slides live
            on GitHub — free — so anyone can follow along at their own pace.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Sessions */}
    <section className="py-16 md:py-20 relative">
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
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-white font-bold shrink-0">
                      {s.num}
                    </div>
                    <div className="md:hidden">
                      <h4 className="font-semibold text-foreground leading-tight">{s.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{s.date}</p>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {s.status}
                      </span>
                      <span className="text-xs text-muted-foreground">{s.date}</span>
                    </div>
                    <h4 className="font-semibold text-foreground leading-tight">{s.title}</h4>
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
