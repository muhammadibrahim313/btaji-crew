import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ease = [0.23, 1, 0.32, 1] as const;

const Resources = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-28 md:pt-44 md:pb-40 relative">
      <div className="gradient-mesh absolute inset-0 pointer-events-none" />
      <div className="container relative">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <BookOpen size={12} />
            Resources
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] font-display mb-6">
            Our <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Curated articles, tutorials, and learning materials shared by the BTAJI CREW community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Articles & Blogs", "Tutorials", "Research Papers"].map((title, i) => (
              <motion.div
                key={title}
                className="glass-card rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease }}
              >
                <BookOpen size={28} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Coming Soon
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Resources;
