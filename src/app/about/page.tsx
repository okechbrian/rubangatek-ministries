import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Illustration from "@/components/Illustration";
import { aboutContent } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Rubangatek Ministries",
  description:
    "Learn about Rubangatek Ministries' mission, vision, and values. We serve vulnerable elderly and children in Mukono and Jinja City, Uganda.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Learn about our mission, vision, and the communities we serve in Uganda."
        small
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-6">
            Who We Are
          </h2>
          <div className="prose prose-lg max-w-none text-text-muted leading-relaxed whitespace-pre-line">
            {aboutContent.whoWeAre}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-secondary/50 shadow-sm p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                Our Mission
              </h3>
              <p className="text-text-muted leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>
            <div className="bg-white rounded-xl border border-secondary/50 shadow-sm p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                Our Vision
              </h3>
              <p className="text-text-muted leading-relaxed">
                {aboutContent.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((value) => (
              <div
                key={value.title}
                className="bg-surface-alt rounded-xl border border-secondary/30 p-6 text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-bold text-lg text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary text-center mb-12">
            Where We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutContent.whereWeWork.map((place) => (
              <div
                key={place.name}
                className="bg-white rounded-xl border border-secondary/50 shadow-sm overflow-hidden"
              >
                <div className="h-40 bg-secondary" aria-label={`Photo of ${place.name}`} role="img">
                  <Illustration variant="location" className="h-full w-full" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                    {place.name}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {place.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
