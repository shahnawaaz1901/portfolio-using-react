import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "../sections/Hero";
import { Experience } from "../sections/Experience";
import { Education } from "../sections/Education";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Achievements } from "../sections/Achievements";
import { Footer } from "../sections/Footer";
import { FloatingResume } from "../sections/FloatingResume";
import { Contact } from "../sections/Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <FloatingResume />
    </div>
  );
};

export default Portfolio;
