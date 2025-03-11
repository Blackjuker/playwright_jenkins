@echo off
echo 🔹 Exécution du test de l'inventaire (inventory.spec.ts)...
npx playwright test tests/inventory.spec.ts
echo ✅ Test de l'inventaire terminé.
pause
