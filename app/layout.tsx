import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Inter as requested/preferred
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Online JSON Viewer & Formatter",
  description:
    "Paste or upload JSON to validate, format, and view it in a beautiful tree structure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
