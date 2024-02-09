import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBaruser from "./NavBaruser";
const LessonsList = () => {
  const [datalessons, setdatalessons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
const [refresh,setrefresh]=useState(false)
  useEffect(() => {
    axios.get('http://localhost:3600/alllessons')
      .then((results) => {
        console.log("Lessons fetched");
        setdatalessons(results.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);


  const haendlDeleteLesson = (id) => {
    axios.delete(`http://localhost:3600/alllessons/${id}`)
      .then(() => {
        console.log("Lesson deleted");
        // Refresh the lessons list after deletion
        axios.get('http://localhost:3600/alllessons')
          .then((results) => {
            setdatalessons(results.data[0]);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
console.log(datalessons);
  return (
    <div>
      <NavBaruser/>
      <div className="flex h-screen">
      <div className="bg-blue-100 w-64 py-4 px-6">
        <ul className="sidebar-nav">
        <Link to="/"><li className="text-gray-800 font-semibold mb-4">Dashboard</li></Link>          <li>
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

      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-center mb-8">
          <div className="flex">
            <input
              type="text"
              placeholder="Search by category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-md py-2 px-4 mr-4"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {datalessons.map((lesson) => (
            <div key={lesson.idlessons} className="bg-white rounded-md shadow-md p-4 relative">
              <div className="mb-4">
                <span className="font-semibold">ID:</span> {lesson.idlessons}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Category:</span> {lesson.category}
              </div>
              <div className="mb-4">
                <span className="font-semibold">User ID:</span> {lesson.user_iduser}
              </div>
              
              <video src={lesson.urlvid} controls width="300" height="200"></video>

              <div className="flex justify-end mt-4">
                <button
                 
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2"
                onClick={()=>{
                    axios.delete(`http://localhost:3600/delete/${lesson.idlessons}`).then(()=>{
                        console.log("lesson deleted");
                        setrefresh(!refresh)
                    })
                }}
                >
                  Delete
                </button>
                <Link to={`/updatelesson/${lesson.idlessons}`}>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default LessonsList;