import { TranasctionType, TransactionsDataProps } from "../../Api/types";
import { ArrowDownIcon, MoreIcon, ArrowUpIcon } from "../../Assets/Icons/index";

type TransactionCardProps = {
  data: TransactionsDataProps;
};

const TransactionCard: React.FC<TransactionCardProps> = ({
  data: { amount, type, companyName },
}) => (
  <div className="transaction__card">
    <div className={`transaction__card--icon ${type === "DEBIT" && "danger"}`}>
      {type === TranasctionType.CREDIT ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </div>
    <div className="transaction__card--content">
      <h3>₦{amount.toLocaleString()}</h3>
      <p>{companyName}</p>
    </div>
    <div className="transaction__card--action">
      <MoreIcon />
    </div>
  </div>
);

export default TransactionCard;
