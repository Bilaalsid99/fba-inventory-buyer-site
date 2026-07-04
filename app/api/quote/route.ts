import { NextResponse } from "next/server";
import { sendQuoteRequestEmail } from "@/lib/email";
import { validateQuoteForm } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const validation = validateQuoteForm(formData);

    if (!validation.success) {
      return NextResponse.json({ ok: false, errors: validation.errors }, { status: 400 });
    }

    await sendQuoteRequestEmail({ data: validation.data, file: validation.file });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote form submission failed", error);
    return NextResponse.json(
      { ok: false, errors: { form: "Something went wrong. Please try again." } },
      { status: 500 }
    );
  }
}
