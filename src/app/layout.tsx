import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const shareTech = Share_Tech_Mono({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mohammad Galib Khan | Full-Stack Java Developer & UI Engineer",
  description: "Futuristic interactive portfolio of Mohammad Galib Khan - Computer Science undergraduate building real-world full-stack solutions with Java, Spring Boot, React, and IoT simulations.",
  authors: [{ name: "Mohammad Galib Khan" }],
  keywords: ["Mohammad Galib Khan", "Portfolio", "Full Stack Developer", "Java Developer", "Spring Boot", "React", "Bhopal", "LNCT", "Software Engineer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${shareTech.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cyber-dark text-slate-200">
        {children}
      </body>
    </html>
  );
}
