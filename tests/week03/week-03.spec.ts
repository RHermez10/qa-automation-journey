import { test, expect } from "@playwright/test";

test("fill in username", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.getByLabel("username").fill("tomsmith");
});

test("verifies the username", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.getByLabel("username").fill("tomsmith");

  await expect(page.getByLabel("username")).toHaveValue("tomsmith");
});

test("replace the username", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.getByLabel("username").fill("tom");
  await page.getByLabel("username").fill("tomsmith");

  await expect(page.getByLabel("username")).toHaveValue("tomsmith");
});

test("fill in two fields", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.getByLabel("username").fill("tomsmith");
  await page.getByLabel("password").fill("SuperSecretPassword!");

  await expect(page.getByLabel("username")).toHaveValue("tomsmith");
  await expect(page.getByLabel("password")).toHaveValue("SuperSecretPassword!");
});

test("clear a textbox", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.getByLabel("username").fill("tomsmith");

  await page.getByLabel("username").clear();

  await expect(page.getByLabel("username")).toHaveValue("");
});

test("find a number input", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/inputs");

  await expect(page.getByRole("spinbutton")).toBeVisible();
});
