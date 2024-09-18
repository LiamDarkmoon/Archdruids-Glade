import type { Metadata } from "next";
import { noto } from "@/lib/fonts";
import "./globals.css";
import Image from 'next/image';
import Vitral from '../../public/Vitral.jpg';
import NavBar from './../components/container/NavBar';
import ContextProvider from "@/lib/contexts/ContextProvider";

export const metadata: Metadata = {
  title: "El Templo del Lobo",
  description: "Dungeon & Dragons webapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${noto.className} antialiased`}>
        <ContextProvider>
          <NavBar/>
          <Image
          id="background"
          src={ Vitral }
          alt='Autumn background'
          className='fixed h-screen lg:h-auto -z-20'
          sizes='100vw'
          />
          <div className='fixed top-0 bottom-0 h-screen w-screen lg:h-auto -z-20 bg-black/30'> asd </div>
          {children}
        </ContextProvider>
        </body>
    </html>
  );
}
