import {
  TopUserDataProps,
  TranasctionType,
  TransactionsDataProps,
} from "./types";

export const TopUsersData: TopUserDataProps[] = [
  {
    id: 1,
    companyName: "B & K Fashion Wears",
    ceoName: "Tijani Fatahi",
    amountBorrowed: 2000000,
    loanPeriod: "12 months",
  },
  {
    id: 2,
    companyName: "Adron Home Suites",
    ceoName: "Steven Paul",
    amountBorrowed: 30000000,
    loanPeriod: "15 months",
  },
  {
    id: 3,
    companyName: "Kola Diets",
    ceoName: "Bukunmi Ali",
    amountBorrowed: 500000,
    loanPeriod: "4 months",
  },
  {
    id: 4,
    companyName: "Sleek Touch",
    ceoName: "Onisade Abiodun",
    amountBorrowed: 2000000,
    loanPeriod: "12 months",
  },
];

export const TransactionsData: TransactionsDataProps[] = [
  {
    id: 1,
    amount: 100000,
    companyName: "Bam Wells",
    type: TranasctionType.CREDIT,
  },
  {
    id: 2,
    amount: 7000000,
    companyName: "GoodWell Transport",
    type: TranasctionType.DEBIT,
  },
  {
    id: 3,
    amount: 9000000,
    companyName: "Shell",
    type: TranasctionType.CREDIT,
  },
  {
    id: 4,
    amount: 500000,
    companyName: "Bam Wells",
    type: TranasctionType.DEBIT,
  },
];
