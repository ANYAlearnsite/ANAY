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
      .get(`http://localhost:3600/admin/allusers`, {
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
    <div>
     <NavBaruser/>
    <div className="flex h-screen">
      <div className="bg-cyan-600 w-64 py-4 px-6">
        <ul className="sidebar-nav">
          <Link to="/admin"><li className="text-gray-800 font-semibold mb-4">Dashboard</li></Link>
          <li>
            <Link to="/userslist" className="text-gray-800 hover:text-blue-500">
              Users
            </Link>
          </li>
         <br />
          <li>
            <Link to="/lessonslist" className="text-gray-800 hover:text-blue-500">
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
      <Fotter />

    </div>
  );
};

export default Admin;