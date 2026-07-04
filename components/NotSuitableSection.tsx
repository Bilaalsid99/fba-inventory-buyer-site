export default function NotSuitableSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20">
      <div className="container-page">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Review limits</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Inventory we generally cannot purchase
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              We review each list individually, but we do not knowingly purchase recalled, unsafe, illegal, prohibited, or restricted products.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              If you are unsure, you can still upload your inventory list and we’ll review it before responding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
