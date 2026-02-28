import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google"; // Use Inter as requested/preferred
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

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
    "JSON beautifier",
    "JSON stringify",
    "JSON tree viewer",
    "free JSON formatter",
    "JSON syntax checker",
  ],
  authors: [{ name: "Sainath Reddy", url: "https://sainathreddy.in" }],
  creator: "Sainath Reddy",
  publisher: "Sainath Reddy",
  applicationName: "JSON Viewer",
  category: "Developer Tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://json-viewer.sainathreddy.in",
    title: "Free Online JSON Viewer, Formatter & Validator",
    description:
      "Paste, upload, or fetch JSON to validate, format, and visualize it in a beautiful, interactive tree structure. Professional JSON tools for developers.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "JSON Viewer",
              url: "https://json-viewer.sainathreddy.in",
              description:
                "Free online JSON viewer, formatter, and validator. Paste, upload, or fetch JSON to format and visualize it in an interactive tree structure.",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              author: {
                "@type": "Person",
                name: "Sainath Reddy",
                url: "https://sainathreddy.in",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
