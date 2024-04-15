import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  document.title = "Admin";

  return (
    <>
      <Container fliud className="ps-1 pe-1 ">
        <Row className="g-3 mb-3">
          <Col lg={3} md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-warning text-center px-2 py-3 text-black fw-bold fs-5 h-100 ">
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
            <div className=" rounded-3 bg-success text-center px-2 py-3 text-light fw-bold fs-5 h-100 ">
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
            <div className=" rounded-3 bg-danger text-center px-2 py-3 text-light fw-bold fs-5 h-100 ">
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
            <div className=" rounded-3 bg-info text-center px-2 py-3 text-dark fw-bold fs-5 h-100 ">
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
      <Container fluid className="ps-1 pe-1">
        <Row className="g-2">
          <Col lg={4} md={12} className=" bg-info rounded-3 text-light p-3">
            Lorem ipsum dolor sit amet consectetur a dipisicing elit.
            Necessitatibus, labore debitis reprehenderit molestiae, et mollitia
            placeat exercitationem recusandae beatae minus nemo, nisi animi.
            Laborum provident ratione eveniet quas distinctio placeat! Ipsum
            quaerat voluptate veritatis. Perspiciatis, de odit nam ullam rerum
            consequuntur dolore pariatur similique fuga! Voluptatem at nesciunt
            debitis maiores accusamus, a suscipit obcaecati ea amet ducimus
            placeat aut in inventore doloremque aspernatur soluta porro totam
            aliquid explicabo facilis nihil eos! Distinctio quibusdam veniam
            dolore.
          </Col>
          <Col lg={4} md={12} className=" bg-success rounded-3 text-light p-3">
            Lorem ipsum dolor sit amet consectetur a dipisicing elit.
            Necessitatibus, labore debitis reprehenderit molestiae, et mollitia
            placeat exercitationem recusandae beatae minus nemo, nisi animi.
            Laborum provident ratione eveniet quas distinctio placeat! Ipsum
            quaerat voluptate veritatis. Perspiciatis, de odit nam ullam rerum
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
