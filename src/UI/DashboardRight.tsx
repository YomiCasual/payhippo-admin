import { Fragment } from "react";
import { TopUsersData, TransactionsData } from "../Api";
import { NotificationIcon } from "../Assets/icons";
import AvatarImg from "../Assets/images/Avatar.png";
import TopUserCard from "../Components/TopUserCard";
import TransactionCard from "../Components/TransactionCard";

const DashboardRight = () => {
  return (
    <div className="dashboard__right right-wrapper">
      <UserAvatar />
      <div className="dashboard__right--content">
        <div className="top__users">
          <h3 className="top__users--title">Top Users</h3>
          <div className="top__users--container">
            {TopUsersData.map((user) => (
              <Fragment key={user.id}>
                <TopUserCard data={user} />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="recent__transactions">
          <h3 className="top__users--title">Recent Transactions</h3>
          <div className="recent__transactions--container">
            {TransactionsData.map((transaction) => (
              <Fragment key={transaction.id}>
                <TransactionCard data={transaction} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;

export const UserAvatar = () => (
  <div className="dashboard__right--header user__avatar">
    <NotificationIcon />
    <img src={AvatarImg} alt="avatar-img" />
  </div>
);
