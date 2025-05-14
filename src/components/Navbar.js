import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import EmployeeForm from './EmployeeForm'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../Redux/Actions/LoginActions';

function AppNavbar({ admin, showEmployees, onListEmployees, onBackToAdmin }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3">
        <Container fluid>
          <Navbar.Brand>{admin?.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="align-items-center gap-3">
              {showEmployees && (
                <>
                  <Button variant="success" onClick={() => setShowModal(true)}>
                    Add Employee
                  </Button>
                  <Button variant="secondary" onClick={onBackToAdmin}>
                    Back to Admin
                  </Button>
                </>
              )}
              {!showEmployees && (
                <Button variant="primary" onClick={onListEmployees}>
                  List Employees
                </Button>
              )}
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmployeeForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AppNavbar;
