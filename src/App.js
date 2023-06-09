import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import NavbarComponent from './Components/Navbar/Navbar';
import CreateUser from './Components/Pages/CreateUser';
import EditUser from './Components/Pages/EditUser';
import Profile from './Components/Pages/Profile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path='/create' Component={CreateUser} />
          <Route path='/edit/:id' Component={EditUser} />
          <Route path='/profile/:id' Component={Profile} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
