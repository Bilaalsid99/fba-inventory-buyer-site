const inventoryTypes = [
  "Amazon FBA removal inventory",
  "Unfulfillable inventory",
  "Customer return inventory",
  "Open-box inventory",
  "New boxed stock",
  "Damaged packaging stock",
  "Mixed-condition stock",
  "Bulky or oversized products",
  "Seasonal excess stock",
  "End-of-line inventory",
  "Slow-moving stock",
  "Overstock inventory"
];

export default function WhatWeReview() {
  return (
    <section id="what-we-review" className="bg-white py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">What we review</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Inventory we commonly review
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Not sure if your inventory is suitable? Upload it anyway. We’ll review the list and let you know if we can help.
          </p>
          <a
            href="#quote"
            className="focus-ring mt-7 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get a Free Inventory Quote
          </a>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2" aria-label="Inventory types commonly reviewed">
          {inventoryTypes.map((item) => (
            <li key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-800">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-700" aria-hidden="true" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
