"use client";

import { useUserContext } from "@/context/UserContext";
import { capitalizeWords } from "@/lib/capitalizeWords";
import { extractFirstLetters } from "@/lib/extractFirstLetters";
import { Account } from "@/types/user";
import { useEffect, useState } from "react";

export default function AccountType() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const { state } = useUserContext();

  useEffect(() => {
    setAccounts(state?.accounts);
  }, [state?.accounts]);

  return (
    <div className="mb-10 xl:mb-0 lg:w-[55%]">
      <h2 className="mb-6 px-6">First Horizon Deposit Accounts</h2>
      <div className="grid gap-y-5">
        {accounts?.map((account, id) => {
          return (
            <div key={id} className="flex items-center justify-between bg-white py-3 px-6 rounded-md">
              <div className="flex items-center gap-x-2">
                <div className="bg-blue font-medium text-white p-2 rounded-[100%]">
                  {extractFirstLetters(account?.name)}
                </div>
                <div>
                  <h3 className="font-bold text-black">{capitalizeWords(account?.name)}</h3>
                </div>
              </div>
              <div>
                <p className="font-medium mb-1">${account?.amount}</p>
                <div className="text-sm">Available Balance</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
