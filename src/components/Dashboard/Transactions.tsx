"use client";

import { useUserContext } from "@/context/UserContext";
import { capitalizeFirstLetter } from "@/lib/capitalize";
import { capitalizeWords } from "@/lib/capitalizeWords";
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
    if (state?.transactions) {
      setTransactions(state.transactions);
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
              <div>
                <p className="text-lg font-medium">{capitalizeWords(transaction.name)}</p>
                <div className="text-sm text-neutral-500 group-hover:text-white">
                  {capitalizeFirstLetter(transaction.date)}
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="ml-auto">
                  {transaction.type === "credit" ? "+" : "-"}${transaction.amount}
                </div>
                <div className="text-sm text-neutral-500 group-hover:text-white">{transaction.account}</div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal open={open} onClose={onCloseModal}>
        {selectedTransaction && (
          <div className="p-6 lg:w-[500px]">
            <div>
              <div className="mb-5">
                <h2 className="font-medium m">Transaction Details</h2>
                <hr />
              </div>
              <div className="grid grid-cols-2 gap-y-2">
                <strong className="block">Date:</strong>
                <span className="block">{selectedTransaction.date}</span>
              </div>
              <div className="grid grid-cols-2">
                <strong>Reference:</strong>
                <span>{selectedTransaction.reference}</span>
              </div>
              <div className="grid grid-cols-2">
                <strong>Amount:</strong>
                <span>{selectedTransaction.amount}</span>
              </div>
              <div className="grid grid-cols-2">
                <strong>Status:</strong>
                <span>SUCCESSFUL</span>
              </div>
              <div className="grid grid-cols-2">
                <strong>Transaction Type:</strong>
                <span>{selectedTransaction.type}</span>
              </div>

              <div className="my-5">
                <div className="mb-4">
                  <h2>Account Details</h2>
                  <hr />
                </div>
                <div className="grid grid-cols-2">
                  <strong>{"Sender's"} Name:</strong>
                  <span>
                    {state.firstname} {state.lastname}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <strong>Beneficiary Name:</strong>
                  <span>{selectedTransaction.name}</span>
                </div>
                <div className="grid grid-cols-2">
                  <strong>Beneficiary Account:</strong>
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
