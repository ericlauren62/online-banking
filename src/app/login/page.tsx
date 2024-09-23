"use client";

import Image from "next/image";
import loginImg from "/public/loginImg.jpg";
import logo2 from "/public/logo2.svg";
import { CiLock } from "react-icons/ci";
import MainLayout from "@/components/layouts/MainLayout";
import { FormEvent } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const accountNumber = formData.get("uid") as string;
    const password = formData.get("password") as string;

    toast.error("Invalid Credentials");
    return;

    // const userDocRef = doc(db, "users", accountNumber);
    // const userDocSnap = await getDoc(userDocRef);
    // if (userDocSnap.exists()) {
    //   const user = userDocSnap.data();
    //   const email = userDocSnap.data().email;
    //   const userSession = await toast.promise(signInWithEmailAndPassword(auth, email, password), {
    //     loading: "Verifying Credentials",
    //     success: "Sign In Successfully, Welcome",
    //     error: "Invalid User Credentials",
    //   });
    //   localStorage.setItem("token", userSession.user.refreshToken);
    //   localStorage.setItem("digit", accountNumber);
    //   router.push("/dashboard");
    // }
  };

  return (
    <MainLayout>
      <div className="xl:grid xl:grid-cols-2 max-w-[1440px] mx-auto ">
        <div className="px-4 xl:pl-32 xl:pr-32 pt-20 mb-20 xl:mb-0">
          <div className="mb-8 flex flex-col items-center justify-center">
            <div className="mb-5">
              <Image src={logo2} alt="logo" />
            </div>
            <h2 className="text-2xl">Log in to banking services</h2>
          </div>
          <form onSubmit={handleLogin} className="xl:grid gap-y-3 w-full">
            <div className="">
              <label htmlFor="userid" className="block mb-2">
                User ID
              </label>
              <input type="text" name="uid" className="w-full border border-gray-400 py-2 px-4" />
            </div>
            <div className="mb-5 xl:mb-0">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input type="text" name="password" className="w-full border border-gray-400 py-2 px-4" />
            </div>
            <button type="submit" className="flex justify-center text-white items-center bg-primary py-3 w-full">
              <span className="mr-1">
                <CiLock />
              </span>
              Log In
            </button>
          </form>
        </div>
        <Image src={loginImg} alt="login bgimage" className="hidden xl:block" />
      </div>
    </MainLayout>
  );
}
