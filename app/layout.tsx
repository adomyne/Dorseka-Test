import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Dorseka – mobilių kranų nuoma visoje Lietuvoje",
  description: "Sunkioji technika sudėtingiems projektams. Dirbame visoje Lietuvoje 24/7",
  icons: { icon: "/assets/Logo icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="min-h-screen bg-white font-body antialiased">
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
