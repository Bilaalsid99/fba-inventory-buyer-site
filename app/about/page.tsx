import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Independent UK Amazon FBA Inventory Buyer",
  description:
    "Learn about our independent UK service for reviewing Amazon FBA removal, returned, unfulfillable, overstock and excess inventory.",
  alternates: {
    canonical: "/about",
  },
};

const principles = [
  {
    title: "Every list is reviewed individually",
    text: "Inventory varies by category, condition, quantity and location. We do not use a one-size-fits-all buying promise.",
  },
  {
    title: "Clear expectations",
    text: "Submitting inventory does not guarantee an offer, and we may only be interested in part of a submitted list.",
  },
  {
    title: "Practical information first",
    text: "We aim to understand the stock before discussing collection, delivery, pricing or any possible purchase.",
  },
  {
    title: "Independent from Amazon",
    text: "We are an independent inventory buyer and are not affiliated with, endorsed by or operated by Amazon.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              About us
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              An Independent UK Buyer for Amazon FBA Inventory
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We help Amazon sellers review removal, returned, unfulfillable,
              overstock and slow-moving inventory to see whether some or all of
              it may be suitable for purchase.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#quote"
                className="rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Submit an inventory list
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
            <article className="space-y-14">
              <section>
                <h2 className="text-3xl font-bold">What we do</h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Amazon sellers can be left with inventory that no longer fits
                  their normal fulfilment operation. This may include products
                  marked unfulfillable, customer returns, damaged packaging,
                  discontinued lines, excess stock or inventory scheduled for
                  removal.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Rather than assuming the only options are long-term storage or
                  disposal, sellers can send us an inventory report for an
                  individual review.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  The inventory we may review
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Amazon FBA removal inventory",
                    "Unfulfillable inventory",
                    "Customer returns",
                    "Open-box products",
                    "New boxed stock",
                    "Damaged-packaging stock",
                    "Seasonal inventory",
                    "End-of-line products",
                    "Slow-moving stock",
                    "Multi-pallet quantities",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold">How we work</h2>

                <div className="mt-8 space-y-5">
                  {[
                    {
                      title: "You submit the inventory",
                      text: "Send an existing CSV, spreadsheet or inventory report with quantities, condition notes and location details.",
                    },
                    {
                      title: "We review the list",
                      text: "We consider the product category, quantity, condition, packaging, location and likely handling requirements.",
                    },
                    {
                      title: "We discuss what may be suitable",
                      text: "Where there may be interest, we can request further details and discuss the next practical step.",
                    },
                  ].map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-xl border border-slate-200 p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
                          {index + 1}
                        </span>

                        <div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <p className="mt-2 leading-7 text-slate-600">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold">Our approach</h2>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {principles.map((principle) => (
                    <div
                      key={principle.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <h3 className="text-lg font-bold">{principle.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">
                        {principle.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Inventory we cannot accept
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  We do not accept recalled, unsafe, illegal, prohibited or
                  otherwise restricted products. Inventory must be described
                  accurately, and further information may be requested before
                  any decision is made.
                </p>
              </section>

              <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h2 className="text-2xl font-bold">Important information</h2>

                <p className="mt-4 leading-7 text-slate-700">
                  We are not affiliated with Amazon. Sending an inventory list
                  does not create an obligation for either party and does not
                  guarantee that an offer will be made.
                </p>
              </section>
            </article>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-8">
              <h2 className="text-xl font-bold">
                Have Amazon inventory to review?
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Upload the list you already have, even if the removal has not
                yet been arranged.
              </p>

              <Link
                href="/#quote"
                className="mt-6 block rounded-lg bg-emerald-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
              >
                Request a review
              </Link>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="font-semibold">Useful guides</p>

                <div className="mt-4 space-y-3 text-sm">
                  <Link
                    href="/sell-amazon-fba-inventory-uk"
                    className="block font-medium text-emerald-700 hover:underline"
                  >
                    Sell Amazon FBA inventory
                  </Link>

                  <Link
                    href="/remove-amazon-fba-inventory-uk"
                    className="block font-medium text-emerald-700 hover:underline"
                  >
                    FBA removal inventory
                  </Link>

                  <Link
                    href="/amazon-fba-removal-costs-uk"
                    className="block font-medium text-emerald-700 hover:underline"
                  >
                    FBA removal costs
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-emerald-50">
          <div className="mx-auto max-w-6xl px-6 py-14 text-center">
            <h2 className="text-3xl font-bold">
              Send your inventory list for review
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Include the products, quantities, condition and current or
              expected UK location.
            </p>

            <Link
              href="/#quote"
              className="mt-7 inline-block rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Upload inventory
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}