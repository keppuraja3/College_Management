import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import RegFormBg from "/img/logo.png";

function UserManagement() {
  //Page Title---
  document.title = "User Management";

  //Open register form---
  const handleShow = () => {
    setShow(true);
  };

  //Close register form--
  const handleClose = () => {
    setShow(false);
    setUserError("");
    setEmailError("");
    setMobileNoError("");
    setRoleError("");
    setPassError("");
    setUserData({});
    setPassType("password");
  };

  const navigate = useNavigate();

  //password type changing variable--
  const [isEyeShow, setIsEye] = useState(false);
  const [passType, setPassType] = useState("password");

  //User data storing variables--
  const [userData, setUserData] = useState({
    userEmail: "",
    userMobileNo: "",
    userName: "",
    userPassword: "",
    userRole: "",
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
  const addUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  //user input validation checking variables---
  const [userValid, setUserValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [mobileNoValid, setMobileNoValid] = useState(false);
  const [roleValid, setRoleValid] = useState(false);
  const [passValid, setPassValid] = useState(false);

  //Error showing variables------
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobilNoError, setMobileNoError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [passError, setPassError] = useState("");

  useEffect(() => {
    //Post data to the backend after the validation checking---
    (async () => {
      if (
        userValid == true &&
        passValid == true &&
        emailValid == true &&
        roleValid == true &&
        mobileNoValid == true
      ) {
        if (userData.id) {
          await axios
            .post(
              `http://localhost:3030/updateUserById/${userData.id}`,
              userData
            )
            .then((response) => {
              return response.data;
            })
            .catch((err) => {
              return err;
            });

          getData();
          handleClose();
          setUserValid(false);
          setEmailValid(false);
          setMobileNoValid(false);
          setRoleValid(false);
          setPassValid(false);
        } else {
          // const isUserExist = usersData.filter((user) => {
          //   if (user.userName == userData.userName) {
          //     return true;
          //   }
          // });

          // console.log(isUserExist);
          if (isUserExist) {
            setUserError("Username is already in use.");
          } else {
            await axios
              .post("http://localhost:3030/addUser", userData)
              .then((response) => {
                return response.data;
              })
              .catch((err) => {
                return err;
              });

            getData();
            handleClose();
            setUserValid(false);
            setEmailValid(false);
            setMobileNoValid(false);
            setRoleValid(false);
            setPassValid(false);
          }
        }
      }
    })();
  }, [userValid, passValid, emailValid, roleValid, mobileNoValid]);

  //Register form validation and get data from backend---
  const handleSubmit = async (event) => {
    event.preventDefault();

    //Regex for password and email----
    const passwordPattern =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailPattern = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;

    //Username validation------
    if (!userData.userName == "") {
      if (userData.userName.length >= 3) {
        setUserValid(true);
        setUserError("");
      } else {
        setUserValid(false);
        setUserError("Username minimum have 3 characters");
      }
    } else {
      setUserValid(false);
      setUserError("Please enter username");
    }

    //Email validation------
    if (!userData.userEmail == "") {
      const isEmail = userData.userEmail.match(emailPattern);
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
    if (!userData.userMobileNo == "") {
      if (userData.userMobileNo.length == 10) {
        setMobileNoValid(true);
        setMobileNoError("");
      } else {
        setMobileNoValid(false);
        setMobileNoError("Mobile no only in 10 digits");
      }
    } else {
      setMobileNoValid(false);
      setMobileNoError("Please enter mobile no");
    }

    //Role validation-------
    if (!userData.userRole == "") {
      setRoleValid(true);
      setRoleError("");
    } else {
      setRoleValid(false);
      setRoleError("Please select the role");
    }

    //Password validation------
    if (!userData.userPassword == "") {
      const isPassValid = userData.userPassword.match(passwordPattern);

      if (userData.userPassword.length >= 8) {
        if (isPassValid) {
          setPassValid(true);
          setPassError("");
        } else {
          setPassValid(false);
          setPassError(
            "Password must have one number, one capital letter, one small letter and one symbol"
          );
        }
      } else {
        setPassValid(false);
        setPassError("Password must have 8 digits");
      }
    } else {
      setPassValid(false);
      setPassError("Please enter the password");
    }
  };

  //Edit userData function-------
  const editUserData = (user) => {
    setUserData(user);
    handleShow();
  };

  //delete userData function--------
  const deleteUserData = async (id) => {
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
  const [usersData, setUsersData] = useState([]);

  //Create variable for store filtered user data-----
  const [filterUsers, setFilterUsers] = useState([]);

  //Register form show and hide control variable----
  const [show, setShow] = useState(false);

  //Get users data from backend------
  const getData = async () => {
    await axios
      .get("http://localhost:3030/viewUsers")
      .then((response) => {
        setUsersData(response.data);
        setFilterUsers(response.data);
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
    const filteredUsers = usersData.filter((user) => {
      if (
        user.userName.toLowerCase().includes(searchText) ||
        user.userRole.toLowerCase().includes(searchText)
      ) {
        return user;
      }
    });
    setFilterUsers(filteredUsers);
  };

  return (
    <>
      <div className=" container-fluid">
        <h3 className=" text-center text-uppercase ">User Table</h3>

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
                {userData.id ? "Update user" : "Add user"}
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
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="userName"
                          placeholder="Enter user name"
                          onChange={addUserData}
                          value={userData.userName}
                          autoFocus
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
                          name="userEmail"
                          placeholder="Enter email"
                          aria-describedby="inputGroupPrepend"
                          onChange={addUserData}
                          value={userData.userEmail}
                        />
                        <div className=" text-danger text-start ">
                          {emailError}
                        </div>
                      </Form.Group>
                      <Form.Group as={Col} md="6" xs="12">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control
                          type="number"
                          name="userMobileNo"
                          placeholder="Enter mobile no"
                          onChange={addUserData}
                          value={userData.userMobileNo}
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
                        <Form.Label>Role</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="userRole"
                          onChange={addUserData}
                          value={userData.userRole}
                        >
                          <option value="none">Select</option>
                          <option value="staff">Staff</option>
                          <option value="admin">Admin</option>
                          <option value="student">Student</option>
                        </Form.Select>
                        <div className=" text-danger text-start ">
                          {roleError}
                        </div>
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <div className="d-flex justify-content-between passwordControl border border-3 bg-light rounded-2 ">
                          <Form.Control
                            type={passType}
                            placeholder="Enter password"
                            name="userPassword"
                            className=" bg-transparent border-0 shadow-none"
                            onChange={addUserData}
                            value={userData.userPassword}
                          />
                          <img
                            src="/img/eye.svg"
                            alt="eye"
                            className=" me-1 py-2"
                            width={20}
                            onClick={ChangePassVisible}
                          />
                        </div>
                        <div className=" text-danger text-start ">
                          {passError}
                        </div>
                      </Form.Group>
                    </Row>
                  </div>
                  <div className="text-center">
                    <Button type="submit">
                      {userData.id ? "Update" : "Add"}
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
              <th>Role</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>
                  <Badge bg="success" className=" text-uppercase">
                    {user.userRole}
                  </Badge>
                </td>
                <td>{user.userMobileNo}</td>
                <td>{user.userPassword}</td>
                <td className=" d-flex justify-content-center align-items-center ">
                  <Button
                    variant="primary"
                    className="mb-2 mb-sm-0  me-1 d-flex justify-content-center align-items-center"
                    onClick={() => editUserData(user)}
                  >
                    <MdEdit />
                    &nbsp;Edit
                  </Button>
                  <Button
                    variant="danger"
                    className=" d-flex justify-content-center align-items-center "
                    onClick={() => {
                      deleteUserData(user.id);
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
        {filterUsers.length > 0 ? (
          <h1></h1>
        ) : (
          <h1 className=" text-secondary text-center pt-3">No data found</h1>
        )}
      </div>
    </>
  );
}

export default UserManagement;
