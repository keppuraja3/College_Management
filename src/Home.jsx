import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// Components
import Header from "./Header";
import Footer from "./Footer";

// Css files
import "bootstrap/dist/css/bootstrap.css";
import "./assets/Css/Style.css";
import "./assets/Css/Home.css";

function Home() {
  // Page title
  document.title = "Arts College";

  // Carousel functions-----maybe
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* Carousel banner on home page  */}
      <Carousel className="">
        {/* slide one */}
        <Carousel.Item interval={3500}>
          <img
            className="img-fluid w-100"
            src="/img/college_banner4.jpg"
            alt="Image One"
          />
          <Carousel.Caption className="text-start banner-text d-none d-md-block">
            <h3>Students happy campus life</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide two  */}
        <Carousel.Item interval={3500}>
          <img
            className="img-fluid w-100"
            src="/img/college_banner3.jpg "
            alt="Image Two"
          />
          <Carousel.Caption className="text-start banner-text d-none d-md-block">
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide three  */}
        <Carousel.Item interval={3500}>
          <img
            className="img-fluid w-100"
            src="/img/college_banner2.jpg "
            alt="Image Three"
          />
          <Carousel.Caption className="text-start banner-text d-none d-md-block">
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide four */}
        <Carousel.Item interval={3500}>
          <img
            className="img-fluid w-100"
            src="/img/college_banner1.jpg "
            alt="Image Four"
          />
          <Carousel.Caption className="text-start banner-text d-none d-md-block">
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Notification container */}
      <Container fluid className=" overflow-hidden ">
        <Row className="gy-3">
          <Col md={3} className="pe-0">
            <div className=" bg-info rounded-3 p-3 my-3  rounded-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              reprehenderit quod a ad sapiente eligendi odio similique quaerat
              maxime quos maiores, dicta magni quasi harum provident sed alias
              maxime quos maiores, dicta magni quasi harum provident sed alias
              maxime quos maiores, dicta magni quasi harum provident sed alias
              maxime quos maiores, dicta magni quasi maiores, dicta magni quasi
              harum provident sed alias ipsa at.
            </div>
          </Col>
          <Col md={9} className="px-0">
            {/* Result and evets notification content */}
            <div className="notification-container bg-warning">
              <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-1 bg-dark rounded"
              >
                <Tab eventKey="resutls" title="Results">
                  <ul>
                    <li>
                      B.com(CA) 2024-May 5th sem result{" "}
                      <a href="#">Click here</a>{" "}
                    </li>
                    <li>
                      B.A Tamil 2024-April 2nd sem result{" "}
                      <a href="#">Click here</a>{" "}
                    </li>
                    <li>
                      B.A English 2023-Nov 4th sem result{" "}
                      <a href="#">Click here</a>{" "}
                    </li>
                    <li>
                      B.A Math 2024-Nov 1st sem result{" "}
                      <a href="#">Click here</a>{" "}
                    </li>
                    <li>
                      B.com(CA) 2024-May 5th sem result{" "}
                      <a href="#">Click here</a>{" "}
                    </li>
                    <li>
                      B.com(CA) 2024-May 5th sem result{" "}
                      <a href="#">Click here</a>{" "}
                    </li>
                    <li>
                      B.A Tamil 2024-April 2nd sem result{" "}
                      <a href="#">Click here</a>{" "}
                    </li>
                    <li>
                      B.A English 2023-Nov 4th sem result{" "}
                      <a href="#">Click here</a>{" "}
                    </li>
                    <li>
                      B.A Math 2024-Nov 1st sem result{" "}
                      <a href="#">Click here</a>{" "}
                    </li>
                    <li>
                      B.com(CA) 2024-May 5th sem result{" "}
                      <a href="#">Click here</a>{" "}
                    </li>
                  </ul>
                </Tab>
                <Tab eventKey="events" title="Events">
                  <ul>
                    <li>
                      April 27 college annual day function{" "}
                      <a href="#">view details</a>{" "}
                    </li>
                    <li>
                      April 27 college annual day function{" "}
                      <a href="#">view details</a>{" "}
                    </li>
                    <li>
                      April 27 college annual day function{" "}
                      <a href="#">view details</a>{" "}
                    </li>
                    <li>
                      April 27 college annual day function{" "}
                      <a href="#">view details</a>{" "}
                    </li>
                    <li>
                      April 27 college annual day function{" "}
                      <a href="#">view details</a>{" "}
                    </li>
                  </ul>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>

      {/* No of count of students and staffs container  */}
      <Container className="rounded-3 bg-dark text-light text-center ">
        <Row>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h1>Students</h1>
            <span>32343</span>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h1>Students</h1>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h1>Students</h1>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h1>Students</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
