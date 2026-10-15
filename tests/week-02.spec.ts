import { test, expect } from "@playwright/test";

test("homepage has the correct title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveTitle(/Playwright/);
});

test("homepage displays the correct heading", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("heading", {
      name: "Playwright enables reliable web automation for testing, scripting, and AI agents.",
    })
  ).toBeVisible();
});