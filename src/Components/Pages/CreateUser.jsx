import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';

const CreateUser = () => {
  const [createLoading, setCreateLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    department: "",
    country: ""
  });

  const navigate = useNavigate();

  // input value taking from user when the onChange event trigger
  const handleUserInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const url = `https://6481d1b329fa1c5c503223d9.mockapi.io/users`;

  // Handle the form submission
  const createUser = async () => {
    setCreateLoading(true);
    try {
      // post user data with payload request
      await axios.post(url, userData);

      setCreateLoading(false);

      // navigate to homepage
      navigate("/");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className='text-center navbar-text fs-2 border border-bottom-1'>Add one User</h1>
      <div className='p-2 row col-lg-4 col-md-7 col-sm-9 col-10 m-auto gx-0'>
        <Form>
          <FormGroup>
            <Label for="name">Username</Label>
            <Input
              id="name"
              name="name"
              placeholder="Jhon Doe"
              type="text"
              value={userData.name}
              onChange={handleUserInput} />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="jhon@gmail.com"
              type="email"
              value={userData.email}
              onChange={handleUserInput} />
          </FormGroup>

          <FormGroup>
            <Label for="department">Department</Label>
            <Input
              id="department"
              name="department"
              placeholder="books"
              type="text"
              value={userData.department}
              onChange={handleUserInput} />
          </FormGroup>

          <FormGroup>
            <Label for="country">Country</Label>
            <Input
              id="country"
              name="country"
              placeholder="New york"
              type="text"
              value={userData.country}
              onChange={handleUserInput} />
          </FormGroup>

          {
            createLoading
              ? (
                <>
                  <Button color='primary'>
                    <Spinner size={"sm"} color="me-1">
                      Loading...
                    </Spinner>
                    <span>Creating</span>
                  </Button>
                </>
              ) : (
                <>
                  <Button color='primary' onClick={createUser}>
                    Create
                  </Button>
                </>
              )
          }
        </Form>
      </div>
    </>
  );
};

export default CreateUser;