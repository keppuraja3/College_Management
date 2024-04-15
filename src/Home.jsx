import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/Css/Style.css";
import "./assets/Css/Home.css";
function Home() {
  document.title = "Arts College";

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel className="vw-100">
        {/* slide one */}
        <Carousel.Item interval={3500}>
          <img
            className="img-fluid w-100"
            src="/img/college_banner4.jpg"
            alt="Image One"
          />
          <Carousel.Caption className="text-start banner-text">
            <h1>Students happy campus life</h1>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide two  */}
        <Carousel.Item interval={3500}>
          <img
            className="img-fluid w-100"
            src="/img/college_banner3.jpg "
            alt="Image Two"
          />
          <Carousel.Caption className="text-start banner-text">
            <h1>Label for second slide</h1>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide three  */}
        <Carousel.Item interval={3500}>
          <img
            className="img-fluid w-100"
            src="/img/college_banner2.jpg "
            alt="Image Three"
          />
          <Carousel.Caption className="text-start banner-text">
            <h1>Label for second slide</h1>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide four */}
        <Carousel.Item interval={3500}>
          <img
            className="img-fluid w-100"
            src="/img/college_banner1.jpg "
            alt="Image Four"
          />
          <Carousel.Caption className="text-start banner-text">
            <h1>Label for second slide</h1>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
