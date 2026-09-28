import { PageHero } from "@/components/sections/Shared";
import {
  ContactForm,
  DivisionContacts,
  FAQ,
  VisitUs,
} from "@/components/sections/ContactSections";

export const metadata = {
  title: "Contact",
  description: "Start a conversation with BroadArks or any of its four divisions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a"
        accent="conversation."
        lead="Learners, institutions, industry partners, investors, funders and the simply curious — every useful thing we have built began with somebody writing in."
        meta={[
          { label: "General", value: "hello@broadarks.com" },
          { label: "Phone", value: "+91 11 4000 0000" },
          { label: "Head office", value: "New Delhi, India" },
          { label: "Response time", value: "Within 2 working days" },
        ]}
      />
      <ContactForm />
      <DivisionContacts />
      <VisitUs />
      <FAQ />
    </>
  );
}
