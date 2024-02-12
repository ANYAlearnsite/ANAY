import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import SearchLesson from "./SearchLesson";
import { jwtDecode } from "jwt-decode";
import Fotter from "./Fotter";
const AllLessons = () => {
  const [lessons, setLessons] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const token = localStorage.getItem("token");
  const dectoken = jwtDecode(token);
  console.log();
  useEffect(() => {
    axios
      .get("http://localhost:3600/user/getAll", {
        headers: {
          Autho: token,
        },
      })
      .then((res) => {
        setLessons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);
  console.log("lessons", lessons);

  const sear = (v) => {
    setLessons(v);
  };

  const addFavorite = (obj) => {
    axios.post("http://localhost:3600/user/add",obj,{
        headers :{
          Autho : token
        }
      })
      .then(() => {
        console.log("add fav");
        setRefresh(!refresh);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-indigo-100">
      <NavBar />
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl text-bold text-center text-indigo-600 bg-indigo-100 rounded-lg p-4 mt-8 mb-4 font-bold uppercase italic">
          All Lessons
        </h1>
        <div className="flex justify-between items-center mb-4 border-b-2 border-indigo-600 ">
          <Link to="/favoritList">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-gray-50 rounded-xl flex items-center gap-2">
              Favorite
            </button>
          </Link>
          <SearchLesson sear={sear} />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8">
      <nav className=" shadow-md rounded-lg px-4 py-2 md:px-8 bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map?.((e) => (
          <div className="p-4 rounded-md bg-indigo-300 opacity-100">
            <p className="font-semibold text-lg">Lesson ID: {e.idlessons}</p>
            <p className="text-gray-600">Category: {e.category}</p>
            <video src={e.urlvid} controls width="300" height="200"></video>
            <button
              className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-gray-50 rounded-xl flex items-center gap-2"
              onClick={() => {
                const obj = {
                  user: dectoken.user[0].iduser,
                  lesson: e.idlessons,
                };
                addFavorite(obj);
              }}
            >
              ⭐️ Add to Favorite
            </button>
          </div>
        ))}
      </div>
      </nav>
      </div>
      <Fotter/>
    </div>
  );
};

export default AllLessons;
