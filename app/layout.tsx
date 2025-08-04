import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guide Circuits RGIE - Belgique",
  description:
    "Référentiel des types de circuits électriques selon le RGIE (Règlement Général sur les Installations Électriques) en Belgique",
  keywords:
    "RGIE, circuits électriques, Belgique, installation électrique, normes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
    </html>
  );
}
