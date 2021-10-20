import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import env from 'environment';
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from './utils';
import { CURRENT_USER } from '../../../fakedata/data';

const NavBar = () => {
  const { name } = CURRENT_USER;

  return (
    <Navbar className="main-navbar flex-nowrap">
      <Navbar.Brand as={Link} to={env.ROUTER_BASE_NAME}>
        trakr
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="d-flex align-items-center">
          <Avatar {...stringAvatar(name)} />
          <span className="ms-2 username">{name}</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
