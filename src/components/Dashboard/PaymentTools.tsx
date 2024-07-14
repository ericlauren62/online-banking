import { GoArrowSwitch } from "react-icons/go";
import { RiExchangeDollarLine } from "react-icons/ri";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import Link from "next/link";

export default function PaymentTools() {
  return (
    <div className="lg:w-[35%]">
      <h2 className="mb-6 font-medium">Pay/Transfer Tools</h2>
      <Link href="/dashboard/transfer" className="flex items-center gap-x-4 bg-blue text-white p-3 mb-4">
        <div className="text-3xl">
          <GoArrowSwitch />
        </div>
        <p>Make a quick Transfer</p>
      </Link>
      <Link href="/dashboard/transfer" className="flex items-center gap-x-4 bg-blue text-white p-3 mb-4">
        <div className="text-3xl">
          <RiExchangeDollarLine />
        </div>
        <p>Make a quick Payment</p>
      </Link>
    </div>
  );
}
