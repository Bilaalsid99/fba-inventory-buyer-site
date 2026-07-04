"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ACCEPTED_FILE_EXTENSIONS } from "@/lib/validation";

const MAX_UPLOAD_SIZE_MB = 25;
const MAX_UPLOAD_SIZE_BYTES = MAX_UPLOAD_SIZE_MB * 1024 * 1024;

const inputClass =
  "focus-ring mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 shadow-sm transition placeholder:text-slate-400 focus:border-blue-600";

const labelClass = "text-sm font-semibold text-slate-900";

type QuoteApiResponse = {
  success: boolean;
  id?: string;
  error?: string;
  errors?: Record<string, string>;
};

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="mt-2 text-sm font-medium text-red-700">{message}</p>;
}

function FormSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="mb-5">
        <h3 className="text-lg font-bold text-slate-950">{title}</h3>

        {description ? (
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">{children}</div>
    </div>
  );
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
    const inventoryFile = formData.get("inventoryFile");

    if (!(inventoryFile instanceof File) || inventoryFile.size === 0) {
      setErrors({
        inventoryFile: "Please upload your inventory file.",
      });
      setIsSubmitting(false);
      return;
    }

    if (inventoryFile.size > MAX_UPLOAD_SIZE_BYTES) {
      setErrors({
        inventoryFile: `File is too large. Please upload a file under ${MAX_UPLOAD_SIZE_MB}MB.`,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      let result: QuoteApiResponse;

      try {
        result = (await response.json()) as QuoteApiResponse;
      } catch {
        result = {
          success: false,
          error: "The server returned an invalid response.",
        };
      }

      if (!response.ok || !result.success) {
        setErrors(
          result.errors ?? {
            form: result.error || "Please check the form and try again.",
          }
        );

        setIsSubmitting(false);
        return;
      }

      form.reset();
      window.location.assign("/thank-you");
    } catch {
      setErrors({
        form: "Something went wrong. Please try again.",
      });

      setIsSubmitting(false);
    }
  }

  return (
    <section id="quote" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Get a quote
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Get a Free Inventory Quote
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Upload your Amazon FBA UK inventory list and we’ll review it manually.
            There is no obligation to accept any offer.
          </p>

          <div className="mt-7 space-y-4">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-blue-950">
              We review every inventory list individually. Upload your list even if you
              are unsure whether the stock is suitable.
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700">
              <p className="font-semibold text-slate-950">
                Useful files to upload:
              </p>

              <ul className="mt-3 list-inside list-disc space-y-1">
                <li>Amazon removal inventory report</li>
                <li>Unfulfillable inventory report</li>
                <li>Spreadsheet or CSV export</li>
                <li>Screenshots showing SKUs, units, condition, or categories</li>
              </ul>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm sm:p-6"
          noValidate
        >
          {errors.form ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
              {errors.form}
            </div>
          ) : null}

          <FormSection
            title="Seller details"
            description="Tell us who is submitting the inventory list and how you prefer to be contacted."
          >
            <div>
              <label className={labelClass} htmlFor="name">
                Name <span className="text-red-700">*</span>
              </label>

              <input
                className={inputClass}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />

              <ErrorMessage message={errors.name} />
            </div>

            <div>
              <label className={labelClass} htmlFor="email">
                Email <span className="text-red-700">*</span>
              </label>

              <input
                className={inputClass}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />

              <ErrorMessage message={errors.email} />
            </div>

            <div>
              <label className={labelClass} htmlFor="companySellerName">
                Amazon store / brand name{" "}
                <span className="text-red-700">*</span>
              </label>

              <input
                className={inputClass}
                id="companySellerName"
                name="companySellerName"
                type="text"
                placeholder="Example: store name, brand, or seller name"
                required
              />

              <ErrorMessage message={errors.companySellerName} />
            </div>

            <div>
              <label className={labelClass} htmlFor="country">
                Country <span className="text-red-700">*</span>
              </label>

              <input
                className={inputClass}
                id="country"
                name="country"
                type="text"
                defaultValue="United Kingdom"
                required
              />

              <ErrorMessage message={errors.country} />
            </div>

            <div>
              <label className={labelClass} htmlFor="preferredContactMethod">
                Preferred contact method{" "}
                <span className="text-red-700">*</span>
              </label>

              <select
                className={inputClass}
                id="preferredContactMethod"
                name="preferredContactMethod"
                required
                defaultValue="Email"
              >
                <option>Email</option>
                <option>WhatsApp</option>
                <option>WeChat</option>
              </select>

              <ErrorMessage message={errors.preferredContactMethod} />
            </div>

            <div>
              <label className={labelClass} htmlFor="whatsappNumber">
                WhatsApp number{" "}
                <span className="font-normal text-slate-500">optional</span>
              </label>

              <input
                className={inputClass}
                id="whatsappNumber"
                name="whatsappNumber"
                type="tel"
                autoComplete="tel"
              />

              <ErrorMessage message={errors.whatsappNumber} />
            </div>

            <div>
              <label className={labelClass} htmlFor="wechatId">
                WeChat ID{" "}
                <span className="font-normal text-slate-500">optional</span>
              </label>

              <input
                className={inputClass}
                id="wechatId"
                name="wechatId"
                type="text"
              />

              <ErrorMessage message={errors.wechatId} />
            </div>
          </FormSection>

          <FormSection
            title="Inventory details"
            description="Give us enough detail to understand the lot before we review the uploaded file."
          >
            <div>
              <label className={labelClass} htmlFor="approximateUnits">
                Approximate number of units{" "}
                <span className="text-red-700">*</span>
              </label>

              <input
                className={inputClass}
                id="approximateUnits"
                name="approximateUnits"
                type="text"
                inputMode="numeric"
                placeholder="Example: 500"
                required
              />

              <ErrorMessage message={errors.approximateUnits} />
            </div>

            <div>
              <label className={labelClass} htmlFor="approximatePalletCount">
                Approximate pallet count{" "}
                <span className="font-normal text-slate-500">optional</span>
              </label>

              <input
                className={inputClass}
                id="approximatePalletCount"
                name="approximatePalletCount"
                type="text"
                inputMode="decimal"
                placeholder="Example: 2 pallets, unknown, or loose cartons"
              />

              <ErrorMessage message={errors.approximatePalletCount} />
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="mainProductCategory">
                Main product category{" "}
                <span className="text-red-700">*</span>
              </label>

              <input
                className={inputClass}
                id="mainProductCategory"
                name="mainProductCategory"
                type="text"
                placeholder="Example: home, toys, electronics accessories, beauty, pet, DIY"
                required
              />

              <ErrorMessage message={errors.mainProductCategory} />
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="inventoryConditionNotes">
                Inventory condition notes{" "}
                <span className="font-normal text-slate-500">optional</span>
              </label>

              <textarea
                className={`${inputClass} min-h-28`}
                id="inventoryConditionNotes"
                name="inventoryConditionNotes"
                placeholder="Example: customer returns, open-box, damaged packaging, new boxed, mixed-condition, removal inventory, unfulfillable stock"
              />

              <ErrorMessage message={errors.inventoryConditionNotes} />
            </div>
          </FormSection>

          <FormSection
            title="Upload inventory list"
            description="Upload the file that shows what inventory you want reviewed."
          >
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="inventoryFile">
                Upload inventory file{" "}
                <span className="text-red-700">*</span>
              </label>

              <input
                className={inputClass}
                id="inventoryFile"
                name="inventoryFile"
                type="file"
                accept={ACCEPTED_FILE_EXTENSIONS.join(",")}
                required
              />

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Accepted file types: {ACCEPTED_FILE_EXTENSIONS.join(", ")}.
                Maximum upload size: {MAX_UPLOAD_SIZE_MB}MB.
              </p>

              <ErrorMessage message={errors.inventoryFile} />
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="message">
                Message{" "}
                <span className="font-normal text-slate-500">optional</span>
              </label>

              <textarea
                className={`${inputClass} min-h-32`}
                id="message"
                name="message"
                placeholder="Add anything that may help us review the inventory, such as urgency, removal status, product notes, or whether you want to start with part of the stock first."
              />

              <ErrorMessage message={errors.message} />
            </div>
          </FormSection>

          <button
            type="submit"
            disabled={isSubmitting}
            className="focus-ring w-full rounded-full bg-blue-700 px-6 py-4 text-base font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? "Submitting..." : "Upload Inventory List"}
          </button>

          <p className="text-center text-xs leading-5 text-slate-500">
            By submitting, you are asking us to review the inventory list manually.
            This does not guarantee an offer. See our{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-slate-700 underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
}