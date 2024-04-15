import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState, useRef } from "react";
import Badge from "react-bootstrap/Badge";
import Offcanvas from "react-bootstrap/Offcanvas";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

function Admin_Header() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobileNo, setUserMobileNo] = useState("");

  //offcanvas for side bar
  const [offcanvasShow, setOffcanvasShow] = useState(false);

  const offcanvasHandleClose = () => setOffcanvasShow(false);
  const offcanvasHandleShow = () => setOffcanvasShow(true);

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
    navigate("/");
  };

  //Tooltip for profile
  const [profileShow, setProfileShow] = useState(false);
  const target = useRef(null);

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
            <img
              alt=""
              src="/img/circle-arrow-right.png"
              width="30"
              onClick={offcanvasHandleShow}
              className="d-md-none pe-1"
            />
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
                {/* <Nav.Link className="me-sm-2 d-flex align-items-center justify-content-center ">
                  <img src="/img/search-light.png" alt="user" width={23} />
                </Nav.Link> */}
                <Nav.Link className="me-sm-2 d-flex align-items-center justify-content-center ">
                  <img
                    src="/img/notification-light.png"
                    alt="user"
                    width={23}
                  />
                </Nav.Link>
                <Nav.Link className="me-sm-2">
                  <img
                    src="/img/user_2.png"
                    alt="user"
                    ref={target}
                    onClick={() => setProfileShow(!profileShow)}
                    width={40}
                  />
                  <div className=" text-light text-uppercase">
                    <Badge bg="success" className=" text-light text-uppercase">
                      {userRole}

                      {/* : &nbsp; {userName} */}
                    </Badge>
                  </div>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Profile overlay menu  */}
      <Overlay target={target.current} show={profileShow} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            <ul className="profile-container">
              <li>Profile</li>
              <li>Change Password</li>
              <li>
                <div style={{ color: "red" }} onClick={UserLogout}>
                  Logout &nbsp;{" "}
                  <img src="/img/exit-red.png" alt="logout arrow" width={20} />
                </div>
              </li>
            </ul>
          </Tooltip>
        )}
      </Overlay>

      {/* offcanvas for sidebar menus */}
      <Offcanvas show={offcanvasShow} onHide={offcanvasHandleClose}>
        <Offcanvas.Header className="bg-dark">
          <div className="d-flex justify-content-between w-100 text-light">
            <Offcanvas.Title>Offcanvass</Offcanvas.Title>
            <img
              src="/img/circle-arrow-left.png"
              alt="logout arrow"
              onClick={offcanvasHandleClose}
              width={30}
            />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark">
          {/* side container content  */}
          <div className="leftSideContainer">
            <div className=" p-2 ps-3 ">
              <ul>
                <Link to={"dashboard"}>
                  <li className="py-2">
                    <div className="text-light d-flex align-items-center">
                      <div className=" p-2">
                        <img
                          src="/img/dashboard.png"
                          alt="Dashboard"
                          width={25}
                        />
                      </div>
                      <div>Dashboard</div>
                    </div>
                  </li>
                </Link>
                <Link to={"students  "}>
                  <li className="py-2">
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/graduation-cap.svg"
                          alt="Students"
                          width={25}
                        />
                      </div>
                      <div>Students</div>
                    </div>
                  </li>
                </Link>
                <Link to={"professors"}>
                  <li className="py-2">
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/briefcase-dark.svg"
                          alt="Professors"
                          width={25}
                        />
                      </div>
                      <div>Professors</div>
                    </div>
                  </li>
                </Link>
                <Link to={"departments"}>
                  <li className="py-2">
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/hierarchy.png"
                          alt="Departments"
                          width={25}
                        />
                      </div>
                      <div>Departments</div>
                    </div>
                  </li>
                </Link>
                <Link to={"courses"}>
                  <li className="py-2">
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/open-book.png"
                          alt="Courses"
                          width={25}
                        />
                      </div>
                      <div>Courses</div>
                    </div>
                  </li>
                </Link>
                <Link to={"events"}>
                  <li className="py-2">
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img src="/img/event.png" alt="Events" width={27} />
                      </div>
                      <div>Events</div>
                    </div>
                  </li>
                </Link>
                <Link to={"userManagement"}>
                  <li className="py-2">
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/user-1.png"
                          alt="Professors"
                          width={25}
                        />
                      </div>
                      <div>User Management</div>
                    </div>
                  </li>
                </Link>
                <Link to={"settings"}>
                  <li className="py-2">
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img src="/img/setting.png" alt="Settings" width={25} />
                      </div>
                      <div>Settings</div>
                    </div>
                  </li>
                </Link>
                <Link to={"report"}>
                  <li className="py-2">
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/exclamation.svg"
                          alt="Report"
                          width={25}
                        />
                      </div>
                      <div>Report</div>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Admin_Header;
