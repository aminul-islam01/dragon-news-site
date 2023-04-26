import React, { useContext } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Button, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../Providers/AuthProviders';

const Register = () => {
    const { createUser, emailVerified } = useContext(UserContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                loggedUser.displayName = name;

                emailVerified()
                    .then(() => {
                        alert('check your email and verification this email')
                    });

                console.log(loggedUser)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div className='bg-light'>
            <NavigationBar></NavigationBar>
            <Row xs={1} md={2} lg={3}>
                <Form onSubmit={handleRegister} className='mx-auto mt-5 rounded shadow p-5' style={{ background: "white" }}>
                    <h4 className='fw-bold text-center py-3'>Register your account</h4>
                    <hr />
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Your Name</Form.Label>
                        <Form.Control type='text' name='name' placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                        <Form.Control type='image_url' name='image' placeholder="Select your photo" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Email</Form.Label>
                        <Form.Control type='email' name='email' placeholder="Enter your email address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control type='password' name='password' placeholder="Enter your password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Accept Term & Conditions" />
                    </Form.Group>
                    <Button className='w-100' variant="dark" type="submit">Register</Button>
                </Form>
            </Row>
        </div>
    );
};

export default Register;