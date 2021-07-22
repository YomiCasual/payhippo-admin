import { SearchIcon } from "../../Assets/Icons/index";
import LoanStatisticsCard from "../../Components/ui/LoanStatisticsCard";
import TopStatesCard from "../../Components/ui/TopStatesCard";
import { UserAvatar } from "./../DashboardRight";

import StatsCardGroup from "../../Components/ui/StatsCardGroup";

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
        <StatsCardGroup />
        <div>
          <LoanStatisticsCard />
          <TopStatesCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardMiddle;
