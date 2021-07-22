import UserAvatar from "../../Assets/images/UserAvatar.png";
import { MoreIcon } from "../../Assets/Icons/index";
import { TopUserDataProps } from "../../Api/types";

type TopUserCardProps = {
  data: TopUserDataProps;
};

const TopUserCard: React.FC<TopUserCardProps> = ({
  data: { id, ceoName, companyName, amountBorrowed, loanPeriod },
}) => (
  <div className="top__user">
    <img src={UserAvatar} alt="user-avatar" className="top__user--avatar" />
    <div className="top__user--content">
      <div className="main__content">
        <h3>{companyName}</h3>
        <p>{ceoName}</p>
      </div>
      <div className="sub__contents">
        <div className="sub__contents--content">
          <h3>₦{amountBorrowed.toLocaleString()}</h3>
          <p>Amount Borrowed</p>
        </div>
        <div className="sub__contents--content">
          <h3>{loanPeriod}</h3>
          <p>Loan Period</p>
        </div>
      </div>
    </div>
    <div className="top-user--action">
      <MoreIcon />
    </div>
  </div>
);

export default TopUserCard;
