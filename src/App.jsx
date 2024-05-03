import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Register from "./Admin/Register";
import ForgetPassword from "./ForgetPassword";
import About from "./About";
import Home from "./Home";
import Department from "./Department";
import Admin from "./Admin/Admin";
import Course from "./Course";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Admin_Header from "./Admin/Admin_Header";
import SideBar from "./Admin/SideBar";
import Dashboard from "./Admin/Dashboard";
import Students from "./Admin/Students";
import Professors from "./Admin/Professors";
import Departments from "./Admin/Department";
import Courses from "./Admin/Courses";
import Settings from "./Admin/Settings";
import Events from "./Admin/Events";
import UserManagement from "./Admin/UserManagement";
import Report from "./Admin/Report";
import PageNotFound from "./Admin/PageNotFound";
import SearchParam from "./SearchParam";
import Users from "./Users";
import User from "./User";
import { AuthProvider } from "./Auth";
import "./assets/Css/App.css";
import "./assets/Css/Home.css";
import "./assets/Css/Style.css";
import "./Admin/Css/Admin.css";
import DepartmentDetails from "./DepartmentDetails";
import UseContextPage from "./UseContextPage";
import Staff from "./Staff/Staff";
import { RequireAuth } from "./RequireAuth";
function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  // window.addEventListener("load", preLoader);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <div id="pre-loader-container">
          <img
            id="pre-loader-img"
            src="/img/loading-infinity.gif"
            alt="Loading...."
            className=" rounded-circle"
          />
        </div>
      ) : (
        <></>
      )}
      <AuthProvider>
        <Routes>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/user/:id" element={<User />}></Route>

          <Route path="" element={<Header />}>
            <Route path="" index element={<Home />} />
            <Route path="course" element={<Course />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="department" element={<Department />} />
            <Route path="departmentDetails" element={<DepartmentDetails />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="searchparam" element={<SearchParam />}></Route>
            <Route path="useContext" element={<UseContextPage />}></Route>
          </Route>

          <Route path="/admin" element={<Admin />}>
            <Route path="*" element={<PageNotFound />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="students"
              element={
                <RequireAuth>
                  <Students />
                </RequireAuth>
              }
            />
            <Route
              path="professors"
              element={
                <RequireAuth>
                  <Professors />
                </RequireAuth>
              }
            />
            <Route
              path="departments"
              element={
                <RequireAuth>
                  <Departments />
                </RequireAuth>
              }
            />
            <Route
              path="courses"
              element={
                <RequireAuth>
                  <Courses />
                </RequireAuth>
              }
            />
            <Route
              path="events"
              element={
                <RequireAuth>
                  <Events />
                </RequireAuth>
              }
            />
            <Route
              path="userManagement"
              element={
                <RequireAuth>
                  <UserManagement />
                </RequireAuth>
              }
            />
            <Route
              path="settings"
              element={
                <RequireAuth>
                  <Settings />
                </RequireAuth>
              }
            />
            <Route
              path="report"
              element={
                <RequireAuth>
                  <Report />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="staff" element={<Staff />} />
        </Routes>
      </AuthProvider>{" "}
    </>
  );
}

export default App;
