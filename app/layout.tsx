import type { Metadata } from "next";

import "./globals.css";
import LenisProvider from "./providers/LenisProvider";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Lama Healthcare",
  description:
    "Practice Management Solutions for Independent Healthcare Practices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider>
        <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
        </body>
      </LenisProvider>
    </html>
  );
}
