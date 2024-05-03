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

function Events() {
  //Page tittle
  document.title = "Events";

  //Open register form---
  const handleShow = () => {
    setShow(true);
  };

  //Close register form--
  const handleClose = () => {
    setShow(false);
    setDateError("");
    setDescriptionError("");
    setTypeError("");
    setDepartmentError("");
    setEventData({});
  };

  const navigate = useNavigate();

  //User data storing variables--
  const [eventData, setEventData] = useState({
    date: "",
    type: "",
    description: "",
    department: "",
  });

  //Add event inputed data to the variable-----
  const addEventData = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  //user input validation checking variables---
  const [dateValid, setDateValid] = useState(false);
  const [descriptionValid, setDescriptionValid] = useState(false);
  const [typeValid, setTypeValid] = useState(false);
  const [deaprtmentValid, setDepartmentValid] = useState(false);

  //Error showing variables------
  const [dateError, setDateError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [departmentError, setDepartmentError] = useState("");
  const [typeError, setTypeError] = useState("");

  useEffect(() => {
    //Post data to the backend after the validation checking---
    (async () => {
      if (
        dateValid == true &&
        deaprtmentValid == true &&
        typeValid == true &&
        descriptionValid == true
      ) {
        if (eventData.id) {
          await axios
            .post(
              `http://localhost:3030/events/updateUserById/${eventData.id}`,
              eventData
            )
            .then((response) => {
              return response.data;
            })
            .catch((err) => {
              return err;
            });

          getData();
          handleClose();
          setDateValid(false);
          setDescriptionValid(false);
          setTypeValid(false);
          setDepartmentValid(false);
        } else {
          await axios
            .post("http://localhost:3030/events/viewEvents", eventData)
            .then((response) => {
              return response.data;
            })
            .catch((err) => {
              return err;
            });

          getData();
          handleClose();
          setDateValid(false);
          setDescriptionValid(false);
          setTypeValid(false);
          setDepartmentValid(false);
        }
      }
    })();
  }, [dateValid, deaprtmentValid, typeValid, descriptionValid]);

  //Register form validation and get data from backend---
  const handleSubmit = async (event) => {
    event.preventDefault();

    //Date validation------
    if (!eventData.date == "") {
      setDateValid(true);
      setDateError("");
    } else {
      setDateValid(false);
      setDateError("Please enter date");
    }

    //Description validation-------
    if (!eventData.description == "") {
      if (eventData.description.length >= 15) {
        setDescriptionValid(true);
        setDescriptionError("");
      } else {
        setDescriptionValid(false);
        setDescriptionError("Description is very short");
      }
    } else {
      setDescriptionValid(false);
      setDescriptionError("Please enter description");
    }

    //Type validation-------
    if (!eventData.type == "") {
      setTypeValid(true);
      setTypeError("");
    } else {
      setTypeValid(false);
      setTypeError("Please select the role");
    }

    //Department validation------
    if (!eventData.department == "") {
      setDepartmentValid(true);
      setDepartmentError("");
    } else {
      setDepartmentValid(false);
      setDepartmentError("Please select the department");
    }
  };

  //Edit eventData function-------
  const editEventData = (user) => {
    setEventData(user);
    handleShow();
  };

  //delete eventData function--------
  const deleteEventData = async (id) => {
    const isDelete = confirm("Are you sure. You want to delete this Event? ");
    if (isDelete) {
      const deleteOutput = await axios
        .get(`http://localhost:3030/events/deleteEventById/${id}`)
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
  const [eventsData, setEventsData] = useState([]);

  //Create variable for store filtered user data-----
  const [filterEvents, setFilterEvents] = useState([]);

  //Register form show and hide control variable----
  const [show, setShow] = useState(false);

  //Get users data from backend------
  const getData = async () => {
    await axios
      .get("http://localhost:3030/events/viewEvents")
      .then((response) => {
        setEventsData(response.data);
        setFilterEvents(response.data);
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
    const filteredEvents = eventsData.filter((event) => {
      if (
        event.userName.toLowerCase().includes(searchText) ||
        event.type.toLowerCase().includes(searchText)
      ) {
        return event;
      }
    });
    setFilterEvents(filteredEvents);
  };

  return (
    <>
      <div className=" container-fluid">
        <h3 className=" text-center text-uppercase ">Events Table</h3>

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
                {eventData.id ? "Update event" : "Add event"}
              </h1>
              <div
                id="register-container"
                className=" d-flex bg-warning px-0 pt-0 "
              >
                {/* Form for add and update user data */}
                <Form onSubmit={handleSubmit}>
                  <div className=" d-grid pt-0 justify-content-center p-3  ">
                    <Row className="p-3 pt-0 d-flex justify-content-between">
                      <Form.Group className="mt-1" as={Col} md="6" xs="12">
                        <Form.Label>Department</Form.Label>
                        <Form.Select
                          name="department"
                          aria-label="Default select"
                          onChange={addEventData}
                          value={eventData.department}
                        >
                          <option value="none">Select</option>
                          <option value="commerce">Commerce</option>
                          <option value="maths">Maths</option>
                          <option value="economics">Economics</option>
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
                        <Form.Label>Type</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="type"
                          onChange={addEventData}
                          value={eventData.type}
                        >
                          <option value="none">Select</option>
                          <option value="result">Result</option>
                          <option value="event">Event</option>
                          <option value="announcement">Announcement</option>
                        </Form.Select>
                        <div className=" text-danger text-start ">
                          {typeError}
                        </div>
                      </Form.Group>

                      <Form.Group className="mt-1 mb-1" as={Col} xs="12">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          onChange={addEventData}
                          value={eventData.date}
                        />
                        <div className=" text-danger text-start ">
                          {dateError}
                        </div>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="12"
                        className=" mt-md-0 mt-3 "
                        xs="12"
                      >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="description"
                          placeholder="Enter Description"
                          onChange={addEventData}
                          value={eventData.description}
                        />
                        <div className=" text-danger text-start ">
                          {descriptionError}
                        </div>
                      </Form.Group>
                    </Row>
                  </div>
                  <div className="text-center">
                    <Button type="submit">
                      {eventData.id ? "Update" : "Add"}
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
              <th>Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.date}</td>
                <td>{event.description}</td>
                <td>
                  <Badge bg="success" className=" text-uppercase">
                    {event.type}
                  </Badge>
                </td>
                <td>{event.department}</td>
                <td className=" d-flex justify-content-center align-items-center ">
                  <Button
                    variant="primary"
                    className="mb-2 mb-sm-0  me-1 d-flex justify-content-center align-items-center"
                    onClick={() => editEventData(event)}
                  >
                    <MdEdit />
                    &nbsp;Edit
                  </Button>
                  <Button
                    variant="danger"
                    className=" d-flex justify-content-center align-items-center "
                    onClick={() => {
                      deleteEventData(event.id);
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
        {filterEvents.length > 0 ? (
          <h1></h1>
        ) : (
          <h1 className=" text-secondary text-center pt-3">No data found</h1>
        )}
      </div>
    </>
  );
}

export default Events;
