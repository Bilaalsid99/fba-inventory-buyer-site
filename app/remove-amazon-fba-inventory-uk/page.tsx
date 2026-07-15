import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Amazon FBA Removal Inventory UK | What to Do With Removed Stock",
  description:
    "Learn what to do with Amazon FBA removal inventory in the UK, including returned, unfulfillable, overstock and damaged-packaging stock.",
  alternates: {
    canonical: "/remove-amazon-fba-inventory-uk",
  },
};

const removalReasons = [
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
    text: "The quantity is greater than current demand and continued storage is becoming inefficient.",
  },
  {
    title: "Seasonal products",
    text: "The selling period has ended and holding the stock until the next season may not make sense.",
  },
  {
    title: "Damaged packaging",
    text: "The product itself may still be usable even though the retail packaging is marked, opened or damaged.",
  },
  {
    title: "Discontinued lines",
    text: "The seller may be leaving a category, changing suppliers or closing an existing product listing.",
  },
];

const removalOptions = [
  {
    title: "Return it to your own premises",
    text: "This gives you direct control, but you will need suitable storage, handling capacity and a clear plan for the stock.",
  },
  {
    title: "Send it to a third-party warehouse",
    text: "A warehouse may receive, inspect, sort or store the inventory, although additional receiving, handling and storage charges may apply.",
  },
  {
    title: "Resell it through another channel",
    text: "Products may be suitable for another marketplace, wholesale, clearance or direct-to-consumer resale.",
  },
  {
    title: "Offer the inventory to a buyer",
    text: "An inventory buyer may review the complete stock list and decide whether some or all of it may be suitable to purchase.",
  },
  {
    title: "Dispose of the inventory",
    text: "Disposal may be necessary for unsafe, prohibited or genuinely unsellable products, but usable stock may still have recovery value.",
  },
];

export default function RemoveAmazonFbaInventoryUkPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Amazon FBA removals
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              What to Do With Amazon FBA Removal Inventory in the UK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              A removal order gets stock out of Amazon, but it does not solve
              what happens afterwards. Depending on the condition, quantity and
              category, selling the inventory may be an alternative to storing
              or disposing of it.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#quote"
                className="rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Submit removal inventory
              </Link>

              <Link
                href="/amazon-fba-removal-costs-uk"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Review removal costs
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
            <article className="space-y-14">
              <section>
                <h2 className="text-3xl font-bold">
                  What is an Amazon FBA removal order?
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  An FBA removal order is used to move inventory out of an
                  Amazon fulfilment centre. The stock may be returned to a
                  nominated address, sent to another location or handled through
                  another available recovery option.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Sellers may arrange removals because products are
                  unfulfillable, slow-moving, overstocked, discontinued,
                  seasonal or no longer economical to keep within FBA.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Common reasons sellers remove inventory
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Removal inventory can include a mixture of conditions and
                  product types. Understanding why the stock is being removed
                  can help determine the most practical next step.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {removalReasons.map((item) => (
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
                  Your options after removing FBA inventory
                </h2>

                <div className="mt-8 space-y-5">
                  {removalOptions.map((option, index) => (
                    <div
                      key={option.title}
                      className="rounded-xl border border-slate-200 p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
                          {index + 1}
                        </span>

                        <div>
                          <h3 className="text-xl font-bold">{option.title}</h3>

                          <p className="mt-2 leading-7 text-slate-600">
                            {option.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Review the list before the stock arrives
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  An inventory report may contain enough information for an
                  initial assessment. You can submit the list before the stock
                  is physically delivered, particularly when you are deciding
                  where the removal should be sent.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Useful information includes the product name, ASIN or SKU,
                  quantity, category, expected condition, packaging status and
                  proposed delivery location.
                </p>

                <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                  <h3 className="text-lg font-bold">
                    You do not need a perfect inventory file
                  </h3>

                  <p className="mt-3 leading-7 text-slate-700">
                    Upload the report you already have. If more information is
                    needed, we can ask for additional condition notes,
                    photographs or product details during the review.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Can all removal inventory be purchased?
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  No. Every list is different, and submitting inventory does
                  not guarantee an offer. Product category, condition, quantity,
                  resale restrictions and collection requirements all affect
                  whether the stock is suitable.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Recalled, unsafe, illegal, prohibited or otherwise restricted
                  products are not accepted.
                </p>
              </section>

              <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h2 className="text-2xl font-bold">Important note</h2>

                <p className="mt-4 leading-7 text-slate-700">
                  Amazon fees, programme rules and removal options can change.
                  Confirm current requirements through Seller Central or
                  official Amazon seller resources before creating a removal
                  order.
                </p>
              </section>
            </article>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-8">
              <h2 className="text-xl font-bold">
                Planning an Amazon removal?
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Send the inventory report before arranging disposal or
                committing to long-term storage.
              </p>

              <Link
                href="/#quote"
                className="mt-6 block rounded-lg bg-emerald-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
              >
                Upload the list
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
                    href="/amazon-fba-removal-costs-uk"
                    className="block font-medium text-emerald-700 hover:underline"
                  >
                    Amazon FBA removal costs
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
              Upload your inventory report even if the removal has not yet been
              created or the stock has not arrived.
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