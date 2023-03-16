import { test, expect } from '@playwright/test';

test('login to the application', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/MDN/);

  // Expect the authenticated state.
  await expect(page.locator('.avatar')).toBeVisible()

});
