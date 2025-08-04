@echo off
echo Initialisation du depot Git pour app-choix-protections...
echo.

echo Creation du README.md...
echo # app-choix-protections >> README.md
echo Guide des Circuits Electriques - RGIE Belgique >> README.md
echo. >> README.md
echo Application Next.js 15 avec TypeScript, TailwindCSS et Prisma >> README.md
echo pour la gestion des circuits electriques selon le RGIE. >> README.md

echo Initialisation du depot Git...
git init

echo Ajout des fichiers au depot...
git add .

echo Premier commit...
git commit -m "first commit - Guide des circuits RGIE avec Next.js 15"

echo Creation de la branche main...
git branch -M main

echo Ajout du depot distant...
git remote add origin https://github.com/Christophe72/app-choix-protections.git

echo Push vers GitHub...
git push -u origin main

echo.
echo ✅ Depot Git initialise et pousse vers GitHub avec succes !
pause
