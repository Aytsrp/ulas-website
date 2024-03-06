import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Unit Layanan Aduan Surakarta',
  description: 'Beri aspirasi kapan saja dan di mana saja melalui smartphone kamu.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth lg:snap-y">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
