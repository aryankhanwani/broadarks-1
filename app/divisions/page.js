import { DIVISIONS } from "@/data/site";
import { CTABand, PageHero } from "@/components/sections/Shared";
import { DivisionBlock } from "@/components/sections/DivisionSections";

export const metadata = {
  title: "Divisions",
  description:
    "Y&Now, Vihanga.ai, Karigreen and BroadArks Foundation — four divisions, one shared ambition.",
};

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="One World · Four Divisions"
        title="Different problems."
        accent="The same measure."
        lead="Future skills, advanced technology, responsible commerce and social development. Each division carries its own market and its own timeline — and each is judged by what changes for the people it serves."
        meta={[
          { label: "Divisions", value: "Four" },
          { label: "Since", value: "2020" },
          { label: "Footprint", value: "India & beyond" },
          { label: "Structure", value: "Ventures + Foundation" },
        ]}
      />
      {DIVISIONS.map((d, i) => (
        <DivisionBlock key={d.slug} d={d} i={i} />
      ))}
      <CTABand
        eyebrow="Partner with a division"
        title="Tell us which future you are building."
        text="Institutions, industry partners, investors and collaborators — every division is open to the right conversation."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/about", label: "About BroadArks" }}
      />
    </>
  );
}
