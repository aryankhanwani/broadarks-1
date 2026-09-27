import { ButtonLink } from "@/components/ArrowLink";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container-x flex min-h-[80svh] flex-col justify-center py-32">
        <span className="eyebrow text-sky">Error 404</span>
        <h1 className="display-1 mt-6 max-w-[14ch] font-sans">This page took a different path.</h1>
        <p className="lead mt-8 max-w-lg text-stone">
          The link may have moved, or the work it pointed to now lives inside one of our divisions.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/divisions" variant="outline">Explore divisions</ButtonLink>
        </div>
      </div>
    </section>
  );
}
