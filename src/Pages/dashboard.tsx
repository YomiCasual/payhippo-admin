import Sidebar from "../UI/Sidebar";
import DashboardMiddle from "../UI/DashboardMiddle";
import DashboardRight from "../UI/DashboardRight";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <DashboardMiddle />
      <DashboardRight />
    </div>
  );
};

export default Dashboard;
