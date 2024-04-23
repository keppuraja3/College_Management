import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Admin_Header from "./Admin_Header";
// import SideBar from "./SideBar";
// import Dashboard from "./Dashboard";
// import Students from "./Students";
// import Professors from "./Professors";
// import Department from "./Department";
// import Courses from "./Courses";
// import Settings from "./Settings";
// import Events from "./Events";
// import UserManagement from "./UserManagement";
// import Report from "./Report";
// import PageNotFound from "./PageNotFound";
function Admin() {
  const location = useLocation();
  return (
    <>
      <Admin_Header />
      <Container fluid className="ps-0 pt-0 position-relative ">
        <Row className="">
          {/* Left Side container  */}
          <Col
            lg={2}
            className="pe-0 ps-1 d-none d-lg-block m-0 leftSideContainer position-relative  "
          >
            {/* side container content  */}
            <div style={{ background: "#2b3035" }} className="h-100 p-2 ">
              <ul>
                <Link to={"dashboard"}>
                  <li
                    className={`py-2 ${
                      location.pathname === "/admin/dashboard" ||
                      location.pathname === "/admin"
                        ? "sideContainerActive"
                        : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center p-2">
                        <img
                          src="/img/dashboard-light.png"
                          alt="Dashboard"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 d-none d-lg-flex align-items-center ">
                        Dashboard
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"students"}>
                  <li
                    className={`py-2 ${
                      location.pathname === "/admin/students"
                        ? "sideContainerActive"
                        : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/graduation-light.png"
                          alt="Students"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 d-none d-lg-flex align-items-center ">
                        Students
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"professors"}>
                  <li
                    className={`py-2 ${
                      location.pathname === "/admin/professors"
                        ? "sideContainerActive"
                        : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/professor-light.png"
                          alt="Professors"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 d-none d-lg-flex align-items-center ">
                        Professors
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"departments"}>
                  <li
                    className={`py-2 ${
                      location.pathname === "/admin/departments"
                        ? "sideContainerActive"
                        : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/department-light.png"
                          alt="Departments"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 d-none d-lg-flex align-items-center ">
                        Departments
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"courses"}>
                  <li
                    className={`py-2 ${
                      location.pathname === "/admin/courses"
                        ? "sideContainerActive"
                        : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/book-light.png"
                          alt="Courses"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 d-none d-lg-flex align-items-center ">
                        Courses
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"events"}>
                  <li
                    className={`py-2 ${
                      location.pathname === "/admin/events"
                        ? "sideContainerActive"
                        : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/event-light.png"
                          alt="Events"
                          width={27}
                        />
                      </div>
                      <div className="col-lg-10 d-none d-lg-flex align-items-center ">
                        Events
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"userManagement"}>
                  <li
                    className={`py-2 ${
                      location.pathname === "/admin/userManagement"
                        ? "sideContainerActive"
                        : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/user-light.png"
                          alt="Professors"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 d-none d-lg-flex align-items-center ">
                        User Management
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"settings"}>
                  <li
                    className={`py-2 ${
                      location.pathname === "/admin/settings"
                        ? "sideContainerActive"
                        : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/setting-light.png"
                          alt="Settings"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 d-none d-lg-flex align-items-center ">
                        Settings
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"report"}>
                  <li
                    className={`py-2 ${
                      location.pathname === "/admin/report"
                        ? "sideContainerActive"
                        : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/report-light.png"
                          alt="Report"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 d-none d-lg-flex align-items-center ">
                        Report
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </Col>
          {/* Right Side Container  */}
          <Col lg={10} className="pt-3 ">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Admin;
