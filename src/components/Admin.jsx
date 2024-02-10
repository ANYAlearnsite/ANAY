import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBaruser from './NavBaruser';
import { jwtDecode } from 'jwt-decode';
import Fotter from './Fotter';
import Stat from './stat';

const Admin = () => {
  const token = localStorage.getItem('token');

  const [userInfo, setUserInfo] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3600/getusers`, {
        headers: {
          Autho: token,
        },
      })
      .then((data) => {
        // console.log("data for the admin ", data.data);
        setData(data.data);
      })
      .then(() => {
        setUserInfo(jwtDecode(token).user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavBaruser />

      {/* Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="bg-blue-100 w-64 flex flex-col">
          <ul className="sidebar-nav mt-4">
            <li className="text-gray-800 font-semibold mb-4">Dashboard</li>
            <li>
              <Link to="/userslist" className="text-gray-800 hover:text-blue-500 block">
                Users
              </Link>
            </li>
            <li>
              <Link to="/lessonslist" className="text-gray-800 hover:text-blue-500 block">
                Lessons
              </Link>
            </li>
          </ul>
        </div>

        {/* Stat Component */}
        <div className="flex-1 bg-gray-200 flex items-center justify-center">
          <Stat />
        </div>
      </div>
      {/* <Fotter /> */}

    </div>
  );
};

export default Admin;