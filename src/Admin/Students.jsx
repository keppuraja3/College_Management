import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Students() {
  document.title = "Students  ";

  return (
    <>
      <Container fliud className="ps-3 pe-1 ">
        <Row className="g-3 mb-3">
          <Col lg={3} md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-warning text-center px-2 py-3 text-black fw-bold fs-5 h-100 ">
              <Row className=" align-items-center h-100">
                <Col lg={8} className="px-0">
                  <div>Male Students</div>
                  <h3 className=" text-danger">15080</h3>
                </Col>
                <Col lg={4}>
                  <img
                    src="/img/boy.png"
                    alt="user"
                    style={{ maxWidth: "50px" }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-success text-center px-2 py-3 text-light fw-bold fs-5 h-100 ">
              <Row className=" align-items-center h-100">
                <Col lg={8} className="px-0">
                  <div>Femal Students</div>
                  <h3 className=" text-dark ">15080</h3>
                </Col>
                <Col lg={4}>
                  <img
                    src="/img/girl.png"
                    alt="user"
                    style={{ maxWidth: "50px" }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-danger text-center px-2 py-3 text-black fw-bold fs-5 h-100 ">
              <Row className=" align-items-center h-100">
                <Col lg={8} className="px-0">
                  <div>Male Staffs</div>
                  <h3 className=" text-light">15080</h3>
                </Col>
                <Col lg={4}>
                  <img
                    src="/img/man.png"
                    alt="user"
                    style={{ maxWidth: "50px" }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-dark text-center px-2 py-3 text-light fw-bold fs-5 h-100 ">
              <Row className=" align-items-center h-100">
                <Col lg={8} className="px-0">
                  <div>Female Staffs</div>
                  <h3 className=" text-warning">325</h3>
                </Col>
                <Col lg={4}>
                  <img
                    src="/img/woman.png"
                    alt="user"
                    style={{ maxWidth: "50px" }}
                  />
                </Col>
              </Row>
            </div>
          </Col>{" "}
        </Row>
      </Container>
    </>
  );
}

export default Students;
