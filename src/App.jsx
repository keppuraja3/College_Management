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
import "./assets/Css/App.css";
import "./assets/Css/Home.css";
import "./assets/Css/Style.css";
import "./Admin/Css/Admin.css";
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
        <div></div>
      )}
      <Routes>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/user/:id" element={<User />}></Route>

        <Route path="" element={<Header />}>
          <Route path="" element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="department" element={<Department />} />
          <Route path="about" element={<About />} />
          <Route path="searchparam" element={<SearchParam />}></Route>
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route path="*" element={<PageNotFound />} />
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="professors" element={<Professors />} />
          <Route path="departments" element={<Departments />} />
          <Route path="courses" element={<Courses />} />
          <Route path="events" element={<Events />} />
          <Route path="userManagement" element={<UserManagement />} />
          <Route path="settings" element={<Settings />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
