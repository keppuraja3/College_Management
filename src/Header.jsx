import { useState } from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import LoginBg from "/img/logo.png";
import "./assets/Css/Header.css";

function Header() {
  //create a navigation variable--
  const navigate = useNavigate();

  //Login form model show and hide codes--
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUserError("");
    setPassError("");
  };

  const handleShow = () => setShow(true);

  //Get user inputs to the variable--
  const [inputedUser, setInputedUser] = useState({
    UserName: "",
    UserPassword: "",
  });

  //Password show and hide -----
  const [isEyeShow, setIsEye] = useState(false);

  const ChangePassVisible = (event) => {
    if (isEyeShow === false) {
      event.target.src = "/img/closed-eyes-dark.png";
      event.target.width = "20";
      setIsEye(true);
      setPassType("text");
    } else {
      event.target.src = "/img/eye.svg";
      setIsEye(false);
      setPassType("password");
    }
  };

  //password type changing variable--
  const [passType, setPassType] = useState("password");

  // Get user data from backend and store into the variable--
  const [loginUserData, setLoginUserData] = useState({});

  const loginInput = (e) => {
    setInputedUser({ ...inputedUser, [e.target.name]: e.target.value });
  };

  //username and password validation variables---
  const [userValid, setUserValid] = useState(false);
  const [passValid, setPassValid] = useState(false);
  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");

  const loginCheck = async (event) => {
    event.preventDefault();

    //username validation check
    if (!inputedUser.UserName == "") {
      if (inputedUser.UserName.length >= 3) {
        setUserError("");
        setUserValid(true);
      } else {
        setUserError("Username minimum have 3 characters");
        setUserValid(false);
      }
    } else {
      setUserError("Plese fill this field");
      setUserValid(false);
    }
    //password validation check
    if (!inputedUser.UserPassword == "") {
      if (inputedUser.UserPassword.length >= 8) {
        setPassError("");
        setPassValid(true);
      } else {
        setPassError("Password minimum have 8 characters");
        setPassValid(false);
      }
    } else {
      setPassError("Plese fill this field");
      setPassValid(false);
    }

    //check user data to the backend

    if (userValid == true && passValid == true) {
      //-----Get user data from database-----

      const response = await axios.get(
        `http://localhost:3030/viewUser/${inputedUser.UserName}`
      );

      setTimeout(() => {
        if (response.data.userName == inputedUser.UserName) {
          if (response.data.userPassword == inputedUser.UserPassword) {
            window.localStorage.setItem(
              "Arts_College_User_Id",
              response.data.userName
            );
            window.localStorage.setItem(
              "Arts_College_User_Role",
              response.data.userRole
            );
            window.localStorage.setItem(
              "Arts_College_User_Email",
              response.data.userEmail
            );
            window.localStorage.setItem(
              "Arts_College_User_MobileNo",
              response.data.userMobileNo
            );
            navigate("/admin");
          } else {
            setPassError("Password is incorrect!!");
          }
        } else {
          setUserError("Username is wrong!");
        }
      }, 2000);
    }
  };

  // const getData = async (u) => {
  //   try {
  //     await axios
  //       .get(`http://localhost:3030/viewUser/${u}`)
  //       .then((response) => {
  //         console.log(response.data);
  //         console.log(inputedUser);
  //         setLoginUserData(response.data);
  //       })
  //       .catch((err) => console.error(err));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <Navbar
        expand="lg"
        className=" bg-body-tertiary"
        sticky="top"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link
              className=" m-1 align-items-center d-flex justify-content-center "
              to="/"
            >
              <img
                alt=""
                src="/img/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <span className=" text-warning fw-bold">Arts College</span>
            </Link>
          </Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-warning text-center mb-0">
              <Link
                className=" m-1 align-items-center d-flex justify-content-center "
                to=""
              >
                Home
              </Link>

              <Link
                className=" m-1 align-items-center d-flex justify-content-center "
                to="/course"
              >
                Course
              </Link>

              <Link
                className=" m-1 align-items-center d-flex justify-content-center "
                to="/department"
              >
                Department
              </Link>

              <Link
                className=" m-1 align-items-center d-flex justify-content-center "
                to="/gallery"
              >
                Gallery
              </Link>

              <Link
                className=" m-1 align-items-center d-flex justify-content-center "
                to="/about"
              >
                About
              </Link>

              <div className=" d-flex justify-content-center ">
                <Nav.Link>
                  <Button
                    onClick={handleShow}
                    className=" fw-bold "
                    variant="outline-warning"
                  >
                    Login
                  </Button>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      {/* Login form modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{ background: "#000000a8" }}
      >
        <Modal.Header className="bg-warning border-0 pb-0  text-center ">
          <h1 className="w-100">Welcome to Login</h1>
          <button
            type="button"
            className="btn-close mb-4 pb-4 "
            aria-label="Close"
          ></button>
        </Modal.Header>
        <Modal.Body className=" bg-warning rounded-bottom pt-1   ">
          <div className=" rounded-3" id="login-container">
            <Form onSubmit={loginCheck}>
              <div className="rounded-3">
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    name="UserName"
                    onChange={loginInput}
                    id="uName"
                  />
                </Form.Group>
                <div className=" text-danger text-start ">{userError}</div>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <div className="d-flex justify-content-between passwordControl border border-3 bg-light rounded-2 ">
                    <Form.Control
                      type={passType}
                      placeholder="Password"
                      className=" bg-transparent border-0 shadow-none"
                      name="UserPassword"
                      onChange={loginInput}
                      id="uPass"
                    />
                    <img
                      src="/img/eye.svg"
                      alt="eye"
                      className=" me-1 py-2"
                      width={20}
                      onClick={ChangePassVisible}
                    />
                  </div>
                </Form.Group>

                <div className=" text-danger text-start ">{passError}</div>
                <div className="text-center mt-3 ">
                  <Button type="submit">Login</Button>
                </div>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
