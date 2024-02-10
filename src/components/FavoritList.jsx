import React, { useState, useEffect } from "react";
import axios from "axios";
import Fotter from "./Fotter.jsx";
import NavBar from "./NavBar.jsx";
import { jwtDecode } from "jwt-decode";
const FavoritList = () => {
  const token = localStorage.getItem("token");
  const dectoken = jwtDecode(token);
  const [lessons, setLessons] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3600/user/get/fav/${dectoken.user[0].iduser}`, {
        headers: {
          Autho: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLessons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  const deleteLesson = (obj) => {
    axios.delete(`http://localhost:3600/user/delete`,{
        headers:{
          Autho : token
        },
        data : obj
      })
      .then(() => {
        console.log("deleted fav");
        setRefresh(!refresh);
      })
      .catch((err) => console.log(err));
  };
  console.log(lessons);

  return (
    <div className="bg-indigo-100">
      <NavBar />
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 bg-indigo-100 rounded-lg p-4 mt-8 mb-4 font-blod uppercase ">
          Favorite Lessons
        </h1>
        <nav className=" shadow-md rounded-lg px-4 py-2 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lessons.map((e) => (
              <div className=" p-4 rounded-md">
                <p className="font-semibold">Lesson ID: {e.idlessons}</p>
                <p>Category: {e.category}</p>
                <video src={e.urlvid} controls width="300" height="200"></video>
                <button
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg mt-2"
                  onClick={() => {
                    const obj = {
                      user: dectoken.user[0].iduser,
                      lesson: e.idlessons,
                    };
                    deleteLesson(obj);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </nav>
      </div>
      <Fotter />
    </div>
  );
};

export default FavoritList;
