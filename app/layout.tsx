import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "McGruder Junk Removal | Fast, Affordable Junk Removal in Fort Worth, TX",
    template: "%s | McGruder Junk Removal",
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    images: [{ url: "/images/truck.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${manrope.variable}`}>
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
