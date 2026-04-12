import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jun Hong — Private Chauffeur Service in Seoul",
  description:
    "Premium private chauffeur service in Seoul. Airport transfers, city tours, business travel. Fluent English communication. Book your ride today.",
  keywords:
    "Seoul chauffeur, private driver Seoul, airport transfer Korea, international taxi Seoul",
  openGraph: {
    title: "Jun Hong — Private Chauffeur Service in Seoul",
    description:
      "Premium private chauffeur service in Seoul for tourists and business travelers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
