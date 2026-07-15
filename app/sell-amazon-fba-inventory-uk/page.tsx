import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sell Amazon FBA Inventory UK | Independent Inventory Buyer",
  description:
    "Sell Amazon FBA removal, returned, unfulfillable, overstock or slow-moving inventory in the UK. Upload your stock list for an individual review.",
  alternates: {
    canonical: "/sell-amazon-fba-inventory-uk",
  },
};

const inventoryTypes = [
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
];

const processSteps = [
  {
    title: "Upload your stock list",
    text: "Send a CSV, Excel or similar inventory file together with the approximate quantity, category and condition.",
  },
  {
    title: "We review the inventory",
    text: "Each list is considered individually. We may ask for photographs, product identifiers or additional condition details.",
  },
  {
    title: "We discuss the next step",
    text: "If the stock may be suitable, we will discuss quantities, location, collection arrangements and a possible offer.",
  },
];

export default function SellAmazonFbaInventoryUkPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Independent UK inventory buyer
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
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

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
            <article className="space-y-14">
              <section>
                <h2 className="text-3xl font-bold">
                  What types of Amazon inventory can you submit?
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  We review stock lists individually. Inventory does not
                  necessarily need to be brand new or already removed from
                  Amazon.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {inventoryTypes.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">
                        ✓
                      </span>

                      <p className="font-medium text-slate-800">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Why sell stock instead of disposing of it?
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Stock that no longer works within your Amazon operation may
                  still have value elsewhere. Before paying for disposal or
                  abandoning inventory, it may be worth having the list
                  reviewed.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  This can be particularly useful when storage costs are
                  increasing, a product line has been discontinued, packaging
                  has been damaged or the inventory is no longer suitable for
                  sale as new on Amazon.
                </p>

                <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                  <h3 className="text-lg font-bold">
                    Review the stock before choosing disposal
                  </h3>

                  <p className="mt-3 leading-7 text-slate-700">
                    Removal and disposal may solve an immediate storage problem,
                    but usable inventory can sometimes still have recovery
                    value through another route.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold">How the process works</h2>

                <div className="mt-8 space-y-5">
                  {processSteps.map((step, index) => (
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

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-bold">
                    Useful information to include
                  </h3>

                  <ul className="mt-4 grid gap-3 text-slate-600 sm:grid-cols-2">
                    <li>Product name or description</li>
                    <li>ASIN, SKU or barcode</li>
                    <li>Approximate quantity</li>
                    <li>Condition and packaging notes</li>
                    <li>Current or expected location</li>
                    <li>Carton or pallet quantities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold">
                  Is every inventory list suitable?
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  No. We cannot guarantee an offer and may not be able to buy
                  every product on a submitted list. Product category,
                  condition, quantity, resale restrictions and collection
                  requirements all affect whether inventory is suitable.
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Recalled, unsafe, illegal, prohibited or otherwise restricted
                  products are not accepted.
                </p>
              </section>

              <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h2 className="text-2xl font-bold">Important note</h2>

                <p className="mt-4 leading-7 text-slate-700">
                  We are an independent UK inventory buyer and are not
                  affiliated with Amazon. Submitting an inventory list does not
                  guarantee that an offer will be made.
                </p>
              </section>
            </article>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-8">
              <h2 className="text-xl font-bold">Have inventory to review?</h2>

              <p className="mt-3 leading-7 text-slate-600">
                Upload your list even if you are unsure whether the stock is
                suitable or the removal has not yet been created.
              </p>

              <Link
                href="/#quote"
                className="mt-6 block rounded-lg bg-emerald-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
              >
                Request a review
              </Link>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="font-semibold">Related guides</p>

                <div className="mt-4 space-y-3 text-sm">
                  <Link
                    href="/remove-amazon-fba-inventory-uk"
                    className="block font-medium text-emerald-700 hover:underline"
                  >
                    Amazon FBA removal inventory
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
                  Lists are reviewed individually. We may request photographs or
                  further condition details.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-emerald-50">
          <div className="mx-auto max-w-6xl px-6 py-14 text-center">
            <h2 className="text-3xl font-bold">
              Send your Amazon inventory list for review
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Submit removal, returned, unfulfillable, overstock or
              damaged-packaging inventory before committing to disposal or
              long-term storage.
            </p>

            <Link
              href="/#quote"
              className="mt-7 inline-block rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Upload your inventory list
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}