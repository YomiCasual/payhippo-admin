export type TopUserDataProps = {
  id: number;
  companyName: string;
  ceoName: string;
  amountBorrowed: number;
  loanPeriod: string;
};
export type TransactionsDataProps = {
  id: number;
  amount: number;
  companyName: string;
  type: TranasctionType;
};

export enum TranasctionType {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
}
