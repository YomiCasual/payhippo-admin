import {
  SearchIcon,
  LoanIcon,
  TicketIcon,
  UserGroupIcon,
} from "../Assets/icons";
import LoanStatisticsCard from "../Components/LoanStatisticsCard";
import TopStatesCard from "../Components/TopStatesCard";
import StatsCard from "../Components/StatsCard";

const DashboardMiddle = () => {
  return (
    <div className="dashboard__middle middle-wrapper">
      <div className="dashboard__middle--header">
        <h3>Dashboard</h3>
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
            title="Registerd users"
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
