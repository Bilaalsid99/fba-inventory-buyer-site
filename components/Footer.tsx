export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-10 text-white">
      <div className="container-page grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-lg font-bold">Business Name Placeholder</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Independent inventory buyer reviewing selected Amazon FBA UK removal inventory, unfulfillable inventory, customer returns, and overstock lists.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-white">Email</p>
            <p className="mt-2">contact@example.com</p>
          </div>
          <div>
            <p className="font-semibold text-white">WeChat</p>
            <p className="mt-2">WeChat placeholder</p>
          </div>
          <div>
            <p className="font-semibold text-white">WhatsApp</p>
            <p className="mt-2">WhatsApp placeholder</p>
          </div>
        </div>
      </div>
      <div className="container-page mt-8 border-t border-white/10 pt-6">
        <p className="text-xs leading-6 text-slate-400">
          We are an independent inventory buyer. We are not affiliated with, endorsed by, or sponsored by Amazon. Amazon, FBA and related marks belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}
