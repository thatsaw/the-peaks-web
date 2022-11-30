import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/open journalism for everyone - the peaks/i);
  });
});
