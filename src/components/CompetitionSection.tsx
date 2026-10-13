import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import StormCostCard from "@/components/StormCostCard";

export default function CompetitionSection() {
  return (
    <section id="competitions" className="py-24 md:py-32 relative scroll-mt-20">
      <div className="section-divider absolute top-0" />
      <div className="container">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-5"><Trophy size={15} /> Community competitions</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">Build skills. <span className="gradient-text">Make your mark.</span></h2>
            <p className="text-muted-foreground text-lg mt-5 max-w-2xl leading-relaxed">Put your learning into practice with the crew. Explore our latest competition, celebrate the participants, and find the final results.</p>
          </div>
          <Link to="/competitions" className="text-sm text-primary hover:underline shrink-0">All competitions →</Link>
        </div>
        <StormCostCard />
      </div>
    </section>
  );
}
