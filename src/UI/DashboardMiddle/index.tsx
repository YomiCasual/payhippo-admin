import {
  SearchIcon,
  LoanIcon,
  TicketIcon,
  UserGroupIcon,
} from "../../Assets/icons/index";
import LoanStatisticsCard from "../../Components/LoanStatisticsCard";
import TopStatesCard from "../../Components/TopStatesCard";
import StatsCard from "../../Components/StatsCard";
import { UserAvatar } from "./../DashboardRight";

const DashboardMiddle = () => {
  return (
    <div className="dashboard__middle middle-wrapper">
      <div className="dashboard__middle--header">
        <div className="title">
          <h3 data-testid="dashboard-header">Dashboard</h3>
          <UserAvatar />
        </div>

        <div className="input__field">
          <input type="text" placeholder="Search" />
          <div className="input__field--icon">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="dashboard__middle--content">
        <div className="stat__cards">
          <StatsCard
            icon={<UserGroupIcon />}
            title="Registered users"
            value="₦2,450,600"
          />
          <StatsCard
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
        </div>
        <div>
          <LoanStatisticsCard />
          <TopStatesCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardMiddle;
