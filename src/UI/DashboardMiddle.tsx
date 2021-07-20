import { SearchIcon, LoanIcon } from "../Assets/icons";

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

      <div className="stat__cards">
        <div className="stat__card">
          <div className="stat__card--icon">
            <LoanIcon />
          </div>
          <div className="stat__card--content">
            <p>Registered users</p>
            <h3>₦2,450,600</h3>
          </div>
        </div>
        <div className="stat__card danger">
          <div className="stat__card--icon danger__icon">
            <LoanIcon />
          </div>
          <div className="stat__card--content">
            <p>Registered users</p>
            <h3>₦2,450,600</h3>
          </div>
        </div>
        <div className="stat__card warning">
          <div className="stat__card--icon warning__icon">
            <LoanIcon />
          </div>
          <div className="stat__card--content">
            <p>Registered users</p>
            <h3>₦2,450,600</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMiddle;
