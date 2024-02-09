import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBaruser from './NavBaruser';
const Admin = () => {
    

  return (
    <div>
      <NavBaruser/>
      <div className="bg-gray-200">
    <div className="bg-blue-100 w-64 py-4 px-6 h-screen">
      <ul className="sidebar-nav">
        <li className="text-gray-800 font-semibold mb-4">Dashboard</li>
        <li>
          <Link to="/userslist" className="text-gray-800 hover:text-blue-500">
            Users
          </Link>
        </li>
        <li>
          <Link to="/lessonslist" className="text-gray-800 hover:text-blue-500">
            Lessons
          </Link>
        </li>
      </ul>
    </div>
  </div>
    </div>
    );
};

export default Admin;