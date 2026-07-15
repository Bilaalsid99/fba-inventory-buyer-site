import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amazon FBA Removal Inventory UK | What to Do With Removed Stock",
  description:
    "Learn what to do with Amazon FBA removal inventory in the UK, including returned, unfulfillable, overstock and damaged-packaging stock.",
  alternates: {
    canonical: "/remove-amazon-fba-inventory-uk",
  },
};

export default function RemoveAmazonFbaInventoryUkPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Amazon FBA removals
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            What to Do With Amazon FBA Removal Inventory in the UK
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A removal order gets the stock out of Amazon, but it does not solve
            what happens to the inventory afterwards. Depending on its
            condition, quantity and category, selling the stock may be an
            alternative to storing or disposing of it.
          </p>

          <Link
            href="/#quote"
            className="mt-8 inline-block rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            Submit removal inventory
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <article className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold">
                What is an Amazon FBA removal order?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                An FBA removal order is used to move inventory out of an Amazon
                fulfilment centre. The stock may be returned to a nominated
                address, sent elsewhere or dealt with through another available
                recovery option.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Sellers may arrange removals because the products are
                unfulfillable, slow-moving, overstocked, discontinued, seasonal
                or no longer economical to keep within FBA.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                Common reasons sellers remove inventory
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Unfulfillable stock",
                    text: "Amazon has classified the inventory as unsuitable for normal fulfilment.",
                  },
                  {
                    title: "Customer returns",
                    text: "Returned products may need inspection, repackaging or resale through another channel.",
                  },
                  {
                    title: "Excess inventory",
                    text: "The quantity is greater than current demand and storage is becoming inefficient.",
                  },
                  {
                    title: "Seasonal products",
                    text: "The selling period has ended and holding the stock until the next season may not make sense.",
                  },
                  {
                    title: "Damaged packaging",
                    text: "The item itself may be usable even though the retail packaging is marked or damaged.",
                  },
                  {
                    title: "Discontinued lines",
                    text: "The seller is leaving a category, changing suppliers or closing a product listing.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 p-5"
                  >
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                Your options after removing FBA inventory
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold">
                    Return it to your own premises
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    This gives you direct control, but you will need suitable
                    storage, handling and a plan for the stock.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Send it to a third-party warehouse
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    A warehouse may receive, inspect, sort or store the
                    inventory, although additional handling and storage charges
                    may apply.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Resell it through another channel
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Products may be suitable for another marketplace, wholesale,
                    clearance or direct-to-consumer sale.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Offer the inventory to a buyer
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    A stock buyer may review the inventory as a complete list
                    and decide whether some or all of it is suitable.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Dispose of the inventory
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Disposal may be necessary for unsafe, prohibited or
                    genuinely unsellable products, but it is worth checking
                    whether usable stock still has value first.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                Review the list before the stock arrives
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                An inventory report may contain enough information for an
                initial assessment. You can submit the list before the stock is
                physically delivered, particularly when you are deciding where
                the removal should be sent.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Useful information includes the product name, ASIN or SKU,
                quantity, category, expected condition, packaging status and
                proposed delivery location.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold">
                Can all removal inventory be purchased?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                No. Every list is different, and submitting inventory does not
                guarantee an offer. Product category, condition, quantity,
                resale restrictions and collection requirements all affect
                whether the stock is suitable.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Recalled, unsafe, illegal, prohibited and restricted products
                are not accepted.
              </p>
            </section>
          </article>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-8">
            <h2 className="text-xl font-bold">
              Planning an Amazon removal?
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Send the inventory report before arranging disposal or long-term
              storage.
            </p>

            <Link
              href="/#quote"
              className="mt-6 block rounded-lg bg-emerald-700 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-800"
            >
              Upload the list
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