import type { Metadata } from "next";
import Hero from "@/components/Hero";
import DonateInfo from "@/components/DonateInfo";
import DonateWidget from "@/components/DonateWidget";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import Illustration from "@/components/Illustration";
import { donationInfo, faqItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Donate | Rubangatek Ministries",
  description:
    "Support vulnerable elderly and children in Uganda. Donate via card, mobile money, or bank transfer. Your gift provides food, education, and hope.",
};

export default function DonatePage() {
  return (
    <>
      <Hero
        title="Support Our Work"
        subtitle="Your generosity brings food, education, and hope to vulnerable elderly and children in Uganda."
        primaryCta={{ label: "Donate Now", href: "#online-donate" }}
        small
      />

      <section id="online-donate" className="py-16 sm:py-20 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary">
              Donate Online
            </h2>
            <p className="mt-3 text-text-muted max-w-xl mx-auto">
              Give securely by card or mobile money. Every contribution goes directly to supporting the elderly and children we serve.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <DonateWidget />
          </div>
        </div>
      </section>

      <section id="bank-details" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary">
              Other Ways to Give
            </h2>
            <p className="mt-3 text-text-muted">
              You can also support us through bank transfer or mobile money.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <DonateInfo />
              <div className="mt-6 bg-accent/10 border border-accent/20 rounded-xl p-4 text-sm text-text-muted">
                <strong className="text-accent">Note:</strong> After making your
                donation, please use the form below to let us know so we
                can acknowledge your generous support.
              </div>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
                How Your Donation Helps
              </h2>
              <div className="space-y-4 mb-10">
                {donationInfo.howDonationsUsed.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-lg bg-surface-alt border border-secondary/30"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-text-primary text-sm">
                        {item.title}
                      </h3>
                      <p className="text-text-muted text-sm mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
                Frequently Asked Questions
              </h2>
              <FaqSection items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary">
              Let Us Know You Donated
            </h2>
            <p className="mt-3 text-text-muted">
              Fill in your details so we can thank you and keep you updated on
              the impact of your gift.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-secondary/50 shadow-sm p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
