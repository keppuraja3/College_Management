import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Admin_Header from "./Admin_Header";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import Students from "./Students";
import Professors from "./Professors";
import Department from "./Department";
import Courses from "./Courses";
import Settings from "./Settings";
import Events from "./Events";
import UserManagement from "./UserManagement";
import Report from "./Report";
import PageNotFound from "./PageNotFound";
import "./Css/Admin.css";
function Admin() {
  return (
    <>
      <Admin_Header />
      <Container fluid className="ps-0 pt-0 position-relative ">
        <Row className="">
          {/* Left Side container  */}
          <Col
            lg={2}
            className="pe-0 ps-1 d-none d-lg-block m-0 leftSideContainer "
          >
            {/* side container content  */}
            <div className=" bg-light p-2 ps-3 ">
              <ul>
                <Link to={"dashboard"}>
                  <li className="py-2">
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center p-2">
                        <img
                          src="/img/dashboard.png"
                          alt="Dashboard"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 text-dark d-none d-lg-flex align-items-center ">
                        Dashboard
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"students  "}>
                  <li className="py-2">
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/graduation-cap.svg"
                          alt="Students"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 text-dark d-none d-lg-flex align-items-center ">
                        Students
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"professors"}>
                  <li className="py-2">
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/briefcase-dark.svg"
                          alt="Professors"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 text-dark d-none d-lg-flex align-items-center ">
                        Professors
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"departments"}>
                  <li className="py-2">
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/hierarchy.png"
                          alt="Departments"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 text-dark d-none d-lg-flex align-items-center ">
                        Departments
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"courses"}>
                  <li className="py-2">
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/open-book.png"
                          alt="Courses"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 text-dark d-none d-lg-flex align-items-center ">
                        Courses
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"events"}>
                  <li className="py-2">
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img src="/img/event.png" alt="Events" width={27} />
                      </div>
                      <div className="col-lg-10 text-dark d-none d-lg-flex align-items-center ">
                        Events
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"userManagement"}>
                  <li className="py-2">
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/user-1.png"
                          alt="Professors"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 text-dark d-none d-lg-flex align-items-center ">
                        User Management
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"settings"}>
                  <li className="py-2">
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img src="/img/setting.png" alt="Settings" width={25} />
                      </div>
                      <div className="col-lg-10 text-dark d-none d-lg-flex align-items-center ">
                        Settings
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to={"report"}>
                  <li className="py-2">
                    <div className="row">
                      <div className="col-lg-2 d-flex justify-content-center  p-2">
                        <img
                          src="/img/exclamation.svg"
                          alt="Report"
                          width={25}
                        />
                      </div>
                      <div className="col-lg-10 text-dark d-none d-lg-flex align-items-center ">
                        Report
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </Col>
          {/* Right Side Container  */}
          <Col lg={10} className="pt-3 bg-info ">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Admin;
