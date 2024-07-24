"use client";

import { useUserContext } from "@/context/UserContext";
import { capitalizeFirstLetter } from "@/lib/capitalize";
import { capitalizeWords } from "@/lib/capitalizeWords";
import { addCommas } from "@/lib/formatAmount";
import { Transaction } from "@/types/user";
import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [open, setOpen] = useState(false);
  const { state } = useUserContext();

  const onOpenModal = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

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

  return (
    <>
      <div className="max-w-[900px] mx-auto py-8 px-4 lg:px-8">
        <h2 className="text-xl  lg:text-2xl font-medium mb-8">Recent Transactions</h2>
        {transactions.map((transaction: Transaction, id) => {
          return (
            <div
              role="button"
              key={id}
              onClick={() => onOpenModal(transaction)}
              className="bg-white group hover:bg-blue hover:text-white p-6 rounded-md  flex justify-between items-center mb-5"
            >
              <div className="w-full">
                <p className="text-lg font-medium">{capitalizeWords(transaction.name)}</p>
                <div className="text-sm text-neutral-500 group-hover:text-white">
                  {capitalizeFirstLetter(transaction.date)}
                </div>
              </div>
              <div className="w-full flex flex-col justify-end">
                <div className={`ml-auto ${transaction.type === "credit" ? "text-green-500" : "text-red-700"}`}>
                  {transaction.type === "credit" ? "+" : "-"}${addCommas(transaction.amount)}
                </div>
                <div className="text-sm text-neutral-500 flex justify-end group-hover:text-white">
                  {transaction.account}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal open={open} onClose={onCloseModal}>
        {selectedTransaction && (
          <div className="py-5 px-2 text-sm lg:text-base lg:p-6 lg:w-[500px]">
            <div>
              <div className="mb-5">
                <h2 className="font-medium m">Transaction Details</h2>
                <hr />
              </div>
              <div className="grid grid-cols-2 gap-y-4">
                <strong className="block mb-1">Date:</strong>
                <span className="block">{selectedTransaction.date}</span>
              </div>
              <div className="grid grid-cols-2">
                <strong className="mb-1">Reference:</strong>
                <span>{selectedTransaction.reference}</span>
              </div>
              <div className="grid grid-cols-2">
                <strong className="mb-1">Amount:</strong>
                <span className="tracking-widest">${addCommas(selectedTransaction.amount)}</span>
              </div>
              <div className="grid grid-cols-2">
                <strong className="mb-1">Status:</strong>
                <span>SUCCESSFUL</span>
              </div>
              <div className="grid grid-cols-2">
                <strong className="mb-1">Transaction Type:</strong>
                <span>{selectedTransaction.type}</span>
              </div>

              <div className="my-5">
                <div className="mb-4">
                  <h2>Account Details</h2>
                  <hr />
                </div>
                <div className="grid grid-cols-2">
                  <strong className="mb-1">{"Sender's"} Name:</strong>
                  <span>
                    {state.firstname} {state.lastname}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <strong className="mb-1">Beneficiary Name:</strong>
                  <span>{selectedTransaction.name}</span>
                </div>
                <div className="grid grid-cols-2">
                  <strong className="mb-1">Beneficiary Account:</strong>
                  <span>{selectedTransaction.account}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
