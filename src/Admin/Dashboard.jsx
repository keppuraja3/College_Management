import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  document.title = "Admin";

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
      <Container fluid className="ps-3 pe-1">
        <Row className=" gy-3">
          <Col lg={4} md={12} className=" bg-success rounded-3 text-light p-3">
            Lorem ipsum dolor sit amet consectetur a dipisicing elit.
            Necessitatibus, labore debitis reprehenderit molestiae, et mollitia
            consequuntur dolore pariatur similique fuga! Voluptatem at nesciunt
            debitis maiores accusamus, a suscipit obcaecati ea amet ducimus
            placeat aut in inventore doloremque aspernatur soluta porro totam
            aliquid explicabo facilis nihil eos! Distinctio quibusdam veniam
            dolore.
          </Col>
          <Col lg={4} md={12} className=" bg-light rounded-3 text-dark p-3">
            Lorem ipsum dolor sit amet consectetur a dipisicing elit.
            Necessitatibus, labore debitis reprehenderit molestiae, et mollitia
            consequuntur dolore pariatur similique fuga! Voluptatem at nesciunt
            debitis maiores accusamus, a suscipit obcaecati ea amet ducimus
            placeat aut in inventore doloremque aspernatur soluta porro totam
            aliquid explicabo facilis nihil eos! Distinctio quibusdam veniam
            dolore.
          </Col>
          <Col
            lg={4}
            md={12}
            className=" bg-dark border-3  border-black rounded-3 text-light p-3"
          >
            fkjdkfj df fdjflkjd fd fd fj rat voluptate veritatis. Perspiciatis,
            nesciunt eos molestiae quod labore accusamus cum cumque laborum in
            eum quos expedita, doloribus fuga! Corrupti dicta nisi minima
            dolores quasi dolorem repellendus tempora eum! Itaque blanditiis
            dolor sed, enim rem unde eos, consequuntur nam non quisquam placeat
            odit. Fuga inventore incidunt perferendis illum, laudantium
            provident eius? Doloribus, enim tempora. Tempora dolores quo totam
            voluptatem! Ullam ea tempora neque ad eius exercitationem repellat
            repudiandae nulla reiciendis esse? Quidem, officiis nemo doloribus
            laudantium et perspiciatis expedita unde odit nam ullam rerum
            consequuntur dolore pariatur similique fuga! Voluptatem at nesciunt
            debitis maiores accusamus, a suscipit obcaecati ea amet ducimus
            placeat aut in inventore doloremque aspernatur soluta porro totam
            aliquid explicabo facilis nihil eos! Distinctio quibusdam veniam
            dolore.
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
