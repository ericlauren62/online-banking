"use client";

import { auth, db } from "@/lib/firebase";
import { ChildrenType, Transaction, UserContextType, UserState } from "@/types/user";
import { onAuthStateChanged } from "firebase/auth";
import { arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useReducer } from "react";

const initialState: UserState = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  maritalstatus: "",
  password: "",
  uid: "",
  accounts: [],
  transactions: [],
};

const UserContext = createContext<UserContextType>({
  state: initialState,
  addTransaction: () => null,
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
  }
};

export default function UserProvider({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
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
  }, []);

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
      // localStorage.setItem("transactions", JSON.stringify(userData.transactions));
      dispatch({ type: "GET_USER_TRANSACTIONS", payload: userData.transactions });
    }
  };
  const getUserAccounts = async (uid: string) => {
    const userDocRef = doc(db, "accounts", uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      // localStorage.setItem("accounts", JSON.stringify(userData.accounts));
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

  return <UserContext.Provider value={{ state, addTransaction }}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
