import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { BackgroundThree } from "@/components/BackgroundThree";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nhatnguyenhuynh.com"),
  title: "Nhat Nguyen — Backend Developer",
  description:
    "Backend Developer specializing in Java & Spring Boot. Building scalable RESTful APIs and high-performance systems.",
  keywords: [
    "Nhat Nguyen",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Redis",
    "Portfolio",
  ],
  authors: [{ name: "Nhat Nguyen" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Nhat Nguyen — Backend Developer",
    title: "Nhat Nguyen — Backend Developer",
    description:
      "Building scalable, high-performance backend systems with Java & Spring Boot.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhat Nguyen — Backend Developer",
    description:
      "Building scalable, high-performance backend systems with Java & Spring Boot.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <BackgroundThree />
          {children}
        </Providers>
      </body>
    </html>
  );
}
