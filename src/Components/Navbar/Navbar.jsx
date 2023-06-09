import React from 'react';

import { Navbar } from 'reactstrap';
import { BsDiscord } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar
      className="position-sticky top-0 z-1 shadow-sm"
      color="dark"
      dark
    >

      <Link to="/" className='text-decoration-none text-light p-3'>
        <div className='d-flex align-items-center'>
          <BsDiscord className='me-2 fs-3 mb-0' />
          <h3 className='fs-4 mb-0'>React CRUD App</h3>
        </div>
      </Link>

    </Navbar>
  );
};

export default NavbarComponent;