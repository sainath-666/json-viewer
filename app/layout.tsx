import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Inter as requested/preferred
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://json-viewer.sainathreddy.in"),
  title: {
    default: "Free Online JSON Viewer, Formatter & Validator",
    template: "%s | JSON Viewer",
  },
  description:
    "Paste, upload, or fetch JSON to validate, format, and visualize it in a beautiful, interactive tree structure. The best free online tool for developers to edit, parse, and beautify JSON data.",
  keywords: [
    "JSON",
    "JSON viewer",
    "JSON formatter",
    "JSON validator",
    "JSON editor",
    "online JSON tool",
    "JSON parser",
    "format JSON",
    "validate JSON",
    "beautify JSON",
    "developer tools",
  ],
  authors: [{ name: "Sainath Reddy" }],
  creator: "Sainath Reddy",
  publisher: "Sainath Reddy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://json-viewer.sainathreddy.in",
    title: "Free Online JSON Viewer, Formatter & Validator",
    description:
      "Paste, upload, or fetch JSON to validate, format, and visualize it in a beautiful, interactive tree structure.",
    siteName: "JSON Viewer",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "JSON Viewer Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online JSON Viewer, Formatter & Validator",
    description:
      "Paste, upload, or fetch JSON to validate, format, and visualize it in a beautiful, interactive tree structure.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "JSON Viewer",
              url: "https://json-viewer.sainathreddy.in",
              description: "Free online JSON viewer, formatter, and validator.",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              author: {
                "@type": "Person",
                name: "Sainath Reddy",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
