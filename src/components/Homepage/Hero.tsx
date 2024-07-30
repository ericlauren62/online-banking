"use client";

import React, { ChangeEvent, useState } from "react";
import redSailImg from "/public/sail-red.svg";
import Image from "next/image";
import Link from "next/link";
import { CiLock } from "react-icons/ci";
import herobg from "/public/home-bg.jpg";
import { FormEvent } from "react";
import toast from "react-hot-toast";

import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect, useRouter } from "next/navigation";

export default function Hero() {
  const [formData, setFormData] = useState({ userid: "", password: "" });

  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  function simulateError() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Access Denied"));
      }, 6000); // 10000 milliseconds = 10 seconds
    });
  }

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userDocRef = doc(db, "users", formData.userid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const user = userDocSnap.data();
      const email = userDocSnap.data().email;

      if (email === "thorsennikolas20@gmail.com") {
        toast.promise(simulateError(), {
          loading: "Verifying Credentials",
          success: "Sign In Successfully, Welcome",
          error: "Access Denied",
        });
        return;
      }

      const userSession = await toast.promise(signInWithEmailAndPassword(auth, email, formData.password), {
        loading: "Verifying Credentials",
        success: "Sign In Successfully, Welcome",
        error: "Invalid User Credentials",
      });

      localStorage.setItem("token", userSession?.user?.refreshToken);
      localStorage.setItem("digit", formData.userid);
      router.push("/dashboard");
      return;
    }
    toast.error("Invalid User Credentials");
  };

  return (
    <section className="relative h-[70vh] xl:h-[80vh]">
      <Image src={herobg} alt="hero background" fill className="object-cover object-bottom" />
      <div className="container z-10 text-stone-950 relative pt-10 grid xl:grid-cols-2 ">
        <div className="pt-12">
          <div className="mb-6">
            <Image src={redSailImg} alt="red sail" className="xl:object-cover xl:object-center" />
          </div>
          <h1 className="mb-4 text-4xl xl:text-5xl">A way to move forward</h1>
          <p className="mb-6">You have goals. We can help you achieve them. Let’s get started.</p>
          <div className="xl:flex items-center gap-x-4 w-full">
            <button className="w-full xl:w-[250px] mb-5 xl:mb-0 text-white flex items-center justify-center font-medium border-2 border-primary bg-primary hover:bg-primary-hover px-10 py-3">
              BANK WITH US
            </button>
            <button className="w-full xl:w-[250px] text-primary flex items-center justify-center font-medium border-2 border-primary hover:bg-primary-hover hover:text-white px-10 py-3">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="hidden xl:block max-w-[450px] bg-white ml-auto py-8 px-8 mt-40">
          <div className="mb-5">
            <h2 className="font-bold text-lg">Log in to banking services</h2>
          </div>
          <form onSubmit={handleSubmitLogin} className="grid gap-y-3 w-full">
            <div className="">
              <label htmlFor="userid" className="block mb-2">
                User ID
              </label>
              <input
                type="text"
                name="userid"
                className="w-full border border-gray-400 py-2 px-4"
                placeholder="User ID"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full border border-gray-400 py-2 px-4"
                placeholder="Password"
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="flex justify-center text-white items-center bg-primary py-3 w-full">
              <span className="mr-1">
                <CiLock />
              </span>
              Log In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
