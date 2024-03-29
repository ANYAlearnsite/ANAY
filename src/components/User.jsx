// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const User = ({ publicId,setLessondata}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const decToken = jwtDecode(token);
  const [userInfo, setUserInfo] = useState(""); 
  const [data, setData] = useState("");

  useEffect(() => {
   const getuserinfo= axios
      .get(`http://localhost:3600/getusers`, {
        headers: {
          Autho: token,
        },

      })
      .then((data) => {

        setData(data.data);
      })
      .then(() => {
        setUserInfo(jwtDecode(token).user);
      })
      .catch((err) => {
        console.log(err);
      });
      const getLesson= axios.get("http://localhost:3600/user/getAll").then((res)=>{
        console.log(res.data,"this is the vedio");
        setLessondata(res.data)
      }).catch((err)=>{console.log(err);})   
      

  },[]);

  const logout =()=>{
    localStorage.clear()
    navigate('/')
}
    
  return (
    <div>
      <nav className="bg-gradient-to-r from-teal-500 via-light-blue-300 to-violet-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">ANYA</div>
          <div className="flex items-center space-x-4">
            <a   onClick={()=>{
              navigate('/test')
            }} className="text-white hover:text-gray-300" >
             
            quiz</a>
            <a onClick={() => {      navigate('/lessonfUser'); }} href="#" className="text-white hover:text-gray-300">
              Lessons
            </a>
             <a onClick={() => { navigate('/user/alllessens') }} className="text-white hover:text-gray-300">
              My lessons
            </a>
            <a onClick={() => { logout(); }} className="text-white hover:text-gray-300">
              Log out
            </a>
           

            <div className="flex items-center">
              <img
                onClick={() => { navigate('/Update'); }}
                src={publicId.length > 0 ? publicId : decToken.user[0].image}
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
