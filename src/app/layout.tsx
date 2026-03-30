import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
