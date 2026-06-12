import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donation Successful | Rubangatek Ministries",
  description: "Thank you for your generous donation to Rubangatek Ministries.",
};

export default async function DonateSuccessPage(props: {
  searchParams: Promise<{ tx_ref?: string; transaction_id?: string }>;
}) {
  const searchParams = await props.searchParams;
  return (
    <section className="py-20 bg-white">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-4">
          Thank You!
        </h1>
        <p className="text-text-muted text-lg mb-6">
          Your generous donation has been received. Your support brings food, education, and hope to vulnerable elderly and children in Uganda.
        </p>
        {searchParams.tx_ref && (
          <p className="text-xs text-text-muted/60 mb-6">
            Reference: {searchParams.tx_ref}
          </p>
        )}
        <p className="text-text-muted text-sm mb-8">
          A receipt will be sent to your email. If you have any questions,
          please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/stories"
            className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Read Stories of Impact
          </Link>
        </div>
      </div>
    </section>
  );
}
