import { FileText, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { researchSessions } from "@/data/researchLab";

export default function ResearchSessionList() {
  return (
    <ol className="space-y-4">
      {researchSessions.map((session) => (
        <li key={session.num}>
          <article className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
                {session.num}
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground mb-2">
                  {session.date} · {session.bonus ? "Bonus workshop · Naima Yaqub" : "Recorded session"}
                </p>
                <h3 className="font-display font-semibold text-lg md:text-xl leading-snug">{session.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{session.focus}.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5 sm:pl-16">
              <Button variant="gradient" size="sm" asChild>
                <a href={session.video} target="_blank" rel="noopener noreferrer" aria-label={`Watch session ${session.num}: ${session.title}`}><Play size={14} /> Watch recording</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={session.slides} target="_blank" rel="noopener noreferrer" aria-label={`Session ${session.num} slides (${session.format})`}><FileText size={14} /> Slides · {session.format}</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href={session.notes} target="_blank" rel="noopener noreferrer" aria-label={`Session ${session.num} notes and task`}>Notes & task</a>
              </Button>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
