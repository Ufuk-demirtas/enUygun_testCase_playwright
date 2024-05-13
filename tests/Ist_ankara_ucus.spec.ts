import { test, expect } from '@playwright/test';
import { KalkisHavaAlani, VarisHavaAlani, KalkisGun, VarisGun }from './BaseTestV';

test('İstanbul Ankara 10:00 - 17:00 arası tüm Gidiş Dönüş ucuşlar', async ({ page }) => {
  await page.goto('https://www.enuygun.com/');
  await page.getByTestId('flight-origin-label').click();
  await page.getByRole('button', { name: KalkisHavaAlani }).click();
  await page.getByTestId('flight-destination-label').click();
  await page.getByRole('button', { name: VarisHavaAlani }).click();
  await page.getByTestId('search-round-trip-label').click();
  await page.getByTestId('enuygun-homepage-flight-departureDate-input-comp').locator('div').nth(3).click();
  await page.getByRole('button', { name: KalkisGun }).first().click();
  await page.getByTestId('enuygun-homepage-flight-returnDate-datepicker-input').click();
  await page.getByRole('button', { name: VarisGun }).first().click();
  await page.getByTestId('enuygun-homepage-flight-submitButton').click();
  await page.getByText('Gidiş kalkış / varış saatleri').click();
  await page.getByText('Öğle').first().click();
  await page.getByText(':00 ile 17:00 arası').click();
  await expect(page.locator('#SearchRoot')).toContainText('10:00 ile 17:00 arası');
  await page.getByText('Öğle').nth(1).click();
  await expect(page.locator('#SearchRoot')).toContainText('10:00 ile 17:00 arası');
});