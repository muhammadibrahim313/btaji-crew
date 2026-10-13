import { ArrowRight, ArrowUpRight, CloudLightning } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { participantCount, stormCost, stormCostTeams } from "@/data/stormCost";

export default function StormCostCard() {
  return (
      <article className="mt-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card overflow-hidden">
        <div className="p-7 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Completed
              </span>
              <span className="text-sm text-muted-foreground">
                Kaggle · 2026
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              StormCost
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
              {stormCost.description}
            </p>
            <div className="flex flex-wrap gap-6 mt-7 text-sm">
              <span>
                <strong>{stormCostTeams.length}</strong> teams
              </span>
              <span>
                <strong>{participantCount}</strong> participants
              </span>
              <span>Final results published</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="gradient" asChild>
                <Link to="/competitions/storm-cost">
                  Results & certificates <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <a
                  href={stormCost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Kaggle <ArrowUpRight size={16} />
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center w-48 h-48 rounded-full border border-primary/20 bg-primary/5">
            <CloudLightning
              size={88}
              strokeWidth={1}
              className="text-primary"
            />
          </div>
        </div>
        <div className="border-t border-border px-7 md:px-12 py-4 text-sm text-muted-foreground">
          Hosted by BTAJI Crew Community · Closed {stormCost.closedDate}
        </div>
      </article>
  );
}
