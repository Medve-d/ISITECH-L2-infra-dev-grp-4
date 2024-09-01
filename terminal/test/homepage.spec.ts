import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Vérifier le titre de la page
  await expect(page).toHaveTitle(/React App/);

  // Vérifier un lien dans la page
  const link = page.locator('a', { hasText: 'Learn React' });
  await expect(link).toHaveAttribute('href', 'https://reactjs.org/');
});
