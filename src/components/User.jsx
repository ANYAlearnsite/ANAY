// Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const User = ({ publicId }) => {
  const navigate = useNavigate();
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
          // console.log("data for the user ", data.data);
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
      <nav className="bg-gradient-to-r from-teal-500 via-light-blue-300 to-violet-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">ANYA</div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Favorit
            </a>
            <a onClick={() => { navigate('/lessonuser'); }} href="#" className="text-white hover:text-gray-300">
  Lessons
</a>

            <div className="flex items-center">
              <img
                onClick={() => {
                  navigate('/Update');
                }}
                src={`https://res.cloudinary.com/dcoxnxv3r/image/upload/${publicId}`}
                alt="User Avatar"
                className="w-8 h-8 rounded-full ml-2"
              /> 
            </div>
          </div>
        </div>
      </nav>
      <div
        className="background bg-cover bg-center h-64 relative"
        style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/6819821.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-light-blue-300 to-violet-500 opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold mb-4">The Importance of Language</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="book">
        <div className="max-w-md mx-auto mt-8 bg-white rounded-md p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Language Book</h2>
          <p className="text-gray-700">
            Explore the fascinating world of languages with our collection of language books. Whether you're a beginner or an advanced learner, there's something for everyone.
          </p>
          {/* Use Link component to navigate to the specified URL */}
          <Link to="https://www.fluentu.com/blog/best-language-learning-books/" target="_blank">
            <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
