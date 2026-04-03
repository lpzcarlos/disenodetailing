import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const fontPrimary = Bebas_Neue({
  weight: "400",
  variable: "--font-primary",
  subsets: ["latin"],
});

const fontSecondary = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diseño Detailing | Detailing y Estética de Vehículos en Sabadell",
  description: "Especialistas en limpieza detallada, pulido, protección de pintura y estética de vehículos en Sabadell. Resultados profesionales para quienes exigen lo mejor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontPrimary.variable} ${fontSecondary.variable}`}
    >
      <body>
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
