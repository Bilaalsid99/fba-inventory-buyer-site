import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-10 text-white">
      <div className="container-page grid gap-8 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">FBA Stock Rescue UK</p>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Independent inventory buyer reviewing selected Amazon FBA UK
            removal inventory, unfulfillable inventory, customer returns and
            overstock lists.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Pages</p>

          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link href="/about" className="hover:text-white">
              About
            </Link>

            <Link href="/#how-it-works" className="hover:text-white">
              How It Works
            </Link>

            <Link href="/#what-we-review" className="hover:text-white">
              What We Review
            </Link>

            <Link href="/#faq" className="hover:text-white">
              FAQ
            </Link>

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>

            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Guides</p>

          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link
              href="/sell-amazon-fba-inventory-uk"
              className="hover:text-white"
            >
              Sell Amazon FBA Inventory
            </Link>

            <Link
              href="/remove-amazon-fba-inventory-uk"
              className="hover:text-white"
            >
              FBA Removal Inventory
            </Link>

            <Link
              href="/amazon-fba-removal-costs-uk"
              className="hover:text-white"
            >
              FBA Removal Costs
            </Link>
          </div>
        </div>

        <div className="text-sm text-slate-300">
          <p className="font-semibold text-white">Contact</p>

          <p className="mt-3">
            Email:{" "}
            <a
              href="mailto:owner@siddiqholdings.co.uk"
              className="hover:text-white"
            >
              owner@siddiqholdings.co.uk
            </a>
          </p>
        </div>
      </div>

      <div className="container-page mt-8 border-t border-white/10 pt-6">
        <p className="text-xs leading-6 text-slate-400">
          We are an independent inventory buyer. We are not affiliated with,
          endorsed by or sponsored by Amazon. Amazon, FBA and related marks
          belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}