import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const robo = Roboto({
  subsets: ["latin"],
  weight: ["400"], 

});

export const metadata: Metadata = {
  title: "Protoflio",
  description: "show case all skill and project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robo.className} >
        {children}
      </body>
    </html>
  );
}
