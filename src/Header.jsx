import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "./Auth";
import Form from "react-bootstrap/Form";
import LoginBg from "/img/logo.png";
import "./assets/Css/Header.css";

function Header() {
  //create a navigation variable--
  const navigate = useNavigate();
  const location = useLocation();

  //Auth
  const auth = useAuth();

  //Login form model show and hide codes--
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUserError("");
    setPassError("");
    setPassType("password");
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
      event.target.src = "/img/eye.svg";
      event.target.width = "20";
      setIsEye(true);
      setPassType("text");
    } else {
      event.target.src = "/img/closed-eyes-dark.png";
      setIsEye(false);
      setPassType("password");
    }
  };

  // Password type changing variable--
  const [passType, setPassType] = useState("password");

  //Add username and password to LocalStorage---
  function setLocal(cname, cvalue) {
    localStorage.setItem(`"${cname}"`, `"${cvalue}"`);
  }

  // Get user data from backend and store into the variable--
  // const [loginUserData, setLoginUserData] = useState({});

  const loginInput = (e) => {
    setInputedUser({ ...inputedUser, [e.target.name]: e.target.value });
  };

  // Username nd password validation variables---
  const [userValid, setUserValid] = useState(false);
  const [passValid, setPassValid] = useState(false);

  // useEffect(() => {
  //   if (userValid == true && passValid == true) {
  //     axios
  //       .get(
  //         `http://localhost:3030/findUser/${inputedUser.UserName}/${inputedUser.userPassword}`
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         if (res.data.userName == inputedUser.UserName) {
  //           if (res.data.userPassword == inputedUser.UserPassword) {
  //             setLocal("Arts_College_User_Id", res.data.userName);
  //             setLocal("Arts_College_User_Role", res.data.userRole);
  //             setLocal("Arts_College_User_Email", res.data.userEmail);
  //             setLocal("Arts_College_User_MobileNo", res.data.userMobileNo);

  //             navigate("/admin");
  //           } else {
  //             setPassError("Password is incorrect!!");
  //           }
  //         } else {
  //           setUserError("Username is wrong!");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [userValid, passValid]);

  //Username and password error showing variables---
  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");

  const loginCheck = async (event) => {
    event.preventDefault();

    // Username validation check
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

    // Password validation check
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

    if (userValid == true && passValid == true) {
      axios
        .get(
          `http://localhost:3030/findUser/${inputedUser.UserName}/${inputedUser.UserPassword}`
        )
        .then((res) => {
          //Auth
          auth.login(inputedUser.UserName);
          if (res.data.body.userName == inputedUser.UserName) {
            setLocal("Arts_College_User_Id", res.data.body.userName);
            setLocal("Arts_College_User_Role", res.data.body.userRole);
            setLocal("Arts_College_User_Email", res.data.body.userEmail);
            setLocal("Arts_College_User_MobileNo", res.data.body.userMobileNo);

            if (res.data.body.userRole == "admin") {
              navigate("/admin");
            } else if (res.data.body.userRole == "staff") {
              navigate("/staff");
              handleClose();
            } else {
              navigate("/student");
              handleClose();
            }
          } else {
            setPassError("Username or Password is wrong!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
                className={`m-0 align-items-center p-2 px-3 rounded-3 d-flex justify-content-center ${
                  location.pathname === "/" ? "navLinkActive" : ""
                }`}
                to=""
              >
                Home
              </Link>

              <Link
                className={`m-0 align-items-center p-2 px-3 rounded-3 d-flex justify-content-center ${
                  location.pathname === "/course" ? "navLinkActive" : ""
                }`}
                to="/course"
              >
                Course
              </Link>

              <Link
                className={`m-0 align-items-center p-2 px-3 rounded-3 d-flex justify-content-center ${
                  location.pathname === "/department" ? "navLinkActive" : ""
                }`}
                to="/department"
              >
                Department
              </Link>

              <Link
                className={`m-0 align-items-center p-2 px-3 rounded-3 d-flex justify-content-center ${
                  location.pathname === "/gallery" ? "navLinkActive" : ""
                }`}
                to="/gallery"
              >
                Gallery
              </Link>

              <Link
                className={`m-0 align-items-center p-2 px-3 rounded-3 d-flex justify-content-center me-2 ${
                  location.pathname === "/about" ? "navLinkActive" : ""
                }`}
                to="/about"
              >
                About
              </Link>

              <div className="d-flex justify-content-center py-1 ">
                <Button
                  onClick={handleShow}
                  className=" fw-bold py-0"
                  variant="outline-warning"
                >
                  Login
                </Button>
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
            onClick={handleClose}
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
                      src="/img/closed-eyes-dark.png"
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
