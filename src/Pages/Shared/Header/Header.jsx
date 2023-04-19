import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import profile from '../../../assets/qZone1.png'
import Image from 'react-bootstrap/Image';
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='py-5'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className=''>Journalism Without Fear or Favour</p>
                <h4>{moment().format("dddd, MMMM D, YYYY")}</h4>
            </div>
            <div className='d-flex bg-secondary bg-opacity-25 p-2'>
                <Button className='rounded-0' variant="danger">Danger</Button>
                <Marquee speed={100} gradient={false}>
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.....
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-2'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <Image className='border border-2 border-dark' style={{ width: '40px', height: '40px' }} src={profile}  roundedCircle />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                               <Button variant='dark' className='rounded-0 px-4 fw-bold'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;