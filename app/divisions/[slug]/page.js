import { notFound } from "next/navigation";
import { DIVISIONS } from "@/data/site";
import { CTABand } from "@/components/sections/Shared";
import {
  DivisionBody,
  DivisionClosing,
  DivisionHero,
  OtherDivisions,
} from "@/components/sections/DivisionSections";

export function generateStaticParams() {
  return DIVISIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const d = DIVISIONS.find((x) => x.slug === slug);
  if (!d) return {};
  return { title: d.name, description: d.summary };
}

export default async function DivisionPage({ params }) {
  const { slug } = await params;
  const d = DIVISIONS.find((x) => x.slug === slug);
  if (!d) notFound();

  return (
    <>
      <DivisionHero d={d} />
      <DivisionBody d={d} />
      <DivisionClosing d={d} />
      <OtherDivisions current={d.slug} />
      <CTABand
        eyebrow={`Work with ${d.name}`}
        title="Start the conversation."
        text="Tell us what you are trying to build, and we will point you to the right people inside the division."
        primary={{ href: "/contact", label: "Contact us" }}
        secondary={{ href: "/divisions", label: "All divisions" }}
      />
    </>
  );
}
