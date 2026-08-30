import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "@/components/sections/contact-form";

type MockResponse = {
  ok: boolean;
  json: () => Promise<unknown>;
};

function response(
  ok: boolean,
  body: unknown,
): MockResponse {
  return {
    ok,
    json: async () => body,
  };
}

async function fillValidForm() {
  const user = userEvent.setup();

  await user.type(screen.getByLabelText("Name"), "Mohammad Shahil Khan");
  await user.type(screen.getByLabelText("Email"), "shahil@example.com");
  await user.selectOptions(
    screen.getByLabelText("Reason for contacting"),
    "job",
  );
  await user.type(
    screen.getByLabelText("Message"),
    "I would like to discuss a software engineering opportunity.",
  );

  return user;
}

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("submits the expected payload and resets after success", async () => {
    const fetchMock = vi.mocked(fetch);
    fetchMock.mockResolvedValue(
      response(true, {
        ok: true,
        message: "Message sent successfully.",
      }) as Response,
    );

    render(<ContactForm />);
    const user = await fillValidForm();

    await user.click(screen.getByRole("button", { name: "Send Message" }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    expect(fetchMock).toHaveBeenCalledWith("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Mohammad Shahil Khan",
        email: "shahil@example.com",
        reason: "job",
        message:
          "I would like to discuss a software engineering opportunity.",
        website: "",
      }),
    });

    expect(
      await screen.findByText("Message sent successfully."),
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Name")).toHaveValue("");
    expect(screen.getByLabelText("Email")).toHaveValue("");
    expect(screen.getByLabelText("Message")).toHaveValue("");
  });

  it("renders field errors returned by the API", async () => {
    const fetchMock = vi.mocked(fetch);
    fetchMock.mockResolvedValue(
      response(false, {
        ok: false,
        message: "Please check the form and try again.",
        errors: {
          email: ["Please enter a valid email address."],
          message: ["Please provide a little more detail."],
        },
      }) as Response,
    );

    render(<ContactForm />);

    const user = userEvent.setup();
    await user.type(screen.getByLabelText("Name"), "Mohammad Shahil Khan");
    await user.type(screen.getByLabelText("Email"), "invalid-email");
    await user.type(screen.getByLabelText("Message"), "Too short.");
    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect(
      await screen.findByText("Please enter a valid email address."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please provide a little more detail."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please check the form and try again."),
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Email")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    expect(screen.getByLabelText("Message")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("shows the direct-email fallback when the request fails", async () => {
    const fetchMock = vi.mocked(fetch);
    fetchMock.mockRejectedValue(new Error("Network unavailable"));

    render(<ContactForm />);
    const user = await fillValidForm();

    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect(
      await screen.findByText(
        "Your message could not be sent. Please use the direct email link instead.",
      ),
    ).toBeInTheDocument();
  });

  it("disables the submit button while the request is in progress", async () => {
    let resolveRequest:
      | ((value: MockResponse) => void)
      | undefined;

    const pendingRequest = new Promise<MockResponse>((resolve) => {
      resolveRequest = resolve;
    });

    const fetchMock = vi.mocked(fetch);
    fetchMock.mockImplementation(
      () => pendingRequest as Promise<Response>,
    );

    render(<ContactForm />);
    const user = await fillValidForm();

    await user.click(screen.getByRole("button", { name: "Send Message" }));

    const submittingButton = screen.getByRole("button", {
      name: "Sending...",
    });

    expect(submittingButton).toBeDisabled();

    resolveRequest?.(
      response(true, {
        ok: true,
        message: "Message sent successfully.",
      }),
    );

    expect(
      await screen.findByText("Message sent successfully."),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Send Message" }),
    ).toBeEnabled();
  });
});
