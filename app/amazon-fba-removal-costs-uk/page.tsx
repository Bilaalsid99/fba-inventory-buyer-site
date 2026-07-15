import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amazon FBA Removal Costs UK | Costs to Consider",
  description:
    "Understand the costs involved when removing Amazon FBA inventory in the UK, including removal, transport, handling, storage and disposal.",
  alternates: {
    canonical: "/amazon-fba-removal-costs-uk",
  },
};

export default function AmazonFbaRemovalCostsUkPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-700">
            FBA removal planning
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Amazon FBA Removal Costs in the UK
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            The removal fee shown inside Amazon is only one part of the total
            cost. Sellers may also need to account for transport, receiving,
            inspection, storage, sorting and disposal after the stock leaves
            the fulfilment centre.
          </p>

          <Link
            href="/#quote"
            className="mt-8 inline-block rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            Have your inventory reviewed
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <article className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold">
                What affects the cost of an FBA removal?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Amazon removal charges can vary according to factors such as
                product size, weight, quantity, fulfilment programme and the
                removal method selected.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Current charges should always be checked directly in your
                Seller Central account or Amazon&apos;s current fee schedule
                before creating a removal order.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                Costs sellers sometimes overlook
              </h2>

              <div className="mt-6 space-y-5">
                {[
                  {
                    title: "Removal charges",
                    text: "The per-unit amount charged for processing and removing inventory from fulfilment centres.",
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
                    text: "Damaged boxes, missing labels or opened products may require new packaging before resale.",
                  },
                  {
                    title: "Storage",
                    text: "Stock that is removed without a clear resale plan can continue generating costs outside Amazon.",
                  },
                  {
                    title: "Disposal",
                    text: "Items that cannot be sold may still require paid recycling, waste handling or specialist disposal.",
                  },
                  {
                    title: "Staff time",
                    text: "Sorting, counting, listing and dealing with mixed-condition stock takes time even when handled internally.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 p-5"
                  >
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                Think about the total recovery value
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                A removal decision should not be based only on the original
                retail value of the products. The relevant question is what the
                stock is realistically worth after condition, demand, handling,
                storage and resale costs are considered.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                A product that originally sold at a high price may have limited
                recovery value if it has damaged packaging, missing accessories
                or weak current demand. A lower-priced product may still be
                useful when there is sufficient quantity and a clear resale
                route.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                Removal, liquidation or disposal?
              </h2>

              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                <div className="grid gap-3 border-b border-slate-200 bg-slate-50 p-5 sm:grid-cols-3">
                  <strong>Option</strong>
                  <strong>Possible benefit</strong>
                  <strong>Possible drawback</strong>
                </div>

                <div className="grid gap-3 border-b border-slate-200 p-5 sm:grid-cols-3">
                  <strong>Remove and resell</strong>
                  <span className="text-slate-600">
                    Greater control over the stock
                  </span>
                  <span className="text-slate-600">
                    Requires storage, time and handling
                  </span>
                </div>

                <div className="grid gap-3 border-b border-slate-200 p-5 sm:grid-cols-3">
                  <strong>Sell to an inventory buyer</strong>
                  <span className="text-slate-600">
                    May simplify recovery from a larger quantity
                  </span>
                  <span className="text-slate-600">
                    Offers are not guaranteed and may cover only part of a list
                  </span>
                </div>

                <div className="grid gap-3 p-5 sm:grid-cols-3">
                  <strong>Dispose of it</strong>
                  <span className="text-slate-600">
                    Removes the operational burden
                  </span>
                  <span className="text-slate-600">
                    No resale recovery and disposal costs may apply
                  </span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                When should you seek a stock review?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Consider submitting the inventory list before arranging
                disposal, especially when the stock includes usable products,
                customer returns, damaged packaging, seasonal products,
                discontinued lines or larger quantities.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                You can upload the inventory report even if you have not yet
                created the removal order. This may help you decide where the
                stock should be delivered and whether it is worth removing.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold">Important note</h2>

              <p className="mt-4 leading-7 text-slate-600">
                This page provides general information and does not reproduce
                Amazon&apos;s current fee schedule. Fees and programme rules can
                change, so confirm the applicable figures through official
                Amazon seller resources before making a financial decision.
              </p>
            </section>
          </article>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-8">
            <h2 className="text-xl font-bold">
              Compare removal with selling the stock
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Send us the inventory list for an individual review before you
              commit to disposal.
            </p>

            <Link
              href="/#quote"
              className="mt-6 block rounded-lg bg-emerald-700 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-800"
            >
              Submit inventory
            </Link>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <p className="font-semibold">Related guides</p>

              <div className="mt-3 space-y-3 text-sm">
                <Link
                  href="/sell-amazon-fba-inventory-uk"
                  className="block text-emerald-700 hover:underline"
                >
                  Sell Amazon FBA inventory
                </Link>

                <Link
                  href="/remove-amazon-fba-inventory-uk"
                  className="block text-emerald-700 hover:underline"
                >
                  What to do with removal inventory
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}