import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Amazon FBA UK Inventory Quote",
  description: "Contact an independent inventory buyer about Amazon FBA UK removal, unfulfillable, customer return, or overstock inventory."
};

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="bg-slate-50 py-16">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Contact Us About Amazon FBA UK Inventory
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            The fastest way to get a response is to upload your inventory list for review.
            If you have a general question, use the placeholder contact details below.
          </p>

          <div className="mt-8">
            <Link
              href="/#quote"
              className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
            >
              Upload Inventory List
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-slate-950">Email</h2>
            <p className="mt-3 text-slate-700">owner@siddiqholdings.co.uk</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-slate-950">WhatsApp</h2>
            <p className="mt-3 text-slate-700">WhatsApp placeholder</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-slate-950">WeChat</h2>
            <p className="mt-3 text-slate-700">WeChat placeholder</p>
          </div>
        </div>

        <div className="container-page mt-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
            TODO: Replace contact@example.com, WhatsApp placeholder, and WeChat placeholder
            before launch.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
