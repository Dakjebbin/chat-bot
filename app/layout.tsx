import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Chat Bot",
  description: "Chat Bot By Dak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    
  );
}
