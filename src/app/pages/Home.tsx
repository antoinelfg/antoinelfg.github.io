import { Hero } from "../components/Hero";
import { Bio } from "../components/Bio";
import { ResearchFocus } from "../components/ResearchFocus";
import { FeaturedWork } from "../components/FeaturedWork";
import { Timeline } from "../components/Timeline";
import { InterdisciplinaryNote } from "../components/InterdisciplinaryNote";
import { QuickFacts } from "../components/QuickFacts";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <main>
      <Hero />
      <Bio />
      <ResearchFocus />
      <FeaturedWork />
      <Timeline />
      <InterdisciplinaryNote />
      <QuickFacts />
      <Footer />
    </main>
  );
}