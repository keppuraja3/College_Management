import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import RegFormBg from "/img/logo.png";
import axios from "axios";
import "./AddUser.css";

function AddUser() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [isEyeShow, setIsEye] = useState(false);
  const [passType, setPassType] = useState("password");
  const [userData, setUserData] = useState({});

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

  const addUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    // navigate("/userManagement");
    // window.location.reload();

    axios
      .post("http://localhost:3030/addUser", userData)
      .then((response) => console.log(response.data))
      .catch((err) => console.error(err));

    setValidated(true);
  };

  return (
    <div id="register-container" className=" d-flex bg-warning p-3 pt-0 ">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className=" d-grid pt-0 justify-content-center p-3  ">
          <Row className="p-3 pt-0 d-flex justify-content-between">
            <Form.Group as={Col} md="6" xs="12" controlId="validationCustom01">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="userName"
                placeholder="Enter user name"
                onChange={addUserData}
                value={userData.userName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              className=" mt-md-0  mt-3 "
              xs="12"
              controlId="validationCustomUsername"
            >
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  name="userEmail"
                  placeholder="Enter email"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={addUserData}
                  value={userData.userEmail}
                />
                <Form.Control.Feedback type="invalid">
                  Please input a email address.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="p-3 d-flex justify-content-between">
            <Form.Group as={Col} md="6" xs="12" controlId="validationCustom03">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="number"
                name="userMobileNo"
                placeholder="Enter mobile no"
                onChange={addUserData}
                value={userData.userMobileNo}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid mobile.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              xs="12"
              className="mt-md-0 mt-3 "
              controlId="validationCustom02"
            >
              <Form.Label>Role</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="userRole"
                onChange={addUserData}
                value={userData.userRole}
              >
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="p-3 d-flex justify-content-between">
            <Form.Group as={Col} controlId="validationCustom05">
              <Form.Label>Password</Form.Label>
              <div className="d-flex justify-content-between passwordControl border border-3 bg-light rounded-2 ">
                <Form.Control
                  type={passType}
                  placeholder="Enter password"
                  name="userPassword"
                  className=" bg-transparent border-0 shadow-none"
                  onChange={addUserData}
                  value={userData.userPassword}
                  required
                />
                <img
                  src="/img/eye.svg"
                  alt="eye"
                  className=" me-1 py-2"
                  width={20}
                  onClick={ChangePassVisible}
                />
              </div>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Password.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </div>
        <div className="text-center">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default AddUser;
