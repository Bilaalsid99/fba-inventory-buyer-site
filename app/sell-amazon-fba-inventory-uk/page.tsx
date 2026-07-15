import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sell Amazon FBA Inventory UK | Independent Inventory Buyer",
  description:
    "Sell Amazon FBA removal, returned, unfulfillable, overstock or slow-moving inventory in the UK. Upload your stock list for an individual review.",
  alternates: {
    canonical: "/sell-amazon-fba-inventory-uk",
  },
};

export default function SellAmazonFbaInventoryUkPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Independent UK inventory buyer
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Sell Your Amazon FBA Inventory in the UK
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Have Amazon FBA stock that is being removed, returned, marked
            unfulfillable or taking up storage space? Send us your inventory
            list and we will review whether any of it may be suitable to buy.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#quote"
              className="rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Upload your inventory list
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

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <article className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold">
                What types of Amazon inventory can you submit?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We review stock lists individually. Inventory does not
                necessarily need to be brand new or already removed from
                Amazon.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "FBA removal inventory",
                  "Unfulfillable inventory",
                  "Customer returns",
                  "Open-box products",
                  "New boxed stock",
                  "Damaged packaging",
                  "Slow-moving inventory",
                  "Seasonal or end-of-line stock",
                  "Overstock and excess stock",
                  "Multi-pallet inventory",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                Why sell stock instead of disposing of it?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Stock that no longer works within your Amazon operation may
                still have value elsewhere. Before paying for disposal or
                abandoning inventory, it may be worth having the list reviewed.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                This can be particularly useful when storage costs are
                increasing, a product line has been discontinued, packaging has
                been damaged or the inventory is no longer suitable for sale as
                new on Amazon.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold">How the process works</h2>

              <ol className="mt-6 space-y-5">
                <li className="rounded-lg border border-slate-200 p-5">
                  <strong>1. Upload your stock list</strong>
                  <p className="mt-2 text-slate-600">
                    Send a CSV, Excel or similar inventory file together with
                    the approximate quantity and condition.
                  </p>
                </li>

                <li className="rounded-lg border border-slate-200 p-5">
                  <strong>2. We review the inventory</strong>
                  <p className="mt-2 text-slate-600">
                    Each list is considered individually. We may ask for
                    photographs, product identifiers or additional condition
                    details.
                  </p>
                </li>

                <li className="rounded-lg border border-slate-200 p-5">
                  <strong>3. We respond with the next step</strong>
                  <p className="mt-2 text-slate-600">
                    If the stock may be suitable, we will discuss quantities,
                    location, collection and a possible offer.
                  </p>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                You can submit the list before arranging removal
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                You do not always need to wait until the inventory arrives at
                your premises. If you already have an Amazon inventory report
                or removal list, send it to us for an initial review.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Please include as much information as possible about product
                condition, quantities, packaging and where the inventory will
                be held.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold">Important limitations</h2>

              <p className="mt-4 leading-7 text-slate-600">
                We cannot guarantee an offer and may not be able to buy every
                product on a submitted list. We do not accept recalled, unsafe,
                illegal, prohibited or otherwise restricted products.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                We are an independent inventory buyer and are not affiliated
                with Amazon.
              </p>
            </section>
          </article>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-8">
            <h2 className="text-xl font-bold">Have inventory to review?</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Upload your list even if you are unsure whether the stock is
              suitable.
            </p>

            <Link
              href="/#quote"
              className="mt-6 block rounded-lg bg-emerald-700 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-800"
            >
              Request a review
            </Link>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <p className="font-semibold">Related guides</p>

              <div className="mt-3 space-y-3 text-sm">
                <Link
                  href="/remove-amazon-fba-inventory-uk"
                  className="block text-emerald-700 hover:underline"
                >
                  Amazon FBA removal inventory
                </Link>

                <Link
                  href="/amazon-fba-removal-costs-uk"
                  className="block text-emerald-700 hover:underline"
                >
                  Amazon FBA removal costs
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}