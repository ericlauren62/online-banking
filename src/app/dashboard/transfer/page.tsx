"use client";

import { FormEvent, useState } from "react";
import Select from "react-select";

import { Modal } from "react-responsive-modal";
import loader from "/public/loader.svg";
import successImg from "/public/successImg.png";
import Image from "next/image";
import Link from "next/link";

const options = [
  { value: "business checkings", label: "Business Checkings" },
  { value: "checkings", label: "Checkings" },
  { value: "savings", label: "Savings" },
];

export default function Transer() {
  const [outgoingAccount, setOutgoingAccount] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
    setProcessing(false);
  };
  const onCloseModal = () => setOpen(false);
  const onOpenSucessModal = () => setSuccess(true);
  const onCloseSucessModal = () => setSuccess(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(outgoingAccount);
  };

  const handleChange = (outgoingAccount: any) => {
    setOutgoingAccount(outgoingAccount);
  };

  const transactions = [];

  const handleConfirmPayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setOpen(false);
      onOpenSucessModal();
    }, 5000);
  };

  return (
    <section className="container flex gap-x-10 py-10  my-10">
      <div className="bg-white p-10 w-[60%]">
        <h2 className="text-xl font-medium mb-20">Transfers Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 items-center gap-x-10 mb-8">
            <div className="">
              <label className="bg-blue text-white px-5 py-2 rounded-tr-md rounded-tl-md inline-block">From*</label>
              <Select options={options} placeholder="Select An Account" onChange={handleChange} />
            </div>
            <div>
              <label className="bg-blue text-white px-5 py-2 rounded-tr-md rounded-tl-md inline-block">Amount*</label>
              <input
                type="text"
                className="w-full px-5 h-[50px] rounded-md border border-gray2"
                placeholder="Enter Amount"
              />
            </div>
          </div>
          <div className="mb-8 flex gap-x-10">
            <div>
              <label className="bg-blue text-white px-5 py-2 rounded-tr-md rounded-tl-md inline-block">
                Bank Name*
              </label>
              <input
                type="text"
                className="w-full px-5 h-[50px] rounded-md border border-gray2"
                placeholder="Enter Bank Name"
              />
            </div>
            <div>
              <label className="bg-blue text-white px-5 py-2 rounded-tr-md rounded-tl-md inline-block">
                Account Holder*
              </label>
              <input
                type="text"
                className="w-full px-5 h-[50px] rounded-md border border-gray2"
                placeholder="Enter Bank Name"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-10 mb-10">
            <div>
              <label className="bg-blue text-white px-5 py-2 rounded-tr-md rounded-tl-md inline-block">
                Bank Routing Number*
              </label>
              <input
                type="text"
                className="w-full px-5 h-[50px] rounded-md border border-gray2"
                placeholder="Enter Routing Number"
              />
            </div>
            <div>
              <label className="bg-blue text-white px-5 py-2 rounded-tr-md rounded-tl-md inline-block">
                Account Number*
              </label>
              <input
                type="text"
                className="w-full px-5 h-[50px] rounded-md border border-gray2"
                placeholder="Enter Account Number"
              />
            </div>
          </div>
          <div>
            <button onClick={onOpenModal} className="bg-blue text-white h-12 w-32 rounded-sm">
              Proceed
            </button>
          </div>
          <Modal open={open} onClose={onCloseModal} center>
            <div className="py-10 px-10 w-[600px]">
              <div>
                <h2 className="text-center font-bold text-xl mb-3">Review Transaction Details</h2>
                <p className="text-blue text-center mb-10">Kindly review this transaction before proceeding</p>
              </div>
              <div className="mb-10">
                <div className="flex mb-5 justify-between items-center">
                  <p>Amount</p>
                  <p>USD 2000</p>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <p>Bank Name</p>
                  <p>Bank of America</p>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <p>Routing Number</p>
                  <p>9944662000</p>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <p>Account Number</p>
                  <p>1000223343</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Account Holder</p>
                  <p>James Millar</p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="mb-3 font-bold">Sending From</h3>
                <div className="flex items-center gap-x-5">
                  <div className="bg-blue font-medium text-white p-2 rounded-[100%]">BC</div>
                  <div className="text-sm">
                    <h3 className="text-sm">Business Checkings</h3>
                    <div>
                      <span>****</span>
                      <span>1447</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleConfirmPayment}
                  className="bg-green-700 font-medium text-white rounded-md h-[45px] w-full"
                >
                  {processing ? (
                    <div className="flex items-center justify-center gap-x-1">
                      Processing Payment <Image src={loader} alt="loading image" height={32} />
                    </div>
                  ) : (
                    "Confirm and Continue"
                  )}
                </button>
              </div>
            </div>
          </Modal>
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
        </form>
      </div>
      <div className="bg-white w-[40%] py-8 px-8 overflow-y-scroll">
        <h2 className="text-xl font-medium mb-8">Recent Transactions</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-5">
            <div className="text-center font-bold w-10">Feb 10</div>
            <div>
              <p className="text-lg font-medium">Puckett Groceries</p>
              <em className="text-sm">Checkings Account</em>
            </div>
          </div>
          <div>-$1000</div>
        </div>
      </div>
    </section>
  );
}
