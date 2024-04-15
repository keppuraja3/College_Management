import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Students() {
  document.title = "Students  ";

  return (
    <>
      <Container fliud className="ps-1 pe-1 ">
        <Row className="g-3 mb-3">
          <Col lg={3} md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-warning text-center px-2 py-3 text-black fw-bold fs-5">
              <Row>
                <Col lg={9}>
                  <div>Male Students</div>
                  <h3 className=" text-danger">15080</h3>
                </Col>
                <Col lg={3}>
                  <img src="/img/boy.png" alt="user" width={50} />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-success text-center px-2 py-3 text-light fw-bold fs-5">
              <Container fluid>
                <Row>
                  <Col lg={9}>
                    <div>Female Students</div>
                    <h3 className=" text-warning">12920</h3>
                  </Col>
                  <Col lg={3}>
                    <img src="/img/girl.png" alt="user" width={50} />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-danger text-center px-2 py-3 text-light fw-bold  fs-5">
              <Container fluid>
                <Row>
                  <Col lg={9}>
                    <div>Male Staffs</div>
                    <h3 className=" text-warning">205</h3>
                  </Col>
                  <Col lg={3}>
                    <img src="/img/man.png" alt="user" width={50} />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-info text-center px-2 py-3 text-dark fw-bold fs-5">
              <Container fluid>
                <Row>
                  <Col lg={9}>
                    <div>Female Staffs</div>
                    <h3 className=" text-danger">198</h3>
                  </Col>
                  <Col lg={3}>
                    <img src="/img/woman.png" alt="user" width={50} />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Students;
