import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Amazon FBA UK Inventory Quote",
  description:
    "Contact an independent inventory buyer about Amazon FBA UK unfulfillable, removal, customer return, damaged, expired, or overstock inventory.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Contact
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Contact us about Amazon FBA inventory
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              The fastest way to get a response is to upload your inventory list
              for review. For general questions, you can contact us by email.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/#quote"
                className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                Upload Inventory List
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-md">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                Email
              </p>

              <a
                href="mailto:owner@siddiqholdings.co.uk"
                className="mt-3 block text-base font-semibold text-slate-950 underline-offset-4 hover:underline"
              >
                owner@siddiqholdings.co.uk
              </a>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Please include your inventory status, product category,
                approximate units, and whether the stock is unfulfillable,
                returned, damaged, expired, or scheduled for removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}