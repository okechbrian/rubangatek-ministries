import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import NewsletterSignup from "@/components/NewsletterSignup";
import { UgandaMapOutline } from "@/components/UgandaMapMask";

export const metadata: Metadata = {
  title: "Rubangatek Ministries | NGO supporting Elderly & Children in Uganda",
  description: "Supporting vulnerable elderly and children in Mukono and Jinja City, Uganda through compassion, dignity, and service.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero
        title="Justice begins where inequality ends"
        subtitle="We are building a world where everyone has the power to shape their lives, starting with the vulnerable elderly and children of Uganda."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Our Stories", href: "/stories" }}
      />

      {/* 2. "Make a Difference" Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-wider text-xs bg-accent/10 px-3.5 py-1.5 rounded-full">
              Who We Are
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mt-4">
              Make a Difference
            </h2>
            <p className="mt-4 text-text-muted max-w-xl mx-auto text-base sm:text-lg">
              Through direct outreach and community networks, we support those who are most vulnerable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card
              title="Free Access"
              description="A group of private donors covers all operating costs so 100% of your donation directly funds our programs."
              customRadius={true}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                </svg>
              }
            />
            <Card
              title="Locals For Locals"
              description="We operate directly inside Mukono and Jinja, working alongside community elders to make a targeted impact."
              customRadius={true}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            <Card
              title="Real Impact"
              description="Every gift directly buys food sacks, pays school tuitions, and secures basic medicine for those we serve."
              customRadius={true}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <Card
              title="Safety Net"
              description="We act as a vital safety net, protecting senior citizens from isolation and ensuring orphans keep learning."
              customRadius={true}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* 3. "Changing Lives with Knowledge" Section */}
      <section className="py-20 sm:py-24 bg-[#FDFBF7] border-b border-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Overlapping Circle Images */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[420px] aspect-square">
                
                {/* Large Center Circle */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden border-[6px] border-[#FDFBF7] shadow-xl z-10">
                  <Image
                    src="/images/ugandan_children_knowledge.png"
                    fill
                    className="object-cover"
                    alt="Ugandan children learning"
                  />
                </div>

                {/* Overlapping Circle (Bottom Left) */}
                <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-[6px] border-[#FDFBF7] shadow-lg z-20">
                  <Image
                    src="/images/ugandan_children_education.png"
                    fill
                    className="object-cover"
                    alt="Young Ugandan boy holding notebook"
                  />
                </div>

                {/* Overlapping Circle (Top Right) */}
                <div className="absolute top-4 right-2 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-[6px] border-[#FDFBF7] shadow-md z-0">
                  <Image
                    src="/images/ugandan_community_dev.png"
                    fill
                    className="object-cover"
                    alt="Ugandan agricultural community"
                  />
                </div>

                {/* Decorative Dots */}
                <div className="absolute bottom-[28%] right-[8%] w-4 h-4 bg-accent rounded-full" />
                <div className="absolute top-[30%] left-[8%] w-3 h-3 bg-primary rounded-full" />
                <div className="absolute bottom-4 left-[35%] w-3.5 h-3.5 bg-[#3CA9FC] rounded-full" />
              </div>
            </div>

            {/* Right Column: Copy Content */}
            <div className="lg:col-span-6 text-left">
              <span className="text-accent font-bold uppercase tracking-wider text-xs bg-accent/10 px-3 py-1 rounded-full">
                Our Promise
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mt-4 mb-6 leading-tight">
                Changing Lives with Knowledge
              </h2>
              <p className="text-text-primary font-semibold text-lg mb-4">
                Our promise is that your giving does exactly what it is supposed to: changing lives.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Today, we work to deliver life-saving aid to the elderly on the edge of survival in Jinja and Mukono. Tomorrow, we work alongside community members to restore job opportunities, encourage local farming, and ensure orphaned children receive quality education.
              </p>

              <div className="flex flex-row items-center gap-6 flex-wrap">
                <Link
                  href="/about"
                  className="px-8 py-3 bg-[#111111] hover:bg-primary text-white font-semibold rounded-full text-base transition-colors duration-200"
                >
                  Learn More
                </Link>
                
                <Link
                  href="/stories"
                  className="group flex items-center gap-3 text-text-primary font-bold hover:text-accent transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg className="w-4 h-4 text-primary group-hover:text-accent fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Watch Stories
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. "Featured Campaigns" Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-wider text-xs bg-accent/10 px-3.5 py-1.5 rounded-full">
              We Need Your Help
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mt-4">
              Featured Campaigns
            </h2>
            <p className="mt-4 text-text-muted max-w-xl mx-auto text-base sm:text-lg">
              Support one of our active localized programs in Uganda. Every campaign is fully active.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <Card
              title="Elderly Food & Dignified Care"
              description="Providing maize flour, beans, clinic visit support, and monthly wellness check-ins to senior citizens who live alone."
              imageSrc="/images/ugandan_elderly_care.png"
              progress={100}
              progressText="ABSA Bank Acc: 6008979713"
              href="/donate"
            />
            <Card
              title="Child Education & School Fees"
              description="Paying school tuitions, uniforms, books, and providing guidance to orphans and vulnerable children in primary/secondary school."
              imageSrc="/images/ugandan_children_education.png"
              progress={100}
              progressText="Mobile MM: 0771769971"
              href="/donate"
            />
            <Card
              title="Community Farm & Dev Outreach"
              description="Distributing agricultural seeds, tools, and training classes to Jinja and Mukono families to encourage self-sustainability."
              imageSrc="/images/ugandan_community_dev.png"
              progress={100}
              progressText="Airtel MM: 0752881035"
              href="/donate"
            />
          </div>
        </div>
      </section>

      {/* 5. "Volunteer Positions Available" Section */}
      <section className="py-20 sm:py-24 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Stats & Copy */}
            <div className="lg:col-span-6 text-left">
              <span className="text-accent font-bold uppercase tracking-wider text-xs bg-accent/10 px-3 py-1 rounded-full">
                Join Our Mission
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mt-4 mb-6 leading-tight">
                Volunteer Positions Available
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
                We always welcome volunteers, partners, and friends to join us on the ground. Whether you want to assist with food distribution, mentoring children, or managing community outreach, your hands and heart will find a purpose here.
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-white rounded-2xl border border-secondary/30 shadow-sm">
                  <div className="text-3xl font-heading font-bold text-primary">150+</div>
                  <div className="text-sm text-text-muted mt-1 uppercase font-semibold tracking-wider">Elderly Cared For</div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-secondary/30 shadow-sm">
                  <div className="text-3xl font-heading font-bold text-primary">200+</div>
                  <div className="text-sm text-text-muted mt-1 uppercase font-semibold tracking-wider">Children Sponsored</div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-secondary/30 shadow-sm">
                  <div className="text-3xl font-heading font-bold text-primary">15+</div>
                  <div className="text-sm text-text-muted mt-1 uppercase font-semibold tracking-wider">Communities Reached</div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-secondary/30 shadow-sm">
                  <div className="text-3xl font-heading font-bold text-primary">2</div>
                  <div className="text-sm text-text-muted mt-1 uppercase font-semibold tracking-wider">Active Districts</div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[#111111] hover:bg-primary text-white font-semibold rounded-full text-base transition-colors duration-200"
              >
                Apply as Volunteer
              </Link>
            </div>

            {/* Right Column: Stylized Uganda Map outline with district markings */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[400px] aspect-square">
                
                {/* SVG Map of Uganda */}
                <div className="w-full h-full text-primary/10">
                  <UgandaMapOutline
                    fillColor="url(#bottom-map-gradient)"
                    className="w-full h-full drop-shadow-xl"
                  />
                </div>

                {/* Gradient Definition */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="bottom-map-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2e8f87" stopOpacity="0.12" />
                      <stop offset="50%" stopColor="#F28C35" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#2e8f87" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Map Overlay Markers */}
                {/* Kampala Marker */}
                <div className="absolute left-[41%] top-[72%] -translate-x-1/2 -translate-y-1/2 group z-20">
                  <div className="w-3 h-3 bg-primary rounded-full relative z-10" />
                  <div className="w-3 h-3 bg-primary rounded-full absolute top-0 left-0 animate-ping opacity-75" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[10px] font-bold text-text-primary px-2 py-0.5 rounded shadow border border-secondary/50 whitespace-nowrap">
                    Kampala
                  </span>
                </div>

                {/* Mukono Marker */}
                <div className="absolute left-[43%] top-[72%] -translate-x-1/2 -translate-y-1/2 group z-30">
                  <div className="w-3.5 h-3.5 bg-accent rounded-full relative z-10" />
                  <div className="w-3.5 h-3.5 bg-accent rounded-full absolute top-0 left-0 animate-ping opacity-75" />
                  <span className="absolute left-1/2 top-4 -translate-x-1/2 bg-primary text-[10px] font-bold text-white px-2 py-0.5 rounded shadow whitespace-nowrap group-hover:scale-105 transition-transform z-40">
                    Mukono (Base)
                  </span>
                </div>

                {/* Jinja City Marker */}
                <div className="absolute left-[50%] top-[70%] -translate-x-1/2 -translate-y-1/2 group z-20">
                  <div className="w-3.5 h-3.5 bg-accent rounded-full relative z-10" />
                  <div className="w-3.5 h-3.5 bg-accent rounded-full absolute top-0 left-0 animate-ping opacity-75" />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-[10px] font-bold text-white px-2 py-0.5 rounded shadow whitespace-nowrap">
                    Jinja City
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Newsletter Signup Section */}
      <section className="py-20 sm:py-24 bg-white border-t border-secondary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-secondary/20 rounded-3xl p-8 sm:p-12 border border-secondary/50">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-3">
              Stay Connected
            </h2>
            <p className="text-text-muted mb-8 max-w-md mx-auto text-sm sm:text-base">
              Subscribe to receive updates on our programs, stories of impact, and ways you can get involved.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
