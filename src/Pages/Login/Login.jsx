import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-light' style={{height:"100vh"}}>
            <NavigationBar></NavigationBar>
            <Row xs={1} md={2} lg={3}>
                <div className='mx-auto mt-5 rounded shadow p-5' style={{background:"white"}}>
                    <h4 className='fw-bold text-center py-3'>Login your account</h4>
                    <hr />
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type='email' name='email' placeholder="Enter your email address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control type='password' name='password' placeholder="Enter your password" />
                    </Form.Group>
                    
                    <Button className='w-100' variant="dark" type="submit">Login</Button>
                    <p className='text-center mt-3'>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </Row>
        </div>
    );
};

export default Login;