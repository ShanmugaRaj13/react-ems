import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { logoutUser } from '../Redux/Actions/LoginActions';
import { useNavigate } from 'react-router-dom';

function Employee() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localUser = JSON.parse(localStorage.getItem('user'));
  const employeeData = useSelector((state) => state.employees.employees);

  const employee = employeeData.find(emp => emp.email === localUser?.email);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  if (!employee) {
    return (
      <Container className="text-center mt-5">
        <h4>Employee Not Found</h4>
        <Button variant="secondary" onClick={handleLogout}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="shadow">
        <Card.Header as="h4">Employee Dashboard</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col md={4}><strong>ID:</strong> {employee.id}</Col>
            <Col md={4}><strong>Name:</strong> {employee.name}</Col>
            <Col md={4}><strong>Email:</strong> {employee.email}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><strong>Contact:</strong> {employee.contact}</Col>
            <Col md={4}><strong>Address:</strong> {employee.address}</Col>
            <Col md={4}><strong>Department:</strong> {employee.department}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><strong>Gender:</strong> {employee.gender}</Col>
            <Col md={4}><strong>Age:</strong> {employee.age}</Col>
            <Col md={4}><strong>Salary:</strong> ₹{employee.salary}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}><strong>Joining Date:</strong> {employee.joiningDate}</Col>
            <Col md={4}><strong>Status:</strong> {employee.status}</Col>
            <Col md={4}><strong>Role:</strong> {employee.role}</Col>
          </Row>
        </Card.Body>
      </Card>
      <div className="text-end mt-3">
        <Button variant="danger" onClick={handleLogout}>Logout</Button>
      </div>
    </Container>
  );
}

export default Employee;
