import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import { HiEye, HiUserCircle, HiTrash, HiPencil } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const url = `https://6481d1b329fa1c5c503223d9.mockapi.io/users`;
const Dashboard = () => {
  // eslint-disable-next-line
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  // Get all the users
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

  // eslint-disable-next-line
  const deleteUser = async (userId) => {

    setIsDeleteLoading(true);
    setId(userId);
    try {
      await axios.delete(`${url}/${userId}`);
      getData();
      setIsDeleteLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className='text-center border border-1 rounded-2 mt-2'>Dashboard</h1>
      {
        isLoading
          ? <div className='text-center mt-3'>
            <Spinner color="primary">
              Loading...
            </Spinner>
          </div>
          : <div className='mt-4 d-flex justify-content-center p-3'>
            <div className='row col-lg-5 col-md-9 col-sm-10 col-11 gx-0'>
              <ListGroup>
                <ListGroupItem className='d-flex justify-content-between align-items-center'>
                  <h2 className='fs-4'>Users</h2>
                  <Link to='/create'>
                    <Button color="primary">Add User +</Button>
                  </Link>
                </ListGroupItem>
                {data.length === [].length
                  ? <ListGroupItem>
                    <h1 className='text-center fs-5 mb-0'>Here is no data to view Create One!</h1>
                  </ListGroupItem>
                  : data.map((user, i) => {
                    return (
                      <ListGroupItem className='d-flex align-items-center gap-2' key={i}>
                        <Link to={`/profile/${user.id}`}>
                          <HiUserCircle className='fs-2 text-dark' />
                        </Link>
                        <div className='v-stack'>
                          <p className="mb-0 pb-0">{user.name}</p>
                          <p className="mb-0 pb-0 text-primary">{user.email}</p>
                        </div>
                        <div className='hstack gap-2 ms-auto'>
                          <Button className='bg-light border-0 p-0'>
                            <Link to={`/edit/${user.id}`}>
                              <HiPencil className='fs-5 text-warning' />
                            </Link>
                          </Button>

                          <Button className='bg-light border-0 p-0'>
                            <Link to={`/profile/${user.id}`}>
                              <HiEye className='fs-5 text-primary' />
                            </Link>
                          </Button>

                          <Button className='bg-light border-0 p-0'>
                            {
                              id === user.id && isDeleteLoading
                                ?
                                <Spinner color='danger' size={"sm"} className="me-1">
                                  Loading...
                                </Spinner>
                                :
                                <HiTrash className='fs-5 text-danger' onClick={() => deleteUser(user.id)} />
                            }
                          </Button>
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