export interface UserState {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  maritalstatus: string;
  password: string;
  uid: string;
  accountNumber: string;
  profilepicture: string;
  ssn: string;
  country: string;
  state: string;
  city: string;
  address: string;
  accounts: Account[];
  transactions: [];
}

export interface Account {
  name: string;
  amount: string;
}

export interface Transaction {
  name: string;
  amount: string;
  date: string;
  account: string;
  type: string;
  reference: string;
}

export interface UserContextType {
  state: UserState;
  addTransaction: (payload: Transaction) => void;
  updateProfilePicture: (imgurl: string) => void;
}

export interface ChildrenType {
  children: React.ReactNode;
}
