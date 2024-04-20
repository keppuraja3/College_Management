import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
function Gallery() {
  document.title = "Gallery";

  return (
    <>
      <h1>Gallery</h1>
      <Container>
        <Row>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 ">
              <img
                src="img/college_lab1.jpg"
                alt="lab"
                className="w-100 object-fit-cover "
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
