import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";



export const metadata: Metadata = {
  title: "Wiki Search",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
