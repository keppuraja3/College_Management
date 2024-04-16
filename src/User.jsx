import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

function User(props) {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${id}`).then((res) => {
      setUserData(res.data);
    });
  }, []);
  return (
    <>
      <h1>User Details {id}</h1>

      <div key={userData.id}>
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={userData.image} />
          <Card.Body>
            <Card.Title>{userData.firstName}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Order</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default User;
