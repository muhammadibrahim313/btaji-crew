import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Search,
  Trophy,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  certificatePath,
  certificateUrl,
  filterTeams,
  participantCount,
  stormCost,
  stormCostTeams,
  submissionCount,
} from "@/data/stormCost";

const rankColors = [
  "text-amber-200 bg-amber-300/10 border-amber-300/20",
  "text-slate-200 bg-slate-300/10 border-slate-300/20",
  "text-orange-200 bg-orange-300/10 border-orange-300/20",
];

export default function StormCost() {
  const [query, setQuery] = useState("");
  const teams = filterTeams(query);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container pt-28 md:pt-36 pb-24">
        <Link
          to="/competitions"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft size={15} /> All competitions
        </Link>
        <div className="flex flex-wrap items-center gap-3 text-xs mb-5">
          <span className="inline-flex items-center gap-1.5 text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
            <CheckCircle2 size={12} /> Completed
          </span>
          <span className="uppercase tracking-[0.16em] text-muted-foreground">
            BTAJI Crew · Kaggle competition
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight">
              Storm<span className="gradient-text">Cost</span>
            </h1>
            <p className="text-muted-foreground mt-5 text-lg max-w-2xl leading-relaxed">
              {stormCost.description}
            </p>
          </div>
          <Button
            variant="ghost-glow"
            asChild
            className="self-start md:self-auto"
          >
            <a href={stormCost.url} target="_blank" rel="noopener noreferrer">
              Competition on Kaggle <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 pb-8 border-b border-border text-sm">
          <span>
            <strong className="text-lg">{stormCostTeams.length}</strong>{" "}
            <span className="text-muted-foreground">teams</span>
          </span>
          <span>
            <strong className="text-lg">{participantCount}</strong>{" "}
            <span className="text-muted-foreground">participants</span>
          </span>
          <span>
            <strong className="text-lg">{submissionCount}</strong>{" "}
            <span className="text-muted-foreground">submissions</span>
          </span>
          <span className="text-muted-foreground self-center">
            Closed {stormCost.closedDate}
          </span>
        </div>

        <section aria-labelledby="podium-title" className="py-10">
          <h2
            id="podium-title"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5 flex items-center gap-2"
          >
            <Trophy size={14} className="text-primary" /> Leading the way
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {stormCostTeams.slice(0, 3).map((team) => (
              <div
                key={team.rank}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full border ${rankColors[team.rank - 1]}`}
                  >
                    {["1st", "2nd", "3rd"][team.rank - 1]} place
                  </span>
                  <Trophy
                    size={18}
                    className={
                      team.rank === 1
                        ? "text-amber-200"
                        : "text-muted-foreground"
                    }
                  />
                </div>
                <h3 className="text-xl font-semibold font-display break-words">
                  {team.name}
                </h3>
                <div className="flex items-end justify-between gap-2 mt-5">
                  <div>
                    <p className="text-2xl font-display tabular-nums">
                      {team.score}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Private score
                    </p>
                  </div>
                  <Link
                    to={certificatePath(team.members[0])}
                    className="inline-flex gap-1 items-center text-sm text-primary hover:underline"
                  >
                    Certificate <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="leaderboard"
          aria-labelledby="leaderboard-title"
          className="scroll-mt-24"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2
                  id="leaderboard-title"
                  className="text-3xl font-bold font-display"
                >
                  Final leaderboard
                </h2>
                <span className="text-xs rounded-full px-3 py-1 bg-primary/10 border border-primary/20 text-primary">
                  Private standings
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-3 max-w-xl leading-relaxed">
                The final rankings from Kaggle, evaluated on approximately 87%
                of the test data. Higher scores rank first.
              </p>
            </div>
            <div className="relative w-full lg:w-80 shrink-0">
              <label htmlFor="leaderboard-search" className="sr-only">
                Search teams or participants
              </label>
              <Search
                size={17}
                className="absolute left-3.5 top-3.5 text-muted-foreground"
              />
              <input
                id="leaderboard-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a team or participant…"
                className="w-full bg-card border border-border rounded-xl h-11 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary [&::-webkit-search-cancel-button]:appearance-none"
              />
              {query && (
                <button
                  aria-label="Clear search"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-2 p-1.5 text-muted-foreground"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-primary/5 border border-primary/15 p-4 mb-5">
            <Award size={20} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">
                A certificate for each participant.
              </span>{" "}
              Team members share a rank, but each has a separate certificate
              page. Open your certificate to view or download the official PDF.
            </p>
          </div>
          <p role="status" className="text-xs text-muted-foreground mb-3">
            Showing {teams.length} of {stormCostTeams.length} teams
          </p>
          <div className="rounded-2xl border border-border overflow-hidden">
            <div
              className="hidden lg:grid grid-cols-[60px_minmax(0,1fr)_110px_70px_minmax(0,1.5fr)] gap-5 bg-muted/40 px-6 py-4 text-xs uppercase tracking-wider text-muted-foreground"
              aria-hidden="true"
            >
              <span>Rank</span>
              <span>Team</span>
              <span>Score</span>
              <span>Entries</span>
              <span>Participants & certificates</span>
            </div>
            <ol className="divide-y divide-border">
              {teams.map((team) => (
                <li
                  key={team.rank}
                  value={team.rank}
                  className="grid grid-cols-[42px_minmax(0,1fr)] lg:grid-cols-[60px_minmax(0,1fr)_110px_70px_minmax(0,1.5fr)] gap-x-4 gap-y-4 lg:gap-5 px-4 lg:px-6 py-5 bg-card/40 hover:bg-muted/20 transition-colors"
                >
                  <div className="row-span-2 lg:row-span-1">
                    <span
                      aria-label={`Rank ${team.rank}`}
                      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border font-medium text-sm ${team.rank <= 3 ? rankColors[team.rank - 1] : "border-transparent text-muted-foreground"}`}
                    >
                      {team.rank}
                    </span>
                  </div>
                  <div className="min-w-0 self-center">
                    <h3 className="font-medium break-words">{team.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {team.members.length === 1
                        ? "Solo participant"
                        : `${team.members.length} members`}
                    </p>
                  </div>
                  <div className="self-center col-start-2 lg:col-start-auto text-sm tabular-nums">
                    <span className="lg:hidden text-muted-foreground">
                      Score{" "}
                    </span>
                    {team.score}
                    <span className="lg:hidden text-xs text-muted-foreground ml-4">
                      {team.entries} entries
                    </span>
                  </div>
                  <div className="hidden lg:block self-center text-sm text-muted-foreground tabular-nums">
                    {team.entries}
                  </div>
                  <ul className="col-span-2 lg:col-span-1 space-y-3 border-t border-border pt-4 lg:border-0 lg:pt-0">
                    {team.members.map((member) => (
                      <li
                        key={member.username}
                        className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 sm:gap-4"
                      >
                        <a
                          href={`https://www.kaggle.com/${member.username}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-w-0 text-sm break-words hover:text-primary"
                        >
                          {member.name}
                        </a>
                        <Link
                          to={certificatePath(member)}
                          aria-label={`View certificate for ${member.name}`}
                          className="shrink-0 inline-flex items-center gap-1.5 text-xs text-primary border border-primary/20 bg-primary/5 hover:bg-primary/15 rounded-lg px-3 py-2"
                        >
                          <Award size={13} />
                          {certificateUrl(member)
                            ? "Open certificate"
                            : "View certificate"}
                          <ArrowUpRight size={12} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            {teams.length === 0 && (
              <div className="text-center py-16 px-6">
                <Search className="mx-auto text-muted-foreground mb-4" />
                <h3 className="font-medium">
                  No matching teams or participants
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Try a name, Kaggle username, team, or rank.
                </p>
                <Button
                  variant="outline"
                  className="mt-5"
                  onClick={() => setQuery("")}
                >
                  Clear search
                </Button>
              </div>
            )}
          </div>
          <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
            Source:{" "}
            <a
              href={stormCost.leaderboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Kaggle final private leaderboard
            </a>{" "}
            · Recorded {stormCost.sourceDate}. Team names match Kaggle;
            participant names match their issued certificates.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
