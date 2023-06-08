import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import NavbarComponent from './Components/Navbar/Navbar';
import Create from './Components/Pages/CreateUser';
import Edit from './Components/Pages/EditUser';
import Update from './Components/Pages/UpdateUser';
import Profile from './Components/Pages/Profile';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
