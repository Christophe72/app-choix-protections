import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const normes = await prisma.normeRGIE.findMany({
      orderBy: {
        article: "asc",
      },
    });
    return NextResponse.json(normes);
  } catch (error) {
    console.error("Erreur lors de la récupération des normes:", error);
    return NextResponse.json(
      { error: "Erreur serveur lors de la récupération des normes" },
      { status: 500 }
    );
  }
}
