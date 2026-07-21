import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Chen — Data Scientist & Data Analyst",
  description:
    "Elite Data Scientist & Data Analyst specializing in Machine Learning, Deep Learning, and AI-driven solutions. Building intelligent systems that transform data into impactful decisions.",
  keywords: [
    "Data Scientist",
    "Data Analyst",
    "Machine Learning",
    "Deep Learning",
    "AI",
    "Python",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Alex Chen" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Alex Chen — Data Scientist & Data Analyst",
    description:
      "Elite Data Scientist & Data Analyst specializing in Machine Learning, Deep Learning, and AI-driven solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen — Data Scientist & Data Analyst",
    description:
      "Elite Data Scientist & Data Analyst specializing in Machine Learning, Deep Learning, and AI-driven solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}