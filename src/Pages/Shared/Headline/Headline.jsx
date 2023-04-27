import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Headline = () => {
    return (
        <Container className='d-flex bg-secondary bg-opacity-25 p-2'>
            <Button className='rounded-0' variant="danger">Latest</Button>
            <Marquee speed={100} gradient={false}>
                I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.....
            </Marquee>
        </Container>
    );
};

export default Headline;