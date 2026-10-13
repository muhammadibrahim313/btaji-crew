import { Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StormCostCard from "@/components/StormCostCard";

const Competitions = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container pt-32 pb-24 md:pt-44 min-h-[80vh]">
      <p className="text-primary text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
        <Trophy size={14} /> Learn. Build. Compete.
      </p>
      <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-5">
        Our <span className="gradient-text">competitions</span>
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
        Real challenges, shared learning, and a place to celebrate the people
        who take them on. Explore our competitions, final results, and
        participant certificates.
      </p>
      <StormCostCard />
    </main>
    <Footer />
  </div>
);
export default Competitions;
