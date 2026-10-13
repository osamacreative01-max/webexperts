import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import ScrollReveal from "./components/ScrollReveal";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"], weight: ["300","400","500","600","700"], display: "swap" });

export const metadata: Metadata = {
  title: "Webexperts | Websites that connect your brand to customers",
  description: "Karachi-based designers and developers building fast, mobile-ready websites for businesses in 15+ countries.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}<ScrollReveal /></body>
    </html>
  );
}
