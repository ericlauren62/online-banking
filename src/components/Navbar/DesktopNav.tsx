import Link from "next/link";
import { Fragment } from "react";
import { CiLock } from "react-icons/ci";

export default function DesktopNav() {
  return (
    <Fragment>
      <section className="bg-black text-white py-6">
        <div className="container flex justify-between items-center">
          <Link href="/" className="font-bold">
            HORIZON BANK
          </Link>
          <div className="flex items-center gap-x-8">
            <input type="text" className="bg-black2 px-5 py-3 rounded-md" placeholder="Username" required />
            <input type="text" className="bg-black2 px-5 py-3 rounded-md" placeholder="Password" required />
            <button className="flex items-center bg-primary px-6 py-3 rounded-md">
              <span className="mr-1">
                <CiLock />
              </span>
              Log In
            </button>
          </div>
        </div>
      </section>
      <nav className="container flex justify-between items-center py-6">
        <ul className="flex gap-x-5">
          <li>Business</li>
          <li>Personal</li>
          <li>Morgage</li>
          <li>Why Us</li>
          <li>Contact Us</li>
        </ul>
        <div>info@horizon.com</div>
      </nav>
    </Fragment>
  );
}
