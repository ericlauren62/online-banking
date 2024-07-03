import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import "react-responsive-modal/styles.css";
import UserProvider from "@/context/UserContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </UserProvider>
  );
}
