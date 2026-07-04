const steps = [
  {
    title: "Upload your inventory list",
    copy: "Send your Amazon FBA removal list, unfulfillable inventory report, spreadsheet, CSV, or screenshots."
  },
  {
    title: "We review the lot",
    copy: "Every inventory list is reviewed individually. We consider the lot as a whole, including quantity, category, size, condition notes, and practical logistics."
  },
  {
    title: "You receive a no-obligation quote",
    copy: "If the inventory is suitable, we’ll contact you with an offer or ask for more details."
  },
  {
    title: "Start small where suitable",
    copy: "Where appropriate, we can begin with part of the inventory so both sides can confirm the process before discussing the remaining stock."
  },
  {
    title: "Complete the removal",
    copy: "If agreed, the seller arranges the Amazon removal or return order to the agreed UK delivery address."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A simple quote process for FBA inventory decisions.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
