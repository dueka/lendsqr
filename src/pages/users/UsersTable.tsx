import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { UsersTableData } from "./UsersData";
import DropDownIcon from "../../assets/vectors/dropdown.svg";
import LeftCaretIcon from "../../assets/vectors/left-caret.svg";
import RightCaretIcon from "../../assets/vectors/right-caret.svg";
import { useNavigate } from "react-router-dom";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

const UsersTable = ({ itemsPerPage }: any) => {
  const history = useNavigate();
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    //  setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
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
