import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Buffer } from "node:buffer";

export const runtime = "nodejs";

const MAX_UPLOAD_SIZE_MB = 25;
const MAX_UPLOAD_SIZE_BYTES = MAX_UPLOAD_SIZE_MB * 1024 * 1024;

const fieldLabels: Record<string, string> = {
  name: "Name",
  email: "Email",
  companySellerName: "Amazon store / brand name",
  country: "Country",
  preferredContactMethod: "Preferred contact method",
  whatsappNumber: "WhatsApp number",
  wechatId: "WeChat ID",
  approximateUnits: "Approximate number of units",
  approximatePalletCount: "Approximate pallet count",
  mainProductCategory: "Main product category",
  inventoryStatus: "Amazon inventory status / reason",
  inventoryConditionNotes: "Inventory condition notes",
  message: "Message",
};

const fieldOrder = [
  "name",
  "email",
  "companySellerName",
  "country",
  "preferredContactMethod",
  "whatsappNumber",
  "wechatId",
  "approximateUnits",
  "approximatePalletCount",
  "mainProductCategory",
  "inventoryStatus",
  "inventoryConditionNotes",
  "message",
];

const requiredFields = [
  "name",
  "email",
  "companySellerName",
  "country",
  "preferredContactMethod",
  "approximateUnits",
  "mainProductCategory",
  "inventoryStatus",
];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getField(formData: FormData, key: string) {
  const value = formData.get(key);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function cleanSubjectValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, 80);
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    if (!process.env.QUOTE_TO_EMAIL) {
      return NextResponse.json(
        { success: false, error: "Missing QUOTE_TO_EMAIL" },
        { status: 500 }
      );
    }

    if (!process.env.QUOTE_FROM_EMAIL) {
      return NextResponse.json(
        { success: false, error: "Missing QUOTE_FROM_EMAIL" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await request.formData();
    const inventoryFile = formData.get("inventoryFile");

    const errors: Record<string, string> = {};

    for (const field of requiredFields) {
      if (!getField(formData, field)) {
        errors[field] = `${fieldLabels[field] || field} is required.`;
      }
    }

    const submittedEmail = getField(formData, "email");

    if (submittedEmail && !isValidEmail(submittedEmail)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!(inventoryFile instanceof File) || inventoryFile.size === 0) {
      errors.inventoryFile = "Please upload your inventory file.";
    }

    if (
      inventoryFile instanceof File &&
      inventoryFile.size > MAX_UPLOAD_SIZE_BYTES
    ) {
      errors.inventoryFile = `File is too large. Please upload a file under ${MAX_UPLOAD_SIZE_MB}MB.`;
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors,
        },
        { status: 400 }
      );
    }

    const fields: Record<string, string> = {};

    for (const key of fieldOrder) {
      const value = getField(formData, key);

      if (value) {
        fields[key] = value;
      }
    }

    const rows = fieldOrder
      .filter((key) => fields[key])
      .map((key) => {
        const label = fieldLabels[key] || key;
        const value = fields[key];

        return `
          <tr>
            <td style="padding:10px;border:1px solid #ddd;background:#f8fafc;width:240px;">
              <strong>${escapeHtml(label)}</strong>
            </td>
            <td style="padding:10px;border:1px solid #ddd;">
              ${escapeHtml(value)}
            </td>
          </tr>
        `;
      })
      .join("");

    const attachments: Array<{
      filename: string;
      content: string;
    }> = [];

    if (inventoryFile instanceof File && inventoryFile.size > 0) {
      const arrayBuffer = await inventoryFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      attachments.push({
        filename: inventoryFile.name || "inventory-file",
        content: buffer.toString("base64"),
      });
    }

    const sellerName = cleanSubjectValue(
      fields.companySellerName || "Unknown seller"
    );

    const inventoryStatus = cleanSubjectValue(
      fields.inventoryStatus || "Unknown status"
    );

    const replyTo =
      fields.email && isValidEmail(fields.email) ? fields.email : undefined;

    const { data, error } = await resend.emails.send({
      from: process.env.QUOTE_FROM_EMAIL,
      to: process.env.QUOTE_TO_EMAIL,
      ...(replyTo ? { replyTo } : {}),
      subject: `New FBA Quote Request - ${sellerName} - ${inventoryStatus}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a;">
          <h2>New Amazon FBA Inventory Quote Request</h2>

          <p>
            A seller has submitted the quote form on the website.
          </p>

          <table style="border-collapse:collapse;width:100%;max-width:760px;">
            ${rows || "<tr><td>No form fields were submitted.</td></tr>"}
          </table>

          <p style="margin-top:16px;">
            ${
              attachments.length > 0
                ? "Inventory file attached."
                : "No inventory file was uploaded."
            }
          </p>

          <p style="margin-top:16px;font-size:13px;color:#64748b;">
            This submission does not guarantee an offer. Review the inventory details manually before responding.
          </p>
        </div>
      `,
      attachments,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Quote form error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong sending the quote request.",
      },
      { status: 500 }
    );
  }
}