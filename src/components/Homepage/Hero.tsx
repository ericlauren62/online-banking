import React from "react";
import { CiLock } from "react-icons/ci";

export default function Hero() {
  return (
    <section className="bg-heroBg min-h-[30rem] bg-center grid place-content-center">
      <div className="container  text-white grid grid-cols-2 gap-x-32">
        <div className="bg-black px-8 min-w-[600px] flex flex-col justify-center">
          <h2 className="text-xs mb-1 rounded-xl">HORIZON BANK</h2>
          <span className="h-1 w-10 bg-primary block mb-3 rounded-lg"></span>
          <h1 className="mb-3 text-3xl">Born, Raised, and Invested in Texas.</h1>
          <p>
            {`We're`} from here. Since 1905, Horizon has been proud to work with local businesses across central Texas
            and beyond.
          </p>
        </div>
        <div className=" bg-white py-8 px-10 text-black max-w-[400px] rounded-lg ml-auto">
          <h2 className="text-primary text-2xl mb-5">Online Banking Login</h2>
          <div>
            <input type="text" className="border border-black2 w-full p-3 mb-3 rounded-md" placeholder="Username" />
            <input type="text" className="border border-black2 w-full p-3 mb-5 rounded-md" placeholder="Password" />
            <button className="text-white flex items-center bg-primary px-6 py-3 rounded-md">
              <span className="mr-1">
                <CiLock />
              </span>
              Log In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
