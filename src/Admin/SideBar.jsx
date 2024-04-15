import React from "react";
import { Link, Outlet } from "react-router-dom";
function SideBar() {
  return (
    <>
      <div className=" bg-dark p-2 text-light ">
        <ul>
          <Link to={"dashboard"}>
            <li>
              <div className="row">
                <div className="col-lg-2 d-flex justify-content-center bg-light rounded-2 p-2">
                  <img src="/img/dashboard.png" alt="Dashboard" width={25} />
                </div>
                <div className="col-lg-10 text-light d-none d-lg-flex align-items-center ">
                  Dashboard
                </div>
              </div>
            </li>
          </Link>
          <Link to={"students  "}>
            <li>
              <div className="row">
                <div className="col-lg-2 d-flex justify-content-center bg-light rounded-2 p-2">
                  <img
                    src="/img/graduation-cap.svg"
                    alt="Students"
                    width={25}
                  />
                </div>
                <div className="col-lg-10 text-light d-none d-lg-flex align-items-center ">
                  Students
                </div>
              </div>
            </li>
          </Link>
          <Link to={"professors"}>
            <li>
              <div className="row">
                <div className="col-lg-2 d-flex justify-content-center bg-light rounded-2 p-2">
                  <img
                    src="/img/briefcase-dark.svg"
                    alt="Professors"
                    width={25}
                  />
                </div>
                <div className="col-lg-10 text-light d-none d-lg-flex align-items-center ">
                  Professors
                </div>
              </div>
            </li>
          </Link>
          <Link to={"departments"}>
            <li>
              <div className="row">
                <div className="col-lg-2 d-flex justify-content-center bg-light rounded-2 p-2">
                  <img src="/img/hierarchy.png" alt="Departments" width={25} />
                </div>
                <div className="col-lg-10 text-light d-none d-lg-flex align-items-center ">
                  Departments
                </div>
              </div>
            </li>
          </Link>
          <Link to={"courses"}>
            <li>
              <div className="row">
                <div className="col-lg-2 d-flex justify-content-center bg-light rounded-2 p-2">
                  <img src="/img/open-book.png" alt="Courses" width={25} />
                </div>
                <div className="col-lg-10 text-light d-none d-lg-flex align-items-center ">
                  Courses
                </div>
              </div>
            </li>
          </Link>
          <Link to={"events"}>
            <li>
              <div className="row">
                <div className="col-lg-2 d-flex justify-content-center bg-light rounded-2 p-2">
                  <img src="/img/event.png" alt="Events" width={27} />
                </div>
                <div className="col-lg-10 text-light d-none d-lg-flex align-items-center ">
                  Events
                </div>
              </div>
            </li>
          </Link>
          <Link to={"userManagement"}>
            <li>
              <div className="row">
                <div className="col-lg-2 d-flex justify-content-center bg-light rounded-2 p-2">
                  <img src="/img/user-1.png" alt="Professors" width={25} />
                </div>
                <div className="col-lg-10 text-light d-none d-lg-flex align-items-center ">
                  User Management
                </div>
              </div>
            </li>
          </Link>
          <Link to={"settings"}>
            <li>
              <div className="row">
                <div className="col-lg-2 d-flex justify-content-center bg-light rounded-2 p-2">
                  <img src="/img/setting.png" alt="Settings" width={25} />
                </div>
                <div className="col-lg-10 text-light d-none d-lg-flex align-items-center ">
                  Settings
                </div>
              </div>
            </li>
          </Link>
          <Link to={"report"}>
            <li>
              <div className="row">
                <div className="col-lg-2 d-flex justify-content-center bg-light rounded-2 p-2">
                  <img src="/img/exclamation.svg" alt="Report" width={25} />
                </div>
                <div className="col-lg-10 text-light d-none d-lg-flex align-items-center ">
                  Report
                </div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
