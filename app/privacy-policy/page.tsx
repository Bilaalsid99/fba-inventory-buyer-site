import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Business Name Placeholder",
  description: "Privacy policy for Amazon FBA UK inventory quote submissions."
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />

      <section className="bg-slate-50 py-16">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            This page explains how information submitted through this website is handled.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-3xl space-y-8 text-slate-700">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">
              Information we receive
            </h2>
            <p className="mt-3 leading-7">
              When you submit an inventory quote request, you may provide your name,
              email address, company or seller name, country, preferred contact method,
              WhatsApp number, WeChat ID, approximate inventory details, condition notes,
              uploaded inventory files, and any message you choose to send.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950">
              How we use your information
            </h2>
            <p className="mt-3 leading-7">
              We use submitted information to review your inventory list, assess whether
              we may be able to provide a quote, contact you about the submitted inventory,
              and ask for more information where needed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950">
              Inventory files
            </h2>
            <p className="mt-3 leading-7">
              Inventory files are reviewed manually. Please do not upload information that
              is not needed for the inventory review.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950">
              Storage of submissions
            </h2>
            <p className="mt-3 leading-7">
              The website is intended to send quote submissions to the business for manual
              review. If email-only submission is used, submitted details and files may be
              received in the business email inbox rather than stored in a website database.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950">
              Contact
            </h2>
            <p className="mt-3 leading-7">
              For privacy questions or deletion requests, contact: contact@example.com.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
            TODO: Replace Business Name Placeholder and contact@example.com before launch.
            Review this policy properly once email, analytics, file handling, or any third-party
            tools are connected.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
