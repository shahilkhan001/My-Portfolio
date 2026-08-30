// @vitest-environment node

import { beforeEach, describe, expect, it, vi } from "vitest";

const { sendContactMessageMock } = vi.hoisted(() => ({
  sendContactMessageMock: vi.fn(),
}));

vi.mock("@/lib/mail", () => ({
  sendContactMessage: sendContactMessageMock,
}));

import { POST } from "@/app/api/contact/route";

const validPayload = {
  name: "Mohammad Shahil Khan",
  email: "shahil@example.com",
  reason: "job",
  message: "I would like to discuss a software engineering opportunity.",
  website: "",
};

function jsonRequest(
  body: unknown,
  headers: Record<string, string> = {},
) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    sendContactMessageMock.mockReset();
  });

  it("rejects non-JSON requests with 415", async () => {
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: "hello",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(415);
    expect(body).toEqual({
      ok: false,
      message: "This endpoint accepts JSON requests only.",
    });
    expect(sendContactMessageMock).not.toHaveBeenCalled();
  });

  it("rejects requests larger than the configured limit with 413", async () => {
    const request = jsonRequest(validPayload, {
      "Content-Length": "12001",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(413);
    expect(body).toEqual({
      ok: false,
      message: "Request is too large.",
    });
    expect(sendContactMessageMock).not.toHaveBeenCalled();
  });

  it("rejects malformed JSON with 400", async () => {
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "{invalid-json",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      ok: false,
      message: "Invalid request body.",
    });
    expect(sendContactMessageMock).not.toHaveBeenCalled();
  });

  it("returns field errors for invalid contact data", async () => {
    const response = await POST(
      jsonRequest({
        ...validPayload,
        email: "invalid-email",
        message: "Too short.",
      }),
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.ok).toBe(false);
    expect(body.message).toBe("Please check the form and try again.");
    expect(body.errors.email).toContain(
      "Please enter a valid email address.",
    );
    expect(body.errors.message).toContain(
      "Please provide a little more detail.",
    );
    expect(sendContactMessageMock).not.toHaveBeenCalled();
  });

  it("sends validated contact data and returns 200", async () => {
    sendContactMessageMock.mockResolvedValue(undefined);

    const response = await POST(
      jsonRequest({
        ...validPayload,
        name: "  Mohammad Shahil Khan  ",
        email: "  shahil@example.com  ",
        message:
          "  I would like to discuss a software engineering opportunity.  ",
      }),
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      ok: true,
      message: "Message sent successfully.",
    });
    expect(sendContactMessageMock).toHaveBeenCalledTimes(1);
    expect(sendContactMessageMock).toHaveBeenCalledWith({
      ...validPayload,
      name: "Mohammad Shahil Khan",
      email: "shahil@example.com",
      message: "I would like to discuss a software engineering opportunity.",
    });
  });

  it("returns 500 when email delivery fails", async () => {
    const consoleErrorMock = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);

    sendContactMessageMock.mockRejectedValue(new Error("SMTP unavailable"));

    const response = await POST(jsonRequest(validPayload));
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body).toEqual({
      ok: false,
      message:
        "Your message could not be sent right now. Please use the direct email link instead.",
    });
    expect(sendContactMessageMock).toHaveBeenCalledTimes(1);

    consoleErrorMock.mockRestore();
  });
});
