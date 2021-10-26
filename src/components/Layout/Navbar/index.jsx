import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import env from 'environment';
import Avatar from '@mui/material/Avatar';
import { useQuery } from '@apollo/client';
import { USER } from 'graphql/queries';

const NavBar = () => {
  const { loading, data, error } = useQuery(USER, { variables: { id: '1' } });

  if (loading || !data) return '';
  console.log('data', data);
  console.log('error', error);
  const { firstName } = data.user;

  return (
    <Navbar className="main-navbar flex-nowrap">
      <Navbar.Brand as={Link} to={env.ROUTER_BASE_NAME}>
        trakr
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="d-flex align-items-center">
          <Avatar className="user-avatar" sx={{ bgcolor: '#91b194' }}>
            {firstName[0].toUpperCase()}
          </Avatar>
          <span className="ms-3 username">{`Hi, ${firstName}`}</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
