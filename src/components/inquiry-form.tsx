"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui";
import { programs } from "@/content/programs";
import { site } from "@/content/site";

type Fields = {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  startDate: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  parentName: "",
  email: "",
  phone: "",
  childAge: "",
  startDate: "",
  message: "",
};

const ageOptions = [
  ...programs.map((program) => `${program.name} (${program.ages})`),
  "Not sure yet / expecting",
];

function validate(fields: Fields): Errors {
  const errors: Errors = {};

  if (!fields.parentName.trim()) {
    errors.parentName = "Please tell us your name.";
  }

  if (!fields.email.trim()) {
    errors.email = "We need an email address to reply.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
    errors.email = "That email address looks incomplete.";
  }

  const digits = fields.phone.replace(/\D/g, "");
  if (!fields.phone.trim()) {
    errors.phone = "A phone number helps us reach you quickly.";
  } else if (digits.length < 7) {
    errors.phone = "Please enter a phone number we can call.";
  }

  if (!fields.childAge) {
    errors.childAge = "Choose the age group closest to your child.";
  }

  if (!fields.message.trim()) {
    errors.message = "Add a short note so we can answer properly.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "A little more detail helps — at least a sentence.";
  }

  return errors;
}

export function InquiryForm() {
  const formId = useId();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">(
    "idle",
  );

  const fieldId = (name: keyof Fields) => `${formId}-${name}`;
  const errorId = (name: keyof Fields) => `${formId}-${name}-error`;

  const update = (name: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const mailtoFallback = `mailto:${site.email}?subject=${encodeURIComponent(
    `Childcare inquiry — ${fields.parentName || "new family"}`,
  )}&body=${encodeURIComponent(
    [
      `Name: ${fields.parentName}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      `Child age group: ${fields.childAge}`,
      `Preferred start: ${fields.startDate || "—"}`,
      "",
      fields.message,
    ].join("\n"),
  )}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0] as keyof Fields;
      document.getElementById(fieldId(first))?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("sent");
      setFields(empty);
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-4xl border border-teal-200 bg-teal-50 p-8 text-center"
      >
        <h3 className="font-display text-2xl font-bold text-teal-900">
          Thank you — your inquiry is in.
        </h3>
        <p className="mt-3 leading-relaxed text-ink-muted">
          We reply to every family within [1–2 business days], usually with
          current openings and a couple of tour times. If it is urgent, email us
          at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-teal-700 underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-semibold text-teal-700 underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-4xl border border-teal-100 bg-white p-6 shadow-[0_1px_2px_rgba(18,63,72,0.04),0_18px_40px_-32px_rgba(18,63,72,0.35)] sm:p-8"
    >
      <h2 className="font-display text-2xl font-bold text-teal-900">
        Ask about openings
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        Fields marked with an asterisk (*) are required. We use your details
        only to answer your enrollment questions.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          required
          id={fieldId("parentName")}
          errorId={errorId("parentName")}
          error={errors.parentName}
          className="sm:col-span-2"
        >
          <input
            id={fieldId("parentName")}
            name="parentName"
            type="text"
            autoComplete="name"
            value={fields.parentName}
            onChange={(event) => update("parentName", event.target.value)}
            aria-invalid={errors.parentName ? true : undefined}
            aria-describedby={errors.parentName ? errorId("parentName") : undefined}
            className={inputClass(!!errors.parentName)}
          />
        </Field>

        <Field
          label="Email"
          required
          id={fieldId("email")}
          errorId={errorId("email")}
          error={errors.email}
        >
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? errorId("email") : undefined}
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field
          label="Phone"
          required
          id={fieldId("phone")}
          errorId={errorId("phone")}
          error={errors.phone}
        >
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? errorId("phone") : undefined}
            className={inputClass(!!errors.phone)}
          />
        </Field>

        <Field
          label="Child's age group"
          required
          id={fieldId("childAge")}
          errorId={errorId("childAge")}
          error={errors.childAge}
        >
          <select
            id={fieldId("childAge")}
            name="childAge"
            value={fields.childAge}
            onChange={(event) => update("childAge", event.target.value)}
            aria-invalid={errors.childAge ? true : undefined}
            aria-describedby={errors.childAge ? errorId("childAge") : undefined}
            className={inputClass(!!errors.childAge)}
          >
            <option value="">Select an age group</option>
            {ageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Preferred start date"
          hint="Optional"
          id={fieldId("startDate")}
          errorId={errorId("startDate")}
        >
          <input
            id={fieldId("startDate")}
            name="startDate"
            type="date"
            value={fields.startDate}
            onChange={(event) => update("startDate", event.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <Field
          label="How can we help?"
          required
          id={fieldId("message")}
          errorId={errorId("message")}
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            id={fieldId("message")}
            name="message"
            rows={5}
            value={fields.message}
            onChange={(event) => update("message", event.target.value)}
            placeholder="Tell us about your child, the days you need care, and any questions you have."
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? errorId("message") : undefined}
            className={inputClass(!!errors.message)}
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send inquiry"}
        </Button>
        <p className="text-sm text-ink-muted">
          Or email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-teal-700 underline underline-offset-4"
          >
            {site.email}
          </a>
        </p>
      </div>

      <div aria-live="polite">
        {status === "failed" ? (
          <p className="mt-5 rounded-2xl border border-apricot-300 bg-apricot-100 p-4 text-sm leading-relaxed text-teal-900">
            Something went wrong sending your inquiry.{" "}
            <a
              href={mailtoFallback}
              className="font-semibold underline underline-offset-4"
            >
              Send it as an email instead
            </a>{" "}
            and we will reply just as quickly.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-2xl border bg-cream-50/60 px-4 py-3 text-base text-ink placeholder:text-ink-muted/60",
    "transition-colors focus:bg-white",
    hasError ? "border-apricot-500" : "border-teal-200 hover:border-teal-300",
  ].join(" ");
}

function Field({
  label,
  id,
  error,
  errorId,
  hint,
  required,
  className = "",
  children,
}: {
  label: string;
  id: string;
  error?: string;
  errorId: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-2 text-sm font-semibold text-teal-900"
      >
        <span>
          {label}
          {required ? (
            <span className="text-apricot-600"> *</span>
          ) : null}
        </span>
        {hint ? (
          <span className="text-xs font-normal text-ink-muted">{hint}</span>
        ) : null}
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-apricot-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
