import React, {  } from "react";
import { Button, Form, InputGroup, Container, Row, Col} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import { message } from "antd";
import axios from "axios";

function SignUp() {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) =>{
        const {repassword,checkbox, ...filterdata} = data;
        console.log(filterdata);

        axios.post("http://localhost:8080/auth/register",filterdata)
            .then(response=>{
                message.success("User registered! Please Sign in");
                console.log(response.data);
                navigate("/");
                reset();
            })
            .catch(error =>{
                console.log(error);                
                message.error(error.response.data)
            })
    }


    return (
        <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4} className="p-3 p-md-4 bg-white shadow rounded">
                    <h1 className="text-center mb-4">Sign Up</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        {/* Name */}
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                {...register("name", { required: "Name is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {/* Email */}
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="signup-email">Email</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    id="signup-email"
                                    placeholder="Enter Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, message: "Invalid email address" },
                                        // validate: value => !apidata.some(e => e.email === value) || "Email already exists"
                                    })}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email?.message}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        {/* Password */}
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="signup-pass">Password</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    id="signup-pass"
                                    placeholder="Enter Password"
                                    {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password?.message}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        {/* Confirm Password */}
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="signup-re-pass">Confirm Password</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    id="signup-re-pass"
                                    placeholder="Re-Enter Password"
                                    {...register("repassword", { required: "Confirm your password", validate: value => value === watch("password") || "Passwords do not match" })}
                                    isInvalid={!!errors.repassword}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.repassword?.message}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        {/* Select Role */}
                        <Form.Group controlId="role" className="mb-3">
                            <Form.Label className="">Role</Form.Label>
                            <Form.Select
                            {...register("role", { required: "Role is required" })}
                            defaultValue=""
                            >
                            <option value="" disabled>
                                Select a role
                            </option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                            </Form.Select>
                            {errors.role && <p className="text-danger">{errors.role.message}</p>}
                        </Form.Group>

                        {/* Terms and Conditions */}
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="I agree to terms and conditions"
                                {...register("checkbox", { required: "You must accept terms" })}
                                isInvalid={!!errors.checkbox}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.checkbox?.message}
                            </Form.Control.Feedback>
                        </Form.Group>


                        {/* Signup Button */}
                        <div className="text-center mb-3">
                            <Button className="w-100" variant="primary" type="submit">Sign Up</Button>
                        </div>

                        <div className="text-center">
                            <span className="opacity-75">Already have an account? </span>
                            <Link to="/">Sign In</Link>
                        </div>
                        

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;
