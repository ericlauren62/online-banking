"use client";

import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Set a timer to clear tokens from local storage after 2 hours
    const tokenExpirationTimer = setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("digit");
      localStorage.removeItem("accounts");
      localStorage.removeItem("transactions");
      // window.location.href = "/signin";
    }, 5 * 60 * 60 * 1000); // 2 hours in milliseconds

    // Clear the timer when the component unmounts or when the expiration time changes
    return () => clearTimeout(tokenExpirationTimer);
  }, []);

  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
