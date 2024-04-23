import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
function Course() {
  // Page Title
  document.title = "Course";

  return (
    <>
      <Container fluid className="mt-3">
        <Row className="w-100 g-3">
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              B.COM
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              B.A
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              M.COM
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              M.A
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              B.COM CA
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              B.A HISTORY
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              B.A TAMIL
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              B.COM BANKING
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              M.COM BANKING
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              M.A TAMIL
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              B.A ENGLISH
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-3 py-4 text-center bg-dark-subtle ">
              B.COM FINANCE
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Course;
