import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./assets/Css/Style.css";
function Footer() {
  return (
    <>
      <Container
        fluid
        id="FooterContainer"
        className=" bg-dark text-light pt-3 mt-3"
      >
        <div className=" bg-dark rounded-3 p-2">
          <Link
            className=" m-1 align-items-center d-flex justify-content-center "
            to="/"
          >
            <img
              alt=""
              src="/img/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span className=" text-warning fw-bold">Arts College</span>
          </Link>
        </div>
        <Row className=" p-3 ">
          <Col lg={3} md={4} sm={6} xs={12}>
            <ul className=" d-grid align-items-center h-100 pb-3  pb-md-1 pb-md-1">
              <li className=" text-warning ">Quick Links</li>
              <Link className=" text-light" to={"/"}>
                Home
              </Link>
              <Link className=" text-light" to={"/course"}>
                Course
              </Link>
              <Link className=" text-light" to={"/departments"}>
                Departments
              </Link>
              <Link className=" text-light" to={"/gallery"}>
                Gallery
              </Link>
              <Link className=" text-light" to={"/about"}>
                About
              </Link>
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <ul className=" d-grid align-items-center h-100 pb-3  pb-md-1 pb-md-1">
              <li className=" text-warning ">Social Media</li>
              <Link className=" text-light" to={"/"}>
                Youtube
              </Link>
              <Link className=" text-light" to={"/course"}>
                Facebook
              </Link>
              <Link className=" text-light" to={"/departments"}>
                Twitter
              </Link>
              <Link className=" text-light" to={"/gallery"}>
                Youtube
              </Link>
              <Link className=" text-light" to={"/about"}>
                Twitter
              </Link>
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <ul className=" d-grid align-items-center h-100 pb-3  pb-md-1">
              <li className=" text-warning ">Students Links</li>
              <Link className=" text-light" to={"/"}>
                Login
              </Link>
              <Link className=" text-light" to={"/course"}>
                Fees
              </Link>
              <Link className=" text-light" to={"/departments"}>
                Syllabus
              </Link>
              <Link className=" text-light" to={"/gallery"}>
                Campus Rules
              </Link>
              <Link className=" text-light" to={"/about"}>
                Hostel Fees
              </Link>
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div>
              <ul>
                <li className=" text-warning ">Maps</li>
              </ul>
              <iframe
                className=" rounded-3 "
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d23645.96242222924!2d78.1209092000777!3d9.921785384565947!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1713869529831!5m2!1sen!2sin"
                style={{ border: "0", width: "100%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
