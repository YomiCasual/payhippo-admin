import { Fragment } from "react";
import MiniCardStats from "./../common/MiniStatsCard";

const LoanDisbursedModal = () => {
  return (
    <div className="registereduser__modal">
      <h3 className="modal__title">Loand Disbursed</h3>

      <div className="registereduser__modal-content">
        {LoanDisbursedData.map((data) => (
          <Fragment key={data.id}>
            <MiniCardStats {...data} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default LoanDisbursedModal;

const LoanDisbursedData = [
  {
    id: 1,
    subtitle: "Loan disbursed in Last 1 Month",
    value: "₦300,000",
  },
  {
    id: 2,
    subtitle: "Loan disbursed in Last 4 Months",
    value: "#1,000,000",
  },
  {
    id: 3,
    subtitle: "Loan disbursed in Last 1 year",
    value: "#2,200,000",
  },
];
