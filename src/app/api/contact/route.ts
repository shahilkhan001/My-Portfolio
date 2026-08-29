import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { sendContactMessage } from "@/lib/mail";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 12_000;

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      {
        ok: false,
        message: "This endpoint accepts JSON requests only.",
      },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (
    Number.isFinite(contentLength) &&
    contentLength > MAX_REQUEST_BYTES
  ) {
    return NextResponse.json(
      {
        ok: false,
        message: "Request is too large.",
      },
      { status: 413 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid request body.",
      },
      { status: 400 },
    );
  }

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the form and try again.",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    await sendContactMessage(result.data);

    return NextResponse.json(
      {
        ok: true,
        message: "Message sent successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact message delivery failed:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Your message could not be sent right now. Please use the direct email link instead.",
      },
      { status: 500 },
    );
  }
}
