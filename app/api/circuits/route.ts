import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const circuits = await prisma.circuitType.findMany({
      orderBy: {
        nom: "asc",
      },
    });
    return NextResponse.json(circuits);
  } catch (error) {
    console.error("Erreur lors de la récupération des circuits:", error);
    return NextResponse.json(
      { error: "Erreur serveur lors de la récupération des circuits" },
      { status: 500 }
    );
  }
}
