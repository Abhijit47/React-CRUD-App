import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import { HiEye, HiUserCircle, HiTrash, HiPencil } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const url = `https://6481d1b329fa1c5c503223d9.mockapi.io/users`;
const Dashboard = () => {
  // eslint-disable-next-line
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    getData();
  }, []);

  // eslint-disable-next-line
  const deleteUser = async () => {
    const res = await axios.delete(`${url}/:id`);
    setData(res.data);
    getData();
  };


  return (
    <>
      <h1 className='text-center border border-1 rounded-2 w-25 m-auto mt-2'>Dashboard</h1>
      {isLoading

        ? <div className='text-center mt-3'>
          <Spinner color="primary">
            Loading...
          </Spinner>
        </div>
        : <div className='mt-4 d-flex justify-content-center'>
          <div className='row col col-lg-4'>
            <ListGroup>
              <ListGroupItem className='d-flex justify-content-between align-items-center' >
                <h2>Users</h2>
                <Button color="primary">Add User +</Button>
              </ListGroupItem>
              {data.map((user, i) => {
                return (
                  <ListGroupItem className='d-flex align-items-center gap-2' key={i}>
                    <HiUserCircle className='fs-2' />
                    <div className='v-stack'>
                      <p className="mb-0 pb-0">{user.name}</p>
                      <p className="mb-0 pb-0">{user.email}</p>
                    </div>
                    <div className='hstack gap-2 ms-auto'>
                      <Link to="/edit">
                        <HiPencil className='fs-5 text-warning' />
                      </Link>
                      <Link to="/profile">
                        <HiEye className='fs-5 text-primary' />
                      </Link>
                      <HiTrash className='fs-5 text-danger' />
                    </div>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </div>
        </div>
      }
    </>
  );
};

export default Dashboard;