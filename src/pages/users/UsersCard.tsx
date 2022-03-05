import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UsersData } from "./UsersData";
import BackIcon from "../../assets/vectors/back.svg";
import RoundIcon from "../../assets/vectors/round.svg";
// import ProfileIcon from "../../assets/vectors/profile.svg";
import StarIcon from "../../assets/vectors/star.svg";
import NoStarIcon from "../../assets/vectors/star-no.svg";

const UsersCard = () => {
  const history = useNavigate();
  const { id }: any = useParams();
  const [user] = useState([UsersData[id]]);
  return (
    <div>
      {user.map((data) => {
        return (
          <div className="users">
            <div className="view-users">
              <div
                className="view-users-back"
                onClick={() => history("/users")}
              >
                <img src={BackIcon} alt="back icon" /> <h6>Back to Users</h6>
              </div>
              <div className="view-users-header">
                <div className="view-users-header-text">
                  <h4>User Details</h4>
                </div>
                <div className="view-users-button">
                  <button className="btn-view-blacklist">Blacklist User</button>
                  <button className="btn-view-activate">Activate User</button>
                </div>
              </div>
              <div className="view-users-card">
                <div className="view-users-card-header">
                  <div className="view-users-card-header__avatar">
                    <img src={RoundIcon} alt="round icon" />
                    <div className="view-users-card-header__avatar-text">
                      <h3>Grace Effiom</h3>
                      <h6>LSQFf587g90</h6>
                    </div>
                    <span className="view-users-card-header__avatar-border"></span>
                    <div className="view-users-card-header__avatar-text">
                      <h4>User's Tier</h4>
                      <img src={StarIcon} alt="star icon" />
                      <img src={NoStarIcon} alt="star icon" />
                      <img src={NoStarIcon} alt="star icon" />
                    </div>
                    <span className="view-users-card-header__avatar-border"></span>
                    <div className="view-users-card-header__avatar-text">
                      <h3>₦200,000.00</h3>
                      <h6>9912345678/Providus Bank</h6>
                    </div>
                  </div>
                </div>
                <div className="view-users-card-footer">
                  <div className="view-users-card-footer-tags">
                    <div className="view-users-card-footer-tags-1">
                      <h6>General Details</h6>
                    </div>
                    <div className="view-users-card-footer-tags-2">
                      <h6>Documents</h6>
                    </div>
                    <div className="view-users-card-footer-tags-3">
                      <h6>Bank Details</h6>
                    </div>
                    <div className="view-users-card-footer-tags-3">
                      <h6>Loans</h6>
                    </div>
                    <div className="view-users-card-footer-tags-3">
                      <h6>Savings</h6>
                    </div>
                    <div className="view-users-card-footer-tags-3">
                      <h6>App and System</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="view-users-center">
                <div className="view-users-center-personal">
                  <h4>Personal Information</h4>

                  <div className="view-users-center-flex">
                    <div className="view-user-center-flex-cell">
                      <h3>Full name</h3>
                      <h6>Grace Effiom</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>Phone number</h3>
                      <h6>07060780922</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>Email Address</h3>
                      <h6>grace@gmail.com</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>BVN</h3>
                      <h6>07060780922</h6>
                    </div>
                    <div className="view-user-center-flex-cell view-user-center-flex-br">
                      <h3>Gender</h3>
                      <h6>Female</h6>
                    </div>
                  </div>
                  <div className="view-users-center-padding">
                    <div className="view-user-center-flex-cell">
                      <h3>Marital Status</h3>
                      <h6>Single</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>Children</h3>
                      <h6>None</h6>
                    </div>
                    <div className="view-user-center-padding-cell">
                      <h3>Type of residence</h3>
                      <h6>Parent's Apartment</h6>
                    </div>
                  </div>
                </div>
                <div className="view-users-center-personal view-users-center-personal-space">
                  <h4>Education and Employment</h4>

                  <div className="view-users-center-flex">
                    <div className="view-user-center-flex-cell">
                      <h3>level of education</h3>
                      <h6>B.Sc</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>Employment status</h3>
                      <h6>Employed</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>sector of employment</h3>
                      <h6>FinTech</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>Duration of employment</h3>
                      <h6>2 years</h6>
                    </div>
                  </div>
                  <div className="view-users-center-padding">
                    <div className="view-user-center-flex-cell">
                      <h3>office email</h3>
                      <h6>grace@lendsqr.com</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>Monthly income</h3>
                      <h6>₦200,000.00- ₦400,000.00</h6>
                    </div>
                    <div className="view-user-center-flex-padding">
                      <h3>loan repayment</h3>
                      <h6>40,000</h6>
                    </div>
                  </div>
                </div>
                <div className="view-users-center-personal view-users-center-personal-space">
                  <h4>Socials</h4>

                  <div className="view-users-center-between">
                    <div className="view-user-center-flex-cell">
                      <h3>twitter</h3>
                      <h6>@grace_effiom</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>facebook</h3>
                      <h6>Grace Effiom</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>Instagram</h3>
                      <h6>@grace_effiom</h6>
                    </div>
                  </div>
                </div>
                <div className="view-users-center-personal view-users-center-personal-space">
                  <h4>Guarantor</h4>

                  <div className="view-users-center-between">
                    <div className="view-user-center-flex-cell">
                      <h3>full Name</h3>
                      <h6>Debby Ogana</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>Phone Number</h3>
                      <h6>07060780922</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>Email Address</h3>
                      <h6>debby@gmail.com</h6>
                    </div>
                    <div className="view-user-center-flex-cell">
                      <h3>Relationship</h3>
                      <h6>Sister</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersCard;
