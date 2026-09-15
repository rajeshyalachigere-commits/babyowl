import { NextResponse } from "next/server";

/**
 * Stub handler for the contact form.
 *
 * Right now a submission is validated and written to the server log, which is
 * enough for the site to work end-to-end without any third-party account. To
 * actually receive inquiries, send the payload onward from here — for example
 * with Resend, Postmark, SendGrid, or a Google Sheet / CRM webhook. See the
 * "Receiving form submissions for real" section of README.md.
 */

type Inquiry = {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  startDate?: string;
  message: string;
};

function isValid(body: unknown): body is Inquiry {
  if (typeof body !== "object" || body === null) return false;
  const value = body as Record<string, unknown>;
  const required = ["parentName", "email", "phone", "childAge", "message"];
  return required.every(
    (key) => typeof value[key] === "string" && (value[key] as string).trim(),
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!isValid(body)) {
    return NextResponse.json(
      { error: "Please fill in every required field." },
      { status: 422 },
    );
  }

  console.info("[BABYOWL] New childcare inquiry", {
    receivedAt: new Date().toISOString(),
    parentName: body.parentName,
    email: body.email,
    phone: body.phone,
    childAge: body.childAge,
    startDate: body.startDate ?? null,
    message: body.message,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
