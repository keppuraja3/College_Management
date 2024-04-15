import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";

function Admin_Header() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobileNo, setUserMobileNo] = useState("");

  // useEffect(() => {
  //   setUserName(window.localStorage.getItem("Arts_College_User_Id"));
  //   setUserRole(window.localStorage.getItem("Arts_College_User_Role"));
  //   setUserEmail(window.localStorage.getItem("Arts_College_User_Email"));
  //   setUserMobileNo(window.localStorage.getItem("Arts_College_User_MobileNo"));

  //   if (window.localStorage.getItem("Arts_College_User_Id") == "") {
  //     window.location.href = "http://localhost:5173/";
  //   }
  // }, []);

  const UserLogout = () => {
    window.localStorage.setItem("Arts_College_User_Id", "");
    window.localStorage.setItem("Arts_College_User_Role", "");
    window.localStorage.setItem("Arts_College_User_Email", "");
    window.localStorage.setItem("Arts_College_User_MobileNo", "");
    // navigate("http://localhost:5173/");
  };

  return (
    <>
      <Navbar
        expand="lg"
        className=" bg-dark bg-body-tertiary"
        sticky="top"
        data-bs-theme="dark"
      >
        <Container
          fluid
          className=" d-flex justify-content-between align-items-center"
        >
          <Navbar.Brand>
            <Link to="/admin">
              <img
                alt=""
                src="/img/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <span className=" text-warning fw-bold">Arts College</span>
            </Link>
          </Navbar.Brand>{" "}
          <div className=" text-light text-uppercase">
            <Badge bg="success" className=" text-light text-uppercase">
              {userRole}
              {/* : &nbsp; {userName} */}
            </Badge>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-warning text-center mb-0">
              <div className=" d-lg-flex d-grid  justify-content-center ">
                <Nav.Link className="me-sm-2 d-flex align-items-center justify-content-center ">
                  <img src="/img/search-light.png" alt="user" width={23} />
                </Nav.Link>
                <Nav.Link className="me-sm-2 d-flex align-items-center justify-content-center ">
                  <img
                    src="/img/notification-light.png"
                    alt="user"
                    width={23}
                  />
                </Nav.Link>
                <Nav.Link className="me-sm-2">
                  <img src="/img/user_2.png" alt="user" width={40} />
                  <div className=" text-light text-uppercase">
                    <Badge bg="success" className=" text-light text-uppercase">
                      {userRole}

                      {/* : &nbsp; {userName} */}
                    </Badge>
                  </div>
                </Nav.Link>
                <div className=" d-flex align-items-center">
                  <Badge bg="danger" onClick={UserLogout}>
                    Logout
                  </Badge>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Admin_Header;
