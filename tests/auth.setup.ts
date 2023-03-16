// auth.setup.ts
import { test as setup } from '@playwright/test';
const { PW, USER_NAME } = process.env;
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('/');

  // Click on Log in link
  await page.click('.signin-link');

  await page.locator('.input-text').type(USER_NAME);
  await page.locator('#submit-btn').click();

  await page.locator('#password').type(PW);
  await page.locator('#submit-btn').click();

  await page.locator('.avatar').waitFor();
  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});