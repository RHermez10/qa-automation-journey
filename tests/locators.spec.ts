import { test, expect } from "@playwright/test";

test("find a heading using a locator", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  const heading = page.getByRole("heading", {
    name: "Playwright enables reliable web automation for testing, scripting, and AI agents.",
  });

  await expect(heading).toBeVisible();
});

test("find a link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page.getByRole("link", { name: "Get started" })).toBeVisible();
});

test("finding a heading by its role", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("heading", {
      name: "Playwright enables reliable web automation for testing, scripting, and AI agents.",
    })
  ).toBeVisible();
});

test("find text on a webpage", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page.getByText("Get started")).toBeVisible();
});

test("get by labe", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await expect(page.getByLabel("username")).toBeVisible();
});

test("locate a button", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");

  await expect(page.getByRole("button", { name: "Add Element" })).toBeVisible();
});

test("locate another elemnet", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");

  await expect(page.getByRole("heading", { name: "Checkboxes" })).toBeVisible();
});

test("locate a paragraph", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/typos");

  await expect(
    page.getByText("This example demonstrates a typo being introduced.")
  ).toBeVisible();
});

test("locate a link by its text", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/abtest");

  await expect(
    page.getByRole("link", { name: "Elemental Selenium" })
  ).toBeVisible();
});
