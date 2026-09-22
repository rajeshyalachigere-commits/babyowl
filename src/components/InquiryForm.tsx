"use client";

import { useState } from "react";
import { contact } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

const fields = [
  {
    name: "name",
    label: "Your name",
    type: "text",
    autoComplete: "name",
    required: true,
  },
  {
    name: "company",
    label: "Company or project",
    type: "text",
    autoComplete: "organization",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    required: true,
  },
] as const;

function buildMailto(values: Record<string, string>) {
  const subject = `Inquiry from ${values.name || "an operator"}${
    values.company ? ` — ${values.company}` : ""
  }`;
  const body = [
    `Name: ${values.name}`,
    `Company: ${values.company}`,
    `Email: ${values.email}`,
    "",
    values.message,
  ].join("\n");

  return `mailto:${contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const inputClass =
    "mt-3 w-full border border-sand bg-cream px-4 py-3.5 text-ink placeholder:text-graphite/50 transition-colors duration-200 focus:border-brass focus:outline-none";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-sand bg-cream p-8 md:p-10"
      >
        <p className="eyebrow text-brass-deep">Received</p>
        <h3 className="mt-5 text-2xl leading-snug">Thank you — that arrived.</h3>
        <p className="mt-4 leading-relaxed text-graphite">
          {contact.responseTime} If it is easier to continue over email, write to{" "}
          <a
            className="text-ink underline decoration-brass decoration-1 underline-offset-4"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="border border-sand bg-cream p-6 md:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.name === "email" ? "sm:col-span-2" : ""}
          >
            <label htmlFor={field.name} className="eyebrow text-graphite">
              {field.label}
              {field.required ? (
                <span aria-hidden className="text-brass">
                  {" "}
                  *
                </span>
              ) : null}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.required}
              value={values[field.name]}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  [field.name]: event.target.value,
                }))
              }
              className={inputClass}
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="message" className="eyebrow text-graphite">
            What you are building
            <span aria-hidden className="text-brass">
              {" "}
              *
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={values.message}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            aria-describedby="message-hint"
            className={`${inputClass} resize-y`}
          />
          <p id="message-hint" className="mt-3 text-sm text-graphite">
            The franchise or the site, roughly what it needs, and what you are
            hoping happens next. A paragraph is plenty.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="eyebrow inline-flex items-center justify-center border border-ink bg-ink px-8 py-4 text-cream transition-colors duration-300 hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send inquiry"}
        </button>
        <p className="text-sm text-graphite">
          Prefer email?{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-ink underline decoration-brass decoration-1 underline-offset-4"
          >
            {contact.email}
          </a>
        </p>
      </div>

      <p aria-live="polite" className="sr-only">
        {status === "submitting" ? "Sending your inquiry." : ""}
      </p>

      {status === "error" ? (
        <div
          role="alert"
          className="mt-6 border-l-2 border-brass bg-cream-deep p-5 text-sm leading-relaxed text-graphite"
        >
          Something went wrong sending that. Please{" "}
          <a
            href={buildMailto(values)}
            className="text-ink underline decoration-brass decoration-1 underline-offset-4"
          >
            send it as an email instead
          </a>{" "}
          — the message you typed will be carried over.
        </div>
      ) : null}
    </form>
  );
}
