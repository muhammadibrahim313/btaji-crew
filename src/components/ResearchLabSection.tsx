import { ArrowRight, BookOpen, FlaskConical, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mainSessionCount, researchPlaylist } from "@/data/researchLab";

export default function ResearchLabSection() {
  return (
    <section id="research-lab" className="py-24 md:py-32 relative">
      <div className="section-divider absolute top-0" />
      <div className="container">
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-7 md:p-12">
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-5"><FlaskConical size={15} /> Research Lab</p>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">From your first paper<br className="hidden md:block" /> to your own <span className="gradient-text">research.</span></h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-lg">A free research series in Urdu. Learn to read papers, validate a gap, plan experiments, and find a path to publication.</p>
              <p className="mt-5 text-sm text-primary">{mainSessionCount} main sessions · Bonus LaTeX workshop · Slides & notes</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button variant="gradient" asChild><Link to="/research-lab#sessions">Explore all sessions <ArrowRight size={16} /></Link></Button>
                <Button variant="outline" asChild><a href={researchPlaylist} target="_blank" rel="noopener noreferrer"><Play size={15} /> Watch playlist</a></Button>
              </div>
            </div>
            <ol className="space-y-6">
              {[
                ["01–03", "Find a question worth answering", "Read papers, review the literature, and validate your research gap."],
                ["04–05", "Turn your plan into evidence", "Structure your paper, learn LaTeX, and run your first experiment."],
                ["06", "Share your research", "Understand preprints, journals, and the publication process."],
              ].map(([number, title, description]) => (
                <li key={number} className="flex gap-4 border-b border-border/60 pb-6 last:border-0 last:pb-0">
                  <span className="text-xs text-primary font-semibold pt-1 w-12 shrink-0">{number}</span>
                  <div><h3 className="font-semibold mb-2">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{description}</p></div>
                </li>
              ))}
              <li className="flex gap-2 items-center text-xs text-muted-foreground"><BookOpen size={14} /> Start at Session 1. Learn at your own pace.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
