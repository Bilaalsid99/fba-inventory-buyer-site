import Link from "next/link";

const guides = [
  {
    href: "/sell-amazon-fba-inventory-uk",
    title: "Sell Amazon FBA inventory",
    description:
      "Learn what types of removal, returned, unfulfillable and excess inventory you can submit for review.",
  },
  {
    href: "/remove-amazon-fba-inventory-uk",
    title: "FBA removal inventory",
    description:
      "Understand your options after arranging an Amazon FBA removal order in the UK.",
  },
  {
    href: "/amazon-fba-removal-costs-uk",
    title: "FBA removal costs",
    description:
      "Consider removal, transport, storage, inspection, handling and disposal costs.",
  },
];

export default function GuidesSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900">
          Amazon FBA inventory guides
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Practical guidance for UK sellers dealing with removals,
          unfulfillable inventory, customer returns and excess stock.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:border-emerald-600 hover:shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-emerald-700">
                {guide.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {guide.description}
              </p>

              <span className="mt-5 inline-block font-semibold text-emerald-700">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}