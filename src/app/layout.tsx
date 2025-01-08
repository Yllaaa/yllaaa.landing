import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Montserrat, Playfair_Display } from "next/font/google";

const spaceSans = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  style: ["normal"],
  display: "swap",
  variable: "--space",
});
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  style: ["normal"],
  display: "swap",
  variable: "--monta",
});
const playfair = Playfair_Display({
  weight: [ "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  style: ["normal"],
  display: "swap",
  variable: "--play",
});
export const metadata: Metadata = {
  title: "YLLAAA",
  description: "YLLAAA landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceSans.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
