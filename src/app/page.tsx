import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Card from "@/components/Card";
import Illustration from "@/components/Illustration";
import NewsletterSignup from "@/components/NewsletterSignup";
import { programs, stories } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Empowering Vulnerable Lives"
        subtitle="Supporting elderly and children in Uganda through compassion and service."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Our Stories", href: "/stories" }}
      />

      <StatsBar />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary">
              Our Programs
            </h2>
            <p className="mt-3 text-text-muted max-w-2xl mx-auto">
              We run three core programs that address the most urgent needs in our communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, i) => (
              <Card
                key={program.slug}
                title={program.title}
                description={program.summary}
                imageAlt={program.imageAlt}
                illustration={["elderly", "education", "community"][i] as "elderly" | "education" | "community"}
                href={`/programs#${program.slug}`}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/programs"
              className="inline-block px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary">
              Featured Story
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-secondary/50 shadow-sm overflow-hidden">
            <div className="h-48 sm:h-64 bg-secondary" aria-label={stories[0].imageAlt} role="img">
              <Illustration variant="story" className="h-full w-full" />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-primary">
                {stories[0].title}
              </h3>
              <p className="mt-3 text-text-muted leading-relaxed">
                {stories[0].content.slice(0, 300)}...
              </p>
              <Link
                href="/stories"
                className="mt-4 inline-block text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Read full story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/50 rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-2">
              Stay Connected
            </h2>
            <p className="text-text-muted mb-6 max-w-md mx-auto">
              Subscribe to receive updates on our programs, stories of impact, and ways you can help.
            </p>
            <div className="max-w-sm mx-auto">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Your Support Makes a Difference
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Every donation goes directly toward feeding the elderly, educating children, and strengthening communities.
          </p>
          <Link
            href="/donate"
            className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-lg text-lg hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </>
  );
}
