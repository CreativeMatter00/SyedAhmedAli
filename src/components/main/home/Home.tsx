

import { HeroSection } from "./Hero";
import { AboutSection } from "./About";
import { AchievementsSection } from "./Achievements";
import { ExpertiseSection } from "./Expertise";
import { ProjectsSection } from "./Projects";
import { TestimonialsSection } from "./Testimonials";
import { ContactSection } from "./Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full ">
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ExpertiseSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
