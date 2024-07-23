import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import "react-responsive-modal/styles.css";
import UserProvider from "@/context/UserContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
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
