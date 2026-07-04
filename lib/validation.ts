export const ACCEPTED_FILE_EXTENSIONS = [".csv", ".xlsx", ".xls", ".pdf", ".jpg", ".png"];
export const MAX_UPLOAD_SIZE_BYTES = 10 * 1024 * 1024;

export type ContactMethod = "Email" | "WhatsApp" | "WeChat";

export type QuoteFormValues = {
  name: string;
  email: string;
  companySellerName: string;
  country: string;
  preferredContactMethod: ContactMethod;
  whatsappNumber?: string;
  wechatId?: string;
  approximateUnits: string;
  approximatePalletCount?: string;
  mainProductCategory: string;
  inventoryConditionNotes?: string;
  message?: string;
};

export type ValidationResult =
  | { success: true; data: QuoteFormValues; file: File }
  | { success: false; errors: Record<string, string> };

const contactMethods: ContactMethod[] = ["Email", "WhatsApp", "WeChat"];

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasAcceptedExtension(fileName: string) {
  const lower = fileName.toLowerCase();
  return ACCEPTED_FILE_EXTENSIONS.some((extension) => lower.endsWith(extension));
}

export function validateQuoteForm(formData: FormData): ValidationResult {
  const errors: Record<string, string> = {};

  const name = getString(formData, "name");
  const email = getString(formData, "email");
  const companySellerName = getString(formData, "companySellerName");
  const country = getString(formData, "country");
  const preferredContactMethodRaw = getString(formData, "preferredContactMethod");
  const whatsappNumber = getString(formData, "whatsappNumber");
  const wechatId = getString(formData, "wechatId");
  const approximateUnits = getString(formData, "approximateUnits");
  const approximatePalletCount = getString(formData, "approximatePalletCount");
  const mainProductCategory = getString(formData, "mainProductCategory");
  const inventoryConditionNotes = getString(formData, "inventoryConditionNotes");
  const message = getString(formData, "message");
  const file = formData.get("inventoryFile");

  if (!name) errors.name = "Enter your name.";
  if (!email) errors.email = "Enter your email address.";
  if (email && !isValidEmail(email)) errors.email = "Enter a valid email address.";
  if (!companySellerName) errors.companySellerName = "Enter your company or seller name.";
  if (!country) errors.country = "Enter your country.";
  if (!contactMethods.includes(preferredContactMethodRaw as ContactMethod)) {
    errors.preferredContactMethod = "Choose a preferred contact method.";
  }
  if (!approximateUnits) errors.approximateUnits = "Enter the approximate number of units.";
  if (!mainProductCategory) errors.mainProductCategory = "Enter the main product category.";

  if (!(file instanceof File) || file.size === 0) {
    errors.inventoryFile = "Upload your inventory file.";
  } else {
    if (!hasAcceptedExtension(file.name)) {
      errors.inventoryFile = `Upload one of these file types: ${ACCEPTED_FILE_EXTENSIONS.join(", ")}.`;
    }
    if (file.size > MAX_UPLOAD_SIZE_BYTES) {
      errors.inventoryFile = "Upload a file under 10MB, or contact us if your list is larger.";
    }
  }

  if (Object.keys(errors).length > 0 || !(file instanceof File)) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name,
      email,
      companySellerName,
      country,
      preferredContactMethod: preferredContactMethodRaw as ContactMethod,
      whatsappNumber: whatsappNumber || undefined,
      wechatId: wechatId || undefined,
      approximateUnits,
      approximatePalletCount: approximatePalletCount || undefined,
      mainProductCategory,
      inventoryConditionNotes: inventoryConditionNotes || undefined,
      message: message || undefined
    },
    file
  };
}
