import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const validInput = {
  name: "Mohammad Shahil Khan",
  email: "shahil@example.com",
  reason: "job",
  message: "I would like to discuss a software engineering opportunity.",
  website: "",
} as const;

describe("contactSchema", () => {
  it("accepts valid contact input", () => {
    const result = contactSchema.safeParse(validInput);

    expect(result.success).toBe(true);
  });

  it("trims supported string fields", () => {
    const result = contactSchema.parse({
      ...validInput,
      name: "  Mohammad Shahil Khan  ",
      email: "  shahil@example.com  ",
      message: "  I would like to discuss a software engineering opportunity.  ",
    });

    expect(result.name).toBe("Mohammad Shahil Khan");
    expect(result.email).toBe("shahil@example.com");
    expect(result.message).toBe(
      "I would like to discuss a software engineering opportunity.",
    );
  });

  it("rejects an invalid email address", () => {
    const result = contactSchema.safeParse({
      ...validInput,
      email: "not-an-email",
    });

    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.flatten().fieldErrors.email).toContain(
        "Please enter a valid email address.",
      );
    }
  });

  it("rejects a message shorter than 20 characters", () => {
    const result = contactSchema.safeParse({
      ...validInput,
      message: "Too short.",
    });

    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.flatten().fieldErrors.message).toContain(
        "Please provide a little more detail.",
      );
    }
  });

  it("rejects a message longer than 4000 characters", () => {
    const result = contactSchema.safeParse({
      ...validInput,
      message: "a".repeat(4001),
    });

    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.flatten().fieldErrors.message).toContain(
        "Message must be 4000 characters or fewer.",
      );
    }
  });

  it("rejects an unsupported contact reason", () => {
    const result = contactSchema.safeParse({
      ...validInput,
      reason: "sales",
    });

    expect(result.success).toBe(false);
  });

  it("rejects honeypot content", () => {
    const result = contactSchema.safeParse({
      ...validInput,
      website: "https://spam.example.com",
    });

    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.flatten().fieldErrors.website).toContain(
        "Spam detected.",
      );
    }
  });

  it("defaults the honeypot field to an empty string", () => {
    const withoutWebsite = {
      name: validInput.name,
      email: validInput.email,
      reason: validInput.reason,
      message: validInput.message,
    };

    const result = contactSchema.parse(withoutWebsite);

    expect(result.website).toBe("");
  });
});
