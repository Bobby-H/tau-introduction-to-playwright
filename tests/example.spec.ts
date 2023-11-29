import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.only('check Jave page', async ({page}) => {
// 1. Open the page
  await page.goto('https://playwright.dev');
// 2. Click at Get Started
  await page.getByRole('link', {name: 'Get Started'}).click();
// 3. Mouse hover the language dropdown
  await page.getByRole('button', {name: 'Node.js'}).hover();
// 4. Click Java
  await page.getByText('Java', {exact: true}).click();
// 5. Check the URL
  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
// 6. Check the text "Installing Playwright" is not being displayed
  await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();
// 7. Check the text below is displayed
  const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`
  await expect(page.getByText(javaDescription)).toBeVisible();
})