import Link from "next/link";
import React from "react";
import legal from "/public/icons-footer.webp";
import Image from "next/image";
import footerLogo from "/public/footerLogo.svg";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className=" text-white">
      <div className="bg-secondary pt-16 pb-10">
        <div className="container grid grid-cols-4 gap-x-8 items-start mb-6">
          <div className=" pr-8 mr-20">
            <Link href="/" className="font-bold mb-4 block">
              <Image src={footerLogo} alt="Logo" />
            </Link>
          </div>
          <div className="">
            <h3 className="font-medium mb-3">ABOUT FIRST HORIZON</h3>
            <ul className="grid gap-y-1 border-l border-red-500 pl-5">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Investor Relations</Link>
              </li>
              <li>
                <Link href="#">Career</Link>
              </li>
              <li>
                <Link href="#">Diversity, Equity & Inclusion</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-medium mb-3">PRODUCT & SERVICES</h3>
            <ul className="grid gap-y-1 border-l border-red-500 pl-5">
              <li>
                <Link href="#">Personal Banking</Link>
              </li>
              <li>
                <Link href="#">Small Business Banking</Link>
              </li>
              <li>
                <Link href="#">Commercial & Specialty</Link>
              </li>
              <li>
                <Link href="#">Wealth Management</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-medium mb-3">SUPPORT</h3>
            <ul className="grid gap-y-1 border-l border-red-500 pl-5">
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Customer Service Requests</Link>
              </li>
              <li>
                <Link href="#">Learning Center</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container flex justify-between items-center mb-10">
          <div>
            <h3 className="font-medium mb-3 text-sm">SOCIAL</h3>
            <ul className="flex items-center gap-x-3">
              <li className="border p-2 rounded-[100%]">
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="border p-2 rounded-[100%]">
                <Link href="#">
                  <FaXTwitter />
                </Link>
              </li>
              <li className="border p-2 rounded-[100%]">
                <Link href="#">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="border p-2 rounded-[100%]">
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
              <li className="border p-2 rounded-[100%]">
                <Link href="#">
                  <FaVimeoV />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-8">
            <p className="mt-auto">Member FDIC. Equal Housing Lender. </p>
            <div className="flex items-center gap-x-5 mt-auto">
              <div className="bg-legal w-[44px] h-[30px] bg-full"></div>
              <div className="bg-legal w-[44px] h-[30px] bg-right-30 bg-cover"></div>
            </div>
          </div>
        </div>
        <ul className="container flex items-center justify-between text-xs font-medium">
          <li>
            <Link href="#">FRAUD & SECURITY</Link>
          </li>
          <li>
            <Link href="#">COPYRIGHT CLAIMS</Link>
          </li>
          <li>
            <Link href="#">PRIVACY POLICY</Link>
          </li>
          <li>
            <Link href="#">ONLINE PRIVACY POLICY</Link>
          </li>
          <li>
            <Link href="#">CALIFORNIA PRIVACY POLICY</Link>
          </li>
          <li>
            <Link href="#">ACCESSIBILITY</Link>
          </li>
        </ul>
      </div>

      <div className="bg-secondary-hover py-16">
        <div className="container grid grid-cols-2 gap-x-8 text-xs">
          <div>
            <p className="text-sm border-l-4 border- pl-7">
              Insurance Products, Investments & Annuities: Not A Deposit, Not Guaranteed By The Bank Or Its Affiliates,
              Not FDIC Insured, Not Insured By Any Federal Government Agency, May Go Down In Value{" "}
            </p>
            <br />
            <br />
            <p>Banking Products and Services provided by First Horizon Bank. Member FDIC. Equal Housing Lender.</p>
            <br />
            <p>
              Insurance Products and Annuities: May be purchased from any agent or company, and the customer’s choice
              will not affect current or future credit decisions.
            </p>
            <br />
            <p>
              Insurance Products and Annuities: May be purchased from any agent or company, and the customer’s choice
              will not affect current or future credit decisions.
            </p>
            <br />
            <p>
              First Horizon Advisors is the trade name for wealth management products and services provided by First
              Horizon Bank and its affiliates. Trust services and financial planning provided by First Horizon Bank.
            </p>
            <br />
            <p>
              Investment management services, investments, annuities and financial planning available through First
              Horizon Advisors, Inc., member FINRA, SIPC, and a subsidiary of First Horizon Bank. Arkansas Insurance
              License # 416584.
            </p>
          </div>
          <div>
            <p>
              Insurance products available through First Horizon Insurance Services, Inc. (”FHIS”), a subsidiary of
              First Horizon Bank. Arkansas Insurance License # 100102095.
            </p>
            <br />
            <p>
              First Horizon Advisors, Inc., FHIS, and their agents may transact insurance business or offer annuities
              only in states where they are licensed or where they are exempted or excluded from state insurance
              licensing requirements.
            </p>
            <br />
            <p>
              The contents of this website are for informational purposes only. Nothing on this website should be
              considered investment advice; or, a recommendation or offer to buy or sell a security or other financial
              product or to adopt any investment strategy.
            </p>
            <br />
            <p>
              First Horizon Advisors does not offer tax or legal advice. You should consult your personal tax and/or
              legal advisor concerning your individual situation.
            </p>
            <br />
            <p>©2024 First Horizon Bank. Member FDIC.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
