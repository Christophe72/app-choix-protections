import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed Circuit Types
  await prisma.circuitType.createMany({
    data: [
      {
        nom: "Prises Cuisine",
        section: "2.5 mm²",
        longueurMax: 25,
        disjoncteur: 20,
        typeCourbe: "C",
        differentiel: "30mA - Type A",
        remarque: "max 8 prises par circuit",
      },
      {
        nom: "Éclairage",
        section: "1.5 mm²",
        longueurMax: 30,
        disjoncteur: 16,
        typeCourbe: "B",
        differentiel: "30mA - Type AC",
        remarque: "un circuit par étage recommandé",
      },
      {
        nom: "Prises Ordinaires",
        section: "2.5 mm²",
        longueurMax: 30,
        disjoncteur: 16,
        typeCourbe: "C",
        differentiel: "30mA - Type AC",
        remarque: "max 8 prises par circuit",
      },
      {
        nom: "Gros Électroménager",
        section: "2.5 mm²",
        longueurMax: 20,
        disjoncteur: 20,
        typeCourbe: "C",
        differentiel: "30mA - Type A",
        remarque: "circuit dédié par appareil",
      },
      {
        nom: "Chauffage Électrique",
        section: "2.5 mm²",
        longueurMax: 25,
        disjoncteur: 20,
        typeCourbe: "C",
        differentiel: "30mA - Type AC",
        remarque: "puissance max 4500W par circuit",
      },
    ],
  });

  // Seed Normes RGIE
  await prisma.normeRGIE.createMany({
    data: [
      {
        article: "4.4.3",
        description:
          "Chaque circuit prises doit être protégé par un différentiel de 30mA.",
      },
      {
        article: "4.5.2",
        description:
          "La section minimale des conducteurs est de 1.5 mm² pour l'éclairage.",
      },
      {
        article: "4.5.3",
        description:
          "La section minimale des conducteurs est de 2.5 mm² pour les prises.",
      },
      {
        article: "4.6.1",
        description:
          "Maximum 8 prises par circuit pour les prises ordinaires 16A.",
      },
      {
        article: "4.7.2",
        description: "Les gros électroménagers doivent avoir un circuit dédié.",
      },
    ],
  });

  console.log(
    "✅ Base de données initialisée avec les circuits types et normes RGIE"
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
