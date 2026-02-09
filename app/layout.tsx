import type { Metadata } from "next";
import {Roboto_Condensed, PT_Sans_Narrow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin", 'cyrillic'],
});

const sansNarrow = PT_Sans_Narrow({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-narrow',
});

export const metadata: Metadata = {
  title: "relaxart",
  description: "Site IUP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${roboto.variable} ${sansNarrow.variable} antialiased min-h-screen flex flex-col justify-between`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
