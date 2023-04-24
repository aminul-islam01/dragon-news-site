import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h5 className='mb-4 fw-bold'>Login With</h5>
            <Button className='w-100 mb-3' variant="outline-info"> <FaGoogle /> Login With Google</Button>
            <Button className='w-100 mb-3' variant="outline-dark"> <FaGithub /> Login With Github</Button>
            <div className='mt-3 mb-2'>
                <h4 className='mb-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='p-3'> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='p-3'> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='p-3'> <FaInstagram /> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;