"use client";

import Link from "next/link";
import Logo from "/public/footerLogo.svg";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { sessionStatus } from "@/utils/session";
import { redirect } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useUserContext } from "@/context/UserContext";
import { Toaster } from "react-hot-toast";
import { ImUserPlus } from "react-icons/im";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { state } = useUserContext();

  const [img, setImg] = useState("");

  useLayoutEffect(() => {
    const session = sessionStatus;
    if (!session) {
      redirect("/login");
    }
  }, []);

  useLayoutEffect(() => {
    if (state?.profilepicture) {
      setImg(state.profilepicture);
    }
  }, [state.profilepicture]);

  return (
    <>
      <Toaster position="top-right" />

      <header className="bg-blue py-2">
        <div className="container">
          <nav className="flex justify-between items-center py-3">
            <Link href="/dashboard" className="w-[35%]">
              <Image src={Logo} alt="logo" />
            </Link>
            <div className="flex items-center gap-x-4">
              <div className=" h-[50px] w-[50px] border border-black rounded-[100%] relative overflow-hidden cursor-pointer">
                {img ? (
                  <div>
                    <div
                      className="w-[50px] h-[50px] rounded-[100%] border"
                      style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                ) : (
                  <div className="relative text-5xl flex items-center justify-center object-center object-contain bg-gray2 rounded-[100%] h-[100px] w-[100px]">
                    <ImUserPlus />
                  </div>
                )}
              </div>
              <div className="text-white text-lg">
                <p>
                  {state?.firstname} {state?.lastname}
                </p>
              </div>
            </div>
          </nav>
        </div>

        {pathname === "/dashboard" && (
          <div className="text-center text-white py-10">
            <h1 className="text-2xl lg:text-4xl mb-3">Welcome back,</h1>
            <p className="font-bold text-xl lg:text-2xl">
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
