import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Evidence from "@/components/sections/Evidence";
import InstallationStories from "@/components/sections/InstallationStories";

import ObsessionStack from "@/components/sections/ObsessionStack";
import ClosingQuestion from "@/components/sections/ClosingQuestion";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Hero — fixed parallax bg, content scrolls over it */}
      <Hero />

      {/* Remaining sections sit above the fixed hero bg */}
      <div className="relative z-[3]">
        <Mission />
        <Evidence />
        <InstallationStories />

        <ObsessionStack />
        <ClosingQuestion />
        <Footer />
      </div>
    </>
  );
}
