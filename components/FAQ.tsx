const faqs = [
  {
    question: "Are you Amazon?",
    answer: "No. We are an independent inventory buyer and are not affiliated with, endorsed by, or sponsored by Amazon."
  },
  {
    question: "Do you buy every inventory list?",
    answer: "No. Every inventory list is reviewed individually. We provide quotes only where suitable."
  },
  {
    question: "Can I upload inventory if I am unsure?",
    answer: "Yes. Upload your inventory list and we’ll review it before responding."
  },
  {
    question: "Do you buy unfulfillable inventory?",
    answer: "We review Amazon FBA unfulfillable inventory lists. Condition does not automatically exclude a lot, but every list is assessed individually."
  },
  {
    question: "Do you buy customer returns or open-box stock?",
    answer: "We review customer returns, open-box stock, damaged packaging, new boxed stock, and mixed-condition lots."
  },
  {
    question: "Do you buy recalled products?",
    answer: "No. We do not knowingly purchase recalled, unsafe, illegal, prohibited, or restricted products."
  },
  {
    question: "Do you provide instant quotes?",
    answer: "No. Quotes are reviewed manually so each inventory list can be assessed properly."
  },
  {
    question: "Can we start with part of the stock first?",
    answer: "Where suitable, yes. Some sellers prefer to begin with part of the inventory before discussing the remaining stock."
  },
  {
    question: "Do you handle the Amazon removal order?",
    answer: "The seller is responsible for creating the Amazon removal or return order. If an agreement is reached, we provide the agreed UK delivery details."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Common questions from FBA sellers
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 open:bg-white open:shadow-sm">
              <summary className="cursor-pointer list-none text-lg font-bold text-slate-950">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="mt-1 text-blue-700 transition group-open:rotate-45" aria-hidden="true">+</span>
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
