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
        setLessons(results.data);
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
                  <span className="font-semibold">ID: {e.idlessons}</span> 
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Category: {e.category}</span> 
                  <iframe
                  width="325"
                  height="250"
                  src={
                    "https://www.youtube.com/embed/" +
                    e.urlvid +
                    "?enablejsapi=1"
                  }
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
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