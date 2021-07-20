import { NotificationIcon, MoreIcon, ArrowDownIcon } from "../Assets/icons";
import AvatarImg from "../Assets/images/Avatar.png";
import UserAvatar from "../Assets/images/UserAvatar.png";

const DashboardRight = () => {
  return (
    <div className="dashboard__right right-wrapper">
      <div className="dashboard__right--header">
        <NotificationIcon />
        <img src={AvatarImg} alt="avatar-img" />
      </div>
      <div className="dashboard__right--content">
        <div className="top__users">
          <h3 className="top__users--title">Top Users</h3>
          <div className="top__users--container">
            <TopUserCard />
            <TopUserCard />
            <TopUserCard />
            <TopUserCard />
          </div>
        </div>
        <div className="recent__transactions">
          <h3 className="top__users--title">Recent Transactions</h3>
          <div className="recent__transactions--container">
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;

const TransactionCard = () => (
  <div className="transaction__card">
    <div className="transaction__card--icon">
      <ArrowDownIcon />
    </div>
    <div className="transaction__card--content">
      <h3>₦10,000</h3>
      <p>Tulso Pharmacy</p>
    </div>
    <div className="transaction__card--action">
      <MoreIcon />
    </div>
  </div>
);

const TopUserCard = () => (
  <div className="top__user">
    <img src={UserAvatar} alt="user-avatar" className="top__user--avatar" />
    <div className="top__user--content">
      <div className="main__content">
        <h3>B & K Fashion Wears</h3>
        <p>Tijani Fatahi</p>
      </div>
      <div className="sub__contents">
        <div className="sub__contents--content">
          <h3>₦2,000,000</h3>
          <p>Amount Borrowed</p>
        </div>
        <div className="sub__contents--content">
          <h3>12 months</h3>
          <p>Loan Period</p>
        </div>
      </div>
    </div>
    <div className="top-user--action">
      <MoreIcon />
    </div>
  </div>
);
