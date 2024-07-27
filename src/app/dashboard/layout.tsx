"use client";

import Link from "next/link";
import Logo from "/public/footerLogo.svg";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { sessionStatus } from "@/utils/session";
import { redirect, useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useUserContext } from "@/context/UserContext";
import { Toaster } from "react-hot-toast";
import { ImUserPlus } from "react-icons/im";
import { GoChevronDown } from "react-icons/go";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { auth } from "@/lib/firebase";
import Marquee from "react-fast-marquee";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { state } = useUserContext();

  const [img, setImg] = useState("");
  const [openNav, setOpenNav] = useState(false);

  const router = useRouter();

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

  const handleClickOpenNav = () => {
    setOpenNav(!openNav);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Firebase sign out operation

      // Clear local storage items
      localStorage.removeItem("token");
      localStorage.removeItem("digit");

      // Redirect to login page
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
      // Handle error (optional)
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <header className="bg-blue py-2">
        <div className="container">
          <nav className="flex justify-between items-center py-3">
            <Link href="/dashboard" className="w-[30%] lg:w-[35%]">
              <Image src={Logo} alt="logo" />
            </Link>
            <div className="w-[45%] flex items-center gap-x-4">
              <div>
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
                    <div>
                      <div className="relative text-5xl flex items-center justify-center object-center object-contain bg-gray2 rounded-[100%] h-[100px] w-[100px]">
                        <ImUserPlus />
                      </div>
                      <div>
                        <GoChevronDown />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative">
                <div
                  onClick={handleClickOpenNav}
                  className="text-white cursor-pointer text-lg flex items-center gap-x-2 lg:gap-x-4"
                >
                  <p className="w-full">{state?.firstname}</p>
                  <div>
                    {openNav && <FaChevronUp />}
                    {!openNav && <FaChevronDown />}
                  </div>
                </div>
                {openNav && (
                  <div className="bg-white text-black absolute right-0 w-[200px]  px-4 py-4 top-[3.7rem] shadow-md rounded-md">
                    <Link href="/dashboard/profile" className="mb-3 block">
                      Profile
                    </Link>

                    <button onClick={handleLogout} className="flex items-center gap-x-3">
                      Log out{" "}
                      <span className="text-2xl">
                        <IoIosLogOut />
                      </span>
                    </button>
                  </div>
                )}
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
      <main>
        <Marquee>
          <p className="text-red-500 py-3 font-medium">
            Your Account has been Suspended, Please get in touch with our customer service
          </p>
        </Marquee>
        {children}
      </main>
    </>
  );
}
