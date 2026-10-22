import { test, expect } from "@playwright/test";

test("homepage has the correct title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});

test("homepage has a visible heading", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(
    page.getByRole("heading", {
      name: "Playwright enables reliable web automation for testing, scripting, and AI agents.",
    })
  ).toBeVisible();
});

test("home URL is correct", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveURL("https://playwright.dev/");
});

test("homepage title is correct", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});

test("homepage heading is visible", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("heading", {
      name: "Playwright enables reliable web automation for testing, scripting, and AI agents.",
    })
  ).toBeVisible();
});

test("homepage URL is correct", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveURL("https://playwright.dev/");
});

test("homepage displays the correct informationnn", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveTitle(/Playwright/);

  await expect(
    page.getByRole("heading", {
      name: "Playwright enables reliable web automation for testing, scripting, and AI agents.",
    })
  ).toBeVisible();

  await expect(page).toHaveURL("https://playwright.dev/");
});

test("homepage displays the correct information", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
  await expect(
    page.getByRole("heading", {
      name: "Playwright enables reliable web automation for testing, scripting, and AI agents.",
    })
  ).toBeVisible();
  await expect(page).toHaveURL("https://playwright.dev/");
});

test("homepage passes all checks", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveTitle(/Playwright/);

  await expect(
    page.getByRole("heading", {
      name: "Playwright enables reliable web automation for testing, scripting, and AI agents.",
    })
  ).toBeVisible();

  await expect(page).toHaveURL("https://playwright.dev/");
});

test("get started link is visible", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page.getByRole("link", { name: "Get started" })).toBeVisible();
});

test("Playwright documentation URL is correct", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");

  await expect(page).toHaveURL("https://playwright.dev/docs/intro");
});

test("documentation page has the correct title", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");
  await expect(page).toHaveTitle(/Playwright/);
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("documentation page passes all checks", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");

  await expect(page).toHaveTitle(/Playwright/);

  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();

  await expect(page).toHaveURL("https://playwright.dev/docs/intro");
});
