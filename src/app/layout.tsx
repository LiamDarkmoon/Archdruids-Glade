import type { Metadata } from "next";
import { noto } from "@/lib/fonts";
import NavBar from './../components/container/NavBar';
import "./globals.css";
import { CharactersProvider } from "@/lib/contexts/chractersContext";

export const metadata: Metadata = {
  title: "Archdruid's Glade",
  description: "Roll play games webapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${noto.className} antialiased`}>
        <CharactersProvider>
          <NavBar/>
          {children}
        </CharactersProvider>
        </body>
    </html>
  );
}
