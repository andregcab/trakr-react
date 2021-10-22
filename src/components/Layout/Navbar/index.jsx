import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import env from 'environment';
import Avatar from '@mui/material/Avatar';
import { CURRENT_USER } from '../../../fakedata/data';

const NavBar = () => {
  const { name } = CURRENT_USER;
  const firstName = name.split(' ')[0];

  return (
    <Navbar className="main-navbar flex-nowrap">
      <Navbar.Brand as={Link} to={env.ROUTER_BASE_NAME}>
        trakr
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="d-flex align-items-center">
          <Avatar sx={{ bgcolor: '#91b194' }}>{firstName[0]}</Avatar>
          <span className="ms-3 username">{`Hi, ${firstName}`}</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
