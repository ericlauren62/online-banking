import React from "react";
import redSailImg from "/public/sail-red.svg";
import Image from "next/image";
import Link from "next/link";
import { CiLock } from "react-icons/ci";
import herobg from "/public/home-bg.jpg";
export default function Hero() {
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
          <form className="grid gap-y-3 w-full">
            <div className="">
              <label htmlFor="userid" className="block mb-2">
                User ID
              </label>
              <input type="text" className="w-full border border-gray-400 py-2 px-4" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input type="text" className="w-full border border-gray-400 py-2 px-4" />
            </div>
            <button className="flex justify-center text-white items-center bg-primary py-3 w-full">
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
