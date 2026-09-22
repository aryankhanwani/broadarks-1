import HeroHome from "@/components/sections/HeroHome";
import DivisionsRail from "@/components/sections/DivisionsRail";
import { FoundersStrip, Principles, Statement } from "@/components/sections/HomeSections";
import { CTABand, JournalTeaser, StatsBand } from "@/components/sections/Shared";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <Statement />
      <DivisionsRail />
      <StatsBand />
      <Principles />
      <FoundersStrip />
      <JournalTeaser />
      <CTABand />
    </>
  );
}
