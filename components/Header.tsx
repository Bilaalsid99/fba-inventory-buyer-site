import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "What We Review", href: "/#what-we-review" },
  { label: "Guides", href: "/#guides" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-lg"
          aria-label="Homepage"
        >
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="FBA Stock Rescue UK logo"
            priority
          />

          <span className="text-sm font-bold leading-tight text-slate-950 sm:text-base">
            FBA Stock Rescue UK
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#quote"
          className="focus-ring rounded-full bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
        >
          Get a Free Quote
        </Link>
      </div>
    </header>
  );
}