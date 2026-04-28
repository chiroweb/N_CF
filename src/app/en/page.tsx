import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Evidence from "@/components/sections/Evidence";
import InstallationStories from "@/components/sections/InstallationStories";

import ObsessionStack from "@/components/sections/ObsessionStack";
import ClosingQuestion from "@/components/sections/ClosingQuestion";
import Footer from "@/components/sections/Footer";

export default function EnHome() {
  return (
    <>
      {/* Hero — fixed parallax bg, content scrolls over it */}
      <Hero lang="en" />

      {/* Remaining sections sit above the fixed hero bg */}
      <div className="relative z-[3]">
        <Mission lang="en" />
        <Evidence lang="en" />
        <InstallationStories lang="en" />

        <ObsessionStack lang="en" />
        <ClosingQuestion lang="en" />
        <Footer />
      </div>
    </>
  );
}
