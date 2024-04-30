import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// Components
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
      <Carousel className=" rounded-bottom-5 s overflow-hidden ">
        {/* slide one */}
        <Carousel.Item interval={3500} className="banner-container">
          <img
            className="img-fluid w-100"
            src="/img/college_banner4.jpg"
            alt="Image One"
          />
          <Carousel.Caption className="text-start  d-none d-md-block">
            <h3>Students happy campus life</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide two  */}
        <Carousel.Item interval={3500} className="banner-container">
          <img
            className="img-fluid w-100"
            src="/img/college_banner3.jpg "
            alt="Image Two"
          />
          <Carousel.Caption className="text-start  d-none d-md-block">
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide three  */}
        <Carousel.Item interval={3500} className="banner-container">
          <img
            className="img-fluid w-100"
            src="/img/college_banner2.jpg "
            alt="Image Three"
          />
          <Carousel.Caption className="text-start  d-none d-md-block">
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide four */}
        <Carousel.Item interval={3500} className="banner-container">
          <img
            className="img-fluid w-100"
            src="/img/college_banner1.jpg "
            alt="Image Four"
          />
          <Carousel.Caption className="text-start  d-none d-md-block">
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Notification container */}
      <Container className="pb-3 ">
        <Row className="gy-3">
          <Col lg={3} className="">
            <div
              className=" bg-warning rounded-3 notification-img p-2 my-3 text-light overflow-hidden  rounded-3 mx-0"
              style={{ maxHeight: "350px" }}
            >
              <div
                className=" bg-dark rounded-3 p-3 overflow-scroll "
                style={{ maxHeight: "325px" }}
              >
                <h4 className=" text-uppercase text-center  ">
                  Important Notice
                </h4>
                <p>
                  Tommorow our college annual day. So every students come to
                  college without any leave. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ipsa ipommorow our college
                  annual day. So every students come to college without any
                  leave. Lorem ipsum dolor sit amet ipisicing elit. Ipsa
                  ipommorow our college annual day. So every students come to
                  college without any leave. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ipsa ipommorow our college
                  annual day. So every students come to college without any
                  leave. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ipsa ipommorow our college annual day. So every students
                  come to college without any leave. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ipsa ipsum odit nihil, tempo
                  animi quam minus suscipit dkkddkd, quia magni vitae!
                </p>
              </div>
            </div>
          </Col>
          <Col lg={9} className="px-0">
            {/* Result and evets notification content */}
            <div
              className="notification-container bg-warning rounded-bottom-3"
              style={{ maxHeight: "430px" }}
            >
              <Tabs
                justify
                defaultActiveKey="all"
                id="justify-tab-example"
                className="mb-1 bg-dark rounded"
              >
                <Tab eventKey="all" title="All">
                  <ul style={{ maxHeight: "255px" }}>
                    {/* <marquee
                      direction="up"
                      scrollamount="100"
                      behavior="alternate"
                    > */}
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
                    {/* </marquee> */}
                  </ul>
                </Tab>

                <Tab eventKey="results" title="Results">
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

                <Tab eventKey="function" title="Function">
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
      <Container className=" p-4">
        <Row className="text-uppercase fw-bold gy-4 rounded-3 bg-dark text-light text-center home-count-container pb-3">
          <Col lg={3} md={4} sm={6} xs={12}>
            {/* <img src="/img/" alt="" srcset="" /> */}
            <h1 className=" text-warning ">45</h1>
            <h4>Programs</h4>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h1 className=" text-warning ">10500+</h1>
            <h4>Students</h4>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h1 className=" text-warning ">390+</h1>
            <h4>Faculity Members</h4>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h1 className=" text-warning ">12</h1>
            <h4>Department</h4>
          </Col>
        </Row>
      </Container>
      <Container className="p-2 mt-2 ">
        <h3>ABOUT THE INSTITUTION</h3>
        <ul className=" text">
          <li>
            The School of Art, the oldest of the Institution was founded at
            Madras in 1850 by Dr. ALEXANDER HUNTER, M.D., F.R.S.C.E., an eminent
            surgeon in the British Military Service. The school aimed to
            inculcate the Victorian taste of art in the students. At the same
            time, their practical purpose was to provide the new generation with
            useful and enjoyable skills in the industrial ornamental arts. The
            Madras School of Arts was started in Pophams, Broadway in May 1850.
            Only in the 1870s, the school headquarters was moved to the present
            location in Poonamallee High Road.
          </li>
          <li>
            The school was taken over by the Department of Public Instruction in
            1852. In consultation with the East India House and the Royal
            Academy in London, Dr. HUNTER set up an eight-member committee to
            decide upon the future course of study in the School of Arts and its
            management. As a result, the Madras School was converted into
            Government School of Industrial Arts consisting of two Departments –
            the Artistic and the Industrial. With the Government funds, books
            were procured from the South Kensington School of Arts in London, to
            which all the Colonial Art Schools were linked. Through teaching
            techniques of drawing and lithography, the students of the school
            itself contributed to illustrating numerous publications on the
            topics ranging from arts to science and engineering. There is no
            other library in Chennai, that has a collection of art books equal
            to that of the Government College of Fine Arts library. The art work
            in the college museum were either done by students or collected by
            the school in the nineteenth century. Museum was setup in the
            nineteenth century as a means for educating art school students,
            artisans and the public. Today, the collection serves as a
            historical record of that time period's art production as well as
            museum collecting practices.
          </li>
          <li>
            In its sixteenth year in 1868, the Government of Industrial Arts had
            taught about 3500 students out of whom about 2000 were placed in
            India, Canada, Australia, England and the Andaman and Nicobar
            Islands. It sent out teachers to the art schools in Calcutta,
            Jaipur, Travancore, Mysore and Ceylon. It was also ready to assist
            in setting up art schools in Lucknow, Roorkee, Surat, Pune, Agra,
            Lahore and Assam.
          </li>
          <li>
            Government School of Industrial Arts had two more British
            Superintendents R.F.CHISOLM and W.S.HADAWAY, but it was E.B.HAVELL,
            a British art teacher and critic, who arrived in India in 1884 as
            the Principal of Madras School of Arts and Crafts, that made a great
            impact by his vindication of the beauty of Indian art and the great
            ideas it had inspired. E.B.HAVELL was responsible for introducing
            wood carving, carpentry and metal work units in the school. He also
            espoused the cause of handloom weaving and the need to preserve
            traditional art and architecture. He put forth certain practical
            propositions for the revival of Indian art and architecture. HAVELL
            left Madras in 1896, to take over as the Principal of the Calcutta
            School of Art. When the Madras School came under the jurisdiction of
            the Director of Industries and Commerce - RAO BAHADUR,
            N.R.BALAKRISHNA MUDALIAR became its first Indian Superintendent in
            1927. D.P.ROY CHOUDHURY, student of ABANINDRANATH TAGORE, took over
            as the first Indian Prinicipal of the Madras School of Arts and
            Crafts in 1929. K.C.S.PANIKER, suceeded him as Principal in 1957 and
            it was during his tenure that the Madras School of Arts and Crafts
            was upgraded into a College in 1961. In 1973, the Department of
            Technical Education stepped into the administration. Mr.S.DHANAPAL
            who became the Principal, encouraged the study and making of South
            Indian traditional painting and sculpture. The new degree courses in
            B.Sc. Design, B.F.A, Fine Arts were introduced in 1979 in
            affiliation with University of Madras. Similarly the other
            departments like Textile, Ceramic, Painting, Sculpture were also
            established. The Government of Tamil Nadu also created a Department
            of Art and Culture with the specific idea of patronage and guidance
            in the field of Arts and Design. The College of Arts and Crafts,
            Chennai was brought under its purview in December 1991. Under the
            Department of Art and Culture purview, PG programme like
            M.F.A-Painting was introduced in 1999. The next year, Visual
            communication Design, Ceramic Design, Textile Design was introduced
            and M.F.A-Sculpture was introduced during 2009-2010. The Government
            College of Fine Arts became affiliated to Tamil Nadu Dr.J
            Jayalaithaa Music and Fine Arts University.
          </li>
          <li>
            With the dedicated effort from Department of Art and Culture,
            Faculty, Staff and Students both past and present, the college today
            boasts with an exalted status of academic distinction, nationally
            and internationally. The 4-year full time UG Degree courses are
            Painting, Sculpture, Print making, Visual Communication Design,
            Textile Design, Ceramic Design. These Under Graduate Degree can be
            succeeded by two year fulltime PG degree courses which includes
            Painting, Sculpture, Visual Communication Design, Ceramic Design and
            Textile Design.
          </li>
        </ul>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
