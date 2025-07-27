import { generateDynamicMetadata } from "@/lib/getDynamicMetadata";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bengali",
  subsets: ["bengali"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata() {
  return generateDynamicMetadata();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansBengali.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
