const faqs = [
  {
    question: "Are you Amazon?",
    answer:
      "No. We are an independent UK inventory buyer and are not affiliated with, endorsed by, or sponsored by Amazon."
  },
  {
    question: "Do you buy every inventory list?",
    answer:
      "No. Every inventory list is reviewed individually. We provide quotes only where the stock appears suitable for resale, recovery, or further discussion."
  },
  {
    question: "Can I upload inventory if I am unsure?",
    answer:
      "Yes. Upload your inventory list even if you are unsure why Amazon marked the stock unfulfillable, damaged, expired, returned, or scheduled for removal."
  },
  {
    question: "Do you buy unfulfillable inventory?",
    answer:
      "Yes, where suitable. We review Amazon FBA unfulfillable inventory, including damaged packaging, customer returns, expiry issues, open-box stock, and mixed-condition lots. Every list is assessed individually before we make any offer."
  },
  {
    question: "Why has Amazon marked my inventory unfulfillable?",
    answer:
      "Amazon may mark FBA inventory unfulfillable because of customer returns, damaged packaging, warehouse damage, expiry-date issues, missing labels, or condition checks. We cannot change Amazon’s decision, but we can review whether the stock may still have resale value outside Amazon."
  },
  {
    question: "Can you review inventory before it is destroyed or liquidated?",
    answer:
      "Yes. If your inventory is scheduled for removal, disposal, liquidation, or return, upload the report or screenshots as early as possible so we can review whether the stock is suitable before you commit to another option."
  },
  {
    question: "Do you buy customer returns or open-box stock?",
    answer:
      "We review customer returns, open-box stock, damaged packaging, new boxed stock, and mixed-condition lots. Condition does not automatically exclude a lot, but it does affect whether we can make an offer."
  },
  {
    question: "Do you buy expired inventory?",
    answer:
      "We may review stock with expiry-date issues, but we do not knowingly purchase unsafe, unsuitable, or non-compliant products. Please include expiry dates, product type, and any Amazon status shown in Seller Central."
  },
  {
    question: "Do you buy recalled or restricted products?",
    answer:
      "No. We do not knowingly purchase recalled, unsafe, illegal, prohibited, or restricted products."
  },
  {
    question: "Do you provide instant quotes?",
    answer:
      "No. Quotes are reviewed manually so each inventory list can be assessed properly. We look at the product type, quantity, condition, resale potential, and removal details before responding."
  },
  {
    question: "What should I send you?",
    answer:
      "Send the ASIN or SKU, product name, quantity, condition notes, Amazon inventory status, expiry dates if relevant, removal status, and any available reports, spreadsheets, PDFs, or screenshots."
  },
  {
    question: "Can we start with part of the stock first?",
    answer:
      "Where suitable, yes. Some sellers prefer to begin with part of the inventory before discussing the remaining stock."
  },
  {
    question: "Do you handle the Amazon removal order?",
    answer:
      "The seller is responsible for creating the Amazon removal or return order. If an agreement is reached, we provide the agreed UK delivery details before anything is arranged."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Common questions from FBA sellers
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            For sellers dealing with Amazon FBA unfulfillable inventory, removal orders,
            customer returns, damaged packaging, expiry issues, or stock that may otherwise
            be disposed of or liquidated.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 open:bg-white open:shadow-sm"
            >
              <summary className="cursor-pointer list-none text-lg font-bold text-slate-950">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span
                    className="mt-1 text-blue-700 transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}