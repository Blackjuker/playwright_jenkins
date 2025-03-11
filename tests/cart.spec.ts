import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/cartPage';

test('Add item to cart and verify in CartPage', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  // 🔹 Étape 1 : Connexion à l'application
  await loginPage.gotoLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifySuccessfulLogin();

  // 🔹 Étape 2 : Ajouter un article au panier
  await inventoryPage.verifyInventoryPage();
  await inventoryPage.addToCart();

  // 🔹 Étape 3 : Aller au panier et vérifier l'article
  await cartPage.gotoCartPage();
  await cartPage.verifyCartPage();
  await cartPage.verifyFirstItemName('Sauce Labs Backpack');

  // 🔹 Étape 4 : Supprimer l'article
  await cartPage.removeFirstItem();
});
