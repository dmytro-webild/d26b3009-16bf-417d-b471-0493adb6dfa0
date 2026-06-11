import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'Digital Spark | Web Design for Small Businesses in Bowie, MD',
  description: 'Digital Spark crafts stunning, high-converting websites for small businesses in Bowie, Maryland. Ignite your online presence and engage your audience!',
  keywords: ["web design, small business, Bowie Maryland, website development, SEO, e-commerce, digital marketing, custom websites, web agency"],
  openGraph: {
    "title": "Digital Spark | Web Design for Small Businesses in Bowie, MD",
    "description": "Digital Spark crafts stunning, high-converting websites for small businesses in Bowie, Maryland. Ignite your online presence and engage your audience!",
    "url": "https://www.digitalspark.com",
    "siteName": "Digital Spark",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169849.jpg",
        "alt": "Digital Spark Website Dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Digital Spark | Web Design for Small Businesses in Bowie, MD",
    "description": "Digital Spark crafts stunning, high-converting websites for small businesses in Bowie, Maryland. Ignite your online presence and engage your audience!",
    "images": [
      "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169849.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
