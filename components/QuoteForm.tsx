"use client";

import { FormEvent, useState } from "react";
import { ACCEPTED_FILE_EXTENSIONS } from "@/lib/validation";

const inputClass =
  "focus-ring mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 shadow-sm transition placeholder:text-slate-400 focus:border-blue-600";

const labelClass = "text-sm font-semibold text-slate-900";

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-sm font-medium text-red-700">{message}</p>;
}

export default function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData
      });

      const result = (await response.json()) as {
        ok: boolean;
        errors?: Record<string, string>;
      };

      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? { form: "Please check the form and try again." });
        setIsSubmitting(false);
        return;
      }

      window.location.assign("/thank-you");
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
      setIsSubmitting(false);
    }
  }

  return (
    <section id="quote" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Get a quote</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Get a Free Inventory Quote
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Upload your inventory list and we’ll review it manually. There is no obligation to accept any offer.
          </p>
          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-blue-950">
            Upload your inventory even if you are unsure. We review every inventory list individually and will respond where suitable.
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
          noValidate
        >
          {errors.form ? (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
              {errors.form}
            </div>
          ) : null}

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="name">
                Name <span className="text-red-700">*</span>
              </label>
              <input className={inputClass} id="name" name="name" type="text" autoComplete="name" required />
              <ErrorMessage message={errors.name} />
            </div>

            <div>
              <label className={labelClass} htmlFor="email">
                Email <span className="text-red-700">*</span>
              </label>
              <input className={inputClass} id="email" name="email" type="email" autoComplete="email" required />
              <ErrorMessage message={errors.email} />
            </div>

            <div>
              <label className={labelClass} htmlFor="companySellerName">
                Company / Seller name <span className="text-red-700">*</span>
              </label>
              <input className={inputClass} id="companySellerName" name="companySellerName" type="text" required />
              <ErrorMessage message={errors.companySellerName} />
            </div>

            <div>
              <label className={labelClass} htmlFor="country">
                Country <span className="text-red-700">*</span>
              </label>
              <input className={inputClass} id="country" name="country" type="text" defaultValue="United Kingdom" required />
              <ErrorMessage message={errors.country} />
            </div>

            <div>
              <label className={labelClass} htmlFor="preferredContactMethod">
                Preferred contact method <span className="text-red-700">*</span>
              </label>
              <select className={inputClass} id="preferredContactMethod" name="preferredContactMethod" required defaultValue="Email">
                <option>Email</option>
                <option>WhatsApp</option>
                <option>WeChat</option>
              </select>
              <ErrorMessage message={errors.preferredContactMethod} />
            </div>

            <div>
              <label className={labelClass} htmlFor="whatsappNumber">
                WhatsApp number <span className="font-normal text-slate-500">optional</span>
              </label>
              <input className={inputClass} id="whatsappNumber" name="whatsappNumber" type="tel" autoComplete="tel" />
              <ErrorMessage message={errors.whatsappNumber} />
            </div>

            <div>
              <label className={labelClass} htmlFor="wechatId">
                WeChat ID <span className="font-normal text-slate-500">optional</span>
              </label>
              <input className={inputClass} id="wechatId" name="wechatId" type="text" />
              <ErrorMessage message={errors.wechatId} />
            </div>

            <div>
              <label className={labelClass} htmlFor="approximateUnits">
                Approximate number of units <span className="text-red-700">*</span>
              </label>
              <input className={inputClass} id="approximateUnits" name="approximateUnits" type="text" inputMode="numeric" required />
              <ErrorMessage message={errors.approximateUnits} />
            </div>

            <div>
              <label className={labelClass} htmlFor="approximatePalletCount">
                Approximate pallet count <span className="font-normal text-slate-500">optional</span>
              </label>
              <input className={inputClass} id="approximatePalletCount" name="approximatePalletCount" type="text" inputMode="decimal" />
              <ErrorMessage message={errors.approximatePalletCount} />
            </div>

            <div>
              <label className={labelClass} htmlFor="mainProductCategory">
                Main product category <span className="text-red-700">*</span>
              </label>
              <input
                className={inputClass}
                id="mainProductCategory"
                name="mainProductCategory"
                type="text"
                placeholder="Example: home, toys, electronics accessories"
                required
              />
              <ErrorMessage message={errors.mainProductCategory} />
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="inventoryConditionNotes">
                Inventory condition notes <span className="font-normal text-slate-500">optional</span>
              </label>
              <textarea
                className={`${inputClass} min-h-28`}
                id="inventoryConditionNotes"
                name="inventoryConditionNotes"
                placeholder="Example: customer returns, open-box, damaged packaging, new boxed, mixed-condition"
              />
              <ErrorMessage message={errors.inventoryConditionNotes} />
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="inventoryFile">
                Upload inventory file <span className="text-red-700">*</span>
              </label>
              <input
                className={inputClass}
                id="inventoryFile"
                name="inventoryFile"
                type="file"
                accept={ACCEPTED_FILE_EXTENSIONS.join(",")}
                required
              />
              <p className="mt-2 text-sm text-slate-600">
                Accepted file types: {ACCEPTED_FILE_EXTENSIONS.join(", ")}. Maximum upload size in this starter route: 10MB.
              </p>
              <ErrorMessage message={errors.inventoryFile} />
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="message">
                Message
              </label>
              <textarea
                className={`${inputClass} min-h-32`}
                id="message"
                name="message"
                placeholder="Add any details that may help us review the inventory."
              />
              <ErrorMessage message={errors.message} />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="focus-ring mt-7 w-full rounded-full bg-blue-700 px-6 py-4 text-base font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? "Submitting..." : "Upload Inventory List"}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            By submitting, you are asking us to review the inventory list manually. This does not guarantee an offer.
          </p>
        </form>
      </div>
    </section>
  );
}
