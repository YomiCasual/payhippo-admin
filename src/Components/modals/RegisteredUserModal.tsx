import { Fragment } from "react";
import MiniCardStats from "../common/MiniStatsCard";

const RegisteredUserModal = () => {
  return (
    <div className="registereduser__modal">
      <h3 className="modal__title">Registerd User</h3>

      <div className="registereduser__modal-content">
        {RegisteredUserData.map((data) => (
          <Fragment key={data.id}>
            <MiniCardStats {...data} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default RegisteredUserModal;

const RegisteredUserData = [
  {
    id: 1,
    subtitle: "Registered in Last 1 Month",
    value: 200,
  },
  {
    id: 2,
    subtitle: "Registered in Last 4 Months",
    value: 300,
  },
  {
    id: 3,
    subtitle: "Registered in Last 1 year",
    value: 700,
  },
  {
    id: 4,
    subtitle: "Active Users",
    value: 4000,
  },
  {
    id: 5,
    subtitle: "Non-active Users",
    value: 200,
  },
];
