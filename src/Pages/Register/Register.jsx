import React, { useContext, useState } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Button, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../Providers/AuthProviders';

const Register = () => {
    const { createUser, emailVerified, proFileUpdate } = useContext(UserContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [accept, setAccept] = useState(false);

    const handleRegister = (event) => {
        setError('');
        setSuccess('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const registerUser = result.user;

                proFileUpdate(registerUser, name, photo);

                emailVerified()
                    .then(() => {
                        alert('check your email and verification this email')
                    });
                setSuccess('user has been create successfully');
                form.reset();
                console.log(registerUser)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleAccept = event => {
        const checked = event.target.checked;
        setAccept(checked);
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
                        <Form.Control type='text' name='name' placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                        <Form.Control type='file' name='photo' placeholder="Select your photo" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Email</Form.Label>
                        <Form.Control type='email' name='email' placeholder="Enter your email address" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control type='password' name='password' placeholder="Enter your password" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" onClick={handleAccept} label="Accept Term & Conditions" />
                    </Form.Group>
                    <p className='text-danger mt-1'>{error}</p>
                    <p className='text-success'>{success}</p>
                    <Button className='w-100' variant="dark" type="submit" disabled={!accept}>Register</Button>
                </Form>
            </Row>
        </div>
    );
};

export default Register;