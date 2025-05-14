import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import AppNavbar from './Navbar';
import EmployeeTable from './EmployeeTable';
import { logoutUser } from '../Redux/Actions/LoginActions';
import { useNavigate } from 'react-router-dom';
import { FetchEmployee } from '../Redux/Actions/EmployeeAction';

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showEmployees, setShowEmployees] = useState(false);
  const localUser = JSON.parse(localStorage.getItem('user'));
  const employeeData = useSelector((state) => state.employees.employees);

  const admin = employeeData.find(emp => emp.email === localUser?.email);
  
  const handleLogout = () => {
      dispatch(logoutUser());
      navigate("/");
    };

useEffect(()=>{
    dispatch(FetchEmployee());
},[dispatch]);

  return (
    <>
      {!admin ? (
        <>
        <p className='text-center mt-5'>Admin does Not Exists</p>
        <div className="d-flex justify-content-center">
            <Button className='text-center' variant="secondary" onClick={handleLogout}>Go Back</Button>
        </div>
        </>
      ) : (
        <>
          <AppNavbar
            admin={admin}
            showEmployees={showEmployees}
            onBackToAdmin={() => setShowEmployees(false)}
            onListEmployees={() => setShowEmployees(true)}
          />
          <div className="mt-4">
            {!showEmployees && admin && (
              <Card className="shadow mb-4">
                <Card.Header as="h5">Admin Profile Details</Card.Header>
                <Card.Body>
                  <Row className="mb-3">
                    <Col md={4}><strong>ID:</strong> {admin.id}</Col>
                    <Col md={4}><strong>Name:</strong> {admin.name}</Col>
                    <Col md={4}><strong>Email:</strong> {admin.email}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Contact:</strong> {admin.contact}</Col>
                    <Col md={4}><strong>Address:</strong> {admin.address}</Col>
                    <Col md={4}><strong>Department:</strong> {admin.department}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Gender:</strong> {admin.gender}</Col>
                    <Col md={4}><strong>Age:</strong> {admin.age}</Col>
                    <Col md={4}><strong>Salary:</strong> ₹{admin.salary}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Joining Date:</strong> {admin.joiningDate}</Col>
                    <Col md={4}><strong>Status:</strong> {admin.status}</Col>
                    <Col md={4}><strong>Role:</strong> {admin.role}</Col>
                  </Row>
                </Card.Body>
              </Card>
            )}

            {showEmployees && (
              <EmployeeTable />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Admin;
