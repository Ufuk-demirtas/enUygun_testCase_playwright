import { test, expect } from '@playwright/test';
import { KalkisHavaAlani1, VarisHavaAlani1, KalkisGun, VarisGun } from './BaseTestV';

test('Ankara Antalya arası ekonomi 4 yetişkin 1 çocuk uçuşlar', async ({ page }) => {
  await page.goto('https://www.enuygun.com/');
  await page.getByTestId('flight-origin-label').click();
  await page.getByRole('button', { name: KalkisHavaAlani1 }).click();
  await page.getByTestId('flight-destination-label').click();
  await page.getByRole('button', { name: VarisHavaAlani1 }).click();
  await page.getByTestId('enuygun-homepage-flight-departureDate-datepicker-input').click();
  await page.getByRole('button', { name: KalkisGun }).first().click();
  await page.getByTestId('enuygun-homepage-flight-returnDate-label').click();
  await page.getByRole('button', { name: VarisGun }).first().click();
  await page.getByTestId('enuygun-homepage-flight-selectPassengerAndCabin').locator('label').click();
  await page.getByTestId('flight-adult-counter-plus-button').click();
  await page.getByTestId('flight-adult-counter-plus-button').click();
  await page.getByTestId('flight-child-counter-plus-button').click();
  await page.getByTestId('flight-infant-counter-plus-button').click();
  await page.getByTestId('enuygun-homepage-flight-doneBtn').click();
  await page.getByTestId('enuygun-homepage-flight-submitButton').click();


});
test('Ankara Antalya arası 1 yetişkin Aktarmasız uçuşlar', async ({ page }) => {
  await page.goto('https://www.enuygun.com/');
  await page.getByTestId('endesign-flight-origin-autosuggestion-input').click();
  await page.getByRole('button', { name: KalkisHavaAlani1 }).click();
  await page.getByTestId('flight-destination-label').click();
  await page.getByRole('button', { name: VarisHavaAlani1 }).click();
  await page.getByTestId('enuygun-homepage-flight-departureDate-datepicker-input').click();
  await page.getByRole('button', { name: KalkisGun }).first().click();
  await page.getByTestId('enuygun-homepage-flight-returnDate-label').click();
  await page.getByRole('button', { name: VarisGun }).first().click();
  await page.locator('label').filter({ hasText: 'Aktarmasız' }).getByTestId('flight-oneWayCheckbox-span').click();
  await page.getByTestId('enuygun-homepage-flight-submitButton').click();
  await expect(page.locator('#flight-0')).toContainText('Direkt Uçuş');
});

test('Ankara Antalya arası 1 yetişkin Aramayı Düzenle', async ({ page }) => {
  await page.goto('https://www.enuygun.com/');
  await page.getByTestId('flight-origin-label').click();
  await page.getByRole('button', { name: KalkisHavaAlani1 }).click();
  await page.getByTestId('flight-destination-label').click();
  await page.getByRole('button', { name: VarisHavaAlani1 }).click();
  await page.getByTestId('enuygun-homepage-flight-departureDate-datepicker-input').click();
  await page.getByRole('button', { name: KalkisGun }).first().click();
  await page.getByTestId('enuygun-homepage-flight-returnDate-label').click();
  await page.getByRole('button', { name: VarisGun }).first().click();
  await page.getByTestId('enuygun-homepage-flight-submitButton').click();
  await expect(page.locator('#flight-0')).toContainText('ESB');
  await expect(page.locator('#flight-0')).toContainText('AYT');
  await page.getByText('En hızlı').click();
  await page.getByTestId('selectMain').locator('i').click();
  await page.locator('#SearchRoot a').filter({ hasText: 'Aramayı Düzenle' }).click();
  await expect(page.getByRole('tablist')).toContainText('Günlük Tahmini Fiyatlar');
  await page.locator('#SearchRoot a').filter({ hasText: 'Günlük Tahmini Fiyatlar' }).click();
  await page.locator('#SearchRoot a').filter({ hasText: 'Aramayı Düzenle' }).click();
  await page.getByLabel('Origin Destination Switch').click();
  await page.getByTestId('formSubmitButton').click();

});

