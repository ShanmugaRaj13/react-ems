import React, { useEffect } from "react";
import { Button, Form, InputGroup, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import '../App.css';
import { LoginUser } from "../Redux/Actions/LoginActions";

function SignIn() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user =useSelector(state => state.login.user);    

    const onSubmit = (data) => {
        dispatch(LoginUser(data));
    };
    useEffect(()=>{
        if(user){
            reset();
            navigate(user.role === "admin" ? "/admin" : "/employee");
        }
    },[dispatch,reset,navigate,user]);


    return (
        <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4} className="p-4 p-md-5 bg-white shadow rounded">
                    <h1 className="text-center mb-4">Welcome Back!</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        {/* Email Field */}
                        <Form.Group className={`inputs-height ${errors?.email ? 'mb-1' : 'mb-3'}`} >
                            <Form.Label htmlFor="signin-email">Email</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    id="signin-email"
                                    placeholder="Enter Email"
                                    {...register("email", { 
                                        required: "Email is required", 
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email?.message}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        {/* Password Field */}
                        <Form.Group className={`inputs-height ${errors?.password ? 'mb-1' : 'mb-3'}`} >
                            <Form.Label htmlFor="signin-pass">Password</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    id="signin-pass"
                                    placeholder="Enter Password"
                                    {...register("password", { 
                                        required: "Password is required", 
                                        minLength: { value: 6, message: "Password must be at least 6 characters" }
                                    })}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password?.message}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        {/* Checkbox */}
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

                        {/* Submit Button */}
                        <div className="text-center mb-3">
                            <Button className="w-100" variant="primary" type="submit">
                                Sign In
                            </Button>
                        </div>

                        {/* Signup Link */}
                        <div className="text-center">
                            <span className="opacity-75">Don't have an account? </span>
                            <Link to="/register">Sign Up</Link>
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;
