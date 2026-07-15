import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Amazon FBA Removal Costs UK | Costs to Consider",
  description:
    "Understand the costs involved when removing Amazon FBA inventory in the UK, including removal, transport, handling, storage and disposal.",
  alternates: {
    canonical: "/amazon-fba-removal-costs-uk",
  },
};

const overlookedCosts = [
  {
    title: "Removal charges",
    text: "The per-unit amount charged for processing and removing inventory from Amazon fulfilment centres.",
  },
  {
    title: "Transport and delivery",
    text: "The cost of moving cartons or pallets from the receiving address to your own premises or another warehouse.",
  },
  {
    title: "Warehouse receiving",
    text: "A warehouse may charge to unload, count, book in and process the incoming stock.",
  },
  {
    title: "Inspection and grading",
    text: "Returned or unfulfillable items may need to be opened, tested, photographed or classified by condition.",
  },
  {
    title: "Repackaging",
    text: "Damaged boxes, missing labels or opened products may require replacement packaging before resale.",
  },
  {
    title: "Storage",
    text: "Stock removed without a clear resale plan can continue generating costs outside Amazon.",
  },
  {
    title: "Disposal",
    text: "Items that cannot be sold may still require paid recycling, waste handling or specialist disposal.",
  },
  {
    title: "Staff time",
    text: "Sorting, counting, listing and managing mixed-condition inventory takes time even when handled internally.",
  },
];

const options = [
  {
    title: "Remove and resell",
    benefit: "Greater control over how and where the stock is sold.",
    drawback: "Requires storage, handling, time and a resale route.",
  },
  {
    title: "Sell to an inventory buyer",
    benefit: "May simplify recovery from a larger quantity of stock.",
    drawback:
      "An offer is not guaranteed and may cover only part of the inventory.",
  },
  {
    title: "Dispose of the stock",
    benefit: "Removes the operational burden quickly.",
    drawback: "Provides no resale recovery and disposal charges may apply.",
  },
];

export default function AmazonFbaRemovalCostsUkPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              FBA removal planning
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              Amazon FBA Removal Costs in the UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              The removal fee shown inside Amazon is only one part of the total
              cost. Sellers may also need to account for transport, receiving,
              inspection, storage, sorting and disposal after inventory leaves
              the fulfilment centre.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#quote"
                className="rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Have your inventory reviewed
              </Link>

              <Link
                href="/remove-amazon-fba-inventory-uk"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Read about FBA removals
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
            <article className="space-y-14">
              <section>
                <h2 className="text-3xl font-bold">
                  What affects the cost of an FBA removal?
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Amazon removal charges can vary depending on product size,
                  weight, quantity, fulfilment programme and the removal method
                  selected.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Current charges should always be checked directly through
                  Seller Central or Amazon&apos;s current fee schedule before a
                  removal order is created.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Costs sellers sometimes overlook
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  The total cost often continues after the stock has left
                  Amazon. These additional expenses can affect whether removal,
                  resale or disposal is the most practical choice.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {overlookedCosts.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <h3 className="text-lg font-bold">{item.title}</h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Consider the total recovery value
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  A removal decision should not be based only on the original
                  retail value of the products. The more useful question is
                  what the inventory is realistically worth after condition,
                  demand, handling, storage and resale costs are considered.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  A product that originally sold at a high price may have
                  limited recovery value if its packaging is damaged, parts are
                  missing or demand has fallen. Lower-value products may still
                  be suitable where quantities are meaningful and a practical
                  resale route exists.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Removal, resale or disposal?
                </h2>

                <div className="mt-8 space-y-5">
                  {options.map((option) => (
                    <div
                      key={option.title}
                      className="rounded-xl border border-slate-200 p-6"
                    >
                      <h3 className="text-xl font-bold">{option.title}</h3>

                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                            Possible benefit
                          </p>

                          <p className="mt-2 leading-7 text-slate-600">
                            {option.benefit}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                            Possible drawback
                          </p>

                          <p className="mt-2 leading-7 text-slate-600">
                            {option.drawback}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  When should you request an inventory review?
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Consider submitting the inventory list before arranging
                  disposal, especially where the stock includes usable
                  products, customer returns, damaged packaging, seasonal
                  goods, discontinued lines or larger quantities.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  You can upload an inventory report even if you have not yet
                  created the removal order. This may help you decide where the
                  stock should be delivered and whether removal is worthwhile.
                </p>
              </section>

              <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h2 className="text-2xl font-bold">Important note</h2>

                <p className="mt-4 leading-7 text-slate-700">
                  This guide provides general information and does not
                  reproduce Amazon&apos;s current fee schedule. Fees and
                  programme rules can change, so confirm current figures
                  through official Amazon seller resources before making a
                  financial decision.
                </p>
              </section>
            </article>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-8">
              <h2 className="text-xl font-bold">
                Compare removal with selling the stock
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Send us your inventory list for an individual review before
                committing to disposal or long-term storage.
              </p>

              <Link
                href="/#quote"
                className="mt-6 block rounded-lg bg-emerald-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
              >
                Submit inventory
              </Link>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="font-semibold">Related guides</p>

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
                    What to do with removal inventory
                  </Link>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="text-sm leading-6 text-slate-500">
                  Independent UK inventory buyer. Not affiliated with Amazon.
                  Submitting a list does not guarantee an offer.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-emerald-50">
          <div className="mx-auto max-w-6xl px-6 py-14 text-center">
            <h2 className="text-3xl font-bold">
              Have removal inventory to review?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Upload the inventory report even if you are still deciding
              whether to remove, store, resell or dispose of the stock.
            </p>

            <Link
              href="/#quote"
              className="mt-7 inline-block rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Request a free inventory review
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}