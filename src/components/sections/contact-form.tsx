"use client";

import { FormEvent, useState } from "react";
import {
  contactReasonLabels,
  contactReasons,
  type ContactReason,
} from "@/lib/contact-options";

type FieldErrors = Partial<
  Record<"name" | "email" | "reason" | "message" | "website", string[]>
>;

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "submitting"; message: "" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const initialState: SubmitState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>(initialState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      reason: String(formData.get("reason") ?? "") as ContactReason,
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    setFieldErrors({});
    setSubmitState({ status: "submitting", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        ok: boolean;
        message?: string;
        errors?: FieldErrors;
      };

      if (!response.ok || !result.ok) {
        setFieldErrors(result.errors ?? {});
        setSubmitState({
          status: "error",
          message:
            result.message ??
            "Your message could not be sent. Please try again.",
        });
        return;
      }

      form.reset();
      setSubmitState({
        status: "success",
        message: result.message ?? "Message sent successfully.",
      });
    } catch {
      setSubmitState({
        status: "error",
        message:
          "Your message could not be sent. Please use the direct email link instead.",
      });
    }
  }

  const inputClasses =
    "mt-2 w-full rounded-md border border-border-dark bg-surface-dark-muted px-4 py-3 text-sm text-ink-inverse outline-none transition-colors placeholder:text-zinc-600 focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium text-zinc-300">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            required
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            className={inputClasses}
          />
          {fieldErrors.name ? (
            <p id="contact-name-error" className="mt-2 text-sm text-red-300">
              {fieldErrors.name[0]}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-zinc-300">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
            className={inputClasses}
          />
          {fieldErrors.email ? (
            <p id="contact-email-error" className="mt-2 text-sm text-red-300">
              {fieldErrors.email[0]}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact-reason" className="text-sm font-medium text-zinc-300">
          Reason for contacting
        </label>
        <select
          id="contact-reason"
          name="reason"
          defaultValue="job"
          required
          aria-invalid={Boolean(fieldErrors.reason)}
          aria-describedby={fieldErrors.reason ? "contact-reason-error" : undefined}
          className={inputClasses}
        >
          {contactReasons.map((reason) => (
            <option key={reason} value={reason}>
              {contactReasonLabels[reason]}
            </option>
          ))}
        </select>
        {fieldErrors.reason ? (
          <p id="contact-reason-error" className="mt-2 text-sm text-red-300">
            {fieldErrors.reason[0]}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-zinc-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          maxLength={4000}
          required
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
          className={`${inputClasses} resize-y`}
        />
        {fieldErrors.message ? (
          <p id="contact-message-error" className="mt-2 text-sm text-red-300">
            {fieldErrors.message[0]}
          </p>
        ) : null}
      </div>

      <div
        aria-hidden="true"
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitState.status === "submitting"}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-ink-inverse px-5 py-2.5 font-medium text-ink transition-colors duration-200 hover:bg-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitState.status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${
            submitState.status === "success"
              ? "text-green-300"
              : submitState.status === "error"
                ? "text-red-300"
                : "text-zinc-500"
          }`}
        >
          {submitState.message}
        </p>
      </div>
    </form>
  );
}
