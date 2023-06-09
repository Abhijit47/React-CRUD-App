import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardSubtitle, CardTitle } from 'reactstrap';
import { HiUserCircle } from "react-icons/hi2";

const Profile = () => {
  const [user, setUser] = useState([]);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

  // eslint-disable-next-line
  const navigate = useNavigate();

  const url = `https://6481d1b329fa1c5c503223d9.mockapi.io/users`;

  // here i have to call the api with the corresponding id
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${url}/${id}`);
        setUser(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [url, id]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className='d-flex flex-column justify-content-center mt-3 align-items-center'>
      <div className='row col-lg-7 col-md-8 col-sm-8 col-10'>
        <Card className="card mb-3 shadow-sm" >
          <div className="row g-0 justify-content-center align-items-center">
            <div className=" col-md-4 col-sm-5 col-4 ">
              <div className='col-lg-10 align-items-center'>
                <HiUserCircle className='w-100 h-100' />
              </div>
            </div>
            <div className="col-md-8">
              <CardBody className="card-body d-flex flex-column align-items-lg-start align-items-md-start align-items-sm-center align-items-center gap-lg-3 gap-md-2 gap-sm-2 gap-2">
                <CardTitle tag={"h5"} className="card-title mb-2">
                  Name:
                  <span className=''>{user.name}</span>
                </CardTitle>
                <CardSubtitle tag={"h6"} className="card-text mb-2">
                  Email:
                  <span className='text-primary ms-2 fs-6'>{user.email}</span>
                </CardSubtitle>
                <CardSubtitle tag={"h6"} className="card-text mb-2">
                  Department:
                  <span className='ms-2 display-3 fs-6'>{user.department}</span>
                </CardSubtitle>
                <CardSubtitle tag={"h6"} className="card-text">
                  Country:
                  <span className='ms-2 display-3 fs-6'>{user.country}</span>
                </CardSubtitle>

                <CardFooter className="card-text mb-0 mt-3 text-end align-self-md-stretch align-self-stretch">
                  <small className="text-muted  mb-0">Last updated 3 mins ago</small>
                </CardFooter>
              </CardBody>
            </div>
          </div>
        </Card>


      </div>
      <Button color='dark' outline className='align-items-center' onClick={handleClick}>
        Go back!
      </Button>
    </div>
  );
};

export default Profile;