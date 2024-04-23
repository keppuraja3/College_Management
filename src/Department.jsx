import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import "./assets/Css/Department.css";

function Department() {
  //Page Title
  document.title = "Department";

  return (
    <>
      <Container fluid className="mt-3">
        <Row className="w-100 g-3">
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>COMMERCE</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>BUSINESS ADMINISTRATION</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>ENGLISH</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>TAMIL</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>HISTORY</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>PCHEMISTRY</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>CHEMISTRY</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>CHEMISTRY</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>PHYSICS</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>MATHS</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>VISUAL COMMUNICATION</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <div className=" rounded-3 p-1 text-center bg-light-subtle ">
              <Card className="bg-dark text-white">
                <Card.Img src="/img/college_2.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>CHEMISTRY</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Department;
