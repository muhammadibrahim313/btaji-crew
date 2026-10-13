import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResearchSessionList from "@/components/ResearchSessionList";
import { mainSessionCount } from "@/data/researchLab";

export default function Sessions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-5xl pt-32 md:pt-44 pb-24">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-5"><Play size={14} /> Learn with the crew</p>
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Recorded <span className="gradient-text">sessions</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">Explore {mainSessionCount} Research Lab sessions and a bonus LaTeX workshop, with recordings, slides, notes, and practical tasks.</p>
        <Link to="/research-lab" className="text-primary hover:underline">About the Research Lab →</Link>
        <div className="mt-10"><ResearchSessionList /></div>
      </main>
      <Footer />
    </div>
  );
}
