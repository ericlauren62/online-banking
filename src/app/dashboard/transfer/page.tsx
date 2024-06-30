"use client";

import { FormEvent, useEffect, useState } from "react";
import Select from "react-select";

import { Modal } from "react-responsive-modal";
import loader from "/public/loader.svg";
import successImg from "/public/successImg.png";
import Image from "next/image";
import Link from "next/link";
import { useUserContext } from "@/context/UserContext";
import { Account, Transaction } from "@/types/user";
import { capitalizeWords } from "@/lib/capitalizeWords";
import { capitalizeFirstLetter } from "@/lib/capitalize";
import { extractFirstLetters } from "@/lib/extractFirstLetters";
import { generateTransactionReference } from "@/lib/generateTransactionReference";
import { getCurrentTimeFormatted } from "@/lib/currentTimeFormatted";
import { useRouter } from "next/navigation";

export default function Transfer() {
  const [outgoingAccount, setOutgoingAccount] = useState<any>(null);
  const [processing, setProcessing] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transferDetails, setTransferDetails] = useState({
    account: "",
    amount: "",
    beneficiarybank: "",
    beneficiaryname: "",
    beneficiaryaccount: "",
    routingnumber: "",
  });

  const [transferReference, setTransferReference] = useState("");
  const [transferDate, setTransferDate] = useState("");

  const { state, addTransaction } = useUserContext();

  const router = useRouter();

  const options = state?.accounts?.map((account: Account) => {
    return { value: account.name, label: capitalizeWords(account.name), amount: account.amount };
  });

  useEffect(() => {
    // Sort transactions by date in descending order (most recent first)
    if (state?.transactions) {
      // Sort transactions by date in descending order (most recent first)
      const sortedTransactions = [...state.transactions].sort(
        (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      // Slice to get only the last 10 transactions
      const lastTenTransactions = sortedTransactions.slice(0, 10);

      setTransactions(lastTenTransactions);
    }
  }, [state?.transactions]);

  const onOpenModal = () => {
    // if (
    //   transferDetails.beneficiaryaccount.length < 8 ||
    //   transferDetails.amount === "" ||
    //   transferDetails.beneficiarybank === "" ||
    //   transferDetails.beneficiaryname === "" ||
    //   transferDetails.routingnumber.length < 9 ||
    //   transferDetails.account === ""
    // ) {
    //   return;
    // }

    setOpen(true);
    setProcessing(false);
    setTransferReference(generateTransactionReference());
    setTransferDate(getCurrentTimeFormatted());
  };
  const onCloseModal = () => setOpen(false);
  const onOpenSucessModal = () => setSuccess(true);
  const onCloseSucessModal = () => setSuccess(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (outgoingAccount: any) => {
    setOutgoingAccount(outgoingAccount);
    setTransferDetails({ ...transferDetails, account: outgoingAccount.value });
  };

  const handleConfirmPayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setOpen(false);
      addTransaction({
        amount: transferDetails.amount,
        name: transferDetails.beneficiaryname,
        date: transferDate,
        type: "debit",
        reference: transferReference,
        account: transferDetails.account,
      });

      onOpenSucessModal();
    }, 5000);
  };

  const handleBackHome = () => {
    router.push("/dashboard");
  };

  return (
    <section className="container flex gap-x-10 py-10  my-10">
      <div className="bg-white p-10 w-[60%]">
        <h2 className="text-xl font-medium mb-20">Transfers Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 items-center gap-x-10 mb-8">
            <div className="">
              <label className="bg-blue text-white px-5 py-2 rounded-tr-md rounded-tl-md inline-block">From*</label>
              <Select options={options} placeholder="Select An Account" onChange={handleChange} required />
            </div>
            <div>
              <label className="bg-blue text-white px-5 py-2 rounded-tr-md rounded-tl-md inline-block">Amount*</label>
              <input
                type="text"
                className="w-full px-5 h-[50px] rounded-md rounded-tl-none border border-gray2"
                placeholder="Enter Amount"
                required
                value={transferDetails.amount}
                onChange={(e) => setTransferDetails({ ...transferDetails, amount: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-8 flex gap-x-10">
            <div>
              <label className="bg-blue text-white px-5 py-2 rounded-tr-md rounded-tl-md inline-block">
                Beneficiary Bank*
              </label>
              <input
                type="text"
                className="w-full px-5 h-[50px] rounded-md border border-gray2 rounded-tl-none"
                placeholder="Enter Bank Name"
                required
                value={transferDetails.beneficiarybank}
                onChange={(e) => setTransferDetails({ ...transferDetails, beneficiarybank: e.target.value })}
              />
            </div>
            <div>
              <label className="bg-blue text-white px-5 py-2 rounded-tr-md rounded-tl-md inline-block">
                Beneficiary Name*
              </label>
              <input
                type="text"
                className="w-full px-5 h-[50px] rounded-md border border-gray2 rounded-tl-none"
                placeholder="Enter Account Holder"
                required
                value={transferDetails.beneficiaryname}
                onChange={(e) => setTransferDetails({ ...transferDetails, beneficiaryname: e.target.value })}
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
                className="w-full px-5 h-[50px] rounded-md border border-gray2 rounded-tl-none"
                placeholder="Enter Routing Number"
                required
                value={transferDetails.routingnumber}
                onChange={(e) => setTransferDetails({ ...transferDetails, routingnumber: e.target.value })}
              />
            </div>
            <div>
              <label className="bg-blue text-white px-5 py-2 rounded-tr-md rounded-tl-md inline-block">
                Account Number*
              </label>
              <input
                type="text"
                className="w-full px-5 h-[50px] rounded-md border border-gray2 rounded-tl-none"
                placeholder="Enter Account Number"
                required
                value={transferDetails.beneficiaryaccount}
                onChange={(e) => setTransferDetails({ ...transferDetails, beneficiaryaccount: e.target.value })}
              />
            </div>
          </div>
          <div>
            <button onClick={onOpenModal} className="bg-blue text-white h-12 w-32 rounded-sm">
              Proceed
            </button>
          </div>
          {/* Confirmation Modal */}
          <Modal open={open} onClose={onCloseModal} center>
            <div className="py-10 px-10 w-[600px]">
              <div>
                <h2 className="text-center font-bold text-xl mb-3">Review Transaction Details</h2>
                <p className="text-blue text-center mb-10">Kindly review this transaction before proceeding</p>
              </div>
              <div className="mb-10">
                <div className="flex mb-5 justify-between items-center">
                  <p className="font-bold text-blue">Amount</p>
                  <p>USD {transferDetails.amount}</p>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <p className="font-bold text-blue">Beneficiary Bank</p>
                  <p>{capitalizeWords(transferDetails.beneficiarybank)}</p>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <p className="font-bold text-blue">Account Holder</p>
                  <p>{capitalizeWords(transferDetails.beneficiaryname)}</p>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <p className="font-bold text-blue">Account Number</p>
                  <p>{transferDetails.beneficiaryaccount}</p>
                </div>

                <div className="flex mb-5 justify-between items-center">
                  <p className="font-bold text-blue">Routing Number</p>
                  <p>{transferDetails.routingnumber}</p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="mb-3 font-bold">Sending From</h3>
                <div className="flex justify-between items-center bg-gray p-4">
                  <div className="flex items-center gap-x-2">
                    <div className="bg-blue font-bold text-white p-2 rounded-[100%]">
                      {extractFirstLetters(transferDetails.account)}
                    </div>
                    <div className="text-sm ">
                      <h3 className="text-lg">{capitalizeWords(transferDetails.account)}</h3>
                    </div>
                  </div>
                  <div>
                    <h4>Balance</h4>
                    <p>USD {outgoingAccount?.amount}</p>
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
                  <p>USD {transferDetails.amount}</p>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <strong className="text-blue">Transaction Reference</strong>
                  <p>{generateTransactionReference()}</p>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <strong className="text-blue">Beneficiary Name</strong>
                  <p>{transferDetails.beneficiaryname}</p>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <strong className="text-blue">Beneficiary Bank</strong>
                  <p>{capitalizeWords(transferDetails.beneficiarybank)}</p>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <strong className="text-blue">Routing Number</strong>
                  <p>{transferDetails.routingnumber}</p>
                </div>
                <div className="flex mb-5 justify-between items-center">
                  <strong className="text-blue">Date</strong>
                  <p>{getCurrentTimeFormatted()}</p>
                </div>
              </div>

              <button
                onClick={handleBackHome}
                className="bg-blue flex items-center justify-center font-medium text-white rounded-md h-[45px] w-full"
              >
                Back Home
              </button>
            </div>
          </Modal>
        </form>
      </div>
      <div className="bg-white w-[40%] py-8 px-8 overflow-y-scroll">
        <h2 className="text-xl font-medium mb-8">Recent Transactions</h2>
        {transactions.map((transaction: Transaction, id) => {
          return (
            <div key={id} className="flex justify-between items-center mb-5">
              <div>
                <p className="text-lg font-medium">{capitalizeWords(transaction.name)}</p>
                <div className="text-sm text-neutral-500">{capitalizeFirstLetter(transaction.date)}</div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="ml-auto">
                  {transaction.type === "credit" ? "+" : "-"}${transaction.amount}
                </div>
                <div className="text-sm text-neutral-500">{transaction.account}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
