import React, { useEffect, useState } from "react";
import { FaUserGraduate, FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Register from "./Register";
import Badge from "react-bootstrap/Badge";
import { Link, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import RegFormBg from "/img/logo.png";

function Students() {
  //Page Title---
  document.title = "Students";

  //Register form show and hide control variable----
  const [show, setShow] = useState(false);

  //Open register form---
  const handleShow = () => {
    setShow(true);
  };

  //Close register form--
  const handleClose = () => {
    setShow(false);
    setStuNameError("");
    setEmailError("");
    setMobileNoError("");
    setCourseError("");
    setDepartmentError("");
    setStuData({});
    setPassType("password");
  };

  const navigate = useNavigate();

  //password type changing variable--
  const [isEyeShow, setIsEye] = useState(false);
  const [passType, setPassType] = useState("password");

  //User data storing variables--
  const [stuData, setStuData] = useState({
    stuName: "",
    stuEmail: "",
    stuMobileNo: "",
    stuCourse: "",
    stuDepartment: "",
  });

  //Password visibility eye changeing content----
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

  //Add user inputed data to the variable-----
  const addstuData = (e) => {
    setStuData({ ...stuData, [e.target.name]: e.target.value });
  };

  //user input validation checking variables---
  const [nameValid, setStuNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [mobilNoValid, setMobileNoValid] = useState(false);
  const [courseValid, setCourseValid] = useState(false);
  const [departmentValid, setDepartmentValid] = useState(false);

  //Error showing variables------
  const [userError, setStuNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobilNoError, setMobileNoError] = useState("");
  const [courseError, setCourseError] = useState("");
  const [departmentError, setDepartmentError] = useState("");

  //Register form validation and get data from backend---
  const handleSubmit = async (event) => {
    event.preventDefault();

    setStuNameValid(false);
    setEmailValid(false);
    setMobileNoValid(false);
    setCourseValid(false);
    setDepartmentValid(false);

    //Regex for email----
    const emailPattern = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;

    //Username validation------
    if (!stuData.stuName == "") {
      if (stuData.stuName.length >= 3) {
        setStuNameValid(true);
        setStuNameError("");
      } else {
        setStuNameValid(false);
        setStuNameError("stuName minimum have 3 characters");
      }
    } else {
      setStuNameValid(false);
      setStuNameError("Please enter username");
    }

    //Email validation------
    if (!stuData.stuEmail == "") {
      const isEmail = stuData.stuEmail.match(emailPattern);
      if (isEmail) {
        setEmailError("");
        setEmailValid(true);
      } else {
        setEmailValid(false);
        setEmailError("Please enter valid email");
      }
    } else {
      setEmailValid(false);
      setEmailError("Please enter email");
    }

    //Mobile No validation-------
    if (!stuData.stuMobileNo == "") {
      if (stuData.stuMobileNo.length == 10) {
        setMobileNoValid(true);
        setMobileNoError("");
      } else {
        setMobileNoValid(false);
        setMobileNoError("Mobile no only in 10 digits");
      }
    } else {
      setMobileNoValid(false);
      setMobileNoError("Please Enter Mobile No");
    }

    //Department validation-------
    if (!stuData.stuDepartment == "") {
      setDepartmentValid(true);
      setDepartmentError("");
    } else {
      setDepartmentValid(false);
      setDepartmentError("Please select the Department");
    }

    //Course validation-------
    if (!stuData.stuCourse == "") {
      setCourseValid(true);
      setCourseError("");
    } else {
      setCourseValid(false);
      setCourseError("Please select the Course");
    }

    //Post data to the backend after the validation checking---
    if (
      nameValid == true &&
      departmentValid == true &&
      emailValid == true &&
      courseValid == true &&
      mobilNoValid == true
    ) {
      if (stuData.id) {
        const result = await axios
          .post(`http://localhost:3030/updateUserById/${stuData.id}`, stuData)
          .then((response) => {
            return response.data;
          })
          .catch((err) => {
            return err;
          });
      } else {
        const result = await axios
          .post("http://localhost:3030/addStudent", stuData)
          .then((response) => {
            return response.data;
          })
          .catch((err) => {
            return err;
          });
      }

      getData();
      handleClose();
      setStuNameValid(false);
      setEmailValid(false);
      setMobileNoValid(false);
      setCourseValid(false);
      setDepartmentValid(false);
    }
  };

  //Edit stuData function-------
  const editstuData = (user) => {
    setStuData(user);
    handleShow();
  };

  //delete stuData function--------
  const deletestuData = async (id) => {
    const isDelete = confirm("Are you sure. You want to delete this data? ");
    if (isDelete) {
      const deleteOutput = await axios
        .get(`http://localhost:3030/deleteUserById/${id}`)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      getData();
    }
  };

  //Create variable for store users data------
  const [studentsData, setStudentsData] = useState([]);

  //Create variable for store filtered user data-----
  const [filterStudets, setFilterStudents] = useState([]);

  //Get users data from backend------
  const getData = async () => {
    await axios
      .get("http://localhost:3030/viewStudents")
      .then((response) => {
        setStudentsData(response.data);
        setFilterStudents(response.data);
      })
      .catch((err) => console.error(err));
  };

  //Load users data to the table----
  useEffect(() => {
    getData();
  }, []);

  //Search user details-----
  const searchUser = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredUsers = studentsData.filter((user) => {
      if (
        user.userName.toLowerCase().includes(searchText) ||
        user.stuCourse.toLowerCase().includes(searchText)
      ) {
        return user;
      }
    });
    setFilterStudents(filteredUsers);
  };

  return (
    <>
      <Container fliud className="ps-3 pe-1 ">
        <Row className="g-3 mb-3">
          <Col md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-warning text-center px-2 py-3 text-black fw-bold fs-5 h-100 ">
              <Row className=" align-items-center h-100">
                <Col lg={8} className="px-0">
                  <div>Total Students</div>
                  <h3 className=" text-danger">15080</h3>
                </Col>
                <Col lg={4}>
                  <img
                    src="/img/graduation-cap.svg"
                    alt="user"
                    style={{ maxWidth: "50px" }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-success text-center px-2 py-3 text-dark fw-bold fs-5 h-100 ">
              <Row className=" align-items-center h-100">
                <Col lg={8} className="px-0">
                  <div>Today Attendance</div>
                  <h3 className=" text-light ">15080</h3>
                </Col>
                <Col lg={4}>
                  <img
                    src="/img/attendance-light.png"
                    alt="user"
                    style={{ maxWidth: "50px" }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12} className="p-1">
            <div className=" rounded-3 bg-danger text-center px-2 py-3 text-black fw-bold fs-5 h-100 ">
              <Row className=" align-items-center h-100">
                <Col lg={8} className="px-0">
                  <div>Students Reports</div>
                  <h3 className=" text-light">173</h3>
                </Col>
                <Col lg={4}>
                  <img
                    src="/img/report-light.png"
                    alt="user"
                    style={{ maxWidth: "50px" }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <div className=" container-fluid">
        <h3 className=" text-center text-uppercase ">Student Table</h3>

        <div className=" d-flex  justify-content-between  ">
          {/* add user button */}
          <div className="p-2 bg-light rounded-2 user-select-none searchBox mb-2 ">
            <input
              type="text"
              className=" border-0 bg-transparent "
              placeholder="Search"
              onChange={searchUser}
              style={{ maxWidth: "150px" }}
            />
            <img src="/img/search.png" width={20} alt="" />
          </div>
          <Button
            onClick={handleShow}
            className=" fw-bold mb-2 "
            variant="success"
          >
            Add&nbsp;+
          </Button>
          {/* User Add Form Modal Start*/}
          <Modal
            show={show}
            onHide={handleClose}
            centered
            style={{ background: "#000000a8" }}
          >
            <Modal.Header
              closeButton
              className="bg-warning border-0 pt-0 pt-3"
            ></Modal.Header>
            <Modal.Body className=" bg-warning pt-0 rounded-bottom">
              <h1 style={{ textAlign: "center" }}>
                {stuData.id ? "Update Student" : "Add Student"}
              </h1>
              <div
                id="register-container"
                className=" d-flex bg-warning px-0 pt-0 "
              >
                {/* Form for add and update user data */}
                <Form onSubmit={handleSubmit}>
                  <div className=" d-grid pt-0 justify-content-center p-3  ">
                    <Row className="p-3 pt-0 d-flex justify-content-between">
                      <Form.Group as={Col} md="6" xs="12">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="stuName"
                          placeholder="Enter user name"
                          onChange={addstuData}
                          value={stuData.stuName}
                        />
                        <div className=" text-danger text-start ">
                          {userError}
                        </div>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        className=" mt-md-0  mt-3 "
                        xs="12"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="text"
                          name="stuEmail"
                          placeholder="Enter email"
                          aria-describedby="inputGroupPrepend"
                          onChange={addstuData}
                          value={stuData.stuEmail}
                        />
                        <div className=" text-danger text-start ">
                          {emailError}
                        </div>
                      </Form.Group>
                      <Form.Group as={Col} md="6" xs="12">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control
                          type="number"
                          name="stuMobileNo"
                          placeholder="Enter mobile no"
                          onChange={addstuData}
                          value={stuData.stuMobileNo}
                        />
                        <div className=" text-danger text-start ">
                          {mobilNoError}
                        </div>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        xs="12"
                        className="mt-md-0 mt-3 "
                      >
                        <Form.Label>Department</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="stuDepartment"
                          onChange={addstuData}
                          value={stuData.stuDepartment}
                        >
                          <option value="none">Select</option>
                          <option value="commerce">Commerce</option>
                          <option value="maths">Maths</option>
                          <option value="economics">Economics</option>
                          <option value="physics">Physics</option>
                        </Form.Select>
                        <div className=" text-danger text-start ">
                          {departmentError}
                        </div>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        xs="12"
                        className="mt-md-0 mt-3 "
                      >
                        <Form.Label>Course</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="stuCourse"
                          onChange={addstuData}
                          value={stuData.stuCourse}
                        >
                          <option value="none">Select</option>
                          <option value="B.COM">B.COM</option>
                          <option value="B.A">B.A</option>
                          <option value="M.COM">M.COM</option>
                          <option value="M.A">M.A</option>
                        </Form.Select>
                        <div className=" text-danger text-start ">
                          {courseError}
                        </div>
                      </Form.Group>
                    </Row>
                  </div>
                  <div className="text-center">
                    <Button type="submit">
                      {stuData.id ? "Update" : "Add"}
                    </Button>
                  </div>
                </Form>
              </div>
            </Modal.Body>
          </Modal>
          {/* User Add Form Modal End*/}
        </div>

        {/* User list table */}
        <Table
          hover
          responsive
          className=" text-center rounded-3  fs-6 shadow-lg"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Reg No</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterStudets.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>
                  <Badge bg="success" className=" text-uppercase">
                    {user.stuCourse}
                  </Badge>
                </td>
                <td>{user.stuMobileNo}</td>
                <td>{user.userPassword}</td>
                <td className=" d-flex justify-content-center align-items-center ">
                  <Button
                    variant="info"
                    className="mb-2 mb-sm-0  me-1 d-flex justify-content-center align-items-center"
                    onClick={() => viewstuData(user)}
                  >
                    <FaEye />
                    &nbsp;View
                  </Button>
                  <Button
                    variant="primary"
                    className="mb-2 mb-sm-0  me-1 d-flex justify-content-center align-items-center"
                    onClick={() => editstuData(user)}
                  >
                    <MdEdit />
                    &nbsp;Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="d-flex justify-content-center align-items-center"
                    onClick={() => {
                      deletestuData(user.id);
                    }}
                  >
                    <MdDelete />
                    &nbsp;Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {filterStudets.length > 0 ? (
          <h1></h1>
        ) : (
          <h1 className=" text-secondary text-center pt-3">No data found</h1>
        )}
      </div>
    </>
  );
}

export default Students;
