import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Gallery() {
  document.title = "Gallery";

  return (
    <>
      <h1 className="text-center mt-2 ">Gallery</h1>
      <Container>
        <Row className=" d-flex justify-content-center align-items-center gy-4 ">
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/college_students1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/collage_students1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/college_campus1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/college_students2.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/college_campus1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/college_campus1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/college_campus1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/college_campus1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/college_students1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/college_students1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/college_students1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ maxHeight: "210px" }}
            className=" "
          >
            <Card
              style={{ width: "100%" }}
              className="rounded-3 overflow-hidden  border border-2 border-black h-100"
            >
              <Card.Img variant="top" src="img/college_students1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
