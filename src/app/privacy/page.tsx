import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Rubangatek Ministries",
  description:
    "Privacy policy for Rubangatek Ministries. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-primary font-semibold hover:text-primary-dark mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-8">
            Privacy Policy
          </h1>

          <div className="text-text-muted leading-relaxed space-y-6 text-sm sm:text-base">
            <p>
              <strong className="text-text-primary">Rubangatek Ministries Ltd</strong> (&ldquo;we,&rdquo;
              &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This policy
              explains how we collect, use, and safeguard your personal information when you visit our
              website or interact with us.
            </p>

            <h2 className="font-heading font-bold text-xl text-text-primary pt-4">
              Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as your name, email address,
              phone number, and message when you fill out a contact form, sign up for our newsletter,
              or make a donation.
            </p>

            <h2 className="font-heading font-bold text-xl text-text-primary pt-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your inquiries and messages</li>
              <li>To process and acknowledge donations</li>
              <li>To send you updates about our programs and impact (if you opt in)</li>
              <li>To improve our website and services</li>
            </ul>

            <h2 className="font-heading font-bold text-xl text-text-primary pt-4">
              Data Protection
            </h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized
              access, alteration, or disclosure. We do not sell, trade, or rent your personal
              information to third parties.
            </p>

            <h2 className="font-heading font-bold text-xl text-text-primary pt-4">
              Third-Party Services
            </h2>
            <p>
              We may use third-party services (such as email delivery platforms) to process your
              data on our behalf. These service providers are contractually obligated to protect
              your data and use it only for the purposes we specify.
            </p>

            <h2 className="font-heading font-bold text-xl text-text-primary pt-4">
              Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal
              data held by us. To exercise these rights, please contact us using the details on
              our <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
            </p>

            <h2 className="font-heading font-bold text-xl text-text-primary pt-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this
              page with an updated effective date.
            </p>

            <div className="border-t border-secondary/50 pt-6 mt-8 text-xs text-text-muted/60">
              Last updated: June 2025
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
