import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.cnippet.com/"),

  title: "Cnippet Blog",
  description:
    "Stay ahead of the curve with Cnippet Blog - your destination for the latest in tech, including Next.js, React, and related innovations. Explore insightful blogs on cutting-edge technologies and elevate your knowledge to new heights.",
  applicationName: "Cnippet Blog",

  openGraph: {
    title: "Cnippet Blog",
    description:
      "Stay ahead of the curve with Cnippet Blog - your destination for the latest in tech, including Next.js, React, and related innovations. Explore insightful blogs on cutting-edge technologies and elevate your knowledge to new heights.",
    url: "https://blog.cnippet.com/",
    // images: [
    //   {
    //     url: "/images/meta/home.png",
    //     width: 1080,
    //     height: 680,
    //     alt: "cnippet-ui",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cnippet Blog",
    description:
      "Stay ahead of the curve with Cnippet Blog - your destination for the latest in tech, including Next.js, React, and related innovations. Explore insightful blogs on cutting-edge technologies and elevate your knowledge to new heights.",
    // images: [
    //   {
    //     url: "/images/meta/home.png",
    //     width: 1080,
    //     height: 680,
    //     alt: "cnippet-ui",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-7EF5RKJ1B6" />
    </html>
  );
}
