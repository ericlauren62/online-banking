import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import successImg from "/public/successImg.png";
import Modal from "react-responsive-modal";

interface TransferSuccessfulModalProps {
  handleConfirmPayment: () => void;
}
export default function TransferSuccessfulModal({ handleConfirmPayment }: TransferSuccessfulModalProps) {
  const [success, setSuccess] = useState(false);
  const onOpenSucessModal = () => setSuccess(true);
  const onCloseSucessModal = () => setSuccess(false);

  return (
    <Modal open={success} onClose={onCloseSucessModal} center>
      <div className="py-10 px-10 w-[600px]">
        <div>
          <div className="flex justify-center mb-10">
            <Image src={successImg} alt="success icon" height={100} />
          </div>
          <h2 className="text-center font-bold text-xl mb-10">Transaction Successful</h2>
        </div>
        <div className="mb-10">
          <div className="flex mb-5 justify-between items-center">
            <strong className="text-blue">Amount</strong>
            <p>USD 2000</p>
          </div>
          <div className="flex mb-5 justify-between items-center">
            <strong className="text-blue">Transaction Reference</strong>
            <p>FH/UUS889W5TR-899</p>
          </div>
          <div className="flex mb-5 justify-between items-center">
            <strong className="text-blue">Account Holder</strong>
            <p>James Millar</p>
          </div>
          <div className="flex mb-5 justify-between items-center">
            <strong className="text-blue">Bank Name</strong>
            <p>Bank of America</p>
          </div>
          <div className="flex mb-5 justify-between items-center">
            <strong className="text-blue">Routing Number</strong>
            <p>9944662000</p>
          </div>
          <div className="flex mb-5 justify-between items-center">
            <strong className="text-blue">Date</strong>
            <p>26 Jun 2024, 8:41am</p>
          </div>
        </div>

        <Link
          href="/dashboard"
          onClick={handleConfirmPayment}
          className="bg-blue flex items-center justify-center font-medium text-white rounded-md h-[45px] w-full"
        >
          Back Home
        </Link>
      </div>
    </Modal>
  );
}
