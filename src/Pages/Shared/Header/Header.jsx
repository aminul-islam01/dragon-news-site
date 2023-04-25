import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <Container className='pt-5'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className=''>Journalism Without Fear or Favour</p>
                <h4>{moment().format("dddd, MMMM D, YYYY")}</h4>
            </div>
        </Container>
    );
};

export default Header;