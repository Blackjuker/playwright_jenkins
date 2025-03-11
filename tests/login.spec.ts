import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { clearScreenDown } from 'readline';
import { closeSync } from 'fs';

test('Login to SauceDemo using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Aller sur la page de login
  await loginPage.gotoLoginPage();

  // Remplir les champs et se connecter
  await loginPage.login('standard_user', 'secret_sauce');

  // Vérifier que la connexion a réussi
  await loginPage.verifySuccessfulLogin();
});


