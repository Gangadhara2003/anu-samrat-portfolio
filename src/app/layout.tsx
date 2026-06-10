import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
});
const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-patrick",
});

export const metadata: Metadata = {
  title: "Anusamrat M | Content Writer & Creative Strategist",
  description: "Portfolio of Anusamrat M – Content Writer, Scriptwriter, SEO Strategist, and Creative Storyteller based in Bengaluru, India. Crafting narratives that inform, engage, and convert.",
  keywords: ["content writer", "scriptwriter", "SEO", "creative strategist", "Bengaluru", "portfolio"],
  authors: [{ name: "Anusamrat M" }],
  openGraph: {
    title: "Anusamrat M | Content Writer & Creative Strategist",
    description: "Crafting narratives that inform, engage, and convert.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kalam.variable} ${patrick.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
