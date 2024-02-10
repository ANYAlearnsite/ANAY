
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBaruser from './NavBaruser.jsx';
import { jwtDecode } from "jwt-decode";
import Fotter from "./Fotter";
   
  const Admin = () => {
    const token = localStorage.getItem("token");
    const [userInfo, setUserInfo] = useState("");
    const [data, setData] = useState("");

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
    console.log("you loged info ", userInfo);
    console.log(data);
    return (
      <div>
        <NavBaruser />
        <div className="bg-gray-200">
          <div className="bg-blue-100 w-64 py-4 px-6 h-screen">
            <ul className="sidebar-nav">
              <li className="text-gray-800 font-semibold mb-4">Dashboard</li>
              <li>
                <Link
                  to="/userslist"
                  className="text-gray-800 hover:text-blue-500"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="/lessonslist"
                  className="text-gray-800 hover:text-blue-500"
                >
                  Lessons
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Fotter/>
      </div>
    );
  };

export default Admin;

