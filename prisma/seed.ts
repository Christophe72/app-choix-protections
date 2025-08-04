import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Initialise la base de données avec des types de circuits prédéfinis et des normes RGIE.
 *
 * - Ajoute plusieurs types de circuits électriques avec leurs spécifications (section, longueur max, disjoncteur, différentiel, remarques).
 * - Insère des articles réglementaires RGIE relatifs aux installations électriques.
 * - Affiche un message de confirmation après le succès de l'initialisation.
 *
 * @async
 * @function
 * @returns {Promise<void>} Résout lorsque l'initialisation est terminée.
 */
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
        remarque:
          "max 8 prises par circuit, exemple: prises pour cafetière, micro-ondes",
      },
      {
        nom: "Éclairage",
        section: "1.5 mm²",
        longueurMax: 30,
        disjoncteur: 16,
        typeCourbe: "B",
        differentiel: "30mA - Type AC",
        remarque:
          "un circuit par étage recommandé, exemple: spots LED salon, plafonnier chambre",
      },
      {
        nom: "Prises Ordinaires",
        section: "2.5 mm²",
        longueurMax: 30,
        disjoncteur: 16,
        typeCourbe: "C",
        differentiel: "30mA - Type AC",
        remarque:
          "max 8 prises par circuit, exemple: prises murales salon, bureau",
      },
      {
        nom: "Gros Électroménager",
        section: "2.5 mm²",
        longueurMax: 20,
        disjoncteur: 20,
        typeCourbe: "C",
        differentiel: "30mA - Type A",
        remarque:
          "circuit dédié par appareil, exemple: lave-linge, lave-vaisselle, four",
      },
      {
        nom: "Chauffage Électrique",
        section: "2.5 mm²",
        longueurMax: 25,
        disjoncteur: 20,
        typeCourbe: "C",
        differentiel: "30mA - Type AC",
        remarque:
          "puissance max 4500W par circuit, exemple: radiateur salle de bain",
      },
      {
        nom: "Plaque de cuisson",
        section: "6 mm²",
        longueurMax: 15,
        disjoncteur: 32,
        typeCourbe: "C",
        differentiel: "30mA - Type A",
        remarque: "circuit dédié, exemple: plaque induction",
      },
      {
        nom: "Prises Extérieures",
        section: "2.5 mm²",
        longueurMax: 20,
        disjoncteur: 16,
        typeCourbe: "C",
        differentiel: "30mA - Type A",
        remarque: "protection renforcée, exemple: prises jardin, garage",
      },
      {
        nom: "Ballon d'eau chaude",
        section: "2.5 mm²",
        longueurMax: 20,
        disjoncteur: 20,
        typeCourbe: "C",
        differentiel: "30mA - Type A",
        remarque: "circuit dédié, exemple: chauffe-eau électrique",
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
  .then(async (): Promise<void> => {
    await prisma.$disconnect();
  })
  .catch(async (e: unknown): Promise<void> => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
