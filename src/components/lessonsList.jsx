import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBaruser from "./NavBaruser";
import Fotter from "./Fotter";
const LessonsList = () => {
  const [datalessons, setdatalessons] = useState([]);
  const [category, setcategory] = useState("");
  const [refresh, setrefresh] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3600/admin/alllessons")
      .then((results) => {
        console.log("Lessons fetched");
        setdatalessons(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);
  console.log("sss", datalessons);

  const haendlDeleteLesson = (id) => {
    axios
      .delete(`http://localhost:3600/admin/delete/${id}`)
      .then(() => {
        console.log("Lesson deleted");
        axios
          .get("http://localhost:3600/admin/alllessons")
          .then((results) => {
            setdatalessons(results.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavBaruser />
      <div className="flex h-screen">
        <div className="bg-blue-100 w-64 py-4 px-6">
          <ul className="sidebar-nav">
            <Link to="/admin">
              <li className="text-gray-800 font-semibold mb-4">Dashboard</li>
            </Link>{" "}
            <li>
              <Link
                to="/userslist"
                className="text-gray-800 hover:text-blue-500"
              >
                Users
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/lessonslist"
                className="text-gray-800 hover:text-blue-500"
              >
                Lessons
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/addlesson"
                className="text-gray-800 hover:text-blue-500"
              >
                add lesson
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex justify-center mb-8">
            <div className="flex">
              <input
                type="text"
                placeholder="Search by category"
                onChange={(e) => setcategory(e.target.value)}
                className="border rounded-md py-2 px-4 mr-4"
              />
              <Link to={`/searchLessons/${category}`}>
                {" "}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Search
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {datalessons.map((lesson) => (
              <div
                key={lesson.idlessons}
                className="bg-white rounded-md shadow-md p-4 relative"
              >
                <div className="mb-4">
                  <span className="font-semibold">ID:</span> {lesson.idlessons}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Category:</span>{" "}
                  {lesson.category}
                </div>
                <div className="mb-4"></div>
                <iframe
                  width="325"
                  height="250"
                  src={
                    "https://www.youtube.com/embed/" +
                    lesson.urlvid +
                    "?enablejsapi=1"
                  }
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <div className="flex justify-end mt-4">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2"
                    onClick={() => {
                      haendlDeleteLesson(lesson.idlessons);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={`/updatelesson/${lesson.idlessons}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default LessonsList;
