import React from "react";
import { UsersTableData } from "./UsersData";
import DropDownIcon from "../../assets/vectors/dropdown.svg";
import LeftCaretIcon from "../../assets/vectors/left-caret.svg";
import RightCaretIcon from "../../assets/vectors/right-caret.svg";
import { useNavigate } from "react-router-dom";

const UsersTable = ({ itemsPerPage }: any) => {
  const history = useNavigate();
  // We start with an empty list of items.

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>
              organization <img src={DropDownIcon} alt="icon" />
            </th>
            <th>
              Username <img src={DropDownIcon} alt="icon" />
            </th>
            <th className="email">
              Email <img src={DropDownIcon} alt="icon" />
            </th>
            <th>
              Phone Number <img src={DropDownIcon} alt="icon" />
            </th>
            <th>
              Date joined <img src={DropDownIcon} alt="icon" />
            </th>
            <th>
              Status <img src={DropDownIcon} alt="icon" />
            </th>
            <th></th>
          </tr>
        </thead>
        {UsersTableData.map((item, index) => {
          return (
            <tbody>
              <tr key={index} onClick={() => history(`/users/${item.id}`)}>
                <td data-label="organization"> {item.organization} </td>
                <td data-label="Username">{item.username}</td>
                <td data-label="Email">{item.email}</td>
                <td data-label="Phone Number">{item.phone_number}</td>
                <td data-label="Date joined">{item.date_joined}</td>
                <td data-label="Status">
                  <span className="table-status">{item.status}</span>
                </td>
                <td>
                  <img src={item.btn} alt="btn" className="btn-table" />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div className="pagination-container">
        <div className="rows_count">
          Showing <span className="nums_grey">100</span> out of 100
        </div>
        {/* <div className="pagintion-left"> */}
        <div className="pagination:number arrow">
          <img src={LeftCaretIcon} alt="left-caret" />
        </div>
        <div className="pagination">1</div>
        <div className="pagination">2</div>
        <div className="pagination">3</div>
        <div className="pagination">15</div>
        <div className="pagination">16</div>
        <div className="pagination:number arrow">
          <img src={RightCaretIcon} alt="right-caret" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default UsersTable;
