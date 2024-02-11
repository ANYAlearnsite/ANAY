import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import NavBaruser from "./NavBaruser";

const SearchLessons = () => {
  const { category } = useParams();
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3600/admin/${category}`)
      .then((results) => {
        setLessons(results.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div>
      <NavBaruser />
      <div className="flex h-screen">
        <div className="bg-blue-100 w-64 py-4 px-6">
          <ul className="sidebar-nav">
            <li className="text-gray-800 font-semibold mb-4">Dashboard</li>
            <li>
              <a href="/userslist" className="text-gray-800 hover:text-blue-500">Users</a>
            </li>
            <li>
              <a href="/lessonslist" className="text-gray-800 hover:text-blue-500">Lessons</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {lessons.map((e) => (
              <div key={e.idlessons} className="bg-white rounded-md shadow-md p-4 relative">
                <div className="mb-4">
                  <span className="font-semibold">ID:</span> {e.idlessons}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Category:</span> {e.category}
                  <video width="300" height="200" controls className="w-full rounded-t-lg">
            <source src={e.urlvid} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLessons;