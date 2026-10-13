import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import CommunitySection from "@/components/CommunitySection";
import ResearchLabSection from "@/components/ResearchLabSection";
import CTASection from "@/components/CTASection";
import AlumniSection from "@/components/AlumniSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResearchLabSection />
      <TeamSection />
      <CommunitySection />
      <CTASection />
      <AlumniSection />
      <Footer />
    </div>
  );
};

export default Index;
