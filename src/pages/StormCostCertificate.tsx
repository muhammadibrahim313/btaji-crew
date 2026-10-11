import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Download,
  FileClock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { certificateUrl, stormCostTeams } from "@/data/stormCost";

export default function StormCostCertificate() {
  const { participantId } = useParams();
  const team = stormCostTeams.find((team) =>
    team.members.some((member) => member.username === participantId),
  );
  const member = team?.members.find(
    (member) => member.username === participantId,
  );
  const pdf = member ? certificateUrl(member) : null;
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container pt-28 md:pt-36 pb-24 min-h-[80vh]">
        <Link
          to="/competitions/storm-cost#leaderboard"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft size={15} /> StormCost leaderboard
        </Link>
        {member && team ? (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Award size={28} className="mx-auto text-primary mb-5" />
              <p className="text-xs uppercase tracking-[0.18em] text-primary mb-4">
                BTAJI Crew · StormCost 2026
              </p>
              <h1 className="text-3xl md:text-5xl font-display font-bold break-words">
                {member.name}
              </h1>
              <p className="text-muted-foreground mt-4">
                Participant certificate
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <dl className="grid sm:grid-cols-3 gap-6 border-b border-border p-6 md:p-8">
                <div>
                  <dt className="text-xs text-muted-foreground mb-2">
                    Final team rank
                  </dt>
                  <dd className="font-display text-2xl">
                    #{team.rank}{" "}
                    <span className="text-sm text-muted-foreground">
                      of {stormCostTeams.length}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground mb-2">Team</dt>
                  <dd className="font-medium break-words">{team.name}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground mb-2">
                    Private score
                  </dt>
                  <dd className="font-display text-2xl tabular-nums">
                    {team.score}
                  </dd>
                </div>
              </dl>
              <div className="p-8 md:p-14 text-center">
                {pdf ? (
                  <>
                    <Award size={40} className="text-primary mx-auto mb-5" />
                    <h2 className="text-2xl font-display font-semibold">
                      Your certificate is ready
                    </h2>
                    <p className="text-muted-foreground mt-3 mb-7">
                      Open the official PDF or download a copy to keep.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Button variant="gradient" asChild>
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                          Open certificate <ArrowUpRight size={16} />
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={pdf} download>
                          Download PDF <Download size={16} />
                        </a>
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <FileClock
                      size={40}
                      className="text-primary mx-auto mb-5"
                    />
                    <h2 className="text-2xl font-display font-semibold">
                      Certificate coming soon
                    </h2>
                    <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mt-4">
                      Thank you for being part of StormCost. Your certificate
                      hasn’t been issued yet. Once it’s ready, you’ll be able to
                      open and download your PDF here.
                    </p>
                    <span className="inline-block mt-7 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-primary">
                      Awaiting certificate
                    </span>
                  </>
                )}
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Kaggle participant:{" "}
              <a
                href={`https://www.kaggle.com/${member.username}`}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @{member.username}
              </a>
            </p>
          </div>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-display font-bold">
              Participant not found
            </h1>
            <p className="text-muted-foreground mt-4">
              This certificate link doesn’t match a StormCost participant.
            </p>
            <Button asChild className="mt-6">
              <Link to="/competitions/storm-cost">
                Find your name on the leaderboard
              </Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
