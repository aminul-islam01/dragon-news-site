import React, { useContext } from 'react';
import profile from '../../../assets/userLogo.png'
import Image from 'react-bootstrap/Image';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Providers/AuthProviders';

const NavigationBar = () => {
    const {user, logOut} = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-2' sticky='top'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none me-4 text-secondary' to='/'>Home</Link>
                        <Link className='text-decoration-none me-4 text-secondary' to=''>About</Link>
                        <Link className='text-decoration-none me-4 text-secondary' to=''>Career</Link>
                    </Nav>
                    <Nav>
                        {user && <Image className='border border-2 border-dark me-3' style={{ width: '40px', height: '40px' }} src={user.photoURL?(user.photoURL):profile} roundedCircle />}
                        <Button variant='dark' className='rounded-0 px-5 fw-bold'>
                            {user?<Link onClick={logOut} className='text-decoration-none text-light' to="/login">Logout</Link>
                            :
                            <Link className='text-decoration-none text-light' to="/login">Login</Link>
                            }
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;