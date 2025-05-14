import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { ButtonGroup, Table, Button, Form } from 'react-bootstrap';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteEmployee, FetchEmployee, UpdateEmployee } from '../Redux/Actions/EmployeeAction';

function EmployeeTable() {
  const [editId, setEditId] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const employeeData = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchEmployee());
  }, [dispatch]);

  const handleEdit = (employee) => {
    setEditId(employee.id);
    setUpdatedData({ ...employee });
  };

  const handleCancel = () => {
    setEditId(null);
    setUpdatedData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (id) => {
    console.log(updatedData);
    
    dispatch(UpdateEmployee(id, updatedData));
    handleCancel();
  };

  return (
    <div className='Employeetable'>
      <div className='table-responsive px-1'>
        <Table responsive striped bordered hover variant='sm' className='text-center mb-4'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Department</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Joining Date</th>
              <th>Status</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((emp) =>
              editId !== emp.id ? (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.contact}</td>
                  <td>{emp.address}</td>
                  <td>{emp.department}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.age}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.joiningDate}</td>
                  <td>{emp.status}</td>
                  <td>{emp.role}</td>
                  <td>
                    <ButtonGroup>
                      <Button variant='success' onClick={() => handleEdit(emp)}>
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <Button variant='danger' onClick={() => dispatch(DeleteEmployee(emp.id))}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ) : (
                <tr key={emp.id}>
                  <td>{updatedData.id}</td>
                  <td><Form.Control name='name' value={updatedData.name} onChange={handleChange} /></td>
                  <td><Form.Control name='email' value={updatedData.email} onChange={handleChange} /></td>
                  <td><Form.Control name='contact' value={updatedData.contact} onChange={handleChange} /></td>
                  <td><Form.Control name='address' value={updatedData.address} onChange={handleChange} /></td>
                  <td><Form.Control name='department' value={updatedData.department} onChange={handleChange} /></td>
                  <td>
                    <Form.Select name='gender' value={updatedData.gender} onChange={handleChange}>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Select>
                  </td>
                  <td><Form.Control type='number' name='age' value={updatedData.age} onChange={handleChange} /></td>
                  <td><Form.Control type='number' name='salary' value={updatedData.salary} onChange={handleChange} /></td>
                  <td><Form.Control type='date' name='joiningDate' value={updatedData.joiningDate} onChange={handleChange} /></td>
                  <td>
                    <Form.Select name='status' value={updatedData.status} onChange={handleChange}>
                      <option value="">Select Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </Form.Select>
                  </td>
                  <td>
                    <Form.Select name='role' value={updatedData.role} onChange={handleChange}>
                      <option value="">Select role</option>
                      <option value="admin">Admin</option>
                      <option value="employee">Employee</option>
                    </Form.Select>
                  </td>
                  <td>
                    <ButtonGroup>
                      <Button variant='success' onClick={() => handleUpdate(emp.id)}>Save</Button>
                      <Button variant='danger' onClick={handleCancel}>Cancel</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default EmployeeTable;
