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
  email: string;
  message: string;
  company: string;
  inquiryType: string;
};

/** Keep in sync with `inquiryTypes` in src/content/site.ts. */
const INQUIRY_TYPES = [
  "owner",
  "landowner",
  "adviser",
  "family-or-friend",
  "other",
] as const;

/** Company is only expected from audiences that have one. */
const REQUIRED_FIELDS = ["name", "email", "message"] as const;

const MAX_LENGTHS: Record<keyof InquiryPayload, number> = {
  name: 120,
  email: 200,
  message: 5000,
  company: 160,
  inquiryType: 40,
};

function validate(body: unknown) {
  const errors: string[] = [];

  if (typeof body !== "object" || body === null) {
    return { errors: ["Request body must be a JSON object."] };
  }

  const record = body as Record<string, unknown>;
  const payload = { company: "", inquiryType: "other" } as InquiryPayload;

  for (const key of REQUIRED_FIELDS) {
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

  if (record.company !== undefined) {
    if (typeof record.company !== "string") {
      errors.push('"company" must be a string.');
    } else if (record.company.length > MAX_LENGTHS.company) {
      errors.push('"company" is too long.');
    } else {
      payload.company = record.company.trim();
    }
  }

  if (record.inquiryType !== undefined) {
    if (
      typeof record.inquiryType !== "string" ||
      !INQUIRY_TYPES.includes(record.inquiryType as (typeof INQUIRY_TYPES)[number])
    ) {
      errors.push('"inquiryType" is not a recognised value.');
    } else {
      payload.inquiryType = record.inquiryType;
    }
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
    inquiryType: result.payload.inquiryType,
    name: result.payload.name,
    company: result.payload.company || null,
    email: result.payload.email,
    messageLength: result.payload.message.length,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 202 });
}
