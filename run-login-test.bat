@echo off
echo 🔹 Exécution du test de connexion (login.spec.ts)...
npx playwright test tests/login.spec.ts
echo ✅ Test de connexion terminé.
pause
