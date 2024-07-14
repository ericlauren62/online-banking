"use client";

import AccountType from "@/components/Dashboard/AccountType";
import PaymentTools from "@/components/Dashboard/PaymentTools";
import Transactions from "@/components/Dashboard/Transactions";

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
