import React from 'react';
import profile from '../../../assets/qZone1.png'
import Image from 'react-bootstrap/Image';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-2' sticky='top'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/'>Home</Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        <Image className='border border-2 border-dark me-3' style={{ width: '40px', height: '40px' }} src={profile} roundedCircle />
                        <Button variant='dark' className='rounded-0 px-5 fw-bold'>
                            <Link className='text-decoration-none text-light' to="/login">Login</Link>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;