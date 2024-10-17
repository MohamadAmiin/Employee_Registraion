import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Empolyee = () => {
  const [empolyee, setEmpolyee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/empolyee/empolyee/")
      .then((result) => {
        console.log(result);
        setEmpolyee(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:4001/empolyee/delete/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  // const handleUpdate = (id) => {
  //   axios.put("http://localhost:4001/empolyee/update/" + id).then((result) => {
  //     console.log(result);
  //     window.location.reload();
  //   });

  // };

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <Link
              to="/register"
              className="btn btn-success d-flex m-2 w-100 justify-content-center align-items-center"
            >
              Add +
            </Link>

            <div className="table-responsive">
              <Table striped bordered hover className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {empolyee.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.name}</td>
                      <td>{emp.email}</td>
                      <td>{emp.phoneNumber}</td>
                      <td>{emp.address}</td>
                      <td>{emp.city}</td>
                      <td>{emp.state}</td>
                      <td>{emp.country}</td>
                      <td>
                        <div className="d-flex flex-column flex-md-row">
                          <Button
                            variant="warning"
                            className="me-md-2 mb-2 mb-md-0"
                          >
                            Update
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(emp._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Empolyee;
