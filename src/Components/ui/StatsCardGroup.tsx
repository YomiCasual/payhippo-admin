import StatsCard from "./StatsCard";
import CustomModal from "../common/Modal";
import { TicketIcon, UserGroupIcon, LoanIcon } from "../../Assets/Icons/index";
import useModalHook from "../../Hooks/useModalHook";
import RegisteredUserModal from "../modals/RegisteredUserModal";
import LoanDisbursedModal from "../modals/LoanDisbursedModal";

const StatsCardGroup = () => {
  const { open, handleClose, handleOpen } = useModalHook();
  const { open:loanModal, handleClose: closeLoanModal, handleOpen:openLoanModal } = useModalHook();
  //   Moved the stats card to a component because the modal was causiing the whole component to rerender
  // By keeping the hook to this component, it is the only one that rerenders when the modal is trigger
  return (
    <div className="stat__cards">
      <StatsCard
        onClick={handleOpen}
        icon={<UserGroupIcon />}
        title="Registered users"
        value="₦2,450,600"
      />
      <StatsCard
      onClick={openLoanModal}
        icon={<LoanIcon />}
        title="Total Loan disbursed"
        value="₦90,450,600"
        type="danger"
      />
      <StatsCard
        icon={<TicketIcon />}
        title="Unresolved Tickets"
        value="40"
        type="warning"
      />

      {open && (
        <CustomModal backdropClose={handleClose}>
          <RegisteredUserModal />
        </CustomModal>
      )}
      {loanModal && (
        <CustomModal backdropClose={closeLoanModal}>
          <LoanDisbursedModal />
        </CustomModal>
      )}
    </div>
  );
};

export default StatsCardGroup;
