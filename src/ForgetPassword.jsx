import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function ForgetPassword() {
  document.title = "Foget Password";

  return (
    <>
      <Form className=" m-5 d-flex justify-content-center">
        <div className="p-5 rounded-3 bg-warning ">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <div className="text-center mt-3 ">
            <Button type="submit">Verify</Button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default ForgetPassword;
