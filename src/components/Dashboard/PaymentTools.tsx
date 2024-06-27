import { GoArrowSwitch } from "react-icons/go";
import { RiExchangeDollarLine } from "react-icons/ri";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";

export default function PaymentTools() {
  return (
    <div className="w-[35%]">
      <h2 className="mb-6">Pay/Transfer Tools</h2>
      <div className="flex items-center gap-x-4 bg-blue text-white p-3 mb-4">
        <div className="text-3xl">
          <GoArrowSwitch />
        </div>
        <p>Make a quick Transfer</p>
      </div>
      <div className="flex items-center gap-x-4 bg-blue text-white p-3 mb-4">
        <div className="text-3xl">
          <RiExchangeDollarLine />
        </div>
        <p>Make a quick Payment</p>
      </div>
      <div className="flex items-center bg-white gap-x-4 text-black p-3 mb-4">
        <div className="text-3xl">
          <LiaHandHoldingUsdSolid />
        </div>
        <p>Make a quick Payment</p>
      </div>
    </div>
  );
}
