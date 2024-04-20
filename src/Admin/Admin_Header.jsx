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

  useEffect(() => {
    setUserName(window.localStorage.getItem("Arts_College_User_Id"));
    setUserRole(window.localStorage.getItem("Arts_College_User_Role"));
    setUserEmail(window.localStorage.getItem("Arts_College_User_Email"));
    setUserMobileNo(window.localStorage.getItem("Arts_College_User_MobileNo"));

    if (window.localStorage.getItem("Arts_College_User_Id") == "") {
      window.location.href = "http://localhost:5173/";
    }
  }, []);

  const UserLogout = () => {
    window.localStorage.setItem("Arts_College_User_Id", "");
    window.localStorage.setItem("Arts_College_User_Role", "");
    window.localStorage.setItem("Arts_College_User_Email", "");
    window.localStorage.setItem("Arts_College_User_MobileNo", "");
    navigate("/");
  };

  //Tooltip for profile
  const [profileShow, setProfileShow] = useState(false);
  const ProfileTarget = useRef(null);

  //Tooltip for notification
  const [notificationShow, setnotificationShow] = useState(false);
  const notificationTarget = useRef(null);

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
              src="/img/menu.png"
              width="30"
              onClick={offcanvasHandleShow}
              className="d-lg-none pe-1"
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
          <Nav className="ms-auto text-warning text-center mb-0">
            <div className=" d-flex  justify-content-center ">
              {/* Notification  */}
              <div className="me-sm-2 d-flex align-items-center justify-content-center ">
                <img
                  src="/img/notification-light.png"
                  ref={notificationTarget}
                  onClick={() => setnotificationShow(!notificationShow)}
                  width={23}
                />
              </div>

              {/* Profile */}
              <Nav.Link className="me-sm-2">
                <img
                  src="/img/user_2.png"
                  alt="user"
                  ref={ProfileTarget}
                  onClick={() => setProfileShow(!profileShow)}
                  width={40}
                />
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>

      {/* Profile overlay menu  */}
      <Overlay
        target={ProfileTarget.current}
        show={profileShow}
        placement="bottom"
      >
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

      {/* Notification overlay menu  */}
      <Overlay
        target={notificationTarget.current}
        show={notificationShow}
        placement="bottom"
      >
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            <ul className="profile-container">
              <li>New features added</li>
              <li>new student jioned</li>
            </ul>
          </Tooltip>
        )}
      </Overlay>

      {/* offcanvas for sidebar menus */}
      <Offcanvas show={offcanvasShow} onHide={offcanvasHandleClose}>
        <Offcanvas.Header
          className="bg-dark"
          style={{ backgroundColor: "#2b3035" }}
        >
          <div className="d-flex justify-content-between w-100 text-light">
            <Offcanvas.Title>Atrs College</Offcanvas.Title>
            <img
              src="/img/circle-arrow-left.png"
              alt="logout arrow"
              onClick={offcanvasHandleClose}
              width={30}
            />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark ps-1">
          {/* side container content  */}
          <div className="leftSideContainer">
            <div className=" p-2 ps-3 ">
              <ul>
                <Link to={"dashboard"}>
                  <li className="py-2" onClick={offcanvasHandleClose}>
                    <div className="text-light d-flex align-items-center">
                      <div className=" p-2">
                        <img
                          src="/img/dashboard-light.png"
                          alt="Dashboard"
                          width={25}
                        />
                      </div>
                      <div>Dashboard</div>
                    </div>
                  </li>
                </Link>
                <Link to={"students  "}>
                  <li className="py-2" onClick={offcanvasHandleClose}>
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/graduation-light.png"
                          alt="Students"
                          width={25}
                        />
                      </div>
                      <div>Students</div>
                    </div>
                  </li>
                </Link>
                <Link to={"professors"}>
                  <li className="py-2" onClick={offcanvasHandleClose}>
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/professor-light.png"
                          alt="Professors"
                          width={25}
                        />
                      </div>
                      <div>Professors</div>
                    </div>
                  </li>
                </Link>
                <Link to={"departments"}>
                  <li className="py-2" onClick={offcanvasHandleClose}>
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/department-light.png"
                          alt="Departments"
                          width={25}
                        />
                      </div>
                      <div>Departments</div>
                    </div>
                  </li>
                </Link>
                <Link to={"courses"}>
                  <li className="py-2" onClick={offcanvasHandleClose}>
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/book-light.png"
                          alt="Courses"
                          width={25}
                        />
                      </div>
                      <div>Courses</div>
                    </div>
                  </li>
                </Link>
                <Link to={"events"}>
                  <li className="py-2" onClick={offcanvasHandleClose}>
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/event-light.png"
                          alt="Events"
                          width={27}
                        />
                      </div>
                      <div>Events</div>
                    </div>
                  </li>
                </Link>
                <Link to={"userManagement"}>
                  <li className="py-2" onClick={offcanvasHandleClose}>
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/user-light.png"
                          alt="Professors"
                          width={25}
                        />
                      </div>
                      <div>User Management</div>
                    </div>
                  </li>
                </Link>
                <Link to={"settings"}>
                  <li className="py-2" onClick={offcanvasHandleClose}>
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/setting-light.png"
                          alt="Settings"
                          width={25}
                        />
                      </div>
                      <div>Settings</div>
                    </div>
                  </li>
                </Link>
                <Link to={"report"}>
                  <li className="py-2" onClick={offcanvasHandleClose}>
                    <div className="text-light d-flex align-items-center">
                      <div className="  p-2">
                        <img
                          src="/img/report-light.png"
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
