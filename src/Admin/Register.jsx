import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import RegFormBg from "/img/logo.png";

function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div id="register-container" className=" d-flex bg-warning p-3 ">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className=" d-grid  justify-content-center p-3  ">
          <Row className="p-3 d-flex justify-content-between">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>User Name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="p-3 d-flex justify-content-between">
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please input a email address.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control type="number" placeholder="Mobile No" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid mobile.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="p-3 d-flex justify-content-between">
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
        </div>
        <div className="text-center">
          <Button type="submit">Register</Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
