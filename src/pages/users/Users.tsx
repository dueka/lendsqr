import { Col, Row } from "react-bootstrap";
import { UsersData } from "./UsersData";
import UsersTable from "./UsersTable";
const Users = () => {
  return (
    <div className="users">
      <h3 className="users-header">Users</h3>
      <div className="users__center">
        {UsersData.map((item, index) => {
          return (
            <Row>
              <Col md={3}>
                <div className="users-card" key={index}>
                  <img
                    src={item?.icon}
                    alt="user"
                    style={{
                      maxWidth: "40px",
                      marginBottom: "2rem",
                      marginLeft: "2rem",
                    }}
                  />
                  <p>{item?.title}</p>
                  <h4>{item?.figure}</h4>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
      <div className="users__table">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
