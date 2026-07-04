import type { QuoteFormValues } from "./validation";

type SendQuoteRequestEmailInput = {
  data: QuoteFormValues;
  file: File;
};

export async function sendQuoteRequestEmail({ data, file }: SendQuoteRequestEmailInput) {
  // TODO: Connect to your chosen email provider, CRM, storage bucket, or database.
  // TODO: Do not rely on server memory for production uploads. Store the file securely.
  // TODO: Add anti-spam protection such as Turnstile, reCAPTCHA, or rate limiting before paid traffic.
  console.info("Quote request received", {
    seller: data.companySellerName,
    email: data.email,
    preferredContactMethod: data.preferredContactMethod,
    fileName: file.name,
    fileSize: file.size
  });

  return { success: true };
}
