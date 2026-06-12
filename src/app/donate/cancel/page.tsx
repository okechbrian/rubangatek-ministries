import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donation Cancelled | Rubangatek Ministries",
  description: "Your donation was not completed.",
};

export default function DonateCancelPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-4">
          Donation Not Completed
        </h1>
        <p className="text-text-muted text-lg mb-6">
          Your donation was cancelled or did not go through. No charges have been made.
        </p>
        <p className="text-text-muted text-sm mb-8">
          If you experienced any issues, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
          You can also donate via bank transfer or mobile money.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/donate"
            className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
