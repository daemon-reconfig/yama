import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MobileBlocker from "@/components/mobilewarning";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yama",
  description: "A H4ck3r's Cul7",
  images: [
    {
      url: "file.png",
      alt: "YAMA", 
    },
  ],
} as Metadata & { images: { url: string; alt: string }[] };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MobileBlocker />
        {children}
      </body>
    </html>
  );
}
