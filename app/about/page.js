import { PageHero, CTABand, StatsBand } from "@/components/sections/Shared";
import {
  AboutIntro,
  CultureGrid,
  Founders,
  Story,
  Timeline,
} from "@/components/sections/AboutSections";

export const metadata = {
  title: "About",
  description:
    "BroadArks was founded in March 2020 by Pankaj and Dr. Kaveri Dutta to bring enterprise, technology and human development under one shared ambition.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BroadArks"
        title="One company, four ways of asking"
        accent="the same question."
        lead="Founded in March 2020 by Pankaj and Dr. Kaveri Dutta, BroadArks brings enterprise, technology and human development under one shared ambition: to create meaningful progress for people, businesses and communities."
        meta={[
          { label: "Founded", value: "March 2020" },
          { label: "Headquarters", value: "New Delhi, India" },
          { label: "Structure", value: "Parent company" },
          { label: "Divisions", value: "Four, incl. a foundation" },
        ]}
      />
      <AboutIntro />
      <Story />
      <StatsBand tone="shell" />
      <Founders />
      <Timeline />
      <CultureGrid />
      <CTABand
        eyebrow="Join us"
        title="If this sounds like your kind of work."
        text="We are always interested in people, institutions and partners who think in decades rather than quarters."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/blog", label: "Read the journal" }}
      />
    </>
  );
}
