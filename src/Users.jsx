import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";

function Users() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      console.log(res.data.users);
      setUserData(res.data.users);
    });
  }, []);
  const submitHandle = (id) => {
    navigate(`/users/user/${id}`);
  };

  return (
    <>
      <h1>Users List</h1>
      <Container>
        <Row className="gy-3">
          {userData.map((user) => (
            <Col lg={4} md={6} xs={12} key={user.id}>
              <Card>
                <Card.Img variant="top" src={user.image} />
                <Card.Body>
                  <Card.Title>{user.firstName}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    onClick={() => submitHandle(user.id)}
                    variant="primary"
                  >
                    Order
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Users;
