import { NextResponse } from "next/server";

/**
 * Stub inquiry endpoint.
 *
 * It validates and logs the submission, then returns success. Wire this up to a
 * real destination before launch — a transactional email provider, a CRM, or a
 * shared inbox. See README.md "Contact form" for notes.
 */

type InquiryPayload = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const MAX_LENGTHS: Record<keyof InquiryPayload, number> = {
  name: 120,
  company: 160,
  email: 200,
  message: 5000,
};

function validate(body: unknown) {
  const errors: string[] = [];

  if (typeof body !== "object" || body === null) {
    return { errors: ["Request body must be a JSON object."] };
  }

  const record = body as Record<string, unknown>;
  const payload = {} as InquiryPayload;

  for (const key of Object.keys(MAX_LENGTHS) as Array<keyof InquiryPayload>) {
    const value = record[key];
    if (typeof value !== "string" || value.trim() === "") {
      errors.push(`"${key}" is required.`);
      continue;
    }
    if (value.length > MAX_LENGTHS[key]) {
      errors.push(`"${key}" is too long.`);
      continue;
    }
    payload[key] = value.trim();
  }

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push('"email" is not a valid address.');
  }

  return errors.length > 0 ? { errors } : { payload };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: ["Invalid JSON body."] },
      { status: 400 },
    );
  }

  const result = validate(body);

  if (result.errors) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 422 },
    );
  }

  // TODO: replace with a real delivery mechanism (email, CRM, or webhook).
  console.info("[inquiry] received", {
    name: result.payload.name,
    company: result.payload.company,
    email: result.payload.email,
    messageLength: result.payload.message.length,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 202 });
}
