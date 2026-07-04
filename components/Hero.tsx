export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),_transparent_30%)]" />
      <div className="container-page relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
            Independent UK inventory buyer
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Sell Your Amazon FBA UK Removal Inventory
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-blue-50">
            Before you dispose of or liquidate your Amazon FBA UK inventory, get a free quote.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We review Amazon FBA removal and unfulfillable inventory lists from UK sellers and provide a no-obligation quote where suitable. Upload your inventory report, spreadsheet, or screenshots and we’ll review it manually.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#quote"
              className="focus-ring inline-flex justify-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
            >
              Upload Inventory List
            </a>
            <p className="text-sm font-medium text-slate-300">
              Independent UK inventory buyer. Every list reviewed individually.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
          <div className="rounded-2xl bg-white p-6 text-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Free review
            </p>
            <h2 className="mt-3 text-2xl font-bold">Upload first. Decide later.</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Share a CSV, spreadsheet, PDF, or screenshots. We review every inventory list individually before responding.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700">
              <div className="rounded-xl bg-slate-50 p-4">Removal and unfulfillable inventory</div>
              <div className="rounded-xl bg-slate-50 p-4">Customer returns and open-box lots</div>
              <div className="rounded-xl bg-slate-50 p-4">Bulky, seasonal, excess, or end-of-line stock</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
