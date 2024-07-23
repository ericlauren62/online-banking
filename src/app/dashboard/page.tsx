import AccountType from "@/components/Dashboard/AccountType";
import PaymentTools from "@/components/Dashboard/PaymentTools";
import Transactions from "@/components/Dashboard/Transactions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

export default function Dashboard() {
  return (
    <section>
      <div className="mb-16 px-4 xl:px-0 xl:flex xl:justify-between xl:gap-x-20 max-w-[1000px] mx-auto text-black pt-16">
        <AccountType />
        <PaymentTools />
      </div>
      <Transactions />
    </section>
  );
}
