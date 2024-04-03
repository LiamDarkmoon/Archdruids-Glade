import type { Metadata } from "next";
import { noto } from "@/lib/fonts";
import "./globals.css";

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
    <html lang="en" className="w-screen">
      <body className={`${noto.className} antialiased`}>{children}</body>
    </html>
  );
}
