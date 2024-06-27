import Link from "next/link";
import Logo from "/public/footerLogo.svg";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-blue py-2">
        <div className="container mb-10">
          <nav className="flex justify-between items-center py-3">
            <Link href="/app">
              <Image src={Logo} alt="logo" />
            </Link>

            <div className="text-white flex items-center gap-x-3 text-xl">
              <FaRegUserCircle />
              <p>John S</p>
            </div>
          </nav>
        </div>
        <div className="text-center text-white py-6">
          <h1 className="text-4xl mb-3">Welcome back,</h1>
          <p className="font-bold text-2xl">John S!</p>
        </div>
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
