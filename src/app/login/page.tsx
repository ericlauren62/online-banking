import Image from "next/image";
import loginImg from "/public/loginImg.jpg";
import logo2 from "/public/logo2.svg";
import { CiLock } from "react-icons/ci";
import MainLayout from "@/components/layouts/MainLayout";

export default function page() {
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
          <form className="xl:grid gap-y-3 w-full">
            <div className="">
              <label htmlFor="userid" className="block mb-2">
                User ID
              </label>
              <input type="text" className="w-full border border-gray-400 py-2 px-4" />
            </div>
            <div className="mb-5 xl:mb-0">
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
        <Image src={loginImg} alt="login bgimage" className="hidden xl:block" />
      </div>
    </MainLayout>
  );
}
