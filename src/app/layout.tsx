import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'AERRATRIC TECHNOLOGY INC | Intelligent Software for Sustainable Growth',
  description: 'AERRATRIC TECHNOLOGY INC designs modern SaaS platforms, leveraging AI and digital transformation to streamline operations and enhance user experiences for long-term business scalability. Experience earth-tone luxury in intelligent software.',
  keywords: ["SaaS, AI, digital transformation, scalable platforms, software development, intelligent automation, cloud, devops, product design, enterprise solutions, earth-tone, luxury tech"],
  openGraph: {
    "title": "AERRATRIC TECHNOLOGY INC | Intelligent Software for Sustainable Growth",
    "description": "AERRATRIC TECHNOLOGY INC designs modern SaaS platforms, leveraging AI and digital transformation to streamline operations and enhance user experiences for long-term business scalability.",
    "url": "https://aerrartictechnology.com",
    "siteName": "AERRATRIC TECHNOLOGY INC",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-abstract-software-dashboard-1774469590789-37351c22.png",
        "alt": "Abstract UI dashboard with organic lines"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "AERRATRIC TECHNOLOGY INC | Intelligent Software for Sustainable Growth",
    "description": "AERRATRIC TECHNOLOGY INC designs modern SaaS platforms, leveraging AI and digital transformation to streamline operations and enhance user experiences for long-term business scalability.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-abstract-software-dashboard-1774469590789-37351c22.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
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
          <Tag />
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
