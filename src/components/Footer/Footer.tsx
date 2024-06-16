import Link from "next/link";
import React from "react";
import legal from "/public/icons-footer.webp";
import Image from "next/image";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="bg-black2  py-20 text-white">
      <div className="container grid grid-cols-6 gap-x-8 items-start">
        <div className="col-span-2 pr-8">
          <Link href="/" className="font-bold mb-4 block">
            HORIZON BANK
          </Link>
          <p>We pride ourselves on creating lifelong customer relationships and business partnerships.</p>
        </div>
        <div className="">
          <h3 className="font-medium mb-3">NAVIGATION</h3>
          <ul className="grid gap-y-1">
            <li>
              <Link href="#">Business</Link>
            </li>
            <li>
              <Link href="#">Personal</Link>
            </li>
            <li>
              <Link href="#">Mortgage Center</Link>
            </li>
            <li>
              <Link href="#">Why Horizon?</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-medium mb-3">INFORMATION</h3>
          <ul className="grid gap-y-1">
            <li>
              <Link href="#">Business</Link>
            </li>
            <li>
              <Link href="#">Personal</Link>
            </li>
            <li>
              <Link href="#">Mortgage Center</Link>
            </li>
            <li>
              <Link href="#">Why Horizon?</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-medium mb-3">HELPFUL LINKS</h3>
          <ul className="grid gap-y-1">
            <li>
              <Link href="#">Community</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">News</Link>
            </li>
            <li>
              <Link href="#">FAQs</Link>
            </li>
            <li>
              <Link href="#">Remote Deposit System</Link>
            </li>
            <li>
              <Link href="#">Secure Messaging</Link>
            </li>
            <li>
              <Link href="#">Fraud Prevention</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center gap-x-5">
            <div className="bg-legal w-[44px] h-[30px] bg-full"></div>
            <div className="bg-legal w-[44px] h-[30px] bg-right-30 bg-cover"></div>
          </div>

          <div>&copy; {year} Horizon Bank</div>
        </div>
      </div>
    </footer>
  );
}
