import { useState } from "react";
import Logo from "../../Assets/images/payhippologo.png";
import {
  UserIcon,
  TicketIcon,
  LogoutIcon,
  LoanIcon,
  SettingsIcon,
  DashboardIcon,
  CollapsedIcon,
  ExpandIcon,
} from "../../Assets/Icons/index";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <aside className={`sidebar ${collapsed && "sidebar-collapsed"}`}>
      <div className="sidebar__logo">
        <img data-testid="logo" src={Logo} alt="payhippo-logo" />
      </div>
      <nav className="sidebar__nav">
        <ul className="sidebar__nav--container">
          <li className="active">
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <UserIcon />
            <span>Users</span>
          </li>
          <li>
            <LoanIcon />
            <span>Loans</span>
          </li>
          <li>
            <TicketIcon />
            <span>Tickets</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>

          <li>
            <LogoutIcon />
            <span>Logout</span>
          </li>
          <li onClick={toggleCollapsed}>
            {collapsed ? <ExpandIcon /> : <CollapsedIcon />}
            <span>Collapse</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
