import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, FloatingLabel, Form, Row, Col } from 'react-bootstrap';
import '../App.css';
import { useDispatch } from 'react-redux';
import { AddEmployee } from '../Redux/Actions/EmployeeAction';

function EmployeeForm() {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const response = dispatch(AddEmployee(data));
        console.log(response);
        
        reset();
    };

    return (
        <div className='EmployeeForm'>
            <h1 className='mt-4 ps-3'>Employee Details</h1>
            <Form className='px-3' onSubmit={handleSubmit(onSubmit)}>
                <div className='form'>
                    <Row className="g-3">

                        {/* Name */}
                        <Col lg={3}>
                            <FloatingLabel label="Name">
                                <Form.Control
                                    type='text'
                                    placeholder='Name'
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: { value: 3, message: "Minimum 3 characters" },
                                        pattern: { value: /^[A-Za-z\s]+$/, message: "Only letters allowed" }
                                    })}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.name?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        {/* Email */}
                        <Col lg={3}>
                            <FloatingLabel label="Email">
                                <Form.Control
                                    type='email'
                                    placeholder='Email'
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email"
                                        }
                                    })}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.email?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        {/* Contact */}
                        <Col lg={3}>
                            <FloatingLabel label="Contact Number">
                                <Form.Control
                                    type='text'
                                    placeholder='Contact'
                                    {...register("contact", {
                                        required: "Contact is required",
                                        pattern: {
                                            value: /^\d{10}$/,
                                            message: "Must be 10 digits"
                                        }
                                    })}
                                    isInvalid={!!errors.contact}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.contact?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        {/* Address */}
                        <Col lg={3}>
                            <FloatingLabel label="Address">
                                <Form.Control
                                    type='text'
                                    placeholder='Address'
                                    {...register("address", { required: "Address is required" })}
                                    isInvalid={!!errors.address}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.address?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        {/* Department */}
                        <Col lg={3}>
                            <FloatingLabel label="Department">
                                <Form.Control
                                    type='text'
                                    placeholder='Department'
                                    {...register("department", { required: "Department is required" })}
                                    isInvalid={!!errors.department}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.department?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        {/* Gender */}
                        <Col lg={3}>
                            <FloatingLabel label="Gender">
                                <Form.Select
                                    {...register("gender", { required: "Gender is required" })}
                                    isInvalid={!!errors.gender}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.gender?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        {/* Salary */}
                        <Col lg={3}>
                            <FloatingLabel label="Salary">
                                <Form.Control
                                    type='number'
                                    placeholder='Salary'
                                    {...register("salary", {
                                        required: "Salary is required",
                                        min: { value: 1, message: "Salary must be greater than 0" }
                                    })}
                                    isInvalid={!!errors.salary}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.salary?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        {/* Joining Date */}
                        <Col lg={3}>
                            <FloatingLabel label="Joining Date">
                                <Form.Control
                                    type='date'
                                    placeholder='Joining Date'
                                    {...register("joiningDate", {
                                        required: "Joining date is required"
                                    })}
                                    isInvalid={!!errors.joiningDate}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.joiningDate?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        {/* Age */}
                        <Col lg={3}>
                            <FloatingLabel label="Age">
                                <Form.Control
                                    type='number'
                                    placeholder='Age'
                                    {...register("age", {
                                        required: "Age is required",
                                        min: { value: 18, message: "Minimum age is 18" },
                                        max: { value: 65, message: "Maximum age is 65" }
                                    })}
                                    isInvalid={!!errors.age}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.age?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        {/* Status */}
                        <Col lg={3}>
                            <FloatingLabel label="Status">
                                <Form.Select
                                    {...register("status", { required: "Status is required" })}
                                    isInvalid={!!errors.status}
                                >
                                    <option value="">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.status?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        {/* Role */}
                        <Col lg={3}>
                            <FloatingLabel label="Role">
                                <Form.Select
                                    {...register("role", { required: "Role is required" })}
                                    isInvalid={!!errors.status}
                                >
                                    <option value="">Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="employee">Employee</option>
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.role?.message}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        {/* Submit */}
                        <Col lg={12}>
                            <div className='d-grid mt-3'>
                                <Button type='submit' variant="primary">Add Employee</Button>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Form>
        </div>
    );
}

export default EmployeeForm;
