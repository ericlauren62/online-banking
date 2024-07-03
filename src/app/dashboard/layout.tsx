"use client";

import Link from "next/link";
import Logo from "/public/footerLogo.svg";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { sessionStatus } from "@/utils/session";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { useUserContext } from "@/context/UserContext";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { state } = useUserContext();

  useLayoutEffect(() => {
    const session = sessionStatus;
    if (!session) {
      redirect("/login");
    }
  }, []);

  return (
    <>
      <Toaster position="top-right" />

      <header className="bg-blue py-2">
        <div className="container">
          <nav className="flex justify-between items-center py-3">
            <Link href="/app">
              <Image src={Logo} alt="logo" />
            </Link>

            <div className="text-white flex items-center gap-x-3">
              <FaRegUserCircle />
              <p className="">
                {state?.firstname} {state?.lastname}
              </p>
            </div>
          </nav>
        </div>
        {pathname === "/dashboard" && (
          <div className="text-center text-white py-8">
            <h1 className="text-4xl mb-3">Welcome back,</h1>
            <p className="font-bold text-2xl">
              {state?.firstname} {state?.lastname}!
            </p>
          </div>
        )}
        <ul className="bg-white flex items-center justify-center gap-x-6 py-2">
          <li className="hover:text-blue hover:font-medium">
            <Link href="/dashboard">My Account</Link>
          </li>
          <li className="hover:text-blue hover:font-medium">
            <Link href="/dashboard/transfer">Transfer</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </>
  );
}
