"use client";

import AccountType from "@/components/Dashboard/AccountType";
import PaymentTools from "@/components/Dashboard/PaymentTools";

export default function Dashboard() {
  return (
    <section className="flex justify-between gap-x-20 max-w-[1000px] mx-auto text-black pt-16">
      <AccountType />
      <PaymentTools />
    </section>
  );
}
