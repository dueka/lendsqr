import { ReactComponent as BellIcon } from "../assets/vectors/bell.svg";
import { ReactComponent as SearchIcon } from "../assets/vectors/search.svg";
import userImage from "../assets/vectors/avatar.svg";
import LendSqrLogo from "../assets/vectors/logo.svg";
import { useLocation } from "react-router-dom";
const DashboardHeader = () => {
  const location = useLocation();
  const hideInLocation = ["/login"];
  return (
    <div className="hide-on-print">
      <div
        className={`"" ${
          hideInLocation.includes(location.pathname) && "hide-nav"
        }`}
      >
        <div className="header">
          <div className="header__column">
            <div className="header-image">
              <img
                src={LendSqrLogo}
                alt="cloud-wallet"
                className="header-logo"
              />
            </div>
            <div className="header-search">
              <div className="header-search-body">
                <div className="header-input">
                  <input
                    type="text"
                    placeholder="Search for anything"
                    // className="header-input"
                  />
                </div>
                <div className="header-search-icon">
                  <SearchIcon />
                </div>
              </div>
            </div>
            <div className="header-avatar">
              <div className="header-avatar__icon">
                <a href="/">Docs</a>
              </div>
              <div className="header-avatar__icon">
                <BellIcon />
              </div>
              <div>
                <img
                  src={userImage}
                  alt="cloud-wallet"
                  className="header-avatar-img"
                />
              </div>
              <h5>Adedeji</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardHeader;
