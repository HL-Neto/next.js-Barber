import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Ferreira's Barber",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={`${playfair.variable} ${outfit.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
