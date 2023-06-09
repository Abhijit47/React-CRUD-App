import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';

const EditUser = () => {
  const [isEditLoading, setIsEditLoading] = useState(false);
  const [editUser, setEditUser] = useState({
    name: "",
    email: "",
    department: "",
    country: ""
  });
  let { id } = useParams();
  const navigate = useNavigate();

  const url = `https://6481d1b329fa1c5c503223d9.mockapi.io/users`;

  // write a logic to get one user data
  useEffect(() => {
    const getOneUser = async () => {
      try {
        const res = await axios.get(`${url}/${id}`);
        setEditUser({ ...res.data });
      } catch (error) {
        console.log(error);
      }
    };
    getOneUser();

  }, [id, url]);

  // console.log(editUser);

  // logic for update the data
  const editOneUser = async () => {
    const url = `https://6481d1b329fa1c5c503223d9.mockapi.io/users/${id}`;
    setIsEditLoading(true);
    try {
      await axios.put(url, editUser);
      setIsEditLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // input handler
  const handleEditUser = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className='text-center navbar-text fs-2 border border-bottom-1'>Edit User</h1>
      <div className='p-2 row col-lg-4 col-md-7 col-sm-9 col-10 m-auto gx-0'>
        <Form>
          <FormGroup>
            <Label for="name">Username</Label>
            <Input
              id="name"
              name="name"
              placeholder="Jhon Doe"
              type="text"
              value={editUser.name}
              onChange={handleEditUser} />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="jhon@gmail.com"
              type="email"
              value={editUser.email}
              onChange={handleEditUser} />
          </FormGroup>

          <FormGroup>
            <Label for="department">Department</Label>
            <Input
              id="department"
              name="department"
              placeholder="books"
              type="text"
              value={editUser.department}
              onChange={handleEditUser} />
          </FormGroup>

          <FormGroup>
            <Label for="country">Country</Label>
            <Input
              id="country"
              name="country"
              placeholder="New york"
              type="text"
              value={editUser.country}
              onChange={handleEditUser} />
          </FormGroup>
          {isEditLoading
            ?
            <Button color='warning'>
              <Spinner color='dark' size={"sm"} className='me-1'>
                Loading...
              </Spinner>
              <span>Updating</span>
            </Button>
            :
            <Button color='warning' onClick={editOneUser}>
              Update
            </Button>
          }
        </Form>
      </div>
    </>
  );
};

export default EditUser;