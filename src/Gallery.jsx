import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
function Gallery() {
  document.title = "Gallery";

  return (
    <>
      <h1 className="text-center mt-2 ">Gallery</h1>
      <Container>
        <Row className=" d-flex justify-content-center align-items-center g-4 ">
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <div className=" rounded-3 overflow-hidden  border border-2 border-black h-100">
              <img
                src="img/college_students1.jpg"
                alt="lab"
                className=" img-fluid "
              />
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <div className=" rounded-3 overflow-hidden  border border-2 border-black h-100">
              <img
                src="img/collage_students1.jpg"
                alt="lab"
                className=" img-fluid "
              />
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <div className=" rounded-3 overflow-hidden  border border-2 border-black h-100">
              <img
                src="img/college_campus1.jpg"
                alt="lab"
                className=" img-fluid "
              />
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <div className=" rounded-3 overflow-hidden  border border-2 border-black h-100">
              <img
                src="img/college_students2.jpg"
                alt="lab"
                className=" img-fluid "
              />
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <div className=" rounded-3 overflow-hidden  border border-2 border-black h-100">
              <img
                src="img/college_campus1.jpg"
                alt="lab"
                className=" img-fluid "
              />
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <div className=" rounded-3 overflow-hidden  border border-2 border-black h-100">
              <img
                src="img/college_campus1.jpg"
                alt="lab"
                className=" img-fluid "
              />
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <div className=" rounded-3 overflow-hidden  border border-2 border-black h-100">
              <img
                src="img/college_campus1.jpg"
                alt="lab"
                className=" img-fluid "
              />
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <div className=" rounded-3 overflow-hidden  border border-2 border-black h-100">
              <img
                src="img/college_campus1.jpg"
                alt="lab"
                className=" img-fluid "
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
