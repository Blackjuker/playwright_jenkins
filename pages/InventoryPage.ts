import { Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryTitle = '.title';
  readonly addToCartButton = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
  readonly cartIcon = '.shopping_cart_badge';

  constructor(page: Page) {
    this.page = page;
  }

  async verifyInventoryPage() {
    await expect(this.page.locator(this.inventoryTitle)).toHaveText('Products');
  }

  async addToCart() {
    await this.page.click(this.addToCartButton);
  }

  async verifyCartBadge(count: string) {
    await expect(this.page.locator(this.cartIcon)).toHaveText(count);
  }
}
