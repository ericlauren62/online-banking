"use client";

import { auth, db } from "@/lib/firebase";
import { Account, ChildrenType, Transaction, UserContextType, UserState } from "@/types/user";
import { onAuthStateChanged } from "firebase/auth";
import { arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

const initialState: UserState = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  maritalstatus: "",
  password: "",
  uid: "",
  accountNumber: "",
  profilepicture: "",
  country: "",
  ssn: "",
  state: "",
  city: "",
  address: "",
  accounts: [],
  transactions: [],
};

const UserContext = createContext<UserContextType>({
  state: initialState,
  addTransaction: () => null,
  updateProfilePicture: () => null,
  updateAccount: () => null,
});

const userReducer = (state: UserState, action: any): any => {
  switch (action.type) {
    case "GET_USER": {
      return { ...state, ...action.payload };
    }
    case "GET_USER_ACCOUNTS": {
      return { ...state, accounts: action.payload };
    }
    case "GET_USER_TRANSACTIONS": {
      return { ...state, transactions: action.payload };
    }
    case "ADD_TRANSACTIONS": {
      return { ...state, transactions: [...state.transactions, action.payload] };
    }
    case "ADD_ACCOUNTNUMBER": {
      return { ...state, accountNumber: action.payload };
    }
    case "UPDATE_PROFILE_PICTURE": {
      return { ...state, profilePicture: action.payload };
    }
    case "UPDATE_ACCOUNT": {
      return { ...state, accounts: action.payload };
    }
    default:
      return state;
  }
};

export default function UserProvider({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      const accountId = localStorage.getItem("digit");
      if (user && accountId) {
        getUser(accountId);
        getUserTransactions(user.uid);
        getUserAccounts(user.uid);
      }
    });

    return () => {
      unSub();
    };

    //eslint-disable-next-line
  }, [user]);

  const getUser = async (accountId: string) => {
    const userDocRef = doc(db, "users", accountId);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      dispatch({ type: "GET_USER", payload: userData });
    }
  };

  const getUserTransactions = async (uid: string) => {
    const userDocRef = doc(db, "transactions", uid);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      dispatch({ type: "GET_USER_TRANSACTIONS", payload: userData.transactions });
    }
  };
  const getUserAccounts = async (uid: string) => {
    const userDocRef = doc(db, "accounts", uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      dispatch({ type: "GET_USER_ACCOUNTS", payload: userData.accounts });
    }
  };

  const addTransaction = async (payload: Transaction) => {
    if (payload && state?.uid) {
      try {
        const transactionRef = doc(db, "transactions", state?.uid);
        setDoc(transactionRef, { transactions: arrayUnion(payload) }, { merge: true });
        dispatch({ type: "ADD_TRANSACTIONS", payload });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateProfilePicture = async (imgurl: string) => {
    if (imgurl && state?.uid) {
      try {
        const profileRef = doc(db, "users", state?.accountNumber);
        setDoc(profileRef, { profilepicture: imgurl }, { merge: true });
        dispatch({ type: "UPDATE_PROFILE_PICTURE", payload: imgurl });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateAccount = async (accountType: string, amount: string) => {
    if (accountType && state?.uid) {
      try {
        const userAccountRef = doc(db, "accounts", state?.uid);
        const updateAccount = state.accounts.map((account: Account) => {
          if (account.name === accountType) {
            return { name: accountType, amount: amount };
          }
          return account;
        });

        console.log(updateAccount);
        setDoc(userAccountRef, { accounts: updateAccount });
        dispatch({ action: "UPDATE_ACCOUNT", payload: updateAccount });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <UserContext.Provider value={{ state, addTransaction, updateProfilePicture, updateAccount }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
