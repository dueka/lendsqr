import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";

const DashboardMenu = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const location = useLocation();
  const hideInLocation = ["/login"];

  return (
    <div
      className={`"" ${
        hideInLocation.includes(location.pathname) && "hide-nav"
      }`}
    >
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <div className="nav-menu-spacer">
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${item.cName} ${
                    item.paths.includes(location.pathname) && "menu-path"
                  }`}
                >
                  <h6>{item.section}</h6>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="menu-span">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardMenu;
