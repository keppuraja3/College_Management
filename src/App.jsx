import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Login from "./Login";
import Register from "./Admin/Register";
import ForgetPassword from "./ForgetPassword";
import About from "./About";
import Home from "./Home";
import Department from "./Department";
import Admin from "./Admin/Admin";
import "./assets/Css/App.css";
import "./assets/Css/Home.css";
import "./assets/Css/Style.css";
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
import "./Admin/Css/Admin.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Header />}>
          <Route path="" element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="department" element={<Department />} />
          <Route path="about" element={<About />} />
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
      <div
        id="main-container"
        className=" d-flex justify-content-center align-items-center w-100 position-relative "
      >
        <div id="main-inner-container" className="mt-3 rounded-3">
          {/* <Form_Validation /> */}
        </div>
      </div>
    </>
  );
}

export default App;
