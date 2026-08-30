import { expect, test } from "@playwright/test";

test("homepage loads the primary portfolio experience", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(
    "Mohammad Shahil Khan — Software Engineer",
  );

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Software Engineer & Full-Stack Developer",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "View Selected Work" }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: "Let's talk about the work that needs to be built.",
    }),
  ).toBeVisible();

  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Message")).toBeVisible();
});

test("work listing opens a project case study", async ({ page }) => {
  await page.goto("/work");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Selected software projects and engineering work.",
    }),
  ).toBeVisible();

  await page.getByRole("link", { name: "View Project" }).first().click();

  await expect(page).toHaveURL(/\/work\/tourist-safety$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "Tourist Safety" }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "Back to Work" }),
  ).toBeVisible();
});

test("resume page exposes current view and download actions", async ({
  page,
}) => {
  await page.goto("/resume");

  await expect(page).toHaveTitle("Resume | Mohammad Shahil Khan");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Engineering experience, selected projects, and technical capabilities.",
    }),
  ).toBeVisible();

  const viewResume = page.getByRole("link", { name: /View Resume/ });
  const downloadResume = page.getByRole("link", { name: /Download PDF/ });

  await expect(viewResume).toHaveAttribute(
    "href",
    /drive\.google\.com\/file\/d\/1L1RRuI86gExk5mVMxcjcwKuu73kH4JSj\/view/,
  );

  await expect(downloadResume).toHaveAttribute(
    "href",
    /drive\.google\.com\/uc\?export=download&id=1L1RRuI86gExk5mVMxcjcwKuu73kH4JSj/,
  );
});

test("desktop brand navigation returns to the homepage", async ({ page }) => {
  await page.goto("/resume");

  await page.getByRole("link", {
    name: "Mohammad Shahil Khan — Home",
  }).click();

  await expect(page).toHaveURL(/\/#top$/);

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Software Engineer & Full-Stack Developer",
    }),
  ).toBeVisible();
});

test("mobile navigation opens and reaches the resume page", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", {
    name: "Open navigation menu",
  });

  await expect(menuButton).toBeVisible();
  await menuButton.click();

  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();

  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Resume" })
    .click();

  await expect(page).toHaveURL(/\/resume$/);

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Engineering experience, selected projects, and technical capabilities.",
    }),
  ).toBeVisible();
});
