import type { Metadata } from "next";
import { DynaPuff } from "next/font/google";
import "./globals.css";

const dynapuff = DynaPuff({
  variable: "--font-dynapuff",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beth PFP Generator",
  description: "A profile picture generator for $BETH!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dynapuff.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
