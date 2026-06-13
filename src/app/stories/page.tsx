import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Image from "next/image";
import { stories } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Stories of Hope | Rubangatek Ministries",
  description:
    "Read real stories of resilience and hope from the elderly and children supported by Rubangatek Ministries in Uganda.",
};

const storyImages = [
  "/images/ugandan_children_hero.png",        // Sarah's Story
  "/images/ugandan_children_education.png",   // James Finds Hope
  "/images/ugandan_community_dev.png"         // Mukono Food Drive
];

export default function StoriesPage() {
  return (
    <>
      <Hero
        title="Stories of Hope"
        subtitle="Real stories of resilience, compassion, and community from the people we serve."
        small
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stories.map((story, index) => (
              <article
                key={story.title}
                className="bg-white rounded-xl border border-secondary/50 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-44 sm:h-52 bg-secondary">
                  <Image
                    src={storyImages[index]}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading font-bold text-lg text-text-primary">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-text-muted text-sm leading-relaxed">
                    {story.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-10 text-center">
            Featured Story
          </h2>
          <article className="bg-white rounded-xl border border-secondary/50 shadow-sm overflow-hidden">
            <div className="relative h-48 sm:h-64 bg-secondary">
              <Image
                src={storyImages[0]}
                alt={stories[0].imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-heading font-bold text-2xl text-text-primary mb-4">
                {stories[0].title}
              </h3>
              <div className="text-text-muted leading-relaxed whitespace-pre-line">
                {stories[0].content}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

