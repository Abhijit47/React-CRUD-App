import React from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';
import { BsDiscord } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar
      className="position-sticky top-0 z-1 shadow-sm"
      color="dark"
      dark
    >
      <NavbarBrand to="/">
        <Link to="/" className='text-decoration-none text-light'>
          <BsDiscord className='me-2' />
          React CRUD App
        </Link>
      </NavbarBrand>
    </Navbar>
  );
};

export default NavbarComponent;