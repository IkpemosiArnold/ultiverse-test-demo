import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const terminus = localFont({
  src: "./fonts/Terminus500.ttf",
  variable: "--font-terminus",
  weight: "500",
});

export const terminusBold = localFont({
  src: "./fonts/Terminus700.ttf",
  variable: "--font-terminus-700",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Ultiverse Demo",
  description: "submission by Arnold Adeyemi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${terminus.variable} ${terminusBold.variable} `}>
        {children}
      </body>
    </html>
  );
}
