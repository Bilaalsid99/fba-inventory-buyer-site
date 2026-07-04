import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Buffer } from "node:buffer";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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

    const fields: Record<string, string> = {};

    for (const [key, value] of formData.entries()) {
      if (key === "inventoryFile") continue;

      if (typeof value === "string") {
        fields[key] = value;
      }
    }

    const rows = Object.entries(fields)
      .map(([key, value]) => {
        return `
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">
              <strong>${escapeHtml(key)}</strong>
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
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
      const maxSize = 25 * 1024 * 1024;

      if (inventoryFile.size > maxSize) {
        return NextResponse.json(
          {
            success: false,
            error: "File is too large. Please upload a smaller file.",
          },
          { status: 400 }
        );
      }

      const arrayBuffer = await inventoryFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      attachments.push({
        filename: inventoryFile.name || "inventory-file",
        content: buffer.toString("base64"),
      });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.QUOTE_FROM_EMAIL,
      to: process.env.QUOTE_TO_EMAIL,
      subject: "New Amazon FBA Inventory Quote Request",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;">
          <h2>New Amazon FBA Inventory Quote Request</h2>

          <p>A seller has submitted the quote form on the website.</p>

          <table style="border-collapse:collapse;width:100%;max-width:700px;">
            ${rows || "<tr><td>No form fields were submitted.</td></tr>"}
          </table>

          <p style="margin-top:16px;">
            ${
              attachments.length > 0
                ? "Inventory file attached."
                : "No inventory file was uploaded."
            }
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