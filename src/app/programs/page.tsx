import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Illustration from "@/components/Illustration";
import { programs } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Programs | Rubangatek Ministries",
  description:
    "Rubangatek Ministries runs three core programs: Elderly Support, Child Education Support, and Community Outreach in Mukono and Jinja, Uganda.",
};

const illustrationMap: Record<string, "elderly" | "education" | "community"> = {
  "elderly-support": "elderly",
  "child-education": "education",
  "community-outreach": "community",
};

export default function ProgramsPage() {
  return (
    <>
      <Hero
        title="Our Programs"
        subtitle="We run three core programs to serve the most vulnerable in our communities."
        small
      />

      {programs.map((program, index) => (
        <section
          key={program.slug}
          id={program.slug}
          className={`py-16 sm:py-20 ${index % 2 === 0 ? "bg-white" : "bg-surface-alt"}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="h-64 sm:h-80 rounded-xl overflow-hidden bg-secondary shadow-sm" aria-label={program.imageAlt} role="img">
                  <Illustration variant={illustrationMap[program.slug]} className="h-full w-full" />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-4">
                  {program.title}
                </h2>
                <div className="text-text-muted leading-relaxed whitespace-pre-line">
                  {program.description}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
