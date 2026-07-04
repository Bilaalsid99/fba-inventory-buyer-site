import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Thank You | Inventory Quote Received",
  description: "Your inventory list has been received for manual review."
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="container-page flex min-h-[72vh] items-center py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Submission received
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Thank you — your inventory list has been received.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We’ll review it and contact you if we need more information or can provide a quote.
          </p>
          <Link
            href="/"
            className="focus-ring mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Return to homepage
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
